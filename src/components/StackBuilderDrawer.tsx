import React, { useState } from 'react';
import { ComponentItem, StackPreset, ComponentType, AIProvider } from '../types';
import { STACK_PRESETS } from '../data/componentsData';
import { 
  generateStackExport, 
  generateProviderStackExport, 
  AI_PROVIDERS, 
  getProviderMeta 
} from '../utils/formatGenerators';
import { 
  Layers, 
  X, 
  Trash2, 
  Copy, 
  Check, 
  Download, 
  Sparkles, 
  Cpu, 
  Terminal, 
  Sliders, 
  Anchor, 
  Puzzle, 
  FileCode, 
  FileText, 
  Share2, 
  Zap, 
  Box, 
  Monitor, 
  Key, 
  CheckCircle2,
  Filter,
  Code
} from 'lucide-react';

interface StackBuilderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  stackItems: ComponentItem[];
  onRemoveItem: (id: string) => void;
  onClearAll: () => void;
  onApplyPreset: (preset: StackPreset) => void;
  isDark: boolean;
  onNotify: (msg: string) => void;
}

export type StackExportFormat = 'npx' | 'json' | 'md' | 'mcp' | 'yaml' | 'sh' | 'ps1' | 'docker' | 'env';

// Type-specific allowed export formats mapping for Stack Exporter
export const TYPE_ALLOWED_EXPORT_FORMATS: Record<ComponentType, StackExportFormat[]> = {
  skill: ['npx', 'md', 'json'],
  agent: ['npx', 'yaml', 'json', 'md'],
  command: ['npx', 'sh', 'ps1', 'json'],
  setting: ['npx', 'json', 'yaml', 'env'],
  hook: ['npx', 'sh', 'ps1', 'json'],
  mcp: ['npx', 'mcp', 'json', 'docker', 'env'], // 'md' format is excluded for MCP
  plugin: ['npx', 'json', 'yaml', 'sh']
};

