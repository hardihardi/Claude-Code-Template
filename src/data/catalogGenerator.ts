import { ComponentItem, ComponentType, Category } from '../types';

// Curated flagship top components with exact counts and full instructions
export const TOP_CURATED_COMPONENTS: ComponentItem[] = [
  {
    id: 'skill-frontend-design',
    slug: 'creative-design/frontend-design',
    name: 'Frontend Design',
    type: 'skill',
    category: 'creative-design',
    description: 'Generates modern, production-grade UI design systems, responsive layouts, color palettes, and accessible component architectures with Tailwind CSS.',
    installs: 3564,
    verified: true,
    featured: true,
    version: '2.4.0',
    tags: ['design-system', 'tailwind', 'ui-ux', 'responsive', 'accessibility'],
    triggers: ['design frontend', 'create ui layout', 'style this component', 'frontend design system', 'tailwind theme'],
    samplePrompt: 'Design a clean, high-contrast dashboard layout with a dark theme and Tailwind CSS.',
    cliCommand: 'npx claude-code-templates@latest --skill creative-design/frontend-design',
    dependencies: ['tailwindcss', 'lucide-react', 'clsx'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+']
  },
  {
    id: 'skill-code-reviewer',
    slug: 'development/code-reviewer',
    name: 'Code Reviewer',
    type: 'skill',
    category: 'development',
    description: 'Performs comprehensive, automated code reviews evaluating architecture, edge cases, type safety, performance, and anti-slop guidelines.',
    installs: 2444,
    verified: true,
    featured: true,
    version: '3.1.2',
    tags: ['code-review', 'best-practices', 'clean-code', 'type-safety', 'refactor'],
    triggers: ['review my code', 'check this PR', 'code review', 'audit my pull request', 'find bugs in diff'],
    samplePrompt: 'Please review this pull request diff and flag potential race conditions or memory leaks.',
    cliCommand: 'npx claude-code-templates@latest --skill development/code-reviewer',
    dependencies: ['typescript', 'eslint'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+']
  },
  {
    id: 'skill-senior-frontend',
    slug: 'web-development/senior-frontend',
    name: 'Senior Frontend',
    type: 'skill',
    category: 'web-development',
    description: 'Expert-level frontend development toolkit for building modern React, Next.js, and TypeScript applications with optimal state management and bundle efficiency.',
    installs: 2232,
    verified: true,
    featured: true,
    version: '2.8.0',
    tags: ['react', 'nextjs', 'typescript', 'state-management', 'performance'],
    triggers: ['senior frontend architecture', 'optimize react component', 'nextjs app structure', 'frontend best practices'],
    samplePrompt: 'Refactor this React state tree using modern reducer patterns and memoized selectors.',
    cliCommand: 'npx claude-code-templates@latest --skill web-development/senior-frontend',
    dependencies: ['react', 'react-dom', 'typescript'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+']
  },
  {
    id: 'skill-senior-backend',
    slug: 'development/senior-backend',
    name: 'Senior Backend',
    type: 'skill',
    category: 'development',
    description: 'Senior backend architect instructions for designing scalable REST/GraphQL APIs, resilient database models, caching strategies, and secure authentication.',
    installs: 1946,
    verified: true,
    featured: true,
    version: '2.5.1',
    tags: ['backend', 'api-design', 'databases', 'postgres', 'microservices'],
    triggers: ['design backend api', 'senior backend architecture', 'database schema design', 'express api handler'],
    samplePrompt: 'Design a resilient PostgreSQL schema and Express router for multi-tenant billing.',
    cliCommand: 'npx claude-code-templates@latest --skill development/senior-backend',
    dependencies: ['express', 'pg', 'zod'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+']
  },
  {
    id: 'skill-ui-ux-pro-max',
    slug: 'creative-design/ui-ux-pro-max',
    name: 'Ui Ux Pro Max',
    type: 'skill',
    category: 'creative-design',
    description: 'Advanced design intelligence for crafting tactile micro-interactions, responsive typography hierarchies, zero-slop layouts, and WCAG AA compliant UIs.',
    installs: 1843,
    verified: true,
    featured: true,
    version: '2.1.0',
    tags: ['ui-ux', 'micro-interactions', 'typography', 'design-tokens', 'accessibility'],
    triggers: ['improve ui ux', 'make this design look professional', 'ui ux pro max', 'refine layout aesthetic'],
    samplePrompt: 'Upgrade this form layout with subtle micro-interactions, clear validation states, and refined typography.',
    cliCommand: 'npx claude-code-templates@latest --skill creative-design/ui-ux-pro-max',
    dependencies: ['lucide-react', 'tailwind-merge'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+']
  },
  {
    id: 'skill-senior-architect',
    slug: 'development/senior-architect',
    name: 'Senior Architect',
    type: 'skill',
    category: 'development',
    description: 'High-level system design, domain-driven design (DDD), event-driven pipelines, microservice decoupling, and cloud infrastructure blueprinting.',
    installs: 1576,
    verified: true,
    version: '1.9.0',
    tags: ['system-design', 'cloud-architecture', 'domain-driven-design', 'scalability'],
    triggers: ['system architecture review', 'design distributed system', 'senior architect blueprint', 'event driven design'],
    samplePrompt: 'Create a system design document for an event-driven notification service handling 100k events/sec.',
    cliCommand: 'npx claude-code-templates@latest --skill development/senior-architect'
  },
  {
    id: 'skill-skill-creator',
    slug: 'productivity/skill-creator',
    name: 'Skill Creator',
    type: 'skill',
    category: 'productivity',
    description: 'Automates the generation of compliant Claude Code skills, generating standardized SKILL.md files with YAML frontmatter, deterministic triggers, and CLI scripts.',
    installs: 1341,
    verified: true,
    version: '2.0.0',
    tags: ['meta-tooling', 'claude-code', 'skill-generator', 'automation'],
    triggers: ['create new skill', 'generate skill.md', 'scaffold claude code skill', 'build custom skill'],
    samplePrompt: 'Create a new Claude Code skill for automated Dockerfile security linting.',
    cliCommand: 'npx claude-code-templates@latest --skill productivity/skill-creator'
  },
  {
    id: 'skill-ui-design-system',
    slug: 'creative-design/ui-design-system',
    name: 'Ui Design System',
    type: 'skill',
    category: 'creative-design',
    description: 'Comprehensive tokenized design system creation: semantic color variables, typography scales, spacing units, elevation tokens, and dark mode matrices.',
    installs: 1303,
    verified: true,
    version: '1.8.4',
    tags: ['design-tokens', 'color-palette', 'typography', 'tailwind', 'css-variables'],
    triggers: ['build design system', 'define color tokens', 'create typography scale', 'css variables theme'],
    samplePrompt: 'Generate a semantic design token palette in Tailwind with light and dark mode contrasts.',
    cliCommand: 'npx claude-code-templates@latest --skill creative-design/ui-design-system'
  },
  {
    id: 'skill-react-best-practices',
    slug: 'web-development/react-best-practices',
    name: 'React Best Practices',
    type: 'skill',
    category: 'web-development',
    description: 'Enforces React 18/19 idioms, hook stabilization, avoiding unnecessary re-renders, suspense boundaries, and server component patterns.',
    installs: 1078,
    verified: true,
    version: '2.2.0',
    tags: ['react', 'hooks', 'performance', 'server-components', 'typescript'],
    triggers: ['react best practices', 'fix react re-renders', 'clean up useeffect', 'refactor react hook'],
    samplePrompt: 'Audit my React custom hook to prevent stale closures and infinite re-render loops.',
    cliCommand: 'npx claude-code-templates@latest --skill web-development/react-best-practices'
  },
  {
    id: 'skill-senior-fullstack',
    slug: 'web-development/senior-fullstack',
    name: 'Senior Fullstack',
    type: 'skill',
    category: 'web-development',
    description: 'End-to-end fullstack orchestration combining React/TypeScript frontends with Node/Express backends, ORM data layers, and secure auth flows.',
    installs: 912,
    verified: true,
    version: '1.6.0',
    tags: ['fullstack', 'react', 'nodejs', 'express', 'postgresql'],
    triggers: ['build fullstack feature', 'fullstack app template', 'connect client to server', 'senior fullstack flow'],
    samplePrompt: 'Build a fullstack CRUD feature connecting a React table to an Express API with PostgreSQL.',
    cliCommand: 'npx claude-code-templates@latest --skill web-development/senior-fullstack'
  },
  {
    id: 'skill-seo-optimizer',
    slug: 'business-marketing/seo-optimizer',
    name: 'Seo Optimizer',
    type: 'skill',
    category: 'business-marketing',
    description: 'Technical SEO optimization, OpenGraph and JSON-LD schema metadata generation, sitemap generators, robots.txt directives, and Core Web Vitals optimization.',
    installs: 809,
    verified: true,
    version: '1.4.0',
    tags: ['seo', 'meta-tags', 'open-graph', 'structured-data', 'schema-markup'],
    triggers: ['optimize seo', 'generate structured data', 'add opengraph tags', 'fix meta tags', 'seo audit'],
    samplePrompt: 'Generate complete JSON-LD schema markup and OpenGraph tags for a SaaS product page.',
    cliCommand: 'npx claude-code-templates@latest --skill business-marketing/seo-optimizer'
  },
  {
    id: 'skill-webapp-testing',
    slug: 'development/webapp-testing',
    name: 'Webapp Testing',
    type: 'skill',
    category: 'development',
    description: 'End-to-end and unit testing generator supporting Vitest, Jest, Playwright, and React Testing Library with mocked network APIs.',
    installs: 806,
    verified: true,
    version: '2.1.0',
    tags: ['testing', 'vitest', 'playwright', 'e2e', 'unit-tests'],
    triggers: ['write unit tests', 'playwright test script', 'test this component', 'webapp testing suite'],
    samplePrompt: 'Write comprehensive Vitest and React Testing Library tests for this authentication form.',
    cliCommand: 'npx claude-code-templates@latest --skill development/webapp-testing'
  },
  {
    id: 'skill-brainstorming',
    slug: 'productivity/brainstorming',
    name: 'Brainstorming',
    type: 'skill',
    category: 'productivity',
    description: 'Structured ideation framework using SCAMPER, first-principles questioning, feature matrices, and technical feasibility prioritization.',
    installs: 781,
    verified: true,
    version: '1.2.0',
    tags: ['ideation', 'brainstorming', 'product-strategy', 'architecture-planning'],
    triggers: ['brainstorm features', 'ideate architecture', 'explore product ideas', 'brainstorm technical approaches'],
    samplePrompt: 'Brainstorm 5 innovative monetization models for a developer tooling startup.',
    cliCommand: 'npx claude-code-templates@latest --skill productivity/brainstorming'
  },
  {
    id: 'skill-canvas-design',
    slug: 'creative-design/canvas-design',
    name: 'Canvas Design',
    type: 'skill',
    category: 'creative-design',
    description: 'High-performance HTML5 2D Canvas and WebGL interactive rendering, smooth animation loops, ResizeObserver handlers, and graphic generation.',
    installs: 772,
    verified: true,
    version: '1.5.0',
    tags: ['canvas', 'html5', 'webgl', 'animations', 'interactive-graphics'],
    triggers: ['create canvas animation', 'draw on html5 canvas', 'canvas responsive resize', 'interactive graphic'],
    samplePrompt: 'Create an interactive particle network canvas with smooth velocity updates and mouse attraction.',
    cliCommand: 'npx claude-code-templates@latest --skill creative-design/canvas-design'
  },
  {
    id: 'skill-senior-prompt-engineer',
    slug: 'ai-research/senior-prompt-engineer',
    name: 'Senior Prompt Engineer',
    type: 'skill',
    category: 'ai-research',
    description: 'Mastery of few-shot prompting, chain-of-thought elicitation, structured JSON schema outputs, system role instructions, and token budget management.',
    installs: 683,
    verified: true,
    version: '2.0.1',
    tags: ['prompt-engineering', 'few-shot', 'structured-outputs', 'llm-guardrails'],
    triggers: ['optimize this prompt', 'prompt engineering', 'improve system instructions', 'few-shot examples'],
    samplePrompt: 'Refactor this raw prompt into an XML-tagged, few-shot prompt with strict JSON output format.',
    cliCommand: 'npx claude-code-templates@latest --skill ai-research/senior-prompt-engineer'
  },
  {
    id: 'skill-senior-security',
    slug: 'security/senior-security',
    name: 'Senior Security',
    type: 'skill',
    category: 'security',
    description: 'Static application security testing (SAST), OWASP Top 10 mitigation, secret leakage detection, CORS/CSP hardening, and input sanitization.',
    installs: 665,
    verified: true,
    version: '2.3.0',
    tags: ['security', 'owasp', 'penetration-testing', 'input-sanitization', 'csrf-cors'],
    triggers: ['audit security', 'check for vulnerabilities', 'owasp audit', 'sanitize inputs', 'security hardening'],
    samplePrompt: 'Audit this Express router for SQL injection, CSRF vulnerabilities, and missing rate limits.',
    cliCommand: 'npx claude-code-templates@latest --skill security/senior-security'
  },
  {
    id: 'skill-mobile-design',
    slug: 'creative-design/mobile-design',
    name: 'Mobile Design',
    type: 'skill',
    category: 'creative-design',
    description: 'Mobile-first UX patterns, 44px+ touch targets, swipe gesture handles, bottom sheets, sticky action docks, and responsive viewport adaptations.',
    installs: 645,
    verified: true,
    version: '1.3.2',
    tags: ['mobile-ui', 'touch-targets', 'responsive', 'bottom-sheet', 'pwa'],
    triggers: ['mobile design layout', 'optimize for mobile touch', 'mobile bottom sheet', 'responsive mobile view'],
    samplePrompt: 'Design a responsive mobile bottom sheet with drag-to-dismiss gesture support.',
    cliCommand: 'npx claude-code-templates@latest --skill creative-design/mobile-design'
  },
  {
    id: 'skill-git-commit-helper',
    slug: 'productivity/git-commit-helper',
    name: 'Git Commit Helper',
    type: 'skill',
    category: 'productivity',
    description: 'Generates standardized Conventional Commits messages (feat, fix, refactor, docs) by analyzing staged git diffs with clear changelog summaries.',
    installs: 534,
    verified: true,
    version: '1.2.0',
    tags: ['git', 'conventional-commits', 'changelog', 'diff-analysis', 'productivity'],
    triggers: ['write commit message', 'generate git commit', 'commit helper', 'conventional commit diff'],
    samplePrompt: 'Analyze this git diff and write a concise conventional commit title and bulleted description.',
    cliCommand: 'npx claude-code-templates@latest --skill productivity/git-commit-helper'
  },
  {
    id: 'skill-docx',
    slug: 'document-processing/docx',
    name: 'Docx',
    type: 'skill',
    category: 'document-processing',
    description: 'Automated generation, parsing, styling, and structural conversion of Microsoft Word (.docx) documents with custom headers, tables, and typography.',
    installs: 497,
    verified: true,
    version: '1.1.0',
    tags: ['docx', 'word', 'document-generation', 'office', 'formatting'],
    triggers: ['generate docx file', 'edit word document', 'convert markdown to docx', 'docx styling'],
    samplePrompt: 'Create a professional DOCX proposal document with table of contents and corporate header styling.',
    cliCommand: 'npx claude-code-templates@latest --skill document-processing/docx'
  },
  {
    id: 'skill-clean-code',
    slug: 'development/clean-code',
    name: 'Clean Code',
    type: 'skill',
    category: 'development',
    description: 'Enforces SOLID principles, DRY methodology, cognitive complexity limits, descriptive naming conventions, and idiomatic design patterns.',
    installs: 470,
    verified: true,
    version: '1.7.0',
    tags: ['clean-code', 'solid-principles', 'refactoring', 'readability', 'design-patterns'],
    triggers: ['clean up this code', 'apply clean code principles', 'simplify complex function', 'refactor for readability'],
    samplePrompt: 'Refactor this 200-line deeply nested function into modular, single-responsibility helpers.',
    cliCommand: 'npx claude-code-templates@latest --skill development/clean-code'
  },
  {
    id: 'skill-pdf-processing-pro',
    slug: 'document-processing/pdf-processing-pro',
    name: 'Pdf Processing Pro',
    type: 'skill',
    category: 'document-processing',
    description: 'High-precision PDF extraction, OCR table parsing, vector PDF rendering, watermarking, and dynamic report generation with pdf-lib and pdfmake.',
    installs: 462,
    verified: true,
    version: '1.4.0',
    tags: ['pdf', 'document-parsing', 'ocr', 'pdfmake', 'reporting'],
    triggers: ['parse pdf table', 'generate pdf invoice', 'extract text from pdf', 'pdf processing'],
    samplePrompt: 'Write a script to extract financial tables from a multi-page PDF into clean JSON records.',
    cliCommand: 'npx claude-code-templates@latest --skill document-processing/pdf-processing-pro'
  },
  {
    id: 'skill-file-organizer',
    slug: 'productivity/file-organizer',
    name: 'File Organizer',
    type: 'skill',
    category: 'productivity',
    description: 'Automated workspace directory structuring, dead code pruning, asset optimization, and architectural file placement linting.',
    installs: 435,
    verified: true,
    version: '1.1.5',
    tags: ['file-system', 'organization', 'clean-workspace', 'refactor', 'automation'],
    triggers: ['organize project files', 'clean workspace directory', 'reorganize src folder', 'find unused files'],
    samplePrompt: 'Analyze this project structure and suggest a clean modular folder architecture.',
    cliCommand: 'npx claude-code-templates@latest --skill productivity/file-organizer'
  },
  {
    id: 'skill-pptx',
    slug: 'document-processing/pptx',
    name: 'Pptx',
    type: 'skill',
    category: 'document-processing',
    description: 'Automated PowerPoint presentation slide deck generation, master layout templating, chart embedding, and slide transition orchestration.',
    installs: 396,
    verified: true,
    version: '1.0.8',
    tags: ['pptx', 'powerpoint', 'slide-deck', 'presentation', 'office'],
    triggers: ['create powerpoint slides', 'generate pptx presentation', 'pitch deck generator', 'pptx layout'],
    samplePrompt: 'Generate a 10-slide startup pitch deck template using pptxgenjs with high-contrast color scheme.',
    cliCommand: 'npx claude-code-templates@latest --skill document-processing/pptx'
  },
  {
    id: 'skill-mcp-builder',
    slug: 'productivity/mcp-builder',
    name: 'Mcp Builder',
    type: 'skill',
    category: 'productivity',
    description: 'End-to-end scaffolding for Model Context Protocol (MCP) servers in TypeScript and FastMCP Python, schema validation, and testing.',
    installs: 384,
    verified: true,
    version: '2.0.0',
    tags: ['mcp', 'fastmcp', 'protocol', 'tool-definition', 'claude-desktop'],
    triggers: ['build mcp server', 'scaffold mcp tool', 'model context protocol server', 'create fastmcp'],
    samplePrompt: 'Scaffold a TypeScript MCP server with tool definitions for querying a SQLite database.',
    cliCommand: 'npx claude-code-templates@latest --skill productivity/mcp-builder'
  },
  {
    id: 'skill-sentry-find-bugs',
    slug: 'sentry/sentry-find-bugs',
    name: 'Sentry Find Bugs',
    type: 'skill',
    category: 'sentry',
    description: 'Sentry telemetry integration, stack trace root cause analysis, automated error triage, and regression patch generation.',
    installs: 342,
    verified: true,
    version: '1.3.0',
    tags: ['sentry', 'bug-hunting', 'stack-trace', 'telemetry', 'monitoring'],
    triggers: ['sentry find bugs', 'analyze sentry stack trace', 'fix sentry exception', 'triage error report'],
    samplePrompt: 'Analyze this unhandled exception stack trace from Sentry and generate a targeted bugfix.',
    cliCommand: 'npx claude-code-templates@latest --skill sentry/sentry-find-bugs'
  }
];

// Curated MCPs
export const TOP_CURATED_MCPS: ComponentItem[] = [
  {
    id: 'mcp-postgres',
    slug: 'database/postgres-mcp',
    name: 'PostgreSQL FastMCP',
    type: 'mcp',
    category: 'database',
    description: 'Direct Model Context Protocol bridge to PostgreSQL instances with schema inspection, query execution, connection pooling, and transaction rollbacks.',
    installs: 2150,
    verified: true,
    featured: true,
    version: '2.1.0',
    tags: ['mcp', 'postgres', 'sql', 'database', 'schema'],
    triggers: ['query postgres', 'inspect database schema', 'postgres mcp', 'sql query execute'],
    samplePrompt: 'Use the PostgreSQL MCP server to inspect all tables and check foreign key constraints.',
    cliCommand: 'npx claude-code-templates@latest --mcp database/postgres-mcp',
    author: 'Database Systems Lab',
    dependencies: ['pg', '@modelcontextprotocol/sdk'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### PostgreSQL FastMCP Specification
Exposes relational database inspection and SQL execution tools to Claude Code.

- **Tools Offered**: \`postgres_query\`, \`postgres_list_tables\`, \`postgres_describe_table\`
- **Safety Mode**: Automatic read-only transaction wrappers for non-explicit writes.`
  },
  {
    id: 'mcp-github',
    slug: 'workflow-automation/github-mcp',
    name: 'GitHub Protocol MCP',
    type: 'mcp',
    category: 'workflow-automation',
    description: 'Full GitHub REST and GraphQL API tool suite for Claude Code: create PRs, list issues, search code across repositories, and review comments.',
    installs: 1980,
    verified: true,
    featured: true,
    version: '2.3.0',
    tags: ['mcp', 'github', 'git', 'pull-requests', 'ci-cd'],
    triggers: ['create github pr', 'search github repo', 'github mcp', 'list repo issues'],
    samplePrompt: 'Create a GitHub pull request with detailed changelog notes using the GitHub MCP tool.',
    cliCommand: 'npx claude-code-templates@latest --mcp workflow-automation/github-mcp',
    author: 'Anthropic / Claude Ecosystem',
    dependencies: ['@octokit/rest', '@modelcontextprotocol/sdk'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### GitHub Protocol MCP Specification
Connects Claude Code to GitHub REST and GraphQL endpoints.

- **Tools Offered**: \`create_pull_request\`, \`list_issues\`, \`search_repository_code\`
- **Auth Token**: Uses \`GITHUB_TOKEN\` environment variable for authorization.`
  },
  {
    id: 'mcp-brave-search',
    slug: 'ai-research/brave-search-mcp',
    name: 'Brave Search MCP',
    type: 'mcp',
    category: 'ai-research',
    description: 'Real-time privacy-preserving web search and document grounding for Claude Code via Brave Search API.',
    installs: 1820,
    verified: true,
    featured: true,
    version: '1.8.0',
    tags: ['mcp', 'brave-search', 'web-search', 'grounding', 'research'],
    triggers: ['search the web', 'brave search mcp', 'find latest documentation online', 'google search query'],
    samplePrompt: 'Search the web for latest React 19 server actions documentation.',
    cliCommand: 'npx claude-code-templates@latest --mcp ai-research/brave-search-mcp',
    author: 'AI Research Guild',
    dependencies: ['@modelcontextprotocol/sdk'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### Brave Search MCP Specification
Enables privacy-focused online documentation lookup and web search queries.

- **Tools Offered**: \`web_search\`, \`local_search\`
- **Privacy Guarantee**: Zero persistent tracking or query logging.`
  },
  {
    id: 'mcp-bright-data',
    slug: 'workflow-automation/bright-data-mcp',
    name: 'Bright Data Web Scraper MCP',
    type: 'mcp',
    category: 'workflow-automation',
    description: 'Enterprise proxy-backed web scraper and structured data extraction engine with CAPTCHA bypass and multi-geo residential routing.',
    installs: 1640,
    verified: true,
    featured: true,
    version: '2.0.4',
    tags: ['mcp', 'bright-data', 'web-scraping', 'proxies', 'data-extraction'],
    triggers: ['scrape website data', 'bright data mcp', 'extract html content', 'crawl product prices'],
    samplePrompt: 'Extract structured product pricing and reviews from this ecommerce URL.',
    cliCommand: 'npx claude-code-templates@latest --mcp workflow-automation/bright-data-mcp',
    author: 'Enterprise Data Guild',
    dependencies: ['puppeteer-core', '@modelcontextprotocol/sdk'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### Bright Data Web Scraper MCP
Renders dynamic web pages and converts DOM content into clean Markdown/JSON.

- **Tools Offered**: \`scrape_url\`, \`extract_structured_data\`
- **Proxy Network**: Automated residential IP rotation and CAPTCHA solving.`
  },
  {
    id: 'mcp-docker',
    slug: 'development/docker-mcp',
    name: 'Docker Engine MCP',
    type: 'mcp',
    category: 'development',
    description: 'Inspect running containers, stream container logs, manage volumes, and execute containerized test environments.',
    installs: 1530,
    verified: true,
    featured: true,
    version: '1.5.0',
    tags: ['mcp', 'docker', 'containers', 'devops', 'logs'],
    triggers: ['inspect docker container', 'docker mcp', 'check container logs', 'restart docker compose'],
    samplePrompt: 'Inspect the status and healthcheck logs of the running web container.',
    cliCommand: 'npx claude-code-templates@latest --mcp development/docker-mcp',
    author: 'Cloud Native Guild',
    dependencies: ['dockerode', '@modelcontextprotocol/sdk'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### Docker Engine MCP Specification
Connects Claude Code directly to the local Docker daemon socket.

- **Tools Offered**: \`list_containers\`, \`inspect_container\`, \`fetch_container_logs\`
- **Socket Path**: Connected securely via \`/var/run/docker.sock\`.`
  },
  {
    id: 'mcp-sqlite-fast',
    slug: 'database/sqlite-fast-mcp',
    name: 'SQLite Local FastMCP',
    type: 'mcp',
    category: 'database',
    description: 'Lightweight, zero-config MCP server providing direct inspection, indexing, and query execution over local SQLite database files.',
    installs: 1410,
    verified: true,
    version: '1.4.0',
    tags: ['mcp', 'sqlite', 'database', 'local-db'],
    triggers: ['sqlite mcp', 'query local sqlite', 'inspect sqlite db'],
    samplePrompt: 'Connect to database.sqlite and display table schemas.',
    cliCommand: 'npx claude-code-templates@latest --mcp database/sqlite-fast-mcp',
    author: 'Database Systems Lab',
    dependencies: ['better-sqlite3', '@modelcontextprotocol/sdk'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### SQLite FastMCP Specification
Zero-config local database query connector for SQLite files.

- **Tools Offered**: \`sqlite_query\`, \`sqlite_schema_inspect\`
- **Performance**: High-speed synchronous SQLite query execution.`
  },
  {
    id: 'mcp-sentry-telemetry',
    slug: 'sentry/sentry-telemetry-mcp',
    name: 'Sentry Telemetry MCP',
    type: 'mcp',
    category: 'sentry',
    description: 'Live MCP connection to Sentry performance tracing and exception tracking, allowing Claude Code to inspect active production stack traces.',
    installs: 1290,
    verified: true,
    version: '2.0.0',
    tags: ['mcp', 'sentry', 'telemetry', 'stacktrace'],
    triggers: ['sentry mcp', 'inspect sentry issues', 'query live sentry errors'],
    samplePrompt: 'Fetch recent unhandled exception issues from Sentry for current project.',
    cliCommand: 'npx claude-code-templates@latest --mcp sentry/sentry-telemetry-mcp',
    author: 'Claude Quality Guild',
    dependencies: ['@sentry/node', '@modelcontextprotocol/sdk'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### Sentry Telemetry MCP Specification
Bridges live production telemetry data from Sentry API into Claude Code.

- **Tools Offered**: \`fetch_sentry_issues\`, \`get_issue_stacktrace\`
- **Auth**: Uses \`SENTRY_AUTH_TOKEN\` for authorization.`
  },
  {
    id: 'mcp-notion-workspace',
    slug: 'productivity/notion-workspace-mcp',
    name: 'Notion Workspace MCP',
    type: 'mcp',
    category: 'productivity',
    description: 'Connects Claude Code to Notion workspace pages and databases for automated spec reading, status tracking, and task sync.',
    installs: 1180,
    verified: true,
    version: '1.3.0',
    tags: ['mcp', 'notion', 'productivity', 'workspace'],
    triggers: ['notion mcp', 'read notion database', 'sync notion tasks'],
    samplePrompt: 'Read functional specification document from Notion page URL.',
    cliCommand: 'npx claude-code-templates@latest --mcp productivity/notion-workspace-mcp',
    author: 'Productivity Guild',
    dependencies: ['@notionhq/client', '@modelcontextprotocol/sdk'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### Notion Workspace MCP Specification
Bridges Notion API with Claude Code workspace context.

- **Tools Offered**: \`search_notion_pages\`, \`query_notion_database\`, \`append_notion_block\`
- **Auth**: Uses \`NOTION_API_KEY\` integration secret.`
  },
  {
    id: 'skill-gemini-multimodal-grounding',
    slug: 'ai-research/gemini-multimodal-grounding',
    name: 'Gemini Multimodal Grounding & Search',
    type: 'skill',
    category: 'ai-research',
    description: 'Grounds responses using Google Search, Vertex AI vector search, and multimodal spatial reasoning with Google GenAI SDK and Gemini 2.0 Flash/Pro.',
    installs: 2950,
    verified: true,
    featured: true,
    version: '2.0.0',
    tags: ['gemini', 'grounding', 'multimodal', 'google-ai', 'search-grounding'],
    triggers: ['gemini search grounding', 'ground with google search', 'multimodal spatial grounding', 'gemini 2.0 reasoning'],
    samplePrompt: 'Ground this analysis with live Google Search results and cite authoritative sources using Gemini 2.0.',
    cliCommand: 'gemini-cli skill add ai-research/gemini-multimodal-grounding',
    author: 'Google AI Ecosystem',
    dependencies: ['@google/genai'],
    compatibility: ['Gemini 2.0 Flash', 'Gemini 2.0 Pro', 'Google AI Studio'],
    fullInstructions: `### Google Gemini Multimodal Grounding Protocol
Leverages Google GenAI SDK with native search tools:

\`\`\`typescript
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const response = await ai.models.generateContent({
  model: 'gemini-2.0-flash',
  contents: 'Summarize latest technical RFCs on AI context windows',
  config: {
    tools: [{ googleSearch: {} }]
  }
});
\`\`\`
- **Grounding Metadata**: Includes web search queries and citation chunks with source URLs.
- **Multimodal**: Supports text, high-res images, video frames, and audio waveforms natively.`
  },
  {
    id: 'skill-openai-function-calling',
    slug: 'development/openai-function-calling',
    name: 'ChatGPT Function Calling & Structured Outputs',
    type: 'skill',
    category: 'development',
    description: 'Implements strictly-typed JSON Schema function calling, strict mode validations, and Assistant Tools integration for OpenAI GPT-4o and o3-mini.',
    installs: 2780,
    verified: true,
    featured: true,
    version: '2.1.0',
    tags: ['chatgpt', 'openai', 'function-calling', 'structured-outputs', 'json-schema'],
    triggers: ['openai function calling', 'strict json schema chatgpt', 'custom gpt tool definition', 'openai structured output'],
    samplePrompt: 'Define a strict JSON schema function definition for queryDatabase and handle tool_calls.',
    cliCommand: 'openai-cli skill install development/openai-function-calling',
    author: 'OpenAI Developer Guild',
    dependencies: ['openai', 'zod'],
    compatibility: ['GPT-4o', 'o3-mini', 'OpenAI Assistants API v2'],
    fullInstructions: `### OpenAI Structured Outputs & Function Calling
Enforces deterministic tool call generation:

\`\`\`typescript
import OpenAI from 'openai';

const openai = new OpenAI();
const response = await openai.chat.completions.create({
  model: 'gpt-4o',
  messages: [{ role: 'user', content: 'Extract invoice fields' }],
  response_format: {
    type: 'json_schema',
    json_schema: {
      name: 'InvoiceExtraction',
      strict: true,
      schema: {
        type: 'object',
        properties: {
          vendor: { type: 'string' },
          totalAmount: { type: 'number' },
          lineItems: { type: 'array', items: { type: 'string' } }
        },
        required: ['vendor', 'totalAmount', 'lineItems'],
        additionalProperties: false
      }
    }
  }
});
\`\`\``
  },
  {
    id: 'skill-deepseek-r1-reasoning',
    slug: 'ai-research/deepseek-r1-reasoning',
    name: 'DeepSeek-R1 Chain-of-Thought Reasoner',
    type: 'skill',
    category: 'ai-research',
    description: 'Harnesses DeepSeek-R1 reasoning tokens, mathematical proof validation, and deep algorithmic synthesis with explicit thinking budget allocation.',
    installs: 2890,
    verified: true,
    featured: true,
    version: '1.5.0',
    tags: ['deepseek', 'r1', 'reasoning', 'chain-of-thought', 'math-logic'],
    triggers: ['deepseek reasoning', 'deepseek r1 proof', 'chain of thought analysis', 'formal logic verification'],
    samplePrompt: 'Analyze this concurrent lock-free queue algorithm with DeepSeek-R1 formal reasoning steps.',
    cliCommand: 'deepseek-cli skill add ai-research/deepseek-r1-reasoning',
    author: 'DeepSeek AI Lab',
    dependencies: ['openai'],
    compatibility: ['DeepSeek-R1', 'DeepSeek-V3', 'DeepSeek API'],
    fullInstructions: `### DeepSeek-R1 Reasoning & Proof Architecture
Accesses reasoning tokens directly through the DeepSeek API:

\`\`\`typescript
import OpenAI from 'openai';

const client = new OpenAI({
  baseURL: 'https://api.deepseek.com',
  apiKey: process.env.DEEPSEEK_API_KEY
});

const completion = await client.chat.completions.create({
  model: 'deepseek-reasoner',
  messages: [{ role: 'user', content: 'Prove time complexity of randomized quickselect.' }]
});

// Access step-by-step reasoning trace
console.log('Reasoning Content:', (completion.choices[0].message as any).reasoning_content);
console.log('Final Answer:', completion.choices[0].message.content);
\`\`\``
  },
  {
    id: 'skill-zai-glm4-agentic-workflow',
    slug: 'workflow-automation/zai-glm4-agentic-workflow',
    name: 'Z.AI GLM-4 Long-Context Agentic Workflow',
    type: 'skill',
    category: 'workflow-automation',
    description: 'Enterprise 128k long-context document synthesis, multilingual agent workflows, and synchronous tool routing with Zhipu AI GLM-4 SDK.',
    installs: 2410,
    verified: true,
    featured: true,
    version: '1.4.0',
    tags: ['zai', 'glm-4', 'zhipu-ai', 'agentic', 'multilingual'],
    triggers: ['zai agent workflow', 'glm-4 tool execution', 'zhipu long context', 'multilingual code translation'],
    samplePrompt: 'Execute multi-step workflow analyzing 100k token codebase with Z.AI GLM-4.',
    cliCommand: 'zai skill import workflow-automation/zai-glm4-agentic-workflow',
    author: 'Zhipu AI Guild',
    dependencies: ['axios'],
    compatibility: ['GLM-4-Plus', 'GLM-4-Air', 'Z.AI Platform'],
    fullInstructions: `### Z.AI GLM-4 Enterprise Agent Workflow
Connects to Zhipu AI GLM-4 API for high-speed long-context processing:

\`\`\`typescript
import axios from 'axios';

const response = await axios.post('https://open.bigmodel.cn/api/paas/v4/chat/completions', {
  model: 'glm-4-plus',
  messages: [
    { role: 'system', content: 'You are an autonomous enterprise workflow agent.' },
    { role: 'user', content: 'Synthesize audit logs across multiple services.' }
  ],
  tools: [
    {
      type: 'function',
      function: {
        name: 'queryLogCluster',
        description: 'Query enterprise log aggregation clusters',
        parameters: { type: 'object', properties: { query: { type: 'string' } } }
      }
    }
  ]
}, {
  headers: { Authorization: \`Bearer \${process.env.ZHIPU_API_KEY}\` }
});
\`\`\``
  },
  {
    id: 'skill-opencode-terminal-driver',
    slug: 'development/opencode-terminal-driver',
    name: 'OpenCode Terminal Driver & Shell Automation',
    type: 'skill',
    category: 'development',
    description: 'Sandboxed bash execution, background process monitoring, stdout streaming, and deterministic terminal interaction for OpenCode AI.',
    installs: 2320,
    verified: true,
    featured: true,
    version: '1.6.0',
    tags: ['opencode', 'terminal', 'shell', 'sandbox', 'automation'],
    triggers: ['opencode terminal command', 'run sandboxed shell', 'opencode background job', 'terminal automation'],
    samplePrompt: 'Execute sandboxed build and stream stderr diagnostics back to OpenCode.',
    cliCommand: 'opencode skill install development/opencode-terminal-driver',
    author: 'OpenCode Foundation',
    dependencies: ['node-pty'],
    compatibility: ['OpenCode CLI v2.0+', 'OpenCode Core'],
    fullInstructions: `### OpenCode Sandboxed Terminal Driver
Provides safe terminal automation inside OpenCode containers:

- **Isolated Process Management**: Spawns isolated PTY sessions with configurable resource ceilings.
- **Safety Interceptor**: Blocks destructive operations while granting native build and package management capabilities.`
  },
  {
    id: 'skill-oxalpha-kernel-protocol',
    slug: 'security/oxalpha-kernel-protocol',
    name: 'OX Alpha Kernel Protocol & State Fabric',
    type: 'skill',
    category: 'security',
    description: 'Autonomous decentralized agent kernel protocol with verifiable computation proofs, state channel checkpoints, and deterministic execution.',
    installs: 2190,
    verified: true,
    featured: true,
    version: '1.2.0',
    tags: ['oxalpha', 'autonomous-kernel', 'decentralized', 'state-channel', 'verifiable-compute'],
    triggers: ['ox alpha kernel', 'verifiable state computation', 'ox alpha agent protocol', 'deterministic execution'],
    samplePrompt: 'Verify state channel transition proof with OX Alpha Autonomous Kernel.',
    cliCommand: 'ox-alpha skill load security/oxalpha-kernel-protocol',
    author: 'OX Alpha Research',
    dependencies: ['ethers'],
    compatibility: ['OX Alpha Kernel v1.0+', 'OX Node Network'],
    fullInstructions: `### OX Alpha Kernel Protocol Specification
Orchestrates autonomous agents across decentralized computing nodes:

- **Deterministic State Fabric**: Commits cryptographic state transitions to distributed ledgers.
- **Agent Consensus**: Resolves multi-agent task execution conflicts through deterministic state proofs.`
  }
];

// Curated Autonomous Agents
export const TOP_CURATED_AGENTS: ComponentItem[] = [
  {
    id: 'agent-fullstack-builder',
    slug: 'web-development/fullstack-autonomous-builder',
    name: 'Fullstack Autonomous Builder Agent',
    type: 'agent',
    category: 'web-development',
    description: 'Autonomous multi-step builder agent that orchestrates frontend React views, backend Express routes, Drizzle database migrations, and integration test suites.',
    installs: 2680,
    verified: true,
    featured: true,
    version: '3.0.0',
    tags: ['agent', 'autonomous', 'fullstack', 'code-generation', 'react-express'],
    triggers: ['build full application', 'autonomous fullstack agent', 'scaffold entire feature end-to-end', 'fullstack autonomous builder'],
    samplePrompt: 'Autonomously build a complete Kanban board with drag-and-drop, Express backend, and PostgreSQL storage.',
    cliCommand: 'npx claude-code-templates@latest --agent web-development/fullstack-autonomous-builder',
    author: 'Anthropic / Claude Ecosystem',
    dependencies: ['react', 'express', 'drizzle-orm', 'vitest'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### Autonomous Builder Agent Workflow
- **Phase 1: Domain Modeling & Schema Planning**: Define TypeScript interfaces, database tables, and API endpoint contracts.
- **Phase 2: Parallel Component & Router Generation**: Concurrently scaffold frontend UI views and Express backend route handlers.
- **Phase 3: Database & Auth Wiring**: Connect client components to server endpoints with error boundaries and schema validation.
- **Phase 4: Self-Correction Test Execution**: Execute build passes and unit tests, automatically repairing compiler errors.`
  },
  {
    id: 'agent-code-reviewer-pro',
    slug: 'development/autonomous-code-reviewer',
    name: 'Autonomous Code Reviewer Agent',
    type: 'agent',
    category: 'development',
    description: 'Multi-pass code review agent running AST checks, type verification, security vulnerability scans, and cognitive complexity benchmarks.',
    installs: 2110,
    verified: true,
    featured: true,
    version: '2.4.0',
    tags: ['agent', 'code-review', 'qa', 'ast-analysis', 'pr-bot'],
    triggers: ['run autonomous code review', 'review agent audit', 'full pr check', 'autonomous reviewer'],
    samplePrompt: 'Perform an exhaustive autonomous review across all modified files in this branch.',
    cliCommand: 'npx claude-code-templates@latest --agent development/autonomous-code-reviewer',
    author: 'Claude Quality Guild',
    dependencies: ['typescript', 'eslint', 'ts-morph'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### Multi-Pass Code Review Audit Protocol
1. **AST & Syntax Parse Pass**: Analyze modified files for unhandled promises, memory leaks, and type escapes.
2. **Security & OWASP Audit**: Check input sanitization, SQL injection risks, and sensitive key exposures.
3. **Complexity Benchmark**: Evaluate cyclomatic complexity and suggest refactoring for functions exceeding limits.
4. **Automated Patch Recommendation**: Output clear, actionable code edits with inline explanations.`
  },
  {
    id: 'agent-security-pentester',
    slug: 'security/security-pentester-agent',
    name: 'Security PenTester Red-Team Agent',
    type: 'agent',
    category: 'security',
    description: 'Autonomous red-team agent that fuzzes API endpoints, tests SQL injection vulnerabilities, checks JWT authorization bypass, and verifies CORS.',
    installs: 1740,
    verified: true,
    featured: true,
    version: '2.1.0',
    tags: ['agent', 'security', 'penetration-testing', 'fuzzing', 'vulnerability'],
    triggers: ['run security pentest', 'fuzz api endpoints', 'security agent scan', 'pentest red team'],
    samplePrompt: 'Scan all Express API endpoints for unauthorized access vulnerabilities and SQL injection.',
    cliCommand: 'npx claude-code-templates@latest --agent security/security-pentester-agent',
    author: 'Claude Security Research',
    dependencies: ['express', 'jsonwebtoken', 'helmet'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### Red-Team PenTester Execution Plan
- **Endpoint Discovery**: Catalog all active API routes, middleware stacks, and authentication barriers.
- **Fuzzing & Input Stress Testing**: Inject malicious SQL payloads, XSS strings, and overflow vectors.
- **Auth & Session Bypass Probing**: Attempt token forgery, missing role checks, and CSRF exploits.
- **Remediation Report**: Generate CVE risk ratings and automated fix patches.`
  },
  {
    id: 'agent-devops-release',
    slug: 'workflow-automation/devops-release-agent',
    name: 'DevOps Release Orchestrator Agent',
    type: 'agent',
    category: 'workflow-automation',
    description: 'Automates semantic versioning, changelog compilation, git tagging, Docker image multi-arch builds, and Kubernetes rollouts.',
    installs: 1450,
    verified: true,
    featured: true,
    version: '1.9.0',
    tags: ['agent', 'devops', 'release', 'docker', 'ci-cd'],
    triggers: ['prepare release', 'devops release agent', 'publish new version', 'release orchestrator'],
    samplePrompt: 'Draft a new v2.0.0 release changelog and prepare git release tags.',
    cliCommand: 'npx claude-code-templates@latest --agent workflow-automation/devops-release-agent',
    author: 'Cloud Native Guild',
    dependencies: ['docker', 'conventional-changelog', 'semver'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### Release Orchestration Pipeline
1. **Commit Log Analysis**: Inspect git history against Conventional Commits specs to compute next SemVer increment.
2. **Changelog Generation**: Compile grouped changelogs categorized into Features, Bugfixes, and Breaking Changes.
3. **Container & Tag Orchestration**: Build multi-platform container images and create cryptographically signed git release tags.`
  },
  {
    id: 'agent-doc-architect',
    slug: 'productivity/documentation-architect-agent',
    name: 'Documentation Architect Agent',
    type: 'agent',
    category: 'productivity',
    description: 'Autonomous documentation sub-agent that parses AST code structures, generates OpenAPI specs, builds interactive Mermaid architecture diagrams, and updates READMEs.',
    installs: 1210,
    verified: true,
    version: '1.7.0',
    tags: ['agent', 'documentation', 'openapi', 'mermaid', 'tsdoc'],
    triggers: ['run doc architect', 'generate codebase docs', 'build architecture diagram', 'documentation agent'],
    samplePrompt: 'Autonomously audit all API handlers and produce interactive OpenAPI specifications and Mermaid sequence diagrams.',
    cliCommand: 'npx claude-code-templates@latest --agent productivity/documentation-architect-agent',
    author: 'Claude Ecosystem Tools',
    dependencies: ['mermaid', 'typedoc', 'swagger-parser'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### Documentation Architect Protocol
- **Codebase Indexing**: Scan workspace directory to extract public class interfaces, API routers, and data models.
- **Diagram Synthesis**: Generate clear, responsive Mermaid sequence diagrams and entity-relationship models.
- **OpenAPI Compilation**: Produce valid OpenAPI 3.1 JSON/YAML schemas matching live route signatures.`
  },
  {
    id: 'agent-db-migration',
    slug: 'database/database-migration-agent',
    name: 'Database Migration Safety Agent',
    type: 'agent',
    category: 'database',
    description: 'Autonomous database manager that verifies schema migrations, checks foreign key constraints, executes safety dry-runs, and generates zero-downtime rollback scripts.',
    installs: 1120,
    verified: true,
    version: '2.0.1',
    tags: ['agent', 'database', 'migrations', 'sql', 'zero-downtime'],
    triggers: ['run migration agent', 'safe database migration', 'generate rollback script', 'db migration check'],
    samplePrompt: 'Verify this Drizzle SQL migration for destructive column drops and generate a zero-downtime rollback plan.',
    cliCommand: 'npx claude-code-templates@latest --agent database/database-migration-agent',
    author: 'Database Systems Lab',
    dependencies: ['drizzle-orm', 'pg', 'knex'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### Database Migration Safety Pipeline
1. **Migration AST Scan**: Parse SQL statements for non-blocking table column additions, index creation, or table lock risks.
2. **Dry-Run Execution**: Simulate migration execution against an isolated shadow container.
3. **Rollback Generation**: Output verified idempotent down-migration scripts.`
  },
  {
    id: 'agent-gemini-live-interactor',
    slug: 'ai-research/gemini-live-interactor',
    name: 'Gemini Live Multimodal Interaction Agent',
    type: 'agent',
    category: 'ai-research',
    description: 'Autonomous realtime agent utilizing Gemini 2.0 Flash Multimodal Live API over WebSockets for bi-directional audio, vision, and tool calling.',
    installs: 2650,
    verified: true,
    featured: true,
    version: '2.0.0',
    tags: ['agent', 'gemini', 'live-api', 'multimodal', 'realtime-audio'],
    triggers: ['gemini live agent', 'multimodal audio agent', 'realtime vision agent', 'gemini websocket agent'],
    samplePrompt: 'Initialize Gemini Live WebSocket agent with audio streaming and tools.',
    cliCommand: 'gemini-cli agent deploy ai-research/gemini-live-interactor',
    author: 'Google AI Ecosystem',
    dependencies: ['@google/genai', 'ws'],
    compatibility: ['Gemini 2.0 Flash', 'Google GenAI SDK v0.1+'],
    fullInstructions: `### Gemini Live Multimodal Agent Protocol
Establishes bidirectional live audio/vision stream:

- **Transport**: WebSocket connection to \`wss://generativelanguage.googleapis.com/ws/...\`
- **Capabilities**: Sub-second speech-to-speech interaction with real-time tool interrupts.`
  },
  {
    id: 'agent-custom-gpt-actions-orchestrator',
    slug: 'workflow-automation/custom-gpt-actions-orchestrator',
    name: 'OpenAI Assistant & Custom GPT Orchestrator',
    type: 'agent',
    category: 'workflow-automation',
    description: 'Autonomous Assistant API orchestrator that synchronizes threads, runs vector retrieval vector stores, and dispatches external REST actions.',
    installs: 2540,
    verified: true,
    featured: true,
    version: '2.2.0',
    tags: ['agent', 'chatgpt', 'openai', 'assistants-api', 'custom-gpts'],
    triggers: ['openai assistant agent', 'custom gpt orchestrator', 'run assistant thread', 'dispatch openai action'],
    samplePrompt: 'Orchestrate OpenAI Assistant thread with file_search and custom action endpoints.',
    cliCommand: 'openai-cli agent deploy workflow-automation/custom-gpt-actions-orchestrator',
    author: 'OpenAI Developer Guild',
    dependencies: ['openai'],
    compatibility: ['OpenAI Assistants API v2', 'GPT-4o'],
    fullInstructions: `### OpenAI Assistant Orchestrator Architecture
Manages stateful conversation threads and tool runs:

\`\`\`typescript
const run = await openai.beta.threads.runs.createAndPoll(thread.id, {
  assistant_id: assistant.id,
  instructions: 'Resolve user technical requests with strict schema tools.'
});
\`\`\``
  },
  {
    id: 'agent-deepseek-v3-autonomous-coder',
    slug: 'development/deepseek-v3-autonomous-coder',
    name: 'DeepSeek-V3 Full-Repo Autonomous Engineer',
    type: 'agent',
    category: 'development',
    description: 'Autonomous software engineering agent utilizing DeepSeek-V3 671B MoE architecture for repository-wide refactoring, bug fixes, and patch generation.',
    installs: 2790,
    verified: true,
    featured: true,
    version: '3.0.0',
    tags: ['agent', 'deepseek', 'deepseek-v3', 'autonomous-engineer', 'moe'],
    triggers: ['deepseek coder agent', 'deepseek repo engineer', 'autonomous refactoring agent', 'deepseek v3 engineer'],
    samplePrompt: 'Refactor all database access layers across this repository using DeepSeek-V3.',
    cliCommand: 'deepseek-cli agent deploy development/deepseek-v3-autonomous-coder',
    author: 'DeepSeek AI Lab',
    dependencies: ['openai'],
    compatibility: ['DeepSeek-V3', 'DeepSeek-R1', 'DeepSeek API'],
    fullInstructions: `### DeepSeek-V3 Autonomous Engineering Protocol
Executes multi-file AST transforms with 64k token context window and MoE parallel reasoning.`
  },
  {
    id: 'agent-zai-multilingual-coder',
    slug: 'development/zai-multilingual-coder',
    name: 'Z.AI Autonomous Multilingual Code Engineer',
    type: 'agent',
    category: 'development',
    description: 'Autonomous multi-pass agent specialized in high-accuracy cross-language codebase migrations (Java/Go to TypeScript, Python to Rust) with GLM-4.',
    installs: 2280,
    verified: true,
    featured: true,
    version: '1.5.0',
    tags: ['agent', 'zai', 'glm-4', 'multilingual', 'migration'],
    triggers: ['zai code migration agent', 'glm-4 language converter', 'cross-language refactor agent'],
    samplePrompt: 'Migrate this Spring Boot Java service into modern TypeScript Express with Z.AI.',
    cliCommand: 'zai agent deploy development/zai-multilingual-coder',
    author: 'Zhipu AI Guild',
    dependencies: ['axios'],
    compatibility: ['GLM-4-Plus', 'Z.AI Platform'],
    fullInstructions: `### Z.AI Multilingual Code Migration Pipeline
Preserves exact business logic semantics during cross-language compilation and migration.`
  },
  {
    id: 'agent-opencode-workspace-architect',
    slug: 'development/opencode-workspace-architect',
    name: 'OpenCode Workspace Architect Agent',
    type: 'agent',
    category: 'development',
    description: 'Autonomous project scaffolding agent for OpenCode that initializes build manifests, CI pipelines, linters, and component trees.',
    installs: 2150,
    verified: true,
    featured: true,
    version: '2.0.0',
    tags: ['agent', 'opencode', 'workspace-architect', 'scaffolding', 'ci-cd'],
    triggers: ['opencode architect agent', 'scaffold project opencode', 'initialize workspace agent'],
    samplePrompt: 'Scaffold production Next.js 15 workspace with OpenCode Architect Agent.',
    cliCommand: 'opencode agent deploy development/opencode-workspace-architect',
    author: 'OpenCode Foundation',
    dependencies: ['node-pty'],
    compatibility: ['OpenCode Core v2.0+'],
    fullInstructions: `### OpenCode Workspace Architect Protocol
Automates zero-to-one repository setup, Docker files, and test harness initialization.`
  },
  {
    id: 'agent-oxalpha-decentralized-orchestrator',
    slug: 'workflow-automation/oxalpha-decentralized-orchestrator',
    name: 'OX Alpha Distributed Agent Fabric Orchestrator',
    type: 'agent',
    category: 'workflow-automation',
    description: 'Coordinates multi-agent consensus, smart contract verification, and cryptographically verified task execution across OX Alpha distributed network.',
    installs: 1980,
    verified: true,
    featured: true,
    version: '1.3.0',
    tags: ['agent', 'oxalpha', 'decentralized', 'consensus', 'smart-contracts'],
    triggers: ['ox alpha orchestrator', 'distributed agent fabric', 'smart contract agent', 'consensus orchestrator'],
    samplePrompt: 'Orchestrate multi-agent decentralized verification job on OX Alpha network.',
    cliCommand: 'ox-alpha agent deploy workflow-automation/oxalpha-decentralized-orchestrator',
    author: 'OX Alpha Research',
    dependencies: ['ethers'],
    compatibility: ['OX Alpha Kernel v1.0+'],
    fullInstructions: `### OX Alpha Decentralized Orchestrator Specification
Dispatches tasks across distributed node workers with verifiable cryptographic execution proofs.`
  }
];

// Curated Commands
export const TOP_CURATED_COMMANDS: ComponentItem[] = [
  {
    id: 'cmd-review',
    slug: 'development/cmd-review',
    name: '/review',
    type: 'command',
    category: 'development',
    description: 'Quick slash command to review staged changes or target branch against strict architectural and TypeScript standards.',
    installs: 2310,
    verified: true,
    featured: true,
    version: '2.0.0',
    tags: ['command', 'slash-command', 'review', 'git-diff'],
    triggers: ['/review', 'review staged changes', 'run /review command'],
    samplePrompt: '/review --staged',
    cliCommand: 'npx claude-code-templates@latest --command development/cmd-review',
    author: 'Claude Core Team',
    dependencies: ['git', 'typescript'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### /review Command Protocol
Executes an immediate architectural review on staged git diffs.

\`\`\`bash
/review [flags]
\`\`\`

- \`--staged\`: Focus exclusively on git staged files.
- \`--branch <name>\`: Compare current branch against base target.
- \`--strict\`: Flag minor code style warnings as blocking errors.`
  },
  {
    id: 'cmd-test',
    slug: 'development/cmd-test',
    name: '/test',
    type: 'command',
    category: 'development',
    description: 'Executes automated test runner, analyzes failing assertions, and proposes minimal surgical patches.',
    installs: 1890,
    verified: true,
    featured: true,
    version: '2.1.0',
    tags: ['command', 'slash-command', 'testing', 'vitest'],
    triggers: ['/test', 'run project tests', 'trigger /test command'],
    samplePrompt: '/test --watch',
    cliCommand: 'npx claude-code-templates@latest --command development/cmd-test',
    author: 'Claude Testing Guild',
    dependencies: ['vitest', 'jest', 'playwright'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### /test Command Protocol
Triggers project test suites and diagnoses failing assertions.

\`\`\`bash
/test [flags] [filter]
\`\`\`

- \`--watch\`: Re-run tests on file changes.
- \`--coverage\`: Generate line and branch coverage report.
- \`--fix-failures\`: Automatically apply proposed patches for broken unit tests.`
  },
  {
    id: 'cmd-fix',
    slug: 'development/cmd-fix',
    name: '/fix',
    type: 'command',
    category: 'development',
    description: 'Diagnoses current compiler or runtime errors, identifies root causes, and applies verified fixes.',
    installs: 1720,
    verified: true,
    featured: true,
    version: '1.8.0',
    tags: ['command', 'slash-command', 'bugfix', 'compiler-fix'],
    triggers: ['/fix', 'fix error', 'run /fix command'],
    samplePrompt: '/fix TypeScript error TS2322',
    cliCommand: 'npx claude-code-templates@latest --command development/cmd-fix',
    author: 'Claude Core Team',
    dependencies: ['typescript', 'eslint'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### /fix Command Protocol
Analyzes recent compiler logs or runtime exceptions and applies targeted bugfixes.

\`\`\`bash
/fix [error_message_or_code]
\`\`\`

- Inspects error stack traces and pinpoints root cause file lines.
- Modifies code with surgical diffs and verifies build success.`
  },
  {
    id: 'cmd-commit',
    slug: 'productivity/cmd-commit',
    name: '/commit',
    type: 'command',
    category: 'productivity',
    description: 'Analyzes staged git diffs to craft conventional commit messages with breaking change flags and issue references.',
    installs: 1540,
    verified: true,
    version: '1.5.0',
    tags: ['command', 'slash-command', 'git', 'conventional-commits'],
    triggers: ['/commit', 'generate git commit message', 'run /commit'],
    samplePrompt: '/commit --auto',
    cliCommand: 'npx claude-code-templates@latest --command productivity/cmd-commit',
    author: 'Git Automation Lab',
    dependencies: ['git'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### /commit Command Protocol
Scans staged changes to formulate formatted Conventional Commits.

\`\`\`bash
/commit [flags]
\`\`\`

- \`--auto\`: Stage modified files and commit automatically.
- \`--type <feat|fix|docs|refactor>\`: Enforce commit type prefix.`
  },
  {
    id: 'cmd-refactor',
    slug: 'development/cmd-refactor',
    name: '/refactor',
    type: 'command',
    category: 'development',
    description: 'Refactors selected functions or modules using SOLID principles, cognitive complexity reductions, and immutability rules.',
    installs: 1410,
    verified: true,
    version: '1.9.0',
    tags: ['command', 'slash-command', 'refactor', 'clean-code'],
    triggers: ['/refactor', 'refactor function', 'run /refactor command'],
    samplePrompt: '/refactor src/utils/formatters.ts --clean',
    cliCommand: 'npx claude-code-templates@latest --command development/cmd-refactor',
    author: 'Claude Refactor Guild',
    dependencies: ['typescript'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### /refactor Command Protocol
Simplifies complex codebase sections while preserving exact runtime behavior.

\`\`\`bash
/refactor <path/to/file> [options]
\`\`\`

- \`--clean\`: Extract deeply nested blocks into single-responsibility functions.
- \`--immutable\`: Replace mutable state variables with functional updates.`
  },
  {
    id: 'cmd-security-scan',
    slug: 'security/cmd-security-scan',
    name: '/security-scan',
    type: 'command',
    category: 'security',
    description: 'Runs SAST static analysis security scanning across workspace files to catch OWASP vulnerabilities, secret leaks, and insecure dependencies.',
    installs: 1320,
    verified: true,
    version: '2.0.0',
    tags: ['command', 'slash-command', 'security', 'sast'],
    triggers: ['/security-scan', 'run security scan', 'sast audit command'],
    samplePrompt: '/security-scan --depth full',
    cliCommand: 'npx claude-code-templates@latest --command security/cmd-security-scan',
    author: 'Security Systems Lab',
    dependencies: ['eslint', 'npm-audit'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### /security-scan Command Protocol
Audits project source files and dependency trees for security risks.

\`\`\`bash
/security-scan [flags]
\`\`\`

- \`--depth full\`: Scan source code, lockfiles, and environment files.
- \`--fix\`: Automatically fix patchable vulnerable dependencies.`
  },
  {
    id: 'cmd-gemini-test',
    slug: 'development/cmd-gemini-test',
    name: '/gemini-test',
    type: 'command',
    category: 'development',
    description: 'Generates comprehensive Vitest and Jest unit test suites with edge-case mocks using Gemini 2.0 Flash multimodal engine.',
    installs: 1980,
    verified: true,
    featured: true,
    version: '2.0.0',
    tags: ['command', 'slash-command', 'gemini', 'testing', 'unit-tests'],
    triggers: ['/gemini-test', 'generate gemini tests', 'run /gemini-test command'],
    samplePrompt: '/gemini-test src/components/Dashboard.tsx --coverage',
    cliCommand: 'gemini-cli command register development/cmd-gemini-test',
    author: 'Google AI Ecosystem',
    dependencies: ['@google/genai', 'vitest'],
    compatibility: ['Gemini 2.0 Flash', 'Gemini CLI'],
    fullInstructions: `### /gemini-test Slash Command Protocol
Synthesizes boundary test cases and regression suites:

\`\`\`bash
/gemini-test <file_path> [--coverage] [--mock-apis]
\`\`\``
  },
  {
    id: 'cmd-gpt-schema',
    slug: 'development/cmd-gpt-schema',
    name: '/gpt-schema',
    type: 'command',
    category: 'development',
    description: 'Converts TypeScript types and Zod schemas into strict OpenAI Function Calling tool schemas automatically.',
    installs: 1840,
    verified: true,
    featured: true,
    version: '1.4.0',
    tags: ['command', 'slash-command', 'chatgpt', 'openai', 'json-schema'],
    triggers: ['/gpt-schema', 'generate openai tool schema', 'run /gpt-schema'],
    samplePrompt: '/gpt-schema src/types.ts --export-tools',
    cliCommand: 'openai-cli command register development/cmd-gpt-schema',
    author: 'OpenAI Developer Guild',
    dependencies: ['openai', 'zod-to-json-schema'],
    compatibility: ['GPT-4o', 'OpenAI CLI'],
    fullInstructions: `### /gpt-schema Command Specification
Outputs verified OpenAI function calling definitions from TypeScript code.`
  },
  {
    id: 'cmd-deepseek-reason',
    slug: 'ai-research/cmd-deepseek-reason',
    name: '/deepseek-reason',
    type: 'command',
    category: 'ai-research',
    description: 'Invokes DeepSeek-R1 extended thinking mode to analyze complex algorithms, mathematical proofs, and race condition bugs.',
    installs: 2120,
    verified: true,
    featured: true,
    version: '1.5.0',
    tags: ['command', 'slash-command', 'deepseek', 'r1', 'reasoning'],
    triggers: ['/deepseek-reason', 'run deepseek reasoning', 'deepseek math proof command'],
    samplePrompt: '/deepseek-reason "Verify correctness of distributed consensus lock"',
    cliCommand: 'deepseek-cli command register ai-research/cmd-deepseek-reason',
    author: 'DeepSeek AI Lab',
    dependencies: ['openai'],
    compatibility: ['DeepSeek-R1', 'DeepSeek API'],
    fullInstructions: `### /deepseek-reason Command Protocol
Streams raw reasoning tokens and final synthesis for algorithm verification.`
  },
  {
    id: 'cmd-zai-optimize',
    slug: 'development/cmd-zai-optimize',
    name: '/zai-optimize',
    type: 'command',
    category: 'development',
    description: 'Optimizes token efficiency, async performance, and memory allocations using Z.AI GLM-4 engine.',
    installs: 1670,
    verified: true,
    version: '1.2.0',
    tags: ['command', 'slash-command', 'zai', 'glm-4', 'optimization'],
    triggers: ['/zai-optimize', 'run zai optimization', 'glm-4 code optimizer'],
    samplePrompt: '/zai-optimize src/server.ts --profile memory',
    cliCommand: 'zai command register development/cmd-zai-optimize',
    author: 'Zhipu AI Guild',
    dependencies: ['axios'],
    compatibility: ['GLM-4-Plus', 'Z.AI CLI'],
    fullInstructions: `### /zai-optimize Command Protocol
Performs memory profiling and async loop optimization.`
  },
  {
    id: 'cmd-opencode-exec',
    slug: 'development/cmd-opencode-exec',
    name: '/opencode-run',
    type: 'command',
    category: 'development',
    description: 'Executes sandboxed build and test scripts inside OpenCode isolated runtime with real-time stdout capture.',
    installs: 1590,
    verified: true,
    version: '1.8.0',
    tags: ['command', 'slash-command', 'opencode', 'sandbox', 'execution'],
    triggers: ['/opencode-run', 'run sandboxed command', 'opencode exec'],
    samplePrompt: '/opencode-run "npm run build && npm test"',
    cliCommand: 'opencode command register development/cmd-opencode-exec',
    author: 'OpenCode Foundation',
    dependencies: ['node-pty'],
    compatibility: ['OpenCode CLI v2.0+'],
    fullInstructions: `### /opencode-run Command Specification
Runs build and verification commands inside isolated sandbox container.`
  },
  {
    id: 'cmd-ox-deploy',
    slug: 'workflow-automation/cmd-ox-deploy',
    name: '/ox-deploy',
    type: 'command',
    category: 'workflow-automation',
    description: 'Deploys autonomous agent state channels and verified task contracts to OX Alpha network nodes.',
    installs: 1420,
    verified: true,
    version: '1.1.0',
    tags: ['command', 'slash-command', 'oxalpha', 'deploy', 'state-channels'],
    triggers: ['/ox-deploy', 'deploy ox alpha contract', 'run /ox-deploy'],
    samplePrompt: '/ox-deploy contracts/AgentRegistry.sol --network mainnet',
    cliCommand: 'ox-alpha command register workflow-automation/cmd-ox-deploy',
    author: 'OX Alpha Research',
    dependencies: ['ethers'],
    compatibility: ['OX Alpha Kernel v1.0+'],
    fullInstructions: `### /ox-deploy Command Specification
Deploys verified agent state manifests to OX Alpha network.`
  }
];

// Curated Settings
export const TOP_CURATED_SETTINGS: ComponentItem[] = [
  {
    id: 'setting-strict-typescript',
    slug: 'development/setting-strict-typescript',
    name: 'Strict TypeScript & Anti-Slop Mode',
    type: 'setting',
    category: 'development',
    description: 'Enforces strict noImplicitAny, exactOptionalPropertyTypes, anti-slop visual standards, and zero unsolicited tabs in workspace settings.',
    installs: 1620,
    verified: true,
    featured: true,
    version: '1.5.0',
    tags: ['setting', 'typescript', 'anti-slop', 'configuration'],
    triggers: ['enable strict mode', 'zero slop setting', 'configure strict typescript setting'],
    samplePrompt: 'Enable strict TypeScript mode and anti-slop visual constraints in settings.',
    cliCommand: 'npx claude-code-templates@latest --setting development/setting-strict-typescript',
    author: 'Claude Standards Board',
    dependencies: ['typescript'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### Strict TypeScript Setting Schema
Defines workspace rules inside \`.clauderc.json\`:

\`\`\`json
{
  "typescript": {
    "strict": true,
    "noImplicitAny": true,
    "exactOptionalPropertyTypes": true,
    "antiSlopMode": true
  }
}
\`\`\``
  },
  {
    id: 'setting-max-autonomous-turns',
    slug: 'productivity/setting-max-autonomous-turns',
    name: 'Autonomous Loop Turn Budget Setting',
    type: 'setting',
    category: 'productivity',
    description: 'Configures maximum autonomous task iterations (default 25 turns) with automatic checkpointing and rollback safe-guards.',
    installs: 1410,
    verified: true,
    version: '1.2.0',
    tags: ['setting', 'autonomous', 'turn-limit', 'safety'],
    triggers: ['set max turns', 'turn budget configuration', 'configure autonomous turns'],
    samplePrompt: 'Configure max autonomous loop turns to 30 with progress checkpointing.',
    cliCommand: 'npx claude-code-templates@latest --setting productivity/setting-max-autonomous-turns',
    author: 'Claude Core Engineering',
    dependencies: ['claude-code-cli'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### Autonomous Turn Budget Setting Schema
Sets limits for long-running autonomous tasks:

\`\`\`json
{
  "agent": {
    "maxTurns": 25,
    "autoCheckpoint": true,
    "rollbackOnError": true
  }
}
\`\`\``
  },
  {
    id: 'setting-auto-sandbox-guard',
    slug: 'security/setting-auto-sandbox-guard',
    name: 'Auto-Sandbox Guard Setting',
    type: 'setting',
    category: 'security',
    description: 'Restricts background command execution to verified directory boundaries, blocking destructive commands and network exfiltration.',
    installs: 1280,
    verified: true,
    version: '2.0.0',
    tags: ['setting', 'sandbox', 'security', 'command-guard'],
    triggers: ['enable sandbox guard', 'configure auto-sandbox setting', 'security command boundary'],
    samplePrompt: 'Enable auto-sandbox guard setting to restrict background command execution.',
    cliCommand: 'npx claude-code-templates@latest --setting security/setting-auto-sandbox-guard',
    author: 'Security Operations',
    dependencies: ['claude-code-cli'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### Sandbox Guard Setting Schema
Prevents out-of-bounds filesystem operations and shell commands:

\`\`\`json
{
  "sandbox": {
    "strictRoot": true,
    "blockNetworkAccess": false,
    "blockedCommands": ["rm -rf /", "dd", "mkfs"]
  }
}
\`\`\``
  },
  {
    id: 'setting-git-auto-branch',
    slug: 'workflow-automation/setting-git-auto-branch',
    name: 'Git Branch & Workspace Isolation Setting',
    type: 'setting',
    category: 'workflow-automation',
    description: 'Enforces conventional branch naming conventions, preventing direct main commits and mandating topic-branch workspace isolation.',
    installs: 1190,
    verified: true,
    version: '1.3.0',
    tags: ['setting', 'git', 'branching', 'workspace-isolation'],
    triggers: ['enable git branch setting', 'workspace branch isolation', 'enforce topic branch setting'],
    samplePrompt: 'Configure workspace settings to require topic branches for all feature edits.',
    cliCommand: 'npx claude-code-templates@latest --setting workflow-automation/setting-git-auto-branch',
    author: 'Git Automation Team',
    dependencies: ['git'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### Git Branch Isolation Schema
Enforces git workflow isolation:

\`\`\`json
{
  "git": {
    "preventMainCommit": true,
    "autoCreateBranch": true,
    "branchPrefix": "feature/claude-"
  }
}
\`\`\``
  },
  {
    id: 'setting-ui-design-tokens',
    slug: 'creative-design/setting-ui-design-tokens',
    name: 'Design Tokens & Contrast Setting',
    type: 'setting',
    category: 'creative-design',
    description: 'Enforces mathematical WCAG AAA contrast compliance, strict padding math, and anti-slop design rules across generated UI components.',
    installs: 1050,
    verified: true,
    version: '1.4.0',
    tags: ['setting', 'ui-ux', 'wcag', 'design-tokens'],
    triggers: ['enable ui contrast setting', 'design tokens configuration', 'wcag aaa setting'],
    samplePrompt: 'Enable WCAG AAA design token setting for all generated frontend views.',
    cliCommand: 'npx claude-code-templates@latest --setting creative-design/setting-ui-design-tokens',
    author: 'UI/UX Design Systems Lab',
    dependencies: ['tailwindcss'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### Design Tokens Setting Schema
Enforces visual guidelines during UI generation:

\`\`\`json
{
  "ui": {
    "minContrastRatio": 7.0,
    "enforcePaddingMath": true,
    "allowGradients": false
  }
}
\`\`\``
  },
  {
    id: 'setting-gemini-structured-output',
    slug: 'ai-research/setting-gemini-structured-output',
    name: 'Gemini JSON Schema & Controlled Generation Setting',
    type: 'setting',
    category: 'ai-research',
    description: 'Forces strict responseSchema and responseMimeType in Gemini 2.0 API config to guarantee zero malformed JSON responses.',
    installs: 1890,
    verified: true,
    featured: true,
    version: '2.0.0',
    tags: ['setting', 'gemini', 'structured-output', 'json-schema', 'google-ai'],
    triggers: ['gemini structured output setting', 'responseSchema config', 'gemini json setting'],
    samplePrompt: 'Enable Gemini responseSchema configuration setting for API pipelines.',
    cliCommand: 'gemini-cli config set structured_output true',
    author: 'Google AI Ecosystem',
    dependencies: ['@google/genai'],
    compatibility: ['Gemini 2.0 Flash', 'Gemini 2.0 Pro'],
    fullInstructions: `### Gemini Controlled Output Setting
Configures model response enforcement:

\`\`\`json
{
  "gemini": {
    "responseMimeType": "application/json",
    "strictSchemaEnforcement": true,
    "searchGrounding": true
  }
}
\`\`\``
  },
  {
    id: 'setting-openai-system-directives',
    slug: 'development/setting-openai-system-directives',
    name: 'OpenAI Strict Schema & Directives Setting',
    type: 'setting',
    category: 'development',
    description: 'Enforces strict JSON schema validation and seed repeatability across all ChatGPT and OpenAI completions.',
    installs: 1740,
    verified: true,
    featured: true,
    version: '1.6.0',
    tags: ['setting', 'chatgpt', 'openai', 'system-directives', 'reproducibility'],
    triggers: ['openai strict schema setting', 'chatgpt system directive config', 'openai reproducibility setting'],
    samplePrompt: 'Configure OpenAI system directives to enforce strict mode on all tool calls.',
    cliCommand: 'openai-cli config set strict_mode true',
    author: 'OpenAI Developer Guild',
    dependencies: ['openai'],
    compatibility: ['GPT-4o', 'o3-mini'],
    fullInstructions: `### OpenAI Directives Configuration Schema
\`\`\`json
{
  "openai": {
    "strictMode": true,
    "temperature": 0.2,
    "seed": 42,
    "store": true
  }
}
\`\`\``
  },
  {
    id: 'setting-deepseek-reasoning-depth',
    slug: 'ai-research/setting-deepseek-reasoning-depth',
    name: 'DeepSeek Reasoning Depth & Token Budget Setting',
    type: 'setting',
    category: 'ai-research',
    description: 'Configures reasoning token budget (up to 32k thinking tokens) and mathematical verification passes in DeepSeek-R1.',
    installs: 1980,
    verified: true,
    featured: true,
    version: '1.5.0',
    tags: ['setting', 'deepseek', 'r1', 'reasoning-budget', 'thinking-tokens'],
    triggers: ['deepseek reasoning budget', 'configure thinking tokens', 'deepseek r1 depth setting'],
    samplePrompt: 'Set DeepSeek reasoning token budget to 16,384 tokens.',
    cliCommand: 'deepseek-cli config set reasoning_budget 16384',
    author: 'DeepSeek AI Lab',
    dependencies: ['openai'],
    compatibility: ['DeepSeek-R1'],
    fullInstructions: `### DeepSeek Reasoning Budget Schema
\`\`\`json
{
  "deepseek": {
    "reasoningBudgetTokens": 16384,
    "streamReasoningTokens": true,
    "temperature": 0.6
  }
}
\`\`\``
  },
  {
    id: 'setting-zai-glm-api-config',
    slug: 'workflow-automation/setting-zai-glm-api-config',
    name: 'Z.AI GLM-4 Enterprise Engine & Context Setting',
    type: 'setting',
    category: 'workflow-automation',
    description: 'Configures Zhipu AI GLM-4 endpoint parameters, 128k context window chunking, and bilingual terminology glossaries.',
    installs: 1530,
    verified: true,
    version: '1.2.0',
    tags: ['setting', 'zai', 'glm-4', 'enterprise-config', 'context-window'],
    triggers: ['zai api config setting', 'glm-4 context window setting', 'zhipu engine preferences'],
    samplePrompt: 'Configure Z.AI GLM-4 context window buffer and endpoint routing.',
    cliCommand: 'zai config set context_window 128k',
    author: 'Zhipu AI Guild',
    dependencies: ['axios'],
    compatibility: ['GLM-4-Plus'],
    fullInstructions: `### Z.AI Enterprise Engine Config Schema
\`\`\`json
{
  "zai": {
    "model": "glm-4-plus",
    "contextWindow": "128k",
    "stream": true
  }
}
\`\`\``
  },
  {
    id: 'setting-opencode-security-policy',
    slug: 'security/setting-opencode-security-policy',
    name: 'OpenCode Sandbox Security Policy Setting',
    type: 'setting',
    category: 'security',
    description: 'Defines strict filesystem boundaries, blocked bash commands, and network egress rules for OpenCode environments.',
    installs: 1460,
    verified: true,
    version: '2.0.0',
    tags: ['setting', 'opencode', 'sandbox', 'security-policy'],
    triggers: ['opencode security setting', 'sandbox boundary config', 'opencode policy setting'],
    samplePrompt: 'Set OpenCode security policy to restrict network access to whitelist.',
    cliCommand: 'opencode config set security_policy strict',
    author: 'OpenCode Foundation',
    dependencies: ['node-pty'],
    compatibility: ['OpenCode CLI v2.0+'],
    fullInstructions: `### OpenCode Sandbox Policy Schema
\`\`\`json
{
  "opencode": {
    "isolation": "container",
    "egressWhitelist": ["registry.npmjs.org", "github.com"],
    "readOnlyRoot": false
  }
}
\`\`\``
  },
  {
    id: 'setting-oxalpha-consensus-rules',
    slug: 'security/setting-oxalpha-consensus-rules',
    name: 'OX Alpha Consensus & Verification Setting',
    type: 'setting',
    category: 'security',
    description: 'Configures cryptographic signature validation, proof timeout thresholds, and decentralized state channel consensus rules.',
    installs: 1380,
    verified: true,
    version: '1.1.0',
    tags: ['setting', 'oxalpha', 'consensus', 'cryptography', 'state-channel'],
    triggers: ['ox alpha consensus setting', 'proof verification setting', 'ox alpha rules'],
    samplePrompt: 'Configure OX Alpha proof verification timeout to 120 seconds.',
    cliCommand: 'ox-alpha config set proof_timeout 120s',
    author: 'OX Alpha Research',
    dependencies: ['ethers'],
    compatibility: ['OX Alpha Kernel v1.0+'],
    fullInstructions: `### OX Alpha Consensus Rules Schema
\`\`\`json
{
  "oxalpha": {
    "verificationThreshold": 0.8,
    "proofTimeoutMs": 120000,
    "stateChannelSync": "strict"
  }
}
\`\`\``
  }
];

// Curated Hooks
export const TOP_CURATED_HOOKS: ComponentItem[] = [
  {
    id: 'hook-pre-tool-execution',
    slug: 'productivity/hook-pre-tool-execution',
    name: 'pre-tool-execution Hook',
    type: 'hook',
    category: 'productivity',
    description: 'Intercepts tool calls before execution to validate arguments, ensure safe file paths, and enforce sandbox boundaries.',
    installs: 1280,
    verified: true,
    featured: true,
    version: '1.4.0',
    tags: ['hook', 'lifecycle', 'pre-tool', 'security'],
    triggers: ['hook pre-tool', 'tool interceptor', 'register pre-tool hook'],
    samplePrompt: 'Register a pre-tool-execution hook to block unauthorized rm -rf commands.',
    cliCommand: 'npx claude-code-templates@latest --hook productivity/hook-pre-tool-execution',
    author: 'Claude Security Research',
    dependencies: ['claude-code-cli'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### pre-tool-execution Lifecycle Hook
Intercepts tool execution parameters before execution.

- **Event Target**: \`tool:beforeExecute\`
- **Validation**: Scans parameters for shell exfiltration or unauthorized file path targeting.
- **Action**: Returns non-zero error status to cancel hazardous invocations.`
  },
  {
    id: 'hook-on-build-failure',
    slug: 'development/hook-on-build-failure',
    name: 'on-build-failure Auto-Recovery Hook',
    type: 'hook',
    category: 'development',
    description: 'Automatically triggers error inspection and rollbacks whenever npm run build or compiler execution fails.',
    installs: 1140,
    verified: true,
    featured: true,
    version: '1.3.0',
    tags: ['hook', 'build', 'recovery', 'ci'],
    triggers: ['hook on-build-failure', 'build failure interceptor', 'auto recovery hook'],
    samplePrompt: 'Install auto-recovery hook on build failures to diagnose missing packages.',
    cliCommand: 'npx claude-code-templates@latest --hook development/hook-on-build-failure',
    author: 'Claude Core Engineering',
    dependencies: ['typescript', 'vite'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### on-build-failure Auto-Recovery Hook
Monitors compile and build steps to recover from errors automatically.

- **Event Target**: \`build:onFailure\`
- **Action**: Inspects stderr output logs, identifies missing imports or package dependencies, and issues targeted fixes.`
  },
  {
    id: 'hook-secret-leak-blocker',
    slug: 'security/hook-secret-leak-blocker',
    name: 'secret-leak-blocker Hook',
    type: 'hook',
    category: 'security',
    description: 'Intercepts file writes, commits, and API payloads to prevent committing API keys, tokens, or environment secrets.',
    installs: 1090,
    verified: true,
    version: '1.6.0',
    tags: ['hook', 'security', 'secret-leak', 'dlp'],
    triggers: ['hook secret leak blocker', 'prevent api key leak hook', 'secret scanner hook'],
    samplePrompt: 'Register secret leak blocker hook to prevent writing API keys to public files.',
    cliCommand: 'npx claude-code-templates@latest --hook security/hook-secret-leak-blocker',
    author: 'Security Research Lab',
    dependencies: ['claude-code-cli'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### secret-leak-blocker Hook Protocol
Interprets file modifications for hardcoded secrets before writing to disk.

- **Event Target**: \`file:beforeWrite\`
- **Patterns**: Scans for standard API key formats (AWS, Stripe, OpenAI, Gemini).
- **Enforcement**: Replaces plain-text secrets with environment variable references.`
  },
  {
    id: 'hook-post-commit-sync',
    slug: 'workflow-automation/hook-post-commit-sync',
    name: 'post-commit-sync Hook',
    type: 'hook',
    category: 'workflow-automation',
    description: 'Listens for successful git commits to automatically update CHANGELOG.md, refresh documentation, and trigger build notifications.',
    installs: 980,
    verified: true,
    version: '1.1.0',
    tags: ['hook', 'git', 'post-commit', 'changelog'],
    triggers: ['hook post commit sync', 'git post commit hook', 'changelog sync hook'],
    samplePrompt: 'Install post-commit-sync hook to automatically update CHANGELOG.md upon committing.',
    cliCommand: 'npx claude-code-templates@latest --hook workflow-automation/hook-post-commit-sync',
    author: 'DevOps Automation Guild',
    dependencies: ['git'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### post-commit-sync Lifecycle Hook
Fires immediately following a successful git commit.

- **Event Target**: \`git:postCommit\`
- **Action**: Appends new commit details to project CHANGELOG.md and validates docs.`
  },
  {
    id: 'hook-lint-on-save',
    slug: 'development/hook-lint-on-save',
    name: 'lint-on-save Fast Hook',
    type: 'hook',
    category: 'development',
    description: 'Triggers lightweight ESLint and TypeScript syntax checks immediately upon file modification to catch syntax issues instantly.',
    installs: 920,
    verified: true,
    version: '1.2.0',
    tags: ['hook', 'lint', 'linter-on-save', 'type-check'],
    triggers: ['hook lint on save', 'instant lint hook', 'typecheck hook on save'],
    samplePrompt: 'Register lint-on-save hook to catch syntax errors immediately after editing code.',
    cliCommand: 'npx claude-code-templates@latest --hook development/hook-lint-on-save',
    author: 'Claude Quality Guild',
    dependencies: ['eslint', 'typescript'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### lint-on-save Hook Specification
Runs lightweight diagnostics after every file write.

- **Event Target**: \`file:afterWrite\`
- **Action**: Runs fast ESLint rules on modified files and highlights syntax errors.`
  },
  {
    id: 'hook-gemini-telemetry-guard',
    slug: 'ai-research/hook-gemini-telemetry-guard',
    name: 'Gemini Safety & Grounding Lifecycle Hook',
    type: 'hook',
    category: 'ai-research',
    description: 'Intercepts generation requests to verify safety ratings, harm categories, and Google Search citation metadata before delivering content.',
    installs: 1450,
    verified: true,
    featured: true,
    version: '2.0.0',
    tags: ['hook', 'gemini', 'safety-guard', 'grounding-verify'],
    triggers: ['hook gemini safety', 'gemini lifecycle hook', 'verify grounding citations'],
    samplePrompt: 'Register Gemini safety hook to audit response harm ratings.',
    cliCommand: 'gemini-cli hook register ai-research/hook-gemini-telemetry-guard',
    author: 'Google AI Ecosystem',
    dependencies: ['@google/genai'],
    compatibility: ['Gemini 2.0 Flash', 'Gemini 2.0 Pro'],
    fullInstructions: `### Gemini Safety & Grounding Hook
- **Event Target**: \`generate:afterResponse\`
- **Validation**: Checks \`safetyRatings\` and ensures citations have valid web domains.`
  },
  {
    id: 'hook-openai-tool-validator',
    slug: 'development/hook-openai-tool-validator',
    name: 'OpenAI Tool Call Schema Validator Hook',
    type: 'hook',
    category: 'development',
    description: 'Validates OpenAI tool_calls argument payloads against JSON Schemas before dispatching executions.',
    installs: 1320,
    verified: true,
    featured: true,
    version: '1.4.0',
    tags: ['hook', 'chatgpt', 'openai', 'tool-call', 'schema-validation'],
    triggers: ['hook openai tool validator', 'validate tool_calls payload hook', 'chatgpt tool schema hook'],
    samplePrompt: 'Install OpenAI tool call validator hook to intercept malformed arguments.',
    cliCommand: 'openai-cli hook register development/hook-openai-tool-validator',
    author: 'OpenAI Developer Guild',
    dependencies: ['openai', 'ajv'],
    compatibility: ['GPT-4o', 'o3-mini'],
    fullInstructions: `### OpenAI Tool Validator Hook
- **Event Target**: \`tool:beforeDispatch\`
- **Validation**: Uses Ajv to strictly validate JSON schema conformity before executing functions.`
  },
  {
    id: 'hook-deepseek-r1-verifier',
    slug: 'ai-research/hook-deepseek-r1-verifier',
    name: 'DeepSeek-R1 Mathematical CoT Verifier Hook',
    type: 'hook',
    category: 'ai-research',
    description: 'Parses reasoning tokens in DeepSeek-R1 outputs to verify that mathematical assertions and proofs do not contain contradictions.',
    installs: 1560,
    verified: true,
    featured: true,
    version: '1.5.0',
    tags: ['hook', 'deepseek', 'r1', 'reasoning-verifier', 'proof'],
    triggers: ['hook deepseek verifier', 'deepseek r1 proof verification hook', 'reasoning token auditor'],
    samplePrompt: 'Register DeepSeek reasoning token verification hook.',
    cliCommand: 'deepseek-cli hook register ai-research/hook-deepseek-r1-verifier',
    author: 'DeepSeek AI Lab',
    dependencies: ['openai'],
    compatibility: ['DeepSeek-R1'],
    fullInstructions: `### DeepSeek CoT Verifier Hook
- **Event Target**: \`reasoning:onTokenChunk\`
- **Action**: Verifies theorem step progression and flags calculation inconsistencies.`
  },
  {
    id: 'hook-opencode-sandbox-guard',
    slug: 'security/hook-opencode-sandbox-guard',
    name: 'OpenCode Sandbox Boundary Interceptor Hook',
    type: 'hook',
    category: 'security',
    description: 'Pre-execution hook that intercepts all terminal commands in OpenCode, preventing unauthorized file system write operations.',
    installs: 1240,
    verified: true,
    version: '2.0.0',
    tags: ['hook', 'opencode', 'sandbox', 'boundary-guard'],
    triggers: ['hook opencode guard', 'sandbox boundary hook', 'terminal interceptor hook'],
    samplePrompt: 'Register OpenCode sandbox boundary interceptor hook.',
    cliCommand: 'opencode hook register security/hook-opencode-sandbox-guard',
    author: 'OpenCode Foundation',
    dependencies: ['node-pty'],
    compatibility: ['OpenCode CLI v2.0+'],
    fullInstructions: `### OpenCode Sandbox Boundary Hook
- **Event Target**: \`terminal:beforeCommand\`
- **Action**: Validates commands against allowed whitelist and aborts hazardous operations.`
  }
];

// Curated Plugins
export const TOP_CURATED_PLUGINS: ComponentItem[] = [
  {
    id: 'plugin-tailwind-v4',
    slug: 'creative-design/plugin-tailwind-v4',
    name: 'Tailwind CSS v4 Engine Plugin',
    type: 'plugin',
    category: 'creative-design',
    description: 'Provides real-time Tailwind CSS v4 intellisense, theme token extraction, and class collision resolution inside Claude Code.',
    installs: 1580,
    verified: true,
    featured: true,
    version: '4.0.1',
    tags: ['plugin', 'tailwind', 'css', 'intellisense'],
    triggers: ['tailwind plugin', 'extract tailwind tokens', 'install tailwind v4 plugin'],
    samplePrompt: 'Install Tailwind v4 engine plugin for Claude Code.',
    cliCommand: 'npx claude-code-templates@latest --plugin creative-design/plugin-tailwind-v4',
    author: 'UI/UX Design Systems Lab',
    dependencies: ['tailwindcss'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### Tailwind v4 Engine Plugin Specification
Extends Claude Code CLI with real-time Tailwind CSS v4 intellisense and class resolver utilities.

- **Language Server**: High-speed Tailwind CSS token parser.
- **Class Deduplication**: Resolves utility class conflicts automatically.`
  },
  {
    id: 'plugin-prisma-inspector',
    slug: 'database/plugin-prisma-inspector',
    name: 'Prisma Studio Inspector Plugin',
    type: 'plugin',
    category: 'database',
    description: 'Interactive Prisma schema visualizer, relation graph inspector, and live database record preview plugin.',
    installs: 1290,
    verified: true,
    featured: true,
    version: '1.6.0',
    tags: ['plugin', 'prisma', 'orm', 'database'],
    triggers: ['prisma plugin', 'inspect prisma schema', 'install prisma inspector plugin'],
    samplePrompt: 'Use Prisma inspector plugin to visualize relational foreign keys.',
    cliCommand: 'npx claude-code-templates@latest --plugin database/plugin-prisma-inspector',
    author: 'Database Systems Lab',
    dependencies: ['prisma', '@prisma/client'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### Prisma Inspector Plugin Specification
Provides live relation graph visualization and schema linting.

- **Schema Inspector**: Renders foreign key entity relationships.
- **Query Profiler**: Identifies unindexed relational queries.`
  },
  {
    id: 'plugin-typescript-ast',
    slug: 'development/plugin-typescript-ast',
    name: 'TypeScript AST Structural Analyzer Plugin',
    type: 'plugin',
    category: 'development',
    description: 'Deep AST parsing plugin detecting unused exports, circular dependencies, and dead code pathways in TypeScript codebases.',
    installs: 1150,
    verified: true,
    version: '2.1.0',
    tags: ['plugin', 'typescript', 'ast', 'dead-code'],
    triggers: ['typescript ast plugin', 'find circular dependencies plugin', 'analyze ast structure'],
    samplePrompt: 'Activate TypeScript AST plugin to check for circular dependency loops.',
    cliCommand: 'npx claude-code-templates@latest --plugin development/plugin-typescript-ast',
    author: 'Claude Core Engineering',
    dependencies: ['typescript', 'ts-morph'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### TypeScript AST Analyzer Plugin
Provides deep static code diagnostics.

- **Circular Dependency Detection**: Traces module import chains.
- **Dead Code Pruning**: Identifies unreachable function exports.`
  },
  {
    id: 'plugin-docker-compose',
    slug: 'workflow-automation/plugin-docker-compose',
    name: 'Docker Compose Live Monitor Plugin',
    type: 'plugin',
    category: 'workflow-automation',
    description: 'Real-time container health monitor, service topology visualizer, and log stream plugin for Docker Compose stacks.',
    installs: 1040,
    verified: true,
    version: '1.4.0',
    tags: ['plugin', 'docker', 'docker-compose', 'containers'],
    triggers: ['docker compose plugin', 'monitor docker stack plugin', 'container log monitor'],
    samplePrompt: 'Install Docker Compose live monitor plugin to view real-time container health.',
    cliCommand: 'npx claude-code-templates@latest --plugin workflow-automation/plugin-docker-compose',
    author: 'Cloud Native Guild',
    dependencies: ['docker'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### Docker Compose Monitor Plugin
Provides real-time container status insight.

- **Live Logs**: Aggregates stdout streams across multi-container services.
- **Health Checks**: Highlights failing health check probes instantly.`
  },
  {
    id: 'plugin-owasp-dependency',
    slug: 'security/plugin-owasp-dependency-checker',
    name: 'OWASP Dependency Vulnerability Auditor Plugin',
    type: 'plugin',
    category: 'security',
    description: 'Scans package.json dependencies against the National Vulnerability Database (NVD) in real time during editing.',
    installs: 990,
    verified: true,
    version: '1.8.0',
    tags: ['plugin', 'owasp', 'vulnerabilities', 'security'],
    triggers: ['owasp dependency plugin', 'check vulnerable packages plugin', 'security auditor plugin'],
    samplePrompt: 'Enable OWASP dependency auditor plugin to flag insecure npm packages.',
    cliCommand: 'npx claude-code-templates@latest --plugin security/plugin-owasp-dependency-checker',
    author: 'Security Research Lab',
    dependencies: ['npm-audit'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### OWASP Dependency Auditor Plugin
Monitors dependencies for security vulnerabilities.

- **Real-Time Scanning**: Checks imported npm/pip packages against known CVE registries.
- **Automated Alerts**: Flags high-severity vulnerabilities before deployment.`
  },
  {
    id: 'plugin-gemini-devtools',
    slug: 'ai-research/plugin-gemini-devtools',
    name: 'Gemini 2.0 DevTools & Token Visualizer Plugin',
    type: 'plugin',
    category: 'ai-research',
    description: 'Interactive DevTools plugin rendering multimodal token streams, safety threshold badges, and Google Search grounding URLs in real-time.',
    installs: 2210,
    verified: true,
    featured: true,
    version: '2.0.0',
    tags: ['plugin', 'gemini', 'devtools', 'token-visualizer', 'grounding'],
    triggers: ['gemini devtools plugin', 'visualize gemini tokens', 'gemini 2.0 debugger'],
    samplePrompt: 'Enable Gemini DevTools plugin to visualize streaming multimodal token output.',
    cliCommand: 'gemini-cli plugin enable ai-research/plugin-gemini-devtools',
    author: 'Google AI Ecosystem',
    dependencies: ['@google/genai'],
    compatibility: ['Gemini 2.0 Flash', 'Gemini 2.0 Pro'],
    fullInstructions: `### Gemini DevTools Plugin Specification
Provides live streaming token inspect panels and grounding attribution graphs.`
  },
  {
    id: 'plugin-openai-cost-estimator',
    slug: 'productivity/plugin-openai-cost-estimator',
    name: 'OpenAI Token & Cost Optimizer Plugin',
    type: 'plugin',
    category: 'productivity',
    description: 'Tracks input/output token costs across GPT-4o, o1, and o3-mini models with per-prompt cache hit rate monitoring.',
    installs: 1980,
    verified: true,
    featured: true,
    version: '1.7.0',
    tags: ['plugin', 'chatgpt', 'openai', 'cost-optimizer', 'tiktoken'],
    triggers: ['openai cost plugin', 'estimate gpt tokens', 'prompt cost optimizer'],
    samplePrompt: 'Install OpenAI cost estimator plugin to audit monthly API spend.',
    cliCommand: 'openai-cli plugin install productivity/plugin-openai-cost-estimator',
    author: 'OpenAI Developer Guild',
    dependencies: ['tiktoken'],
    compatibility: ['GPT-4o', 'o3-mini'],
    fullInstructions: `### OpenAI Cost Optimizer Plugin
Calculates live prompt cost based on active model pricing and prompt caching rate.`
  },
  {
    id: 'plugin-deepseek-proof-graph',
    slug: 'ai-research/plugin-deepseek-proof-graph',
    name: 'DeepSeek-R1 Mathematical Proof Visualizer Plugin',
    type: 'plugin',
    category: 'ai-research',
    description: 'Renders step-by-step mathematical proof trees and AST dependency logic graphs directly from DeepSeek-R1 reasoning tokens.',
    installs: 1840,
    verified: true,
    featured: true,
    version: '1.4.0',
    tags: ['plugin', 'deepseek', 'r1', 'proof-graph', 'math-visualization'],
    triggers: ['deepseek proof graph', 'visualize mathematical proof', 'deepseek ast tree'],
    samplePrompt: 'Render proof tree for algorithm complexity analysis with DeepSeek.',
    cliCommand: 'deepseek-cli plugin enable ai-research/plugin-deepseek-proof-graph',
    author: 'DeepSeek AI Lab',
    dependencies: ['mermaid', 'openai'],
    compatibility: ['DeepSeek-R1'],
    fullInstructions: `### DeepSeek Proof Visualizer Plugin
Generates interactive Mermaid proof flowcharts from reasoning tokens.`
  },
  {
    id: 'plugin-opencode-hot-reload',
    slug: 'development/plugin-opencode-hot-reload',
    name: 'OpenCode Zero-Latency Hot Reloader Plugin',
    type: 'plugin',
    category: 'development',
    description: 'Sub-millisecond file watching and fast compiler state updates for OpenCode containerized workspaces.',
    installs: 1620,
    verified: true,
    version: '2.1.0',
    tags: ['plugin', 'opencode', 'hot-reload', 'watcher', 'fast-refresh'],
    triggers: ['opencode hot reload', 'fast refresh plugin', 'opencode watcher'],
    samplePrompt: 'Activate OpenCode hot reloader for rapid feedback during coding.',
    cliCommand: 'opencode plugin install development/plugin-opencode-hot-reload',
    author: 'OpenCode Foundation',
    dependencies: ['chokidar'],
    compatibility: ['OpenCode Core v2.0+'],
    fullInstructions: `### OpenCode Hot Reloader Plugin
Synchronizes filesystem changes directly into running sandbox runtimes.`
  }
];

// Topic seeds to procedurally generate rich, high-quality, realistic catalog entries
const SKILL_TOPICS: { name: string; slugPrefix: string; category: Category; tags: string[]; summary: string; triggers: string[] }[] = [
  { 
    name: 'GraphQL Schema Architect', 
    slugPrefix: 'development/graphql-schema', 
    category: 'development', 
    tags: ['graphql', 'apollo', 'api', 'schema', 'type-defs'],
    summary: 'Designs resilient GraphQL type definitions, resolver pipelines, N+1 DataLoader batching, and schema federation directives.',
    triggers: ['design graphql schema', 'graphql type definitions', 'setup apollo server', 'dataloader batching']
  },
  { 
    name: 'Rust High-Performance Core', 
    slugPrefix: 'development/rust-performance', 
    category: 'development', 
    tags: ['rust', 'wasm', 'systems', 'memory', 'concurrency'],
    summary: 'Zero-cost abstractions, memory-safe concurrency, WebAssembly compilation pipelines, and low-latency systems programming in Rust.',
    triggers: ['write rust module', 'compile rust to wasm', 'rust concurrency optimization', 'zero cost abstractions']
  },
  { 
    name: 'Python FastAPI Master', 
    slugPrefix: 'development/python-fastapi', 
    category: 'development', 
    tags: ['python', 'fastapi', 'asyncio', 'pydantic', 'rest-api'],
    summary: 'High-speed asynchronous REST APIs with Pydantic v2 data validation, dependency injection, OAuth2 JWT auth, and OpenAPI generation.',
    triggers: ['create fastapi endpoint', 'pydantic v2 validation', 'async python router', 'fastapi dependency injection']
  },
  { 
    name: 'Go Microservices Engine', 
    slugPrefix: 'development/go-microservices', 
    category: 'development', 
    tags: ['golang', 'concurrency', 'grpc', 'microservices', 'goroutines'],
    summary: 'Lightweight gRPC and REST microservices in Golang with graceful shutdowns, channel-based concurrency, and structured zap logging.',
    triggers: ['build go microservice', 'golang grpc server', 'goroutine worker pool', 'golang channel concurrency']
  },
  { 
    name: 'Kubernetes Helm Deployment', 
    slugPrefix: 'workflow-automation/k8s-helm', 
    category: 'workflow-automation', 
    tags: ['kubernetes', 'helm', 'cloud', 'devops', 'manifests'],
    summary: 'Cloud-native Kubernetes Helm charts with resource quotas, horizontal pod autoscaling (HPA), ingress routing, and rollout strategies.',
    triggers: ['create helm chart', 'kubernetes deployment yaml', 'configure pod autoscaler', 'k8s ingress setup']
  },
  { 
    name: 'Cloudflare Workers Edge', 
    slugPrefix: 'web-development/cloudflare-workers', 
    category: 'web-development', 
    tags: ['edge', 'serverless', 'workers', 'kv', 'd1-database'],
    summary: 'Sub-millisecond global edge computing using Cloudflare Workers, KV caching, Durable Objects, and D1 serverless SQL.',
    triggers: ['deploy cloudflare worker', 'cloudflare kv storage', 'edge function router', 'durable objects state']
  },
  { 
    name: 'Drizzle ORM Turbo', 
    slugPrefix: 'database/drizzle-orm-turbo', 
    category: 'database', 
    tags: ['drizzle', 'sql', 'typescript', 'postgres', 'migrations'],
    summary: 'Type-safe SQL schema definitions, automated migration scripts, relation queries, and zero-overhead PostgreSQL database operations.',
    triggers: ['drizzle schema design', 'generate drizzle migration', 'drizzle relational query', 'drizzle typescript orm']
  },
  { 
    name: 'NextJS 15 App Router', 
    slugPrefix: 'web-development/nextjs-15-router', 
    category: 'web-development', 
    tags: ['nextjs', 'react-19', 'ssr', 'app-router', 'server-actions'],
    summary: 'React 19 Server Components, Server Actions with optimistic updates, parallel routes, and incremental static regeneration (ISR).',
    triggers: ['nextjs 15 app router', 'react server action', 'nextjs parallel routes', 'isr revalidation']
  },
  { 
    name: 'Astro Content Collections', 
    slugPrefix: 'web-development/astro-content', 
    category: 'web-development', 
    tags: ['astro', 'ssg', 'performance', 'markdown', 'zero-js'],
    summary: 'Zero-JS static site generation with Astro Content Collections, strict Zod schema validation, and multi-framework component islands.',
    triggers: ['astro content collection', 'astro island component', 'static site generation astro', 'zod schema astro']
  },
  { 
    name: 'Svelte 5 Runes Wizard', 
    slugPrefix: 'web-development/svelte-5-runes', 
    category: 'web-development', 
    tags: ['svelte', 'runes', 'reactivity', 'frontend', 'sveltekit'],
    summary: 'Fine-grained universal reactivity with Svelte 5 runes ($state, $derived, $effect), snippet templates, and SvelteKit server endpoints.',
    triggers: ['svelte 5 runes', 'svelte state reactivity', 'sveltekit server route', 'svelte snippet template']
  },
  { 
    name: 'Vue 3 Composition Pro', 
    slugPrefix: 'web-development/vue-3-composition', 
    category: 'web-development', 
    tags: ['vue', 'pinia', 'vite', 'typescript', 'composables'],
    summary: 'Modular Vue 3 architecture using Script Setup, custom composables, Pinia state stores, and typed props/emits validation.',
    triggers: ['vue 3 script setup', 'custom vue composable', 'pinia store setup', 'vue typescript props']
  },
  { 
    name: 'LangChain Agent Chains', 
    slugPrefix: 'ai-research/langchain-chains', 
    category: 'ai-research', 
    tags: ['langchain', 'llm', 'agents', 'vector', 'tool-calling'],
    summary: 'Multi-agent orchestration, LCEL runnable pipelines, persistent conversation memory, and automated tool-calling workflows.',
    triggers: ['build langchain agent', 'lcel runnable pipeline', 'langchain tool calling', 'langchain conversation memory']
  },
  { 
    name: 'LlamaIndex RAG Pipeline', 
    slugPrefix: 'ai-research/llamaindex-rag', 
    category: 'ai-research', 
    tags: ['rag', 'embeddings', 'vector-db', 'search', 'retrieval'],
    summary: 'Enterprise document chunking, semantic vector indexing, hybrid BM25 search retrieval, and cross-encoder re-ranking pipelines.',
    triggers: ['setup llamaindex rag', 'hybrid search vector retrieval', 'document chunking strategy', 'reranker pipeline']
  },
  { 
    name: 'Stripe Billing Webhooks', 
    slugPrefix: 'business-marketing/stripe-billing', 
    category: 'business-marketing', 
    tags: ['stripe', 'payments', 'subscriptions', 'webhooks', 'checkout'],
    summary: 'Resilient Stripe Checkout sessions, multi-tier subscription lifecycle handling, idempotent webhook signatures, and customer portal setup.',
    triggers: ['setup stripe webhook', 'stripe subscription billing', 'verify stripe signature', 'stripe customer portal']
  },
  { 
    name: 'Auth0 JWT Guardian', 
    slugPrefix: 'security/auth0-jwt-guardian', 
    category: 'security', 
    tags: ['auth0', 'oauth', 'jwt', 'security', 'rbac'],
    summary: 'Cryptographic RS256 token verification, JWKS key rotation handling, role-based access control (RBAC), and refresh token exchange.',
    triggers: ['verify auth0 jwt', 'jwks token validation', 'auth0 rbac guard', 'oauth refresh token flow']
  },
  { 
    name: 'OAuth2 Multi-Provider Flow', 
    slugPrefix: 'security/oauth2-multi-provider', 
    category: 'security', 
    tags: ['oauth2', 'google', 'github', 'auth', 'pkce'],
    summary: 'Secure authorization code grant with PKCE for Google, GitHub, and Discord authentication with encrypted session cookies.',
    triggers: ['oauth2 pkce login', 'google oauth integration', 'github oauth flow', 'oauth state verification']
  },
  { 
    name: 'Playwright E2E Master', 
    slugPrefix: 'development/playwright-e2e', 
    category: 'development', 
    tags: ['playwright', 'e2e', 'automation', 'testing', 'ci'],
    summary: 'Multi-browser automated end-to-end test suites with visual regression snapshots, network mocking, and parallel CI execution.',
    triggers: ['write playwright e2e', 'playwright visual snapshot', 'mock api playwright', 'playwright fixture test']
  },
  { 
    name: 'Cypress Component Testing', 
    slugPrefix: 'development/cypress-testing', 
    category: 'development', 
    tags: ['cypress', 'testing', 'qa', 'browser', 'components'],
    summary: 'Isolated component mounting, viewport responsiveness verification, accessibility auditing with axe-core, and CI test reporting.',
    triggers: ['cypress component test', 'cypress mount react', 'cypress axe accessibility', 'cypress stub intercept']
  },
  { 
    name: 'AWS CDK Infrastructure', 
    slugPrefix: 'workflow-automation/aws-cdk', 
    category: 'workflow-automation', 
    tags: ['aws', 'cdk', 'iac', 'cloudformation', 'serverless'],
    summary: 'Infrastructure as Code (IaC) in TypeScript with AWS Lambda, API Gateway, DynamoDB, S3 bucket encryption, and CloudFront distributions.',
    triggers: ['aws cdk stack', 'deploy lambda cdk', 'cdk dynamodb table', 'cdk cloudfront distribution']
  },
  { 
    name: 'GCP Cloud Run Deployer', 
    slugPrefix: 'workflow-automation/gcp-cloud-run', 
    category: 'workflow-automation', 
    tags: ['gcp', 'cloud-run', 'docker', 'serverless', 'artifact-registry'],
    summary: 'Containerized serverless deployment on Google Cloud Run with Artifact Registry integration, secret manager binding, and custom domains.',
    triggers: ['deploy to cloud run', 'gcp cloud build', 'cloud run secret mounting', 'artifact registry push']
  },
  { 
    name: 'WCAG 2.2 Accessibility Pro', 
    slugPrefix: 'creative-design/wcag-accessibility', 
    category: 'creative-design', 
    tags: ['a11y', 'wcag', 'screen-readers', 'aria', 'color-contrast'],
    summary: 'WCAG 2.2 Level AAA compliance auditing, ARIA live regions, focus trap loops for modals, and minimum 4.5:1 color contrast verification.',
    triggers: ['audit wcag accessibility', 'fix aria attributes', 'modal focus trap', 'color contrast a11y']
  },
  { 
    name: 'Memory Leak Hunter', 
    slugPrefix: 'development/memory-leak-hunter', 
    category: 'development', 
    tags: ['v8', 'profiling', 'garbage-collection', 'node', 'heap-snapshot'],
    summary: 'V8 heap snapshot analysis, unclosed stream detection, EventListener leak remediation, and Node.js process memory profiling.',
    triggers: ['find memory leak', 'analyze heap snapshot', 'v8 memory profiling', 'event listener cleanup']
  },
  { 
    name: 'SQL Query Optimizer', 
    slugPrefix: 'database/sql-optimizer', 
    category: 'database', 
    tags: ['sql', 'indexes', 'explain-analyze', 'postgres', 'performance'],
    summary: 'EXPLAIN (ANALYZE, BUFFERS) query plan optimization, composite B-tree & BRIN indexing, CTE refactoring, and connection pooling tuning.',
    triggers: ['optimize sql query', 'explain analyze query', 'add postgres index', 'refactor slow join']
  },
  { 
    name: 'Regex Wizardry & Parsers', 
    slugPrefix: 'productivity/regex-wizardry', 
    category: 'productivity', 
    tags: ['regex', 'ast', 'parsing', 'tokens', 'compiler'],
    summary: 'Safe catastrophic-backtracking-free regular expressions, Lexer/Tokenizer state machines, and AST parsing utilities.',
    triggers: ['write regex pattern', 'safe regular expression', 'parse custom syntax', 'regex without backtracking']
  },
  { 
    name: 'Redis Cache & PubSub', 
    slugPrefix: 'database/redis-cache-pubsub', 
    category: 'database', 
    tags: ['redis', 'caching', 'pubsub', 'rate-limit', 'distributed-locks'],
    summary: 'High-throughput Redis cache-aside patterns, Redlock distributed locking, token-bucket rate limiting, and Pub/Sub event broadcasting.',
    triggers: ['setup redis caching', 'redis rate limiter', 'distributed redlock', 'redis pubsub broadcast']
  },
  { 
    name: 'Kafka Event Streamer', 
    slugPrefix: 'development/kafka-event-streamer', 
    category: 'development', 
    tags: ['kafka', 'streaming', 'events', 'pubsub', 'concurrency'],
    summary: 'Partition-key ordered event publishing, consumer group rebalance handlers, dead-letter queues (DLQ), and Avro schema registries.',
    triggers: ['kafka event producer', 'kafka consumer group', 'setup dead letter queue', 'avro schema registry']
  },
  { 
    name: 'Supabase Row Level Security', 
    slugPrefix: 'database/supabase-rls-pro', 
    category: 'database', 
    tags: ['supabase', 'rls', 'postgres', 'policies', 'security'],
    summary: 'Zero-trust PostgreSQL Row Level Security (RLS) policies with auth.uid() checks, tenancy isolation, and real-time subscription filters.',
    triggers: ['create supabase rls policy', 'secure postgres rls', 'supabase tenant policy', 'supabase auth uid check']
  },
  { 
    name: 'Elasticsearch Search Engine', 
    slugPrefix: 'database/elasticsearch-master', 
    category: 'database', 
    tags: ['elasticsearch', 'fulltext', 'search', 'aggregations', 'mappings'],
    summary: 'Custom analyzers, edge n-gram tokenizers, multi-match fuzzy full-text queries, nested aggregations, and index lifecycle policies.',
    triggers: ['setup elasticsearch index', 'full text search query', 'ngram custom analyzer', 'elasticsearch aggregations']
  },
  { 
    name: 'Figma Token Sync', 
    slugPrefix: 'creative-design/figma-token-sync', 
    category: 'creative-design', 
    tags: ['figma', 'design-tokens', 'tokens-studio', 'css', 'tailwind'],
    summary: 'Automated extraction of Figma variables into CSS custom properties, Tailwind theme extensions, and style dictionary formats.',
    triggers: ['sync figma tokens', 'export design tokens', 'figma to tailwind theme', 'style dictionary tokens']
  },
  { 
    name: 'Turborepo Monorepo Wizard', 
    slugPrefix: 'development/turborepo-monorepo', 
    category: 'development', 
    tags: ['turborepo', 'monorepo', 'caching', 'pnpm', 'workspaces'],
    summary: 'High-efficiency Turborepo pipelines with remote computation caching, pnpm workspaces, shared UI packages, and zero-drift build graphs.',
    triggers: ['setup turborepo', 'pnpm workspace config', 'turbo pipeline caching', 'shared ui package monorepo']
  },
  { 
    name: 'OpenAPI Spec Generator', 
    slugPrefix: 'development/openapi-spec-generator', 
    category: 'development', 
    tags: ['openapi', 'swagger', 'documentation', 'api', 'types'],
    summary: 'Generates OpenAPI 3.1 specifications directly from TypeScript types and Zod schemas with Swagger UI interactive sandboxes.',
    triggers: ['generate openapi spec', 'swagger documentation', 'zod to openapi', 'api schema docs']
  },
  { 
    name: 'PWA Offline Sync Service', 
    slugPrefix: 'web-development/pwa-offline-sync', 
    category: 'web-development', 
    tags: ['pwa', 'service-worker', 'indexeddb', 'offline', 'workbox'],
    summary: 'Progressive Web App Workbox service worker caching strategies, IndexedDB local mutation queues, and background sync engines.',
    triggers: ['setup pwa service worker', 'offline indexeddb sync', 'workbox caching strategy', 'background sync api']
  },
  { 
    name: 'Micro-Frontend Module Federation', 
    slugPrefix: 'web-development/micro-frontends', 
    category: 'web-development', 
    tags: ['module-federation', 'webpack', 'vite', 'micro-apps', 'host-remote'],
    summary: 'Dynamic Module Federation architecture connecting decoupled React/Vue host and remote containers with shared singleton dependencies.',
    triggers: ['setup module federation', 'micro frontend architecture', 'vite remote container', 'share singleton dependencies']
  },
  { 
    name: 'Data Visualization D3', 
    slugPrefix: 'creative-design/data-viz-d3', 
    category: 'creative-design', 
    tags: ['d3', 'svg', 'charts', 'data-viz', 'animations'],
    summary: 'Custom interactive D3.js SVG visualizations, smooth scale transformations, zoomable tree hierarchies, and responsive charts.',
    triggers: ['build d3 chart', 'd3 svg visualization', 'interactive d3 hierarchy', 'd3 responsive scales']
  },
  { 
    name: 'Tailwind v4 Variable Themes', 
    slugPrefix: 'creative-design/tailwind-v4-themes', 
    category: 'creative-design', 
    tags: ['tailwind', 'css-vars', 'theming', 'colors', 'modern-css'],
    summary: 'Modern @import "tailwindcss" configuration using pure CSS variables, oklch() color spaces, dynamic contrast ratios, and theme switching.',
    triggers: ['tailwind v4 theme', 'oklch color palette', 'css variables theme', 'tailwind dynamic theme']
  },
  { 
    name: 'Sentry Performance Tracing', 
    slugPrefix: 'sentry/sentry-performance-tracing', 
    category: 'sentry', 
    tags: ['sentry', 'apm', 'latency', 'tracing', 'profiling'],
    summary: 'Distributed transaction tracing across frontend routes and backend queries, database span instrumentation, and custom user metric logging.',
    triggers: ['setup sentry tracing', 'track performance span', 'sentry apm config', 'instrument database query']
  },
  { 
    name: 'Semantic Versioning Bot', 
    slugPrefix: 'workflow-automation/semantic-versioning', 
    category: 'workflow-automation', 
    tags: ['semver', 'git-tags', 'release', 'changelog', 'github-actions'],
    summary: 'Analyzes Conventional Commits to automatically calculate the next SemVer increment (patch/minor/major), generate CHANGELOG.md, and push tags.',
    triggers: ['calculate semver version', 'generate changelog md', 'semantic release bot', 'auto git tag release']
  },
  { 
    name: 'Markdown Book & Docs Publisher', 
    slugPrefix: 'document-processing/markdown-publisher', 
    category: 'document-processing', 
    tags: ['markdown', 'docs', 'docusaurus', 'content', 'frontmatter'],
    summary: 'Automated documentation compilation with syntax-highlighted code blocks, table-of-contents extraction, and cross-link validation.',
    triggers: ['compile markdown docs', 'generate table of contents', 'validate markdown links', 'format documentation frontmatter']
  },
  { 
    name: 'CSV to SQL Fast Importer', 
    slugPrefix: 'document-processing/csv-sql-importer', 
    category: 'document-processing', 
    tags: ['csv', 'sql', 'etl', 'data-pipeline', 'stream'],
    summary: 'Streaming high-volume CSV parsing with automatic data type inference, batch COPY operations into PostgreSQL, and malformed row quarantining.',
    triggers: ['import csv to sql', 'stream parse csv', 'bulk insert postgres copy', 'csv data type inference']
  },
  { 
    name: 'JSON Schema Validator Pro', 
    slugPrefix: 'productivity/json-schema-validator', 
    category: 'productivity', 
    tags: ['json-schema', 'zod', 'validation', 'types', 'ajv'],
    summary: 'Draft 2020-12 JSON Schema validation, fast Ajv compilation, dynamic Zod type inference, and detailed validation error reports.',
    triggers: ['validate json schema', 'zod schema validator', 'ajv json validator', 'json schema draft 2020']
  }
];

/**
 * Procedural Generator that generates the exact required total components:
 * Skills: 872
 * Agents: 422
 * Commands: 286
 * Settings: 71
 * Hooks: 62
 * MCPs: 101
 * Plugins: 34
 * Total = 1,848 items!
 */
export function generateFullCatalog(): ComponentItem[] {
  const result: ComponentItem[] = [];

  // Helper to add unique
  const existingIds = new Set<string>();
  const pushUnique = (rawItem: ComponentItem) => {
    if (!existingIds.has(rawItem.id)) {
      existingIds.add(rawItem.id);

      const author = rawItem.author || (rawItem.verified ? 'Anthropic / Verified Publisher' : 'Claude Ecosystem Contributor');
      const dependencies = rawItem.dependencies && rawItem.dependencies.length > 0 
        ? rawItem.dependencies 
        : [(rawItem.tags && rawItem.tags[0]) || 'typescript', 'claude-code-cli'];
      const compatibility = rawItem.compatibility && rawItem.compatibility.length > 0 
        ? rawItem.compatibility 
        : ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'];

      result.push({
        ...rawItem,
        author,
        dependencies,
        compatibility
      });
    }
  };

  // 1. Add flagship curated items
  TOP_CURATED_COMPONENTS.forEach(pushUnique);
  TOP_CURATED_AGENTS.forEach(pushUnique);
  TOP_CURATED_COMMANDS.forEach(pushUnique);
  TOP_CURATED_SETTINGS.forEach(pushUnique);
  TOP_CURATED_HOOKS.forEach(pushUnique);
  TOP_CURATED_MCPS.forEach(pushUnique);
  TOP_CURATED_PLUGINS.forEach(pushUnique);

  // Target counts
  const TARGET_COUNTS = {
    skill: 872,
    agent: 422,
    command: 286,
    setting: 71,
    hook: 62,
    mcp: 101,
    plugin: 34
  };

  // Generator loop for each type
  const types: ComponentType[] = ['skill', 'agent', 'command', 'setting', 'hook', 'mcp', 'plugin'];

  for (const type of types) {
    const currentCount = result.filter(r => r.type === type).length;
    const needed = TARGET_COUNTS[type] - currentCount;

    for (let i = 1; i <= needed; i++) {
      const topicIndex = (i - 1) % SKILL_TOPICS.length;
      const topic = SKILL_TOPICS[topicIndex];
      const cycle = Math.floor((i - 1) / SKILL_TOPICS.length) + 1;
      
      const variantSuffix = cycle > 1 ? ` (${topic.tags[i % topic.tags.length]} Edition)` : '';
      const slugSuffix = cycle > 1 ? `-${cycle}-${i}` : `-${i}`;

      let name = '';
      let slug = '';
      let category = topic.category;
      let description = '';
      let tags = [...topic.tags];
      let triggers: string[] = [];
      let samplePrompt = '';
      let fullInstructions = '';

      switch (type) {
        case 'skill':
          name = `${topic.name}${variantSuffix}`;
          slug = `${topic.slugPrefix}${slugSuffix}`;
          description = topic.summary;
          triggers = [
            ...topic.triggers,
            `apply ${topic.name.toLowerCase()} rules`,
            `execute ${slug.split('/')[1]}`
          ];
          samplePrompt = `Apply ${topic.name} patterns to optimize and refactor this codebase.`;
          fullInstructions = `### Description & Core Capabilities\n${topic.summary}\n\n### Execution Protocol\n1. Inspect existing project structure and identify target modules.\n2. Apply idiomatic ${topic.tags.join(', ')} patterns with strict type safety.\n3. Validate all inputs, edge cases, and ensure zero regressions.\n4. Run automated verification and format compliance checks.`;
          break;

        case 'agent':
          name = `Autonomous ${topic.name} Agent${variantSuffix}`;
          slug = `${topic.slugPrefix}-agent${slugSuffix}`;
          description = `Autonomous multi-step sub-agent engineered to orchestrate ${topic.name} workflows, automated verification, and CI/CD rollouts.`;
          triggers = [
            `run autonomous ${topic.name.toLowerCase()} agent`,
            `spawn ${topic.tags[0]} subagent`,
            `delegate to ${slug.split('/')[1]}`
          ];
          samplePrompt = `Autonomously inspect, test, and implement ${topic.name} features across all matching files.`;
          fullInstructions = `### Autonomous Agent Workflow\n- Step 1: Autonomous task decomposition & dependency resolution.\n- Step 2: Parallel execution of ${topic.tags.slice(0, 3).join(', ')} tasks.\n- Step 3: Self-healing error correction loop (max 3 retry passes).\n- Step 4: Final verification and structured changelog summary.`;
          break;

        case 'command':
          const rawCmd = topic.tags[0].toLowerCase().replace(/[^a-z0-9]/g, '-');
          name = `/${rawCmd}${cycle > 1 ? `-${cycle}` : ''}${i > 40 ? `-${i % 20}` : ''}`;
          slug = `workflow-automation/cmd-${rawCmd}${slugSuffix}`;
          category = 'workflow-automation';
          description = `Quick slash command shortcut to trigger ${topic.name} validation, formatting, or execution in Claude Code.`;
          triggers = [name, `run ${name}`, `trigger ${name}`];
          samplePrompt = `${name} --target src/`;
          fullInstructions = `### Slash Command Specification\nExecutes automated ${topic.name} pipeline directly from Claude Code interactive CLI.\n\n### Syntax\n\`${name} [flags]\`\n\n### Flags\n- \`--strict\`: Enforce zero-warning validation.\n- \`--dry-run\`: Preview changes without writing to disk.`;
          break;

        case 'setting':
          name = `${topic.name} Workspace Preference${variantSuffix}`;
          slug = `productivity/setting-${topic.tags[0]}${slugSuffix}`;
          category = 'productivity';
          description = `Claude Code workspace preference rule configuring ${topic.name} behavior and compiler limits.`;
          triggers = [`enable ${topic.tags[0]} setting`, `configure ${name.toLowerCase()}`];
          samplePrompt = `Configure workspace settings to enforce ${topic.name} standards.`;
          fullInstructions = `### Workspace Setting Schema\nDefines project-level preferences in \`.clauderc.json\`:\n\`\`\`json\n{\n  "${topic.tags[0]}": {\n    "enabled": true,\n    "strictMode": true,\n    "logLevel": "info"\n  }\n}\n\`\`\``;
          break;

        case 'hook':
          name = `on-${topic.tags[0]}-${cycle > 1 ? `v${cycle}-` : ''}event Hook`;
          slug = `productivity/hook-${topic.tags[0]}${slugSuffix}`;
          category = 'productivity';
          description = `Lifecycle event hook intercepting Claude Code tool operations for ${topic.name}.`;
          triggers = [`hook ${name}`, `intercept ${topic.tags[0]} lifecycle`];
          samplePrompt = `Register lifecycle hook to intercept tool calls for ${topic.name}.`;
          fullInstructions = `### Lifecycle Hook Interceptor\nIntercepts tool calls during ${topic.name} execution:\n- **Event Target**: \`${topic.tags[0]}:execute\`\n- **Action**: Pre-execution parameter validation & sandbox compliance verification.`;
          break;

        case 'mcp':
          name = `${topic.name} Model Context Protocol (MCP)`;
          slug = `database/${topic.tags[0]}-mcp${slugSuffix}`;
          category = topic.category === 'database' || topic.category === 'sentry' ? topic.category : 'workflow-automation';
          description = `Model Context Protocol connector server providing live tools and resource schemas for ${topic.name}.`;
          triggers = [`query ${topic.tags[0]} mcp`, `use ${topic.name.toLowerCase()} tool`, `call ${topic.tags[0]} mcp`];
          samplePrompt = `Use the ${topic.name} MCP server to execute operations against the live service.`;
          fullInstructions = `### Model Context Protocol (MCP) Server\nExposes live tools and resources to Claude Code:\n- **Server**: \`@modelcontextprotocol/server-${topic.tags[0]}\`\n- **Capabilities**: Structured tools, dynamic resources, and interactive prompt templates.`;
          break;

        case 'plugin':
          name = `${topic.name} Companion Plugin${variantSuffix}`;
          slug = `development/plugin-${topic.tags[0]}${slugSuffix}`;
          category = 'development';
          description = `Claude Code ecosystem extension plugin adding real-time syntax checking and tooling for ${topic.name}.`;
          triggers = [`install ${topic.tags[0]} plugin`, `enable ${name.toLowerCase()}`];
          samplePrompt = `Install and activate the ${topic.name} companion plugin.`;
          fullInstructions = `### Extension Plugin Specification\nExtends Claude Code CLI with real-time linting, syntax completion, and AST diagnostic utilities for ${topic.name}.`;
          break;
      }

      const calculatedInstalls = Math.max(150, Math.floor(2800 / (cycle * 1.3 + (i % 25) * 0.25)));

      pushUnique({
        id: `${type}-${slug.replace(/[^a-zA-Z0-9]/g, '-')}`,
        slug: slug,
        name: name,
        type: type,
        category: category,
        description: description,
        fullInstructions: fullInstructions,
        samplePrompt: samplePrompt,
        installs: calculatedInstalls,
        verified: (i % 3 === 0),
        featured: (i % 17 === 0),
        version: `1.${cycle}.${(i % 9) + 1}`,
        tags: tags,
        triggers: triggers,
        cliCommand: `npx claude-code-templates@latest --${type} ${slug}`,
        dependencies: [tags[0] || 'typescript', 'claude-code-cli'],
        compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+']
      });
    }
  }

  return result;
}

