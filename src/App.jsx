import { useEffect } from 'react'
import './index.css'

// ── Data ────────────────────────────────────────────────────────────────────

const EXPERIENCE = [
  {
    role: 'Tech Lead (Contract)',
    company: 'Payram',
    date: 'Oct 2025 – Present',
    current: true,
    stack: ['Go', 'Event Queues', 'Blue-Green Deploy', 'Stablecoins', 'Rate Limiting'],
    bullets: [
      'Architected a self-hosted crypto payments platform in <strong>Go</strong> with event-driven push/pull queues, concurrent workers, and cron-based job scheduling — enabling the platform to process transactions with zero manual intervention and consistent <strong>sub-second dispatch times</strong>.',
      'Built and launched a production wallet and payments application with <strong>horizontally scalable worker pools</strong>, allowing the system to absorb concurrent payment spikes without latency degradation across multiple merchant accounts.',
      'Designed <strong>rate-limited API gateways</strong> and blue-green deployment pipelines, achieving zero-downtime releases and enabling rapid iteration without service interruption.',
      'Implemented <strong>event-based pull queues</strong> for async settlement dispatch, decoupling payment initiation from settlement and improving end-to-end throughput consistency under peak load.',
      'Engineered robust error handling, retry logic, and idempotency guarantees across all payment flows — ensuring no double-spend or missed settlement under failure or network partition conditions.',
      'Owned the full delivery lifecycle — architecture, implementation, deployment, and production rollout — as the sole contract Tech Lead.',
    ],
  },
  {
    role: 'VP, Web3 & AI Solutions',
    company: 'Formidium',
    date: 'Feb 2024 – Oct 2025',
    stack: ['ERC-1400', 'LangChain', 'LangGraph', 'AWS', 'Kubernetes', 'Terraform', 'RAG', 'MCP'],
    bullets: [
      'Architected and scaled a <strong>fund tokenization platform</strong> on EVM and Provenance Blockchain using ERC-1400, with ACID-compliant database transactions for financial ledger consistency and BASE-aligned distributed state for on-chain sync — supporting institutional-grade fund operations.',
      'Built an enterprise <strong>RAG chatbot</strong> with Python, LangChain, LangGraph, and Next.js, reducing document retrieval latency by <strong>60%</strong> and significantly cutting analyst research time across the fund management workflow.',
      'Developed blockchain oracles and <strong>event-driven push queue data pipelines</strong> delivering real-time NAV updates to fund systems, decoupling on-chain events from downstream consumers — <strong>reducing data lag from minutes to seconds</strong>.',
      'Architected <strong>custody wallet infrastructure</strong> with multi-sharded key storage and AWS Secrets Manager, eliminating single points of failure in enterprise key management for institutional clients.',
      'Built CI/CD pipelines with <strong>blue-green and canary strategies</strong> on AWS and Kubernetes using SOLID principles, enabling <strong>80%+ reduction in release cycle times</strong> and <strong>99.9% uptime</strong> across 5+ production services.',
      'Managed containerized deployments via <strong>AWS CodePipelines</strong>, CodeCommit, GitHub Actions, ECR, ECS, CodeBuild — infrastructure provisioned using Terraform and CloudFormation.',
      'Designed monitoring, alerting, and failover controls with <strong>database concurrency controls and connection pooling</strong> to handle high-throughput read/write workloads at scale.',
      'Built <strong>MCP-compatible AI tooling</strong> patterns for enterprise knowledge retrieval and developer productivity workflows.',
      'Led and mentored <strong>15+ engineers</strong> across blockchain and AI initiatives — improving delivery velocity, code quality, and cross-team coordination across two time zones.',
    ],
  },
  {
    role: 'Backend Engineer',
    company: 'Xalts',
    date: 'Apr 2023 – Dec 2023',
    stack: ['ERC-4337', 'Avalanche', 'Hyperledger Besu', 'AWS ECS', 'Node.js', 'TypeScript'],
    bullets: [
      'Developed a <strong>custodial wallet platform</strong> with Web2-style onboarding and automated private key generation, enabling banking clients to onboard to a private EVM chain using Avalanche and Hyperledger Besu without friction.',
      'Implemented <strong>smart contract wallets using ERC-4337 and Account Abstraction</strong>, enabling programmable transaction flows and policy enforcement for enterprise banking clients.',
      'Built a <strong>blockchain indexer and token bridge</strong> for cross-chain asset transfers between Besu and Avalanche — reducing cross-chain settlement time significantly and enabling seamless interoperability.',
      'Deployed production services on AWS (VMs, ECS, S3) using <strong>blue-green and rolling deployment strategies</strong>, load-balanced across availability zones with rate limiting at the API gateway — achieving high availability under peak transaction loads.',
      'Engineered <strong>horizontally scalable wallet, bridge, and indexing services</strong> with automatic failover and retry logic, sustaining consistent performance under spike conditions.',
      'Contributed to system design decisions across backend, blockchain, and infrastructure layers, influencing the overall platform architecture from early prototype to production.',
      'Mentored a team of <strong>5 developers</strong> and delivered all backend and blockchain modules within a 6-month timeline.',
    ],
  },
  {
    role: 'Blockchain Lead',
    company: 'Quadrant.io',
    date: 'Dec 2021 – Mar 2023',
    stack: ['Polygon', 'Ethereum', 'Go', 'Message Queues', 'AWS Lambda', 'NFT', 'eQUAD'],
    bullets: [
      'Architected a blockchain platform sustaining <strong>25,000+ daily transactions</strong> across Polygon and Ethereum — with no data loss or unplanned downtime in production.',
      'Engineered <strong>concurrent transaction processing using message queues and Go channels</strong> for async event passing with retry and failure-recovery workflows, achieving sub-second processing times reliably under sustained load.',
      'Developed a <strong>private EVM chain</strong> with distributed database architecture, multi-region data consistency, full-node infrastructure, blockchain explorer, cross-chain bridge, and public APIs — forming the core of the eQUAD ecosystem.',
      'Designed <strong>tokenomics and NFT-based incentive systems</strong> for the eQUAD token, driving on-chain user engagement and aligning token utility with platform growth mechanics.',
      'Engineered <strong>transaction monitoring, retry mechanisms, and failure-recovery systems</strong> to guarantee finality and prevent silent failures across high-volume pipelines.',
      'Deployed microservices on <strong>AWS Lambda</strong> for elastic horizontal scaling, reducing infrastructure costs while maintaining consistent throughput under variable load patterns.',
      'Led a <strong>5-member engineering team</strong> across multiple concurrent blockchain applications and production releases.',
    ],
  },
  {
    role: 'Concept Engineer',
    company: 'Everledger',
    date: 'Feb 2021 – Oct 2021',
    stack: ['React', 'Hyperledger Fabric', 'Hyperledger Besu', 'WeChat API', 'Track & Trace'],
    bullets: [
      'Designed <strong>provenance and traceability widgets in React</strong> for diamond authenticity verification, integrated into client-facing production applications used by industry stakeholders globally.',
      'Integrated <strong>track-and-trace APIs with WeChat</strong> for the Chinese consumer market, expanding platform reach to a new geography and enabling region-specific product experiences for luxury goods.',
      'Extended <strong>Hyperledger Fabric architecture</strong> for China-specific deployment and regulatory compliance requirements, working within strict data localisation and audit constraints.',
      'Built a <strong>proof-of-concept migration from Hyperledger Fabric to Hyperledger Besu</strong>, demonstrating EVM interoperability and informing the team\'s future chain strategy.',
      'Collaborated cross-functionally with product and design teams to integrate blockchain traceability features into intuitive, consumer-facing experiences without exposing underlying complexity.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Accenture',
    date: 'Sep 2018 – Jan 2021',
    stack: ['Hyperledger Fabric', 'Hyperledger Besu', 'Quorum', 'Kubernetes', 'Jenkins', 'GitOps'],
    bullets: [
      'Contributed to <strong>Hyperledger Bevel</strong>, an open-source framework for production-ready blockchain deployment on Kubernetes — now widely adopted across enterprise distributed ledger deployments globally.',
      'Engineered <strong>deployment pipelines for Hyperledger Fabric, Hyperledger Besu, and JP Morgan Quorum</strong>, enabling repeatable, auditable enterprise blockchain provisioning at scale.',
      'Implemented <strong>CI/CD and GitOps workflows using Jenkins and Travis CI</strong> for enterprise blockchain delivery pipelines, reducing manual deployment effort and improving release consistency across environments.',
      'Contributed internal blockchain solutions to <strong>Hyperledger Labs</strong> and the broader open-source ecosystem, accelerating community tooling for distributed ledger adoption.',
      'Developed APIs and scalable infrastructure using <strong>Ripple and Hyperledger technologies on Kubernetes</strong>, supporting cross-border payment and settlement use cases for financial services clients.',
    ],
  },
]

const ACHIEVEMENTS = [
  { value: '80%+', label: 'Faster release cycles', detail: 'via CI/CD modernisation with blue-green + canary on AWS & Kubernetes' },
  { value: '99.9%', label: 'Production uptime', detail: 'maintained across distributed services with monitoring, failover & connection pooling' },
  { value: '60%', label: 'Lower AI latency', detail: 'optimised RAG pipeline with LangChain, LangGraph, and query preprocessing' },
  { value: '25K+', label: 'Daily transactions', detail: 'processed across Polygon & Ethereum with sub-second throughput via Go queues' },
  { value: '15+', label: 'Engineers led', detail: 'across blockchain and AI teams at Formidium over 18 months' },
  { value: 'mins→secs', label: 'Data pipeline lag', detail: 'event-driven push queues decoupled on-chain events from downstream consumers' },
]

const PROJECTS = {
  ai: [
    {
      icon: '🧠',
      name: 'RepoMind',
      desc: 'Repository Intelligence MCP server for coding agents. Ingests a full codebase and exposes structured context, semantic search, and file-level queries as AI-callable tools — so agents can understand a repo without reading every file.',
      tags: [['MCP', 'blue'], ['Python', 'cyan'], ['AI Agents', 'purple']],
      url: 'https://github.com/lakshyakumar/repomind',
    },
    {
      icon: '🎨',
      name: 'Prism Canvas',
      desc: 'Full-spectrum market intelligence Claude Skill for founders. Extends the classic Lean Canvas with automated competitor analysis, validation frameworks, and go-to-market clarity — accepted in the Claude skills ecosystem.',
      tags: [['Claude', 'purple'], ['Skill', 'blue'], ['Founder Tools', 'orange']],
      url: 'https://github.com/lakshyakumar/prism-canvas',
    },
    {
      icon: '🕸️',
      name: 'ContextWeaver AI',
      desc: 'Context-aware AI agent built on LangGraph and PydanticAI. Searches the web, builds persistent knowledge bases, manages token budgets dynamically, and switches between subgraphs based on query type.',
      tags: [['LangGraph', 'purple'], ['PydanticAI', 'blue'], ['FastAPI', 'cyan']],
      url: 'https://github.com/lakshyakumar/ContextWeaver-AI',
    },
    {
      icon: '📚',
      name: 'Knowledge Base AI',
      desc: 'FastAPI agent that scrapes URIs, chunks and embeds content, and builds a queryable persistent knowledge base. Answers natural-language questions over ingested sources using LangGraph and PydanticAI.',
      tags: [['LangGraph', 'purple'], ['Python', 'cyan'], ['RAG', 'blue']],
      url: 'https://github.com/lakshyakumar/Knowledge-Base-AI',
    },
    {
      icon: '🔍',
      name: 'Advanced RAG',
      desc: 'Production RAG assistant that AI-rephrases and simplifies user queries before vectorised retrieval — improving search relevance significantly. Built with LangChain and LangGraph for document question answering at scale.',
      tags: [['LangChain', 'blue'], ['LangGraph', 'purple'], ['Python', 'cyan']],
      url: 'https://github.com/lakshyakumar/Advanced-RAG',
    },
    {
      icon: '🛠️',
      name: 'TypeScript MCP Server',
      desc: 'Production-grade MCP server in TypeScript communicating over JSON-RPC 2.0. Modular tool registration, scalable handler architecture, and ready for integration into any AI agent that speaks the Model Context Protocol.',
      tags: [['MCP', 'blue'], ['TypeScript', 'cyan'], ['JSON-RPC', 'purple']],
      url: 'https://github.com/lakshyakumar/typescript-mcp',
    },
    {
      icon: '🎬',
      name: 'Filmy Agent',
      desc: 'Rust-based AI agent for generating cinematic image and video prompts. Combines movie knowledge retrieval with prompt engineering to produce rich, director-style visual descriptions for AI media generation tools.',
      tags: [['Rust', 'orange'], ['AI Agents', 'purple'], ['Generative AI', 'blue']],
      url: 'https://github.com/lakshyakumar/filmy_agent',
    },
    {
      icon: '🔥',
      name: 'Crucible',
      desc: '100-challenge mastery platform spanning AI, Blockchain, Scalable Systems, and Concurrency. Each challenge is a self-contained problem with progressive difficulty — built to close the gap between theory and production-grade thinking.',
      tags: [['TypeScript', 'blue'], ['GitHub Pages', 'green'], ['Challenges', 'cyan']],
      url: 'https://lakshyakumar.github.io/crucible',
    },
  ],
  blockchain: [
    {
      icon: '⚙️',
      name: 'Hyperledger Bevel',
      desc: 'Open-source accelerator for production-ready DLT deployment on Kubernetes. Contributed deployment pipelines for Hyperledger Fabric, Besu, and JP Morgan Quorum — widely adopted across enterprise blockchain projects globally.',
      tags: [['Hyperledger', 'blue'], ['Kubernetes', 'cyan'], ['Open Source', 'green']],
      url: 'https://github.com/hyperledger/bevel',
    },
    {
      icon: '🏦',
      name: 'Fund Tokenization Platform',
      desc: 'End-to-end fund tokenization across EVM-compatible and Provenance chains using ERC-1400 security token standards. Covers staking, secondary sales, token transfer restrictions, and ACID-compliant financial ledger management.',
      tags: [['ERC-1400', 'orange'], ['Solidity', 'blue'], ['Provenance', 'purple']],
      url: 'https://github.com/lakshyakumar/Tokenization-Platform',
    },
    {
      icon: '💎',
      name: 'ERC-4337 Account Abstraction',
      desc: 'Step-by-step Solidity exploration of smart contract wallets and account abstraction. Covers UserOperations, Bundlers, Paymasters, and EntryPoint — built as a practical learning path for developers new to AA.',
      tags: [['ERC-4337', 'orange'], ['Solidity', 'blue'], ['Account Abstraction', 'purple']],
      url: 'https://github.com/lakshyakumar/Demistifying-Account-Abstraction-A-Step-by-Step-Exploration',
    },
    {
      icon: '🔌',
      name: 'Wallact',
      desc: 'Lightweight TypeScript/ethers.js wrapper that simplifies smart contract interaction — cleaner API, better error handling, and reduced boilerplate for developers building on EVM chains. Published to npm.',
      tags: [['TypeScript', 'blue'], ['npm', 'cyan'], ['ethers.js', 'purple']],
      url: 'https://github.com/lakshyakumar/wallact',
    },
  ],
  tooling: [
    {
      icon: '⚡',
      name: 'Turbulent',
      desc: 'React and Next.js hook library for blockchain-connected UIs. Provides clean hooks for wallet state, transaction status, chain switching, and balance polling — without the boilerplate of raw wagmi or ethers setup.',
      tags: [['React', 'cyan'], ['npm', 'blue'], ['Web3 Hooks', 'purple']],
      url: 'https://github.com/lakshyakumar/turbulent',
    },
    {
      icon: '🚀',
      name: 'Next.js Boilerplate',
      desc: 'Production-ready Next.js + Tailwind CSS + Mongoose starter with authentication, TypeScript, and clean modular project structure. Designed to eliminate setup time and ship faster on greenfield projects.',
      tags: [['Next.js', 'blue'], ['TypeScript', 'cyan'], ['MongoDB', 'green']],
      url: 'https://github.com/lakshyakumar/Nextjs-boilerplate',
    },
    {
      icon: '📋',
      name: 'LeadPrep',
      desc: 'Comprehensive interview preparation roadmap covering system design, distributed systems, algorithms, and engineering leadership. Structured as a progressive curriculum with real interview-style questions. Live on GitHub Pages.',
      tags: [['Interview Prep', 'cyan'], ['System Design', 'orange'], ['GitHub Pages', 'green']],
      url: 'https://github.com/lakshyakumar/leadprep',
    },
  ],
}

const SKILLS = [
  {
    icon: '⛓️',
    title: 'Blockchain & Web3',
    pills: ['EVM', 'Solidity', 'ERC-4337', 'ERC-1400', 'Hyperledger Fabric', 'Hyperledger Besu', 'Polygon', 'Avalanche', 'Provenance Blockchain', 'Account Abstraction', 'Smart Contract Wallets', 'Cross-chain Bridges'],
  },
  {
    icon: '🤖',
    title: 'AI & Agent Systems',
    pills: ['LangChain', 'LangGraph', 'RAG', 'PydanticAI', 'CrewAI', 'MCP Servers', 'Vector DBs', 'Semantic Search', 'AI Memory Systems', 'Tool Orchestration', 'Context Management'],
  },
  {
    icon: '☁️',
    title: 'Cloud & DevOps',
    pills: ['AWS ECS', 'AWS EC2', 'AWS Lambda', 'S3', 'ECR', 'CodePipeline', 'Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins', 'Terraform', 'CloudFormation', 'GitOps'],
  },
  {
    icon: '⚡',
    title: 'Scalability & Architecture',
    pills: ['Event-driven Queues', 'Concurrent Workers', 'Blue-green Deploys', 'Canary Releases', 'Horizontal Scaling', 'ACID / BASE', 'Distributed DBs', 'Connection Pooling', 'Rate Limiting', 'Circuit Breakers', 'Zero-downtime Deploys'],
  },
  {
    icon: '💻',
    title: 'Languages & Frameworks',
    pills: ['Go', 'TypeScript', 'Python', 'JavaScript', 'Rust', 'Solidity', 'Node.js', 'NestJS', 'React', 'Next.js', 'FastAPI', 'REST APIs', 'Microservices'],
  },
  {
    icon: '🧭',
    title: 'Leadership & Delivery',
    pills: ['Technical Architecture', 'Team Lead (15+ eng)', 'Cross-functional Delivery', 'Mentorship', 'Roadmap Planning', 'OKRs', 'Agile', 'Code Reviews', 'Hiring'],
  },
]

const CERTIFICATIONS = [
  { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services' },
  { name: 'Building AI-Powered Search with MongoDB Vector Search', issuer: 'MongoDB — Jun 2025' },
  { name: 'Building RAG Apps Using MongoDB', issuer: 'MongoDB — Jun 2025' },
]

// ── Custom hook: intersection observer ──────────────────────────────────────
function useScrollReveal(selector) {
  useEffect(() => {
    const els = document.querySelectorAll(selector)
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [selector])
}

// ── Components ───────────────────────────────────────────────────────────────

function Nav() {
  return (
    <nav className="nav">
      <a href="#hero" className="nav-logo">
        lk<span>.</span>dev
      </a>
      <ul className="nav-links">
        <li><a href="#experience">Experience</a></li>
        <li><a href="#achievements">Impact</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-inner">
        <div className="hero-badge">
          <span className="badge-dot" />
          Available for senior / tech lead roles
        </div>
        <h1 className="hero-name">Lakshya Kumar</h1>
        <p className="hero-title">
          Tech Lead · <span>Senior Fullstack Engineer</span> · AI &amp; Web3 Systems
        </p>
        <p className="hero-summary">
          Engineering leader with 7+ years building high-throughput, scalable production systems across
          AI, blockchain, and cloud-native distributed services. Deep expertise in concurrent architecture,
          ACID/BASE database design, event-driven microservices, and zero-downtime deployment strategies
          — delivering systems that process 25,000+ daily transactions across EVM ecosystems,
          tokenization platforms, custodial wallets, and crypto payments infrastructure.
        </p>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-value">7+</span>
            <span className="stat-label">Years experience</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">80%+</span>
            <span className="stat-label">Faster releases</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">99.9%</span>
            <span className="stat-label">Uptime delivered</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">25K+</span>
            <span className="stat-label">Daily txns scaled</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">15+</span>
            <span className="stat-label">Engineers led</span>
          </div>
        </div>
        <div className="hero-ctas">
          <a href="#contact" className="btn-primary">Get in touch ↗</a>
          <a href="Lakshya_Kumar_CV_2026.docx" download="Lakshya_Kumar_CV_2026.docx" className="btn-secondary">
            Download CV ↓
          </a>
          <a href="https://github.com/lakshyakumar" target="_blank" rel="noreferrer" className="btn-secondary">
            GitHub
          </a>
          <a href="https://linkedin.com/in/lakshya-kumar-52735737" target="_blank" rel="noreferrer" className="btn-secondary">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

function Experience() {
  useScrollReveal('.timeline-item')
  return (
    <section id="experience">
      <div className="section-label">// career</div>
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {EXPERIENCE.map((exp, i) => (
          <div className="timeline-item" key={i}>
            <div className={`timeline-dot${exp.current ? ' current' : ''}`} />
            <div className="timeline-card">
              <div className="exp-header">
                <div>
                  <div className="exp-role">{exp.role}</div>
                  <div className="exp-company">{exp.company}</div>
                </div>
                <span className="exp-date">{exp.date}</span>
              </div>
              {exp.stack && (
                <div className="exp-stack">
                  {exp.stack.map((s, j) => (
                    <span key={j} className="exp-stack-pill">{s}</span>
                  ))}
                </div>
              )}
              <ul className="exp-bullets">
                {exp.bullets.map((b, j) => (
                  <li key={j} dangerouslySetInnerHTML={{ __html: b }} />
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Achievements() {
  useScrollReveal('.achievement-card')
  return (
    <section id="achievements">
      <div className="section-label">// impact</div>
      <h2 className="section-title">Key Achievements</h2>
      <div className="achievements-grid">
        {ACHIEVEMENTS.map((a, i) => (
          <div className="achievement-card" key={i} style={{ transitionDelay: `${i * 70}ms` }}>
            <div className="achievement-value">{a.value}</div>
            <div className="achievement-label">{a.label}</div>
            <div className="achievement-detail">{a.detail}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ proj, delay }) {
  return (
    <a
      className="project-card"
      href={proj.url}
      target="_blank"
      rel="noreferrer"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="project-top">
        <span className="project-icon">{proj.icon}</span>
        <span className="project-arrow">↗</span>
      </div>
      <div className="project-name">{proj.name}</div>
      <div className="project-desc">{proj.desc}</div>
      <div className="project-tags">
        {proj.tags.map(([label, color], i) => (
          <span key={i} className={`tag ${color}`}>{label}</span>
        ))}
      </div>
    </a>
  )
}

function Projects() {
  useScrollReveal('.project-card')
  return (
    <section id="projects">
      <div className="section-label">// open source & builds</div>
      <h2 className="section-title">Selected Projects</h2>

      <div className="project-category-label">AI &amp; Agent Systems</div>
      <div className="projects-grid">
        {PROJECTS.ai.map((p, i) => <ProjectCard key={i} proj={p} delay={i * 60} />)}
      </div>

      <div className="project-category-label">Blockchain &amp; Web3</div>
      <div className="projects-grid">
        {PROJECTS.blockchain.map((p, i) => <ProjectCard key={i} proj={p} delay={i * 60} />)}
      </div>

      <div className="project-category-label">Developer Tooling</div>
      <div className="projects-grid">
        {PROJECTS.tooling.map((p, i) => <ProjectCard key={i} proj={p} delay={i * 60} />)}
      </div>
    </section>
  )
}

function Skills() {
  useScrollReveal('.skill-group')
  return (
    <section id="skills">
      <div className="section-label">// stack</div>
      <h2 className="section-title">Skills & Toolbox</h2>
      <div className="skills-grid">
        {SKILLS.map((group, i) => (
          <div className="skill-group" key={i} style={{ transitionDelay: `${i * 80}ms` }}>
            <div className="skill-group-title">
              <span className="icon">{group.icon}</span>
              {group.title}
            </div>
            <div className="skill-pills">
              {group.pills.map((p, j) => <span className="skill-pill" key={j}>{p}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Certifications() {
  return (
    <section id="certifications">
      <div className="section-label">// credentials</div>
      <h2 className="section-title">Certifications</h2>
      <div className="certs-list">
        {CERTIFICATIONS.map((c, i) => (
          <div className="cert-item" key={i}>
            <span className="cert-icon">🏅</span>
            <div>
              <div className="cert-name">{c.name}</div>
              <div className="cert-issuer">{c.issuer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-card">
        <h2 className="contact-title">Let's build something.</h2>
        <p className="contact-sub">
          Open to senior engineering, tech lead, and architecture roles in fintech, crypto, and AI.<br />
          Also available for advisory work in payments, tokenization, and applied AI systems.
        </p>
        <div className="contact-open-to">
          {['Senior / Staff Engineer', 'Tech Lead', 'Solutions Architect', 'Engineering Advisor', 'Crypto Payments', 'AI Agent Systems'].map((label, i) => (
            <span key={i} className="open-to-pill">{label}</span>
          ))}
        </div>
        <div className="contact-links">
          <a href="Lakshya_Kumar_CV_2026.docx" download="Lakshya_Kumar_CV_2026.docx" className="contact-link">
            📄 Download CV
          </a>
          <a href="mailto:lklsquare@gmail.com" className="contact-link">
            ✉️ lklsquare@gmail.com
          </a>
          <a href="https://linkedin.com/in/lakshya-kumar-52735737" target="_blank" rel="noreferrer" className="contact-link">
            💼 LinkedIn
          </a>
          <a href="https://github.com/lakshyakumar" target="_blank" rel="noreferrer" className="contact-link">
            🐙 GitHub
          </a>
        </div>
        <p className="contact-location">📍 HSR Sector 5, Bengaluru, Karnataka · +91-9008791697</p>
      </div>
    </section>
  )
}

// ── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <>
      <div className="bg-mesh" />
      <div className="bg-dots" />
      <Nav />
      <div className="container">
        <Hero />
        <div className="divider" />
        <Experience />
        <div className="divider" />
        <Achievements />
        <div className="divider" />
        <Projects />
        <div className="divider" />
        <Skills />
        <div className="divider" />
        <Certifications />
        <Contact />
      </div>
    </>
  )
}
