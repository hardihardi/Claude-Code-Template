import React, { useState } from 'react';
import { ComponentItem } from '../types';
import { 
  Sparkles, 
  Cpu, 
  Terminal, 
  Sliders, 
  Anchor, 
  Puzzle, 
  Layers, 
  Plus, 
  Check, 
  Copy, 
  Star, 
  ExternalLink, 
  ShieldCheck, 
  FileText, 
  Code2, 
  Tag,
  Flame 
} from 'lucide-react';

interface ComponentCardProps {
  component: ComponentItem;
  isInStack: boolean;
  onToggleStack: (item: ComponentItem) => void;
  onViewDetails: (item: ComponentItem) => void;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
  isDark: boolean;
  viewMode?: 'grid' | 'list';
  onCopyCli?: (text: string) => void;
}

export const ComponentCard: React.FC<ComponentCardProps> = ({
  component,
  isInStack,
  onToggleStack,
  onViewDetails,
  isBookmarked,
  onToggleBookmark,
  isDark,
  viewMode = 'grid',
  onCopyCli
}) => {
  const [copied, setCopied] = useState(false);

  const getComponentIcon = () => {
    switch (component.type) {
      case 'skill':
        return <Sparkles className="w-4 h-4 text-amber-500" />;
      case 'agent':
        return <Cpu className="w-4 h-4 text-purple-500" />;
      case 'command':
        return <Terminal className="w-4 h-4 text-blue-500" />;
      case 'setting':
        return <Sliders className="w-4 h-4 text-emerald-500" />;
      case 'hook':
        return <Anchor className="w-4 h-4 text-pink-500" />;
      case 'mcp':
        return <Layers className="w-4 h-4 text-cyan-500" />;
      case 'plugin':
        return <Puzzle className="w-4 h-4 text-orange-500" />;
      default:
        return <Sparkles className="w-4 h-4 text-amber-500" />;
    }
  };

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    const command = component.cliCommand || `npx claude-code-templates@latest --${component.type} ${component.slug}`;
    navigator.clipboard.writeText(command);
    setCopied(true);
    if (onCopyCli) onCopyCli(command);
    setTimeout(() => setCopied(false), 2000);
  };

  if (viewMode === 'list') {
    return (
      <div
        id={`card-${component.id}`}
        onClick={() => onViewDetails(component)}
        className={`group relative rounded-xl border p-3.5 sm:p-4 transition-all duration-150 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 ${
          isInStack
            ? isDark
              ? 'bg-amber-950/20 border-amber-500/40 shadow-xs'
              : 'bg-amber-50/70 border-amber-300 shadow-xs'
            : isDark
              ? 'bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900'
              : 'bg-white border-zinc-200 hover:border-zinc-300 hover:shadow-xs'
        }`}
      >
        <div className="flex items-start sm:items-center gap-3 flex-1 min-w-0">
          <div className={`p-2 sm:p-2.5 rounded-lg shrink-0 border ${
            isDark ? 'bg-zinc-800 border-zinc-700/60' : 'bg-zinc-100 border-zinc-200'
          }`}>
            {getComponentIcon()}
          </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                <h4 className={`font-bold text-sm tracking-tight group-hover:text-amber-500 transition-colors ${
                  isDark ? 'text-zinc-100' : 'text-zinc-900'
                }`}>
                  {component.name}
                </h4>
              {component.verified && (
                <span title="Verified by Claude Code Team">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                </span>
              )}
              {component.isTrending && (
                <span className="flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-gradient-to-r from-orange-500/15 via-amber-500/15 to-red-500/15 text-orange-600 dark:text-orange-400 border border-orange-500/30 shrink-0 shadow-2xs" title={`Engagement Score: ${component.trendingScore || 0}`}>
                  <Flame className="w-3 h-3 text-orange-500 fill-orange-500 animate-pulse" />
                  <span>Trending{component.trendingRank && component.trendingRank <= 10 ? ` #${component.trendingRank}` : ''}</span>
                </span>
              )}
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                isDark ? 'bg-zinc-800 text-zinc-400 border-zinc-700' : 'bg-zinc-100 text-zinc-800 border-zinc-200 font-semibold'
              }`}>
                {component.category}
              </span>
              <div className="flex items-center gap-1">
                <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-zinc-500/10 text-zinc-600 dark:text-zinc-400 border border-zinc-500/20 font-bold">
                  {component.type === 'skill' ? '.md' : component.type === 'agent' ? '.yaml' : component.type === 'command' ? '.sh' : component.type === 'setting' ? '.json' : component.type === 'hook' ? '.sh' : component.type === 'mcp' ? 'mcp' : '.json'}
                </span>
              </div>
            </div>
            <p className={`text-xs mt-1 line-clamp-2 sm:line-clamp-1 ${isDark ? 'text-zinc-400' : 'text-zinc-700'}`}>
              {component.description}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between sm:justify-end gap-2.5 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-zinc-100 dark:border-zinc-800/80">
          <div className={`text-xs font-semibold px-2 py-1 rounded ${
            isDark ? 'text-zinc-300 bg-zinc-800/60' : 'text-zinc-800 bg-zinc-100'
          }`}>
            {component.installs.toLocaleString()} users
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={handleCopy}
              className={`p-2 rounded-lg border text-xs transition-colors min-h-[36px] min-w-[36px] flex items-center justify-center ${
                isDark ? 'border-zinc-800 hover:bg-zinc-800 text-zinc-400' : 'border-zinc-200 hover:bg-zinc-100 text-zinc-600'
              }`}
              title="Copy CLI command"
              aria-label="Copy command"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleStack(component);
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all min-h-[36px] ${
                isInStack
                  ? 'bg-amber-500 text-white border-amber-600 hover:bg-amber-600'
                  : isDark
                    ? 'bg-zinc-800 border-zinc-700 text-zinc-200 hover:bg-zinc-700'
                    : 'bg-white border-zinc-300 text-zinc-800 hover:bg-zinc-50'
              }`}
            >
              {isInStack ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>In Stack</span>
                </>
              ) : (
                <>
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      id={`card-${component.id}`}
      onClick={() => onViewDetails(component)}
      className={`group relative rounded-xl border p-5 transition-all duration-200 cursor-pointer flex flex-col justify-between hover:shadow-md ${
        isInStack
          ? isDark
            ? 'bg-amber-950/25 border-amber-500/50 ring-1 ring-amber-500/30'
            : 'bg-amber-50/80 border-amber-300 ring-1 ring-amber-400/40 shadow-sm'
          : isDark
            ? 'bg-zinc-900/60 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900'
            : 'bg-white border-zinc-200 hover:border-zinc-300 hover:shadow-zinc-100'
      }`}
    >
      <div>
        {/* Top bar with Icon, Title, and Bookmark */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex items-center gap-3">
            <div className={`p-2.5 rounded-xl border shadow-sm ${
              isDark ? 'bg-zinc-800 border-zinc-700/60' : 'bg-zinc-50 border-zinc-200'
            }`}>
              {getComponentIcon()}
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h4 className={`font-bold text-base tracking-tight group-hover:text-amber-500 transition-colors ${
                  isDark ? 'text-zinc-100' : 'text-zinc-900'
                }`}>
                  {component.name}
                </h4>
                {component.verified && (
                  <span title="Verified by Claude Code Team">
                    <ShieldCheck className="w-4 h-4 text-blue-500" />
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2 mt-0.5">
                <span className={`text-[11px] font-mono uppercase tracking-wider font-semibold ${
                  isDark ? 'text-zinc-400' : 'text-zinc-600'
                }`}>
                  {component.type} • {component.version || '1.0.0'}
                </span>
                <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-zinc-500/10 text-zinc-600 dark:text-zinc-400 border border-zinc-500/20 font-bold">
                  {component.type === 'skill' ? '.md' : component.type === 'agent' ? '.yaml' : component.type === 'command' ? '.sh' : component.type === 'setting' ? '.json' : component.type === 'hook' ? '.sh' : component.type === 'mcp' ? 'mcp' : '.json'}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            {component.isTrending && (
              <span className="flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-gradient-to-r from-orange-500/15 via-amber-500/15 to-red-500/15 text-orange-600 dark:text-orange-400 border border-orange-500/30 shrink-0 shadow-2xs" title={`Engagement Score: ${component.trendingScore || 0}`}>
                <Flame className="w-3 h-3 text-orange-500 fill-orange-500 animate-pulse" />
                <span className="hidden sm:inline">Trending{component.trendingRank && component.trendingRank <= 10 ? ` #${component.trendingRank}` : ''}</span>
                <span className="sm:hidden">{component.trendingRank && component.trendingRank <= 10 ? `#${component.trendingRank}` : '🔥'}</span>
              </span>
            )}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleBookmark(component.id);
              }}
              className={`p-1.5 rounded-lg text-zinc-400 transition-colors ${
                isBookmarked
                  ? 'text-amber-500 bg-amber-500/10'
                  : isDark
                    ? 'hover:text-zinc-200 hover:bg-zinc-800'
                    : 'hover:text-zinc-700 hover:bg-zinc-100'
              }`}
              title={isBookmarked ? "Remove bookmark" : "Bookmark component"}
            >
              <Star className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500' : ''}`} />
            </button>
          </div>
        </div>

        {/* Description body */}
        <p className={`text-xs sm:text-[13px] leading-relaxed mb-4 line-clamp-4 ${
          isDark ? 'text-zinc-300' : 'text-zinc-700'
        }`}>
          {component.description}
        </p>

        {/* Tags if available */}
        {component.tags && component.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {component.tags.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                className={`text-[10px] font-medium px-2 py-0.5 rounded-md border ${
                  isDark
                    ? 'bg-zinc-800/80 text-zinc-400 border-zinc-700/60'
                    : 'bg-zinc-100 text-zinc-800 border-zinc-200 font-semibold'
                }`}
              >
                {tag}
              </span>
            ))}
            {component.tags.length > 3 && (
              <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${
                isDark ? 'text-zinc-400' : 'text-zinc-700'
              }`}>
                +{component.tags.length - 3}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Bottom Metadata & Action Buttons */}
      <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between gap-2">
        
        {/* Category & Installs */}
        <div className="flex flex-col">
          <span className={`text-[11px] font-semibold font-mono ${
            isDark ? 'text-amber-400/90' : 'text-amber-800'
          }`}>
            {component.category}
          </span>
          <span className={`text-xs font-bold ${
            isDark ? 'text-zinc-300' : 'text-zinc-900'
          }`}>
            {component.installs.toLocaleString()} active users
          </span>
        </div>

        {/* Actions: Copy CLI & Add to Stack */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={handleCopy}
            className={`p-2 rounded-lg border text-xs transition-colors ${
              copied
                ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-500'
                : isDark
                  ? 'border-zinc-800 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200'
                  : 'border-zinc-200 hover:bg-zinc-100 text-zinc-600 hover:text-zinc-900'
            }`}
            title="Copy installation CLI command"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleStack(component);
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-150 active:scale-95 shadow-sm ${
              isInStack
                ? 'bg-amber-500 text-white border-amber-600 hover:bg-amber-600'
                : isDark
                  ? 'bg-zinc-800 border-zinc-700 text-zinc-200 hover:bg-zinc-700 hover:border-amber-500/50'
                  : 'bg-white border-zinc-300 text-zinc-800 hover:bg-zinc-50 hover:border-amber-500'
            }`}
          >
            {isInStack ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>In Stack</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" />
                <span>Add to Stack</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
