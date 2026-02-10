"use client";

import { useEffect, useRef } from "react";

export default function LiquidCursor() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const gl = canvas.getContext("webgl");
        if (!gl) {
            console.error("WebGL not supported");
            return;
        }

        // Resize canvas
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            gl.viewport(0, 0, canvas.width, canvas.height);
        };
        window.addEventListener("resize", resize);
        resize();

        // Vertex Shader: Pass-through for full screen quad
        const vertShaderSrc = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

        // Fragment Shader: Liquid Rainbow Effect
        const fragShaderSrc = `
      precision mediump float;
      uniform vec2 u_resolution;
      uniform float u_time;
      uniform vec2 u_mouse;

      // Simple noise function
      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

      float snoise(vec2 v) {
        const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy) );
        vec2 x0 = v -   i + dot(i, C.xx);
        vec2 i1;
        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod289(i);
        vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m ;
        m = m*m ;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }

      void main() {
        vec2 st = gl_FragCoord.xy / u_resolution.xy;
        st.x *= u_resolution.x / u_resolution.y;

        // Mouse interaction
        vec2 mouse = u_mouse / u_resolution.xy;
        mouse.x *= u_resolution.x / u_resolution.y;
        
        float dist = distance(st, mouse);
        float mouseEffect = smoothstep(0.4, 0.0, dist);

        // Fluid-like distortion using noise
        float t = u_time * 0.5;
        float noise1 = snoise(vec2(st.x * 2.0 + t, st.y * 2.0 - t));
        float noise2 = snoise(vec2(st.x * 4.0 - t, st.y * 4.0 + t));
        
        // Distort coordinates based on noise and mouse
        vec2 distortedSt = st + vec2(noise1, noise2) * 0.1;
        distortedSt += (st - mouse) * mouseEffect * 0.2; // Push away effect

        // Rainbow Colors
        vec3 color1 = vec3(0.5, 0.0, 0.5); // Purple
        vec3 color2 = vec3(0.0, 0.0, 1.0); // Blue
        vec3 color3 = vec3(0.0, 1.0, 1.0); // Cyan
        
        // Mix colors based on position and time
        float mixVal = snoise(distortedSt * 3.0 + t);
        
        vec3 color = mix(color1, color2, smoothstep(-1.0, 0.0, mixVal));
        color = mix(color, color3, smoothstep(0.0, 1.0, mixVal));
        
        // Add a "liquid" shine
        float shine = smoothstep(0.4, 0.45, snoise(distortedSt * 10.0 + t * 2.0));
        color += shine * 0.1;

        // Darken edges for vignette/focus
        // color *= 1.0 - distance(st, vec2(1.0, 0.5)) * 0.5;
        
        // Final opacity - subtle background
        gl_FragColor = vec4(color * 0.2, 1.0); // kept low opacity (0.2) to not overpower text
      }
    `;

        // Create program
        const createShader = (gl: WebGLRenderingContext, type: number, source: string) => {
            const shader = gl.createShader(type);
            if (!shader) return null;
            gl.shaderSource(shader, source);
            gl.compileShader(shader);
            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                console.error("Shader compile error:", gl.getShaderInfoLog(shader));
                gl.deleteShader(shader);
                return null;
            }
            return shader;
        };

        const vertShader = createShader(gl, gl.VERTEX_SHADER, vertShaderSrc);
        const fragShader = createShader(gl, gl.FRAGMENT_SHADER, fragShaderSrc);
        if (!vertShader || !fragShader) return;

        const program = gl.createProgram();
        if (!program) return;
        gl.attachShader(program, vertShader);
        gl.attachShader(program, fragShader);
        gl.linkProgram(program);

        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            console.error("Program link error:", gl.getProgramInfoLog(program));
            return;
        }
        gl.useProgram(program);

        // Set up quad
        const positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        const positions = [-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

        const positionLoc = gl.getAttribLocation(program, "position");
        gl.enableVertexAttribArray(positionLoc);
        gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);

        // Uniform locations
        const timeLoc = gl.getUniformLocation(program, "u_time");
        const resolutionLoc = gl.getUniformLocation(program, "u_resolution");
        const mouseLoc = gl.getUniformLocation(program, "u_mouse");

        // Animation Loop
        let mouseX = 0;
        let mouseY = 0;
        let targetMouseX = 0;
        let targetMouseY = 0;

        const handleMouseMove = (e: MouseEvent) => {
            targetMouseX = e.clientX;
            targetMouseY = window.innerHeight - e.clientY; // WebGL Y is inverted
        };
        window.addEventListener("mousemove", handleMouseMove);

        const render = (time: number) => {
            // Smooth mouse movement
            mouseX += (targetMouseX - mouseX) * 0.1;
            mouseY += (targetMouseY - mouseY) * 0.1;

            gl.viewport(0, 0, canvas.width, canvas.height);
            gl.uniform1f(timeLoc, time * 0.001);
            gl.uniform2f(resolutionLoc, canvas.width, canvas.height);
            gl.uniform2f(mouseLoc, mouseX, mouseY);

            gl.drawArrays(gl.TRIANGLES, 0, 6);
            requestAnimationFrame(render);
        };
        requestAnimationFrame(render);

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 mix-blend-screen opacity-60"
        />
    );
}
