import { ComponentItem, ComponentType, Category } from '../types';
import { generateDefaultSkillDirectory } from '../utils/formatGenerators';

// ─────────────────────────────────────────────────────────────
// SKILLS – 872 total  (25 curated flagship + remainder generated)
// ─────────────────────────────────────────────────────────────
export const TOP_CURATED_COMPONENTS: ComponentItem[] = [
  {
    id: 'skill-frontend-design',
    slug: 'creative-design/frontend-design',
    name: 'Frontend Design System',
    type: 'skill',
    category: 'creative-design',
    description: 'Generates modern, production-grade UI design systems, responsive layouts, semantic color palettes, and accessible component architectures with Tailwind CSS v4.',
    installs: 3564,
    verified: true,
    featured: true,
    version: '2.4.0',
    author: 'Anthropic / Claude Ecosystem',
    tags: ['design-system', 'tailwind', 'ui-ux', 'responsive', 'accessibility'],
    triggers: ['design frontend', 'create ui layout', 'style this component', 'frontend design system', 'tailwind theme'],
    samplePrompt: 'Design a clean, high-contrast dashboard layout with a dark theme and Tailwind CSS.',
    cliCommand: 'npx claude-code-templates@latest --skill creative-design/frontend-design',
    dependencies: ['tailwindcss', 'lucide-react', 'clsx'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### Frontend Design System Skill
Generates complete, tokenized design systems for web applications.

**Core Capabilities:**
- Semantic Tailwind CSS v4 color palettes with dark/light variants
- Responsive grid and flex layout scaffolding
- WCAG AA accessible component patterns
- Animation and micro-interaction utilities

**Usage:**
\`\`\`
Apply the frontend design skill to redesign this dashboard with modern card layouts, 
proper spacing, and a clear visual hierarchy.
\`\`\`

**Output Includes:**
- \`tailwind.config.ts\` with full custom design tokens
- Reusable component primitives (Button, Card, Input, Badge)
- Responsive breakpoint matrix`
  },
  {
    id: 'skill-code-reviewer',
    slug: 'development/code-reviewer',
    name: 'Code Reviewer Pro',
    type: 'skill',
    category: 'development',
    description: 'Performs comprehensive, automated multi-pass code reviews evaluating architecture patterns, edge cases, type safety, performance hotspots, and anti-slop guidelines.',
    installs: 2444,
    verified: true,
    featured: true,
    version: '3.1.2',
    author: 'Anthropic / Claude Ecosystem',
    tags: ['code-review', 'best-practices', 'clean-code', 'type-safety', 'refactor'],
    triggers: ['review my code', 'check this PR', 'code review', 'audit my pull request', 'find bugs in diff'],
    samplePrompt: 'Please review this pull request diff and flag potential race conditions or memory leaks.',
    cliCommand: 'npx claude-code-templates@latest --skill development/code-reviewer',
    dependencies: ['typescript', 'eslint'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### Code Reviewer Pro Skill

**Review Passes:**
1. **Architecture Pass** – Checks for SOLID violations, God Objects, and improper dependency directions
2. **Security Pass** – OWASP Top 10, secret exposure, SQL injection, XSS vectors
3. **Performance Pass** – N+1 queries, memory leaks, unnecessary re-renders, blocking I/O
4. **Type Safety Pass** – TypeScript strictness, unsafe casts, missing null checks
5. **Readability Pass** – Naming conventions, cognitive complexity, missing documentation

**Output Format:**
\`\`\`
🔴 Critical: [issue] in [file:line]
🟡 Warning: [issue]
🟢 Suggestion: [improvement]
\`\`\``
  },
  {
    id: 'skill-senior-frontend',
    slug: 'web-development/senior-frontend',
    name: 'Senior Frontend Engineer',
    type: 'skill',
    category: 'web-development',
    description: 'Expert-level frontend development for modern React 19, Next.js 15, and TypeScript applications with optimal state management, bundle efficiency, and hydration strategies.',
    installs: 2232,
    verified: true,
    featured: true,
    version: '2.8.0',
    author: 'Anthropic / Claude Ecosystem',
    tags: ['react', 'nextjs', 'typescript', 'state-management', 'performance'],
    triggers: ['senior frontend architecture', 'optimize react component', 'nextjs app structure', 'frontend best practices'],
    samplePrompt: 'Refactor this React state tree using modern reducer patterns and memoized selectors.',
    cliCommand: 'npx claude-code-templates@latest --skill web-development/senior-frontend',
    dependencies: ['react', 'react-dom', 'typescript'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### Senior Frontend Engineer Skill

**Expertise Areas:**
- React 19 Server Components & Server Actions
- Next.js 15 App Router with parallel routes and intercepting routes
- Zustand / Jotai / TanStack Query state orchestration
- Bundle splitting, lazy loading, and Core Web Vitals optimization
- Storybook-driven component development

**Architecture Principles:**
- Feature-sliced design (FSD) folder structure
- Compound component patterns for complex UI
- Error boundary hierarchies with Suspense streaming
- Type-safe form handling with React Hook Form + Zod`
  },
  {
    id: 'skill-senior-backend',
    slug: 'development/senior-backend',
    name: 'Senior Backend Architect',
    type: 'skill',
    category: 'development',
    description: 'Senior backend architect instructions for designing scalable REST/GraphQL APIs, resilient database models, multi-tier caching strategies, and secure authentication flows.',
    installs: 1946,
    verified: true,
    featured: true,
    version: '2.5.1',
    author: 'Anthropic / Claude Ecosystem',
    tags: ['backend', 'api-design', 'databases', 'postgres', 'microservices'],
    triggers: ['design backend api', 'senior backend architecture', 'database schema design', 'express api handler'],
    samplePrompt: 'Design a resilient PostgreSQL schema and Express router for multi-tenant billing.',
    cliCommand: 'npx claude-code-templates@latest --skill development/senior-backend',
    dependencies: ['express', 'pg', 'zod'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### Senior Backend Architect Skill

**Core Competencies:**
- RESTful API design adhering to RFC 7231 and JSON:API spec
- GraphQL schema-first design with DataLoader batching
- Database connection pooling via PgBouncer
- Redis cache-aside pattern with TTL invalidation
- JWT RS256 authentication with refresh token rotation

**Code Standards:**
- Repository pattern separating data access from business logic
- Zod schema validation at all API boundaries
- Structured logging with Pino or Winston
- Graceful shutdown handlers for containerized deployments`
  },
  {
    id: 'skill-ui-ux-pro-max',
    slug: 'creative-design/ui-ux-pro-max',
    name: 'UI/UX Pro Max',
    type: 'skill',
    category: 'creative-design',
    description: 'Advanced design intelligence for crafting tactile micro-interactions, responsive typography hierarchies, zero-slop pixel-perfect layouts, and WCAG AAA compliant UIs.',
    installs: 1843,
    verified: true,
    featured: true,
    version: '2.1.0',
    author: 'Anthropic / Claude Ecosystem',
    tags: ['ui-ux', 'micro-interactions', 'typography', 'design-tokens', 'accessibility'],
    triggers: ['improve ui ux', 'make this design look professional', 'ui ux pro max', 'refine layout aesthetic'],
    samplePrompt: 'Upgrade this form layout with subtle micro-interactions, clear validation states, and refined typography.',
    cliCommand: 'npx claude-code-templates@latest --skill creative-design/ui-ux-pro-max',
    dependencies: ['lucide-react', 'tailwind-merge'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### UI/UX Pro Max Skill

**Design Philosophy:**
- Eliminate visual noise: every element must serve a purpose
- Minimum 4.5:1 contrast ratio (WCAG AA), target 7:1 (AAA)
- 8px grid system with 4px sub-grid for fine adjustments
- Progressive disclosure: reveal complexity only when needed

**Interaction Design:**
- 150–300ms transition duration for UI feedback
- Easing: ease-out for entrances, ease-in for exits
- Focus ring visible at all times (never outline: none without replacement)
- Touch targets: minimum 44×44px (Apple HIG) / 48×48dp (Material)`
  },
  {
    id: 'skill-senior-architect',
    slug: 'development/senior-architect',
    name: 'Senior System Architect',
    type: 'skill',
    category: 'development',
    description: 'High-level system design, domain-driven design (DDD), event-driven pipelines, microservice decoupling strategies, and cloud infrastructure blueprinting with ADR documentation.',
    installs: 1576,
    verified: true,
    version: '1.9.0',
    author: 'Anthropic / Claude Ecosystem',
    tags: ['system-design', 'cloud-architecture', 'domain-driven-design', 'scalability', 'adr'],
    triggers: ['system architecture review', 'design distributed system', 'senior architect blueprint', 'event driven design'],
    samplePrompt: 'Create a system design document for an event-driven notification service handling 100k events/sec.',
    cliCommand: 'npx claude-code-templates@latest --skill development/senior-architect',
    dependencies: ['mermaid', 'draw.io'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### Senior System Architect Skill

**Deliverables:**
- Architecture Decision Records (ADR) using MADR template
- C4 Model diagrams (Context → Container → Component → Code)
- API contract specifications (OpenAPI 3.1)
- Data flow diagrams and sequence diagrams in Mermaid syntax
- SLA/SLO definitions and error budget calculations

**Design Patterns:**
- CQRS + Event Sourcing for audit-critical domains
- Strangler Fig for legacy system migration
- Circuit Breaker with exponential backoff for resilience
- Saga pattern for distributed transaction management`
  },
  {
    id: 'skill-skill-creator',
    slug: 'productivity/skill-creator',
    name: 'Claude Skill Creator',
    type: 'skill',
    category: 'productivity',
    description: 'Automates generation of compliant Claude Code skills, producing standardized SKILL.md files with YAML frontmatter, deterministic trigger patterns, and validation CLI scripts.',
    installs: 1341,
    verified: true,
    version: '2.0.0',
    author: 'Anthropic / Claude Ecosystem',
    tags: ['meta-tooling', 'claude-code', 'skill-generator', 'automation', 'yaml'],
    triggers: ['create new skill', 'generate skill.md', 'scaffold claude code skill', 'build custom skill'],
    samplePrompt: 'Create a new Claude Code skill for automated Dockerfile security linting.',
    cliCommand: 'npx claude-code-templates@latest --skill productivity/skill-creator',
    dependencies: ['yaml', 'zod'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### Claude Skill Creator Skill

**Generated File Structure:**
\`\`\`
.claude/skills/<name>/
├── SKILL.md          # Main skill definition with YAML frontmatter
├── TEMPLATE.md       # Reusable prompt template
├── EXAMPLES.md       # Usage examples and test cases
└── validate.sh       # CLI validation script
\`\`\`

**SKILL.md YAML Frontmatter:**
\`\`\`yaml
---
name: my-skill
version: 1.0.0
description: "One-line description"
triggers:
  - "natural language trigger phrase"
author: "Your Name"
tags: [tag1, tag2]
---
\`\`\``
  },
  {
    id: 'skill-ui-design-system',
    slug: 'creative-design/ui-design-system',
    name: 'UI Design System Tokens',
    type: 'skill',
    category: 'creative-design',
    description: 'Comprehensive tokenized design system creation: semantic color variables using oklch(), typography scales, spacing units, elevation shadows, and dark mode matrices.',
    installs: 1303,
    verified: true,
    version: '1.8.4',
    author: 'Anthropic / Claude Ecosystem',
    tags: ['design-tokens', 'color-palette', 'typography', 'tailwind', 'css-variables'],
    triggers: ['build design system', 'define color tokens', 'create typography scale', 'css variables theme'],
    samplePrompt: 'Generate a semantic design token palette in Tailwind with light and dark mode contrasts.',
    cliCommand: 'npx claude-code-templates@latest --skill creative-design/ui-design-system',
    dependencies: ['tailwindcss'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### UI Design System Tokens Skill

**Token Categories:**
- **Color**: Primary, Secondary, Neutral, Semantic (success, warning, error, info)
- **Typography**: 9-step type scale (xs → 4xl), font stacks, line-height matrix
- **Spacing**: 4px base unit scale (0.5 → 96)
- **Elevation**: 5-level box-shadow system with blur/spread calculations
- **Radius**: Consistent border-radius scale (none → full)
- **Motion**: Standard duration and easing tokens

**Format Output:**
- \`tokens.css\` with CSS custom properties
- \`tailwind.config.ts\` theme extension
- Style Dictionary compatible JSON`
  },
  {
    id: 'skill-react-best-practices',
    slug: 'web-development/react-best-practices',
    name: 'React Best Practices Guide',
    type: 'skill',
    category: 'web-development',
    description: 'Enforces React 18/19 idiomatic patterns, hook stabilization, avoiding unnecessary re-renders, proper Suspense boundaries, and React Server Component integration.',
    installs: 1078,
    verified: true,
    version: '2.2.0',
    author: 'Anthropic / Claude Ecosystem',
    tags: ['react', 'hooks', 'performance', 'server-components', 'typescript'],
    triggers: ['react best practices', 'fix react re-renders', 'clean up useeffect', 'refactor react hook'],
    samplePrompt: 'Audit my React custom hook to prevent stale closures and infinite re-render loops.',
    cliCommand: 'npx claude-code-templates@latest --skill web-development/react-best-practices',
    dependencies: ['react', 'react-dom', 'typescript'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### React Best Practices Guide Skill

**Hook Rules Enforcement:**
- useCallback/useMemo dependency array correctness
- Custom hook extraction thresholds (>3 useState = extract)
- useEffect cleanup function requirements
- Ref vs. state decision matrix

**Performance Patterns:**
- React.memo with custom comparison functions
- Virtualization (TanStack Virtual) for lists >100 items
- Code splitting with React.lazy + Suspense
- Transition API for non-urgent state updates`
  },
  {
    id: 'skill-senior-fullstack',
    slug: 'web-development/senior-fullstack',
    name: 'Senior Fullstack Developer',
    type: 'skill',
    category: 'web-development',
    description: 'End-to-end fullstack orchestration combining React/TypeScript frontends with Node/Express backends, Drizzle/Prisma ORM data layers, and secure JWT auth flows.',
    installs: 912,
    verified: true,
    version: '1.6.0',
    author: 'Anthropic / Claude Ecosystem',
    tags: ['fullstack', 'react', 'nodejs', 'express', 'postgresql'],
    triggers: ['build fullstack feature', 'fullstack app template', 'connect client to server', 'senior fullstack flow'],
    samplePrompt: 'Build a fullstack CRUD feature connecting a React table to an Express API with PostgreSQL.',
    cliCommand: 'npx claude-code-templates@latest --skill web-development/senior-fullstack',
    dependencies: ['react', 'express', 'drizzle-orm', 'postgresql'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### Senior Fullstack Developer Skill

**Stack Blueprint:**
- **Frontend**: React 19 + TypeScript + TanStack Query + Zustand
- **Backend**: Express.js or Hono with Zod request validation
- **Database**: PostgreSQL via Drizzle ORM with typed schema
- **Auth**: JWT with httpOnly cookie refresh tokens
- **Testing**: Vitest (unit), Playwright (e2e), MSW (API mocking)

**Project Structure:**
\`\`\`
/apps
  /web     # React frontend
  /api     # Express backend
/packages
  /db      # Drizzle schema & migrations
  /shared  # Shared TypeScript types
\`\`\``
  },
  {
    id: 'skill-seo-optimizer',
    slug: 'business-marketing/seo-optimizer',
    name: 'Technical SEO Optimizer',
    type: 'skill',
    category: 'business-marketing',
    description: 'Technical SEO optimization: OpenGraph and JSON-LD schema.org metadata, XML sitemap generation, robots.txt directives, Core Web Vitals, and structured data validation.',
    installs: 809,
    verified: true,
    version: '1.4.0',
    author: 'Anthropic / Claude Ecosystem',
    tags: ['seo', 'meta-tags', 'open-graph', 'structured-data', 'schema-markup'],
    triggers: ['optimize seo', 'generate structured data', 'add opengraph tags', 'fix meta tags', 'seo audit'],
    samplePrompt: 'Generate complete JSON-LD schema markup and OpenGraph tags for a SaaS product page.',
    cliCommand: 'npx claude-code-templates@latest --skill business-marketing/seo-optimizer',
    dependencies: ['next-seo', 'schema-dts'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### Technical SEO Optimizer Skill

**SEO Checklist:**
- ✅ Title tags (50–60 chars), meta descriptions (150–160 chars)
- ✅ OpenGraph: og:title, og:description, og:image (1200×630), og:url
- ✅ JSON-LD: Article, Product, Organization, BreadcrumbList, FAQPage
- ✅ Canonical URLs to prevent duplicate content
- ✅ hreflang for multilingual pages
- ✅ robots.txt: allow/disallow rules, sitemap reference

**Core Web Vitals Targets:**
- LCP < 2.5s | FID < 100ms | CLS < 0.1`
  },
  {
    id: 'skill-webapp-testing',
    slug: 'development/webapp-testing',
    name: 'Webapp Testing Suite',
    type: 'skill',
    category: 'development',
    description: 'End-to-end and unit testing generator supporting Vitest, Jest, Playwright, and React Testing Library with MSW-mocked network APIs and coverage reporting.',
    installs: 806,
    verified: true,
    version: '2.1.0',
    author: 'Anthropic / Claude Ecosystem',
    tags: ['testing', 'vitest', 'playwright', 'e2e', 'unit-tests'],
    triggers: ['write unit tests', 'playwright test script', 'test this component', 'webapp testing suite'],
    samplePrompt: 'Write comprehensive Vitest and React Testing Library tests for this authentication form.',
    cliCommand: 'npx claude-code-templates@latest --skill development/webapp-testing',
    dependencies: ['vitest', 'playwright', '@testing-library/react', 'msw'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### Webapp Testing Suite Skill

**Test Coverage Strategy:**
- **Unit Tests** (Vitest): Pure functions, hooks, utilities (target: 90%+ branch coverage)
- **Component Tests** (RTL): User interaction flows, accessibility checks
- **Integration Tests** (MSW): API request/response cycles with mocked handlers
- **E2E Tests** (Playwright): Critical user journeys (auth, checkout, etc.)

**Test File Conventions:**
\`\`\`
src/
  components/Button/
    Button.tsx
    Button.test.tsx      # RTL unit test
    Button.stories.tsx   # Storybook story
e2e/
  auth.spec.ts           # Playwright E2E
\`\`\``
  },
  {
    id: 'skill-brainstorming',
    slug: 'productivity/brainstorming',
    name: 'Strategic Brainstorming',
    type: 'skill',
    category: 'productivity',
    description: 'Structured ideation framework using SCAMPER, first-principles questioning, feature matrices, reverse brainstorming, and technical feasibility prioritization.',
    installs: 781,
    verified: true,
    version: '1.2.0',
    author: 'Anthropic / Claude Ecosystem',
    tags: ['ideation', 'brainstorming', 'product-strategy', 'architecture-planning', 'scamper'],
    triggers: ['brainstorm features', 'ideate architecture', 'explore product ideas', 'brainstorm technical approaches'],
    samplePrompt: 'Brainstorm 5 innovative monetization models for a developer tooling startup.',
    cliCommand: 'npx claude-code-templates@latest --skill productivity/brainstorming',
    dependencies: [],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### Strategic Brainstorming Skill

**Ideation Frameworks:**
1. **SCAMPER** – Substitute, Combine, Adapt, Modify, Put to other uses, Eliminate, Reverse
2. **First Principles** – Decompose to fundamental truths, rebuild from axioms
3. **Jobs-to-be-Done (JTBD)** – Identify the underlying progress users seek
4. **Crazy 8s** – 8 rough ideas in 8 minutes, then refine best 2
5. **How Might We** – Reframe problem statements into opportunity spaces

**Output Format:**
- Idea matrix with: Feasibility × Impact × Effort × Time-to-Market
- Top 3 recommendations with implementation roadmap`
  },
  {
    id: 'skill-canvas-design',
    slug: 'creative-design/canvas-design',
    name: 'HTML5 Canvas & WebGL Designer',
    type: 'skill',
    category: 'creative-design',
    description: 'High-performance HTML5 2D Canvas and WebGL interactive rendering, smooth requestAnimationFrame loops, ResizeObserver handlers, and generative graphic creation.',
    installs: 772,
    verified: true,
    version: '1.5.0',
    author: 'Anthropic / Claude Ecosystem',
    tags: ['canvas', 'html5', 'webgl', 'animations', 'interactive-graphics'],
    triggers: ['create canvas animation', 'draw on html5 canvas', 'canvas responsive resize', 'interactive graphic'],
    samplePrompt: 'Create an interactive particle network canvas with smooth velocity updates and mouse attraction.',
    cliCommand: 'npx claude-code-templates@latest --skill creative-design/canvas-design',
    dependencies: ['three.js'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### HTML5 Canvas & WebGL Designer Skill

**Canvas 2D Patterns:**
- requestAnimationFrame game loop with delta time normalization
- Off-screen canvas double-buffering for performance
- HiDPI / Retina display pixel ratio scaling
- ResizeObserver for responsive canvas dimensions

**WebGL / Three.js Patterns:**
- Scene, Camera, Renderer bootstrap
- GLSL shader authoring with vertex/fragment examples
- Post-processing with EffectComposer (bloom, SSAO)
- GLTF model loading with Draco compression`
  },
  {
    id: 'skill-senior-prompt-engineer',
    slug: 'ai-research/senior-prompt-engineer',
    name: 'Senior Prompt Engineer',
    type: 'skill',
    category: 'ai-research',
    description: 'Mastery of few-shot prompting, chain-of-thought elicitation, structured JSON/XML schema outputs, system role instruction design, and token budget optimization.',
    installs: 683,
    verified: true,
    version: '2.0.1',
    author: 'Anthropic / Claude Ecosystem',
    tags: ['prompt-engineering', 'few-shot', 'structured-outputs', 'llm-guardrails', 'chain-of-thought'],
    triggers: ['optimize this prompt', 'prompt engineering', 'improve system instructions', 'few-shot examples'],
    samplePrompt: 'Refactor this raw prompt into an XML-tagged, few-shot prompt with strict JSON output format.',
    cliCommand: 'npx claude-code-templates@latest --skill ai-research/senior-prompt-engineer',
    dependencies: [],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### Senior Prompt Engineer Skill

**Prompt Architecture:**
\`\`\`xml
<system>
  You are [role]. Your goal is [objective].
  
  <constraints>
    - [constraint 1]
    - [constraint 2]
  </constraints>
  
  <output_format>
    Return valid JSON: { "field": "value" }
  </output_format>
</system>

<examples>
  <example input="..." output="..." />
</examples>
\`\`\`

**Optimization Techniques:**
- Chain-of-thought with scratchpad tags
- Constitutional AI self-critique loops
- Token budgeting with truncation strategies
- Prompt caching for repeated context`
  },
  {
    id: 'skill-senior-security',
    slug: 'security/senior-security',
    name: 'Senior Security Auditor',
    type: 'skill',
    category: 'security',
    description: 'Static application security testing (SAST), OWASP Top 10 mitigation, secret leakage detection, CORS/CSP policy hardening, and dependency vulnerability scanning.',
    installs: 665,
    verified: true,
    version: '2.3.0',
    author: 'Anthropic / Claude Ecosystem',
    tags: ['security', 'owasp', 'penetration-testing', 'input-sanitization', 'csrf-cors'],
    triggers: ['audit security', 'check for vulnerabilities', 'owasp audit', 'sanitize inputs', 'security hardening'],
    samplePrompt: 'Audit this Express router for SQL injection, CSRF vulnerabilities, and missing rate limits.',
    cliCommand: 'npx claude-code-templates@latest --skill security/senior-security',
    dependencies: ['helmet', 'express-rate-limit', 'bcryptjs'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### Senior Security Auditor Skill

**OWASP Top 10 (2021) Coverage:**
- A01 Broken Access Control → RBAC enforcement checks
- A02 Cryptographic Failures → Weak cipher detection (MD5, SHA1)
- A03 Injection → SQL/NoSQL/LDAP/OS injection patterns
- A05 Security Misconfiguration → CSP, HSTS, X-Frame-Options headers
- A07 Auth Failures → JWT algorithm confusion, session fixation
- A09 Logging Failures → Missing audit trails for sensitive operations

**Automated Checks:**
- \`npm audit\` CVE severity triage
- Regex scan for hardcoded secrets (API keys, tokens, passwords)
- Environment variable validation with dotenv-safe`
  },
  {
    id: 'skill-mobile-design',
    slug: 'creative-design/mobile-design',
    name: 'Mobile-First UX Designer',
    type: 'skill',
    category: 'creative-design',
    description: 'Mobile-first UX patterns: 44px+ touch targets, swipe gesture handles, pull-to-refresh, bottom sheets, sticky action docks, and safe-area viewport adaptations.',
    installs: 645,
    verified: true,
    version: '1.3.2',
    author: 'Anthropic / Claude Ecosystem',
    tags: ['mobile-ui', 'touch-targets', 'responsive', 'bottom-sheet', 'pwa'],
    triggers: ['mobile design layout', 'optimize for mobile touch', 'mobile bottom sheet', 'responsive mobile view'],
    samplePrompt: 'Design a responsive mobile bottom sheet with drag-to-dismiss gesture support.',
    cliCommand: 'npx claude-code-templates@latest --skill creative-design/mobile-design',
    dependencies: ['framer-motion', '@radix-ui/react-dialog'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### Mobile-First UX Designer Skill

**Touch Design Guidelines:**
- Minimum 44×44px touch targets (Apple HIG) / 48dp (Material Design 3)
- Safe area padding: env(safe-area-inset-*) for notched devices
- Thumb zone: 75% of UI actions in bottom 2/3 of screen
- Momentum scrolling: -webkit-overflow-scrolling: touch

**Mobile Patterns:**
- Bottom Navigation Bar (max 5 items)
- Swipe-to-delete / Swipe-to-reveal actions
- Pull-to-refresh with spring animation
- Modal bottom sheets with handle indicator
- Haptic feedback planning (navigator.vibrate)`
  },
  {
    id: 'skill-git-commit-helper',
    slug: 'productivity/git-commit-helper',
    name: 'Git Conventional Commit Helper',
    type: 'skill',
    category: 'productivity',
    description: 'Generates standardized Conventional Commits messages (feat, fix, refactor, docs, chore) by analyzing staged git diffs with clear scope prefixes and changelog summaries.',
    installs: 534,
    verified: true,
    version: '1.2.0',
    author: 'Anthropic / Claude Ecosystem',
    tags: ['git', 'conventional-commits', 'changelog', 'diff-analysis', 'productivity'],
    triggers: ['write commit message', 'generate git commit', 'commit helper', 'conventional commit diff'],
    samplePrompt: 'Analyze this git diff and write a concise conventional commit title and bulleted description.',
    cliCommand: 'npx claude-code-templates@latest --skill productivity/git-commit-helper',
    dependencies: ['git'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### Git Conventional Commit Helper Skill

**Commit Message Format:**
\`\`\`
<type>(<scope>): <subject>

[optional body]

[optional footer(s)]
\`\`\`

**Types:**
- feat: New user-facing feature
- fix: Bug fix
- refactor: Code restructuring without behavior change
- docs: Documentation only
- test: Adding or updating tests
- chore: Build tools, CI, maintenance
- perf: Performance improvement
- breaking: BREAKING CHANGE in footer

**Scope Examples:** auth, api, ui, db, config, ci, deps`
  },
  {
    id: 'skill-docx',
    slug: 'document-processing/docx',
    name: 'DOCX Word Document Generator',
    type: 'skill',
    category: 'document-processing',
    description: 'Automated generation, parsing, styling, and structural conversion of Microsoft Word .docx documents with custom headers, footers, tables, and typography via docx.js.',
    installs: 497,
    verified: true,
    version: '1.1.0',
    author: 'Anthropic / Claude Ecosystem',
    tags: ['docx', 'word', 'document-generation', 'office', 'formatting'],
    triggers: ['generate docx file', 'edit word document', 'convert markdown to docx', 'docx styling'],
    samplePrompt: 'Create a professional DOCX proposal document with table of contents and corporate header styling.',
    cliCommand: 'npx claude-code-templates@latest --skill document-processing/docx',
    dependencies: ['docx', 'mammoth'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### DOCX Word Document Generator Skill

**Document Capabilities:**
- Heading hierarchy (H1–H6) with custom styles
- Tables with column widths and cell merging
- Headers/footers with page numbers and logos
- Table of Contents auto-generation
- Numbered and bulleted lists
- Image embedding with captions

**Example Code:**
\`\`\`typescript
import { Document, Packer, Paragraph, TextRun } from 'docx';
const doc = new Document({ sections: [{ children: [
  new Paragraph({ text: "Title", heading: HeadingLevel.HEADING_1 })
]}]});
const buffer = await Packer.toBuffer(doc);
\`\`\``
  },
  {
    id: 'skill-clean-code',
    slug: 'development/clean-code',
    name: 'Clean Code Refactoring',
    type: 'skill',
    category: 'development',
    description: 'Enforces SOLID principles, DRY methodology, cognitive complexity limits (<15), descriptive naming conventions, and idiomatic design patterns across TypeScript and Python.',
    installs: 470,
    verified: true,
    version: '1.7.0',
    author: 'Anthropic / Claude Ecosystem',
    tags: ['clean-code', 'solid-principles', 'refactoring', 'readability', 'design-patterns'],
    triggers: ['clean up this code', 'apply clean code principles', 'simplify complex function', 'refactor for readability'],
    samplePrompt: 'Refactor this 200-line deeply nested function into modular, single-responsibility helpers.',
    cliCommand: 'npx claude-code-templates@latest --skill development/clean-code',
    dependencies: ['typescript', 'eslint'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### Clean Code Refactoring Skill

**SOLID Principles Enforcement:**
- **S** – Single Responsibility: one reason to change per class
- **O** – Open/Closed: open for extension, closed for modification
- **L** – Liskov Substitution: subtypes must be substitutable
- **I** – Interface Segregation: no client forced to depend on unused methods
- **D** – Dependency Inversion: depend on abstractions, not concretions

**Naming Conventions:**
- Functions: verb + noun (getUserById, processPayment)
- Booleans: is/has/can prefix (isLoading, hasPermission)
- Constants: SCREAMING_SNAKE_CASE
- Max function length: 20 lines before extraction`
  },
  {
    id: 'skill-pdf-processing-pro',
    slug: 'document-processing/pdf-processing-pro',
    name: 'PDF Processing Pro',
    type: 'skill',
    category: 'document-processing',
    description: 'High-precision PDF extraction, OCR table parsing, vector PDF rendering, watermarking, and dynamic invoice/report generation with pdf-lib and pdfmake.',
    installs: 462,
    verified: true,
    version: '1.4.0',
    author: 'Anthropic / Claude Ecosystem',
    tags: ['pdf', 'document-parsing', 'ocr', 'pdfmake', 'reporting'],
    triggers: ['parse pdf table', 'generate pdf invoice', 'extract text from pdf', 'pdf processing'],
    samplePrompt: 'Write a script to extract financial tables from a multi-page PDF into clean JSON records.',
    cliCommand: 'npx claude-code-templates@latest --skill document-processing/pdf-processing-pro',
    dependencies: ['pdf-lib', 'pdfmake', 'pdf-parse'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### PDF Processing Pro Skill

**Extraction Capabilities:**
- Text extraction with position coordinates
- Table detection using heuristic line-detection
- Form field extraction (AcroForm)
- OCR via Tesseract.js for scanned documents

**Generation Capabilities:**
- Invoice templates with line items and tax calculations
- Multi-page reports with headers/footers
- Digital signatures and watermarks
- PDF/A compliance for archival requirements`
  },
  {
    id: 'skill-file-organizer',
    slug: 'productivity/file-organizer',
    name: 'Project File Organizer',
    type: 'skill',
    category: 'productivity',
    description: 'Automated workspace directory structuring, dead code pruning, asset optimization, barrel export generation, and architectural file placement according to best-practice standards.',
    installs: 435,
    verified: true,
    version: '1.1.5',
    author: 'Anthropic / Claude Ecosystem',
    tags: ['file-system', 'organization', 'clean-workspace', 'refactor', 'automation'],
    triggers: ['organize project files', 'clean workspace directory', 'reorganize src folder', 'find unused files'],
    samplePrompt: 'Analyze this project structure and suggest a clean modular folder architecture.',
    cliCommand: 'npx claude-code-templates@latest --skill productivity/file-organizer',
    dependencies: ['glob', 'fast-glob'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### Project File Organizer Skill

**Analysis Steps:**
1. Scan directory tree and catalog all file types
2. Identify orphaned files (imported nowhere)
3. Detect duplicate logic across files
4. Map circular import dependencies
5. Propose consolidated module structure

**Feature-Sliced Design Output:**
\`\`\`
src/
  app/          # App initialization and routing
  pages/        # Page-level components
  widgets/      # Composite UI blocks
  features/     # Business features
  entities/     # Domain models
  shared/       # Reusable utilities, UI primitives
\`\`\``
  },
  {
    id: 'skill-pptx',
    slug: 'document-processing/pptx',
    name: 'PowerPoint PPTX Generator',
    type: 'skill',
    category: 'document-processing',
    description: 'Automated PowerPoint presentation generation, master layout templating, chart embedding, image placement, and slide transition orchestration using pptxgenjs.',
    installs: 396,
    verified: true,
    version: '1.0.8',
    author: 'Anthropic / Claude Ecosystem',
    tags: ['pptx', 'powerpoint', 'slide-deck', 'presentation', 'office'],
    triggers: ['create powerpoint slides', 'generate pptx presentation', 'pitch deck generator', 'pptx layout'],
    samplePrompt: 'Generate a 10-slide startup pitch deck template using pptxgenjs with high-contrast color scheme.',
    cliCommand: 'npx claude-code-templates@latest --skill document-processing/pptx',
    dependencies: ['pptxgenjs'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### PowerPoint PPTX Generator Skill

**Slide Templates:**
- Title Slide with logo and tagline
- Section Divider with bold typography
- Content + Image (50/50 split)
- Full-Width Chart or Graph
- Team Members grid layout
- Thank You + Contact information

**Chart Types Supported:**
- Bar, Line, Pie, Donut, Area charts
- Data tables with conditional formatting
- Mermaid-to-PNG conversion for diagrams`
  },
  {
    id: 'skill-mcp-builder',
    slug: 'productivity/mcp-builder',
    name: 'MCP Server Builder',
    type: 'skill',
    category: 'productivity',
    description: 'End-to-end scaffolding for Model Context Protocol (MCP) servers in TypeScript and FastMCP Python, with tool/resource/prompt schema definitions and integration testing.',
    installs: 384,
    verified: true,
    version: '2.0.0',
    author: 'Anthropic / Claude Ecosystem',
    tags: ['mcp', 'fastmcp', 'protocol', 'tool-definition', 'claude-desktop'],
    triggers: ['build mcp server', 'scaffold mcp tool', 'model context protocol server', 'create fastmcp'],
    samplePrompt: 'Scaffold a TypeScript MCP server with tool definitions for querying a SQLite database.',
    cliCommand: 'npx claude-code-templates@latest --skill productivity/mcp-builder',
    dependencies: ['@modelcontextprotocol/sdk', 'zod'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### MCP Server Builder Skill

**MCP Server Structure:**
\`\`\`typescript
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

const server = new Server({ name: "my-server", version: "1.0.0" }, {
  capabilities: { tools: {}, resources: {}, prompts: {} }
});

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [{ name: "my_tool", description: "...", inputSchema: { ... } }]
}));
\`\`\`

**Capabilities:**
- Tools: Callable functions with typed Zod input schemas
- Resources: File/URL content providers
- Prompts: Reusable prompt templates with arguments`
  },
  {
    id: 'skill-sentry-find-bugs',
    slug: 'sentry/sentry-find-bugs',
    name: 'Sentry Bug Finder & Fixer',
    type: 'skill',
    category: 'sentry',
    description: 'Sentry telemetry integration, stack trace root cause analysis, automated error grouping triage, and regression patch generation from production exception data.',
    installs: 342,
    verified: true,
    version: '1.3.0',
    author: 'Sentry.io / Claude Ecosystem',
    tags: ['sentry', 'bug-hunting', 'stack-trace', 'telemetry', 'monitoring'],
    triggers: ['sentry find bugs', 'analyze sentry stack trace', 'fix sentry exception', 'triage error report'],
    samplePrompt: 'Analyze this unhandled exception stack trace from Sentry and generate a targeted bugfix.',
    cliCommand: 'npx claude-code-templates@latest --skill sentry/sentry-find-bugs',
    dependencies: ['@sentry/node', '@sentry/react'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### Sentry Bug Finder & Fixer Skill

**Analysis Protocol:**
1. Parse Sentry issue: event ID, error type, message, user impact count
2. Map stack frames to source files (with source maps)
3. Identify root cause: null reference, unhandled promise, type error
4. Locate fix location with surrounding context
5. Generate targeted, minimal-change patch
6. Write regression test to prevent recurrence

**Sentry SDK Setup:**
\`\`\`typescript
Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 0.1,
  profilesSampleRate: 0.1,
  integrations: [new Sentry.BrowserTracing()]
});
\`\`\``
  }
];

// ─────────────────────────────────────────────────────────────
// MCPs – 101 total  (8 curated + remainder generated)
// ─────────────────────────────────────────────────────────────
export const TOP_CURATED_MCPS: ComponentItem[] = [
  {
    id: 'mcp-postgres',
    slug: 'database/postgres-mcp',
    name: 'PostgreSQL MCP Server',
    type: 'mcp',
    category: 'database',
    description: 'Direct Model Context Protocol bridge to PostgreSQL with schema inspection, parameterized query execution, connection pooling, transaction control, and EXPLAIN plan analysis.',
    installs: 2150,
    verified: true,
    featured: true,
    version: '2.1.0',
    author: 'Database Systems Lab',
    tags: ['mcp', 'postgres', 'sql', 'database', 'schema'],
    triggers: ['query postgres', 'inspect database schema', 'postgres mcp', 'sql query execute'],
    samplePrompt: 'Use the PostgreSQL MCP server to inspect all tables and check foreign key constraints.',
    cliCommand: 'npx @modelcontextprotocol/server-postgres',
    dependencies: ['pg', '@modelcontextprotocol/sdk'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+', 'Claude Desktop'],
    fullInstructions: `### PostgreSQL MCP Server

**Configuration (~/.claude/config.json):**
\`\`\`json
{
  "mcpServers": {
    "postgres": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-postgres", "postgresql://localhost/mydb"]
    }
  }
}
\`\`\`

**Available Tools:**
- \`postgres_query\` – Execute parameterized SELECT queries
- \`postgres_execute\` – Run INSERT/UPDATE/DELETE with transaction control
- \`postgres_list_tables\` – List all tables with row counts
- \`postgres_describe_table\` – Show column types and constraints
- \`postgres_explain\` – Run EXPLAIN ANALYZE on any query

**Safety:** Automatic read-only transaction for non-explicit writes`
  },
  {
    id: 'mcp-github',
    slug: 'workflow-automation/github-mcp',
    name: 'GitHub MCP Server',
    type: 'mcp',
    category: 'workflow-automation',
    description: 'Full GitHub REST and GraphQL API integration for Claude Code: create/review PRs, manage issues, search code across repositories, read files, and trigger Actions workflows.',
    installs: 1980,
    verified: true,
    featured: true,
    version: '2.3.0',
    author: 'Anthropic / GitHub',
    tags: ['mcp', 'github', 'git', 'pull-requests', 'ci-cd'],
    triggers: ['create github pr', 'search github repo', 'github mcp', 'list repo issues'],
    samplePrompt: 'Create a GitHub pull request with detailed changelog notes using the GitHub MCP tool.',
    cliCommand: 'npx @modelcontextprotocol/server-github',
    dependencies: ['@octokit/rest', '@modelcontextprotocol/sdk'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+', 'Claude Desktop'],
    fullInstructions: `### GitHub MCP Server

**Configuration:**
\`\`\`json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": { "GITHUB_PERSONAL_ACCESS_TOKEN": "<your-token>" }
    }
  }
}
\`\`\`

**Available Tools:**
- \`create_pull_request\` – Open PR with title, body, base/head branches
- \`list_issues\` – Filter by state, labels, assignee, milestone
- \`search_code\` – Search across repositories with language filters
- \`get_file_contents\` – Read any file from any branch
- \`create_issue\` – Open issues with labels and assignees
- \`fork_repository\` – Fork repos to your account`
  },
  {
    id: 'mcp-brave-search',
    slug: 'ai-research/brave-search-mcp',
    name: 'Brave Search MCP Server',
    type: 'mcp',
    category: 'ai-research',
    description: 'Real-time privacy-preserving web and local search for Claude Code via Brave Search API. No tracking, fresh results, and structured snippet extraction for documentation grounding.',
    installs: 1820,
    verified: true,
    featured: true,
    version: '1.8.0',
    author: 'AI Research Guild',
    tags: ['mcp', 'brave-search', 'web-search', 'grounding', 'research'],
    triggers: ['search the web', 'brave search mcp', 'find latest documentation online', 'google search query'],
    samplePrompt: 'Search the web for latest React 19 server actions documentation.',
    cliCommand: 'npx @modelcontextprotocol/server-brave-search',
    dependencies: ['@modelcontextprotocol/sdk'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+', 'Claude Desktop'],
    fullInstructions: `### Brave Search MCP Server

**Configuration:**
\`\`\`json
{
  "mcpServers": {
    "brave-search": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-brave-search"],
      "env": { "BRAVE_API_KEY": "<your-brave-api-key>" }
    }
  }
}
\`\`\`

**Available Tools:**
- \`brave_web_search\` – Web search with count, offset parameters
- \`brave_local_search\` – Location-based business/place searches

**Privacy Guarantee:** Zero persistent query logging, no fingerprinting`
  },
  {
    id: 'mcp-bright-data',
    slug: 'workflow-automation/bright-data-mcp',
    name: 'Bright Data Web Scraper MCP',
    type: 'mcp',
    category: 'workflow-automation',
    description: 'Enterprise proxy-backed web scraper and structured data extraction engine with CAPTCHA bypass, JavaScript rendering, and multi-geo residential IP routing.',
    installs: 1640,
    verified: true,
    featured: true,
    version: '2.0.4',
    author: 'Bright Data',
    tags: ['mcp', 'bright-data', 'web-scraping', 'proxies', 'data-extraction'],
    triggers: ['scrape website data', 'bright data mcp', 'extract html content', 'crawl product prices'],
    samplePrompt: 'Extract structured product pricing and reviews from this ecommerce URL using Bright Data.',
    cliCommand: 'npx @brightdata/mcp',
    dependencies: ['puppeteer-core', '@modelcontextprotocol/sdk'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+', 'Claude Desktop'],
    fullInstructions: `### Bright Data Web Scraper MCP

**Configuration:**
\`\`\`json
{
  "mcpServers": {
    "brightdata": {
      "command": "npx",
      "args": ["-y", "@brightdata/mcp"],
      "env": { "API_TOKEN": "<brightdata-token>", "WEB_UNLOCKER_ZONE": "unlocker" }
    }
  }
}
\`\`\`

**Available Tools:**
- \`scrape_as_markdown\` – Render URL and return clean Markdown
- \`scrape_as_html\` – Return raw rendered HTML
- \`extract_structured_data\` – JSON extraction with CSS selectors
- \`search_engine\` – Google/Bing SERP extraction

**Features:** Residential proxies, CAPTCHA solving, JS rendering`
  },
  {
    id: 'mcp-docker',
    slug: 'development/docker-mcp',
    name: 'Docker Engine MCP Server',
    type: 'mcp',
    category: 'development',
    description: 'Inspect running containers, stream container logs, manage Docker volumes and networks, execute commands in containers, and control Docker Compose stacks.',
    installs: 1530,
    verified: true,
    featured: true,
    version: '1.5.0',
    author: 'Cloud Native Guild',
    tags: ['mcp', 'docker', 'containers', 'devops', 'logs'],
    triggers: ['inspect docker container', 'docker mcp', 'check container logs', 'restart docker compose'],
    samplePrompt: 'Inspect the status and healthcheck logs of the running web container.',
    cliCommand: 'npx @docker/mcp-server',
    dependencies: ['dockerode', '@modelcontextprotocol/sdk'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+', 'Claude Desktop'],
    fullInstructions: `### Docker Engine MCP Server

**Configuration:**
\`\`\`json
{
  "mcpServers": {
    "docker": {
      "command": "npx",
      "args": ["-y", "@docker/mcp-server"]
    }
  }
}
\`\`\`

**Available Tools:**
- \`list_containers\` – Show all containers with status and ports
- \`inspect_container\` – Full container configuration and health
- \`get_container_logs\` – Tail logs with line limit and filter
- \`exec_in_container\` – Run command inside running container
- \`list_images\` – Show local images with size and tags
- \`compose_up/down\` – Control Docker Compose stacks

**Socket:** Connects via /var/run/docker.sock`
  },
  {
    id: 'mcp-sqlite-fast',
    slug: 'database/sqlite-fast-mcp',
    name: 'SQLite FastMCP Server',
    type: 'mcp',
    category: 'database',
    description: 'Lightweight zero-config MCP server for direct inspection, indexing, and query execution over local SQLite database files with WAL mode and FTS5 support.',
    installs: 1410,
    verified: true,
    version: '1.4.0',
    author: 'Database Systems Lab',
    tags: ['mcp', 'sqlite', 'database', 'local-db', 'fts'],
    triggers: ['sqlite mcp', 'query local sqlite', 'inspect sqlite db'],
    samplePrompt: 'Connect to database.sqlite and display all table schemas with row counts.',
    cliCommand: 'npx @modelcontextprotocol/server-sqlite',
    dependencies: ['better-sqlite3', '@modelcontextprotocol/sdk'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+', 'Claude Desktop'],
    fullInstructions: `### SQLite FastMCP Server

**Configuration:**
\`\`\`json
{
  "mcpServers": {
    "sqlite": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-sqlite", "--db-path", "./database.sqlite"]
    }
  }
}
\`\`\`

**Available Tools:**
- \`query\` – Execute SELECT queries with parameterized inputs
- \`list_tables\` – Show all tables with column counts
- \`describe_table\` – Full schema with types and constraints
- \`create_table\` – DDL table creation
- \`insert_rows\` – Batch row insertion

**Performance:** Synchronous better-sqlite3 for zero-overhead access`
  },
  {
    id: 'mcp-sentry-telemetry',
    slug: 'sentry/sentry-telemetry-mcp',
    name: 'Sentry Telemetry MCP Server',
    type: 'mcp',
    category: 'sentry',
    description: 'Live MCP connection to Sentry performance tracing and exception tracking, enabling Claude Code to inspect production stack traces, release health, and user impact metrics.',
    installs: 1290,
    verified: true,
    version: '2.0.0',
    author: 'Sentry.io',
    tags: ['mcp', 'sentry', 'telemetry', 'stacktrace', 'apm'],
    triggers: ['sentry mcp', 'inspect sentry issues', 'query live sentry errors'],
    samplePrompt: 'Fetch the 5 most recent unhandled exception issues from Sentry for this project.',
    cliCommand: 'npx @sentry/mcp-server',
    dependencies: ['@sentry/node', '@modelcontextprotocol/sdk'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+', 'Claude Desktop'],
    fullInstructions: `### Sentry Telemetry MCP Server

**Configuration:**
\`\`\`json
{
  "mcpServers": {
    "sentry": {
      "command": "npx",
      "args": ["-y", "@sentry/mcp-server"],
      "env": { "SENTRY_AUTH_TOKEN": "<token>", "SENTRY_ORG": "<org-slug>" }
    }
  }
}
\`\`\`

**Available Tools:**
- \`list_issues\` – Get issues with assignee, status, and occurrence filters
- \`get_issue\` – Full issue details with user impact counts
- \`get_stacktrace\` – Mapped source stack frames
- \`list_releases\` – Recent releases with crash-free rates
- \`get_event\` – Raw event JSON with breadcrumbs`
  },
  {
    id: 'mcp-notion-workspace',
    slug: 'productivity/notion-workspace-mcp',
    name: 'Notion Workspace MCP Server',
    type: 'mcp',
    category: 'productivity',
    description: 'Connects Claude Code to Notion workspace pages and databases for automated spec reading, status tracking, task sync, and knowledge base querying.',
    installs: 1180,
    verified: true,
    version: '1.3.0',
    author: 'Productivity Guild',
    tags: ['mcp', 'notion', 'productivity', 'workspace', 'databases'],
    triggers: ['notion mcp', 'read notion database', 'sync notion tasks'],
    samplePrompt: 'Read the functional specification document from this Notion page URL.',
    cliCommand: 'npx @modelcontextprotocol/server-notion',
    dependencies: ['@notionhq/client', '@modelcontextprotocol/sdk'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+', 'Claude Desktop'],
    fullInstructions: `### Notion Workspace MCP Server

**Configuration:**
\`\`\`json
{
  "mcpServers": {
    "notion": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-notion"],
      "env": { "NOTION_API_KEY": "<integration-secret>" }
    }
  }
}
\`\`\`

**Available Tools:**
- \`search_pages\` – Full-text search across workspace pages
- \`get_page\` – Retrieve page blocks as Markdown
- \`query_database\` – Filter and sort Notion database rows
- \`create_page\` – Add new pages with rich block content
- \`append_blocks\` – Add content to existing pages
- \`update_database_item\` – Change status, assignee, or properties`
  }
];

// ─────────────────────────────────────────────────────────────
// AGENTS – 422 total  (6 curated + remainder generated)
// ─────────────────────────────────────────────────────────────
export const TOP_CURATED_AGENTS: ComponentItem[] = [
  {
    id: 'agent-fullstack-builder',
    slug: 'web-development/fullstack-autonomous-builder',
    name: 'Fullstack Autonomous Builder Agent',
    type: 'agent',
    category: 'web-development',
    description: 'Autonomous multi-step builder agent that orchestrates React frontend views, Express backend routes, Drizzle database migrations, and Vitest integration test suites end-to-end.',
    installs: 2680,
    verified: true,
    featured: true,
    version: '3.0.0',
    author: 'Anthropic / Claude Ecosystem',
    tags: ['agent', 'autonomous', 'fullstack', 'code-generation', 'react-express'],
    triggers: ['build full application', 'autonomous fullstack agent', 'scaffold entire feature end-to-end', 'fullstack autonomous builder'],
    samplePrompt: 'Autonomously build a complete Kanban board with drag-and-drop, Express backend, and PostgreSQL storage.',
    cliCommand: 'npx claude-code-templates@latest --agent web-development/fullstack-autonomous-builder',
    dependencies: ['react', 'express', 'drizzle-orm', 'vitest'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### Fullstack Autonomous Builder Agent

**Execution Pipeline:**
1. **Requirements Decomposition** – Parse feature spec into typed interfaces and API contracts
2. **Database Schema Design** – Generate Drizzle ORM schema with relations and indexes
3. **Backend Scaffolding** – Express routes with Zod validation, service layer, and repository pattern
4. **Frontend Generation** – React components with TanStack Query data fetching and Zustand state
5. **Integration Wiring** – Connect client to server with error boundaries and loading states
6. **Test Generation** – Vitest unit tests + Playwright E2E for critical paths
7. **Self-Healing Pass** – Run build/tests, auto-fix TypeScript errors and test failures

**Sub-Agents Spawned:**
- Schema Designer Agent, API Router Agent, UI Component Agent, Test Writer Agent`
  },
  {
    id: 'agent-code-reviewer-pro',
    slug: 'development/autonomous-code-reviewer',
    name: 'Autonomous Code Review Agent',
    type: 'agent',
    category: 'development',
    description: 'Multi-pass autonomous code review agent running AST analysis, TypeScript type verification, OWASP security scans, and cognitive complexity benchmarks across entire PRs.',
    installs: 2110,
    verified: true,
    featured: true,
    version: '2.4.0',
    author: 'Claude Quality Guild',
    tags: ['agent', 'code-review', 'qa', 'ast-analysis', 'pr-bot'],
    triggers: ['run autonomous code review', 'review agent audit', 'full pr check', 'autonomous reviewer'],
    samplePrompt: 'Perform an exhaustive autonomous review across all modified files in this branch.',
    cliCommand: 'npx claude-code-templates@latest --agent development/autonomous-code-reviewer',
    dependencies: ['typescript', 'eslint', 'ts-morph'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### Autonomous Code Review Agent

**Review Passes:**
1. **AST & Syntax Pass** – ts-morph analysis for unhandled promises, type escapes, dead code
2. **Security Pass** – OWASP Top 10 checks, secret pattern scanning, dependency CVE lookups
3. **Complexity Pass** – Cyclomatic and cognitive complexity thresholds (warn >10, error >20)
4. **Performance Pass** – N+1 queries, unnecessary memoization, bundle size impact
5. **Accessibility Pass** – Missing ARIA, contrast violations, keyboard navigation
6. **Patch Recommendation** – Code diffs with explanations for each finding

**Output:** Structured JSON + Markdown report with severity levels (critical/warning/info)`
  },
  {
    id: 'agent-security-pentester',
    slug: 'security/security-pentester-agent',
    name: 'Security PenTester Red-Team Agent',
    type: 'agent',
    category: 'security',
    description: 'Autonomous red-team agent that enumerates API endpoints, fuzzes inputs for injection vulnerabilities, tests JWT bypass scenarios, verifies CORS policies, and generates CVE reports.',
    installs: 1740,
    verified: true,
    featured: true,
    version: '2.1.0',
    author: 'Claude Security Research',
    tags: ['agent', 'security', 'penetration-testing', 'fuzzing', 'vulnerability'],
    triggers: ['run security pentest', 'fuzz api endpoints', 'security agent scan', 'pentest red team'],
    samplePrompt: 'Scan all Express API endpoints for unauthorized access vulnerabilities and SQL injection vectors.',
    cliCommand: 'npx claude-code-templates@latest --agent security/security-pentester-agent',
    dependencies: ['express', 'jsonwebtoken', 'helmet'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### Security PenTester Red-Team Agent

**Attack Surface Enumeration:**
- Parse Express/Fastify router trees to catalog all endpoints
- Map authentication middleware coverage gaps
- Identify unvalidated user input entry points

**Test Scenarios:**
- SQL injection: ' OR 1=1--, parameterized query bypass
- XSS: <script>, onerror payloads, DOM-based vectors
- JWT: algorithm confusion (RS256→HS256), expired token acceptance
- CSRF: missing SameSite cookie, absent CSRF tokens
- Path traversal: ../../etc/passwd, null byte injection

**Output:** CVSS-scored vulnerability report with PoC exploit code`
  },
  {
    id: 'agent-devops-release',
    slug: 'workflow-automation/devops-release-agent',
    name: 'DevOps Release Orchestrator Agent',
    type: 'agent',
    category: 'workflow-automation',
    description: 'Automates semantic versioning calculation, CHANGELOG.md compilation, git tag creation, Docker multi-arch image builds, and Kubernetes rolling deployment orchestration.',
    installs: 1450,
    verified: true,
    featured: true,
    version: '1.9.0',
    author: 'Cloud Native Guild',
    tags: ['agent', 'devops', 'release', 'docker', 'ci-cd'],
    triggers: ['prepare release', 'devops release agent', 'publish new version', 'release orchestrator'],
    samplePrompt: 'Draft a new v2.0.0 release changelog and prepare git release tags from Conventional Commits.',
    cliCommand: 'npx claude-code-templates@latest --agent workflow-automation/devops-release-agent',
    dependencies: ['docker', 'conventional-changelog', 'semver'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### DevOps Release Orchestrator Agent

**Release Pipeline Steps:**
1. **Version Calculation** – Parse git log for feat/fix/BREAKING CHANGE → semver bump
2. **Changelog Generation** – Grouped sections: 🚀 Features, 🐛 Fixes, 💥 Breaking Changes
3. **Git Tagging** – Signed tag creation with GPG key
4. **Docker Build** – Multi-platform (linux/amd64, linux/arm64) buildx build
5. **Registry Push** – Push to GHCR/ECR with version and latest tags
6. **K8s Rollout** – kubectl rollout status monitoring with automatic rollback on error
7. **Slack Notify** – Release announcement with diff summary`
  },
  {
    id: 'agent-doc-architect',
    slug: 'productivity/documentation-architect-agent',
    name: 'Documentation Architect Agent',
    type: 'agent',
    category: 'productivity',
    description: 'Autonomous documentation agent that parses AST code structures, generates OpenAPI 3.1 specifications, builds Mermaid architecture diagrams, and auto-updates README files.',
    installs: 1210,
    verified: true,
    version: '1.7.0',
    author: 'Claude Ecosystem Tools',
    tags: ['agent', 'documentation', 'openapi', 'mermaid', 'tsdoc'],
    triggers: ['run doc architect', 'generate codebase docs', 'build architecture diagram', 'documentation agent'],
    samplePrompt: 'Audit all API handlers and produce OpenAPI 3.1 specifications and Mermaid sequence diagrams.',
    cliCommand: 'npx claude-code-templates@latest --agent productivity/documentation-architect-agent',
    dependencies: ['mermaid', 'typedoc', 'swagger-parser'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### Documentation Architect Agent

**Documentation Outputs:**
- \`README.md\` – Auto-generated with project structure, setup, and API reference
- \`openapi.yaml\` – Valid OpenAPI 3.1 spec from TypeScript route types
- \`ARCHITECTURE.md\` – System overview with C4 context diagrams
- \`CONTRIBUTING.md\` – Git workflow, PR template, and code style guide
- Mermaid sequence diagrams for all async API flows
- TypeDoc API reference HTML

**Scanning Capabilities:**
- Express/Hono route tree extraction
- Zod schema → JSON Schema conversion
- JSDoc/TSDoc comment extraction and enrichment`
  },
  {
    id: 'agent-db-migration',
    slug: 'database/database-migration-agent',
    name: 'Database Migration Safety Agent',
    type: 'agent',
    category: 'database',
    description: 'Autonomous database manager that verifies Drizzle/Prisma schema migrations for safety, checks foreign key constraints, runs isolation dry-runs, and generates zero-downtime rollback scripts.',
    installs: 1120,
    verified: true,
    version: '2.0.1',
    author: 'Database Systems Lab',
    tags: ['agent', 'database', 'migrations', 'sql', 'zero-downtime'],
    triggers: ['run migration agent', 'safe database migration', 'generate rollback script', 'db migration check'],
    samplePrompt: 'Verify this Drizzle SQL migration for destructive drops and generate a zero-downtime rollback plan.',
    cliCommand: 'npx claude-code-templates@latest --agent database/database-migration-agent',
    dependencies: ['drizzle-orm', 'pg', 'knex'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### Database Migration Safety Agent

**Safety Checks:**
- ✅ Detect column drops that have active references
- ✅ Identify table renames without compatibility aliases
- ✅ Flag missing indexes on foreign key columns
- ✅ Verify NOT NULL additions on non-empty tables
- ✅ Check for table lock duration with row count estimates

**Migration Execution Plan:**
1. Shadow database dry-run (Docker PostgreSQL container)
2. Rollback SQL generation (idempotent, verified)
3. Performance estimate: pg_relation_size() before/after
4. Zero-downtime strategy: Online schema change (OSC) for large tables`
  }
];

// ─────────────────────────────────────────────────────────────
// COMMANDS – 286 total  (6 curated + remainder generated)
// ─────────────────────────────────────────────────────────────
export const TOP_CURATED_COMMANDS: ComponentItem[] = [
  {
    id: 'cmd-review',
    slug: 'development/cmd-review',
    name: '/review',
    type: 'command',
    category: 'development',
    description: 'Quick slash command to perform a comprehensive code review of staged changes or a target branch against strict architectural, TypeScript, and security standards.',
    installs: 2310,
    verified: true,
    featured: true,
    version: '2.0.0',
    author: 'Claude Core Team',
    tags: ['command', 'slash-command', 'review', 'git-diff'],
    triggers: ['/review', 'review staged changes', 'run /review command'],
    samplePrompt: '/review --staged --strict',
    cliCommand: '/review',
    dependencies: ['git', 'typescript'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### /review Command

**Usage:**
\`\`\`bash
/review [flags]
\`\`\`

**Flags:**
- \`--staged\` – Review only git staged files
- \`--branch <name>\` – Compare HEAD against branch base
- \`--strict\` – Treat warnings as blocking errors
- \`--security\` – Enable deep OWASP security pass
- \`--format json\` – Output structured JSON findings

**Configuration (~/.claude/commands/review.md):**
Define custom review criteria, style guides, and project-specific rules to include in every /review invocation.`
  },
  {
    id: 'cmd-test',
    slug: 'development/cmd-test',
    name: '/test',
    type: 'command',
    category: 'development',
    description: 'Executes project test runner (Vitest/Jest/Playwright), analyzes failing assertion messages, identifies root causes, and proposes minimal targeted patches.',
    installs: 1890,
    verified: true,
    featured: true,
    version: '2.1.0',
    author: 'Claude Testing Guild',
    tags: ['command', 'slash-command', 'testing', 'vitest', 'jest'],
    triggers: ['/test', 'run project tests', 'trigger /test command'],
    samplePrompt: '/test --coverage --fix-failures',
    cliCommand: '/test',
    dependencies: ['vitest', 'jest', 'playwright'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### /test Command

**Usage:**
\`\`\`bash
/test [flags] [filter]
\`\`\`

**Flags:**
- \`--watch\` – Re-run tests on file changes
- \`--coverage\` – Generate V8 line + branch coverage report
- \`--fix-failures\` – Auto-apply patches for failing unit tests
- \`--ui\` – Open Vitest UI in browser
- \`filter\` – Pattern to match test file names

**Behavior:**
When tests fail, /test reads the assertion errors, locates the source code, diagnoses the root cause, and outputs a minimal fix with explanation.`
  },
  {
    id: 'cmd-fix',
    slug: 'development/cmd-fix',
    name: '/fix',
    type: 'command',
    category: 'development',
    description: 'Diagnoses current TypeScript compiler errors, ESLint violations, or runtime exceptions, identifies root causes from stack traces, and applies verified fixes.',
    installs: 1720,
    verified: true,
    featured: true,
    version: '1.8.0',
    author: 'Claude Core Team',
    tags: ['command', 'slash-command', 'bugfix', 'compiler-fix', 'typescript'],
    triggers: ['/fix', 'fix error', 'run /fix command'],
    samplePrompt: '/fix TypeScript error TS2322 in src/components/Button.tsx',
    cliCommand: '/fix',
    dependencies: ['typescript', 'eslint'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### /fix Command

**Usage:**
\`\`\`bash
/fix [error_message_or_code]
/fix  # (reads last terminal error automatically)
\`\`\`

**Supported Error Types:**
- TypeScript compiler errors (TS2xxx codes)
- ESLint rule violations
- Runtime exceptions with stack traces
- Build tool errors (Vite, Webpack, esbuild)
- Import/module resolution failures

**Process:** Reads error → locates file + line → applies minimal surgical diff → verifies build passes`
  },
  {
    id: 'cmd-commit',
    slug: 'productivity/cmd-commit',
    name: '/commit',
    type: 'command',
    category: 'productivity',
    description: 'Analyzes staged git diffs to craft Conventional Commit messages with type, scope, subject, breaking change flags, and linked issue references.',
    installs: 1540,
    verified: true,
    version: '1.5.0',
    author: 'Git Automation Lab',
    tags: ['command', 'slash-command', 'git', 'conventional-commits', 'changelog'],
    triggers: ['/commit', 'generate git commit message', 'run /commit'],
    samplePrompt: '/commit --auto --type feat',
    cliCommand: '/commit',
    dependencies: ['git'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### /commit Command

**Usage:**
\`\`\`bash
/commit [flags]
\`\`\`

**Flags:**
- \`--auto\` – Stage all tracked files and commit automatically
- \`--type <feat|fix|docs|refactor|test|chore>\` – Force commit type
- \`--scope <name>\` – Override scope prefix
- \`--breaking\` – Add BREAKING CHANGE footer

**Output Example:**
\`\`\`
feat(auth): add Google OAuth2 PKCE login flow

- Implement authorization code grant with PKCE verifier
- Add session cookie with httpOnly and SameSite=strict
- Handle token refresh on 401 responses

Closes #142
\`\`\``
  },
  {
    id: 'cmd-refactor',
    slug: 'development/cmd-refactor',
    name: '/refactor',
    type: 'command',
    category: 'development',
    description: 'Refactors selected functions, classes, or modules applying SOLID principles, cognitive complexity reductions, immutability constraints, and improved naming conventions.',
    installs: 1410,
    verified: true,
    version: '1.9.0',
    author: 'Claude Refactor Guild',
    tags: ['command', 'slash-command', 'refactor', 'clean-code', 'solid'],
    triggers: ['/refactor', 'refactor function', 'run /refactor command'],
    samplePrompt: '/refactor src/utils/formatters.ts --clean --immutable',
    cliCommand: '/refactor',
    dependencies: ['typescript'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### /refactor Command

**Usage:**
\`\`\`bash
/refactor <path/to/file> [options]
\`\`\`

**Options:**
- \`--clean\` – Extract nested blocks into single-responsibility functions
- \`--immutable\` – Replace mutable state with functional updates
- \`--types\` – Tighten TypeScript types (remove any/unknown)
- \`--dry-run\` – Preview changes without writing to disk

**Refactoring Techniques Applied:**
- Extract function/variable
- Replace conditional with polymorphism
- Introduce parameter object
- Replace magic numbers with named constants`
  },
  {
    id: 'cmd-security-scan',
    slug: 'security/cmd-security-scan',
    name: '/security-scan',
    type: 'command',
    category: 'security',
    description: 'Runs SAST static analysis security scanning across all workspace source files to detect OWASP vulnerabilities, API key leaks, and insecure npm/pip dependencies.',
    installs: 1320,
    verified: true,
    version: '2.0.0',
    author: 'Security Systems Lab',
    tags: ['command', 'slash-command', 'security', 'sast', 'vulnerability'],
    triggers: ['/security-scan', 'run security scan', 'sast audit command'],
    samplePrompt: '/security-scan --depth full --output report.json',
    cliCommand: '/security-scan',
    dependencies: ['eslint', 'npm-audit'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### /security-scan Command

**Usage:**
\`\`\`bash
/security-scan [flags]
\`\`\`

**Flags:**
- \`--depth full\` – Scan source code, lockfiles, and .env files
- \`--fix\` – Auto-apply patches for patchable CVEs
- \`--output <file>\` – Save structured JSON findings report
- \`--threshold <critical|high|medium>\` – Fail below severity level

**Scans Performed:**
- Source code: hardcoded secrets, injection patterns
- Dependencies: npm audit, known CVE database
- Configuration: insecure CORS, missing security headers
- Docker: base image vulnerabilities (if Dockerfile exists)`
  }
];

// ─────────────────────────────────────────────────────────────
// SETTINGS – 71 total  (5 curated + remainder generated)
// ─────────────────────────────────────────────────────────────
export const TOP_CURATED_SETTINGS: ComponentItem[] = [
  {
    id: 'setting-strict-typescript',
    slug: 'development/setting-strict-typescript',
    name: 'Strict TypeScript & Anti-Slop Mode',
    type: 'setting',
    category: 'development',
    description: 'Enforces TypeScript strict mode (noImplicitAny, exactOptionalPropertyTypes, noUncheckedIndexedAccess), anti-slop visual standards, and zero unsolicited console.log statements.',
    installs: 1620,
    verified: true,
    featured: true,
    version: '1.5.0',
    author: 'Claude Standards Board',
    tags: ['setting', 'typescript', 'anti-slop', 'configuration', 'strict-mode'],
    triggers: ['enable strict mode', 'zero slop setting', 'configure strict typescript setting'],
    samplePrompt: 'Enable strict TypeScript mode with anti-slop visual constraints in workspace settings.',
    cliCommand: 'npx claude-code-templates@latest --setting development/setting-strict-typescript',
    dependencies: ['typescript'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### Strict TypeScript & Anti-Slop Setting

**\`.clauderc.json\` Configuration:**
\`\`\`json
{
  "typescript": {
    "strict": true,
    "noImplicitAny": true,
    "exactOptionalPropertyTypes": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true
  },
  "antiSlop": {
    "noUnsolicited": ["console.log", "TODO comments", "placeholder text"],
    "enforceNaming": true,
    "maxFileLength": 300,
    "requireReturnTypes": true
  }
}
\`\`\``
  },
  {
    id: 'setting-max-autonomous-turns',
    slug: 'productivity/setting-max-autonomous-turns',
    name: 'Autonomous Loop Turn Budget',
    type: 'setting',
    category: 'productivity',
    description: 'Configures maximum autonomous task iteration turns (default 25), automatic progress checkpointing every 5 turns, and rollback safeguards on error accumulation.',
    installs: 1410,
    verified: true,
    version: '1.2.0',
    author: 'Claude Core Engineering',
    tags: ['setting', 'autonomous', 'turn-limit', 'safety', 'checkpoint'],
    triggers: ['set max turns', 'turn budget configuration', 'configure autonomous turns'],
    samplePrompt: 'Configure max autonomous loop turns to 30 with progress checkpointing every 5 turns.',
    cliCommand: 'npx claude-code-templates@latest --setting productivity/setting-max-autonomous-turns',
    dependencies: ['claude-code-cli'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### Autonomous Turn Budget Setting

**\`.clauderc.json\` Configuration:**
\`\`\`json
{
  "agent": {
    "maxTurns": 25,
    "checkpointInterval": 5,
    "autoCheckpoint": true,
    "rollbackOnError": true,
    "maxErrorsBeforeStop": 3,
    "requireConfirmationOnDestructive": true
  }
}
\`\`\`

**Turn Budget Guidelines:**
- Simple feature: 10–15 turns
- Full CRUD feature: 20–25 turns
- Complex architecture: 30–40 turns (increase maxTurns)`
  },
  {
    id: 'setting-auto-sandbox-guard',
    slug: 'security/setting-auto-sandbox-guard',
    name: 'Auto-Sandbox Security Guard',
    type: 'setting',
    category: 'security',
    description: 'Restricts background command execution to verified directory boundaries, blocks destructive filesystem commands, and prevents unauthorized network exfiltration.',
    installs: 1280,
    verified: true,
    version: '2.0.0',
    author: 'Security Operations',
    tags: ['setting', 'sandbox', 'security', 'command-guard', 'boundary'],
    triggers: ['enable sandbox guard', 'configure auto-sandbox setting', 'security command boundary'],
    samplePrompt: 'Enable auto-sandbox guard to restrict background command execution to project directory.',
    cliCommand: 'npx claude-code-templates@latest --setting security/setting-auto-sandbox-guard',
    dependencies: ['claude-code-cli'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### Auto-Sandbox Security Guard Setting

**\`.clauderc.json\` Configuration:**
\`\`\`json
{
  "sandbox": {
    "strictRoot": true,
    "allowedDirectories": ["./src", "./tests", "./public"],
    "blockedCommands": ["rm -rf /", "dd", "mkfs", "wget http*", "curl * | bash"],
    "blockNetworkWrite": false,
    "requireApprovalForNewProcesses": true,
    "maxFileWriteSize": "10MB"
  }
}
\`\`\``
  },
  {
    id: 'setting-git-auto-branch',
    slug: 'workflow-automation/setting-git-auto-branch',
    name: 'Git Branch Workspace Isolation',
    type: 'setting',
    category: 'workflow-automation',
    description: 'Enforces conventional branch naming (feature/, fix/, chore/), prevents direct commits to main/master, and mandates topic-branch workspace isolation for all Claude edits.',
    installs: 1190,
    verified: true,
    version: '1.3.0',
    author: 'Git Automation Team',
    tags: ['setting', 'git', 'branching', 'workspace-isolation', 'main-protection'],
    triggers: ['enable git branch setting', 'workspace branch isolation', 'enforce topic branch setting'],
    samplePrompt: 'Configure workspace to require feature branches for all edits, auto-creating claude/ branches.',
    cliCommand: 'npx claude-code-templates@latest --setting workflow-automation/setting-git-auto-branch',
    dependencies: ['git'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### Git Branch Isolation Setting

**\`.clauderc.json\` Configuration:**
\`\`\`json
{
  "git": {
    "preventDirectMainCommit": true,
    "protectedBranches": ["main", "master", "production"],
    "autoCreateBranch": true,
    "branchPrefix": "claude/",
    "requireConventionalCommits": true,
    "signCommits": false,
    "autoPushOnCommit": false
  }
}
\`\`\``
  },
  {
    id: 'setting-ui-design-tokens',
    slug: 'creative-design/setting-ui-design-tokens',
    name: 'Design Tokens Enforcement Setting',
    type: 'setting',
    category: 'creative-design',
    description: 'Enforces WCAG AAA contrast compliance (7:1 ratio), strict spacing mathematics on an 8px grid, anti-slop design rules, and oklch() color space for all UI generation.',
    installs: 1050,
    verified: true,
    version: '1.4.0',
    author: 'UI/UX Design Systems Lab',
    tags: ['setting', 'ui-ux', 'wcag', 'design-tokens', 'color-contrast'],
    triggers: ['enable ui contrast setting', 'design tokens configuration', 'wcag aaa setting'],
    samplePrompt: 'Enable WCAG AAA design token enforcement for all generated frontend views.',
    cliCommand: 'npx claude-code-templates@latest --setting creative-design/setting-ui-design-tokens',
    dependencies: ['tailwindcss'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### Design Tokens Enforcement Setting

**\`.clauderc.json\` Configuration:**
\`\`\`json
{
  "ui": {
    "minContrastRatio": 7.0,
    "colorSpace": "oklch",
    "spacingGrid": 8,
    "enforcePaddingMath": true,
    "allowGradients": true,
    "requireAltText": true,
    "minTouchTarget": 44,
    "fontSizeMin": 14,
    "noInlineStyles": true
  }
}
\`\`\``
  }
];

// ─────────────────────────────────────────────────────────────
// HOOKS – 62 total  (5 curated + remainder generated)
// ─────────────────────────────────────────────────────────────
export const TOP_CURATED_HOOKS: ComponentItem[] = [
  {
    id: 'hook-pre-tool-execution',
    slug: 'productivity/hook-pre-tool-execution',
    name: 'pre-tool-execution Safety Hook',
    type: 'hook',
    category: 'productivity',
    description: 'Intercepts all tool calls before execution to validate argument schemas, enforce safe file path boundaries, check command allowlists, and log operation audits.',
    installs: 1280,
    verified: true,
    featured: true,
    version: '1.4.0',
    author: 'Claude Security Research',
    tags: ['hook', 'lifecycle', 'pre-tool', 'security', 'audit'],
    triggers: ['hook pre-tool', 'tool interceptor', 'register pre-tool hook', 'tool call validator'],
    samplePrompt: 'Register a pre-tool-execution hook to block unauthorized rm -rf commands.',
    cliCommand: 'npx claude-code-templates@latest --hook productivity/hook-pre-tool-execution',
    dependencies: ['claude-code-cli'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### pre-tool-execution Safety Hook

**Hook Configuration (~/.claude/hooks/pre-tool.sh):**
\`\`\`bash
#!/bin/bash
# Receives tool call JSON via stdin
INPUT=$(cat)
TOOL=$(echo "$INPUT" | jq -r '.name')
ARGS=$(echo "$INPUT" | jq -r '.arguments')

# Block dangerous commands
if echo "$ARGS" | grep -qE '(rm -rf /|dd if=|mkfs)'; then
  echo '{"action":"block","reason":"Destructive command blocked"}' >&2
  exit 1
fi

# Audit log
echo "[$(date -u)] PRE_TOOL: $TOOL" >> /tmp/claude-audit.log
exit 0
\`\`\`

**Event:** PreToolUse  
**Timeout:** 5000ms (configurable)  
**Exit 0:** Allow execution | **Exit 1:** Block with reason`
  },
  {
    id: 'hook-on-build-failure',
    slug: 'development/hook-on-build-failure',
    name: 'on-build-failure Auto-Recovery Hook',
    type: 'hook',
    category: 'development',
    description: 'Automatically triggers error inspection and targeted recovery whenever npm run build, tsc, or Vite compilation fails, identifying missing packages or syntax errors.',
    installs: 1140,
    verified: true,
    featured: true,
    version: '1.3.0',
    author: 'Claude Core Engineering',
    tags: ['hook', 'build', 'recovery', 'ci', 'auto-fix'],
    triggers: ['hook on-build-failure', 'build failure interceptor', 'auto recovery hook'],
    samplePrompt: 'Install auto-recovery hook to diagnose and fix build failures automatically.',
    cliCommand: 'npx claude-code-templates@latest --hook development/hook-on-build-failure',
    dependencies: ['typescript', 'vite'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### on-build-failure Auto-Recovery Hook

**Hook Configuration:**
\`\`\`json
{
  "hooks": {
    "PostToolUse": [{
      "matcher": "Bash",
      "hooks": [{
        "type": "command",
        "command": "~/.claude/hooks/build-recovery.sh",
        "trigger": "on_error"
      }]
    }]
  }
}
\`\`\`

**Recovery Script Actions:**
1. Parse stderr for error type (TS, ESLint, missing module)
2. If missing module → run npm install <package>
3. If TypeScript error → call /fix with error context
4. Re-run build to verify fix
5. If still failing → escalate to human with summary`
  },
  {
    id: 'hook-secret-leak-blocker',
    slug: 'security/hook-secret-leak-blocker',
    name: 'secret-leak-blocker DLP Hook',
    type: 'hook',
    category: 'security',
    description: 'Intercepts file writes and git commits to prevent exposing API keys, auth tokens, private keys, or environment secrets through pattern matching and entropy analysis.',
    installs: 1090,
    verified: true,
    version: '1.6.0',
    author: 'Security Research Lab',
    tags: ['hook', 'security', 'secret-leak', 'dlp', 'git-hooks'],
    triggers: ['hook secret leak blocker', 'prevent api key leak hook', 'secret scanner hook', 'dlp hook'],
    samplePrompt: 'Register DLP hook to prevent writing plaintext API keys or secrets to any project files.',
    cliCommand: 'npx claude-code-templates@latest --hook security/hook-secret-leak-blocker',
    dependencies: ['claude-code-cli'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### secret-leak-blocker DLP Hook

**Secret Patterns Detected:**
- AWS: \`AKIA[0-9A-Z]{16}\`
- OpenAI: \`sk-[a-zA-Z0-9]{48}\`
- GitHub: \`ghp_[a-zA-Z0-9]{36}\`
- Stripe: \`sk_(live|test)_[a-zA-Z0-9]{24}\`
- Private keys: \`-----BEGIN (RSA|EC|OPENSSH) PRIVATE KEY-----\`
- High-entropy strings: Shannon entropy > 4.5 bits/char

**Action on Detection:**
1. Block file write with descriptive error
2. Suggest: \`process.env.VARIABLE_NAME\` replacement
3. Add to .gitignore if .env file detected`
  },
  {
    id: 'hook-post-commit-sync',
    slug: 'workflow-automation/hook-post-commit-sync',
    name: 'post-commit-sync Documentation Hook',
    type: 'hook',
    category: 'workflow-automation',
    description: 'Fires after successful git commits to automatically append to CHANGELOG.md, refresh generated API documentation, and trigger CI status notifications.',
    installs: 980,
    verified: true,
    version: '1.1.0',
    author: 'DevOps Automation Guild',
    tags: ['hook', 'git', 'post-commit', 'changelog', 'documentation'],
    triggers: ['hook post commit sync', 'git post commit hook', 'changelog sync hook', 'auto-changelog hook'],
    samplePrompt: 'Install post-commit hook to automatically update CHANGELOG.md after every commit.',
    cliCommand: 'npx claude-code-templates@latest --hook workflow-automation/hook-post-commit-sync',
    dependencies: ['git', 'conventional-changelog'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### post-commit-sync Documentation Hook

**Event:** PostToolUse (git commit)  
**Trigger Condition:** Git Bash tool with "commit" keyword in arguments

**Actions Performed:**
1. Extract commit message and changed files from git log
2. Append entry to CHANGELOG.md in Keep-a-Changelog format
3. Re-generate OpenAPI spec if route files changed
4. Update README.md "Last Updated" timestamp
5. Send Slack/Discord webhook notification (if configured)

**CHANGELOG.md Format:**
\`\`\`markdown
## [Unreleased]
### Added
- feat(auth): add Google OAuth2 support
\`\`\``
  },
  {
    id: 'hook-lint-on-save',
    slug: 'development/hook-lint-on-save',
    name: 'lint-on-save Instant Feedback Hook',
    type: 'hook',
    category: 'development',
    description: 'Triggers lightweight ESLint and TypeScript syntax checks immediately upon file write to surface lint violations and type errors as Claude writes code.',
    installs: 920,
    verified: true,
    version: '1.2.0',
    author: 'Claude Quality Guild',
    tags: ['hook', 'lint', 'linter-on-save', 'type-check', 'instant-feedback'],
    triggers: ['hook lint on save', 'instant lint hook', 'typecheck hook on save', 'lint feedback hook'],
    samplePrompt: 'Register lint-on-save hook to instantly surface TypeScript and ESLint errors after edits.',
    cliCommand: 'npx claude-code-templates@latest --hook development/hook-lint-on-save',
    dependencies: ['eslint', 'typescript'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### lint-on-save Instant Feedback Hook

**Event:** PostToolUse (file Write/Edit tools)  
**Scope:** TypeScript and JavaScript files only

**Commands Run:**
\`\`\`bash
# Fast ESLint check (only modified file)
npx eslint --max-warnings 0 "$FILE"

# TypeScript incremental type check
npx tsc --noEmit --incremental
\`\`\`

**Output Injection:**
Lint and type errors are injected back into Claude's context so it can self-correct in the next iteration without user intervention.`
  }
];

// ─────────────────────────────────────────────────────────────
// PLUGINS – 34 total  (5 curated + remainder generated)
// ─────────────────────────────────────────────────────────────
export const TOP_CURATED_PLUGINS: ComponentItem[] = [
  {
    id: 'plugin-tailwind-v4',
    slug: 'creative-design/plugin-tailwind-v4',
    name: 'Tailwind CSS v4 Intellisense Plugin',
    type: 'plugin',
    category: 'creative-design',
    description: 'Real-time Tailwind CSS v4 class intellisense, @import-based configuration parsing, oklch() color token extraction, and class conflict detection inside Claude Code.',
    installs: 1580,
    verified: true,
    featured: true,
    version: '4.0.1',
    author: 'UI/UX Design Systems Lab',
    tags: ['plugin', 'tailwind', 'css', 'intellisense', 'oklch'],
    triggers: ['tailwind plugin', 'extract tailwind tokens', 'install tailwind v4 plugin'],
    samplePrompt: 'Install Tailwind CSS v4 intellisense plugin for Claude Code IDE support.',
    cliCommand: 'npx claude-code-templates@latest --plugin creative-design/plugin-tailwind-v4',
    dependencies: ['tailwindcss'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### Tailwind CSS v4 Intellisense Plugin

**Features:**
- Real-time class autocomplete with usage frequency ranking
- CSS variable extraction from @theme blocks
- Conflict detection for duplicate or overriding utilities
- Responsive breakpoint preview (sm/md/lg/xl/2xl)
- Dark mode variant highlighting

**Installation:**
\`\`\`bash
npx claude-code-templates@latest --plugin creative-design/plugin-tailwind-v4
\`\`\`

**Adds to Claude Code capabilities:**
- Tailwind class documentation on hover
- Automatic purge list awareness
- Custom plugin token recognition`
  },
  {
    id: 'plugin-prisma-inspector',
    slug: 'database/plugin-prisma-inspector',
    name: 'Prisma Schema Inspector Plugin',
    type: 'plugin',
    category: 'database',
    description: 'Interactive Prisma schema visualizer, relation graph renderer, migration diff inspector, and live database record preview plugin for Claude Code.',
    installs: 1290,
    verified: true,
    featured: true,
    version: '1.6.0',
    author: 'Database Systems Lab',
    tags: ['plugin', 'prisma', 'orm', 'database', 'schema-viz'],
    triggers: ['prisma plugin', 'inspect prisma schema', 'install prisma inspector plugin'],
    samplePrompt: 'Activate Prisma inspector plugin to visualize schema relations and check migration diffs.',
    cliCommand: 'npx claude-code-templates@latest --plugin database/plugin-prisma-inspector',
    dependencies: ['prisma', '@prisma/client'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### Prisma Schema Inspector Plugin

**Capabilities:**
- Entity relationship diagram (ERD) generation from schema.prisma
- Migration diff viewer showing added/removed/modified fields
- Query profiler: identifies missing indexes and slow query patterns
- Seed data previewer with record counts per model

**Mermaid ERD Output Example:**
\`\`\`mermaid
erDiagram
  User ||--o{ Post : "writes"
  Post ||--o{ Comment : "has"
  User { int id PK; string email UK }
\`\`\``
  },
  {
    id: 'plugin-typescript-ast',
    slug: 'development/plugin-typescript-ast',
    name: 'TypeScript AST Analyzer Plugin',
    type: 'plugin',
    category: 'development',
    description: 'Deep TypeScript AST parsing plugin detecting unused exports, circular import chains, dead code paths, and type inference bottlenecks in large codebases.',
    installs: 1150,
    verified: true,
    version: '2.1.0',
    author: 'Claude Core Engineering',
    tags: ['plugin', 'typescript', 'ast', 'dead-code', 'circular-imports'],
    triggers: ['typescript ast plugin', 'find circular dependencies plugin', 'analyze ast structure'],
    samplePrompt: 'Activate TypeScript AST plugin to detect circular dependencies and dead code.',
    cliCommand: 'npx claude-code-templates@latest --plugin development/plugin-typescript-ast',
    dependencies: ['typescript', 'ts-morph', 'dependency-cruiser'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### TypeScript AST Analyzer Plugin

**Analysis Capabilities:**
- **Circular Dependencies**: Full import graph tracing with cycle detection
- **Dead Code**: Unreachable functions, unexported symbols, unused parameters
- **Type Coverage**: Percentage of typed vs any/unknown usage
- **Complexity Metrics**: Per-function cognitive and cyclomatic complexity
- **Bundle Impact**: Estimated contribution to final bundle size

**Output:**
- DOT graph of dependency cycles
- JSON report with per-file metrics
- Inline fix suggestions for detected issues`
  },
  {
    id: 'plugin-docker-compose',
    slug: 'workflow-automation/plugin-docker-compose',
    name: 'Docker Compose Live Monitor Plugin',
    type: 'plugin',
    category: 'workflow-automation',
    description: 'Real-time container health monitor, service topology visualizer, aggregated log streaming, and resource usage tracker for Docker Compose multi-service stacks.',
    installs: 1040,
    verified: true,
    version: '1.4.0',
    author: 'Cloud Native Guild',
    tags: ['plugin', 'docker', 'docker-compose', 'containers', 'monitoring'],
    triggers: ['docker compose plugin', 'monitor docker stack plugin', 'container log monitor'],
    samplePrompt: 'Install Docker Compose live monitor plugin to track container health in real-time.',
    cliCommand: 'npx claude-code-templates@latest --plugin workflow-automation/plugin-docker-compose',
    dependencies: ['docker'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### Docker Compose Live Monitor Plugin

**Dashboard Metrics:**
- Service health status (healthy/unhealthy/starting/exited)
- CPU and memory usage per container with % of limit
- Network I/O bytes in/out per second
- Volume mount status and disk usage
- Recent error log lines with severity classification

**Commands Enabled:**
- \`/docker-logs <service>\` – Tail last 50 lines
- \`/docker-restart <service>\` – Graceful container restart
- \`/docker-stats\` – Current resource snapshot`
  },
  {
    id: 'plugin-owasp-dependency',
    slug: 'security/plugin-owasp-dependency-checker',
    name: 'OWASP Dependency Vulnerability Auditor',
    type: 'plugin',
    category: 'security',
    description: 'Real-time npm/pip/Cargo dependency auditing against the NIST National Vulnerability Database (NVD) during file editing, with CVSS severity filtering and auto-upgrade paths.',
    installs: 990,
    verified: true,
    version: '1.8.0',
    author: 'Security Research Lab',
    tags: ['plugin', 'owasp', 'vulnerabilities', 'security', 'nvd-audit'],
    triggers: ['owasp dependency plugin', 'check vulnerable packages plugin', 'security auditor plugin'],
    samplePrompt: 'Enable OWASP dependency auditor to flag high-severity CVEs in package.json.',
    cliCommand: 'npx claude-code-templates@latest --plugin security/plugin-owasp-dependency-checker',
    dependencies: ['npm-audit', 'snyk'],
    compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
    fullInstructions: `### OWASP Dependency Vulnerability Auditor Plugin

**Vulnerability Data Sources:**
- NIST NVD (National Vulnerability Database)
- GitHub Advisory Database
- Snyk Vulnerability DB (with API key)
- OSV (Open Source Vulnerabilities)

**Severity Levels:**
- 🔴 Critical (CVSS ≥ 9.0) – Block install, require immediate fix
- 🟠 High (CVSS 7.0–8.9) – Warn with upgrade path
- 🟡 Medium (CVSS 4.0–6.9) – Advisory notification
- 🟢 Low (CVSS < 4.0) – Informational

**Auto-Fix:** Runs \`npm audit fix\` for patchable vulnerabilities`
  }
];

// ─────────────────────────────────────────────────────────────
// PROCEDURAL SEED TOPICS  (used for generated remainder)
// ─────────────────────────────────────────────────────────────
const SKILL_TOPICS: {
  name: string;
  slugPrefix: string;
  category: Category;
  tags: string[];
  summary: string;
  triggers: string[];
}[] = [
  { name: 'GraphQL Schema Architect', slugPrefix: 'development/graphql-schema', category: 'development', tags: ['graphql', 'apollo', 'api', 'schema', 'type-defs'], summary: 'Designs resilient GraphQL type definitions, resolver pipelines, N+1 DataLoader batching, and Apollo Federation service composition.', triggers: ['design graphql schema', 'graphql type definitions', 'setup apollo server', 'dataloader batching'] },
  { name: 'Rust Systems Programmer', slugPrefix: 'development/rust-systems', category: 'development', tags: ['rust', 'wasm', 'systems', 'memory', 'concurrency'], summary: 'Zero-cost abstractions, memory-safe concurrency with Tokio async runtime, WebAssembly compilation targets, and high-performance systems code in Rust.', triggers: ['write rust module', 'compile rust to wasm', 'rust async tokio', 'rust zero cost abstractions'] },
  { name: 'Python FastAPI Expert', slugPrefix: 'development/python-fastapi', category: 'development', tags: ['python', 'fastapi', 'asyncio', 'pydantic', 'rest-api'], summary: 'High-speed asynchronous REST APIs with Pydantic v2 validation, dependency injection, OAuth2 JWT authentication, and automatic OpenAPI generation.', triggers: ['create fastapi endpoint', 'pydantic v2 validation', 'async python router', 'fastapi dependency injection'] },
  { name: 'Go Microservices Engineer', slugPrefix: 'development/go-microservices', category: 'development', tags: ['golang', 'concurrency', 'grpc', 'microservices', 'goroutines'], summary: 'Lightweight gRPC and REST microservices in Go with graceful shutdowns, goroutine worker pools, structured zerolog logging, and Prometheus metrics.', triggers: ['build go microservice', 'golang grpc server', 'goroutine worker pool', 'golang channel patterns'] },
  { name: 'Kubernetes Helm Deployer', slugPrefix: 'workflow-automation/k8s-helm', category: 'workflow-automation', tags: ['kubernetes', 'helm', 'cloud', 'devops', 'hpa'], summary: 'Cloud-native Kubernetes Helm charts with resource quotas, horizontal pod autoscaling (HPA), Ingress with TLS, and rolling deployment strategies.', triggers: ['create helm chart', 'kubernetes deployment yaml', 'configure hpa autoscaler', 'k8s ingress tls'] },
  { name: 'Cloudflare Workers Edge Developer', slugPrefix: 'web-development/cloudflare-workers', category: 'web-development', tags: ['edge', 'serverless', 'workers', 'kv', 'd1-database'], summary: 'Sub-millisecond edge computing using Cloudflare Workers, KV namespaces, Durable Objects state machines, and D1 serverless SQLite.', triggers: ['deploy cloudflare worker', 'cloudflare kv storage', 'edge function router', 'durable objects state'] },
  { name: 'Drizzle ORM TypeScript Expert', slugPrefix: 'database/drizzle-orm', category: 'database', tags: ['drizzle', 'sql', 'typescript', 'postgres', 'migrations'], summary: 'Type-safe SQL schema definitions, automated Drizzle migrations, complex relational queries, and zero-overhead PostgreSQL operations.', triggers: ['drizzle schema design', 'generate drizzle migration', 'drizzle relational query', 'drizzle typescript schema'] },
  { name: 'Next.js 15 App Router Pro', slugPrefix: 'web-development/nextjs-15-app', category: 'web-development', tags: ['nextjs', 'react-19', 'ssr', 'app-router', 'server-actions'], summary: 'React 19 Server Components, Server Actions with optimistic updates, parallel and intercepting routes, and ISR revalidation strategies.', triggers: ['nextjs 15 app router', 'react server action', 'nextjs parallel routes', 'isr revalidation tags'] },
  { name: 'Astro Content & SSG Expert', slugPrefix: 'web-development/astro-content', category: 'web-development', tags: ['astro', 'ssg', 'performance', 'content-collections', 'zero-js'], summary: 'Zero-JS static generation with Astro Content Collections, Zod schema validation, View Transitions API, and multi-framework component islands.', triggers: ['astro content collection', 'astro island component', 'static site astro', 'zod schema astro'] },
  { name: 'Svelte 5 Runes Developer', slugPrefix: 'web-development/svelte-5', category: 'web-development', tags: ['svelte', 'runes', 'reactivity', 'sveltekit', 'signals'], summary: 'Fine-grained universal reactivity with Svelte 5 runes ($state, $derived, $effect), snippet templates, and SvelteKit load functions.', triggers: ['svelte 5 runes', 'svelte state reactivity', 'sveltekit server load', 'svelte snippet template'] },
  { name: 'Vue 3 Composition API Master', slugPrefix: 'web-development/vue-3-composition', category: 'web-development', tags: ['vue', 'pinia', 'vite', 'typescript', 'composables'], summary: 'Modular Vue 3 architecture with Script Setup, typed custom composables, Pinia stores, and defineProps/defineEmits type validation.', triggers: ['vue 3 script setup', 'custom vue composable', 'pinia store setup', 'vue typescript emits'] },
  { name: 'LangChain AI Agent Builder', slugPrefix: 'ai-research/langchain-agents', category: 'ai-research', tags: ['langchain', 'llm', 'agents', 'vector-db', 'tool-calling'], summary: 'Multi-agent orchestration with LCEL runnable pipelines, persistent conversation memory, ReAct loop agents, and structured tool-calling.', triggers: ['build langchain agent', 'lcel pipeline', 'langchain tool calling', 'langchain memory'] },
  { name: 'LlamaIndex RAG Pipeline', slugPrefix: 'ai-research/llamaindex-rag', category: 'ai-research', tags: ['rag', 'embeddings', 'vector-db', 'hybrid-search', 'reranking'], summary: 'Enterprise document chunking, semantic vector indexing, hybrid BM25+vector search, and cross-encoder re-ranking for production RAG.', triggers: ['setup llamaindex rag', 'hybrid search retrieval', 'document chunking', 'reranker pipeline'] },
  { name: 'Stripe Payments & Billing', slugPrefix: 'business-marketing/stripe-billing', category: 'business-marketing', tags: ['stripe', 'payments', 'subscriptions', 'webhooks', 'checkout'], summary: 'Stripe Checkout sessions, multi-tier subscription lifecycle, idempotent webhook event handling, customer portal, and usage-based billing.', triggers: ['setup stripe webhook', 'stripe subscription', 'verify stripe signature', 'stripe customer portal'] },
  { name: 'Auth0 & JWT Security Expert', slugPrefix: 'security/auth0-jwt', category: 'security', tags: ['auth0', 'oauth', 'jwt', 'rbac', 'jwks'], summary: 'RS256 JWT verification with JWKS key rotation, Auth0 RBAC policy enforcement, refresh token exchange, and silent authentication.', triggers: ['verify auth0 jwt', 'jwks validation', 'auth0 rbac guard', 'oauth refresh token'] },
  { name: 'OAuth2 Multi-Provider Auth', slugPrefix: 'security/oauth2-pkce', category: 'security', tags: ['oauth2', 'pkce', 'google', 'github', 'session'], summary: 'Authorization code grant with PKCE for Google, GitHub, Discord, and Microsoft with encrypted httpOnly session cookies.', triggers: ['oauth2 pkce login', 'google oauth', 'github oauth flow', 'oauth state csrf'] },
  { name: 'Playwright E2E Testing Master', slugPrefix: 'development/playwright-e2e', category: 'development', tags: ['playwright', 'e2e', 'visual-regression', 'ci', 'fixtures'], summary: 'Multi-browser E2E testing with visual regression snapshots, network request mocking, authentication fixtures, and Playwright Component Testing.', triggers: ['write playwright e2e', 'playwright snapshot', 'mock api playwright', 'playwright fixture'] },
  { name: 'Cypress Component Testing', slugPrefix: 'development/cypress-testing', category: 'development', tags: ['cypress', 'component-testing', 'accessibility', 'a11y', 'intercept'], summary: 'Isolated component mounting, axe-core accessibility auditing, network request intercepting, and CI-optimized test reporting.', triggers: ['cypress component test', 'cypress mount react', 'cypress axe check', 'cypress intercept network'] },
  { name: 'AWS CDK Infrastructure', slugPrefix: 'workflow-automation/aws-cdk', category: 'workflow-automation', tags: ['aws', 'cdk', 'iac', 'lambda', 'dynamodb'], summary: 'TypeScript Infrastructure as Code with AWS Lambda, API Gateway v2, DynamoDB, S3 with versioning, and CloudFront CDN distributions.', triggers: ['aws cdk stack', 'deploy lambda cdk', 'cdk dynamodb table', 'cdk cloudfront'] },
  { name: 'GCP Cloud Run Serverless', slugPrefix: 'workflow-automation/gcp-cloud-run', category: 'workflow-automation', tags: ['gcp', 'cloud-run', 'docker', 'artifact-registry', 'cloud-build'], summary: 'Containerized serverless on Cloud Run with Artifact Registry, Secret Manager binding, Cloud Build CI, and custom domain mapping.', triggers: ['deploy cloud run', 'gcp cloud build', 'cloud run secrets', 'artifact registry push'] },
  { name: 'WCAG 2.2 Accessibility Auditor', slugPrefix: 'creative-design/wcag-accessibility', category: 'creative-design', tags: ['a11y', 'wcag', 'aria', 'screen-reader', 'focus-management'], summary: 'WCAG 2.2 Level AAA compliance auditing, ARIA live region patterns, focus trap for modals/dialogs, and keyboard navigation flow verification.', triggers: ['audit wcag', 'fix aria attributes', 'modal focus trap', 'screen reader test'] },
  { name: 'Node.js Memory Leak Hunter', slugPrefix: 'development/memory-leak-hunter', category: 'development', tags: ['v8', 'heap-snapshot', 'garbage-collection', 'memory', 'profiling'], summary: 'V8 heap snapshot analysis, unclosed stream detection, EventEmitter listener leak remediation, and Node.js process memory profiling.', triggers: ['find memory leak', 'v8 heap snapshot', 'memory profiling node', 'eventlistener cleanup'] },
  { name: 'SQL Query Performance Optimizer', slugPrefix: 'database/sql-optimizer', category: 'database', tags: ['sql', 'indexes', 'explain-analyze', 'postgres', 'query-plan'], summary: 'EXPLAIN (ANALYZE, BUFFERS, FORMAT JSON) query plan interpretation, composite B-tree/GIN/BRIN index design, CTE refactoring, and connection pool tuning.', triggers: ['optimize sql query', 'explain analyze plan', 'add postgres index', 'refactor slow join'] },
  { name: 'Regex & Parser Engineering', slugPrefix: 'productivity/regex-parsers', category: 'productivity', tags: ['regex', 'ast', 'parser', 'lexer', 'compiler'], summary: 'Safe backtracking-free regular expressions, PEG parser generators, handwritten recursive-descent parsers, and tokenizer state machines.', triggers: ['write safe regex', 'regex without catastrophic backtracking', 'parse custom language', 'lexer tokenizer'] },
  { name: 'Redis Cache & Pub/Sub Expert', slugPrefix: 'database/redis-cache', category: 'database', tags: ['redis', 'caching', 'pubsub', 'rate-limiting', 'redlock'], summary: 'Redis cache-aside and write-through patterns, Redlock distributed locking, token-bucket rate limiting, and Pub/Sub event broadcasting with ioredis.', triggers: ['setup redis caching', 'redis rate limiter', 'redlock distributed lock', 'redis pubsub'] },
  { name: 'Apache Kafka Streaming', slugPrefix: 'development/kafka-streaming', category: 'development', tags: ['kafka', 'streaming', 'consumer-group', 'dlq', 'avro'], summary: 'Partition-key ordered event publishing, consumer group rebalance handlers, dead-letter queue (DLQ) patterns, and Avro schema registry integration.', triggers: ['kafka producer consumer', 'kafka consumer group', 'dead letter queue kafka', 'avro schema registry'] },
  { name: 'Supabase RLS & Auth Pro', slugPrefix: 'database/supabase-rls', category: 'database', tags: ['supabase', 'rls', 'postgres', 'policies', 'realtime'], summary: 'Zero-trust PostgreSQL Row Level Security policies with auth.uid() tenancy isolation, real-time subscription filters, and Edge Function patterns.', triggers: ['supabase rls policy', 'postgres rls tenant', 'supabase realtime', 'supabase edge function'] },
  { name: 'Elasticsearch Full-Text Search', slugPrefix: 'database/elasticsearch', category: 'database', tags: ['elasticsearch', 'fulltext', 'aggregations', 'knn', 'mapping'], summary: 'Custom analyzers, edge n-gram tokenizers, multi-match fuzzy queries, k-NN vector search, nested aggregations, and ILM policies.', triggers: ['elasticsearch index mapping', 'fulltext fuzzy query', 'knn vector search', 'elasticsearch aggregations'] },
  { name: 'Figma Design Token Sync', slugPrefix: 'creative-design/figma-tokens', category: 'creative-design', tags: ['figma', 'design-tokens', 'tokens-studio', 'css-vars', 'style-dictionary'], summary: 'Automated Figma variable extraction into CSS custom properties, Tailwind theme extensions, and Style Dictionary multi-platform transforms.', triggers: ['sync figma tokens', 'export figma variables', 'figma to tailwind', 'style dictionary tokens'] },
  { name: 'Turborepo Monorepo Architect', slugPrefix: 'development/turborepo', category: 'development', tags: ['turborepo', 'monorepo', 'pnpm-workspaces', 'remote-cache', 'nx'], summary: 'High-efficiency Turborepo pipelines with Vercel remote cache, pnpm workspaces, shared UI packages, and zero-drift build dependency graphs.', triggers: ['setup turborepo', 'pnpm workspace', 'turbo remote cache', 'monorepo package sharing'] },
  { name: 'OpenAPI & Swagger Spec Generator', slugPrefix: 'development/openapi-spec', category: 'development', tags: ['openapi', 'swagger', 'api-docs', 'zod-to-schema', 'redoc'], summary: 'OpenAPI 3.1 spec generation from TypeScript types and Zod schemas, Swagger UI/Redoc hosting, and API versioning strategies.', triggers: ['generate openapi spec', 'swagger docs', 'zod to openapi', 'api documentation generator'] },
  { name: 'PWA Offline & Service Worker', slugPrefix: 'web-development/pwa-offline', category: 'web-development', tags: ['pwa', 'service-worker', 'workbox', 'indexeddb', 'background-sync'], summary: 'Workbox-powered service worker caching (stale-while-revalidate, cache-first), IndexedDB mutation queues, and Background Sync API integration.', triggers: ['setup pwa service worker', 'workbox caching', 'indexeddb offline sync', 'background sync pwa'] },
  { name: 'Module Federation Micro-Frontend', slugPrefix: 'web-development/module-federation', category: 'web-development', tags: ['module-federation', 'vite', 'webpack', 'micro-apps', 'shared-deps'], summary: 'Vite/Webpack Module Federation for decoupled React/Vue host and remote containers with shared singleton dependency deduplication.', triggers: ['module federation setup', 'micro frontend', 'vite remote plugin', 'shared singleton modules'] },
  { name: 'D3.js Data Visualization', slugPrefix: 'creative-design/d3-visualization', category: 'creative-design', tags: ['d3', 'svg', 'charts', 'data-viz', 'transitions'], summary: 'Custom D3.js SVG visualizations, smooth scale transitions, zoomable tree hierarchies, force-directed graphs, and responsive chart patterns.', triggers: ['d3 chart', 'd3 svg viz', 'd3 force graph', 'd3 zoomable hierarchy'] },
  { name: 'Tailwind v4 Dynamic Themes', slugPrefix: 'creative-design/tailwind-v4-themes', category: 'creative-design', tags: ['tailwind', 'css-variables', 'oklch', 'theming', 'dark-mode'], summary: 'Modern @import "tailwindcss" CSS-first configuration with oklch() color spaces, dynamic contrast ratios, and theme switching utilities.', triggers: ['tailwind v4 theme', 'oklch color', 'css variable theme', 'tailwind dark mode v4'] },
  { name: 'Sentry APM Performance Tracing', slugPrefix: 'sentry/sentry-apm', category: 'sentry', tags: ['sentry', 'apm', 'tracing', 'profiling', 'spans'], summary: 'Distributed transaction tracing across frontend and backend, database span instrumentation, profiling integration, and custom metrics.', triggers: ['sentry performance', 'sentry span tracing', 'sentry profiling', 'custom sentry metric'] },
  { name: 'Semantic Release Automation', slugPrefix: 'workflow-automation/semantic-release', category: 'workflow-automation', tags: ['semver', 'git-tags', 'github-actions', 'release', 'conventional-commits'], summary: 'Automated SemVer calculation from Conventional Commits, CHANGELOG.md generation, GitHub Release creation, and npm publish.', triggers: ['semantic release', 'auto semver', 'github release automation', 'npm publish workflow'] },
  { name: 'Markdown Docs Publisher', slugPrefix: 'document-processing/markdown-docs', category: 'document-processing', tags: ['markdown', 'docusaurus', 'mdx', 'content', 'frontmatter'], summary: 'Automated documentation site compilation with MDX, syntax-highlighted code blocks, ToC extraction, cross-link validation, and Algolia search.', triggers: ['docusaurus site', 'mdx docs', 'markdown toc', 'documentation frontmatter'] },
  { name: 'CSV to PostgreSQL ETL', slugPrefix: 'document-processing/csv-postgres-etl', category: 'document-processing', tags: ['csv', 'etl', 'postgres', 'streaming', 'copy-command'], summary: 'Streaming CSV parsing with type inference, PostgreSQL COPY bulk inserts, malformed row quarantine, and transform validation pipelines.', triggers: ['csv to postgres', 'streaming csv import', 'bulk insert copy', 'csv type inference'] },
  { name: 'JSON Schema & Zod Validator', slugPrefix: 'productivity/json-schema', category: 'productivity', tags: ['json-schema', 'zod', 'ajv', 'validation', 'typescript'], summary: 'Draft 2020-12 JSON Schema validation, fast Ajv compilation with dynamic type inference, Zod runtime validators, and detailed error reports.', triggers: ['json schema validate', 'zod schema', 'ajv validator', 'runtime type checking'] },
];

// ─────────────────────────────────────────────────────────────
// CATALOG GENERATOR
// ─────────────────────────────────────────────────────────────
export function generateFullCatalog(): ComponentItem[] {
  const result: ComponentItem[] = [];
  const existingIds = new Set<string>();

  const pushUnique = (rawItem: ComponentItem) => {
    if (existingIds.has(rawItem.id)) return;
    existingIds.add(rawItem.id);

    const author = rawItem.author || (rawItem.verified ? 'Anthropic / Verified Publisher' : 'Claude Ecosystem Contributor');
    const deps = rawItem.dependencies && rawItem.dependencies.length > 0
      ? rawItem.dependencies
      : [(rawItem.tags?.[0]) || 'typescript', 'claude-code-cli'];
    const compat = rawItem.compatibility && rawItem.compatibility.length > 0
      ? rawItem.compatibility
      : ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'];

    const item: ComponentItem = { ...rawItem, author, dependencies: deps, compatibility: compat };

    if (item.type === 'skill' && !item.skillDirectory) {
      item.skillDirectory = generateDefaultSkillDirectory(item);
    }
    result.push(item);
  };

  // 1. Insert all curated flagship items
  TOP_CURATED_COMPONENTS.forEach(pushUnique);
  TOP_CURATED_AGENTS.forEach(pushUnique);
  TOP_CURATED_COMMANDS.forEach(pushUnique);
  TOP_CURATED_SETTINGS.forEach(pushUnique);
  TOP_CURATED_HOOKS.forEach(pushUnique);
  TOP_CURATED_MCPS.forEach(pushUnique);
  TOP_CURATED_PLUGINS.forEach(pushUnique);

  const TARGET: Record<ComponentType, number> = {
    skill: 872,
    agent: 422,
    command: 286,
    setting: 71,
    hook: 62,
    mcp: 101,
    plugin: 34,
  };

  const types: ComponentType[] = ['skill', 'agent', 'command', 'setting', 'hook', 'mcp', 'plugin'];

  for (const type of types) {
    const current = result.filter(r => r.type === type).length;
    const needed = TARGET[type] - current;

    for (let i = 1; i <= needed; i++) {
      const ti = (i - 1) % SKILL_TOPICS.length;
      const topic = SKILL_TOPICS[ti];
      const cycle = Math.floor((i - 1) / SKILL_TOPICS.length) + 1;
      const cycleSuffix = cycle > 1 ? `-v${cycle}` : '';
      const uniqueSuffix = `-${i}`;

      let name = '';
      let slug = '';
      let category: Category = topic.category;
      let description = '';
      let tags = [...topic.tags];
      let triggers: string[] = [];
      let samplePrompt = '';
      let fullInstructions = '';
      const tagWord = topic.tags[i % topic.tags.length];

      switch (type) {
        case 'skill':
          name = cycle > 1 ? `${topic.name} (${tagWord} Specialization)` : topic.name;
          slug = `${topic.slugPrefix}${cycleSuffix}${uniqueSuffix}`;
          description = topic.summary;
          triggers = [...topic.triggers, `apply ${topic.name.toLowerCase()}`, `use ${slug.split('/')[1]} skill`];
          samplePrompt = `Apply ${topic.name} best practices to analyze and improve this codebase.`;
          fullInstructions = `### ${name}\n\n${topic.summary}\n\n**Execution Steps:**\n1. Analyze existing code structure and identify improvement areas.\n2. Apply ${tags.slice(0, 3).join(', ')} patterns with strict type safety.\n3. Validate edge cases and ensure zero regressions.\n4. Run verification checks and format compliance.\n\n**Tags:** ${tags.join(', ')}`;
          break;

        case 'agent':
          name = `Autonomous ${topic.name} Agent${cycle > 1 ? ` v${cycle}` : ''}`;
          slug = `${topic.slugPrefix}-agent${cycleSuffix}${uniqueSuffix}`;
          description = `Autonomous sub-agent that orchestrates ${topic.name} workflows across multiple files with self-healing error correction and structured output reporting.`;
          triggers = [`spawn ${topic.name.toLowerCase()} agent`, `run autonomous ${tags[0]} agent`, `delegate to ${slug.split('/')[1]}`];
          samplePrompt = `Autonomously implement, test, and verify ${topic.name} features across all matching project files.`;
          fullInstructions = `### ${name}\n\n**Agent Pipeline:**\n1. Decompose task into subtasks with dependency graph.\n2. Execute ${tags.slice(0, 3).join(', ')} operations in parallel.\n3. Self-healing: catch errors, retry up to 3 times with adjusted strategy.\n4. Generate structured summary report of all changes.`;
          break;

        case 'command': {
          const cmdName = tags[0].toLowerCase().replace(/[^a-z0-9]/g, '-');
          name = `/${cmdName}${cycle > 1 ? `-${cycle}` : ''}`;
          slug = `workflow-automation/cmd-${cmdName}${cycleSuffix}${uniqueSuffix}`;
          category = 'workflow-automation';
          description = `Slash command shortcut to trigger ${topic.name} validation, analysis, or automation pipeline directly in Claude Code CLI.`;
          triggers = [name, `run ${name}`, `execute ${name} command`];
          samplePrompt = `${name} --target src/ --strict`;
          fullInstructions = `### ${name} Command\n\n**Usage:**\n\`\`\`bash\n${name} [flags] [target]\n\`\`\`\n\n**Flags:**\n- \`--strict\` – Zero-warning enforcement\n- \`--dry-run\` – Preview without writing\n- \`--target <path>\` – Scope to directory\n\nExecutes the ${topic.name} pipeline automatically.`;
          break;
        }

        case 'setting':
          name = `${topic.name} Workspace Setting${cycle > 1 ? ` v${cycle}` : ''}`;
          slug = `productivity/setting-${tags[0]}${cycleSuffix}${uniqueSuffix}`;
          category = 'productivity';
          description = `Workspace preference rule configuring ${topic.name} behavior, compiler limits, and code quality thresholds for Claude Code sessions.`;
          triggers = [`configure ${tags[0]} setting`, `enable ${topic.name.toLowerCase()} rules`];
          samplePrompt = `Configure workspace settings to enforce ${topic.name} standards across all files.`;
          fullInstructions = `### ${name}\n\n**\`.clauderc.json\`:**\n\`\`\`json\n{\n  "${tags[0]}": {\n    "enabled": true,\n    "strictMode": true,\n    "version": "${cycle}.0",\n    "tags": ${JSON.stringify(tags)}\n  }\n}\n\`\`\``;
          break;

        case 'hook':
          name = `on-${tags[0]}-event Lifecycle Hook${cycle > 1 ? ` v${cycle}` : ''}`;
          slug = `productivity/hook-${tags[0]}${cycleSuffix}${uniqueSuffix}`;
          category = 'productivity';
          description = `Lifecycle hook intercepting Claude Code tool calls for ${topic.name} to validate parameters and enforce policy.`;
          triggers = [`hook ${tags[0]} lifecycle`, `intercept ${tags[0]} tool call`, `register ${topic.name.toLowerCase()} hook`];
          samplePrompt = `Register lifecycle hook to validate ${topic.name} tool parameters before execution.`;
          fullInstructions = `### ${name}\n\n**Event:** PreToolUse / PostToolUse\n**Scope:** ${tags.slice(0, 3).join(', ')} tool calls\n\n**Hook Script:**\n\`\`\`bash\n#!/bin/bash\n# Validate ${tags[0]} tool parameters\nINPUT=$(cat)\nif echo "$INPUT" | grep -q "dangerous_pattern"; then\n  exit 1\nfi\necho "Hook passed" >> /tmp/claude-hooks.log\n\`\`\``;
          break;

        case 'mcp': {
          const mcpCat: Category = ['database', 'sentry', 'workflow-automation'].includes(topic.category) ? topic.category as Category : 'workflow-automation';
          name = `${topic.name} MCP Server${cycle > 1 ? ` v${cycle}` : ''}`;
          slug = `${mcpCat}/${tags[0]}-mcp${cycleSuffix}${uniqueSuffix}`;
          category = mcpCat;
          description = `Model Context Protocol server exposing ${topic.name} tools, resources, and prompt templates to Claude Code and Claude Desktop.`;
          triggers = [`${tags[0]} mcp server`, `use ${topic.name.toLowerCase()} mcp`, `connect ${tags[0]} to claude`];
          samplePrompt = `Use the ${topic.name} MCP server to query and interact with the live service.`;
          fullInstructions = `### ${name}\n\n**Configuration:**\n\`\`\`json\n{\n  "mcpServers": {\n    "${tags[0]}": {\n      "command": "npx",\n      "args": ["-y", "@mcp/${tags[0]}-server"],\n      "env": { "API_KEY": "<your-key>" }\n    }\n  }\n}\n\`\`\`\n\n**Tools:** query_${tags[0]}, list_${tags[0]}_resources, create_${tags[0]}_item`;
          break;
        }

        case 'plugin':
          name = `${topic.name} Companion Plugin${cycle > 1 ? ` v${cycle}` : ''}`;
          slug = `development/plugin-${tags[0]}${cycleSuffix}${uniqueSuffix}`;
          category = 'development';
          description = `Claude Code extension plugin adding real-time ${topic.name} diagnostics, intellisense, and AST-level analysis.`;
          triggers = [`install ${tags[0]} plugin`, `enable ${topic.name.toLowerCase()} plugin`, `activate ${slug.split('/')[1]}`];
          samplePrompt = `Install and activate the ${topic.name} companion plugin for enhanced code assistance.`;
          fullInstructions = `### ${name}\n\nExtends Claude Code with real-time diagnostics for ${topic.name}.\n\n**Capabilities:**\n- Syntax checking and hover documentation\n- AST-level refactoring suggestions\n- Build configuration validation\n\n**Install:**\n\`\`\`bash\nnpx claude-code-templates@latest --plugin ${slug}\n\`\`\``;
          break;
      }

      const installCount = Math.max(120, Math.floor(3000 / (cycle * 1.4 + (i % 30) * 0.3)));

      pushUnique({
        id: `${type}-${slug.replace(/[^a-zA-Z0-9]/g, '-')}`,
        slug,
        name,
        type,
        category,
        description,
        fullInstructions,
        samplePrompt,
        installs: installCount,
        verified: i % 3 === 0,
        featured: i % 19 === 0,
        version: `${cycle}.${(i % 8) + 1}.${i % 5}`,
        tags,
        triggers,
        cliCommand: `npx claude-code-templates@latest --${type} ${slug}`,
        dependencies: [tags[0] || 'typescript', 'claude-code-cli'],
        compatibility: ['Claude 3.7 Sonnet', 'Claude Code CLI v1.0+'],
      });
    }
  }

  return result;
}
