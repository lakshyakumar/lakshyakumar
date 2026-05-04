import { useEffect } from 'react'
import './index.css'

// ── Data ────────────────────────────────────────────────────────────────────

const EXPERIENCE = [
  {
    role: 'Tech Lead (Contract)',
    company: 'Payram',
    date: 'Oct 2025 – Present',
    current: true,
    stack: ['Go', 'Postgres', 'Redis', 'OpenTelemetry', 'Circuit Breakers', 'Distroless', 'Blue-Green'],
    bullets: [
      'Sole tech lead for a self-hosted crypto payments platform written in <strong>Go</strong> — owning architecture, implementation, and the production rollout.',
      'Built event-driven push and pull queues with concurrent workers and cron-scheduled async settlement, decoupling payment initiation from dispatch. Worker pools scale horizontally and <strong>blue-green pipelines give zero-downtime releases with sub-second dispatch under concurrent load</strong>.',
      'Wired in <strong>OpenTelemetry</strong> across the HTTP, Postgres, and Redis paths with W3C trace-context propagation; structured JSON logs on stdout carry request and trace IDs. Cut mean detection time on the last two production incidents to <strong>under 4 minutes</strong>.',
      'Every outbound call (DB, Redis, third-party rails) goes through a <strong>circuit breaker</strong> that classifies infrastructure errors separately from client-fault errors. A partial Redis blip in March never reached the API tier.',
      '<strong>Postgres advisory locks</strong> gate the cron-scheduled settlement worker so exactly one replica runs per tick — closed out a duplicate-charge race we hit in the first week of the rollout.',
      'Redis-backed <strong>token-bucket rate limiter</strong> with an explicit fail-closed branch on Redis errors; holds the 200 rps cap across replicas, verified at <strong>1,200 rps with 6 instances</strong> during load runs.',
      'Distroless multistage image running as nonroot, <strong>~26 MB final size (down from ~410 MB)</strong>. BuildKit cache mounts pulled CI build time from roughly 8 minutes down to about 110 seconds.',
      'Graceful SIGTERM handler with a bounded 30-second drain and reverse-order resource teardown — the connection-pool panics we used to see in deploy logs are gone.',
    ],
  },
  {
    role: 'VP, Web3 & AI Solutions',
    company: 'Formidium',
    date: 'Feb 2024 – Oct 2025',
    stack: ['ERC-1400', 'EVM', 'Provenance', 'LangChain', 'LangGraph', 'Next.js', 'MCP', 'Postgres', 'Redis'],
    bullets: [
      'Grew the Web3 and AI organization <strong>from six to fifteen engineers</strong> across two product lines, owning hiring, architecture review, and quarterly delivery.',
      'Delivered an institutional <strong>fund tokenization platform</strong> on EVM and Provenance using ERC-1400, with ACID semantics on the off-chain ledger and BASE for distributed on-chain state.',
      'Built an enterprise <strong>RAG assistant</strong> in Python with LangChain, LangGraph, and a Next.js front-end that <strong>cut analyst research time by 60%</strong> on internal document retrieval.',
      'Brought NAV update lag <strong>from minutes down to seconds</strong> through blockchain oracles and an event-driven update pipeline.',
      'Removed single points of failure in custody by re-architecting the wallet layer around <strong>multi-sharded key storage and AWS Secrets Manager</strong>.',
      'Standardised the Web3 services on a layered architecture with one-way dependencies, JSON logging on stdout, and OpenTelemetry tracing across HTTP, Postgres, and the wallet RPC. <strong>Median incident triage moved from about 45 minutes to roughly 12 over two quarters</strong>.',
      'Moved Postgres schema changes to versioned, ordered migration files run as a deploy pre-hook. The "new binary on old schema" incident class went from roughly <strong>one a month to zero</strong> across the year that followed.',
      'Built a Redis-backed distributed rate limiter for the RAG assistant\'s document API with a fail-open branch on Redis blips for the read-mostly workload; held caps across the 6-replica analyst pilot at peak (~480 rps).',
      'Split health probes into a liveness check on a private listener and a readiness check that only flipped green when both Postgres and the vector DB were reachable. Brought spurious pod kills down to near zero.',
      'Released MCP-compatible AI tooling for internal knowledge retrieval and developer workflows; rolled out SSO across Formidium products.',
    ],
  },
  {
    role: 'Backend Engineer',
    company: 'Xalts',
    date: 'Apr 2023 – Dec 2023',
    stack: ['ERC-4337', 'Avalanche', 'Hyperledger Besu', 'AWS ECS', 'Node.js', 'TypeScript', 'Testcontainers'],
    bullets: [
      'Owned all backend and blockchain modules over a six-month delivery window while mentoring a team of <strong>five</strong>.',
      'Onboarded banking clients to a private EVM chain on Avalanche and Hyperledger Besu via a <strong>custodial wallet with Web2 onboarding</strong> and automated key generation.',
      'Used <strong>ERC-4337 account abstraction</strong> to enable programmable enterprise transaction flows through smart contract wallets.',
      'Implemented cross-chain transfers between Besu and Avalanche with a blockchain indexer and token bridge — cutting <strong>settlement from hours to under a minute</strong>.',
      'Deployed services on AWS (VMs, ECS, S3) using blue-green and rolling rollouts, API gateway rate limiting, and cross-AZ load balancing.',
      'Split the test suite into a fast tier of about <strong>340 unit tests on in-memory fakes</strong> (finishing in under 10 seconds) and an integration tier on testcontainers for Postgres and the Besu node. CI ran the same <code>make test</code> target the team used locally.',
      'Added a profiling endpoint behind a private listener on the bridge service. <strong>Caught a heap leak in the relayer about 20 minutes after the symptom showed up in production</strong>.',
      'Sized the indexer\'s Postgres pool against <code>replicas × pool_size ≤ db_max_connections − 20%</code>. Fixed a 90th-percentile latency spike that had been blamed on Besu for two sprints.',
    ],
  },
  {
    role: 'Blockchain Lead',
    company: 'Quadrant.io',
    date: 'Dec 2021 – Mar 2023',
    stack: ['Polygon', 'Ethereum', 'Go', 'Message Queues', 'AWS Lambda', 'Fuzz Testing', 'eQUAD'],
    bullets: [
      'Led a <strong>five-engineer team</strong> across multiple blockchain applications and production releases.',
      'Designed and built a Polygon and Ethereum platform running <strong>25,000+ daily transactions with zero downtime</strong> — using concurrent processing, message queues, Go channels, and retry-and-recovery logic.',
      'Designed the platform\'s private EVM chain for multi-region data consistency, including distributed database architecture, full-node infrastructure, bridge, explorer, and APIs.',
      'Designed tokenomics and an <strong>NFT-based incentive system for the eQUAD token</strong>; deployed services on AWS Lambda for elastic scale.',
      'Wrote <strong>fuzz targets for the address validator and the bridge encoder</strong>, with crash corpora committed back to the repo as regression tests. One run uncovered a UTF-8 normalisation bug that had been live in staging for over a month.',
      'Health probes wired to bypass the rate limiter so platform probes never burned quota — <strong>spurious pod restarts during traffic spikes dropped by roughly 70%</strong>.',
      'Benchmarked the hot-path RLP encoder; caught a refactor in review that would have made it about <strong>3.4× slower</strong>. The fix went out before the change shipped.',
    ],
  },
  {
    role: 'Concept Engineer',
    company: 'Everledger',
    date: 'Feb 2021 – Oct 2021',
    stack: ['React', 'Hyperledger Fabric', 'Hyperledger Besu', 'WeChat API'],
    bullets: [
      'Shipped <strong>React provenance widgets for diamond authenticity verification</strong> into client-facing production applications.',
      'Expanded the platform into the Chinese market through a <strong>WeChat API integration</strong> and Hyperledger Fabric extensions for local compliance.',
      'Delivered a <strong>Fabric-to-Besu migration proof of concept</strong> that informed the company\'s later chain strategy.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Accenture',
    date: 'Sep 2018 – Jan 2021',
    stack: ['Hyperledger Fabric', 'Hyperledger Besu', 'JP Morgan Quorum', 'Kubernetes', 'Jenkins', 'Travis CI', 'GitOps'],
    bullets: [
      'Core contributor to <strong>Hyperledger Bevel</strong>, the open-source Kubernetes framework for production blockchain deployment now used widely across enterprise.',
      'Built deployment pipelines for <strong>Hyperledger Fabric, Hyperledger Besu, and JP Morgan Quorum</strong> with CI/CD and GitOps via Jenkins and Travis CI.',
      'Contributed internal blockchain solutions back to <strong>Hyperledger Labs</strong> and the wider open-source ecosystem.',
    ],
  },
]

const ACHIEVEMENTS = [
  { value: '25K+', label: 'Daily transactions', detail: 'Polygon & Ethereum platform with zero unplanned downtime, sub-second processing via Go channels and message queues' },
  { value: '6 → 15', label: 'Engineering team grown', detail: 'scaled the Web3 & AI org at Formidium across two product lines, owning hiring, architecture, and quarterly delivery' },
  { value: '< 4 min', label: 'Incident detection time', detail: 'OpenTelemetry across HTTP / Postgres / Redis with W3C trace-context propagation and structured JSON logs' },
  { value: '60%', label: 'Faster analyst research', detail: 'enterprise RAG assistant with LangChain + LangGraph in production at Formidium' },
  { value: '45 → 12 min', label: 'Median triage time', detail: 'standardised layered architecture, JSON logging, and OpenTelemetry tracing across Web3 services' },
  { value: '1,200 rps', label: 'Verified throughput', detail: 'Redis-backed token-bucket rate limiter holding the 200 rps cap across 6 instances under load' },
  { value: '26 MB', label: 'Distroless image', detail: 'down from ~410 MB on the first cut; BuildKit cache mounts dropped CI build time from 8 min to 110s' },
  { value: 'mins → secs', label: 'NAV update lag', detail: 'blockchain oracles and event-driven pipelines decoupled on-chain events from downstream consumers' },
]

const FEATURED = {
  icon: '🔨',
  name: 'Mjolnir',
  tagline: 'Open-source production-readiness audit. Language and agent agnostic.',
  desc: 'Walks any backend service against a 19-item canonical checklist — cancellation propagation, connection pooling, circuit breakers, distributed rate limiting, leader election, structured logging, OpenTelemetry tracing, RED metrics, profiling, graceful shutdown, distroless images, fuzz tests, canary tests for cross-process invariants, schema migrations, and more — and returns a single WORTHY or NOT WORTHY verdict with file-level evidence. Recommends idiomatic libraries per detected stack across Go, Node, Python, Java, and Rust. Ships as a skill for Claude Code and Cowork.',
  tags: [['Open Source', 'green'], ['Production-Readiness', 'cyan'], ['Multi-Language', 'blue'], ['Claude Skill', 'purple']],
  url: 'https://github.com/lakshyakumar/mjolnir',
}

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
      name: 'Advanced RAG Assistant',
      desc: 'Production AI assistant for document Q&A. AI-rephrases and simplifies user queries before vectorised retrieval — improving search relevance significantly. 60% faster retrieval through LangChain and LangGraph orchestration.',
      tags: [['LangChain', 'blue'], ['LangGraph', 'purple'], ['Python', 'cyan']],
      url: 'https://github.com/lakshyakumar/Advanced-RAG',
    },
    {
      icon: '🛠️',
      name: 'TypeScript MCP Server',
      desc: 'Production-grade MCP server in TypeScript over JSON-RPC 2.0. Modular tool registration, scalable handler architecture, horizontally scalable, and ready for integration into any AI agent that speaks the Model Context Protocol.',
      tags: [['MCP', 'blue'], ['TypeScript', 'cyan'], ['JSON-RPC', 'purple']],
      url: 'https://github.com/lakshyakumar/typescript-mcp',
    },
    {
      icon: '🎬',
      name: 'Filmy Agent',
      desc: 'Rust agent that generates cinematic prompts for image and video models. Combines movie knowledge retrieval with prompt engineering to produce rich, director-style visual descriptions for AI media generation tools.',
      tags: [['Rust', 'orange'], ['AI Agents', 'purple'], ['Generative AI', 'blue']],
      url: 'https://github.com/lakshyakumar/filmy_agent',
    },
    {
      icon: '🔥',
      name: 'Crucible',
      desc: '100-challenge self-learning platform spanning AI, blockchain, scalable systems, and concurrency. Each challenge is a self-contained problem with progressive difficulty — built to close the gap between theory and production-grade thinking.',
      tags: [['TypeScript', 'blue'], ['GitHub Pages', 'green'], ['Challenges', 'cyan']],
      url: 'https://lakshyakumar.github.io/crucible',
    },
  ],
  blockchain: [
    {
      icon: '⚙️',
      name: 'Hyperledger Bevel',
      desc: 'Open-source accelerator for distributed ledger deployment on Kubernetes. Core contributor to deployment pipelines for Hyperledger Fabric, Besu, and JP Morgan Quorum — widely adopted across enterprise blockchain projects globally.',
      tags: [['Hyperledger', 'blue'], ['Kubernetes', 'cyan'], ['Open Source', 'green']],
      url: 'https://github.com/hyperledger/bevel',
    },
    {
      icon: '🏦',
      name: 'Fund Tokenization Platform',
      desc: 'End-to-end tokenization across EVM and Provenance for institutional funds. Staking, secondary sales, and token contracts. ERC-1400 security tokens with ACID semantics on the off-chain ledger and BASE for distributed on-chain state.',
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
      desc: 'Lightweight TypeScript / ethers.js wrapper that simplifies smart contract interaction — cleaner API, better error handling, and reduced boilerplate for developers building on EVM chains. Published to npm.',
      tags: [['TypeScript', 'blue'], ['npm', 'cyan'], ['ethers.js', 'purple']],
      url: 'https://github.com/lakshyakumar/wallact',
    },
  ],
  tooling: [
    {
      icon: '⚡',
      name: 'Turbulent',
      desc: 'Node performance toolkit and React/Next.js hook library for blockchain-connected UIs. Provides clean hooks for wallet state, transaction status, chain switching, and balance polling — without the boilerplate of raw wagmi or ethers setup.',
      tags: [['React', 'cyan'], ['npm', 'blue'], ['Web3 Hooks', 'purple']],
      url: 'https://github.com/lakshyakumar/turbulent',
    },
    {
      icon: '📊',
      name: 'XlToDb',
      desc: 'Excel-to-database loader published on npm. Streams large spreadsheets into Postgres / MySQL with schema inference, batched inserts, and clean error reporting — built for analyst-driven data ingestion workflows.',
      tags: [['Node.js', 'green'], ['npm', 'blue'], ['ETL', 'orange']],
      url: 'https://www.npmjs.com/package/xltodb',
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

const ARTICLES = [
  {
    title: 'Mastering GitFlow: A Production-Ready Branching Strategy',
    desc: 'A deep look at GitFlow as a branching strategy for enterprise development teams — release trains, hotfix discipline, and where it breaks down at scale.',
    url: 'https://medium.com/@lklsquare',
    tag: 'Engineering Practices',
  },
  {
    title: 'Teaching AI to Remember',
    desc: 'Episodic, semantic, and procedural memory in AI agents. How to design memory layers that survive context window resets and stay grounded in source data.',
    url: 'https://medium.com/@lklsquare',
    tag: 'AI Agents',
  },
  {
    title: 'Vector Search in MongoDB',
    desc: 'Best practices for real-time semantic retrieval in MongoDB — index sizing, hybrid lexical + vector ranking, and the operational gotchas you only hit in production.',
    url: 'https://medium.com/@lklsquare',
    tag: 'Vector Search',
  },
]

const SKILLS = [
  {
    icon: '⛓️',
    title: 'Blockchain & Web3',
    pills: ['EVM', 'Solidity', 'ERC-4337', 'ERC-1400', 'Hyperledger Fabric', 'Hyperledger Besu', 'Polygon', 'Avalanche', 'Provenance', 'Account Abstraction', 'Cross-chain Bridges', 'Tokenization'],
  },
  {
    icon: '🤖',
    title: 'AI & Agent Systems',
    pills: ['LangChain', 'LangGraph', 'CrewAI', 'PydanticAI', 'RAG Pipelines', 'MCP Servers', 'Vector DBs', 'Semantic Search', 'Tool Orchestration', 'AI Memory'],
  },
  {
    icon: '🏗️',
    title: 'Production-Readiness',
    pills: ['OpenTelemetry', 'Structured Logging', 'RED Metrics', 'Circuit Breakers', 'Distributed Rate Limiting', 'Leader Election', 'Graceful Shutdown', 'Distroless Containers', 'Fuzz / Property Tests', 'Schema Migrations'],
  },
  {
    icon: '⚡',
    title: 'Backend & Systems',
    pills: ['Microservices', 'REST', 'Event-driven Queues', 'Concurrent Worker Pools', 'Distributed Databases', 'ACID & BASE', 'Connection Pooling', 'Horizontal Scaling', 'Postgres', 'Redis'],
  },
  {
    icon: '☁️',
    title: 'Cloud & DevOps',
    pills: ['AWS ECS', 'EC2', 'Lambda', 'S3', 'ECR', 'CodePipeline', 'Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins', 'GitOps', 'Blue-Green', 'Canary', 'Rolling Deploys'],
  },
  {
    icon: '💻',
    title: 'Languages',
    pills: ['Go', 'TypeScript', 'JavaScript', 'Python', 'Solidity', 'Rust', 'Node.js', 'FastAPI', 'React', 'Next.js'],
  },
  {
    icon: '🧭',
    title: 'Leadership & Delivery',
    pills: ['Architecture Review', 'Team Lead (up to 15)', 'Hiring', 'Mentorship', 'Delivery Management', 'Technical Strategy', 'Cross-functional Coordination'],
  },
]

const EDUCATION = [
  {
    degree: 'M.Tech, Computational Mathematics',
    school: 'NIT Surathkal, Karnataka',
    date: 'Jul 2016 – Jun 2018',
  },
  {
    degree: 'B.Tech',
    school: 'Delhi Technological University',
    date: 'Aug 2011 – Jun 2015',
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
        <li><a href="#writing">Writing</a></li>
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
          Available for senior engineering &amp; tech lead roles
        </div>
        <h1 className="hero-name">Lakshya Kumar</h1>
        <p className="hero-title">
          Engineering Leader · <span>AI, Web3, Distributed Systems</span> · 7+ Years
        </p>
        <p className="hero-summary">
          Engineering leader with 7+ years across fintech, AI, and Web3. Recent work: a Polygon and
          Ethereum payments platform handling <strong>25,000+ daily transactions</strong>, an
          institutional fund tokenization platform on EVM and Provenance, and an enterprise RAG
          assistant now in production. Comfortable moving between architecture review and Go
          concurrency code, and have grown engineering teams <strong>from five to fifteen</strong>
          while staying hands-on. Core maintainer of <strong>Hyperledger Bevel</strong>, author of{' '}
          <strong>Mjolnir</strong> (an open-source production-readiness audit), and a regular
          technical writer on Medium.
        </p>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-value">7+</span>
            <span className="stat-label">Years experience</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">25K+</span>
            <span className="stat-label">Daily txns scaled</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">15</span>
            <span className="stat-label">Engineers led</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">60%</span>
            <span className="stat-label">Faster RAG retrieval</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">&lt; 4 min</span>
            <span className="stat-label">Incident MTTR</span>
          </div>
        </div>
        <div className="hero-ctas">
          <a href="#contact" className="btn-primary">Get in touch ↗</a>
          <a href="Lakshya_Kumar.pdf" download className="btn-secondary">
            Download CV ↓
          </a>
          <a href="https://github.com/lakshyakumar" target="_blank" rel="noreferrer" className="btn-secondary">
            GitHub
          </a>
          <a href="https://linkedin.com/in/lakshya-kumar-52735737" target="_blank" rel="noreferrer" className="btn-secondary">
            LinkedIn
          </a>
          <a href="https://medium.com/@lklsquare" target="_blank" rel="noreferrer" className="btn-secondary">
            Medium
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

function FeaturedProject() {
  return (
    <section id="featured">
      <div className="section-label">// featured</div>
      <h2 className="section-title">Featured Open Source</h2>
      <a className="featured-card" href={FEATURED.url} target="_blank" rel="noreferrer">
        <div className="featured-glow" />
        <div className="featured-top">
          <div className="featured-icon">{FEATURED.icon}</div>
          <div className="featured-arrow">↗</div>
        </div>
        <div className="featured-name">{FEATURED.name}</div>
        <div className="featured-tagline">{FEATURED.tagline}</div>
        <div className="featured-desc">{FEATURED.desc}</div>
        <div className="project-tags">
          {FEATURED.tags.map(([label, color], i) => (
            <span key={i} className={`tag ${color}`}>{label}</span>
          ))}
        </div>
      </a>
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
      <div className="section-label">// open source &amp; builds</div>
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

function Writing() {
  useScrollReveal('.article-card')
  return (
    <section id="writing">
      <div className="section-label">// writing</div>
      <h2 className="section-title">Writing &amp; Open Source</h2>
      <p className="section-sub">
        I write on Medium about account abstraction (ERC-4337), AI agent tooling, vector search,
        blockchain architecture, and MCP servers. Maintainer of{' '}
        <a href="https://github.com/lakshyakumar/mjolnir" target="_blank" rel="noreferrer">Mjolnir</a>,{' '}
        <a href="https://github.com/lakshyakumar/turbulent" target="_blank" rel="noreferrer">Turbulent</a>,{' '}
        <a href="https://github.com/lakshyakumar/wallact" target="_blank" rel="noreferrer">Wallact</a>, and XlToDb on npm.
      </p>
      <div className="articles-grid">
        {ARTICLES.map((a, i) => (
          <a key={i} className="article-card" href={a.url} target="_blank" rel="noreferrer" style={{ transitionDelay: `${i * 70}ms` }}>
            <div className="article-tag">{a.tag}</div>
            <div className="article-title">{a.title}</div>
            <div className="article-desc">{a.desc}</div>
            <div className="article-cta">Read on Medium ↗</div>
          </a>
        ))}
      </div>
    </section>
  )
}

function Skills() {
  useScrollReveal('.skill-group')
  return (
    <section id="skills">
      <div className="section-label">// stack</div>
      <h2 className="section-title">Skills &amp; Toolbox</h2>
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

function Education() {
  return (
    <section id="education">
      <div className="section-label">// education</div>
      <h2 className="section-title">Education</h2>
      <div className="edu-grid">
        {EDUCATION.map((e, i) => (
          <div className="edu-item" key={i}>
            <div className="edu-icon">🎓</div>
            <div>
              <div className="edu-degree">{e.degree}</div>
              <div className="edu-school">{e.school}</div>
              <div className="edu-date">{e.date}</div>
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
          <a href="Lakshya_Kumar.pdf" download className="contact-link">
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
          <a href="https://medium.com/@lklsquare" target="_blank" rel="noreferrer" className="contact-link">
            ✍️ Medium
          </a>
        </div>
        <p className="contact-location">📍 Bengaluru, India · +91-9008791697</p>
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
        <FeaturedProject />
        <div className="divider" />
        <Projects />
        <div className="divider" />
        <Writing />
        <div className="divider" />
        <Skills />
        <div className="divider" />
        <Education />
        <div className="divider" />
        <Certifications />
        <Contact />
      </div>
    </>
  )
}
