import React, { useState, useMemo, useEffect } from 'react';
import { ComponentItem, ComponentType, Category, StackPreset, ThemeMode, AIProvider } from './types';
import { 
  INITIAL_COMPONENTS, 
  PROMPT_DEFAULT_STACK_SLUGS, 
  FEATURED_PARTNERS, 
  STACK_PRESETS 
} from './data/componentsData';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { FeaturedIntegrations } from './components/FeaturedIntegrations';
import { FilterBar } from './components/FilterBar';
import { ComponentCard } from './components/ComponentCard';
import { StackBuilderDrawer } from './components/StackBuilderDrawer';
import { ComponentDetailModal } from './components/ComponentDetailModal';
import { SkillTesterModal } from './components/SkillTesterModal';
import { CreateComponentModal } from './components/CreateComponentModal';
import { DocsModal, BlogModal, JobsModal, PromoteModal, SignInModal } from './components/InfoModals';
import { 
  loadEngagementMetrics, 
  trackComponentView, 
  trackComponentCopy, 
  computeTrendingComponents,
  EngagementMetrics 
} from './utils/trendingAlgorithm';
import { 
  Layers, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  Check, 
  Terminal, 
  ArrowRight,
  SlidersHorizontal,
  Bookmark,
  Star
} from 'lucide-react';

