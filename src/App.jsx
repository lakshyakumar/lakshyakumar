import { useEffect, useRef } from 'react'
import './index.css'

// ── Data ────────────────────────────────────────────────────────────────────

const EXPERIENCE = [
  {
    role: 'Tech Lead (Contract)',
    company: 'Payram',
    date: 'Oct 2025 – Present',
    current: true,
    bullets: [
      'Leading development of a self-hosted crypto payments platform in <strong>Go</strong>.',
      'Built production wallet & payments app supporting live stablecoin transaction execution.',
      'Architected API-driven settlement workflows with production-grade reliability.',
    ],
  },
  {
    role: 'VP, Web3 & AI Solutions',
    company: 'Formidium',
    date: 'Feb 2024 – Oct 2025',
    bullets: [
      'Architected fund tokenization platform on EVM & Provenance using <strong>ERC-1400</strong>.',
      'Built enterprise RAG chatbot (LangChain + LangGraph), cutting retrieval latency by <strong>60%</strong>.',
      'CI/CD pipelines on AWS + Kubernetes → <strong>80%+ faster release cycles</strong>, <strong>99.9% uptime</strong>.',
      'Managed containerized deployment through AWS CodePipelines, using AWS CodeCommit, GitHub Actions, ECR, ECS, CodeBuild, and created the infrastructure using Terraform and CloudFormation.',
      'Designed custodial wallet with multi-sharded key storage & AWS Secrets Manager.',
      'Led and mentored <strong>15+ engineers</strong> across blockchain and AI teams.',
    ],
  },
  {
    role: 'Backend Engineer',
    company: 'Xalts',
    date: 'Apr 2023 – Dec 2023',
    bullets: [
      'Built custodial wallet platform with Web2-style onboarding and automated key generation.',
      'Implemented ERC-4337 smart contract wallets and cross-chain token bridge (Besu ↔ Avalanche).',
      'Mentored <strong>5 developers</strong>, delivered all modules on a 6-month timeline.',
    ],
  },
  {
    role: 'Blockchain Lead',
    company: 'Quadrant.io',
    date: 'Dec 2021 – Mar 2023',
    bullets: [
      'Architected blockchain platform processing <strong>25,000+ daily transactions</strong> across Polygon & Ethereum.',
      'Designed tokenomics and NFT-based incentive systems for the eQUAD ecosystem.',
      'Built private EVM chain with full-node infrastructure, bridge, and explorer.',
    ],
  },
  {
    role: 'Concept Engineer',
    company: 'Everledger',
    date: 'Feb 2021 – Oct 2021',
    bullets: [
      'Designed provenance & traceability widgets in React for diamond authenticity verification.',
      'Extended Hyperledger Fabric for China-specific deployment and regulatory compliance.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Accenture',
    date: 'Sep 2018 – Jan 2021',
    bullets: [
      'Contributed to <strong>Hyperledger Bevel</strong> — open-source enterprise blockchain deployment framework.',
      'Engineered CI/CD and GitOps pipelines for Hyperledger Fabric, Besu, and JP Morgan Quorum.',
    ],
  },
]

const PROJECTS = {
  ai: [
    {
      icon: '🧠',
      name: 'RepoMind',
      desc: 'Repository Intelligence MCP server for coding agents — structured codebase context and semantic search.',
      tags: [['MCP', 'blue'], ['Python', 'cyan'], ['AI Agents', 'purple']],
      url: 'https://github.com/lakshyakumar/repomind',
    },
    {
      icon: '🎨',
      name: 'Prism Canvas',
      desc: 'Full-spectrum market intelligence Claude Skill for founders — Lean Canvas meets competitor analysis.',
      tags: [['Claude', 'purple'], ['Skill', 'blue'], ['Founder Tools', 'orange']],
      url: 'https://github.com/lakshyakumar/prism-canvas',
    },
    {
      icon: '🕸️',
      name: 'ContextWeaver AI',
      desc: 'Context-aware agent using LangGraph and PydanticAI with token budgeting and dynamic subgraph switching.',
      tags: [['LangGraph', 'purple'], ['PydanticAI', 'blue'], ['FastAPI', 'cyan']],
      url: 'https://github.com/lakshyakumar/ContextWeaver-AI',
    },
    {
      icon: '📚',
      name: 'Knowledge Base AI',
      desc: 'AI agent that scrapes URIs, answers queries, and creates persistent knowledge bases.',
      tags: [['LangGraph', 'purple'], ['Python', 'cyan'], ['RAG', 'blue']],
      url: 'https://github.com/lakshyakumar/Knowledge-Base-AI',
    },
    {
      icon: '🔍',
      name: 'Advanced RAG',
      desc: 'Production RAG assistant with AI-rephrased query preprocessing before vectorized search.',
      tags: [['LangChain', 'blue'], ['LangGraph', 'purple'], ['Python', 'cyan']],
      url: 'https://github.com/lakshyakumar/Advanced-RAG',
    },
  ],
  blockchain: [
    {
      icon: '⚙️',
      name: 'Hyperledger Bevel',
      desc: 'Open-source accelerator for production DLT deployment on Kubernetes. Active contributor.',
      tags: [['Hyperledger', 'blue'], ['Kubernetes', 'cyan'], ['Open Source', 'green']],
      url: 'https://github.com/hyperledger/bevel',
    },
    {
      icon: '🏦',
      name: 'Tokenization Platform',
      desc: 'Fund tokenization across EVM and Provenance chains using ERC-1400 security token standards.',
      tags: [['ERC-1400', 'orange'], ['Solidity', 'blue'], ['EVM', 'purple']],
      url: 'https://github.com/lakshyakumar/Tokenization-Platform',
    },
    {
      icon: '💎',
      name: 'ERC-4337 Account Abstraction',
      desc: 'Step-by-step Solidity exploration of smart contract wallets and account abstraction.',
      tags: [['ERC-4337', 'orange'], ['Solidity', 'blue'], ['EVM', 'purple']],
      url: 'https://github.com/lakshyakumar/Demistifying-Account-Abstraction-A-Step-by-Step-Exploration',
    },
    {
      icon: '🔌',
      name: 'Wallact',
      desc: 'TypeScript/ethers.js wrapper for cleaner smart contract interaction. Published on npm.',
      tags: [['TypeScript', 'blue'], ['npm', 'cyan'], ['Ethereum', 'purple']],
      url: 'https://github.com/lakshyakumar/wallact',
    },
  ],
  tooling: [
    {
      icon: '⚡',
      name: 'Turbulent',
      desc: 'React and Next.js hook library for blockchain interfaces and wallet-connected apps.',
      tags: [['React', 'cyan'], ['npm', 'blue'], ['Web3', 'purple']],
      url: 'https://github.com/lakshyakumar/turbulent',
    },
    {
      icon: '🚀',
      name: 'Next.js Boilerplate',
      desc: 'Production-ready Next.js + Tailwind + Mongoose starter with auth and TypeScript.',
      tags: [['Next.js', 'blue'], ['TypeScript', 'cyan'], ['MongoDB', 'green']],
      url: 'https://github.com/lakshyakumar/Nextjs-boilerplate',
    },
    {
      icon: '📋',
      name: 'LeadPrep',
      desc: 'Comprehensive interview prep roadmap covering system design and engineering concepts. Live on GitHub Pages.',
      tags: [['Interview Prep', 'cyan'], ['HTML', 'orange'], ['GitHub Pages', 'green']],
      url: 'https://github.com/lakshyakumar/leadprep',
    },
  ],
}

const SKILLS = [
  {
    icon: '⛓️',
    title: 'Blockchain & Web3',
    pills: ['EVM', 'Solidity', 'ERC-4337', 'ERC-1400', 'Hyperledger Fabric', 'Hyperledger Besu', 'Polygon', 'Avalanche', 'Provenance', 'Account Abstraction'],
  },
  {
    icon: '🤖',
    title: 'AI & Agent Systems',
    pills: ['LangChain', 'LangGraph', 'RAG', 'PydanticAI', 'CrewAI', 'MCP Servers', 'Vector DBs', 'Semantic Search', 'AI Memory'],
  },
  {
    icon: '☁️',
    title: 'Cloud & DevOps',
    pills: ['AWS (ECS, EC2, Lambda)', 'Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins', 'CI/CD', 'GitOps'],
  },
  {
    icon: '💻',
    title: 'Languages & Frameworks',
    pills: ['Go', 'TypeScript', 'Python', 'JavaScript', 'Rust', 'Solidity', 'Node.js', 'React', 'Next.js', 'FastAPI'],
  },
]

// ── Custom hook: intersection observer ──────────────────────────────────────
function useScrollReveal(selector) {
  useEffect(() => {
    const els = document.querySelectorAll(selector)
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.12 }
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
          Tech Lead · <span>Blockchain</span> · AI · Crypto Payments
        </p>
        <p className="hero-summary">
          Engineering leader with 7+ years building production blockchain platforms, AI systems, and
          cloud-native backends. I ship reliable systems across EVM ecosystems, tokenization platforms,
          custodial wallets, AI agents, and crypto payments infrastructure.
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
            <span className="stat-value">15+</span>
            <span className="stat-label">Engineers led</span>
          </div>
        </div>
        <div className="hero-ctas">
          <a href="#contact" className="btn-primary">Get in touch ↗</a>
          <a href="Lakshya_Kumar_CV.docx" download="Lakshya_Kumar_CV.docx" className="btn-secondary">
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

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-card">
        <h2 className="contact-title">Let's build something.</h2>
        <p className="contact-sub">
          Open to senior engineering, tech lead, and architecture roles in fintech, crypto, and AI.
        </p>
        <div className="contact-links">
          <a href="Lakshya_Kumar_CV.docx" download="Lakshya_Kumar_CV.docx" className="contact-link">
            📄 Download DOCX CV
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
        <Projects />
        <div className="divider" />
        <Skills />
        <Contact />
      </div>
    </>
  )
}
