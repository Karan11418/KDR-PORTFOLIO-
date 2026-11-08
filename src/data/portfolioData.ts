export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'AI' | 'Full Stack' | 'Android' | 'Experiments';
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  metrics?: { label: string; value: string }[];
  featured: boolean;
  githubUrl: string;
  demoUrl?: string;
  year: string;
  role: string;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: string; description: string; iconType: string }[];
}

export interface ExpertiseItem {
  id: string;
  index: string;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
  visualAccent: string;
}

export interface JourneyMilestone {
  year: string;
  title: string;
  organization: string;
  type: 'Education' | 'Milestone' | 'Certification' | 'Project';
  description: string;
  highlights: string[];
  credentialUrl?: string;
}

export const PROFILE_DATA = {
  brand: 'KDR',
  fullName: 'Karan Dhanraj',
  role: 'AI Operator & Full Stack Developer',
  headline: 'I BUILD INTELLIGENT DIGITAL EXPERIENCES.',
  subheadline: 'Building AI-powered applications, intelligent agents, modern web experiences and Android applications.',
  bioSummary: `I'm Karan Dhanraj, an AI Operator and Full Stack Developer focused on building intelligent digital products, modern web applications, Android applications and AI-powered solutions. I combine deep engineering rigor with thoughtful motion design and neural agent workflows to build applications that solve real problems.`,
  location: 'India',
  email: 'kdr11118114@gmail.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  twitter: 'https://x.com',
  portraitImage: '/src/assets/images/kdr_portrait_1794126590291.jpg',
  stats: [
    { value: '10+', label: 'Shipped Systems', suffix: '' },
    { value: '5+', label: 'AI Agents Deployed', suffix: '' },
    { value: '99.9%', label: 'Uptime & Reliability', suffix: '' },
    { value: '100%', label: 'Engineered Precision', suffix: '' },
  ],
  interests: [
    'Autonomous Multi-Agent Systems',
    'Full Stack Web Performance',
    'Native Android Architecture',
    'Spatial 2D & Kinetic Typography',
    'Retrieval-Augmented Generation (RAG)',
  ],
  education: {
    degree: 'Bachelor of Technology in Computer Science & Engineering',
    focus: 'Artificial Intelligence, Software Systems & Distributed Architectures',
    period: '2021 — 2025',
  },
};