export default function App() {
  // Theme state: 'light' | 'dark' | 'system'
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    try {
      const saved = localStorage.getItem('claude_code_theme_mode');
      if (saved === 'light' || saved === 'dark' || saved === 'system') {
        return saved as ThemeMode;
      }
    } catch {
      // Fallback
    }
    return 'system';
  });

  // Calculate actual dark state
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (themeMode === 'dark') return true;
    if (themeMode === 'light') return false;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Apply dark mode class to html element and listen to OS preference changes
  useEffect(() => {
    try {
      localStorage.setItem('claude_code_theme_mode', themeMode);
    } catch {
      // Ignore
    }

    const applyTheme = () => {
      let dark = false;
      if (themeMode === 'dark') {
        dark = true;
      } else if (themeMode === 'light') {
        dark = false;
      } else {
        dark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      }
      setIsDark(dark);
      if (dark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    applyTheme();

    if (themeMode === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const listener = () => applyTheme();
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', listener);
        return () => mediaQuery.removeEventListener('change', listener);
      } else if (mediaQuery.addListener) {
        mediaQuery.addListener(listener);
        return () => mediaQuery.removeListener(listener);
      }
    }
  }, [themeMode]);

  // Main components catalog
  const [componentsList, setComponentsList] = useState<ComponentItem[]>(() => {
    try {
      const saved = localStorage.getItem('claude_code_custom_components');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const ids = new Set(INITIAL_COMPONENTS.map(c => c.id));
          const customs = parsed.filter((c: ComponentItem) => !ids.has(c.id));
          return [...customs, ...INITIAL_COMPONENTS];
        }
      }
    } catch {
      // Fallback
    }
    return INITIAL_COMPONENTS;
  });

  // Active stack items (IDs or Slugs)
  const [stackSlugs, setStackSlugs] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('claude_code_active_stack');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch {
      // Fallback
    }
    return PROMPT_DEFAULT_STACK_SLUGS;
  });

  // Save stack changes
  useEffect(() => {
    try {
      localStorage.setItem('claude_code_active_stack', JSON.stringify(stackSlugs));
    } catch {
      // Ignore
    }
  }, [stackSlugs]);

  // Bookmarks
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('claude_code_bookmarks');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch {
      // Ignore
    }
    return [];
  });

  // Save bookmarks
  useEffect(() => {
    try {
      localStorage.setItem('claude_code_bookmarks', JSON.stringify(bookmarkedIds));
    } catch {
      // Ignore
    }
  }, [bookmarkedIds]);

  // Navigation & Filter state
  const [activeType, setActiveType] = useState<ComponentType | 'all'>('all');
  const [isFavoritesOnly, setIsFavoritesOnly] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [selectedProvider, setSelectedProvider] = useState<AIProvider | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'popular' | 'trending' | 'installs' | 'alpha' | 'newest'>('popular');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // User Engagement Tracking state for Trending Algorithm
  const [engagementMetrics, setEngagementMetrics] = useState<EngagementMetrics>(loadEngagementMetrics);

  // Enriched components catalog calculated dynamically with Trending Algorithm Scores
  const enrichedComponentsList = useMemo(() => {
    return computeTrendingComponents(componentsList, engagementMetrics, bookmarkedIds, stackSlugs);
  }, [componentsList, engagementMetrics, bookmarkedIds, stackSlugs]);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Modals state
  const [isStackOpen, setIsStackOpen] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState<ComponentItem | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isTesterOpen, setIsTesterOpen] = useState(false);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isDocsOpen, setIsDocsOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const [isJobsOpen, setIsJobsOpen] = useState(false);
  const [isPromoteOpen, setIsPromoteOpen] = useState(false);
  const [isSidebarOpenMobile, setIsSidebarOpenMobile] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [userSignedIn, setUserSignedIn] = useState(false);
  const [userName, setUserName] = useState('Guest Developer');

  // Toast notification state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 3000);
  };

  // Dynamically computed display counts calculated directly from catalog data
  const typeCounts = useMemo(() => {
    return {
      all: enrichedComponentsList.length,
      skill: enrichedComponentsList.filter((c) => c.type === 'skill').length,
      agent: enrichedComponentsList.filter((c) => c.type === 'agent').length,
      command: enrichedComponentsList.filter((c) => c.type === 'command').length,
      setting: enrichedComponentsList.filter((c) => c.type === 'setting').length,
      hook: enrichedComponentsList.filter((c) => c.type === 'hook').length,
      mcp: enrichedComponentsList.filter((c) => c.type === 'mcp').length,
      plugin: enrichedComponentsList.filter((c) => c.type === 'plugin').length
    };
  }, [enrichedComponentsList]);

  // Filter and sort items
  const filteredComponents = useMemo(() => {
    return enrichedComponentsList.filter((item) => {
      // Favorites filter
      if (isFavoritesOnly && !bookmarkedIds.includes(item.id)) return false;

      // Type filter
      if (activeType !== 'all' && item.type !== activeType) return false;

      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) return false;

      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        const matchesSlug = item.slug.toLowerCase().includes(q);
        const matchesTags = item.tags?.some((t) => t.toLowerCase().includes(q));
        const matchesTriggers = item.triggers?.some((tr) => tr.toLowerCase().includes(q));
        if (!matchesName && !matchesDesc && !matchesSlug && !matchesTags && !matchesTriggers) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'trending') return (b.trendingScore || 0) - (a.trendingScore || 0);
      if (sortBy === 'popular') return (b.trendingScore || 0) - (a.trendingScore || 0);
      if (sortBy === 'installs') return b.installs - a.installs;
      if (sortBy === 'newest') return (b.version || '').localeCompare(a.version || '');
      if (sortBy === 'alpha') return a.name.localeCompare(b.name);
      return 0;
    });
  }, [enrichedComponentsList, isFavoritesOnly, bookmarkedIds, activeType, selectedCategory, searchQuery, sortBy]);

  // Paginated items
  const totalPages = Math.max(1, Math.ceil(filteredComponents.length / itemsPerPage));
  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredComponents.slice(start, start + itemsPerPage);
  }, [filteredComponents, currentPage, itemsPerPage]);

  // Reset page on filter change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeType, isFavoritesOnly, selectedCategory, selectedProvider, searchQuery, sortBy]);

  // Stack items resolved objects
  const stackItems = useMemo(() => {
    return componentsList.filter(
      (comp) => stackSlugs.includes(comp.slug) || stackSlugs.includes(comp.id)
    );
  }, [componentsList, stackSlugs]);

  // Toggle single item in stack
  const handleToggleStack = (component: ComponentItem) => {
    const isIn = stackSlugs.includes(component.slug) || stackSlugs.includes(component.id);
    if (isIn) {
      setStackSlugs((prev) => prev.filter((s) => s !== component.slug && s !== component.id));
      showToast(`Removed "${component.name}" from stack.`);
    } else {
      setStackSlugs((prev) => [...prev, component.slug]);
      showToast(`Added "${component.name}" to stack!`);
    }
  };

  // Add all current page items to stack
  const handleAddPageToStack = () => {
    const newSlugs = [...stackSlugs];
    let addedCount = 0;
    for (const item of currentItems) {
      if (!newSlugs.includes(item.slug) && !newSlugs.includes(item.id)) {
        newSlugs.push(item.slug);
        addedCount++;
      }
    }
    setStackSlugs(newSlugs);
    showToast(addedCount > 0 ? `Added ${addedCount} components to stack!` : `All page components already in stack!`);
  };

  // Clear all in stack
  const handleClearAllStack = () => {
    setStackSlugs([]);
    showToast('Cleared all components from stack.');
  };

  // Apply a preset
  const handleApplyPreset = (preset: StackPreset) => {
    setStackSlugs(preset.itemSlugs);
  };

  // Toggle bookmark
  const handleToggleBookmark = (id: string) => {
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  // Open detail view and record user engagement view
  const handleViewDetails = (item: ComponentItem) => {
    const updatedMetrics = trackComponentView(item.id);
    setEngagementMetrics(updatedMetrics);
    setSelectedComponent(item);
    setIsDetailOpen(true);
  };

  // Track command copy events
  const handleCopyCli = (commandText: string, itemId?: string) => {
    if (itemId) {
      const updatedMetrics = trackComponentCopy(itemId);
      setEngagementMetrics(updatedMetrics);
    }
    showToast(`Copied command: ${commandText}`);
  };

  // Add custom component
  const handleSaveCustomComponent = (newItem: ComponentItem) => {
    setComponentsList((prev) => {
      const updated = [newItem, ...prev];
      try {
        const initialIds = new Set(INITIAL_COMPONENTS.map(c => c.id));
        const customs = updated.filter(c => !initialIds.has(c.id));
        localStorage.setItem('claude_code_custom_components', JSON.stringify(customs));
      } catch {
        // Ignore
      }
      return updated;
    });
    setStackSlugs((prev) => [newItem.slug, ...prev]);
    showToast(`Successfully created & added "${newItem.name}" to stack!`);
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-200 ${
      isDark ? 'bg-zinc-950 text-zinc-100' : 'bg-zinc-50 text-zinc-900'
    }`}>
      
      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-zinc-900 text-zinc-100 text-xs font-semibold shadow-2xl border border-zinc-700 animate-in slide-in-from-bottom-5 duration-200">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Top Header */}
      <Header
        activeType={activeType}
        onSelectType={(type) => {
          setIsFavoritesOnly(false);
          setActiveType(type);
          setCurrentPage(1);
        }}
        typeCounts={typeCounts}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        themeMode={themeMode}
        onSelectThemeMode={setThemeMode}
        isDark={isDark}
        stackCount={stackItems.length}
        onOpenStack={() => setIsStackOpen(true)}
        onOpenDocs={() => setIsDocsOpen(true)}
        onOpenBlog={() => setIsBlogOpen(true)}
        onOpenJobs={() => setIsJobsOpen(true)}
        onOpenTester={() => setIsTesterOpen(true)}
        onOpenCreate={() => setIsCreateOpen(true)}
        onOpenSidebarMobile={() => setIsSidebarOpenMobile(true)}
        onOpenSignIn={() => setIsSignInOpen(true)}
        userSignedIn={userSignedIn}
      />

      {/* Main Layout Container with Sidebar */}
      <div className="flex max-w-7xl mx-auto w-full">
        <Sidebar
          activeType={activeType}
          onSelectType={(type) => {
            setIsFavoritesOnly(false);
            setActiveType(type);
            setCurrentPage(1);
          }}
          isFavoritesOnly={isFavoritesOnly}
          onSelectFavorites={() => {
            setIsFavoritesOnly(true);
            setActiveType('all');
            setSelectedCategory('all');
            setCurrentPage(1);
            showToast(`Viewing Favorites (${bookmarkedIds.length} bookmarked)`);
          }}
          favoriteCount={bookmarkedIds.length}
          stackCount={stackItems.length}
          onOpenStack={() => setIsStackOpen(true)}
          onOpenTester={() => setIsTesterOpen(true)}
          onOpenCreate={() => setIsCreateOpen(true)}
          isDark={isDark}
          isOpenMobile={isSidebarOpenMobile}
          onCloseMobile={() => setIsSidebarOpenMobile(false)}
          onOpenTrending={() => {
            setIsFavoritesOnly(false);
            setSortBy('popular');
            setActiveType('all');
            setSelectedCategory('all');
            showToast('Filtered by Trending & Popular Components');
          }}
          onOpenJobs={() => setIsJobsOpen(true)}
          onOpenBlog={() => setIsBlogOpen(true)}
          onOpenDocs={() => setIsDocsOpen(true)}
          onOpenSignIn={() => setIsSignInOpen(true)}
          userSignedIn={userSignedIn}
          userName={userName}
          typeCounts={typeCounts}
        />

        {/* Page Main Content Area */}
        <main className="flex-1 min-w-0 px-3 sm:px-6 lg:px-8 py-6 sm:py-8">
        
        {/* Featured Integrations Banner */}
        <FeaturedIntegrations
          partners={FEATURED_PARTNERS}
          isDark={isDark}
          onOpenPromote={() => setIsPromoteOpen(true)}
        />

        {/* Filter and Sorting Bar */}
        {isFavoritesOnly && (
          <div className={`mb-4 p-4 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
            isDark ? 'bg-amber-500/10 border-amber-500/30 text-zinc-100' : 'bg-amber-50 border-amber-200 text-zinc-900'
          }`}>
            <div className="flex items-center gap-2.5">
              <Star className="w-5 h-5 text-amber-500 fill-amber-500 shrink-0" />
              <div>
                <h3 className="font-bold text-xs sm:text-sm">Workspace Favorites Active</h3>
                <p className={`text-[11px] ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  Showing {filteredComponents.length} saved component{filteredComponents.length === 1 ? '' : 's'}. Click the star icon on any card to add or remove items from your favorites storage.
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsFavoritesOnly(false)}
              className="px-3.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold shrink-0 cursor-pointer self-start sm:self-auto transition-colors"
            >
              Show All Components
            </button>
          </div>
        )}

        <FilterBar
          selectedCategory={selectedCategory}
          onSelectCategory={(cat) => { setSelectedCategory(cat); setCurrentPage(1); }}
          selectedProvider={selectedProvider}
          onSelectProvider={(prov) => { setSelectedProvider(prov); setCurrentPage(1); }}
          sortBy={sortBy}
          onSortChange={setSortBy}
          viewMode={viewMode}
          onToggleViewMode={setViewMode}
          totalCount={filteredComponents.length}
          onAddPageToStack={handleAddPageToStack}
          isDark={isDark}
          activeFilterCount={
            (selectedCategory !== 'all' ? 1 : 0) + 
            (selectedProvider !== 'all' ? 1 : 0) +
            (searchQuery ? 1 : 0) +
            (isFavoritesOnly ? 1 : 0)
          }
          onResetFilters={() => {
            setSelectedCategory('all');
            setSelectedProvider('all');
            setSearchQuery('');
            setIsFavoritesOnly(false);
            setCurrentPage(1);
          }}
        />

        {/* Components Grid / List */}
        {filteredComponents.length === 0 ? (
          <div className={`p-12 rounded-2xl border text-center my-6 ${
            isDark ? 'bg-zinc-900/40 border-zinc-800' : 'bg-white border-zinc-200'
          }`}>
            <div className="w-12 h-12 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center mx-auto mb-3">
              {isFavoritesOnly ? <Star className="w-6 h-6 fill-amber-500/30" /> : <SlidersHorizontal className="w-6 h-6" />}
            </div>
            <h3 className="font-bold text-base">
              {isFavoritesOnly ? "Your Workspace Favorites is Empty" : "No matching components found"}
            </h3>
            <p className={`text-xs mt-1 max-w-md mx-auto ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
              {isFavoritesOnly
                ? "You haven't added any favorites yet. Click the star icon on any component card to add it to your Workspace storage!"
                : "Try clearing your search query or switching to a different category, AI provider, or component type tab."}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedProvider('all');
                setActiveType('all');
                setIsFavoritesOnly(false);
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold transition-colors cursor-pointer"
            >
              {isFavoritesOnly ? "Browse Component Catalog" : "Reset All Filters"}
            </button>
          </div>
        ) : (
          <div className={
            viewMode === 'grid'
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5'
              : 'space-y-3'
          }>
            {currentItems.map((comp) => (
              <ComponentCard
                key={comp.id}
                component={comp}
                isInStack={stackSlugs.includes(comp.slug) || stackSlugs.includes(comp.id)}
                onToggleStack={handleToggleStack}
                onViewDetails={handleViewDetails}
                isBookmarked={bookmarkedIds.includes(comp.id)}
                onToggleBookmark={handleToggleBookmark}
                isDark={isDark}
                viewMode={viewMode}
                onCopyCli={(cmd) => handleCopyCli(cmd, comp.id)}
                selectedProvider={selectedProvider}
              />
            ))}
          </div>
        )}

        {/* Pagination Bar (Matching 1 / 37 from Prompt) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800/80">
          
          <div className={`text-xs ${isDark ? 'text-zinc-400' : 'text-zinc-700 font-medium'}`}>
            Showing <span className="font-bold text-zinc-950 dark:text-zinc-100">{currentItems.length}</span> of{' '}
            <span className="font-bold text-zinc-950 dark:text-zinc-100">{filteredComponents.length}</span> items
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className={`p-2 rounded-lg border text-xs font-medium disabled:opacity-40 disabled:cursor-not-allowed transition-colors ${
                isDark
                  ? 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:bg-zinc-800'
                  : 'bg-white border-zinc-200 text-zinc-900 hover:bg-zinc-100'
              }`}
              title="Previous Page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Exact "1 / 37" style pager */}
            <div className={`px-4 py-1.5 rounded-lg border text-xs font-mono font-bold ${
              isDark ? 'bg-zinc-900 border-zinc-800 text-amber-400' : 'bg-white border-zinc-200 text-zinc-950'
            }`}>
              {currentPage} / {Math.max(37, totalPages)}
            </div>

            <button
              onClick={() => setCurrentPage((p) => Math.min(Math.max(37, totalPages), p + 1))}
              disabled={currentPage >= Math.max(37, totalPages)}
              className={`p-2 rounded-lg border text-xs font-medium disabled:opacity-40 disabled:cursor-not-allowed transition-colors ${
                isDark
                  ? 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:bg-zinc-800'
                  : 'bg-white border-zinc-200 text-zinc-900 hover:bg-zinc-100'
              }`}
              title="Next Page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Quick jump to page */}
          <div className={`hidden md:flex items-center gap-1.5 text-xs ${isDark ? 'text-zinc-400' : 'text-zinc-700 font-medium'}`}>
            <span>Page</span>
            <input
              type="number"
              min={1}
              max={Math.max(37, totalPages)}
              value={currentPage}
              onChange={(e) => {
                const val = parseInt(e.target.value);
                if (val >= 1 && val <= Math.max(37, totalPages)) {
                  setCurrentPage(val);
                }
              }}
              className={`w-12 px-2 py-1 text-center rounded border text-xs font-semibold ${
                isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-200' : 'bg-white border-zinc-200 text-zinc-900'
              }`}
            />
            <span>of {Math.max(37, totalPages)}</span>
          </div>

        </div>

      </main>
      </div>



      {/* Slide-out Stack Builder Drawer */}
      <StackBuilderDrawer
        isOpen={isStackOpen}
        onClose={() => setIsStackOpen(false)}
        stackItems={stackItems}
        onRemoveItem={(id) => {
          const target = componentsList.find((c) => c.id === id);
          if (target) {
            setStackSlugs((prev) => prev.filter((s) => s !== target.slug && s !== target.id));
            showToast(`Removed "${target.name}"`);
          }
        }}
        onClearAll={handleClearAllStack}
        onApplyPreset={handleApplyPreset}
        isDark={isDark}
        onNotify={showToast}
      />

      {/* Detail Inspector Modal */}
      <ComponentDetailModal
        component={selectedComponent}
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
        isInStack={selectedComponent ? stackSlugs.includes(selectedComponent.slug) || stackSlugs.includes(selectedComponent.id) : false}
        onToggleStack={handleToggleStack}
        isDark={isDark}
        onNotify={showToast}
        initialProvider={selectedProvider !== 'all' ? selectedProvider : 'claude'}
      />

      {/* Prompt Tester Simulator Modal */}
      <SkillTesterModal
        isOpen={isTesterOpen}
        onClose={() => setIsTesterOpen(false)}
        allComponents={componentsList}
        onAddToStack={(comp) => {
          if (!stackSlugs.includes(comp.slug) && !stackSlugs.includes(comp.id)) {
            setStackSlugs((prev) => [...prev, comp.slug]);
          }
        }}
        isDark={isDark}
        onNotify={showToast}
      />

      {/* Submit Custom Component Modal */}
      <CreateComponentModal
        isOpen={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
        onSaveComponent={handleSaveCustomComponent}
        isDark={isDark}
        onNotify={showToast}
      />

      {/* Secondary Info Modals */}
      <DocsModal isOpen={isDocsOpen} onClose={() => setIsDocsOpen(false)} isDark={isDark} />
      <BlogModal isOpen={isBlogOpen} onClose={() => setIsBlogOpen(false)} isDark={isDark} />
      <JobsModal isOpen={isJobsOpen} onClose={() => setIsJobsOpen(false)} isDark={isDark} />
      <PromoteModal isOpen={isPromoteOpen} onClose={() => setIsPromoteOpen(false)} isDark={isDark} onNotify={showToast} />
      <SignInModal
        isOpen={isSignInOpen}
        onClose={() => setIsSignInOpen(false)}
        isDark={isDark}
        onNotify={showToast}
        onLoginSuccess={(email) => {
          setUserSignedIn(true);
          setUserName(email.split('@')[0] || 'Developer');
        }}
      />

    </div>
  );
}
