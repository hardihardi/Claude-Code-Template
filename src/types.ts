export type ComponentType =
  | 'skill'
  | 'agent'
  | 'command'
  | 'setting'
  | 'hook'
  | 'mcp'
  | 'plugin';

export type ThemeMode = 'light' | 'dark' | 'system';

export type Category =
  | 'all'
  | 'creative-design'
  | 'development'
  | 'web-development'
  | 'business-marketing'
  | 'document-processing'
  | 'productivity'
  | 'security'
  | 'ai-research'
  | 'workflow-automation'
  | 'database'
  | 'sentry';

export interface ComponentItem {
  [key: string]: any;
  id: string;
  slug: string; // e.g. "development/code-reviewer"
  name: string;
  type: ComponentType;
  category: string;
  description: string;
  installs: number; // e.g. 3564
  verified?: boolean;
  featured?: boolean;
  version?: string;
  author?: string;
  abstract?: string;
  date?: string;
  organization?: string;
  tags: string[];
  triggers?: string[];
  fullInstructions?: string;
  samplePrompt?: string;
  cliCommand?: string;
  dependencies?: string[];
  compatibility?: string[];
  trendingScore?: number;
  trendingRank?: number;
  isTrending?: boolean;
  views?: number;
  copies?: number;
}

export interface FeaturedPartner {
  id: string;
  name: string;
  tagline: string;
  category: string;
  badge: string;
  url: string;
  iconName: string;
  highlightColor: string;
}

export interface StackPreset {
  id: string;
  name: string;
  description: string;
  itemSlugs: string[];
  badge?: string;
}
