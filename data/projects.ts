export interface Project {
    id: number;
    title: string;
    slug: string;
    description: string;
    fullDescription: string;
    techStack: string[];
    link?: string;
    repo?: string;
    image: string;
    colors: {
        from: string;
        to: string;
    };
    category: "AI/ML" | "Web App" | "Data Viz" | "Security" | "VR/AR" | "Mobile";
    features: string[];
    challenge: string;
    outcome: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Neon Nexus",
        slug: "neon-nexus",
        description: "A futuristic dashboard for managing IoT devices in smart cities.",
        fullDescription: "Neon Nexus is a comprehensive dashboard designed for smart city administrators. It visualizes real-time data from thousands of IoT sensors, providing actionable insights into traffic flow, energy consumption, and environmental metrics. Built with performance and aesthetics in mind, it features a highly responsive UI with dark mode by default.",
        techStack: ["Next.js", "TypeScript", "D3.js", "Tailwind CSS"],
        link: "https://example.com",
        repo: "https://github.com/example/neon-nexus",
        image: "/images/project-1.jpg", // Placeholder
        colors: {
            from: "from-cyan-400",
            to: "to-blue-600",
        },
        category: "Data Viz",
        features: [
            "Real-time data visualization using D3.js",
            "Interactive maps with Mapbox integration",
            "Customizable alerts and notifications",
            "Role-based access control for administrators"
        ],
        challenge: "Handling the massive influx of data from thousands of sensors without compromising UI performance was a major hurdle. Rendering complex charts and maps in real-time required significant optimization.",
        outcome: "We implemented a WebSocket-based data pipeline and optimized frontend rendering with virtualization, resulting in a dashboard that updates in sub-100ms latency even with 10k+ active data points.",
    },
    {
        id: 2,
        title: "Aura Stream",
        slug: "aura-stream",
        description: "An AI-powered music recommendation engine with a fluid interface.",
        fullDescription: "Aura Stream revolutionizes how users discover music. By analyzing listening habits and social signals, it generates infinite, personalized playlists. The interface is built to be essentially invisible, letting the album art and fluid animations take center stage.",
        techStack: ["React", "Python", "TensorFlow", "Framer Motion"],
        link: "https://example.com",
        repo: "https://github.com/example/aura-stream",
        image: "/images/project-2.jpg", // Placeholder
        colors: {
            from: "from-purple-400",
            to: "to-pink-600",
        },
        category: "AI/ML",
        features: [
            "Deep learning-based recommendation engine",
            "Seamless transitions with Framer Motion",
            "Collaborative filtering for social discovery",
            "Offline mode with progressive web app (PWA) support"
        ],
        challenge: "Creating a recommendation system that felt 'human' and not just algorithmic was difficult. We needed to potential biases in the training data and ensure diversity in the suggestions.",
        outcome: "By incorporating a hybrid model that combines collaborative filtering with content-based analysis, we increased user engagement time by 40% compared to standard algorithms.",
    },
    {
        id: 3,
        title: "Zenith Commerce",
        slug: "zenith-commerce",
        description: "A headless e-commerce solution built for speed and conversion.",
        fullDescription: "Zenith Commerce is a headless storefront connected to Shopify Plus. It creates an app-like experience on the web, with instant page transitions and optimistic UI updates. It achieved a 40% increase in conversion rates over the traditional theme.",
        techStack: ["Next.js", "Shopify API", "Zustand", "Stripe"],
        link: "https://example.com",
        repo: "https://github.com/example/zenith-commerce",
        image: "/images/project-3.jpg", // Placeholder
        colors: {
            from: "from-orange-400",
            to: "to-red-600",
        },
        category: "Web App",
        features: [
            "Headless architecture with Shopify",
            "Instant page loads with Next.js",
            "Custom checkout flow with Stripe",
            "Advanced product filtering and search"
        ],
        challenge: "Synchronizing inventory state across the headless frontend and the Shopify backend in real-time to prevent overselling during high-traffic drops.",
        outcome: "We built a robust webhook listener system that updates the frontend cache instantly upon inventory changes, completely eliminating overselling incidents during flash sales.",
    },
    {
        id: 4,
        title: "Sentience AI",
        slug: "sentience-ai",
        description: "Advanced sentiment analysis tool for social media monitoring.",
        fullDescription: "Sentience AI scrapes and analyzes millions of social media posts in real-time to gauge public sentiment towards brands and topics. It uses a custom-trained Transformer model to detect nuance, sarcasm, and slang with high accuracy. The dashboard provides live graphs and alerts for PR crises.",
        techStack: ["Python", "PyTorch", "FastAPI", "React", "Redis"],
        link: "https://example.com",
        repo: "https://github.com/example/sentience-ai",
        image: "/images/project-4.jpg",
        colors: {
            from: "from-indigo-500",
            to: "to-purple-700",
        },
        category: "AI/ML",
        features: [
            "Real-time social media scraping",
            "Transformer-based sentiment analysis model",
            "Crisis detection alerts via SMS/Email",
            "Historical sentiment trend analysis"
        ],
        challenge: "Accurately detecting sarcasm and context-dependent sentiment in short, informal social media text proved challenging for standard NLP models.",
        outcome: "Fine-tuning a BERT-based model on a curated dataset of social media text improved accuracy by 25%, allowing the system to reliably flag potential PR crises before they escalated.",
    },
    {
        id: 5,
        title: "CryptoPulse Dashboard",
        slug: "crypto-pulse",
        description: "Real-time cryptocurrency analytics and portfolio tracker.",
        fullDescription: "CryptoPulse offers professional-grade charting and analytics for crypto traders. It aggregates data from 20+ exchanges via WebSockets for sub-second updates. Features include customizable technical indicators, whale alerts, and profit/loss tracking across multiple wallets.",
        techStack: ["Vue.js", "Node.js", "Socket.io", "MongoDB"],
        link: "https://example.com",
        repo: "https://github.com/example/crypto-pulse",
        image: "/images/project-5.jpg",
        colors: {
            from: "from-emerald-400",
            to: "to-teal-600",
        },
        category: "Data Viz",
        features: [
            "Sub-second data updates via WebSockets",
            "Multi-exchange aggregation",
            "Advanced technical analysis charts",
            "Whale wallet tracking and alerts"
        ],
        challenge: "Aggregating and normalizing data from 20+ different exchanges with varying API structures and rate limits was a significant data engineering challenge.",
        outcome: "Developed a microservices architecture where each exchange has a dedicated adapter, normalizing data into a unified stream. This reduced data latency to under 200ms.",
    },
    {
        id: 6,
        title: "Neural Art Generator",
        slug: "neural-art-gen",
        description: "Web app for generating unique artwork using StyleGAN.",
        fullDescription: "Users can create stunning, high-resolution artwork by tweaking parameters of a pre-trained StyleGAN model. The app supports style mixing, latent space interpolation, and exporting to NFT marketplaces directly. The backend runs on a GPU cluster to render images in seconds.",
        techStack: ["Flask", "TensorFlow.js", "React", "WebGL"],
        link: "https://example.com",
        repo: "https://github.com/example/neural-art-gen",
        image: "/images/project-6.jpg",
        colors: {
            from: "from-pink-500",
            to: "to-rose-600",
        },
        category: "AI/ML",
        features: [
            "Interactive StyleGAN parameter controls",
            "Real-time low-res preview, high-res render",
            "Direct NFT minting integration",
            "Community gallery and sharing"
        ],
        challenge: "Rendering high-resolution GAN images is computationally expensive and slow, making a responsive web interface difficult to achieve.",
        outcome: "We implemented a progressive rendering system: the client sees a low-latency preview generated by TensorFlow.js in the browser, while the high-quality render happens properly on our backend GPU cluster.",
    },
    {
        id: 7,
        title: "HealthGuard Pro",
        slug: "health-guard",
        description: "Predictive health analytics platform for hospitals.",
        fullDescription: "HealthGuard Pro uses machine learning to predict patient readmission risks and optimize hospital bed allocation. By integrating with EHR systems, it helped pilot hospitals reduce wait times by 15% and improve patient outcomes through early intervention alerts.",
        techStack: ["Python", "Scikit-learn", "Angular", "PostgreSQL"],
        link: "https://example.com",
        repo: "https://github.com/example/health-guard",
        image: "/images/project-7.jpg",
        colors: {
            from: "from-blue-500",
            to: "to-cyan-600",
        },
        category: "Data Viz",
        features: [
            "Predictive readmission risk modeling",
            "Resource allocation optimization",
            "Secure EHR integration (HL7/FHIR)",
            "Doctor-facing actionable dashboards"
        ],
        challenge: "Ensuring HIPAA compliance and data security while training models on sensitive patient data was paramount and complex.",
        outcome: "We utilized federated learning techniques to train models on decentralized data without ever moving raw patient records from the hospital's secure on-premise servers.",
    },
    {
        id: 8,
        title: "LinguaBot",
        slug: "lingua-bot",
        description: "AI-powered language learning assistant.",
        fullDescription: "LinguaBot acts as a conversational partner for language learners. It corrects grammar in real-time, suggests more natural phrasing, and adapts its vocabulary level to the user's proficiency. Supports 10+ languages and includes voice recognition for pronunciation practice.",
        techStack: ["OpenAI API", "React Native", "Firebase", "Node.js"],
        link: "https://example.com",
        repo: "https://github.com/example/lingua-bot",
        image: "/images/project-8.jpg",
        colors: {
            from: "from-yellow-400",
            to: "to-orange-500",
        },
        category: "AI/ML",
        features: [
            "Real-time grammar correction",
            "Adaptive difficulty levels",
            "Voice recognition and pronunciation feedback",
            "Gamified progress tracking"
        ],
        challenge: "Minimizing latency for voice interactions was critical to maintaining a natural conversational flow.",
        outcome: "Optimized the audio processing pipeline and used edge functions for initial processing, reducing voice -to-text-to-response latency to under 1.5 seconds.",
    },
    {
        id: 9,
        title: "Terra Vision",
        slug: "terra-vision",
        description: "Satellite imagery analysis for agricultural monitoring.",
        fullDescription: "Terra Vision analyzes multi-spectral satellite imagery to assess crop health, moisture levels, and pest infestations. Farmers receive weekly actionable reports and interactive maps to optimize irrigation and fertilizer usage, increasing average yields by 12%.",
        techStack: ["Python", "OpenCV", "React", "Mapbox GL"],
        link: "https://example.com",
        repo: "https://github.com/example/terra-vision",
        image: "/images/project-9.jpg",
        colors: {
            from: "from-green-500",
            to: "to-lime-600",
        },
        category: "Data Viz",
        features: [
            "Multi-spectral image analysis (NDVI)",
            "Automated pest detection",
            "Historical crop health trends",
            "Exportable prescriptions for farm machinery"
        ],
        challenge: "The sheer volume of satellite imagery data made storage and processing costs prohibitive at scale.",
        outcome: "Implemented a tile-based processing system that only analyzes changing regions and uses varied compression levels, reducing storage costs by 60% without losing analytical precision.",
    },
    {
        id: 10,
        title: "Cyber Shield",
        slug: "cyber-shield",
        description: "Automated network intrusion detection system.",
        fullDescription: "Cyber Shield inspects network traffic packets to detect anomalies and potential cyberattacks. Using unsupervised learning, it flags zero-day exploits that traditional firewall rules miss. The dashboard provides a real-time threat map and automated containment options.",
        techStack: ["Go", "Rust", "ElasticSearch", "Kibana"],
        link: "https://example.com",
        repo: "https://github.com/example/cyber-shield",
        image: "/images/project-10.jpg",
        colors: {
            from: "from-slate-600",
            to: "to-gray-800",
        },
        category: "Security",
        features: [
            "Anomaly detection using unsupervised learning",
            "Real-time packet inspection (DPI)",
            "Automated threat containment",
            "Forensic analysis tools"
        ],
        challenge: "Processing gigabits of network traffic in real-time without introducing latency to the network was a major performance requirement.",
        outcome: "We wrote the core packet inspection engine in Rust for memory safety and speed, achieving line-rate processing capabilities on 10Gbps links.",
    },
    {
        id: 11,
        title: "Retail Genius",
        slug: "retail-genius",
        description: "Inventory forecasting tool for large retail chains.",
        fullDescription: "Retail Genius predicts product demand at a store level, considering seasonality, local events, and historical trends. This helps retailers reduce stockouts and minimize overstock waste, optimizing supply chain logistics.",
        techStack: ["Python", "Pandas", "Django", "React"],
        link: "https://example.com",
        repo: "https://github.com/example/retail-genius",
        image: "/images/project-11.jpg",
        colors: {
            from: "from-teal-400",
            to: "to-emerald-500",
        },
        category: "Data Viz",
        features: [
            "Demand forecasting with seasonality adjustment",
            "Supply chain optimization suggestions",
            "Interactive inventory dashboards",
            "Automated purchase order generation"
        ],
        challenge: "Creating accurate forecasts for new products with no historical sales data (the 'cold start' problem).",
        outcome: "Implemented a similarity-based clustering algorithm that infers demand patterns from similar existing products, improving forecast accuracy for new items by 35%.",
    },
    {
        id: 12,
        title: "Voice Notes AI",
        slug: "voice-notes-ai",
        description: "Intelligent transcription and summarization app.",
        fullDescription: "Voice Notes AI automatically transcribes meetings and lectures, then uses NLP to generate concise summaries, action items, and key takeaways. It supports speaker diarization and integrates with popular calendar apps for context.",
        techStack: ["Whisper API", "Electron", "React", "SQLite"],
        link: "https://example.com",
        repo: "https://github.com/example/voice-notes-ai",
        image: "/images/project-12.jpg",
        colors: {
            from: "from-violet-500",
            to: "to-purple-600",
        },
        category: "AI/ML",
        features: [
            "High-accuracy transcription with Whisper",
            "Automated summarization and action items",
            "Speaker identification (diarization)",
            "Calendar integration"
        ],
        challenge: "Handling long audio files often led to timeouts or memory issues with external APIs.",
        outcome: "Built a chunking and queuing system that processes long recordings in parallel segments, allowing for unlimited recording lengths with robust failure recovery.",
    },
    {
        id: 13,
        title: "FinTech Flow",
        slug: "fintech-flow",
        description: "Modern banking interface with AI financial advisor.",
        fullDescription: "FinTech Flow reimagines the banking experience with a minimalist design and a proactive AI advisor. The advisor analyzes spending patterns to suggest budgets, savings goals, and investment opportunities tailored to the user's financial health.",
        techStack: ["Next.js", "Plaid API", "Tailwind CSS", "PostgreSQL"],
        link: "https://example.com",
        repo: "https://github.com/example/fintech-flow",
        image: "/images/project-13.jpg",
        colors: {
            from: "from-sky-400",
            to: "to-blue-500",
        },
        category: "Web App",
        features: [
            "AI-driven financial advice",
            "Automatic expense categorization",
            "Goal-based savings pots",
            "Real-time spending notifications"
        ],
        challenge: "Providing personalized financial advice requires access to sensitive banking data, raising significant privacy and security concerns.",
        outcome: "Utilized the Plaid API for secure, read-only access to transaction data and implemented strict data encryption policies, obtaining SOC2 compliance certification.",
    },
    {
        id: 14,
        title: "Legal Eagle",
        slug: "legal-eagle",
        description: "Contract analysis and review automation.",
        fullDescription: "Legal Eagle speeds up the contract review process by automatically highlighting risky clauses, ambiguous terms, and missing standard provisions. It compares documents against a database of industry standards to ensure compliance.",
        techStack: ["Python", "Spacy", "React", "AWS Lambda"],
        link: "https://example.com",
        repo: "https://github.com/example/legal-eagle",
        image: "/images/project-14.jpg",
        colors: {
            from: "from-stone-500",
            to: "to-neutral-700",
        },
        category: "AI/ML",
        features: [
            "Automated risk detection in contracts",
            "Clause comparison with industry standards",
            "Ambiguity highlighting",
            "Version control for legal documents"
        ],
        challenge: "Legal language is highly specific and nuanced; standard NLP models often misinterpreted legal jargon.",
        outcome: "We trained custom Named Entity Recognition (NER) models on a corpus of open legal contracts, achieving a 95% precision rate in identifying key legal clauses and obligations.",
    },
    {
        id: 15,
        title: "Gaming Guild Manager",
        slug: "guild-manager",
        description: "Community platform for e-sports teams and guilds.",
        fullDescription: "A centralized hub for gaming communities to manage rosters, schedule scrims, and track tournament performance. Features include Discord integration, player stats tracking via game APIs, and a collaborative strategy whiteboard.",
        techStack: ["Node.js", "Discord.js", "Vue.js", "Firebase"],
        link: "https://example.com",
        repo: "https://github.com/example/guild-manager",
        image: "/images/project-15.jpg",
        colors: {
            from: "from-indigo-600",
            to: "to-violet-800",
        },
        category: "Web App",
        features: [
            "Discord bot integration for roster management",
            "Automated scrim scheduling",
            "Player stats tracking via APIs",
            "Real-time strategy whiteboard"
        ],
        challenge: "Coordinating schedules across different time zones for international guild members was a constant friction point.",
        outcome: "Built a smart scheduling tool that visualizes overlapping availability in the user's local time, reducing the time spent scheduling scrims by 80%.",
    },
    {
        id: 16,
        title: "Eco Tracker",
        slug: "eco-tracker",
        description: "Carbon footprint calculator and offset marketplace.",
        fullDescription: "Eco Tracker helps individuals and businesses measure their environmental impact. It allows users to track travel, energy usage, and consumption habits, offering verified carbon offset projects to achieve net-zero goals.",
        techStack: ["React Native", "Node.js", "Stripe API", "MongoDB"],
        link: "https://example.com",
        repo: "https://github.com/example/eco-tracker",
        image: "/images/project-16.jpg",
        colors: {
            from: "from-green-400",
            to: "to-emerald-600",
        },
        category: "Mobile",
        features: [
            "Automatic carbon footprint calculation",
            "Integration with travel & utility APIs",
            "Verified carbon offset marketplace",
            "Social challenges and leaderboards"
        ],
        challenge: "Motivating users to maintain long-term engagement with sustainability tracking can be difficult.",
        outcome: "Gamified the experience with 'Eco-Points', leaderboards, and tangible rewards, resulting in a 3-month retention rate that is 2x the industry average for lifestyle apps.",
    },
    {
        id: 17,
        title: "EduQuest VR",
        slug: "edu-quest",
        description: "Immersive VR history lessons for classrooms.",
        fullDescription: "EduQuest VR transports students to historical events using virtual reality. Lessons include interactive tours of ancient civilizations, significant battles, and cultural landmarks, making history tangible and engaging.",
        techStack: ["Unity", "C#", "Oculus SDK", "Firebase"],
        link: "https://example.com",
        repo: "https://github.com/example/edu-quest",
        image: "/images/project-17.jpg",
        colors: {
            from: "from-amber-500",
            to: "to-yellow-600",
        },
        category: "VR/AR",
        features: [
            "Immersive 3D historical environments",
            "Interactive learning modules",
            "Teacher dashboard for progress tracking",
            "Multi-user classroom sessions"
        ],
        challenge: "Optimizing high-fidelity VR environments to run smoothly on standalone mobile VR headsets (like Quest 2) was a major technical constraint.",
        outcome: "Used aggressive occlusion culling and baked lighting techniques to maintain a steady 72fps, ensuring a comfortable and nausea-free experience for students.",
    },
    {
        id: 18,
        title: "LogiRoute",
        slug: "logi-route",
        description: "Last-mile delivery optimization algorithm.",
        fullDescription: "LogiRoute solves the vehicle routing problem for local delivery fleets. It accounts for traffic patterns, delivery windows, and vehicle capacity to generate the most efficient routes, saving up to 20% in fuel costs.",
        techStack: ["Python", "Google Maps API", "React", "Redis"],
        link: "https://example.com",
        repo: "https://github.com/example/logi-route",
        image: "/images/project-18.jpg",
        colors: {
            from: "from-blue-600",
            to: "to-indigo-700",
        },
        category: "AI/ML",
        features: [
            "Dynamic route optimization",
            "Real-time traffic adaptation",
            "Driver mobile app",
            "Proof of delivery (signature/photo)"
        ],
        challenge: "The 'Traveling Salesman Problem' is NP-hard; finding the *perfect* route in real-time is computationally impossible.",
        outcome: "Implemented a heuristic-based genetic algorithm that finds near-optimal solutions within seconds, striking the right balance between route efficiency and computation time.",
    },
    {
        id: 19,
        title: "Aegis Drone Defense",
        slug: "aegis-drone",
        description: "Counter-UAS system for airspace security.",
        fullDescription: "Aegis provides a multi-layered defense against unauthorized drones. It integrates radar, RF sensors, and optical tracking to detect, identify, and neutralize threats. The system uses a proprietary jamming algorithm to safely land drones without kinetic interception.",
        techStack: ["C++", "SDR", "YOLOv8", "WebSockets"],
        link: "https://example.com",
        repo: "https://github.com/example/aegis-drone",
        image: "/images/project-19.jpg",
        colors: {
            from: "from-slate-700",
            to: "to-neutral-900",
        },
        category: "Security",
        features: [
            "Multi-sensor fusion (Radar + RF + Optical)",
            "AI-based drone classification",
            "Automated non-kinetic neutralization (Jamming)",
            "3D airspace visualization"
        ],
        challenge: "Distinguishing between authorized drones, birds, and potential threats in cluttered urban environments.",
        outcome: "Trained a custom YOLOv8 model on a unique dataset of drone signatures vs. biological targets, reducing false positive rates by over 90%.",
    },
    {
        id: 20,
        title: "CryptoFortress",
        slug: "crypto-fortress",
        description: "Enterprise-grade secure communication platform.",
        fullDescription: "CryptoFortress provides end-to-end encrypted messaging, voice, and file sharing for high-security environments. It features post-quantum cryptography algorithms and a decentralized architecture to eliminates single points of failure.",
        techStack: ["Rust", "Signal Protocol", "React", "Libp2p"],
        link: "https://example.com",
        repo: "https://github.com/example/crypto-fortress",
        image: "/images/project-20.jpg",
        colors: {
            from: "from-zinc-600",
            to: "to-stone-800",
        },
        category: "Security",
        features: [
            "End-to-End Encryption (Signal Protocol)",
            "Post-Quantum Cryptography support",
            "Decentralized P2P architecture",
            "Self-destructing messages"
        ],
        challenge: "Ensuring message delivery reliability in a decentralized network without a central server.",
        outcome: "Implemented a gossip protocol for message propagation and a distributed hash table (DHT) for peer discovery, ensuring 99.9% message delivery success even with significant network churn.",
    },
    {
        id: 21,
        title: "ThreatHunter",
        slug: "threat-hunter",
        description: "OSINT aggregator and threat intelligence platform.",
        fullDescription: "ThreatHunter scrapes the dark web and open sources to identify potential threats against organizations. It correlates IOCs (Indicators of Compromise) with internal logs to detect breaches early. The platform includes a visual link analysis tool to map threat actor infrastructures.",
        techStack: ["Python", "Elasticsearch", "Neo4j", "Vue.js"],
        link: "https://example.com",
        repo: "https://github.com/example/threat-hunter",
        image: "/images/project-21.jpg",
        colors: {
            from: "from-red-900",
            to: "to-rose-950",
        },
        category: "Security",
        features: [
            "Dark web monitoring & scraping",
            "IOC correlation engine",
            "Visual link analysis (Graph visualization)",
            "Automated threat reporting"
        ],
        challenge: "Visualizing complex relationships between thousands of threat entities (IPs, domains, actors) in a way that is understandable to analysts.",
        outcome: "Built a customized graph visualization tool using Neo4j and D3.js that allows analysts to intuitively explore connections and uncover hidden threat actor networks.",
    }
];