export const EXPERTISE_DATA: ExpertiseItem[] = [
  {
    id: 'ai-agents',
    index: '01',
    title: 'AI & AI Agents',
    tagline: 'Autonomous reasoning, goal-driven actions & neural tools',
    description: 'Architecting autonomous agent workflows that reason across complex toolchains, process multimodality, execute structured task graphs, and leverage context-rich RAG pipelines.',
    capabilities: [
      'Multi-Agent orchestration & delegation',
      'Contextual RAG with vector semantic search',
      'Tool execution & automated function calling',
      'Prompt engineering & fine-tuned safety boundaries',
      'Domain-specific intelligent assistants',
    ],
    visualAccent: '#38bdf8',
  },
  {
    id: 'fullstack-dev',
    index: '02',
    title: 'Full Stack Development',
    tagline: 'High-throughput APIs, reactive interfaces & robust state',
    description: 'End-to-end full stack software systems built with modern TypeScript, Node.js, Express, relational & document databases, and high-performance React frontends.',
    capabilities: [
      'Type-safe full stack TypeScript architectures',
      'REST & real-time WebSocket communication',
      'Database modeling (MongoDB & PostgreSQL)',
      'Secure authentication, RBAC & rate limiting',
      'Production containerization & cloud deployments',
    ],
    visualAccent: '#818cf8',
  },
  {
    id: 'android-dev',
    index: '03',
    title: 'Android Development',
    tagline: 'Fluid mobile experiences & native hardware synergy',
    description: 'Crafting responsive mobile applications with modern Android toolkits, clean architectural separation, offline persistence, and seamless API integrations.',
    capabilities: [
      'Modern Android UI with fluid touch physics',
      'Background task execution & system notifications',
      'REST API sync & offline-first local caching',
      'Native camera, location & sensor hooks',
      'Clean MVVM & unidirectional state patterns',
    ],
    visualAccent: '#34d399',
  },
  {
    id: 'web-apps',
    index: '04',
    title: 'Web Applications',
    tagline: 'Kinetic typography, micro-interactions & zero-latency UX',
    description: 'High-impact web applications that feel alive. Combining editorial layouts, hardware-accelerated animations, accessible keyboard patterns, and sub-100ms response times.',
    capabilities: [
      'Advanced 2D motion design & GSAP timeline choreography',
      'Editorial typography & responsive layout engineering',
      'Single-page application state management',
      'WCAG AA accessible interfaces & keyboard navigation',
      'Production bundle optimization & sub-second loading',
    ],
    visualAccent: '#f43f5e',
  },
  {
    id: 'ai-automation',
    index: '05',
    title: 'AI Automation',
    tagline: 'Automating mission-critical data pipelines & workflows',
    description: 'Designing resilient pipelines that turn tedious repetitive human processes into verified, automated agent tasks with human-in-the-loop oversight.',
    capabilities: [
      'End-to-end automated document ingestion',
      'Structured entity extraction & schema enforcement',
      'Scheduled autonomous data sync & summaries',
      'Incident alerts & automated proactive monitors',
      'Cross-platform webhook & API connectors',
    ],
    visualAccent: '#fbbf24',
  },
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'AI & Machine Intelligence',
    skills: [
      { name: 'AI Agents & Orchestration', level: 'Production', description: 'Multi-agent frameworks, tool usage & task planning', iconType: 'Cpu' },
      { name: 'RAG & Vector Retrieval', level: 'Advanced', description: 'Semantic search, hybrid chunking & context caching', iconType: 'Database' },
      { name: 'Gemini & LLM APIs', level: 'Advanced', description: 'Function calling, streaming responses & multimodality', iconType: 'Sparkles' },
      { name: 'AI Automation Workflows', level: 'Proficient', description: 'Automated data extraction & webhook task triggers', iconType: 'Workflow' },
      { name: 'Prompt Engineering', level: 'Expert', description: 'Structured JSON output, few-shot conditioning & guardrails', iconType: 'Terminal' },
    ],
  },
  {
    title: 'Frontend Engineering',
    skills: [
      { name: 'React & React 19', level: 'Expert', description: 'Component architecture, concurrent rendering & custom hooks', iconType: 'Code' },
      { name: 'TypeScript', level: 'Expert', description: 'Strict typing, generic abstractions & safe boundary schemas', iconType: 'FileCode' },
      { name: 'Tailwind CSS', level: 'Expert', description: 'Zero-slop design systems, responsive grids & dark surfaces', iconType: 'Palette' },
      { name: 'GSAP & ScrollTrigger', level: 'Advanced', description: 'Timeline choreography, pin sequences & kinetic reveals', iconType: 'Activity' },
      { name: 'Framer Motion', level: 'Advanced', description: 'Gesture physics, layout transitions & micro-interactions', iconType: 'Layers' },
    ],
  },
  {
    title: 'Backend & Infrastructure',
    skills: [
      { name: 'Node.js & Express', level: 'Advanced', description: 'REST APIs, middleware pipelines & rate limiting', iconType: 'Server' },
      { name: 'RESTful Architecture', level: 'Expert', description: 'Resource modeling, status integrity & error handling', iconType: 'Network' },
      { name: 'Authentication & Security', level: 'Advanced', description: 'JWT, secure sessions, CSRF & CORS policies', iconType: 'Shield' },
      { name: 'Vite & Tooling', level: 'Expert', description: 'Build pipeline, tree-shaking & dev middleware proxying', iconType: 'Zap' },
    ],
  },
  {
    title: 'Databases & Mobile',
    skills: [
      { name: 'MongoDB', level: 'Advanced', description: 'Document schemas, aggregation pipelines & indexing', iconType: 'Database' },
      { name: 'SQL & Relational DBs', level: 'Proficient', description: 'Schema normalization, relational joins & queries', iconType: 'Table' },
      { name: 'Android Development', level: 'Advanced', description: 'Native app lifecycles, UI layouts & API consumption', iconType: 'Smartphone' },
      { name: 'Git & Version Control', level: 'Expert', description: 'Feature branching, code review & CI/CD deployment', iconType: 'GitBranch' },
    ],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'cropsense-ai',
    title: 'CropSense AI / AgriSaarthi',
    subtitle: 'Precision Agricultural Intelligence & Neural Crop Analytics',
    category: 'AI',
    description: 'An AI-powered agricultural advisory platform synthesizing satellite imagery, multispectral sensor telemetry, and weather forecasts to predict crop yields and diagnose soil diseases in real time.',
    longDescription: 'CropSense AI (AgriSaarthi) bridges modern machine learning with agricultural field operations. Built for low-bandwidth rural conditions, it integrates computer vision models for leaf pathology diagnostics, vector-grounded agricultural knowledge retrieval, and automated drone flight path mapping for irrigation optimization.',
    image: '/src/assets/images/cropsense_ai_1794126591955.jpg',
    tags: ['AI Agents', 'Computer Vision', 'TypeScript', 'Node.js', 'GeoJSON', 'RAG'],
    metrics: [
      { label: 'NDVI Accuracy', value: '98.6%' },
      { label: 'Diagnostic Speed', value: '< 1.2s' },
      { label: 'Yield Forecast', value: '8.9 T/HA' },
    ],
    featured: true,
    githubUrl: 'https://github.com/example/cropsense-ai',
    demoUrl: 'https://example.com/cropsense',
    year: '2024',
    role: 'Lead Architect & Full Stack Developer',
  },
  {
    id: 'housing-agent',
    title: 'AI Rental & Housing Agent',
    subtitle: 'Autonomous Real Estate Negotiation & Discovery Assistant',
    category: 'AI',
    description: 'An autonomous conversational real estate agent that processes multi-parameter lease criteria, analyzes property blueprints, calculates 5-year price trajectories, and drafts verified rental inquiries.',
    longDescription: 'Designed as a 24/7 intelligent broker assistant, this platform connects tenant inquiries with vetted listing databases through natural language. Features include spatial layout analysis, local crime and school rating embeddings, and automated landlord communication dispatch.',
    image: '/src/assets/images/housing_agent_1794126592464.jpg',
    tags: ['RAG Pipeline', 'React', 'Tailwind CSS', 'Express', 'MongoDB'],
    metrics: [
      { label: 'Match Precision', value: '94.2%' },
      { label: 'Query Latency', value: '850ms' },
      { label: 'Lease Processing', value: '4x Faster' },
    ],
    featured: true,
    githubUrl: 'https://github.com/example/ai-rental-agent',
    demoUrl: 'https://example.com/rental-agent',
    year: '2024',
    role: 'AI System Engineer',
  },
  {
    id: 'deepotsav-experience',
    title: 'Deepotsav Digital Experience',
    subtitle: 'Cinematic Cultural Web Experience with 2D Kinetic Motion',
    category: 'Experiments',
    description: 'An interactive cultural celebration digital experience featuring fluid 2D canvas lighting, algorithmic rangoli geometry generator, and custom ambient spatial audio cues.',
    longDescription: 'Created as an homage to the ancient festival of lights, Deepotsav combines modern editorial web design with kinetic 2D lighting effects. Users interact with ceremonial earthen lamps, trigger generative geometric mandala blooms, and explore the philosophical origins of festive traditions.',
    image: '/src/assets/images/deepotsav_exp_1794126592902.jpg',
    tags: ['GSAP Motion', 'HTML5 Canvas', 'TypeScript', 'Web Audio API'],
    metrics: [
      { label: 'Animation FPS', value: '60 FPS' },
      { label: 'Asset Payload', value: '< 1.4MB' },
      { label: 'Visitor Dwell', value: '3.8 min' },
    ],
    featured: true,
    githubUrl: 'https://github.com/example/deepotsav-interactive',
    demoUrl: 'https://example.com/deepotsav',
    year: '2023',
    role: 'Creative Motion Developer',
  },
  {
    id: 'tictac-ai-arena',
    title: 'TicTac AI Arena',
    subtitle: 'Algorithmic Minimax Game Engine with Neural Decision Heatmaps',
    category: 'Experiments',
    description: 'A competitive algorithmic game arena pitting human intuition against minimax tree evaluations with alpha-beta pruning and simulated neural heuristic agents in real time.',
    longDescription: 'TicTac AI Arena visualizes the internal decision branches of game algorithms in real time. As moves are calculated, players can watch branch probabilities, move depth searches, and evaluate why classical heuristics dominate human choices in constrained game state environments.',
    image: '/src/assets/images/tictac_arena_1794126592132.jpg',
    tags: ['Algorithms', 'Minimax', 'React', 'Motion', 'State Machines'],
    metrics: [
      { label: 'Search Depth', value: 'Optimal (9)' },
      { label: 'Decision Time', value: '12ms' },
      { label: 'Win Rate vs AI', value: '0% (Unbeatable)' },
    ],
    featured: true,
    githubUrl: 'https://github.com/example/tictac-ai-arena',
    demoUrl: 'https://example.com/tictac',
    year: '2023',
    role: 'Algorithmic Engineer',
  },
  {
    id: 'amazon-clone',
    title: 'Modern E-Commerce Storefront',
    subtitle: 'High-Throughput Marketplace with Cart Synchronization & Checkout',
    category: 'Full Stack',
    description: 'A responsive full-stack shopping platform with instant catalog search, authenticated buyer sessions, persistent cart state, and simulated payment workflows.',
    longDescription: 'Built with microsecond-quick client reactivity and an Express API backend. Highlights include optimistic UI updates for shopping bag interactions, dynamic discount code calculators, and responsive mobile checkout flows adhering to strict performance budgets.',
    image: '/src/assets/images/housing_agent_1794126592464.jpg',
    tags: ['React', 'Express', 'Tailwind CSS', 'REST API', 'TypeScript'],
    metrics: [
      { label: 'Lighthouse Score', value: '98/100' },
      { label: 'Checkout Step', value: '3 Steps' },
    ],
    featured: false,
    githubUrl: 'https://github.com/example/ecommerce-fullstack',
    year: '2023',
    role: 'Full Stack Engineer',
  },
  {
    id: 'instagram-clone',
    title: 'Media Feed & Social Platform',
    subtitle: 'Real-Time Content Discovery & Interactive Stories Interface',
    category: 'Full Stack',
    description: 'A full-featured social media client with responsive photo/video feeds, story tray interactions, interactive comments, and optimistic like states.',
    longDescription: 'Engineered to test high-density media layout performance in web viewports. Features virtualized list scrolling for feeds, drag-to-dismiss gesture modal viewers, and clean RESTful API synchronization.',
    image: '/src/assets/images/kdr_portrait_1794126590291.jpg',
    tags: ['React', 'Mobile First', 'Node.js', 'MongoDB', 'Virtualization'],
    metrics: [
      { label: 'Scroll Jank', value: '0 dropped frames' },
      { label: 'Feed Load', value: '320ms' },
    ],
    featured: false,
    githubUrl: 'https://github.com/example/social-media-feed',
    year: '2023',
    role: 'Frontend Architect',
  },
];

