import React, { useState, useRef, useEffect } from 'react';
import { ComponentType, ThemeMode } from '../types';
import { 
  Search, 
  Moon, 
  Sun,
  Monitor,
  ChevronDown,
  Check,
  Menu,
  X,
  Zap
} from 'lucide-react';

interface HeaderProps {
  activeType: ComponentType | 'all';
  onSelectType: (type: ComponentType | 'all') => void;
  typeCounts: Record<string, number>;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  isDark: boolean;
  themeMode?: ThemeMode;
  onSelectThemeMode?: (mode: ThemeMode) => void;
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
  isDark,
  themeMode,
  onSelectThemeMode,
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
  const [isThemeDropdownOpen, setIsThemeDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsThemeDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentMode: ThemeMode = themeMode || (isDark ? 'dark' : 'light');

  const themeOptions: { mode: ThemeMode; label: string; icon: React.ReactNode }[] = [
    { 
      mode: 'light', 
      label: 'Light Mode', 
      icon: <Sun className="w-4 h-4 text-amber-500" /> 
    },
    { 
      mode: 'dark', 
      label: 'Dark Mode', 
      icon: <Moon className="w-4 h-4 text-indigo-400" /> 
    },
    { 
      mode: 'system', 
      label: 'System Mode', 
      icon: <Monitor className="w-4 h-4 text-zinc-400" /> 
    },
  ];

  const getCurrentModeIcon = () => {
    switch (currentMode) {
      case 'light':
        return <Sun className="w-4 h-4 text-amber-500" />;
      case 'dark':
        return <Moon className="w-4 h-4 text-indigo-400" />;
      case 'system':
      default:
        return <Monitor className="w-4 h-4 text-zinc-400" />;
    }
  };

  const getCurrentModeLabel = () => {
    switch (currentMode) {
      case 'light':
        return 'Light';
      case 'dark':
        return 'Dark';
      case 'system':
      default:
        return 'System';
    }
  };

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
          <div className="flex items-center gap-1 sm:gap-2">
            
            {/* Theme Mode Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsThemeDropdownOpen(!isThemeDropdownOpen)}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-150 cursor-pointer ${
                  isDark 
                    ? 'bg-zinc-900/90 border-zinc-800 text-zinc-200 hover:bg-zinc-800 hover:border-zinc-700' 
                    : 'bg-zinc-50 border-zinc-200 text-zinc-800 hover:bg-zinc-100 hover:border-zinc-300'
                }`}
                title={`Theme Mode: ${getCurrentModeLabel()}`}
                aria-label="Select theme mode"
              >
                {getCurrentModeIcon()}
                <span className="hidden sm:inline-block capitalize">{getCurrentModeLabel()}</span>
                <ChevronDown className={`w-3.5 h-3.5 opacity-60 transition-transform duration-200 ${
                  isThemeDropdownOpen ? 'rotate-180' : ''
                }`} />
              </button>

              {/* Dropdown Menu */}
              {isThemeDropdownOpen && (
                <div className={`absolute right-0 mt-2 w-44 rounded-xl shadow-xl border p-1.5 z-50 transition-all ${
                  isDark
                    ? 'bg-zinc-900/95 border-zinc-800 text-zinc-200 shadow-black/50 backdrop-blur-md'
                    : 'bg-white/95 border-zinc-200 text-zinc-800 shadow-zinc-300/50 backdrop-blur-md'
                }`}>
                  <div className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 mb-1 border-b ${
                    isDark ? 'text-zinc-500 border-zinc-800' : 'text-zinc-400 border-zinc-100'
                  }`}>
                    Theme Preference
                  </div>
                  {themeOptions.map((opt) => {
                    const isSelected = currentMode === opt.mode;
                    return (
                      <button
                        key={opt.mode}
                        onClick={() => {
                          if (onSelectThemeMode) {
                            onSelectThemeMode(opt.mode);
                          } else if (onToggleTheme) {
                            onToggleTheme();
                          }
                          setIsThemeDropdownOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                          isSelected
                            ? isDark
                              ? 'bg-amber-500/10 text-amber-400 font-semibold'
                              : 'bg-amber-50 text-amber-900 font-bold'
                            : isDark
                              ? 'hover:bg-zinc-800/80 text-zinc-300'
                              : 'hover:bg-zinc-100 text-zinc-700'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          {opt.icon}
                          <span>{opt.label}</span>
                        </div>
                        {isSelected && (
                          <Check className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

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
      </div>
    </header>
  );
};

