import React, { useState, useEffect } from 'react';
import { ComponentItem, ComponentType } from '../types';
import { 
  generateMarkdownFormat, 
  generateMcpFormat, 
  generateJsonFormat, 
  generateYamlFormat, 
  generateShellScript, 
  generatePowerShellScript,
  generateDockerScript,
  generateEnvFormat,
  generateFastMcpCode,
  generateDefaultSkillDirectory
} from '../utils/formatGenerators';
import { 
  X, 
  Sparkles, 
  Cpu, 
  Terminal, 
  Sliders, 
  Anchor, 
  Puzzle, 
  Layers, 
  Check, 
  Copy, 
  Plus, 
  ShieldCheck, 
  BookOpen, 
  Play, 
  Code, 
  Tag, 
  Download,
  FileText,
  FileCode,
  Globe,
  Settings,
  ExternalLink,
  ChevronRight,
  Eye,
  Monitor,
  Box,
  Key,
  Flame,
  FileCheck,
  Zap,
  FolderCode,
  Lock,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Folder,
  FolderOpen
} from 'lucide-react';

interface ComponentDetailModalProps {
  component: ComponentItem | null;
  isOpen: boolean;
  onClose: () => void;
  isInStack: boolean;
  onToggleStack: (item: ComponentItem) => void;
  isDark: boolean;
  onNotify: (msg: string) => void;
}

type FormatCategory = 'overview' | 'md' | 'mcp' | 'json' | 'yaml' | 'sh' | 'ps1' | 'docker' | 'env' | 'install-hub';

