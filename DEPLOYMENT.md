# Deploying Your Portfolio to Hostinger

This guide covers how to deploy your Next.js portfolio to Hostinger.

## Important Note About Hostinger

Hostinger's shared hosting plans **do not natively support Node.js applications** like Next.js. You have several options:

## Option 1: Deploy to Vercel (Recommended - Free & Easy)

Since this is a Next.js app, the easiest and best option is to deploy to **Vercel** (made by the creators of Next.js), then point your Hostinger domain to Vercel.

### Steps:

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and configure everything
   - Click "Deploy"

3. **Connect Your Hostinger Domain**
   - In Vercel, go to your project → Settings → Domains
   - Add your custom domain (e.g., `mominayousaf.com`)
   - Vercel will provide DNS records
   
   - In Hostinger:
     - Go to DNS/Name Servers
     - Add the A records and CNAME records provided by Vercel
     - Wait for DNS propagation (5-30 minutes)

**Pros:**
- ✅ Free hosting
- ✅ Automatic deployments on git push
- ✅ Global CDN
- ✅ Perfect for Next.js
- ✅ Zero configuration

---

## Option 2: Hostinger VPS with Node.js

If you have a Hostinger VPS plan, you can deploy directly.

### Prerequisites:
- Hostinger VPS plan
- SSH access to your server

### Steps:

1. **SSH into your VPS**
   ```bash
   ssh root@your-vps-ip
   ```

2. **Install Node.js and npm**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-get install -y nodejs
   node --version
   npm --version
   ```

3. **Install PM2 (Process Manager)**
   ```bash
   sudo npm install -g pm2
   ```

4. **Clone your repository**
   ```bash
   cd /var/www
   git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git portfolio
   cd portfolio
   ```

5. **Install dependencies and build**
   ```bash
   npm install
   npm run build
   ```

6. **Start the app with PM2**
   ```bash
   pm2 start npm --name "portfolio" -- start
   pm2 save
   pm2 startup
   ```

7. **Configure Nginx as reverse proxy**
   ```bash
   sudo nano /etc/nginx/sites-available/portfolio
   ```
   
   Add this configuration:
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com www.yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

8. **Enable the site**
   ```bash
   sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

9. **Setup SSL with Let's Encrypt**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
   ```

---

## Option 3: Static Export (For Shared Hosting)

If you only have Hostinger shared hosting, you can export your Next.js app as static HTML.

### Steps:

1. **Update `next.config.ts`**
   ```typescript
   import type { NextConfig } from "next";

   const nextConfig: NextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
   };

   export default nextConfig;
   ```

2. **Build the static site**
   ```bash
   npm run build
   ```
   
   This creates an `out` folder with static files.

3. **Upload to Hostinger**
   - Use Hostinger's File Manager or FTP
   - Upload all files from the `out` folder to `public_html`
   - Or use FTP client like FileZilla

4. **Using FTP (Recommended)**
   - Get FTP credentials from Hostinger dashboard
   - Connect with FileZilla or similar
   - Upload `out/*` to `public_html/`

**Limitations:**
- ⚠️ No server-side rendering (SSR)
- ⚠️ No API routes
- ⚠️ No dynamic image optimization
- ⚠️ No incremental static regeneration

---

## Option 4: Netlify (Alternative to Vercel)

Similar to Vercel, also free and excellent for Next.js.

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your repository
4. Deploy automatically
5. Connect your Hostinger domain via DNS settings

---

## Recommended Approach

**For your portfolio:** Use **Option 1 (Vercel)** because:
- It's free
- Zero configuration
- Automatic deployments
- Perfect Next.js support
- Global CDN for fast loading worldwide
- You can still use your Hostinger domain

Your Hostinger hosting can be used for other projects or as email hosting for your domain.

---

## Environment Variables

If you add any environment variables later:

**Vercel/Netlify:**
- Add them in the dashboard under Settings → Environment Variables

**VPS:**
- Create a `.env.local` file in your project root
- Never commit this file to git

---

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Next.js Deployment: https://nextjs.org/docs/deployment
- Hostinger Support: https://www.hostinger.com/tutorials/
