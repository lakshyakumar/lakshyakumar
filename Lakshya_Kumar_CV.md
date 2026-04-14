# LAKSHYA KUMAR
**Tech Lead | Senior Fullstack Engineer, AI & Web3 Systems**

HSR Sector 5, Bengaluru, Karnataka 560102 | +91-9008791697 | lklsquare@gmail.com
[LinkedIn](https://www.linkedin.com/in/lakshya-kumar-52735737/) | [GitHub](https://github.com/lakshyakumar)

---

## PROFESSIONAL SUMMARY

Tech Lead and senior fullstack engineer with 7+ years of experience building high-throughput, scalable production systems across AI, cloud-native services, and Web3 platforms. Deep expertise in distributed systems, concurrent architecture, ACID/BASE database design, and zero-downtime deployment strategies including blue-green, canary, and rolling releases. Proven track record delivering systems that scale to 25,000+ daily transactions, reducing release cycles by 80%+, maintaining 99.9% uptime, and leading teams of 5 to 15+ engineers across fintech, enterprise, and open-source environments.

---

## CORE SKILLS

**Languages:** JavaScript, TypeScript, Python, Go, Solidity, Rust

**Backend:** Node.js, REST APIs, Microservices, LangChain, LangGraph, CrewAI, PydanticAI

**Blockchain:** EVM, Provenance, Hyperledger Fabric/Besu, Polygon, Avalanche, ERC-1400, ERC-4337, Account Abstraction, Fund Tokenization, Cross-chain Bridges

**AI & Agents:** RAG, Semantic Search, Vector Databases, AI Memory Systems, MCP Servers, Tool Orchestration, Context Management

**Cloud & DevOps:** AWS (ECS, EC2, Lambda, S3, ECR, CodePipeline), Docker, Kubernetes, GitHub Actions, Jenkins, GitOps

**Scalability:** High-throughput distributed systems, Horizontal scaling, Zero-downtime deploys, Blue-green/Canary/Rolling strategies, Event-driven push/pull queues, Concurrent workers & crons, ACID/BASE, Distributed DBs, Connection pooling

**Leadership:** Technical Architecture, Team Lead (15+ engineers), Mentorship, Delivery Management

---

## PROFESSIONAL EXPERIENCE

### Tech Lead (Contract) | Payram | Oct 2025 – Present

- Architected a self-hosted crypto payments platform in Go with event-driven push/pull queues, concurrent workers, and cron-based job scheduling — enabling the platform to process transactions with zero manual intervention and consistent sub-second dispatch times.
- Built and launched a production wallet and payments application with horizontally scalable worker pools, allowing the system to absorb concurrent payment spikes without latency degradation across multiple merchant accounts.
- Designed rate-limited API gateways and blue-green deployment pipelines, achieving zero-downtime releases and enabling rapid iteration without service interruption.
- Implemented event-based pull queues for async settlement dispatch, decoupling payment initiation from settlement and improving end-to-end throughput consistency under peak load.
- Engineered robust error handling, retry logic, and idempotency guarantees across payment flows, ensuring no double-spend or missed settlement under failure conditions.
- Owned full lifecycle — architecture, implementation, deployment, and production rollout — as sole contract Tech Lead.

### VP, Web3 & AI Solutions | Formidium | Feb 2024 – Oct 2025

- Architected and scaled a fund tokenization platform on EVM and Provenance Blockchain using ERC-1400, with ACID-compliant database transactions for financial ledger consistency and BASE-aligned distributed state for on-chain sync — supporting institutional-grade fund operations.
- Built an enterprise RAG chatbot with Python, LangChain, LangGraph, and Next.js, reducing document retrieval latency by **60%** and cutting analyst research time significantly across the fund management workflow.
- Architected custody wallet infrastructure with multi-sharded key storage and AWS Secrets Manager, eliminating single points of failure in enterprise key management.
- Developed blockchain oracles and event-driven data pipelines with push queues, delivering real-time NAV updates to fund systems and decoupling on-chain events from downstream consumers — **reducing data lag from minutes to seconds**.
- Built CI/CD pipelines on AWS and Kubernetes with blue-green and canary strategies, applying SOLID design principles across services and **cutting delivery cycles by 80%+** while maintaining **99.9% uptime** across 5+ production services.
- Managed containerized deployment through AWS CodePipelines, using AWS CodeCommit, GitHub Actions, ECR, ECS, CodeBuild, and created the infrastructure using Terraform and CloudFormation.
- Implemented SSO across the Formidium product suite, improving secure access for clients and internal engineering teams.
- Designed monitoring, alerting, and failover controls with database concurrency controls and connection pooling to handle high-throughput read/write workloads — sustaining **99.9% uptime** across all distributed services.
- Built MCP-compatible AI tooling patterns for enterprise knowledge retrieval and developer productivity workflows.
- Led and mentored **15+ engineers** across blockchain and AI initiatives, improving delivery velocity, code quality, and cross-team coordination.

### Backend Engineer | Xalts | Apr 2023 – Dec 2023

- Developed a custodial wallet platform with Web2-style onboarding and automated private key generation, enabling banking clients to onboard to a private EVM chain using Avalanche and Hyperledger Besu without friction.
- Implemented smart contract wallets using ERC-4337 and Account Abstraction, enabling programmable transaction flows and policy enforcement for enterprise clients.
- Built a blockchain indexer and token bridge for cross-chain asset transfers between Besu and Avalanche, reducing cross-chain settlement time significantly and enabling seamless interoperability.
- Deployed production services on AWS (VMs, ECS, S3) using blue-green and rolling deployment strategies, load-balanced across availability zones with rate limiting at the API gateway — achieving high availability under peak transaction loads.
- Engineered horizontally scalable wallet, bridge, and indexing services with automatic failover and retry logic, sustaining consistent performance under spike conditions.
- Contributed to system design decisions across backend, blockchain, and infrastructure layers, influencing the overall platform architecture.
- Mentored a team of **5 developers** and delivered all backend and blockchain modules within a 6-month timeline.

### Blockchain Lead | Quadrant.io | Dec 2021 – Mar 2023

- Architected a blockchain platform sustaining **25,000+ daily transactions** across Polygon and Ethereum with no data loss or unplanned downtime.
- Engineered concurrent transaction processing using message queues and Go channels for async event passing with retry and failure-recovery workflows — sustaining high throughput with sub-second processing times reliably.
- Developed a private EVM chain with distributed database architecture, multi-region data consistency, full-node infrastructure, a blockchain explorer, cross-chain bridge, and public APIs — forming the core of the eQUAD ecosystem.
- Designed tokenomics and NFT-based incentive systems for the eQUAD token, driving on-chain user engagement and aligning token utility with platform growth.
- Engineered transaction monitoring, retry mechanisms, and failure-recovery systems to guarantee finality and prevent silent failures across high-volume pipelines.
- Deployed microservices on AWS Lambda for elastic horizontal scaling, reducing infrastructure costs while maintaining consistent throughput under variable load.
- Led a **5-member engineering team** across multiple concurrent blockchain applications and production releases.

### Concept Engineer | Everledger | Feb 2021 – Oct 2021

- Designed provenance and traceability widgets in React for diamond authenticity verification, integrated into client-facing production applications used by industry stakeholders globally.
- Integrated track-and-trace APIs with WeChat for the Chinese consumer market, expanding platform reach to a new geography and enabling region-specific product experiences.
- Extended Hyperledger Fabric architecture for China-specific deployment and regulatory compliance requirements, working within strict data localisation and audit constraints.
- Built a proof-of-concept migration from Hyperledger Fabric to Hyperledger Besu, demonstrating EVM interoperability and informing the team's future chain strategy.
- Collaborated cross-functionally with product and design teams to integrate blockchain traceability into intuitive consumer-facing experiences.

### Software Engineer | Accenture | Sep 2018 – Jan 2021

- Contributed to **[Hyperledger Bevel](https://github.com/hyperledger/bevel)**, an open-source framework for production-ready blockchain deployment on Kubernetes — now widely adopted across enterprise deployments globally.
- Engineered deployment pipelines for Hyperledger Fabric, Hyperledger Besu, and JP Morgan Quorum, enabling repeatable, auditable enterprise blockchain provisioning at scale.
- Implemented CI/CD and GitOps workflows using Jenkins and Travis CI for enterprise blockchain delivery pipelines, reducing manual deployment effort and improving release consistency.
- Contributed internal blockchain solutions to Hyperledger Labs and the broader open-source ecosystem, accelerating community tooling for distributed ledger adoption.
- Developed APIs and scalable infrastructure using Ripple and Hyperledger technologies on Kubernetes, supporting cross-border payment and settlement use cases for financial clients.

---

## KEY ACHIEVEMENTS

- Reduced deployment release cycles by **80%+** through CI/CD pipeline modernization with blue-green and canary strategies on AWS and Kubernetes
- Maintained **99.9% uptime** across distributed production services through monitoring, alerting, failover design, and connection pooling
- Decreased AI document retrieval latency by **60%** via optimized RAG architecture with LangChain and LangGraph
- Scaled a blockchain platform to **25,000+ daily transactions** across Polygon and Ethereum with sub-second processing times
- Led and delivered blockchain and AI projects with teams of **5 to 15+ engineers** across multiple organizations
- Reduced on-chain data pipeline lag **from minutes to seconds** through event-driven push queue architecture

---

## SELECTED PROJECTS

### AI & Agent Systems

**RepoMind** — Repository Intelligence MCP server for coding agents. Provides structured codebase context and semantic search for AI-assisted development.
GitHub: [github.com/lakshyakumar/repomind](https://github.com/lakshyakumar/repomind)

**Prism Canvas** — Full-spectrum market intelligence Claude Skill for founders. Lean Canvas extended with competitor analysis and validation frameworks.
GitHub: [github.com/lakshyakumar/prism-canvas](https://github.com/lakshyakumar/prism-canvas)

**ContextWeaver AI** — Context-aware AI agent using LangGraph and PydanticAI. Web search, knowledge base construction, token budgeting, and dynamic subgraph switching.
GitHub: [github.com/lakshyakumar/ContextWeaver-AI](https://github.com/lakshyakumar/ContextWeaver-AI)

**Knowledge Base AI** — FastAPI-based AI agent that scrapes URIs, answers queries, and creates persistent knowledge bases using LangGraph and PydanticAI.
GitHub: [github.com/lakshyakumar/Knowledge-Base-AI](https://github.com/lakshyakumar/Knowledge-Base-AI)

**Advanced RAG Assistant** — Production AI assistant with AI-rephrased query preprocessing before vectorized search, reducing retrieval time by 60%. Built with LangChain and LangGraph.
GitHub: [github.com/lakshyakumar/Advanced-RAG](https://github.com/lakshyakumar/Advanced-RAG)

**TypeScript MCP Server** — Production-grade MCP server in TypeScript via JSON-RPC 2.0, modular and scalable for AI tool delivery and context management.
GitHub: [github.com/lakshyakumar/typescript-mcp](https://github.com/lakshyakumar/typescript-mcp)

**Filmy Agent** — Rust-based AI agent for generating cinematic prompts for images and video.
GitHub: [github.com/lakshyakumar/filmy_agent](https://github.com/lakshyakumar/filmy_agent)

**Crucible** — 100-challenge mastery platform across AI, Blockchain, Scalable Systems & Concurrency.
Live: [lakshyakumar.github.io/crucible](https://lakshyakumar.github.io/crucible)

**AI Developer Tooling / MCP Server Infrastructure** — MCP-compatible tooling for structured context delivery, semantic search, AI memory access, and execution workflows.

### Blockchain & Web3

**Hyperledger Bevel** — Open-source accelerator for production-ready distributed ledger deployment on Kubernetes. Active contributor and committer.
GitHub: [github.com/hyperledger/bevel](https://github.com/hyperledger/bevel)

**Fund Tokenization Platform** — Staking, sales, and token contracts across EVM-compatible and Provenance chains using ERC-1400 security token standards; reduced fund onboarding time significantly.
GitHub: [github.com/lakshyakumar/Tokenization-Platform](https://github.com/lakshyakumar/Tokenization-Platform)

**ERC-4337 Account Abstraction** — Step-by-step Solidity implementation of smart contract wallets and account abstraction patterns.
GitHub: [github.com/lakshyakumar/Demistifying-Account-Abstraction-A-Step-by-Step-Exploration](https://github.com/lakshyakumar/Demistifying-Account-Abstraction-A-Step-by-Step-Exploration)

### Developer Tooling & Libraries

**Turbulent** — React and Next.js hook library for blockchain interfaces and wallet-connected applications. Published on npm.
GitHub: [github.com/lakshyakumar/turbulent](https://github.com/lakshyakumar/turbulent) | npm: [npmjs.com/package/turbulent](https://www.npmjs.com/package/turbulent)

**Wallact** — TypeScript/ethers.js wrapper for simplified smart contract interaction. Published on npm.
GitHub: [github.com/lakshyakumar/wallact](https://github.com/lakshyakumar/wallact) | npm: [npmjs.com/package/wallact](https://www.npmjs.com/package/wallact)

**XlToDb** — Excel-to-database migration tool. Published on npm.
npm: [npmjs.com/package/xltodb](https://www.npmjs.com/package/xltodb)

**Next.js Boilerplate** — Production-ready Next.js + Tailwind + Mongoose starter with authentication and TypeScript.
GitHub: [github.com/lakshyakumar/Nextjs-boilerplate](https://github.com/lakshyakumar/Nextjs-boilerplate)

**NestJS Mongoose Boilerplate** — Enterprise NestJS boilerplate with Mongoose, TypeScript, and modular architecture.
GitHub: [github.com/lakshyakumar/nestjs-mongoose-boilerplate](https://github.com/lakshyakumar/nestjs-mongoose-boilerplate)

**LeadPrep** — Comprehensive interview preparation roadmap covering system design, algorithms, and engineering concepts. Live on GitHub Pages.
GitHub: [github.com/lakshyakumar/leadprep](https://github.com/lakshyakumar/leadprep)

---

## EDUCATION

**M.Tech in Computational Mathematics** | NIT Surathkal, Karnataka | Jul 2016 – Jun 2018 | CGPA: 8.39

**B.Tech in Computer Science** | Delhi Technological University, Delhi | Aug 2011 – Jun 2015

---

## CERTIFICATIONS

- **AWS Certified Cloud Practitioner** — Amazon Web Services
- **Building AI-Powered Search with MongoDB Vector Search** — MongoDB (Jun 2025)
- **Building RAG Apps Using MongoDB** — MongoDB (Jun 2025)

---

## OPEN SOURCE & PUBLICATIONS

- Author of technical articles on account abstraction, AI tooling, vector search, blockchain systems, and developer tools.
- Active contributor to open-source blockchain and developer tooling ecosystems (Hyperledger Bevel, Hyperledger Labs).
- Maintainer of published npm packages: [Turbulent](https://www.npmjs.com/package/turbulent), [Wallact](https://www.npmjs.com/package/wallact), [XlToDb](https://www.npmjs.com/package/xltodb).
