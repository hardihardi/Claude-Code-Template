import React, { useState } from 'react';
import { ComponentType } from '../types';
import { 
  Sparkles, 
  Cpu, 
  Terminal, 
  Sliders, 
  Anchor, 
  Puzzle, 
  Flame, 
  Briefcase, 
  FileText, 
  BookOpen, 
  Github, 
  LogIn, 
  User, 
  Check, 
  X,
  ChevronLeft,
  ChevronRight,
  Layers,
  Zap,
  Star,
  HardDrive,
  FolderHeart,
  Grid,
  FlaskConical,
  PlusCircle,
  Wand2
} from 'lucide-react';

interface SidebarProps {
  activeType: ComponentType | 'all';
  onSelectType: (type: ComponentType | 'all') => void;
  isFavoritesOnly: boolean;
  onSelectFavorites: () => void;
  favoriteCount: number;
  stackCount: number;
  onOpenStack: () => void;
  onOpenTester?: () => void;
  onOpenCreate?: () => void;
  isDark: boolean;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
  onOpenTrending?: () => void;
  onOpenJobs: () => void;
  onOpenBlog: () => void;
  onOpenDocs: () => void;
  onOpenSignIn: () => void;
  userSignedIn?: boolean;
  userName?: string;
  typeCounts?: Record<string, number>;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeType,
  onSelectType,
  isFavoritesOnly,
  onSelectFavorites,
  favoriteCount,
  stackCount,
  onOpenStack,
  onOpenTester,
  onOpenCreate,
  isDark,
  isOpenMobile,
  onCloseMobile,
  onOpenTrending,
  onOpenJobs,
  onOpenBlog,
  onOpenDocs,
  onOpenSignIn,
  userSignedIn = false,
  userName = "Guest Developer",
  typeCounts = {} as Record<string, number>
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Component catalog list with exact counts
  const catalogTypes = [
    { 
      type: 'all' as const, 
      label: 'All Components', 
      count: typeCounts.all || 1848, 
      icon: <Grid className="w-4 h-4 text-amber-500" /> 
    },
    { 
      type: 'skill' as ComponentType, 
      label: 'Skills', 
      count: typeCounts.skill || 872, 
      icon: <Sparkles className="w-4 h-4 text-amber-500" /> 
    },
    { 
      type: 'agent' as ComponentType, 
      label: 'Agents', 
      count: typeCounts.agent || 422, 
      icon: <Cpu className="w-4 h-4 text-blue-500" /> 
    },
    { 
      type: 'command' as ComponentType, 
      label: 'Commands', 
      count: typeCounts.command || 286, 
      icon: <Terminal className="w-4 h-4 text-emerald-500" /> 
    },
    { 
      type: 'setting' as ComponentType, 
      label: 'Settings', 
      count: typeCounts.setting || 71, 
      icon: <Sliders className="w-4 h-4 text-purple-500" /> 
    },
    { 
      type: 'hook' as ComponentType, 
      label: 'Hooks', 
      count: typeCounts.hook || 62, 
      icon: <Anchor className="w-4 h-4 text-orange-500" /> 
    },
    { 
      type: 'mcp' as ComponentType, 
      label: 'MCPs', 
      count: typeCounts.mcp || 101, 
      icon: <Cpu className="w-4 h-4 text-cyan-500" /> 
    },
    { 
      type: 'plugin' as ComponentType, 
      label: 'Plugins', 
      count: typeCounts.plugin || 34, 
      icon: <Puzzle className="w-4 h-4 text-pink-500" /> 
    },
  ];

  const quickLinks = [
    { 
      id: 'trending', 
      label: 'Trending', 
      icon: <Flame className="w-4 h-4 text-amber-500 animate-pulse" />, 
      onClick: () => {
        if (onOpenTrending) onOpenTrending();
        onCloseMobile();
      }
    },
    { 
      id: 'jobs', 
      label: 'Jobs', 
      icon: <Briefcase className="w-4 h-4 text-blue-400" />, 
      onClick: () => {
        onOpenJobs();
        onCloseMobile();
      }
    },
    { 
      id: 'blog', 
      label: 'Blog', 
      icon: <FileText className="w-4 h-4 text-emerald-400" />, 
      onClick: () => {
        onOpenBlog();
        onCloseMobile();
      }
    },
    { 
      id: 'docs', 
      label: 'Docs', 
      icon: <BookOpen className="w-4 h-4 text-purple-400" />, 
      onClick: () => {
        onOpenDocs();
        onCloseMobile();
      }
    },
    { 
      id: 'github', 
      label: 'GitHub', 
      icon: <Github className="w-4 h-4 text-zinc-400" />, 
      onClick: () => {
        window.open('https://github.com/anthropics/claude-code', '_blank', 'noopener,noreferrer');
        onCloseMobile();
      }
    },
  ];

