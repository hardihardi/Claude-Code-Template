import React from 'react';
import { Category } from '../types';
import { CATEGORIES_LIST } from '../data/componentsData';
import { LayoutGrid, List, Plus, ArrowUpDown, Filter, X } from 'lucide-react';

interface FilterBarProps {
  selectedCategory: Category;
  onSelectCategory: (cat: Category) => void;
  sortBy: 'popular' | 'trending' | 'installs' | 'alpha' | 'newest';
  onSortChange: (sort: 'popular' | 'trending' | 'installs' | 'alpha' | 'newest') => void;
  viewMode: 'grid' | 'list';
  onToggleViewMode: (mode: 'grid' | 'list') => void;
  totalCount: number;
  onAddPageToStack: () => void;
  isDark: boolean;
  activeFilterCount: number;
  onResetFilters: () => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  selectedCategory,
  onSelectCategory,
  sortBy,
  onSortChange,
  viewMode,
  onToggleViewMode,
  totalCount,
  onAddPageToStack,
  isDark,
  activeFilterCount,
  onResetFilters
}) => {
  return (
    <div className="space-y-3 sm:space-y-4 mb-6">
      
      {/* Category Pills Bar - Touch optimized scroll */}
      <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
        <div className={`flex items-center gap-1.5 text-xs font-semibold px-2 py-1 shrink-0 ${
          isDark ? 'text-zinc-400' : 'text-zinc-500'
        }`}>
          <Filter className="w-3.5 h-3.5" />
          <span>Category:</span>
        </div>

        {CATEGORIES_LIST.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id as Category)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-150 border shrink-0 min-h-[36px] cursor-pointer ${
                isSelected
                  ? isDark
                    ? 'bg-amber-500/10 border-amber-500/40 text-amber-400 font-semibold shadow-xs'
                    : 'bg-amber-100 border-amber-400 text-zinc-950 font-bold shadow-xs'
                  : isDark
                    ? 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/80'
                    : 'bg-white border-zinc-200 text-zinc-800 hover:text-zinc-950 hover:bg-zinc-50 font-medium'
              }`}
            >
              {cat.label}
            </button>
          );
        })}

        {activeFilterCount > 0 && (
          <button
            onClick={onResetFilters}
            className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium border text-red-500 transition-colors shrink-0 min-h-[36px] cursor-pointer ${
              isDark ? 'border-red-900/40 bg-red-950/20 hover:bg-red-950/40' : 'border-red-200 bg-red-50/50 hover:bg-red-50'
            }`}
            title="Reset active filters"
          >
            <X className="w-3 h-3" />
            <span>Reset</span>
          </button>
        )}
      </div>

      {/* Action and Sort Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-zinc-200/80 dark:border-zinc-800/60">
        
        {/* Count & Header */}
        <div className="flex items-center justify-between sm:justify-start gap-3">
          <h3 className={`text-base sm:text-lg font-bold tracking-tight ${
            isDark ? 'text-zinc-100' : 'text-zinc-900'
          }`}>
            {selectedCategory === 'all' ? 'Most Popular' : CATEGORIES_LIST.find(c => c.id === selectedCategory)?.label}
          </h3>
          <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${
            isDark ? 'bg-zinc-800/80 text-zinc-400 border-zinc-700/60' : 'bg-zinc-100 text-zinc-600 border-zinc-200'
          }`}>
            {totalCount.toLocaleString()} components
          </span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center flex-wrap gap-2 justify-end sm:justify-start">

          {/* + Add Page to Stack Button */}
          <button
            id="add-page-to-stack-btn"
            onClick={onAddPageToStack}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-150 active:scale-95 min-h-[36px] cursor-pointer ${
              isDark
                ? 'bg-zinc-900 border-zinc-700 text-zinc-200 hover:bg-zinc-800 hover:border-amber-500/50'
                : 'bg-white border-zinc-300 text-zinc-800 hover:bg-zinc-50 hover:border-amber-500'
            }`}
          >
            <Plus className="w-3.5 h-3.5 text-amber-500" />
            <span>+ Add Page to Stack</span>
          </button>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-1">
            <div className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg border text-xs font-medium min-h-[36px] ${
              isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-300' : 'bg-white border-zinc-200 text-zinc-700'
            }`}>
              <ArrowUpDown className="w-3 h-3 text-zinc-400" />
              <select
                id="sort-components-select"
                value={sortBy}
                onChange={(e) => onSortChange(e.target.value as any)}
                aria-label="Sort components"
                className="bg-transparent text-xs focus:outline-none cursor-pointer pr-1"
              >
                <option value="popular" className={isDark ? 'bg-zinc-900 text-white' : 'bg-white text-black'}>
                  Most Popular
                </option>
                <option value="trending" className={isDark ? 'bg-zinc-900 text-white' : 'bg-white text-black'}>
                  🔥 Trending (High Engagement)
                </option>
                <option value="installs" className={isDark ? 'bg-zinc-900 text-white' : 'bg-white text-black'}>
                  Most Installs
                </option>
                <option value="newest" className={isDark ? 'bg-zinc-900 text-white' : 'bg-white text-black'}>
                  Recently Added
                </option>
                <option value="alpha" className={isDark ? 'bg-zinc-900 text-white' : 'bg-white text-black'}>
                  Alphabetical (A-Z)
                </option>
              </select>
            </div>
          </div>

          {/* Grid / List Layout Switcher */}
          <div className={`flex items-center rounded-lg border p-0.5 ${
            isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-zinc-100 border-zinc-200'
          }`}>
            <button
              onClick={() => onToggleViewMode('grid')}
              className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                viewMode === 'grid'
                  ? isDark
                    ? 'bg-zinc-800 text-amber-400 shadow-sm'
                    : 'bg-white text-zinc-900 shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200'
              }`}
              title="Grid View"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onToggleViewMode('list')}
              className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                viewMode === 'list'
                  ? isDark
                    ? 'bg-zinc-800 text-amber-400 shadow-sm'
                    : 'bg-white text-zinc-900 shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200'
              }`}
              title="List View"
            >
              <List className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