export const JOURNEY_DATA: JourneyMilestone[] = [
  {
    year: '2024 — Present',
    title: 'AI Systems Architect & Operator',
    organization: 'Independent Engineering & Applied AI',
    type: 'Milestone',
    description: 'Designing autonomous multi-agent task networks, production RAG pipelines, and high-performance web applications for startups and digital products.',
    highlights: [
      'Deployed production agents handling multi-step reasoning and function calling',
      'Engineered sub-second API pipelines integrating modern LLM models',
      'Spearheaded motion-driven web architectures with 60 FPS performance',
    ],
  },
  {
    year: '2023 — 2024',
    title: 'Full Stack Developer & Mobile Specialist',
    organization: 'Digital Products & Client Systems',
    type: 'Milestone',
    description: 'Built and scaled client-facing web and Android applications, ensuring strict state integrity, responsive touch interactions, and secure REST backends.',
    highlights: [
      'Authored reusable UI component kits with strict TypeScript validation',
      'Integrated MongoDB databases with optimized indexing and aggregation',
      'Created cross-platform prototypes with native mobile parity',
    ],
  },
  {
    year: '2021 — 2025',
    title: 'B.Tech in Computer Science & Engineering',
    organization: 'University Engineering Faculty',
    type: 'Education',
    description: 'Formal computer science education focusing on algorithmic complexity, database design, operating systems, and neural network foundations.',
    highlights: [
      'Core coursework: Data Structures, Advanced Algorithms, Machine Learning',
      'Published academic project in intelligent precision agriculture (CropSense)',
      'Led student developer workshops in modern web technologies and AI tools',
    ],
  },
  {
    year: '2023',
    title: 'Certified Machine Learning & AI Engineering',
    organization: 'Industry Credentials',
    type: 'Certification',
    description: 'Advanced verification covering deep neural networks, vector databases, transformer architectures, and scalable cloud deployments.',
    highlights: [
      'Comprehensive validation in PyTorch, embeddings, and vector indexing',
      'Practical engineering in zero-shot classification and semantic search',
    ],
    credentialUrl: 'https://example.com/certificate',
  },
];