  const sidebarContent = (
    <div className={`flex flex-col h-full ${isDark ? 'bg-zinc-950 text-zinc-100' : 'bg-white text-zinc-900'}`}>
      
      {/* Top Header / Branding in Sidebar */}
      <div className={`p-4 border-b flex items-center justify-between shrink-0 ${
        isDark ? 'border-zinc-800/80 bg-zinc-950/80' : 'border-zinc-200 bg-zinc-50/80'
      }`}>
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-white shadow-md shadow-orange-500/20 font-bold text-xs shrink-0">
            <Zap className="w-4 h-4 text-white" />
          </div>
          {!isCollapsed && (
            <div className="flex flex-col">
              <span className="font-extrabold text-sm tracking-tight leading-none">Claude Code</span>
              <span className="text-[10px] text-amber-500 font-semibold tracking-wider uppercase mt-0.5">Component Stack</span>
            </div>
          )}
        </div>

        {/* Mobile Close Button */}
        <button 
          onClick={onCloseMobile}
          className="md:hidden p-1.5 rounded-lg text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800"
          aria-label="Close sidebar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Desktop Collapse Toggle Button */}
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={`hidden md:flex p-1.5 rounded-lg transition-colors text-zinc-400 hover:text-zinc-200 ${
            isDark ? 'hover:bg-zinc-800' : 'hover:bg-zinc-200'
          }`}
          title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </div>

      {/* Scrollable Navigation Body */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-5 scrollbar-none">
        
        {/* SECTION 1: WORKSPACE (Favorites & Storage) */}
        <div className="space-y-1">
          {!isCollapsed && (
            <div className="px-2 pb-1.5 flex items-center justify-between">
              <h3 className={`text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 ${
                isDark ? 'text-amber-400' : 'text-amber-600'
              }`}>
                <FolderHeart className="w-3.5 h-3.5" />
                Workspace
              </h3>
              <span className="text-[10px] font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-tight">
                Storage & Saved
              </span>
            </div>
          )}

          {/* Favorites Item */}
          <button
            onClick={() => {
              onSelectFavorites();
              onCloseMobile();
            }}
            title={`Favorites (${favoriteCount} bookmarked items)`}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all duration-150 cursor-pointer ${
              isFavoritesOnly
                ? isDark
                  ? 'bg-amber-500/20 text-amber-300 font-bold border border-amber-500/40 shadow-xs'
                  : 'bg-amber-500 text-white font-bold shadow-sm'
                : isDark
                  ? 'text-zinc-300 hover:bg-zinc-900 hover:text-white'
                  : 'text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950'
            }`}
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <Star className={`w-4 h-4 shrink-0 ${
                isFavoritesOnly 
                  ? isDark ? 'fill-amber-300 text-amber-300' : 'fill-white text-white' 
                  : 'fill-amber-400/30 text-amber-400'
              }`} />
              {!isCollapsed && (
                <div className="flex flex-col text-left">
                  <span className="truncate tracking-tight font-bold text-xs">Favorites</span>
                  <span className={`text-[10px] ${
                    isFavoritesOnly 
                      ? isDark ? 'text-amber-300/80' : 'text-white/80' 
                      : 'text-zinc-400 dark:text-zinc-500'
                  }`}>
                    Bookmarked Items
                  </span>
                </div>
              )}
            </div>

            {!isCollapsed && (
              <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full shrink-0 ${
                isFavoritesOnly
                  ? isDark ? 'bg-amber-500/30 text-amber-200 border border-amber-500/40' : 'bg-black/20 text-white'
                  : isDark ? 'bg-zinc-900 text-amber-400 border border-amber-500/30' : 'bg-amber-50 text-amber-700 border border-amber-200'
              }`}>
                {favoriteCount}
              </span>
            )}
          </button>

          {/* Stack Storage Item */}
          <button
            onClick={() => {
              onOpenStack();
              onCloseMobile();
            }}
            title={`Stack Storage (${stackCount} items saved)`}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all duration-150 cursor-pointer ${
              isDark
                ? 'text-zinc-300 hover:bg-zinc-900 hover:text-white'
                : 'text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950'
            }`}
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <HardDrive className="w-4 h-4 text-orange-400 shrink-0" />
              {!isCollapsed && (
                <div className="flex flex-col text-left">
                  <span className="truncate tracking-tight font-bold text-xs">Stack Storage</span>
                  <span className="text-[10px] text-zinc-400 dark:text-zinc-500">
                    Active Stack Package
                  </span>
                </div>
              )}
            </div>

            {!isCollapsed && (
              <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full shrink-0 ${
                isDark 
                  ? 'bg-orange-500/15 text-orange-400 border border-orange-500/30' 
                  : 'bg-orange-50 text-orange-700 border border-orange-200'
              }`}>
                {stackCount}
              </span>
            )}
          </button>
        </div>

        {/* Divider */}
        <div className={`border-t ${isDark ? 'border-zinc-800/80' : 'border-zinc-200'}`} />

        {/* SECTION 2: DEVELOPER TOOLS & CREATION */}
        <div className="space-y-1">
          {!isCollapsed && (
            <div className="px-2 pb-1.5 flex items-center justify-between">
              <h3 className={`text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 ${
                isDark ? 'text-emerald-400' : 'text-emerald-600'
              }`}>
                <Wand2 className="w-3.5 h-3.5" />
                Developer Tools
              </h3>
              <span className="text-[10px] font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-tight">
                IDE & Publish
              </span>
            </div>
          )}

          {/* Prompt Tester Item */}
          <button
            onClick={() => {
              if (onOpenTester) onOpenTester();
              onCloseMobile();
            }}
            title="Prompt Tester - Test & Sandbox Prompt Instructions"
            className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all duration-150 cursor-pointer ${
              isDark
                ? 'text-zinc-300 hover:bg-zinc-900 hover:text-white'
                : 'text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950'
            }`}
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <FlaskConical className="w-4 h-4 text-emerald-400 shrink-0" />
              {!isCollapsed && (
                <div className="flex flex-col text-left">
                  <span className="truncate tracking-tight font-bold text-xs">Prompt Tester</span>
                  <span className="text-[10px] text-zinc-400 dark:text-zinc-500">
                    Test & Sandbox IDE
                  </span>
                </div>
              )}
            </div>

            {!isCollapsed && (
              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0 ${
                isDark ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30' : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
              }`}>
                Sandbox
              </span>
            )}
          </button>

          {/* Submit Skill Item */}
          <button
            onClick={() => {
              if (onOpenCreate) onOpenCreate();
              onCloseMobile();
            }}
            title="Submit Skill - Publish Custom Components & Skills"
            className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all duration-150 cursor-pointer ${
              isDark
                ? 'text-zinc-300 hover:bg-zinc-900 hover:text-white'
                : 'text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950'
            }`}
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <PlusCircle className="w-4 h-4 text-amber-500 shrink-0" />
              {!isCollapsed && (
                <div className="flex flex-col text-left">
                  <span className="truncate tracking-tight font-bold text-xs">Submit Skill</span>
                  <span className="text-[10px] text-zinc-400 dark:text-zinc-500">
                    Publish to Community
                  </span>
                </div>
              )}
            </div>

            {!isCollapsed && (
              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0 ${
                isDark ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30' : 'bg-amber-50 text-amber-700 border border-amber-200'
              }`}>
                Publish
              </span>
            )}
          </button>
        </div>

        {/* Divider */}
        <div className={`border-t ${isDark ? 'border-zinc-800/80' : 'border-zinc-200'}`} />

        {/* SECTION 2: CATALOG COMPONENTS */}
        <div className="space-y-1">
          {!isCollapsed && (
            <div className="px-2 pb-1.5 flex items-center justify-between">
              <h3 className={`text-xs font-bold uppercase tracking-wider ${
                isDark ? 'text-zinc-400' : 'text-zinc-500'
              }`}>
                Catalog Components
              </h3>
            </div>
          )}

          {catalogTypes.map((item) => {
            const isSelected = !isFavoritesOnly && activeType === item.type;
            return (
              <button
                key={item.type}
                onClick={() => {
                  onSelectType(item.type);
                  onCloseMobile();
                }}
                title={`${item.label} (${item.count.toLocaleString()})`}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all duration-150 cursor-pointer ${
                  isSelected
                    ? isDark
                      ? 'bg-amber-500/15 text-amber-400 font-bold border border-amber-500/30 shadow-xs'
                      : 'bg-amber-500 text-white font-bold shadow-sm'
                    : isDark
                      ? 'text-zinc-300 hover:bg-zinc-900 hover:text-white'
                      : 'text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="shrink-0">{item.icon}</span>
                  {!isCollapsed && (
                    <span className="truncate tracking-tight font-semibold text-xs">{item.label}</span>
                  )}
                </div>

                {!isCollapsed && (
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full shrink-0 ${
                    isSelected
                      ? isDark
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                        : 'bg-black/20 text-white'
                      : isDark
                        ? 'bg-zinc-900 text-zinc-400 border border-zinc-800'
                        : 'bg-zinc-100 text-zinc-600 border border-zinc-200'
                  }`}>
                    {item.count.toLocaleString()}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Divider */}
        <div className={`border-t ${isDark ? 'border-zinc-800/80' : 'border-zinc-200'}`} />

        {/* SECTION 3: RESOURCES */}
        <div className="space-y-1">
          {!isCollapsed && (
            <h3 className={`px-2 pb-1.5 text-xs font-bold uppercase tracking-wider ${
              isDark ? 'text-zinc-400' : 'text-zinc-500'
            }`}>
              Resources
            </h3>
          )}

          {quickLinks.map((link) => (
            <button
              key={link.id}
              onClick={link.onClick}
              title={link.label}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all duration-150 cursor-pointer ${
                isDark
                  ? 'text-zinc-300 hover:bg-zinc-900 hover:text-white'
                  : 'text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950'
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="shrink-0">{link.icon}</span>
                {!isCollapsed && (
                  <span className="truncate font-semibold tracking-tight text-xs">{link.label}</span>
                )}
              </div>
            </button>
          ))}
        </div>

      </div>

      {/* SECTION 4: USER FOOTER */}
      <div className={`p-3 border-t shrink-0 ${
        isDark ? 'border-zinc-800/80 bg-zinc-950' : 'border-zinc-200 bg-zinc-50'
      }`}>
        {userSignedIn ? (
          <div className="flex items-center justify-between px-2 py-1.5">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-amber-500/20 text-amber-500 flex items-center justify-center font-bold text-xs border border-amber-500/40">
                <User className="w-3.5 h-3.5" />
              </div>
              {!isCollapsed && (
                <div className="flex flex-col">
                  <span className="text-xs font-bold truncate max-w-[110px]">{userName}</span>
                  <span className="text-[10px] text-emerald-500 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Active Session
                  </span>
                </div>
              )}
            </div>
          </div>
        ) : (
          <button
            onClick={() => {
              onOpenSignIn();
              onCloseMobile();
            }}
            title="Sign in"
            className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white shadow-md shadow-orange-500/20 transition-all cursor-pointer active:scale-95"
          >
            <LogIn className="w-4 h-4 shrink-0" />
            {!isCollapsed && <span>Sign in</span>}
          </button>
        )}
      </div>

    </div>
  );

  return (
    <>
      {/* Desktop Sidebar (Fixed / Sticky Left Bar) */}
      <aside 
        className={`hidden md:block sticky top-16 h-[calc(100vh-4rem)] border-r shrink-0 transition-all duration-300 z-30 ${
          isCollapsed ? 'w-16' : 'w-64'
        } ${isDark ? 'border-zinc-800/80 bg-zinc-950' : 'border-zinc-200 bg-white'}`}
      >
        {sidebarContent}
      </aside>

      {/* Mobile Slide-over Drawer Backdrop & Panel */}
      {isOpenMobile && (
        <div className="md:hidden fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
            onClick={onCloseMobile} 
          />
          {/* Slide Drawer */}
          <aside className={`fixed inset-y-0 left-0 w-72 max-w-[85vw] shadow-2xl transition-transform transform duration-300 ease-in-out z-50 ${
            isDark ? 'bg-zinc-950 text-zinc-100' : 'bg-white text-zinc-900'
          }`}>
            {sidebarContent}
          </aside>
        </div>
      )}
    </>
  );
};