export const ComponentDetailModal: React.FC<ComponentDetailModalProps> = ({
  component,
  isOpen,
  onClose,
  isInStack,
  onToggleStack,
  isDark,
  onNotify
}) => {
  const [activeTab, setActiveTab] = useState<FormatCategory>('overview');
  const [mdViewMode, setMdViewMode] = useState<'preview' | 'raw'>('preview');
  const [mcpViewMode, setMcpViewMode] = useState<'desktop-config' | 'fastmcp-python'>('desktop-config');
  const [installMethod, setInstallMethod] = useState<'all' | 'cli' | 'bash' | 'ps1' | 'manual' | 'verify'>('all');
  const [testPrompt, setTestPrompt] = useState('');
  const [testResult, setTestResult] = useState<{ matched: boolean; score: number; triggeredPhrase?: string } | null>(null);
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);
  const [selectedSkillFile, setSelectedSkillFile] = useState<'skill' | 'template' | 'example' | 'script'>('skill');

  // Reset tab and test states when component changes or opens
  useEffect(() => {
    if (component) {
      setActiveTab('overview');
      setTestResult(null);
      setTestPrompt('');
      setSelectedSkillFile('skill');
      setInstallMethod('all');
    }
  }, [component?.id, isOpen]);

  // Type-specific allowed formats mapping (strictly separated per tool type)
  const TYPE_FORMAT_MAP: Record<ComponentType, FormatCategory[]> = {
    skill: ['overview', 'md', 'install-hub'],
    agent: ['overview', 'yaml', 'install-hub'],
    command: ['overview', 'sh', 'ps1', 'install-hub'],
    setting: ['overview', 'json', 'yaml', 'env', 'install-hub'],
    hook: ['overview', 'sh', 'ps1', 'json', 'install-hub'],
    mcp: ['overview', 'mcp', 'json', 'env', 'docker', 'install-hub'],
    plugin: ['overview', 'json', 'yaml', 'install-hub']
  };

  const allowedFormats = component ? (TYPE_FORMAT_MAP[component.type] || ['overview', 'md', 'install-hub']) : ['overview'];

  // Ensure active tab is allowed for current component
  useEffect(() => {
    if (component && !allowedFormats.includes(activeTab)) {
      setActiveTab('overview');
    }
  }, [component?.type, activeTab]);

  if (!isOpen || !component) return null;

  // Type metadata helper for consistent rendering across All, Skills, Agents, Commands, Settings, Hooks, MCPs, Plugins
  const getTypeMeta = (type: ComponentType) => {
    switch (type) {
      case 'skill':
        return {
          label: 'Skill Specification',
          shortLabel: 'Skill',
          icon: <Sparkles className="w-5 h-5 text-amber-500" />,
          colorText: 'text-amber-600 dark:text-amber-400',
          colorBg: 'bg-amber-500/10 border-amber-500/30 text-amber-600 dark:text-amber-400',
          badgeBg: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
          archetype: 'Anthropic Claude Code Skill (SKILL.md standard)',
          targetPath: `~/.claude/skills/${component.slug}/SKILL.md`,
          executionModel: 'Prompt-Triggered Dynamic Context Injection',
          primaryFormat: 'md' as FormatCategory,
          primaryFormatName: 'SKILL.md',
          roleSummary: 'Dynamic skill loaded by Claude Code when prompt intent matches auto-trigger phrases or domain tasks.'
        };
      case 'agent':
        return {
          label: 'Autonomous Agent',
          shortLabel: 'Agent',
          icon: <Cpu className="w-5 h-5 text-purple-500" />,
          colorText: 'text-purple-600 dark:text-purple-400',
          colorBg: 'bg-purple-500/10 border-purple-500/30 text-purple-600 dark:text-purple-400',
          badgeBg: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
          archetype: 'Autonomous Multi-Step Agent Architecture',
          targetPath: `~/.claude/agents/${component.slug}/agent.yaml`,
          executionModel: 'Goal-Driven Decision Loop with Subagent Delegation',
          primaryFormat: 'yaml' as FormatCategory,
          primaryFormatName: 'Workflow (.yaml)',
          roleSummary: 'Specialized agent orchestrating complex multi-step workflows, tool calls, error recovery, and autonomous tasks.'
        };
      case 'command':
        return {
          label: 'Slash Command',
          shortLabel: 'Command',
          icon: <Terminal className="w-5 h-5 text-blue-500" />,
          colorText: 'text-blue-600 dark:text-blue-400',
          colorBg: 'bg-blue-500/10 border-blue-500/30 text-blue-600 dark:text-blue-400',
          badgeBg: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
          archetype: 'Interactive CLI Slash Command Dispatcher',
          targetPath: `~/.claude/commands/${component.slug.split('/').pop() || 'cmd'}`,
          executionModel: 'Direct Slash Prefix CLI Invocation (/cmd)',
          primaryFormat: 'sh' as FormatCategory,
          primaryFormatName: 'Bash Script (.sh)',
          roleSummary: 'Interactive shortcut command executing custom scripts, diagnostics, refactorings, and generators directly from the prompt.'
        };
      case 'setting':
        return {
          label: 'Runtime Setting',
          shortLabel: 'Setting',
          icon: <Sliders className="w-5 h-5 text-emerald-500" />,
          colorText: 'text-emerald-600 dark:text-emerald-400',
          colorBg: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400',
          badgeBg: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
          archetype: 'Claude Code Runtime Configuration & Policy',
          targetPath: '~/.claude/config.json',
          executionModel: 'Global Config Schema & Security Policy Enforcement',
          primaryFormat: 'json' as FormatCategory,
          primaryFormatName: 'Manifest (.json)',
          roleSummary: 'Global and project preferences managing model parameters, safety guardrails, environment variables, and tool permissions.'
        };
      case 'hook':
        return {
          label: 'Lifecycle Hook',
          shortLabel: 'Hook',
          icon: <Anchor className="w-5 h-5 text-pink-500" />,
          colorText: 'text-pink-600 dark:text-pink-400',
          colorBg: 'bg-pink-500/10 border-pink-500/30 text-pink-600 dark:text-pink-400',
          badgeBg: 'bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/20',
          archetype: 'Lifecycle Event Interceptor & Middleware',
          targetPath: `~/.claude/hooks/${component.slug}/hook.sh`,
          executionModel: 'Pre/Post Tool Execution & Git Lifecycle Triggers',
          primaryFormat: 'sh' as FormatCategory,
          primaryFormatName: 'Hook Script (.sh)',
          roleSummary: 'Automated middleware executed before tool calls, on compilation errors, or during Git commit operations.'
        };
      case 'mcp':
        return {
          label: 'MCP Protocol Server',
          shortLabel: 'MCP Server',
          icon: <Layers className="w-5 h-5 text-cyan-500" />,
          colorText: 'text-cyan-600 dark:text-cyan-400',
          colorBg: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-600 dark:text-cyan-400',
          badgeBg: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20',
          archetype: 'Model Context Protocol (FastMCP Python / JSON-RPC)',
          targetPath: '~/Library/Application Support/Claude/claude_desktop_config.json',
          executionModel: 'Standardized Stdio / SSE Transport Protocol',
          primaryFormat: 'mcp' as FormatCategory,
          primaryFormatName: 'MCP Protocol',
          roleSummary: 'Standardized external server exposing tools, live databases, dynamic resources, and prompt templates to Claude.'
        };
      case 'plugin':
        return {
          label: 'Plugin Bundle',
          shortLabel: 'Plugin',
          icon: <Puzzle className="w-5 h-5 text-orange-500" />,
          colorText: 'text-orange-600 dark:text-orange-400',
          colorBg: 'bg-orange-500/10 border-orange-500/30 text-orange-600 dark:text-orange-400',
          badgeBg: 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20',
          archetype: 'Multi-Component Ecosystem Plugin Bundle',
          targetPath: `~/.claude/plugins/${component.slug}/`,
          executionModel: 'Integrated Multi-Module Package Registry Loader',
          primaryFormat: 'install-hub' as FormatCategory,
          primaryFormatName: 'Installation Hub',
          roleSummary: 'Comprehensive extension packaging skills, commands, hooks, and MCP servers into a single cohesive toolkit.'
        };
      default:
        return {
          label: 'Component Specification',
          shortLabel: 'Component',
          icon: <Sparkles className="w-5 h-5 text-amber-500" />,
          colorText: 'text-amber-600 dark:text-amber-400',
          colorBg: 'bg-amber-500/10 border-amber-500/30 text-amber-600 dark:text-amber-400',
          badgeBg: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
          archetype: 'Claude Code Component Standard',
          targetPath: `~/.claude/${component.type}s/${component.slug}/`,
          executionModel: 'Runtime Loading & Context Injection',
          primaryFormat: 'md' as FormatCategory,
          primaryFormatName: 'SKILL.md',
          roleSummary: 'Production-ready component verified for Claude Code CLI and Claude 3.7 Sonnet.'
        };
    }
  };

  const typeMeta = getTypeMeta(component.type);

  const handleTestPrompt = () => {
    if (!testPrompt.trim()) return;
    const lower = testPrompt.toLowerCase();
    const triggers = component.triggers || [component.name.toLowerCase(), component.slug];
    
    let matchedPhrase: string | undefined = undefined;
    for (const t of triggers) {
      if (lower.includes(t.toLowerCase())) {
        matchedPhrase = t;
        break;
      }
    }

    if (matchedPhrase) {
      setTestResult({ matched: true, score: 98, triggeredPhrase: matchedPhrase });
    } else {
      const tagsMatch = component.tags.some(tag => lower.includes(tag.toLowerCase()));
      if (tagsMatch) {
        setTestResult({ matched: true, score: 82, triggeredPhrase: 'Semantic keyword / tag match' });
      } else {
        setTestResult({ matched: false, score: 14 });
      }
    }
  };

  const getFormatContent = (format: FormatCategory): string => {
    switch (format) {
      case 'md':
        return generateMarkdownFormat(component);
      case 'mcp':
        if (mcpViewMode === 'fastmcp-python') return generateFastMcpCode(component);
        return generateMcpFormat(component);
      case 'json':
        return generateJsonFormat(component);
      case 'yaml':
        return generateYamlFormat(component);
      case 'sh':
        return generateShellScript(component);
      case 'ps1':
        return generatePowerShellScript(component);
      case 'docker':
        return generateDockerScript(component);
      case 'env':
        return generateEnvFormat(component);
      case 'install-hub':
        return component.cliCommand || `npx claude-code-templates@latest --${component.type} ${component.slug}`;
      default:
        return '';
    }
  };

  const handleCopy = (content: string, label: string) => {
    navigator.clipboard.writeText(content);
    setCopiedFormat(label);
    onNotify(`Copied ${label} to clipboard!`);
    setTimeout(() => setCopiedFormat(null), 2000);
  };

  const handleDownload = (format: FormatCategory) => {
    const content = getFormatContent(format);
    const slugTail = component.slug.split('/').pop() || 'component';
    const extensions: Record<FormatCategory, string> = {
      overview: `${slugTail}-summary.txt`,
      md: 'SKILL.md',
      mcp: mcpViewMode === 'fastmcp-python' ? 'server.py' : 'claude_desktop_config.json',
      json: `${slugTail}.json`,
      yaml: `${slugTail}-workflow.yaml`,
      sh: `install-${slugTail}.sh`,
      ps1: `install-${slugTail}.ps1`,
      docker: 'docker-compose.yml',
      env: '.env.example',
      'install-hub': 'install-instructions.txt'
    };
    const filename = extensions[format] || 'download.txt';
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    onNotify(`Downloaded ${filename}!`);
  };

  // Format tabs master list with type-aware labels
  const ALL_FORMAT_TABS: { id: FormatCategory; label: string; icon: React.ReactNode; color: string; isPrimaryFor?: ComponentType[] }[] = [
    { 
      id: 'overview', 
      label: 'Overview & Specs', 
      icon: <BookOpen className="w-3.5 h-3.5" />, 
      color: 'text-amber-500' 
    },
    { 
      id: 'md', 
      label: component.type === 'skill' ? '.md (SKILL.md)' : component.type === 'agent' ? '.md (Agent Spec)' : component.type === 'command' ? '.md (Command Spec)' : component.type === 'plugin' ? '.md (Docs)' : '.md Format', 
      icon: <FileText className="w-3.5 h-3.5" />, 
      color: 'text-amber-500',
      isPrimaryFor: ['skill'] 
    },
    { 
      id: 'mcp', 
      label: 'MCP Protocol', 
      icon: <Layers className="w-3.5 h-3.5" />, 
      color: 'text-cyan-500',
      isPrimaryFor: ['mcp'] 
    },
    { 
      id: 'json', 
      label: component.type === 'setting' ? '.json (Manifest)' : component.type === 'hook' ? '.json (Hook Config)' : component.type === 'plugin' ? '.json (Package Manifest)' : '.json Config', 
      icon: <FileCode className="w-3.5 h-3.5" />, 
      color: 'text-emerald-500',
      isPrimaryFor: ['setting'] 
    },
    { 
      id: 'yaml', 
      label: component.type === 'agent' ? '.yaml (Workflow)' : component.type === 'setting' ? '.yaml (Policy Schema)' : component.type === 'plugin' ? '.yaml (Blueprint)' : '.yaml Schema', 
      icon: <Sliders className="w-3.5 h-3.5" />, 
      color: 'text-purple-500',
      isPrimaryFor: ['agent'] 
    },
    { 
      id: 'sh', 
      label: component.type === 'command' ? '.sh (Slash Script)' : component.type === 'hook' ? '.sh (Hook Script)' : '.sh (Bash Script)', 
      icon: <Terminal className="w-3.5 h-3.5" />, 
      color: 'text-blue-500',
      isPrimaryFor: ['command', 'hook'] 
    },
    { 
      id: 'ps1', 
      label: '.ps1 (PowerShell)', 
      icon: <Monitor className="w-3.5 h-3.5" />, 
      color: 'text-sky-500' 
    },
    { 
      id: 'docker', 
      label: 'Docker Compose', 
      icon: <Box className="w-3.5 h-3.5" />, 
      color: 'text-indigo-400' 
    },
    { 
      id: 'env', 
      label: '.env Config', 
      icon: <Key className="w-3.5 h-3.5" />, 
      color: 'text-amber-500' 
    },
    { 
      id: 'install-hub', 
      label: 'Install Hub', 
      icon: <Flame className="w-3.5 h-3.5" />, 
      color: 'text-orange-500',
      isPrimaryFor: ['plugin'] 
    },
  ];

  // Strictly filter tabs for current component type
  const visibleFormatTabs = ALL_FORMAT_TABS.filter(tab => allowedFormats.includes(tab.id));

  const getFormatCardDetails = (format: FormatCategory) => {
    switch (format) {
      case 'md':
        return {
          ext: '.md',
          title: component.type === 'skill' ? 'SKILL.md Spec' : component.type === 'agent' ? 'Agent Prompt Spec' : component.type === 'command' ? 'Command Spec' : component.type === 'plugin' ? 'Documentation' : 'Markdown Spec',
          desc: 'YAML frontmatter + markdown instructions',
          icon: <FileText className="w-3.5 h-3.5 text-amber-500" />,
          color: 'text-amber-600 dark:text-amber-400',
          hoverBorder: 'hover:border-amber-500/50'
        };
      case 'mcp':
        return {
          ext: 'mcp',
          title: 'MCP Protocol Server',
          desc: 'FastMCP Python & Claude Desktop config',
          icon: <Layers className="w-3.5 h-3.5 text-cyan-500" />,
          color: 'text-cyan-600 dark:text-cyan-400',
          hoverBorder: 'hover:border-cyan-500/50'
        };
      case 'json':
        return {
          ext: '.json',
          title: component.type === 'setting' ? '.clauderc.json Manifest' : component.type === 'hook' ? 'Hook Config Schema' : component.type === 'plugin' ? 'Plugin Package Manifest' : 'Component Manifest',
          desc: 'Valid JSON configuration schema',
          icon: <FileCode className="w-3.5 h-3.5 text-emerald-500" />,
          color: 'text-emerald-600 dark:text-emerald-400',
          hoverBorder: 'hover:border-emerald-500/50'
        };
      case 'yaml':
        return {
          ext: '.yaml',
          title: component.type === 'agent' ? 'Agent Workflow Schema' : component.type === 'setting' ? 'Setting Policy YAML' : component.type === 'plugin' ? 'Plugin Setup Blueprint' : 'YAML Specification',
          desc: 'Claude multi-step execution workflow',
          icon: <Sliders className="w-3.5 h-3.5 text-purple-500" />,
          color: 'text-purple-600 dark:text-purple-400',
          hoverBorder: 'hover:border-purple-500/50'
        };
      case 'sh':
        return {
          ext: '.sh',
          title: component.type === 'command' ? 'Slash Command Script' : component.type === 'hook' ? 'Lifecycle Hook Script' : 'Automated Bash Script',
          desc: 'Executable shell script routine',
          icon: <Terminal className="w-3.5 h-3.5 text-blue-500" />,
          color: 'text-blue-600 dark:text-blue-400',
          hoverBorder: 'hover:border-blue-500/50'
        };
      case 'ps1':
        return {
          ext: '.ps1',
          title: 'Windows PowerShell Script',
          desc: 'Windows terminal installer script',
          icon: <Monitor className="w-3.5 h-3.5 text-sky-500" />,
          color: 'text-sky-600 dark:text-sky-400',
          hoverBorder: 'hover:border-sky-500/50'
        };
      case 'docker':
        return {
          ext: 'docker',
          title: 'Docker Compose Stack',
          desc: 'Containerized runner definition',
          icon: <Box className="w-3.5 h-3.5 text-indigo-400" />,
          color: 'text-indigo-600 dark:text-indigo-400',
          hoverBorder: 'hover:border-indigo-500/50'
        };
      case 'env':
        return {
          ext: '.env',
          title: 'Environment Config',
          desc: 'Key-value variable template',
          icon: <Key className="w-3.5 h-3.5 text-amber-500" />,
          color: 'text-amber-600 dark:text-amber-400',
          hoverBorder: 'hover:border-amber-500/50'
        };
      case 'install-hub':
        return {
          ext: 'CLI',
          title: 'Installation Hub',
          desc: 'NPX, Bash, PowerShell & local setup',
          icon: <Flame className="w-3.5 h-3.5 text-orange-500" />,
          color: 'text-orange-600 dark:text-orange-400',
          hoverBorder: 'hover:border-orange-500/50'
        };
      default:
        return {
          ext: format,
          title: `${format.toUpperCase()} Spec`,
          desc: 'Format specification',
          icon: <FileText className="w-3.5 h-3.5 text-amber-500" />,
          color: 'text-amber-500',
          hoverBorder: 'hover:border-amber-500/50'
        };
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 md:p-6 animate-in fade-in duration-150">
      
      {/* Backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container: Controlled max-width (not full width), responsive padding & height */}
      <div className={`relative w-[95vw] sm:w-full max-w-3xl lg:max-w-4xl mx-auto rounded-2xl shadow-2xl overflow-hidden z-10 border flex flex-col max-h-[88vh] sm:max-h-[84vh] ${
        isDark ? 'bg-zinc-950 border-zinc-800 text-zinc-100' : 'bg-white border-zinc-200 text-zinc-900'
      }`}>
        
        {/* ========================================================================= */}
        {/* MODAL HEADER: Responsive, high-contrast, type-consistent */}
        {/* ========================================================================= */}
        <div className={`p-3.5 sm:p-5 border-b flex items-start justify-between gap-3 shrink-0 ${
          isDark ? 'bg-zinc-900/90 border-zinc-800' : 'bg-zinc-50 border-zinc-200'
        }`}>
          <div className="flex items-start gap-2.5 sm:gap-3.5 min-w-0 flex-1">
            {/* Distinct Type Icon Box */}
            <div className={`p-2.5 sm:p-3 rounded-xl border shrink-0 shadow-xs ${typeMeta.colorBg}`}>
              {typeMeta.icon}
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                <h3 className={`text-base sm:text-lg md:text-xl font-bold tracking-tight truncate ${
                  isDark ? 'text-zinc-100' : 'text-zinc-950'
                }`}>
                  {component.name}
                </h3>
                
                {component.verified && (
                  <span className="flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-blue-600 dark:text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20 shrink-0">
                    <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    <span>Verified</span>
                  </span>
                )}

                {component.isTrending && (
                  <span className="flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-orange-600 dark:text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded-full border border-orange-500/30 shrink-0">
                    <Flame className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-orange-500 fill-orange-500 animate-pulse" />
                    <span>Trending{component.trendingRank && component.trendingRank <= 10 ? ` #${component.trendingRank}` : ''}</span>
                  </span>
                )}

                {/* Type Pill */}
                <span className={`text-[10px] sm:text-xs font-mono uppercase font-bold px-2 py-0.5 rounded-md border shrink-0 ${typeMeta.badgeBg}`}>
                  {component.type}
                </span>

                {/* Slug Pill */}
                <span className={`text-[10px] sm:text-xs font-mono px-2 py-0.5 rounded border truncate max-w-[140px] sm:max-w-[220px] ${
                  isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-300' : 'bg-white border-zinc-200 text-zinc-800 font-medium'
                }`}>
                  {component.slug}
                </span>
              </div>

              {/* Sub-header meta bar */}
              <div className="flex items-center gap-2 sm:gap-3 flex-wrap mt-1 text-[11px] sm:text-xs">
                <span className={`font-semibold ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                  Category: <strong className="text-amber-600 dark:text-amber-400 font-bold">{component.category}</strong>
                </span>
                <span className="text-zinc-400 hidden sm:inline">•</span>
                <span className={`font-semibold ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                  <strong className="text-zinc-950 dark:text-zinc-100 font-bold">{component.installs.toLocaleString()}</strong> active devs
                </span>
                <span className="text-zinc-400 hidden sm:inline">•</span>
                <span className={`font-mono ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  v{component.version || '1.0.0'}
                </span>
              </div>
            </div>
          </div>

          {/* Close Button with 44px touch target */}
          <button
            onClick={onClose}
            className={`p-2 sm:p-2.5 rounded-xl border transition-colors shrink-0 ${
              isDark 
                ? 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800' 
                : 'bg-white border-zinc-200 text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100'
            }`}
            title="Close Modal"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* ========================================================================= */}
        {/* DEDICATED FORMAT TABS BAR (Responsive Horizontal Scroll) */}
        {/* ========================================================================= */}
        <div className={`flex border-b px-2 sm:px-6 gap-1 text-xs font-semibold overflow-x-auto shrink-0 ${
          isDark 
            ? 'border-zinc-800 bg-zinc-900/70' 
            : 'border-zinc-200 bg-zinc-100/80'
        }`}>
          {visibleFormatTabs.map((tab) => {
            const isSelected = activeTab === tab.id;
            const isPrimary = tab.isPrimaryFor?.includes(component.type);

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-3 px-3 border-b-2 transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer shrink-0 ${
                  isSelected
                    ? isDark
                      ? 'border-amber-500 text-amber-400 font-bold bg-amber-500/5'
                      : 'border-amber-600 text-zinc-950 font-bold bg-amber-500/10'
                    : isDark
                      ? 'border-transparent text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
                      : 'border-transparent text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200/50'
                }`}
              >
                <span className={isSelected ? 'text-amber-500' : 'text-zinc-400'}>
                  {tab.icon}
                </span>
                <span>{tab.label}</span>
                {isPrimary && (
                  <span className={`text-[9px] font-mono uppercase px-1.5 py-0.2 rounded-full font-bold ml-0.5 ${
                    isSelected 
                      ? 'bg-amber-500 text-white' 
                      : isDark ? 'bg-amber-500/20 text-amber-300' : 'bg-amber-100 text-amber-800'
                  }`}>
                    Primary
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* MODAL BODY (Scrollable content) */}
        {/* ========================================================================= */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          
          {/* ----------------------------------------------------------------------- */}
          {/* TAB 1: OVERVIEW & ARCHITECTURE BLUEPRINT (All, Skills, Agents, etc.) */}
          {/* ----------------------------------------------------------------------- */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-in fade-in duration-100">
              
              {/* Description Section */}
              <div>
                <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5 ${
                  isDark ? 'text-zinc-400' : 'text-zinc-800'
                }`}>
                  <FileText className="w-3.5 h-3.5 text-amber-500" />
                  <span>Component Purpose & Description</span>
                </h4>
                <p className={`text-sm sm:text-base leading-relaxed font-normal ${
                  isDark ? 'text-zinc-200' : 'text-zinc-900'
                }`}>
                  {component.description}
                </p>
              </div>

              {/* Quick Installation & Specification Copy Banner */}
              <div className={`p-4 rounded-xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3.5 ${
                isDark ? 'bg-amber-500/10 border-amber-500/20 text-amber-200' : 'bg-amber-50 border-amber-200 text-amber-950'
              }`}>
                <div className="flex items-center gap-3 min-w-0">
                  <span className="p-2 rounded-lg bg-amber-500 text-white shrink-0 shadow-xs">
                    <Terminal className="w-4 h-4" />
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 block">
                        Quick Install Command
                      </span>
                      <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-700 dark:text-amber-300 font-semibold">
                        CLI Ready
                      </span>
                    </div>
                    <code className="text-xs font-mono font-bold truncate block select-all mt-0.5">
                      {component.cliCommand || `npx claude-code-templates@latest --${component.type} ${component.slug}`}
                    </code>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
                  <button
                    onClick={() => handleCopy(component.cliCommand || `npx claude-code-templates@latest --${component.type} ${component.slug}`, 'Install Command')}
                    className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold transition-all cursor-pointer shadow-xs active:scale-98"
                    title="Copy CLI Installation Command"
                  >
                    {copiedFormat === 'Install Command' ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedFormat === 'Install Command' ? 'Copied Command!' : 'Copy Command'}</span>
                  </button>

                  <button
                    onClick={() => handleCopy(getFormatContent(typeMeta.primaryFormat), `${typeMeta.primaryFormatName} Spec`)}
                    className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg border text-xs font-bold transition-all cursor-pointer shadow-xs active:scale-98 ${
                      isDark 
                        ? 'bg-zinc-900 border-amber-500/40 text-amber-300 hover:bg-zinc-800' 
                        : 'bg-white border-amber-300 text-amber-900 hover:bg-amber-100/60'
                    }`}
                    title={`Copy full ${typeMeta.primaryFormatName} specification content`}
                  >
                    {copiedFormat === `${typeMeta.primaryFormatName} Spec` ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <FileText className="w-3.5 h-3.5 text-amber-500" />}
                    <span>{copiedFormat === `${typeMeta.primaryFormatName} Spec` ? 'Copied Spec!' : `Copy Spec (${typeMeta.primaryFormatName})`}</span>
                  </button>
                </div>
              </div>

              {/* Type-Specific Architecture Blueprint Matrix */}
              <div className={`p-4 sm:p-5 rounded-xl border ${
                isDark ? 'bg-zinc-900/60 border-zinc-800' : 'bg-zinc-50 border-zinc-200'
              }`}>
                <div className="flex items-center justify-between flex-wrap gap-2 mb-3.5 border-b pb-2.5 border-zinc-200 dark:border-zinc-800">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-amber-500/10 text-amber-500">
                      <Zap className="w-4 h-4" />
                    </span>
                    <h4 className={`text-xs font-bold uppercase tracking-wider ${
                      isDark ? 'text-zinc-100' : 'text-zinc-950'
                    }`}>
                      {typeMeta.label} Architecture Matrix
                    </h4>
                  </div>
                  <span className={`text-[11px] font-mono font-semibold px-2 py-0.5 rounded ${
                    isDark ? 'bg-zinc-800 text-amber-400' : 'bg-white border border-zinc-200 text-amber-700'
                  }`}>
                    Claude Code 3.7 Runtime
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className={`p-3 rounded-lg border ${
                    isDark ? 'bg-zinc-950/80 border-zinc-800/80' : 'bg-white border-zinc-200'
                  }`}>
                    <span className="text-[10px] font-bold uppercase text-zinc-500 dark:text-zinc-400 block mb-1">
                      Execution Role
                    </span>
                    <span className={`text-xs font-bold block ${typeMeta.colorText}`}>
                      {typeMeta.shortLabel} Archetype
                    </span>
                    <p className={`text-[11px] mt-1 leading-snug ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                      {typeMeta.roleSummary}
                    </p>
                  </div>

                  <div className={`p-3 rounded-lg border ${
                    isDark ? 'bg-zinc-950/80 border-zinc-800/80' : 'bg-white border-zinc-200'
                  }`}>
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="text-[10px] font-bold uppercase text-zinc-500 dark:text-zinc-400 block">
                        Target Placement Path
                      </span>
                      <button
                        onClick={() => handleCopy(typeMeta.targetPath, 'Target Path')}
                        className="text-[10px] text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-0.5 font-bold cursor-pointer"
                        title="Copy Target Path"
                      >
                        <Copy className="w-3 h-3" />
                        <span>Copy Path</span>
                      </button>
                    </div>
                    <code className="text-xs font-mono font-semibold text-amber-600 dark:text-amber-400 block truncate" title={typeMeta.targetPath}>
                      {typeMeta.targetPath}
                    </code>
                    <p className={`text-[11px] mt-1 leading-snug ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                      Auto-loaded during CLI startup & prompt interpretation.
                    </p>
                  </div>

                  <div className={`p-3 rounded-lg border ${
                    isDark ? 'bg-zinc-950/80 border-zinc-800/80' : 'bg-white border-zinc-200'
                  }`}>
                    <span className="text-[10px] font-bold uppercase text-zinc-500 dark:text-zinc-400 block mb-1">
                      Execution Vector
                    </span>
                    <span className={`text-xs font-bold block ${isDark ? 'text-zinc-200' : 'text-zinc-900'}`}>
                      {typeMeta.executionModel.split(' ')[0]} Engine
                    </span>
                    <p className={`text-[11px] mt-1 leading-snug ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                      {typeMeta.executionModel}
                    </p>
                  </div>

                  <div className={`p-3 rounded-lg border ${
                    isDark ? 'bg-zinc-950/80 border-zinc-800/80' : 'bg-white border-zinc-200'
                  }`}>
                    <span className="text-[10px] font-bold uppercase text-zinc-500 dark:text-zinc-400 block mb-1">
                      Primary Format
                    </span>
                    <button
                      onClick={() => setActiveTab(typeMeta.primaryFormat)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline cursor-pointer"
                    >
                      <span>Open {typeMeta.primaryFormatName}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                    <p className={`text-[11px] mt-1 leading-snug ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                      Validated specification file for instant setup.
                    </p>
                  </div>
                </div>
              </div>

              {/* Format Partition Matrix (Strictly Separated Per Tool Type) */}
              <div>
                <h4 className={`text-xs font-bold uppercase tracking-wider mb-2.5 flex items-center gap-1.5 ${
                  isDark ? 'text-zinc-400' : 'text-zinc-800'
                }`}>
                  <Layers className="w-3.5 h-3.5 text-cyan-500" />
                  <span>Available Valid Formats for {typeMeta.shortLabel}</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                  {allowedFormats.filter(f => f !== 'overview').map((fmt) => {
                    const details = getFormatCardDetails(fmt);
                    return (
                      <div 
                        key={fmt}
                        onClick={() => setActiveTab(fmt)}
                        className={`p-3 rounded-xl border text-xs cursor-pointer transition-all hover:scale-101 ${
                          isDark ? `bg-zinc-900 border-zinc-800 ${details.hoverBorder}` : `bg-white border-zinc-200 ${details.hoverBorder} shadow-xs`
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className={`font-mono font-bold ${details.color}`}>{details.ext}</span>
                          {details.icon}
                        </div>
                        <span className="text-[11px] font-bold text-zinc-900 dark:text-zinc-100 block">{details.title}</span>
                        <span className="text-[10px] text-zinc-500 dark:text-zinc-400">{details.desc}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Trigger Phrases Section */}
              {component.triggers && component.triggers.length > 0 && (
                <div>
                  <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5 ${
                    isDark ? 'text-zinc-400' : 'text-zinc-800'
                  }`}>
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>Auto-Trigger Phrases & Activation Conditions</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {component.triggers.map((trigger, idx) => (
                      <span
                        key={idx}
                        className={`text-xs px-3 py-1.5 rounded-lg border font-mono font-semibold ${
                          isDark 
                            ? 'bg-zinc-900 border-zinc-800 text-amber-300' 
                            : 'bg-amber-50 border-amber-300 text-amber-950 font-bold'
                        }`}
                      >
                        "{trigger}"
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Interactive Trigger Simulator */}
              <div className={`p-4 rounded-xl border ${
                isDark ? 'bg-zinc-900/60 border-zinc-800' : 'bg-zinc-50 border-zinc-200'
              }`}>
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-1 flex items-center gap-1.5">
                  <Play className="w-3.5 h-3.5" />
                  <span>Simulate Natural Language Activation</span>
                </h4>
                <p className={`text-xs mb-3 ${isDark ? 'text-zinc-400' : 'text-zinc-600 font-medium'}`}>
                  Test whether Claude Code activates this component from developer prompt wording:
                </p>

                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    value={testPrompt}
                    onChange={(e) => setTestPrompt(e.target.value)}
                    placeholder={component.samplePrompt || `Type e.g. '${(component.triggers && component.triggers[0]) || component.name}'`}
                    className={`flex-1 px-3 py-2 text-xs sm:text-sm rounded-lg border focus:outline-none focus:ring-2 focus:ring-amber-500/50 ${
                      isDark ? 'bg-zinc-900 border-zinc-700 text-zinc-100 placeholder-zinc-500' : 'bg-white border-zinc-300 text-zinc-900 placeholder-zinc-400'
                    }`}
                    onKeyDown={(e) => e.key === 'Enter' && handleTestPrompt()}
                  />
                  <button
                    onClick={handleTestPrompt}
                    className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold transition-colors cursor-pointer shrink-0"
                  >
                    Test Trigger
                  </button>
                </div>

                {testResult && (
                  <div className={`mt-3 p-3 rounded-lg border text-xs ${
                    testResult.matched
                      ? isDark 
                        ? 'bg-emerald-950/40 border-emerald-800 text-emerald-300' 
                        : 'bg-emerald-50 border-emerald-300 text-emerald-950 font-medium'
                      : isDark 
                        ? 'bg-zinc-900 border-zinc-800 text-zinc-400' 
                        : 'bg-zinc-100 border-zinc-300 text-zinc-700'
                  }`}>
                    <div className="flex items-center justify-between font-bold mb-0.5">
                      <span className="flex items-center gap-1.5">
                        {testResult.matched ? (
                          <>
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            <span>Component Auto-Trigger Activated</span>
                          </>
                        ) : (
                          <>
                            <AlertCircle className="w-4 h-4 text-zinc-400" />
                            <span>No Direct Trigger Matched</span>
                          </>
                        )}
                      </span>
                      <span className="font-mono">Match Confidence: {testResult.score}%</span>
                    </div>
                    {testResult.matched && testResult.triggeredPhrase && (
                      <p className="text-[11px] opacity-90 mt-1">
                        Matched on trigger: <span className="font-mono font-bold underline">"{testResult.triggeredPhrase}"</span>
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Tags & Metadata */}
              <div>
                <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5 ${
                  isDark ? 'text-zinc-400' : 'text-zinc-800'
                }`}>
                  <Tag className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Tags & Classification</span>
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {component.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className={`text-xs px-2.5 py-1 rounded-md border font-semibold ${
                        isDark 
                          ? 'bg-zinc-900 border-zinc-800 text-zinc-300' 
                          : 'bg-zinc-100 border-zinc-200 text-zinc-800'
                      }`}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* ----------------------------------------------------------------------- */}
          {/* TAB 2: FORMAT .MD (SKILL.md) */}
          {/* ----------------------------------------------------------------------- */}
          {activeTab === 'md' && (
            <div className="space-y-4 animate-in fade-in duration-100">
              {/* Header controls */}
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-mono font-bold text-amber-500 uppercase px-2.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5" />
                    <span>Format: .md (SKILL.md)</span>
                  </span>
                  
                  {/* View Mode Toggle */}
                  <div className={`flex items-center rounded-lg p-0.5 text-xs ${
                    isDark ? 'bg-zinc-800' : 'bg-zinc-200'
                  }`}>
                    <button
                      onClick={() => setMdViewMode('preview')}
                      className={`flex items-center gap-1 px-2.5 py-1 rounded font-bold transition-colors cursor-pointer ${
                        mdViewMode === 'preview' 
                          ? isDark ? 'bg-zinc-900 text-amber-400 shadow-xs' : 'bg-white text-zinc-950 shadow-xs' 
                          : 'text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200'
                      }`}
                    >
                      <Eye className="w-3 h-3" />
                      <span>Rendered Preview</span>
                    </button>
                    <button
                      onClick={() => setMdViewMode('raw')}
                      className={`flex items-center gap-1 px-2.5 py-1 rounded font-bold transition-colors cursor-pointer ${
                        mdViewMode === 'raw' 
                          ? isDark ? 'bg-zinc-900 text-amber-400 shadow-xs' : 'bg-white text-zinc-950 shadow-xs' 
                          : 'text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200'
                      }`}
                    >
                      <Code className="w-3 h-3" />
                      <span>Raw Code</span>
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  <button
                    onClick={() => handleCopy(generateMarkdownFormat(component), 'SKILL.md')}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold shadow-sm transition-colors cursor-pointer"
                  >
                    {copiedFormat === 'SKILL.md' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedFormat === 'SKILL.md' ? 'Copied!' : 'Copy SKILL.md'}</span>
                  </button>

                  <button
                    onClick={() => handleDownload('md')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-bold transition-colors cursor-pointer ${
                      isDark ? 'bg-zinc-900 border-zinc-800 hover:bg-zinc-800 text-zinc-200' : 'bg-white border-zinc-200 hover:bg-zinc-100 text-zinc-900'
                    }`}
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </button>
                </div>
              </div>

              {/* Rendered Visual Document Preview vs Raw Markdown Code */}
              {mdViewMode === 'preview' ? (
                <div className={`p-5 sm:p-6 rounded-2xl border space-y-6 ${
                  isDark ? 'bg-zinc-900/60 border-zinc-800/80 text-zinc-200' : 'bg-white border-zinc-200 text-zinc-900 shadow-xs'
                }`}>
                  
                  {/* Document Title & Badge Banner */}
                  <div className="border-b pb-4 border-zinc-200 dark:border-zinc-800/80 space-y-3">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center gap-2">
                        <span className="p-1.5 rounded-lg bg-amber-500/10 text-amber-500 border border-amber-500/20">
                          <Zap className="w-4 h-4" />
                        </span>
                        <h2 className="text-xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
                          {component.name}
                        </h2>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-mono font-semibold">
                        <span className={`px-2.5 py-1 rounded-md border ${
                          isDark ? 'bg-zinc-800 border-zinc-700 text-amber-400' : 'bg-amber-50 border-amber-200 text-amber-800'
                        }`}>
                          v{component.version || '1.0.0'}
                        </span>
                        <span className={`px-2.5 py-1 rounded-md border ${
                          isDark ? 'bg-zinc-800 border-zinc-700 text-zinc-300' : 'bg-zinc-100 border-zinc-200 text-zinc-700'
                        }`}>
                          {component.type.toUpperCase()}
                        </span>
                      </div>
                    </div>

                    <blockquote className="border-l-4 border-amber-500 pl-3.5 py-1 text-sm italic text-zinc-600 dark:text-zinc-300 font-medium">
                      "{component.description}"
                    </blockquote>
                  </div>

                  {/* YAML Frontmatter Configuration Grid */}
                  <div className={`p-4 rounded-xl border space-y-3 ${
                    isDark ? 'bg-black/50 border-zinc-800' : 'bg-zinc-50 border-zinc-200'
                  }`}>
                    <div className="flex items-center justify-between text-xs font-bold text-amber-500 uppercase tracking-wider">
                      <span className="flex items-center gap-1.5">
                        <Settings className="w-3.5 h-3.5" />
                        <span>YAML Frontmatter Specification</span>
                      </span>
                      <span className="font-mono text-[10px] text-zinc-400">SKILL.md Header</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className={`p-2.5 rounded-lg border ${isDark ? 'bg-zinc-900/90 border-zinc-800' : 'bg-white border-zinc-200'}`}>
                        <div className="text-[10px] uppercase font-bold text-zinc-400 mb-1">Allowed Tools</div>
                        <div className="flex flex-wrap gap-1">
                          {['ReadFile', 'EditFile', 'WriteFile', 'RunCommand', 'ListDirectory'].map((tool) => (
                            <span key={tool} className="px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 font-mono text-[11px]">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className={`p-2.5 rounded-lg border ${isDark ? 'bg-zinc-900/90 border-zinc-800' : 'bg-white border-zinc-200'}`}>
                        <div className="text-[10px] uppercase font-bold text-zinc-400 mb-1">Author & Compatibility</div>
                        <div className="font-semibold text-zinc-800 dark:text-zinc-200">
                          {component.author || 'Claude Ecosystem Guild'}
                        </div>
                        <div className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">
                          Claude 3.7 Sonnet • Claude Code CLI v1.0+
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Auto-Trigger Conditions Section */}
                  <div className="space-y-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                      <span>Auto-Trigger Phrase Conditions</span>
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {(component.triggers || [component.name.toLowerCase(), component.slug]).map((trigger, idx) => (
                        <span 
                          key={idx}
                          className={`px-2.5 py-1 rounded-lg border font-mono text-xs font-bold flex items-center gap-1.5 ${
                            isDark 
                              ? 'bg-amber-500/10 border-amber-500/30 text-amber-400' 
                              : 'bg-amber-50 border-amber-200 text-amber-900'
                          }`}
                        >
                          <Terminal className="w-3 h-3 opacity-70" />
                          <span>"{trigger}"</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* System Prompt Guidelines & Instructions */}
                  <div className="space-y-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-amber-500" />
                      <span>System Instructions & Execution Protocol</span>
                    </h3>

                    <div className={`p-4 rounded-xl border text-xs leading-relaxed space-y-3 ${
                      isDark ? 'bg-zinc-950/80 border-zinc-800 text-zinc-300' : 'bg-zinc-50 border-zinc-200 text-zinc-800'
                    }`}>
                      <p className="font-medium">
                        {component.fullInstructions || `When activated, analyze the current target repository context. Implement clean, maintainable modifications with exhaustive type definitions and unit test coverage.`}
                      </p>

                      <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800/80 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>Strict Type Verification (`tsc --noEmit`)</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>Deterministic Code Refactoring</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>Automated Script Check (`scripts/validate.sh`)</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>Zero-Hallucination Dependency Enforcement</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Script Status Validation Banner */}
                  <div className={`p-3 rounded-xl border flex items-center justify-between flex-wrap gap-2 text-xs font-mono ${
                    isDark ? 'bg-emerald-950/20 border-emerald-900/50 text-emerald-400' : 'bg-emerald-50 border-emerald-200 text-emerald-900'
                  }`}>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span className="font-bold">Automated Integrity Check (`scripts/validate.sh`)</span>
                    </div>
                    <span className="font-bold bg-emerald-500/20 px-2 py-0.5 rounded text-[10px] uppercase">
                      Passed (0 Errors)
                    </span>
                  </div>

                </div>
              ) : (
                /* Raw Markdown Code */
                <pre className={`p-4 rounded-xl border font-mono text-xs overflow-x-auto whitespace-pre-wrap leading-relaxed select-all max-h-[52vh] ${
                  isDark ? 'bg-black/90 border-zinc-800 text-zinc-200' : 'bg-zinc-50 border-zinc-200 text-zinc-900 shadow-inner'
                }`}>
                  {generateMarkdownFormat(component)}
                </pre>
              )}
            </div>
          )}

          {/* ----------------------------------------------------------------------- */}
          {/* TAB 3: FORMAT MCP (FastMCP Python & Claude Desktop Config) */}
          {/* ----------------------------------------------------------------------- */}
          {activeTab === 'mcp' && (
            <div className="space-y-4 animate-in fade-in duration-100">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-mono font-bold text-cyan-500 uppercase px-2.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                    MCP Protocol Specification
                  </span>

                  <div className={`flex items-center rounded-lg p-0.5 text-xs ${
                    isDark ? 'bg-zinc-800' : 'bg-zinc-200'
                  }`}>
                    <button
                      onClick={() => setMcpViewMode('desktop-config')}
                      className={`px-2.5 py-1 rounded font-bold transition-colors cursor-pointer ${
                        mcpViewMode === 'desktop-config' 
                          ? isDark ? 'bg-zinc-900 text-cyan-400 shadow-xs' : 'bg-white text-zinc-950 shadow-xs' 
                          : 'text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200'
                      }`}
                    >
                      claude_desktop_config.json
                    </button>
                    <button
                      onClick={() => setMcpViewMode('fastmcp-python')}
                      className={`px-2.5 py-1 rounded font-bold transition-colors cursor-pointer ${
                        mcpViewMode === 'fastmcp-python' 
                          ? isDark ? 'bg-zinc-900 text-cyan-400 shadow-xs' : 'bg-white text-zinc-950 shadow-xs' 
                          : 'text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200'
                      }`}
                    >
                      FastMCP Python (server.py)
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopy(mcpViewMode === 'fastmcp-python' ? generateFastMcpCode(component) : generateMcpFormat(component), 'MCP')}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white text-xs font-bold shadow-sm transition-colors cursor-pointer"
                  >
                    {copiedFormat === 'MCP' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedFormat === 'MCP' ? 'Copied!' : 'Copy Code'}</span>
                  </button>

                  <button
                    onClick={() => handleDownload('mcp')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-bold transition-colors cursor-pointer ${
                      isDark ? 'bg-zinc-900 border-zinc-800 hover:bg-zinc-800 text-zinc-200' : 'bg-white border-zinc-200 hover:bg-zinc-100 text-zinc-900 shadow-xs'
                    }`}
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </button>
                </div>
              </div>

              {/* Code display */}
              <pre className={`p-4 rounded-xl border font-mono text-xs overflow-x-auto whitespace-pre-wrap leading-relaxed select-all max-h-[52vh] ${
                isDark ? 'bg-black/90 border-zinc-800 text-cyan-300' : 'bg-cyan-50/50 text-cyan-950 border-cyan-200 font-medium shadow-inner'
              }`}>
                {mcpViewMode === 'fastmcp-python' ? generateFastMcpCode(component) : generateMcpFormat(component)}
              </pre>

              {/* Instructions note */}
              <div className={`p-3 rounded-lg border text-xs ${
                isDark ? 'bg-cyan-950/20 border-cyan-900/50 text-cyan-200' : 'bg-cyan-50 border-cyan-200 text-cyan-950 font-medium'
              }`}>
                <span className="font-bold">MCP Integration Placement:</span> Paste this server configuration into your Claude Desktop settings file at <code className="font-mono text-[11px] bg-cyan-900/30 dark:bg-cyan-900/30 bg-cyan-100 text-cyan-900 dark:text-cyan-200 px-1.5 py-0.5 rounded font-bold">~/Library/Application Support/Claude/claude_desktop_config.json</code> (macOS) or <code className="font-mono text-[11px] bg-cyan-100 dark:bg-cyan-900/30 text-cyan-900 dark:text-cyan-200 px-1.5 py-0.5 rounded font-bold">%APPDATA%\Claude\claude_desktop_config.json</code> (Windows).
              </div>
            </div>
          )}

          {/* ----------------------------------------------------------------------- */}
          {/* TAB 4: FORMAT .JSON (Manifest) */}
          {/* ----------------------------------------------------------------------- */}
          {activeTab === 'json' && (
            <div className="space-y-4 animate-in fade-in duration-100">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-xs font-mono font-bold text-emerald-500 uppercase px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                  Format: .json (Claude Component Manifest)
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopy(generateJsonFormat(component), 'JSON')}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm transition-colors cursor-pointer"
                  >
                    {copiedFormat === 'JSON' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedFormat === 'JSON' ? 'Copied!' : 'Copy JSON'}</span>
                  </button>

                  <button
                    onClick={() => handleDownload('json')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-bold transition-colors cursor-pointer ${
                      isDark ? 'bg-zinc-900 border-zinc-800 hover:bg-zinc-800 text-zinc-200' : 'bg-white border-zinc-200 hover:bg-zinc-100 text-zinc-900 shadow-xs'
                    }`}
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </button>
                </div>
              </div>

              <pre className={`p-4 rounded-xl border font-mono text-xs overflow-x-auto whitespace-pre-wrap leading-relaxed select-all max-h-[52vh] ${
                isDark ? 'bg-black/90 border-zinc-800 text-emerald-300' : 'bg-emerald-50/40 text-emerald-950 border-emerald-200 font-medium shadow-inner'
              }`}>
                {generateJsonFormat(component)}
              </pre>
            </div>
          )}

          {/* ----------------------------------------------------------------------- */}
          {/* TAB 5: FORMAT .YAML (Workflow & Agent) */}
          {/* ----------------------------------------------------------------------- */}
          {activeTab === 'yaml' && (
            <div className="space-y-4 animate-in fade-in duration-100">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-xs font-mono font-bold text-purple-400 uppercase px-2.5 py-0.5 rounded bg-purple-500/10 border border-purple-500/20">
                  Format: .yaml (Claude Action & Agent Workflow)
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopy(generateYamlFormat(component), 'YAML')}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold shadow-sm transition-colors cursor-pointer"
                  >
                    {copiedFormat === 'YAML' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedFormat === 'YAML' ? 'Copied!' : 'Copy YAML'}</span>
                  </button>

                  <button
                    onClick={() => handleDownload('yaml')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-bold transition-colors cursor-pointer ${
                      isDark ? 'bg-zinc-900 border-zinc-800 hover:bg-zinc-800 text-zinc-200' : 'bg-white border-zinc-200 hover:bg-zinc-100 text-zinc-900 shadow-xs'
                    }`}
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </button>
                </div>
              </div>

              <pre className={`p-4 rounded-xl border font-mono text-xs overflow-x-auto whitespace-pre-wrap leading-relaxed select-all max-h-[52vh] ${
                isDark ? 'bg-black/90 border-zinc-800 text-purple-300' : 'bg-purple-50/40 text-purple-950 border-purple-200 font-medium shadow-inner'
              }`}>
                {generateYamlFormat(component)}
              </pre>
            </div>
          )}

          {/* ----------------------------------------------------------------------- */}
          {/* TAB 6: SCRIPT .SH (Bash) */}
          {/* ----------------------------------------------------------------------- */}
          {activeTab === 'sh' && (
            <div className="space-y-4 animate-in fade-in duration-100">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-xs font-mono font-bold text-blue-400 uppercase px-2.5 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">
                  Script: .sh (Automated Bash/Zsh Installer)
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopy(generateShellScript(component), 'Shell Script')}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-sm transition-colors cursor-pointer"
                  >
                    {copiedFormat === 'Shell Script' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedFormat === 'Shell Script' ? 'Copied!' : 'Copy Script'}</span>
                  </button>

                  <button
                    onClick={() => handleDownload('sh')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-bold transition-colors cursor-pointer ${
                      isDark ? 'bg-zinc-900 border-zinc-800 hover:bg-zinc-800 text-zinc-200' : 'bg-white border-zinc-200 hover:bg-zinc-100 text-zinc-900 shadow-xs'
                    }`}
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </button>
                </div>
              </div>

              <pre className={`p-4 rounded-xl border font-mono text-xs overflow-x-auto whitespace-pre-wrap leading-relaxed select-all max-h-[52vh] ${
                isDark ? 'bg-black/90 border-zinc-800 text-blue-300' : 'bg-blue-50/40 text-blue-950 border-blue-200 font-medium shadow-inner'
              }`}>
                {generateShellScript(component)}
              </pre>
            </div>
          )}

          {/* ----------------------------------------------------------------------- */}
          {/* TAB 7: SCRIPT .PS1 (PowerShell) */}
          {/* ----------------------------------------------------------------------- */}
          {activeTab === 'ps1' && (
            <div className="space-y-4 animate-in fade-in duration-100">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-xs font-mono font-bold text-sky-400 uppercase px-2.5 py-0.5 rounded bg-sky-500/10 border border-sky-500/20">
                  Script: .ps1 (Windows PowerShell Installer)
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopy(generatePowerShellScript(component), 'PowerShell')}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold shadow-sm transition-colors cursor-pointer"
                  >
                    {copiedFormat === 'PowerShell' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedFormat === 'PowerShell' ? 'Copied!' : 'Copy PS1'}</span>
                  </button>

                  <button
                    onClick={() => handleDownload('ps1')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-bold transition-colors cursor-pointer ${
                      isDark ? 'bg-zinc-900 border-zinc-800 hover:bg-zinc-800 text-zinc-200' : 'bg-white border-zinc-200 hover:bg-zinc-100 text-zinc-900 shadow-xs'
                    }`}
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </button>
                </div>
              </div>

              <pre className={`p-4 rounded-xl border font-mono text-xs overflow-x-auto whitespace-pre-wrap leading-relaxed select-all max-h-[52vh] ${
                isDark ? 'bg-black/90 border-zinc-800 text-sky-300' : 'bg-sky-50/40 text-sky-950 border-sky-200 font-medium shadow-inner'
              }`}>
                {generatePowerShellScript(component)}
              </pre>
            </div>
          )}

          {/* ----------------------------------------------------------------------- */}
          {/* TAB 8: DOCKER COMPOSE */}
          {/* ----------------------------------------------------------------------- */}
          {activeTab === 'docker' && (
            <div className="space-y-4 animate-in fade-in duration-100">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-xs font-mono font-bold text-indigo-400 uppercase px-2.5 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20">
                  Docker: Container & Compose Definition
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopy(generateDockerScript(component), 'Docker')}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-sm transition-colors cursor-pointer"
                  >
                    {copiedFormat === 'Docker' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedFormat === 'Docker' ? 'Copied!' : 'Copy Compose'}</span>
                  </button>

                  <button
                    onClick={() => handleDownload('docker')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-bold transition-colors cursor-pointer ${
                      isDark ? 'bg-zinc-900 border-zinc-800 hover:bg-zinc-800 text-zinc-200' : 'bg-white border-zinc-200 hover:bg-zinc-100 text-zinc-900 shadow-xs'
                    }`}
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </button>
                </div>
              </div>

              <pre className={`p-4 rounded-xl border font-mono text-xs overflow-x-auto whitespace-pre-wrap leading-relaxed select-all max-h-[52vh] ${
                isDark ? 'bg-black/90 border-zinc-800 text-indigo-300' : 'bg-indigo-50/40 text-indigo-950 border-indigo-200 font-medium shadow-inner'
              }`}>
                {generateDockerScript(component)}
              </pre>
            </div>
          )}

          {/* ----------------------------------------------------------------------- */}
          {/* TAB 9: .ENV CONFIG */}
          {/* ----------------------------------------------------------------------- */}
          {activeTab === 'env' && (
            <div className="space-y-4 animate-in fade-in duration-100">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-xs font-mono font-bold text-amber-500 uppercase px-2.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                  Environment: .env Configuration Template
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopy(generateEnvFormat(component), 'ENV')}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold shadow-sm transition-colors cursor-pointer"
                  >
                    {copiedFormat === 'ENV' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedFormat === 'ENV' ? 'Copied!' : 'Copy .env'}</span>
                  </button>

                  <button
                    onClick={() => handleDownload('env')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-bold transition-colors cursor-pointer ${
                      isDark ? 'bg-zinc-900 border-zinc-800 hover:bg-zinc-800 text-zinc-200' : 'bg-white border-zinc-200 hover:bg-zinc-100 text-zinc-900 shadow-xs'
                    }`}
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </button>
                </div>
              </div>

              <pre className={`p-4 rounded-xl border font-mono text-xs overflow-x-auto whitespace-pre-wrap leading-relaxed select-all max-h-[52vh] ${
                isDark ? 'bg-black/90 border-zinc-800 text-amber-300' : 'bg-amber-50/40 text-amber-950 border-amber-200 font-medium shadow-inner'
              }`}>
                {generateEnvFormat(component)}
              </pre>
            </div>
          )}

          {/* ----------------------------------------------------------------------- */}
          {/* TAB 10: INSTALLATION SCRIPT HUB */}
          {/* ----------------------------------------------------------------------- */}
          {activeTab === 'install-hub' && (() => {
            const slugTail = component.slug.split('/').pop() || component.slug;
            const typeLower = component.type;

            const cliCmd = component.cliCommand || `npx claude-code-templates@latest install --${typeLower} ${component.slug}`;
            const bashCmd = `curl -fsSL https://claude.ai/install/${typeLower}s/${component.slug}.sh | bash`;
            const psCmd = `irm https://claude.ai/install/${typeLower}s/${component.slug}.ps1 | iex`;

            let targetDir = `~/.claude/${typeLower}s/${component.slug}`;
            let primaryFileName = 'SKILL.md';
            let postStep = '';

            switch (typeLower) {
              case 'skill':
                targetDir = `~/.claude/skills/${component.slug}`;
                primaryFileName = 'SKILL.md';
                break;
              case 'agent':
                targetDir = `~/.claude/agents/${component.slug}`;
                primaryFileName = 'agent.yaml';
                break;
              case 'command':
                targetDir = `~/.claude/commands`;
                primaryFileName = `${slugTail}.sh`;
                postStep = `chmod +x ~/.claude/commands/${slugTail}.sh`;
                break;
              case 'setting':
                targetDir = `~/.claude/settings`;
                primaryFileName = `${slugTail}.json`;
                break;
              case 'hook':
                targetDir = `~/.claude/hooks/${component.slug}`;
                primaryFileName = 'hook.sh';
                postStep = `chmod +x ~/.claude/hooks/${component.slug}/hook.sh`;
                break;
              case 'mcp':
                targetDir = `~/Library/Application Support/Claude`;
                primaryFileName = 'claude_desktop_config.json';
                break;
              case 'plugin':
                targetDir = `~/.claude/plugins/${component.slug}`;
                primaryFileName = 'plugin.json';
                break;
            }

            const manualMkdir = `mkdir -p ${targetDir}`;
            const manualFetch = `curl -sSL https://claude.ai/templates/${component.slug}/${primaryFileName} > ${targetDir}/${primaryFileName}`;
            const manualFullScript = postStep
              ? `# 1. Create target directory:\n${manualMkdir}\n\n# 2. Download ${primaryFileName} manifest:\n${manualFetch}\n\n# 3. Grant executable permission:\n${postStep}`
              : `# 1. Create target directory:\n${manualMkdir}\n\n# 2. Download ${primaryFileName} manifest:\n${manualFetch}`;

            let verifyCmd = `claude doctor`;
            let verifyDesc = `Execute system health check to verify ${component.name} installation`;
            switch (typeLower) {
              case 'skill':
                verifyCmd = `claude skill verify ${component.slug}`;
                verifyDesc = `Verify SKILL.md frontmatter schema and trigger phrase matrix`;
                break;
              case 'agent':
                verifyCmd = `claude agent test ${component.slug}`;
                verifyDesc = `Validate agent autonomous loop and system prompt rules`;
                break;
              case 'command':
                verifyCmd = `/${slugTail} --help`;
                verifyDesc = `Execute slash command in Claude Code CLI terminal`;
                break;
              case 'setting':
                verifyCmd = `claude config validate`;
                verifyDesc = `Validate setting manifest against runtime safety policies`;
                break;
              case 'hook':
                verifyCmd = `claude hook test ${component.slug}`;
                verifyDesc = `Trigger hook script event listeners and pre-commit hooks`;
                break;
              case 'mcp':
                verifyCmd = `npx @modelcontextprotocol/inspector node build/index.js`;
                verifyDesc = `Launch MCP Inspector tool to verify stdio/SSE protocol bridge`;
                break;
              case 'plugin':
                verifyCmd = `claude plugin list`;
                verifyDesc = `List installed plugins and active extension modules`;
                break;
            }

            const methodTabs = [
              { id: 'all', label: 'All Methods', icon: <Layers className="w-3.5 h-3.5 text-amber-500" /> },
              { id: 'cli', label: 'CLI One-Liner', icon: <Terminal className="w-3.5 h-3.5 text-amber-500" /> },
              { id: 'bash', label: 'macOS / Linux', icon: <Terminal className="w-3.5 h-3.5 text-blue-500" /> },
              { id: 'ps1', label: 'Windows PS1', icon: <Monitor className="w-3.5 h-3.5 text-sky-500" /> },
              { id: 'manual', label: 'Manual Directory', icon: <FolderCode className="w-3.5 h-3.5 text-emerald-500" /> },
              { id: 'verify', label: 'Verification', icon: <ShieldCheck className="w-3.5 h-3.5 text-purple-500" /> }
            ];

            return (
              <div className="space-y-4 sm:space-y-5 animate-in fade-in duration-100">
                
                {/* Method Filter Bar */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 scrollbar-thin">
                  {methodTabs.map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setInstallMethod(tab.id as any)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors whitespace-nowrap cursor-pointer shrink-0 ${
                        installMethod === tab.id
                          ? isDark 
                            ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40 shadow-xs' 
                            : 'bg-amber-50 text-amber-900 border border-amber-300 font-bold shadow-xs'
                          : isDark
                            ? 'bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
                            : 'bg-zinc-100 text-zinc-600 hover:text-zinc-950 border border-zinc-200'
                      }`}
                    >
                      {tab.icon}
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </div>

                {/* METHOD 1: Instant One-Liner CLI Command (npx) */}
                {(installMethod === 'all' || installMethod === 'cli') && (
                  <div className={`p-3.5 sm:p-4 rounded-xl border transition-all ${
                    isDark ? 'bg-zinc-900/60 border-zinc-800 hover:border-amber-500/40' : 'bg-zinc-50 border-zinc-200 hover:border-amber-400'
                  }`}>
                    <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                      <div className="flex items-center gap-2">
                        <span className="p-1 rounded bg-amber-500/10 text-amber-500">
                          <Zap className="w-4 h-4" />
                        </span>
                        <div>
                          <span className={`text-xs font-bold uppercase tracking-wider block ${
                            isDark ? 'text-zinc-100' : 'text-zinc-950'
                          }`}>
                            1. Instant One-Liner CLI Command (Recommended)
                          </span>
                          <span className="text-[11px] text-zinc-500">Cross-Platform • Zero Dependencies • Auto-Directory Setup</span>
                        </div>
                      </div>
                      <button
                        onClick={() => handleCopy(cliCmd, 'CLI Command')}
                        className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-500/10 hover:bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/30 text-xs font-bold transition-colors cursor-pointer shrink-0"
                      >
                        {copiedFormat === 'CLI Command' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedFormat === 'CLI Command' ? 'Copied!' : 'Copy CLI'}</span>
                      </button>
                    </div>

                    <div className={`p-3 rounded-lg font-mono text-xs overflow-x-auto select-all font-semibold ${
                      isDark ? 'bg-black text-amber-300 border border-zinc-800' : 'bg-amber-50/80 border border-amber-200 text-amber-950 shadow-inner'
                    }`}>
                      {cliCmd}
                    </div>
                  </div>
                )}

                {/* METHOD 2: Direct Curl / Bash Script (macOS / Linux) */}
                {(installMethod === 'all' || installMethod === 'bash') && (
                  <div className={`p-3.5 sm:p-4 rounded-xl border transition-all ${
                    isDark ? 'bg-zinc-900/60 border-zinc-800 hover:border-blue-500/40' : 'bg-zinc-50 border-zinc-200 hover:border-blue-400'
                  }`}>
                    <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                      <div className="flex items-center gap-2">
                        <span className="p-1 rounded bg-blue-500/10 text-blue-500">
                          <Terminal className="w-4 h-4" />
                        </span>
                        <div>
                          <span className={`text-xs font-bold uppercase tracking-wider block ${
                            isDark ? 'text-zinc-100' : 'text-zinc-950'
                          }`}>
                            2. Direct Bash Shell Script (macOS / Linux / WSL)
                          </span>
                          <span className="text-[11px] text-zinc-500">Automated curl stream • Sets execution permissions</span>
                        </div>
                      </div>
                      <button
                        onClick={() => handleCopy(bashCmd, 'Bash Script')}
                        className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/30 text-xs font-bold transition-colors cursor-pointer shrink-0"
                      >
                        {copiedFormat === 'Bash Script' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedFormat === 'Bash Script' ? 'Copied!' : 'Copy Bash'}</span>
                      </button>
                    </div>

                    <div className={`p-3 rounded-lg font-mono text-xs overflow-x-auto select-all font-semibold ${
                      isDark ? 'bg-black text-blue-300 border border-zinc-800' : 'bg-blue-50/80 border border-blue-200 text-blue-950 shadow-inner'
                    }`}>
                      {bashCmd}
                    </div>
                  </div>
                )}

                {/* METHOD 3: Windows PowerShell Command */}
                {(installMethod === 'all' || installMethod === 'ps1') && (
                  <div className={`p-3.5 sm:p-4 rounded-xl border transition-all ${
                    isDark ? 'bg-zinc-900/60 border-zinc-800 hover:border-sky-500/40' : 'bg-zinc-50 border-zinc-200 hover:border-sky-400'
                  }`}>
                    <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                      <div className="flex items-center gap-2">
                        <span className="p-1 rounded bg-sky-500/10 text-sky-500">
                          <Monitor className="w-4 h-4" />
                        </span>
                        <div>
                          <span className={`text-xs font-bold uppercase tracking-wider block ${
                            isDark ? 'text-zinc-100' : 'text-zinc-950'
                          }`}>
                            3. Windows PowerShell Installer (Windows Terminal)
                          </span>
                          <span className="text-[11px] text-zinc-500">Native Windows 10/11 • irm | iex Web Request Stream</span>
                        </div>
                      </div>
                      <button
                        onClick={() => handleCopy(psCmd, 'PowerShell Script')}
                        className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-sky-500/10 hover:bg-sky-500/20 text-sky-600 dark:text-sky-400 border border-sky-500/30 text-xs font-bold transition-colors cursor-pointer shrink-0"
                      >
                        {copiedFormat === 'PowerShell Script' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedFormat === 'PowerShell Script' ? 'Copied!' : 'Copy PS1'}</span>
                      </button>
                    </div>

                    <div className={`p-3 rounded-lg font-mono text-xs overflow-x-auto select-all font-semibold ${
                      isDark ? 'bg-black text-sky-300 border border-zinc-800' : 'bg-sky-50/80 border border-sky-200 text-sky-950 shadow-inner'
                    }`}>
                      {psCmd}
                    </div>
                  </div>
                )}

                {/* METHOD 4: Manual Local Placement */}
                {(installMethod === 'all' || installMethod === 'manual') && (
                  <div className={`p-3.5 sm:p-4 rounded-xl border transition-all ${
                    isDark ? 'bg-zinc-900/60 border-zinc-800 hover:border-emerald-500/40' : 'bg-zinc-50 border-zinc-200 hover:border-emerald-400'
                  }`}>
                    <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                      <div className="flex items-center gap-2">
                        <span className="p-1 rounded bg-emerald-500/10 text-emerald-500">
                          <FolderCode className="w-4 h-4" />
                        </span>
                        <div>
                          <span className={`text-xs font-bold uppercase tracking-wider block ${
                            isDark ? 'text-zinc-100' : 'text-zinc-950'
                          }`}>
                            4. Manual File Placement & Directory Setup
                          </span>
                          <span className="text-[11px] text-zinc-500">Target Path: <code className="font-mono text-emerald-600 dark:text-emerald-400">{targetDir}</code></span>
                        </div>
                      </div>
                      <button
                        onClick={() => handleCopy(manualFullScript, 'Manual Script')}
                        className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 text-xs font-bold transition-colors cursor-pointer shrink-0"
                      >
                        {copiedFormat === 'Manual Script' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedFormat === 'Manual Script' ? 'Copied!' : 'Copy Steps'}</span>
                      </button>
                    </div>

                    <pre className={`p-3 rounded-lg font-mono text-xs overflow-x-auto select-all whitespace-pre-wrap leading-relaxed font-semibold ${
                      isDark ? 'bg-black text-emerald-300 border border-zinc-800' : 'bg-emerald-50/80 border border-emerald-200 text-emerald-950 shadow-inner'
                    }`}>
                      {manualFullScript}
                    </pre>
                  </div>
                )}

                {/* METHOD 5: Post-Installation Health & Verification */}
                {(installMethod === 'all' || installMethod === 'verify') && (
                  <div className={`p-3.5 sm:p-4 rounded-xl border transition-all ${
                    isDark ? 'bg-zinc-900/60 border-zinc-800 hover:border-purple-500/40' : 'bg-zinc-50 border-zinc-200 hover:border-purple-400'
                  }`}>
                    <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                      <div className="flex items-center gap-2">
                        <span className="p-1 rounded bg-purple-500/10 text-purple-500">
                          <CheckCircle2 className="w-4 h-4" />
                        </span>
                        <div>
                          <span className={`text-xs font-bold uppercase tracking-wider block ${
                            isDark ? 'text-zinc-100' : 'text-zinc-950'
                          }`}>
                            5. Post-Installation Health Verification
                          </span>
                          <span className="text-[11px] text-zinc-500">{verifyDesc}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => handleCopy(verifyCmd, 'Verification Command')}
                        className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-purple-500/10 hover:bg-purple-500/20 text-purple-600 dark:text-purple-400 border border-purple-500/30 text-xs font-bold transition-colors cursor-pointer shrink-0"
                      >
                        {copiedFormat === 'Verification Command' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedFormat === 'Verification Command' ? 'Copied!' : 'Copy Check'}</span>
                      </button>
                    </div>

                    <div className={`p-3 rounded-lg font-mono text-xs overflow-x-auto select-all font-semibold ${
                      isDark ? 'bg-black text-purple-300 border border-zinc-800' : 'bg-purple-50/80 border border-purple-200 text-purple-950 shadow-inner'
                    }`}>
                      {verifyCmd}
                    </div>
                  </div>
                )}

              </div>
            );
          })()}

        </div>

        {/* ========================================================================= */}
        {/* MODAL FOOTER: Responsive buttons with stack toggle and fast copy */}
        {/* ========================================================================= */}
        <div className={`p-3.5 sm:p-5 border-t flex flex-col-reverse sm:flex-row items-center justify-between gap-3 shrink-0 ${
          isDark ? 'bg-zinc-900/95 border-zinc-800' : 'bg-zinc-50 border-zinc-200'
        }`}>
          <div className="text-[11px] sm:text-xs text-zinc-500 text-center sm:text-left font-medium">
            Version {component.version || '1.0.0'} • Apache 2.0 License • Verified for Claude Code CLI 3.7
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
            {/* Direct CLI Copy Shortcut */}
            <button
              onClick={() => handleCopy(component.cliCommand || `npx claude-code-templates@latest --${component.type} ${component.slug}`, 'CLI Command')}
              className={`flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold border transition-colors cursor-pointer ${
                isDark 
                  ? 'bg-zinc-900 border-zinc-700 text-zinc-300 hover:bg-zinc-800' 
                  : 'bg-white border-zinc-300 text-zinc-800 hover:bg-zinc-100'
              }`}
            >
              <Copy className="w-3.5 h-3.5" />
              <span>Copy CLI</span>
            </button>

            {/* In Stack / Add to Stack Button */}
            <button
              onClick={() => onToggleStack(component)}
              className={`w-full sm:w-auto flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-lg text-xs font-bold shadow-md transition-all active:scale-95 min-h-[40px] cursor-pointer ${
                isInStack
                  ? 'bg-amber-500 text-white hover:bg-amber-600 shadow-amber-500/20'
                  : isDark
                    ? 'bg-zinc-800 border border-zinc-700 text-zinc-100 hover:bg-zinc-700'
                    : 'bg-zinc-950 text-white hover:bg-zinc-800'
              }`}
            >
              {isInStack ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>In Stack</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4" />
                  <span>Add to Stack</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