export const StackBuilderDrawer: React.FC<StackBuilderDrawerProps> = ({
  isOpen,
  onClose,
  stackItems,
  onRemoveItem,
  onClearAll,
  onApplyPreset,
  isDark,
  onNotify
}) => {
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<StackExportFormat>('npx');
  const [selectedProvider, setSelectedProvider] = useState<AIProvider>('claude');
  const [selectedFilter, setSelectedFilter] = useState<'all' | ComponentType>('all');
  const [shared, setShared] = useState(false);

  // Dynamically compute allowed formats based on selected filter or present stack items
  const allowedExportFormats = React.useMemo(() => {
    // If a specific tool filter is selected (e.g. 'skill', 'mcp', etc.), strictly filter allowed formats
    if (selectedFilter !== 'all') {
      return TYPE_ALLOWED_EXPORT_FORMATS[selectedFilter] || ['npx', 'json'];
    }

    // If 'all' is selected:
    if (stackItems.length === 0) {
      return ['npx', 'json', 'md', 'mcp', 'yaml', 'sh', 'ps1', 'docker', 'env'] as StackExportFormat[];
    }

    // Filter allowed formats based on types actually present in current stack
    const presentTypes: ComponentType[] = Array.from(new Set(stackItems.map(i => i.type)));
    const allowed = new Set<StackExportFormat>(['npx']); // NPX is always valid
    
    presentTypes.forEach((t: ComponentType) => {
      const formats = TYPE_ALLOWED_EXPORT_FORMATS[t] || [];
      formats.forEach(f => allowed.add(f));
    });

    return Array.from(allowed);
  }, [selectedFilter, stackItems]);

  // Auto-switch selected format if current format is no longer allowed for active filter/stack
  React.useEffect(() => {
    if (allowedExportFormats.length > 0 && !allowedExportFormats.includes(selectedFormat)) {
      if (selectedFilter === 'skill' && allowedExportFormats.includes('md')) {
        setSelectedFormat('md');
      } else if (selectedFilter === 'mcp' && allowedExportFormats.includes('mcp')) {
        setSelectedFormat('mcp');
      } else if (selectedFilter === 'agent' && allowedExportFormats.includes('yaml')) {
        setSelectedFormat('yaml');
      } else if (selectedFilter === 'command' && allowedExportFormats.includes('sh')) {
        setSelectedFormat('sh');
      } else {
        setSelectedFormat(allowedExportFormats[0]);
      }
    }
  }, [allowedExportFormats, selectedFormat, selectedFilter]);

  const activeCodeSnippet = () => {
    return generateProviderStackExport(stackItems, selectedProvider, selectedFormat);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(activeCodeSnippet());
    setCopiedFormat(selectedFormat);
    onNotify(`Copied ${selectedFormat.toUpperCase()} configuration to clipboard!`);
    setTimeout(() => setCopiedFormat(null), 2200);
  };

  const handleShareStack = () => {
    const slugList = stackItems.map(i => i.slug).join(',');
    const shareUrl = `${window.location.origin}${window.location.pathname}?stack=${encodeURIComponent(slugList)}`;
    navigator.clipboard.writeText(shareUrl);
    setShared(true);
    onNotify('Shareable stack link copied to clipboard!');
    setTimeout(() => setShared(false), 2200);
  };

  const handleDownload = () => {
    const filenames: Record<StackExportFormat, string> = {
      npx: 'install-command.txt',
      json: '.clauderc.json',
      md: 'CLAUDE_STACK.md',
      mcp: 'claude_desktop_config.json',
      yaml: 'claude-stack.yaml',
      sh: 'install-stack.sh',
      ps1: 'install-stack.ps1',
      docker: 'docker-compose.yml',
      env: '.env.example'
    };
    const filename = filenames[selectedFormat];
    const blob = new Blob([activeCodeSnippet()], { type: 'text/plain;charset=utf-8' });
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

  // Tool Category Metadata Definition for clear separation
  const TOOL_CATEGORIES: {
    type: ComponentType;
    label: string;
    pluralLabel: string;
    icon: React.ReactNode;
    colorText: string;
    colorBg: string;
    colorBorder: string;
    description: string;
    targetDir: string;
  }[] = [
    {
      type: 'skill',
      label: 'Skill',
      pluralLabel: 'Skills',
      icon: <Sparkles className="w-4 h-4 text-amber-500" />,
      colorText: 'text-amber-600 dark:text-amber-400',
      colorBg: 'bg-amber-500/10',
      colorBorder: 'border-amber-500/30',
      description: 'Prompt specifications, domain workflows, and instruction sets.',
      targetDir: '~/.claude/skills'
    },
    {
      type: 'agent',
      label: 'Agent',
      pluralLabel: 'Agents',
      icon: <Cpu className="w-4 h-4 text-purple-500" />,
      colorText: 'text-purple-600 dark:text-purple-400',
      colorBg: 'bg-purple-500/10',
      colorBorder: 'border-purple-500/30',
      description: 'Autonomous multi-step personas and task execution engines.',
      targetDir: '~/.claude/agents'
    },
    {
      type: 'command',
      label: 'Command',
      pluralLabel: 'Commands',
      icon: <Terminal className="w-4 h-4 text-blue-500" />,
      colorText: 'text-blue-600 dark:text-blue-400',
      colorBg: 'bg-blue-500/10',
      colorBorder: 'border-blue-500/30',
      description: 'Executable CLI shortcuts, slash commands, and custom routines.',
      targetDir: '~/.claude/commands'
    },
    {
      type: 'setting',
      label: 'Setting',
      pluralLabel: 'Settings',
      icon: <Sliders className="w-4 h-4 text-emerald-500" />,
      colorText: 'text-emerald-600 dark:text-emerald-400',
      colorBg: 'bg-emerald-500/10',
      colorBorder: 'border-emerald-500/30',
      description: 'Claude Code sandbox configuration, token limits, and safety rules.',
      targetDir: '~/.claude/settings'
    },
    {
      type: 'hook',
      label: 'Hook',
      pluralLabel: 'Hooks',
      icon: <Anchor className="w-4 h-4 text-pink-500" />,
      colorText: 'text-pink-600 dark:text-pink-400',
      colorBg: 'bg-pink-500/10',
      colorBorder: 'border-pink-500/30',
      description: 'Lifecycle event listeners, git pre-commit checks, and auto verifiers.',
      targetDir: '~/.claude/hooks'
    },
    {
      type: 'mcp',
      label: 'MCP Server',
      pluralLabel: 'MCPs (Model Context Protocol)',
      icon: <Layers className="w-4 h-4 text-cyan-500" />,
      colorText: 'text-cyan-600 dark:text-cyan-400',
      colorBg: 'bg-cyan-500/10',
      colorBorder: 'border-cyan-500/30',
      description: 'Model Context Protocol connectors for local and remote APIs.',
      targetDir: '~/.claude/mcp & claude_desktop_config.json'
    },
    {
      type: 'plugin',
      label: 'Plugin',
      pluralLabel: 'Plugins',
      icon: <Puzzle className="w-4 h-4 text-orange-500" />,
      colorText: 'text-orange-600 dark:text-orange-400',
      colorBg: 'bg-orange-500/10',
      colorBorder: 'border-orange-500/30',
      description: 'Third-party ecosystem extensions and tool integrations.',
      targetDir: '~/.claude/plugins'
    }
  ];

  // Format metadata
  const EXPORT_FORMATS: {
    id: StackExportFormat;
    label: string;
    subLabel: string;
    icon: React.ReactNode;
    color: string;
    targetPath: string;
    description: string;
  }[] = [
    {
      id: 'npx',
      label: 'NPX CLI',
      subLabel: 'One-liner Installer',
      icon: <Terminal className="w-3.5 h-3.5" />,
      color: 'text-amber-500',
      targetPath: 'Terminal / Command Line',
      description: 'Run directly in your project root to provision all components automatically.'
    },
    {
      id: 'md',
      label: 'SKILL.md',
      subLabel: 'Markdown Bundle',
      icon: <FileText className="w-3.5 h-3.5" />,
      color: 'text-amber-500',
      targetPath: 'CLAUDE_STACK.md',
      description: 'Aggregated Markdown specification with trigger evaluation matrix.'
    },
    {
      id: 'mcp',
      label: 'MCP Protocol',
      subLabel: 'FastMCP & Desktop',
      icon: <Layers className="w-3.5 h-3.5" />,
      color: 'text-cyan-500',
      targetPath: 'claude_desktop_config.json',
      description: 'Model Context Protocol JSON configuration for Claude Desktop & CLI.'
    },
    {
      id: 'json',
      label: '.json Manifest',
      subLabel: 'Ecosystem Config',
      icon: <FileCode className="w-3.5 h-3.5" />,
      color: 'text-emerald-500',
      targetPath: '.clauderc.json',
      description: 'Structured JSON manifest defining all installed component endpoints.'
    },
    {
      id: 'yaml',
      label: '.yaml Workflow',
      subLabel: 'Multi-Agent Pipeline',
      icon: <Sliders className="w-3.5 h-3.5" />,
      color: 'text-purple-500',
      targetPath: 'claude-stack.yaml',
      description: 'Multi-agent orchestration workflow definition.'
    },
    {
      id: 'sh',
      label: 'Bash Script',
      subLabel: 'Linux / macOS',
      icon: <Terminal className="w-3.5 h-3.5" />,
      color: 'text-blue-500',
      targetPath: 'install-stack.sh',
      description: 'Shell script to create directories and execute CLI setup.'
    },
    {
      id: 'ps1',
      label: 'PowerShell',
      subLabel: 'Windows CLI',
      icon: <Monitor className="w-3.5 h-3.5" />,
      color: 'text-sky-500',
      targetPath: 'install-stack.ps1',
      description: 'Windows PowerShell script for automated component installation.'
    },
    {
      id: 'docker',
      label: 'Docker Compose',
      subLabel: 'Container Environment',
      icon: <Box className="w-3.5 h-3.5" />,
      color: 'text-indigo-400',
      targetPath: 'docker-compose.yml',
      description: 'Isolated Node.js container setup with pre-mounted Claude volume.'
    },
    {
      id: 'env',
      label: '.env Config',
      subLabel: 'Environment Vars',
      icon: <Key className="w-3.5 h-3.5" />,
      color: 'text-amber-500',
      targetPath: '.env.example',
      description: 'Aggregated environment variable declarations for all stack tools.'
    }
  ];

  const currentFormatMeta = EXPORT_FORMATS.find(f => f.id === selectedFormat) || EXPORT_FORMATS[0];

  const getItemCountByType = (type: ComponentType) => {
    return stackItems.filter(i => i.type === type).length;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 md:p-6 animate-in fade-in duration-200">
      
      {/* Backdrop click to close */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container (NOT full width: centered max-w-4xl, rounded-2xl with margins on all screen sizes) */}
      <div className={`relative w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden z-10 border flex flex-col max-h-[92vh] sm:max-h-[90vh] my-auto ${
        isDark ? 'bg-zinc-950 text-zinc-100 border-zinc-800' : 'bg-white text-zinc-900 border-zinc-200'
      }`}>
        
        {/* ========================================================================= */}
        {/* MODAL HEADER: High contrast, responsive touch targets */}
        {/* ========================================================================= */}
        <div className={`p-4 sm:p-5 border-b flex items-center justify-between gap-3 shrink-0 ${
          isDark ? 'border-zinc-800 bg-zinc-900/90' : 'border-zinc-200 bg-zinc-50'
        }`}>
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <div className="p-2.5 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-600 text-white shadow-md shadow-orange-500/20 shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className={`font-bold text-base sm:text-lg tracking-tight ${
                  isDark ? 'text-zinc-100' : 'text-zinc-950'
                }`}>
                  Stack Builder & Multi-Format Exporter
                </h3>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 shrink-0">
                  {stackItems.length} total tools
                </span>
              </div>
              <p className={`text-xs mt-0.5 truncate ${isDark ? 'text-zinc-400' : 'text-zinc-600 font-medium'}`}>
                Separated tools management for Skills, Agents, Commands, Settings, Hooks, MCPs & Plugins
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            {stackItems.length > 0 && (
              <button
                onClick={onClearAll}
                className="flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-bold text-red-600 dark:text-red-400 hover:bg-red-500/10 border border-transparent transition-colors cursor-pointer min-h-[44px]"
                title="Clear all components from stack"
              >
                <Trash2 className="w-4 h-4" />
                <span className="hidden sm:inline">Clear Stack</span>
              </button>
            )}

            {/* 44px minimum touch target button */}
            <button
              onClick={onClose}
              className={`p-2.5 rounded-xl border transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center ${
                isDark 
                  ? 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800' 
                  : 'bg-white border-zinc-200 text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100'
              }`}
              title="Close Panel"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MODAL SCROLLABLE BODY */}
        {/* ========================================================================= */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          
          {/* ----------------------------------------------------------------------- */}
          {/* RECOMMENDED STACK PRESETS SELECTOR */}
          {/* ----------------------------------------------------------------------- */}
          <div className={`p-4 rounded-xl border ${
            isDark ? 'bg-zinc-900/60 border-zinc-800' : 'bg-zinc-50 border-zinc-200'
          }`}>
            <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Recommended Stack Presets</span>
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20 font-bold">
                {STACK_PRESETS.length} Curated Presets
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {STACK_PRESETS.map((preset) => {
                const isCurrentActivePreset = preset.itemSlugs.length > 0 && preset.itemSlugs.every(slug => stackItems.some(item => item.slug === slug || item.id === slug));

                return (
                  <button
                    key={preset.id}
                    onClick={() => {
                      onApplyPreset(preset);
                      onNotify(`Loaded "${preset.name}" preset (${preset.badge})!`);
                    }}
                    className={`text-left p-3 rounded-xl border text-xs transition-all duration-150 cursor-pointer min-h-[44px] group relative ${
                      isCurrentActivePreset
                        ? isDark
                          ? 'bg-amber-500/10 border-amber-500/50 text-zinc-100 shadow-xs'
                          : 'bg-amber-50 border-amber-400 text-zinc-950 shadow-xs'
                        : isDark
                          ? 'bg-zinc-900 border-zinc-800 hover:border-amber-500/40 hover:bg-zinc-850 text-zinc-200'
                          : 'bg-white border-zinc-200 hover:border-amber-300 hover:bg-amber-50/30 text-zinc-900 shadow-2xs'
                    }`}
                  >
                    <div className="flex items-center justify-between font-bold mb-1 gap-1.5">
                      <span className={`truncate ${
                        isCurrentActivePreset 
                          ? 'text-amber-600 dark:text-amber-400' 
                          : 'text-zinc-950 dark:text-zinc-100 group-hover:text-amber-500'
                      }`}>
                        {preset.name}
                      </span>
                      <div className="flex items-center gap-1 shrink-0">
                        {isCurrentActivePreset && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        )}
                        <span className={`text-[10px] px-1.5 py-0.2 rounded font-bold ${
                          isCurrentActivePreset
                            ? 'bg-amber-500 text-white'
                            : 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20'
                        }`}>
                          {preset.badge}
                        </span>
                      </div>
                    </div>
                    <p className={`text-[11px] leading-snug line-clamp-2 ${
                      isDark ? 'text-zinc-400' : 'text-zinc-600 font-medium'
                    }`}>
                      {preset.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* TOOL TYPE FILTER TABS (SEPARATED BY CATEGORY) */}
          {/* ----------------------------------------------------------------------- */}
          <div className="space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h4 className={`text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 ${
                isDark ? 'text-zinc-400' : 'text-zinc-800'
              }`}>
                <Filter className="w-4 h-4 text-amber-500" />
                <span>Filter Stack Tools by Category</span>
              </h4>

              <button
                onClick={handleShareStack}
                className={`flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg border transition-colors cursor-pointer min-h-[36px] ${
                  isDark ? 'bg-zinc-900 border-zinc-800 text-amber-400 hover:bg-zinc-800' : 'bg-white border-zinc-200 text-amber-700 hover:bg-zinc-100'
                }`}
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>{shared ? 'Link Copied!' : 'Share Stack'}</span>
              </button>
            </div>

            {/* Horizontal Filter Bar for Tools */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              <button
                onClick={() => setSelectedFilter('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 cursor-pointer min-h-[36px] ${
                  selectedFilter === 'all'
                    ? 'bg-amber-500 text-white shadow-sm'
                    : isDark 
                      ? 'bg-zinc-900 border border-zinc-800 text-zinc-300 hover:bg-zinc-800' 
                      : 'bg-zinc-100 border border-zinc-200 text-zinc-700 hover:bg-zinc-200'
                }`}
              >
                <span>All Tools</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                  selectedFilter === 'all' ? 'bg-black/20 text-white' : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300'
                }`}>
                  {stackItems.length}
                </span>
              </button>

              {TOOL_CATEGORIES.map((cat) => {
                const count = getItemCountByType(cat.type);
                const isSelected = selectedFilter === cat.type;
                return (
                  <button
                    key={cat.type}
                    onClick={() => setSelectedFilter(cat.type)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 cursor-pointer min-h-[36px] ${
                      isSelected
                        ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-sm'
                        : isDark
                          ? 'bg-zinc-900 border border-zinc-800 text-zinc-300 hover:bg-zinc-800'
                          : 'bg-zinc-100 border border-zinc-200 text-zinc-700 hover:bg-zinc-200'
                    }`}
                  >
                    <span>{cat.icon}</span>
                    <span>{cat.pluralLabel}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                      isSelected ? 'bg-black/20 text-white' : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* SEPARATED CATEGORY GROUPS DISPLAY */}
          {/* ----------------------------------------------------------------------- */}
          {stackItems.length === 0 ? (
            <div className={`text-center py-10 px-4 rounded-2xl border ${
              isDark ? 'bg-zinc-900/30 border-zinc-800/80' : 'bg-zinc-50 border-zinc-200'
            }`}>
              <div className="w-12 h-12 mx-auto rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center mb-3 border border-amber-500/20">
                <Layers className="w-6 h-6" />
              </div>
              <h4 className={`font-bold text-base ${isDark ? 'text-zinc-100' : 'text-zinc-950'}`}>
                Your Stack is Currently Empty
              </h4>
              <p className={`text-xs mt-1.5 max-w-md mx-auto leading-relaxed ${
                isDark ? 'text-zinc-400' : 'text-zinc-600 font-medium'
              }`}>
                Browse skills, agents, commands, or MCPs and click <strong className="text-amber-600 dark:text-amber-400">+ Add to Stack</strong> or choose a recommended preset above to bundle components together.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              {TOOL_CATEGORIES.map((cat) => {
                const categoryItems = stackItems.filter(i => i.type === cat.type);
                
                // If filtering by specific category and this isn't it, skip
                if (selectedFilter !== 'all' && selectedFilter !== cat.type) return null;

                // If showing all, but category has 0 items, skip or show empty badge
                if (selectedFilter === 'all' && categoryItems.length === 0) return null;

                return (
                  <div
                    key={cat.type}
                    className={`rounded-2xl border overflow-hidden transition-all ${
                      isDark ? 'bg-zinc-900/70 border-zinc-800' : 'bg-white border-zinc-200 shadow-2xs'
                    }`}
                  >
                    {/* Category Header */}
                    <div className={`p-3.5 sm:p-4 border-b flex items-center justify-between gap-3 flex-wrap ${
                      isDark ? 'bg-zinc-900/90 border-zinc-800' : 'bg-zinc-50/80 border-zinc-200'
                    }`}>
                      <div className="flex items-center gap-2.5 min-w-0 flex-1">
                        <div className={`p-2 rounded-xl border ${cat.colorBg} ${cat.colorBorder} shrink-0`}>
                          {cat.icon}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <h4 className={`font-bold text-sm ${
                              isDark ? 'text-zinc-100' : 'text-zinc-950'
                            }`}>
                              {cat.pluralLabel}
                            </h4>
                            <span className={`px-2 py-0.2 text-[10px] font-mono font-bold rounded-full ${cat.colorBg} ${cat.colorText} border ${cat.colorBorder}`}>
                              {categoryItems.length} {categoryItems.length === 1 ? 'item' : 'items'}
                            </span>
                          </div>
                          <p className={`text-[11px] truncate ${
                            isDark ? 'text-zinc-400' : 'text-zinc-600 font-medium'
                          }`}>
                            {cat.description}
                          </p>
                        </div>
                      </div>

                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-semibold shrink-0">
                        Target: {cat.targetDir}
                      </span>
                    </div>

                    {/* Category Items List */}
                    <div className="p-3 space-y-2">
                      {categoryItems.length === 0 ? (
                        <p className={`text-xs p-3 text-center italic ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
                          No {cat.pluralLabel.toLowerCase()} added to stack yet.
                        </p>
                      ) : (
                        categoryItems.map((item) => (
                          <div
                            key={item.id}
                            className={`flex items-center justify-between p-3 rounded-xl border transition-all ${
                              isDark 
                                ? 'bg-zinc-950 border-zinc-800/80 text-zinc-200 hover:border-zinc-700' 
                                : 'bg-zinc-50/60 border-zinc-200 text-zinc-900 hover:border-zinc-300'
                            }`}
                          >
                            <div className="flex items-center gap-3 min-w-0 flex-1 pr-2">
                              <div className={`p-1.5 rounded-lg ${cat.colorBg} shrink-0`}>
                                {cat.icon}
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <span className={`font-bold text-xs sm:text-sm truncate ${
                                    isDark ? 'text-zinc-100' : 'text-zinc-950'
                                  }`}>
                                    {item.name}
                                  </span>
                                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-700 font-bold shrink-0">
                                    {item.category}
                                  </span>
                                </div>
                                <span className={`font-mono text-[11px] block truncate ${
                                  isDark ? 'text-zinc-400' : 'text-zinc-600 font-medium'
                                }`}>
                                  {item.slug}
                                </span>
                              </div>
                            </div>

                            {/* Delete Item Button (44px touch target) */}
                            <button
                              onClick={() => onRemoveItem(item.id)}
                              className={`p-2.5 rounded-lg border transition-colors shrink-0 cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center ${
                                isDark 
                                  ? 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-red-400 hover:bg-red-500/10 hover:border-red-500/30' 
                                  : 'bg-white border-zinc-200 text-zinc-500 hover:text-red-600 hover:bg-red-50 hover:border-red-200'
                              }`}
                              title={`Remove ${item.name} from ${cat.label}`}
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* ----------------------------------------------------------------------- */}
          {/* MULTI-FORMAT STACK EXPORTER CARD (High contrast, multi-format, theme-consistent) */}
          {/* ----------------------------------------------------------------------- */}
          {stackItems.length > 0 && (
            <div className={`p-4 sm:p-5 rounded-2xl border space-y-4 transition-colors ${
              isDark 
                ? 'bg-zinc-900/90 border-zinc-800 text-zinc-100 shadow-xl' 
                : 'bg-white border-zinc-200 text-zinc-900 shadow-sm'
            }`}>
              {/* Card Header & Format Selector Tabs */}
              <div className="space-y-3">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className={`p-2 rounded-xl border shrink-0 ${
                      isDark 
                        ? 'bg-amber-500/10 border-amber-500/30 text-amber-400' 
                        : 'bg-amber-500/10 border-amber-500/20 text-amber-600'
                    }`}>
                      <Code className="w-4 h-4" />
                    </span>
                    <div className="min-w-0">
                      <h4 className={`text-xs font-bold uppercase tracking-wider ${
                        isDark ? 'text-amber-400' : 'text-amber-700'
                      }`}>
                        Multi-Format Stack Exporter & Installer
                      </h4>
                      <p className={`text-[11px] font-mono truncate ${
                        isDark ? 'text-zinc-400' : 'text-zinc-600 font-medium'
                      }`}>
                        Target Placement: <strong className={isDark ? 'text-amber-300' : 'text-amber-700 font-bold'}>{currentFormatMeta.targetPath}</strong>
                      </p>
                    </div>
                  </div>

                  <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full font-semibold border shrink-0 ${
                    isDark 
                      ? 'bg-zinc-800 text-zinc-300 border-zinc-700' 
                      : 'bg-zinc-100 text-zinc-700 border-zinc-200'
                  }`}>
                    {allowedExportFormats.length} {selectedFilter !== 'all' ? `${selectedFilter.toUpperCase()} Formats` : 'Formats Available'}
                  </span>
                </div>

                {/* AI Provider Switcher (Claude, Gemini, ChatGPT, Z.AI, OpenCode, DeepSeek, OX Alpha) */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className={`font-semibold ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                      Target Ecosystem:
                    </span>
                    <span className={`font-mono font-bold text-[10px] ${getProviderMeta(selectedProvider).color}`}>
                      {getProviderMeta(selectedProvider).name} ({getProviderMeta(selectedProvider).badge})
                    </span>
                  </div>
                  
                  <div className={`flex items-center rounded-xl p-1 text-xs overflow-x-auto gap-1 border shrink-0 scrollbar-none transition-colors ${
                    isDark ? 'bg-zinc-950 border-zinc-800' : 'bg-zinc-100 border-zinc-200'
                  }`}>
                    {AI_PROVIDERS.map((prov) => {
                      const isSelected = selectedProvider === prov.id;
                      return (
                        <button
                          key={prov.id}
                          onClick={() => setSelectedProvider(prov.id)}
                          className={`px-2.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer min-h-[32px] text-xs ${
                            isSelected
                              ? `bg-gradient-to-r ${prov.activeColor} text-white font-bold shadow-xs`
                              : isDark
                                ? 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-850 font-medium'
                                : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200 font-medium'
                          }`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-white' : prov.color.replace('text-', 'bg-')}`} />
                          <span>{prov.shortName}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Format Switcher Tabs Bar (Horizontal Scrollable) */}
                <div className={`flex items-center rounded-xl p-1 text-xs overflow-x-auto gap-1 border shrink-0 scrollbar-none transition-colors ${
                  isDark ? 'bg-zinc-950 border-zinc-800' : 'bg-zinc-100 border-zinc-200'
                }`}>
                  {EXPORT_FORMATS.filter(fmt => allowedExportFormats.includes(fmt.id)).map((fmt) => {
                    const isSelected = selectedFormat === fmt.id;
                    return (
                      <button
                        key={fmt.id}
                        onClick={() => setSelectedFormat(fmt.id)}
                        className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer min-h-[36px] ${
                          isSelected
                            ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold shadow-xs'
                            : isDark
                              ? 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/80 font-medium'
                              : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200/80 font-medium'
                        }`}
                      >
                        <span className={isSelected ? 'text-white' : fmt.color}>{fmt.icon}</span>
                        <span className="font-mono text-[11px] uppercase">{fmt.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Format Description Banner */}
              <div className={`p-3 rounded-xl border text-xs flex items-start gap-2.5 transition-colors ${
                isDark 
                  ? 'bg-zinc-950/80 border-zinc-800 text-zinc-300' 
                  : 'bg-amber-50/70 border-amber-200/80 text-zinc-800'
              }`}>
                <Zap className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div className="min-w-0 flex-1 leading-relaxed">
                  <span className={`font-bold ${isDark ? 'text-amber-300' : 'text-amber-800'}`}>
                    {currentFormatMeta.label} ({currentFormatMeta.subLabel}):
                  </span>{' '}
                  <span className={isDark ? 'text-zinc-300' : 'text-zinc-700'}>
                    {currentFormatMeta.description}
                  </span>
                </div>
              </div>

              {/* Code Snippet Display Window */}
              <div className={`relative rounded-xl border overflow-hidden transition-colors ${
                isDark ? 'bg-zinc-950 border-zinc-800' : 'bg-zinc-50 border-zinc-200 shadow-2xs'
              }`}>
                {/* Code Window Header Bar */}
                <div className={`flex items-center justify-between px-3.5 py-2 border-b text-[11px] font-mono ${
                  isDark ? 'bg-zinc-900/80 border-zinc-800 text-zinc-400' : 'bg-zinc-100 border-zinc-200 text-zinc-600'
                }`}>
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-400/80"></span>
                      <span className="w-2 h-2 rounded-full bg-amber-400/80"></span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400/80"></span>
                    </div>
                    <span className={`font-semibold truncate ${isDark ? 'text-zinc-300' : 'text-zinc-800'}`}>
                      {currentFormatMeta.targetPath}
                    </span>
                  </div>
                  <button
                    onClick={handleCopy}
                    className={`flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-sans font-semibold transition-colors cursor-pointer ${
                      isDark ? 'hover:bg-zinc-800 text-zinc-300 hover:text-white' : 'hover:bg-zinc-200 text-zinc-700 hover:text-zinc-950'
                    }`}
                    title="Copy code snippet"
                  >
                    {copiedFormat === selectedFormat ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedFormat === selectedFormat ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                {/* Code snippet text */}
                <div className={`p-4 font-mono text-xs break-all max-h-56 overflow-y-auto leading-relaxed select-all ${
                  isDark ? 'text-amber-300' : 'text-zinc-800 font-medium'
                }`}>
                  <pre className="whitespace-pre-wrap font-mono">
                    {activeCodeSnippet()}
                  </pre>
                </div>
              </div>

              {/* Action Buttons: Copy, Download, Share */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                <button
                  id="stack-copy-command-btn"
                  onClick={handleCopy}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white text-xs font-bold shadow-md shadow-orange-500/20 active:scale-98 transition-all cursor-pointer min-h-[44px]"
                >
                  {copiedFormat === selectedFormat ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4 text-white" />}
                  <span>
                    {copiedFormat === selectedFormat 
                      ? 'Copied to Clipboard!' 
                      : `Copy ${selectedFormat.toUpperCase()} Configuration`}
                  </span>
                </button>

                <button
                  onClick={handleDownload}
                  className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl border text-xs font-bold transition-colors cursor-pointer min-h-[44px] ${
                    isDark 
                      ? 'border-zinc-700 bg-zinc-800 hover:bg-zinc-750 text-zinc-100' 
                      : 'border-zinc-300 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 shadow-2xs'
                  }`}
                >
                  <Download className="w-4 h-4 text-amber-500" />
                  <span>Download Configuration File</span>
                </button>
              </div>
            </div>
          )}

        </div>

        {/* ========================================================================= */}
        {/* MODAL FOOTER: Sponsors & Ecosystem badge */}
        {/* ========================================================================= */}
        <div className={`p-4 border-t shrink-0 ${
          isDark ? 'border-zinc-800 bg-zinc-950/90' : 'border-zinc-200 bg-zinc-50'
        }`}>
          <p className={`text-center text-[11px] mb-2 font-medium ${
            isDark ? 'text-zinc-400' : 'text-zinc-600'
          }`}>
            Supported by open source ecosystem builders
          </p>
          <div className="flex items-center justify-center gap-6 text-xs font-bold text-zinc-500 dark:text-zinc-400">
            <div className="flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors">
              <Box className="w-3.5 h-3.5 text-zinc-800 dark:text-zinc-200" />
              <span>Vercel</span>
            </div>
            <div className="flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors">
              <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
              <span>Neon</span>
            </div>
            <div className="flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors">
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              <span>Claude</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
