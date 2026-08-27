import React, { useState, useRef, useEffect } from 'react';
import { ComponentType, ThemeMode } from '../types';
import { 
  Sparkles, 
  Search, 
  Layers, 
  Terminal, 
  Sliders, 
  Anchor, 
  Cpu, 
  Puzzle, 
  Moon, 
  Sun,
  Monitor,
  Check,
  ChevronDown,
  Menu,
  X,
  Zap
} from 'lucide-react';

interface ThemeDropdownProps {
  themeMode: ThemeMode;
  onSelectThemeMode: (mode: ThemeMode) => void;
  isDark: boolean;
}

export const ThemeDropdown: React.FC<ThemeDropdownProps> = ({
  themeMode,
  onSelectThemeMode,
  isDark
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const options: {
    mode: ThemeMode;
    label: string;
    description: string;
    icon: React.ReactNode;
  }[] = [
    {
      mode: 'light',
      label: 'Light Mode',
      description: 'Clean daylight layout',
      icon: <Sun className="w-4 h-4 text-amber-500" />
    },
    {
      mode: 'dark',
      label: 'Dark Mode',
      description: 'Eye-safe twilight theme',
      icon: <Moon className="w-4 h-4 text-indigo-400 dark:text-amber-400" />
    },
    {
      mode: 'system',
      label: 'System Mode',
      description: 'Follows OS preference',
      icon: <Monitor className="w-4 h-4 text-blue-500 dark:text-blue-400" />
    }
  ];

  const currentIcon = themeMode === 'light' ? (
    <Sun className="w-4 h-4 text-amber-500" />
  ) : themeMode === 'dark' ? (
    <Moon className="w-4 h-4 text-amber-400" />
  ) : (
    <Monitor className="w-4 h-4 text-blue-500 dark:text-blue-400" />
  );

  const currentLabel = themeMode === 'light' ? 'Light' : themeMode === 'dark' ? 'Dark' : 'System';

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Select Theme Mode"
        className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-semibold transition-all duration-150 min-h-[40px] select-none ${
          isOpen
            ? isDark
              ? 'bg-zinc-800 border-amber-500/50 text-amber-400 ring-1 ring-amber-500/30'
              : 'bg-amber-50 border-amber-400 text-zinc-950 ring-1 ring-amber-400/30'
            : isDark
            ? 'bg-zinc-900/90 border-zinc-800 text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100 hover:border-zinc-700'
            : 'bg-white border-zinc-200 text-zinc-800 hover:bg-zinc-100/90 hover:text-zinc-950 hover:border-zinc-300 shadow-xs'
        }`}
      >
        <span className="shrink-0">{currentIcon}</span>
        <span className="hidden sm:inline font-medium">{currentLabel}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-zinc-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-amber-500' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div
          className={`absolute right-0 mt-2 w-64 rounded-xl shadow-2xl border p-1.5 z-50 animate-in fade-in zoom-in-95 duration-150 ${
            isDark
              ? 'bg-zinc-950/95 border-zinc-800 text-zinc-100 shadow-black/80 backdrop-blur-xl'
              : 'bg-white/95 border-zinc-200 text-zinc-900 shadow-zinc-300/50 backdrop-blur-xl'
          }`}
          role="menu"
          aria-orientation="vertical"
        >
          {/* Header Title */}
          <div className="px-2.5 py-2 border-b border-zinc-100 dark:border-zinc-800/80 mb-1">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                Visual Theme
              </span>
              <span className="text-[10px] px-1.5 py-0.5 rounded font-mono font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                {isDark ? 'Dark Active' : 'Light Active'}
              </span>
            </div>
          </div>

          {/* Options List */}
          <div className="space-y-1">
            {options.map((option) => {
              const isSelected = themeMode === option.mode;
              return (
                <button
                  key={option.mode}
                  type="button"
                  role="menuitem"
                  onClick={() => {
                    onSelectThemeMode(option.mode);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between p-2 rounded-lg text-left transition-all duration-150 group ${
                    isSelected
                      ? isDark
                        ? 'bg-amber-500/15 text-amber-300 font-semibold border border-amber-500/30'
                        : 'bg-amber-100/80 text-zinc-950 font-bold border border-amber-300'
                      : isDark
                      ? 'text-zinc-300 hover:bg-zinc-900 hover:text-zinc-100'
                      : 'text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950 font-medium'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`p-1.5 rounded-md shrink-0 transition-colors ${
                        isSelected
                          ? isDark
                            ? 'bg-amber-500/20 text-amber-300'
                            : 'bg-amber-200/80 text-zinc-950'
                          : isDark
                          ? 'bg-zinc-900 text-zinc-400 group-hover:text-zinc-200'
                          : 'bg-zinc-100 text-zinc-600 group-hover:text-zinc-900'
                      }`}
                    >
                      {option.icon}
                    </div>
                    <div>
                      <div className="text-xs font-semibold leading-none mb-1 flex items-center gap-1.5">
                        <span>{option.label}</span>
                        {option.mode === 'system' && (
                          <span className="text-[9px] font-mono font-normal px-1 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                            Auto
                          </span>
                        )}
                      </div>
                      <div
                        className={`text-[10px] leading-tight ${
                          isSelected
                            ? isDark
                              ? 'text-amber-400/90'
                              : 'text-zinc-700 font-medium'
                            : 'text-zinc-500 dark:text-zinc-400'
                        }`}
                      >
                        {option.description}
                      </div>
                    </div>
                  </div>

                  {isSelected && (
                    <Check
                      className={`w-4 h-4 shrink-0 ${
                        isDark ? 'text-amber-400' : 'text-amber-600'
                      }`}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Footer Status */}
          <div className="mt-1.5 pt-2 px-2.5 pb-1 border-t border-zinc-100 dark:border-zinc-800/80 text-[10px] text-zinc-400 dark:text-zinc-500 flex items-center justify-between">
            <span>Mode: <strong className="text-zinc-700 dark:text-zinc-300 uppercase">{themeMode}</strong></span>
            <span>OS Render: <strong className="text-zinc-700 dark:text-zinc-300 font-mono">{isDark ? 'Dark' : 'Light'}</strong></span>
          </div>
        </div>
      )}
    </div>
  );
};

interface HeaderProps {
  activeType: ComponentType | 'all';
  onSelectType: (type: ComponentType | 'all') => void;
  typeCounts: Record<string, number>;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  themeMode: ThemeMode;
  onSelectThemeMode: (mode: ThemeMode) => void;
  isDark: boolean;
  onToggleTheme?: () => void;
  stackCount: number;
  onOpenStack: () => void;
  onOpenDocs: () => void;
  onOpenBlog: () => void;
  onOpenJobs: () => void;
  onOpenTester: () => void;
  onOpenCreate: () => void;
  onOpenSidebarMobile?: () => void;
  onOpenSignIn?: () => void;
  userSignedIn?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  activeType,
  onSelectType,
  typeCounts,
  searchQuery,
  onSearchChange,
  themeMode,
  onSelectThemeMode,
  isDark,
  onToggleTheme,
  stackCount,
  onOpenStack,
  onOpenDocs,
  onOpenBlog,
  onOpenJobs,
  onOpenTester,
  onOpenCreate,
  onOpenSidebarMobile,
  onOpenSignIn,
  userSignedIn = false
}) => {
  const typeNavItems: { type: ComponentType | 'all'; label: string; countKey: string; icon: React.ReactNode }[] = [
    { type: 'all', label: 'All', countKey: 'all', icon: <Layers className="w-3.5 h-3.5" /> },
    { type: 'skill', label: 'Skills', countKey: 'skill', icon: <Sparkles className="w-3.5 h-3.5" /> },
    { type: 'agent', label: 'Agents', countKey: 'agent', icon: <Cpu className="w-3.5 h-3.5" /> },
    { type: 'command', label: 'Commands', countKey: 'command', icon: <Terminal className="w-3.5 h-3.5" /> },
    { type: 'setting', label: 'Settings', countKey: 'setting', icon: <Sliders className="w-3.5 h-3.5" /> },
    { type: 'hook', label: 'Hooks', countKey: 'hook', icon: <Anchor className="w-3.5 h-3.5" /> },
    { type: 'mcp', label: 'MCPs', countKey: 'mcp', icon: <Cpu className="w-3.5 h-3.5" /> },
    { type: 'plugin', label: 'Plugins', countKey: 'plugin', icon: <Puzzle className="w-3.5 h-3.5" /> }
  ];

  return (
    <header className={`sticky top-0 z-40 border-b transition-colors duration-200 ${
      isDark ? 'bg-zinc-950/95 border-zinc-800 text-zinc-100 backdrop-blur-md' : 'bg-white/95 border-zinc-200 text-zinc-900 backdrop-blur-md'
    }`}>
      {/* Top Utility Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 gap-2 sm:gap-4">
          
          {/* Logo & Branding */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {onOpenSidebarMobile && (
              <button
                onClick={onOpenSidebarMobile}
                className={`md:hidden p-1.5 rounded-lg text-zinc-400 hover:text-zinc-200 ${
                  isDark ? 'hover:bg-zinc-800' : 'hover:bg-zinc-200'
                }`}
                title="Open Sidebar"
                aria-label="Open Sidebar Menu"
              >
                <Menu className="w-5 h-5 text-amber-500" />
              </button>
            )}
            <div 
              className="flex items-center gap-2 sm:gap-2.5 cursor-pointer select-none" 
              onClick={() => onSelectType('all')}
              role="button"
              tabIndex={0}
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-tr from-amber-600 to-orange-500 flex items-center justify-center text-white shadow-md shadow-orange-500/20 font-bold text-sm sm:text-base">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="font-bold text-sm sm:text-base tracking-tight leading-none">Claude Code</span>
                  <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                    Templates
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] text-zinc-500 dark:text-zinc-400 font-medium hidden xs:inline block leading-tight">Ecosystem & Stack Builder</span>
              </div>
            </div>
          </div>

          {/* Center Search Bar (Desktop) */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input
                id="header-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search 1,848 components, skills, agents, MCPs..."
                className={`w-full pl-9 pr-8 py-1.5 text-sm rounded-lg border transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-amber-500/50 ${
                  isDark
                    ? 'bg-zinc-900/80 border-zinc-800 text-zinc-100 placeholder-zinc-500 focus:border-amber-500/80'
                    : 'bg-zinc-50 border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:border-amber-500/80'
                }`}
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 p-0.5"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Right Action Links */}
          <div className="flex items-center gap-2">
            
            {/* Detailed Theme Dropdown (Light Mode, Dark Mode, System Mode) */}
            <ThemeDropdown
              themeMode={themeMode}
              onSelectThemeMode={onSelectThemeMode}
              isDark={isDark}
            />

          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-3">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search 1,848 skills, agents, MCPs..."
              className={`w-full pl-9 pr-8 py-2 text-xs sm:text-sm rounded-lg border focus:outline-none focus:ring-2 focus:ring-amber-500/50 ${
                isDark
                  ? 'bg-zinc-900 border-zinc-800 text-zinc-100 placeholder-zinc-500'
                  : 'bg-zinc-50 border-zinc-200 text-zinc-900 placeholder-zinc-400'
              }`}
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 p-1 hover:text-zinc-600 dark:hover:text-zinc-200"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Category / Type Tabs Bar - Smooth touch scrolling */}
        <div className="flex items-center space-x-1.5 overflow-x-auto py-2.5 scrollbar-none border-t border-zinc-100 dark:border-zinc-800/80 text-xs font-medium -mx-3 px-3 sm:mx-0 sm:px-0">
          {typeNavItems.map((item) => {
            const isSelected = activeType === item.type;
            const count = typeCounts[item.countKey] ?? 0;
            return (
              <button
                key={item.type}
                onClick={() => onSelectType(item.type)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap transition-all duration-150 shrink-0 min-h-[38px] ${
                  isSelected
                    ? isDark
                      ? 'bg-zinc-800 text-amber-400 font-semibold shadow-sm ring-1 ring-amber-500/30'
                      : 'bg-amber-100 border border-amber-300 text-zinc-950 font-bold shadow-xs'
                    : isDark
                      ? 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/80'
                      : 'text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 font-medium'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
                <span className={`text-[10px] sm:text-[11px] px-1.5 py-0.2 rounded-full font-mono ${
                  isSelected
                    ? isDark
                      ? 'bg-amber-400/20 text-amber-300'
                      : 'bg-amber-200/80 text-zinc-950 font-bold'
                    : isDark
                      ? 'bg-zinc-900 text-zinc-500'
                      : 'bg-zinc-200/70 text-zinc-800 font-semibold'
                }`}>
                  {count.toLocaleString()}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};

