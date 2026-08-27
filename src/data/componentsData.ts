import { ComponentItem, FeaturedPartner, StackPreset, Category } from '../types';
import { generateFullCatalog, TOP_CURATED_COMPONENTS } from './catalogGenerator';

// Generate the complete catalog database across all component types
export const FULL_CATALOG_COMPONENTS: ComponentItem[] = generateFullCatalog();

// Initial components export
export const INITIAL_COMPONENTS: ComponentItem[] = FULL_CATALOG_COMPONENTS;

// Default 25 components highlighted in the prompt
export const PROMPT_DEFAULT_STACK_SLUGS: string[] = [
  'creative-design/frontend-design',
  'development/code-reviewer',
  'web-development/senior-frontend',
  'development/senior-backend',
  'creative-design/ui-ux-pro-max',
  'development/senior-architect',
  'productivity/skill-creator',
  'creative-design/ui-design-system',
  'web-development/react-best-practices',
  'web-development/senior-fullstack',
  'business-marketing/seo-optimizer',
  'development/webapp-testing',
  'productivity/brainstorming',
  'creative-design/canvas-design',
  'ai-research/senior-prompt-engineer',
  'security/senior-security',
  'creative-design/mobile-design',
  'productivity/git-commit-helper',
  'document-processing/docx',
  'development/clean-code',
  'document-processing/pdf-processing-pro',
  'productivity/file-organizer',
  'document-processing/pptx',
  'productivity/mcp-builder',
  'sentry/sentry-find-bugs'
];

// Categories list for filtering
export const CATEGORIES_LIST: { id: Category; label: string }[] = [
  { id: 'all', label: 'All Categories' },
  { id: 'creative-design', label: 'Creative & Design' },
  { id: 'development', label: 'Development' },
  { id: 'web-development', label: 'Web Development' },
  { id: 'productivity', label: 'Productivity' },
  { id: 'business-marketing', label: 'Business & Marketing' },
  { id: 'ai-research', label: 'AI & Research' },
  { id: 'security', label: 'Security' },
  { id: 'document-processing', label: 'Document Processing' },
  { id: 'database', label: 'Database & Backend' },
  { id: 'workflow-automation', label: 'Workflow & Automation' },
  { id: 'sentry', label: 'Sentry & Monitoring' }
];

// Featured Integration Partners (Prompt banner items)
export const FEATURED_PARTNERS: FeaturedPartner[] = [
  {
    id: 'bright-data',
    name: 'Bright Data',
    tagline: 'Complete Web Data Template',
    category: 'Web Data & Scraping',
    badge: 'Featured MCP',
    url: 'https://brightdata.com',
    iconName: 'Globe',
    highlightColor: 'from-blue-600 to-indigo-700'
  },
  {
    id: 'claudekit',
    name: 'ClaudeKit',
    tagline: 'AI Agents & Skills',
    category: 'AI Agents & Skills',
    badge: 'Popular Kit',
    url: 'https://claudekit.dev',
    iconName: 'Sparkles',
    highlightColor: 'from-purple-600 to-pink-600'
  },
  {
    id: 'braingrid',
    name: 'BrainGrid',
    tagline: 'Plan. Build. Verify. Repeat.',
    category: 'Planning & Productivity',
    badge: 'Trending Tool',
    url: 'https://braingrid.ai',
    iconName: 'Cpu',
    highlightColor: 'from-amber-600 to-orange-600'
  }
];

// Stack Presets for Quick Setup
export const STACK_PRESETS: StackPreset[] = [
  {
    id: 'top-25-suite',
    name: 'Top 25 Full-Stack Suite',
    description: 'The complete 25-component developer ecosystem covering Frontend, Backend, Architecture, Security, QA, and MCPs.',
    badge: '25 Items',
    itemSlugs: PROMPT_DEFAULT_STACK_SLUGS
  },
  {
    id: 'frontend-creative',
    name: 'Frontend & UI/UX Specialist',
    description: 'Frontend Design, Ui Ux Pro Max, UI Design System, React Best Practices, Senior Frontend, Canvas Design, and Mobile Design.',
    badge: '7 Items',
    itemSlugs: [
      'creative-design/frontend-design',
      'creative-design/ui-ux-pro-max',
      'creative-design/ui-design-system',
      'web-development/react-best-practices',
      'web-development/senior-frontend',
      'creative-design/canvas-design',
      'creative-design/mobile-design'
    ]
  },
  {
    id: 'backend-security',
    name: 'Backend & Security Hardening',
    description: 'Senior Backend, Senior Architect, Senior Security, Clean Code, Webapp Testing, and PostgreSQL MCP.',
    badge: '6 Items',
    itemSlugs: [
      'development/senior-backend',
      'development/senior-architect',
      'security/senior-security',
      'development/clean-code',
      'development/webapp-testing',
      'database/postgres-mcp'
    ]
  },
  {
    id: 'mcp-automation',
    name: 'MCP & Agent Powerhouse',
    description: 'Autonomous Fullstack Builder, Code Reviewer Agent, GitHub MCP, PostgreSQL MCP, and Brave Search MCP.',
    badge: '5 Items',
    itemSlugs: [
      'web-development/fullstack-autonomous-builder',
      'development/autonomous-code-reviewer',
      'database/postgres-mcp',
      'workflow-automation/github-mcp',
      'ai-research/brave-search-mcp'
    ]
  },
  {
    id: 'qa-monitoring',
    name: 'QA, Testing & Sentry Ops',
    description: 'Webapp Testing, Code Reviewer, Security Auditor Agent, and Sentry Find Bugs for continuous reliability.',
    badge: '4 Items',
    itemSlugs: [
      'development/webapp-testing',
      'development/code-reviewer',
      'security/security-auditor-agent',
      'sentry/sentry-find-bugs'
    ]
  },
  {
    id: 'ai-prompt-engineering',
    name: 'AI & Prompt Engineering Pro',
    description: 'Senior Prompt Engineer, Skill Creator, MCP Builder, and Brainstorming framework.',
    badge: '4 Items',
    itemSlugs: [
      'ai-research/senior-prompt-engineer',
      'productivity/skill-creator',
      'productivity/mcp-builder',
      'productivity/brainstorming'
    ]
  },
  {
    id: 'docs-productivity',
    name: 'Document & Knowledge Suite',
    description: 'Docx, Pptx, Pdf Processing Pro, File Organizer, and Git Commit Helper for automated docs management.',
    badge: '5 Items',
    itemSlugs: [
      'document-processing/docx',
      'document-processing/pptx',
      'document-processing/pdf-processing-pro',
      'productivity/file-organizer',
      'productivity/git-commit-helper'
    ]
  }
];
