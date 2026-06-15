// index.js
export const servicesData = [
  {
    title: "Languages",
    description: "Core programming languages I work with",
    items: [
      { title: "JavaScript" },
      { title: "TypeScript" },
      { title: "C++" },
      { title: "HTML/CSS" },
    ],
  },
  {
    title: "Frontend",
    description: "Modern frontend frameworks and libraries",
    items: [
      { title: "React.js" },
      { title: "Next.js" },
      { title: "Tailwind CSS" },
      { title: "Redux" },
    ],
  },
  {
    title: "Backend",
    description: "Server-side technologies and frameworks",
    items: [
      { title: "Node.js" },
      { title: "Express.js" },
      { title: "tRPC" },
      { title: "REST APIs" },
      { title: "WebSockets" },
    ],
  },
  {
    title: "Databases",
    description: "Database systems and ORMs",
    items: [
      { title: "Neonbase" },
      { title: "MongoDB" },
      { title: "Supabase" },
      { title: "DrizzleORM" },
      { title: "Prisma" },
    ],
  },
  {
    title: "AI/ML",
    description: "Artificial intelligence and machine learning tools",
    items: [
      { title: "RAG" },
      { title: "Vector Embeddings" },
      { title: "Ollama" },
    ],
  },
  {
    title: "DevOps & Tools",
    description: "Development tools and deployment technologies",
    items: [
      { title: "Git" },
      { title: "GitHub" },
      { title: "Cloudflare R2" },
      { title: "Postman" },
      { title: "Jest" },
      { title: "npm" },
    ],
  },
];
export const projects = [
  {
    id: 1,
    name: "Meet.AI — AI-Powered Video Conferencing Platform",
    description:
      "Engineered a custom AI Agent builder where users define their own bot (role, behavior, instructions), and the moment a call starts, that exact agent joins as a live voice participant — not a chatbox, not a sidebar tool, but a real presence in the room via OpenAI Realtime API ",
    href: "https://github.com/ramanrishit448-RR/next15-meet-ai-main",
    image: "/assets/projects/mobile-accessories-store.png",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Next.js" },
      { id: 3, name: "Node.js" },
      { id: 4, name: "MongoDB" },
      { id: 5, name: "Tailwind CSS" },
    ],
  },
  {
    id: 2,
    name: "Resonance — Open-Source Text-to-Speech SaaS ",
    description:
      "Built a self-hostable, open-source zero-shot voice cloning SaaS (ElevenLabs alternative) on Next.js and React 19 supporting 20 voices across 12 categories and 5 locales.",
    href: "https://github.com/ramanrishit448-RR/resonance-main",
    image: "/assets/projects/plant-shop.png",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Next.js" },
      { id: 3, name: "Stripe API" },
      { id: 4, name: "Tailwind CSS" },
    ],
  },
  {
    id: 3,
    name: "VectorDB — Custom Vector Database Engine",
    description:
      "Built a private AI that reads and answers from your own documents — no cloud, no API calls, runs entirely locally — powered by a C++17 vector database implementing HNSW, (O(log N), KD-Tree, and Brute Force with 3 distance metrics, replicating Pinecone internals from scratch.",
    href: "https://github.com/ramanrishit448-RR/Your-OWN-AI-main",
    image: "/assets/projects/apple-tech-store.png",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "Blazor" },
      { id: 2, name: "ASP.NET Core" },
      { id: 3, name: "SQL Server" },
      { id: 4, name: "Bootstrap" },
    ],
  },
  {
    id: 4,
    name: "FoodScore Hub — AI-Powered Food Health Analyzer",
    description:
      "A multi-category online shop featuring electronics, home appliances, and gaming gear with special offers.",
    href: "https://food-score-hub.vercel.app/",
    image: "/assets/projects/electronics-store.png",
    bgImage: "/assets/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "Vue.js" },
      { id: 2, name: "Laravel" },
      { id: 3, name: "MySQL" },
      { id: 4, name: "SCSS" },
    ],
  },
  {
    id: 5,
    name: "Kids Lab Workshop Landing Page - GEMA ",
    description:
      "A modern, responsive landing page for the AI & Robotics Summer Workshop, built as an assessment project for GEMA Education Technology Private Limited.",
    href: "https://kid-lab-workshop-main.vercel.app/",
    image: "/assets/projects/home-decor-store.png",
    bgImage: "/assets/backgrounds/table.jpg",
    frameworks: [
      { id: 1, name: "Angular" },
      { id: 2, name: "Firebase" },
      { id: 3, name: "GraphQL" },
      { id: 4, name: "Material UI" },
    ],
  },
];
export const socials = [
  { name: "MEETING", href: "https://cal.com" },
  { name: "Instagram", href: "https://www.instagram.com/rishitraman1304/" },
  { name: "LinkedIn", href: "www.linkedin.com/in/rishit-raman" },
  {
    name: "GitHub",
    href: "https://github.com/ramanrishit448-RR",
  },
];
