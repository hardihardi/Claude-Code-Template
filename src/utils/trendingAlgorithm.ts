import { ComponentItem } from '../types';

// Storage keys for user engagement tracking
const VIEWS_STORAGE_KEY = 'claude_code_engagement_views';
const COPIES_STORAGE_KEY = 'claude_code_engagement_copies';

/**
 * Interface representing recorded user engagement statistics
 */
export interface EngagementMetrics {
  viewsMap: Record<string, number>;
  copiesMap: Record<string, number>;
}

/**
 * Load engagement metrics from localStorage
 */
export function loadEngagementMetrics(): EngagementMetrics {
  try {
    const viewsRaw = localStorage.getItem(VIEWS_STORAGE_KEY);
    const copiesRaw = localStorage.getItem(COPIES_STORAGE_KEY);
    return {
      viewsMap: viewsRaw ? JSON.parse(viewsRaw) : {},
      copiesMap: copiesRaw ? JSON.parse(copiesRaw) : {}
    };
  } catch {
    return { viewsMap: {}, copiesMap: {} };
  }
}

/**
 * Track a component view event (increment view count)
 */
export function trackComponentView(componentId: string): EngagementMetrics {
  const metrics = loadEngagementMetrics();
  metrics.viewsMap[componentId] = (metrics.viewsMap[componentId] || 0) + 1;
  try {
    localStorage.setItem(VIEWS_STORAGE_KEY, JSON.stringify(metrics.viewsMap));
  } catch {
    // Ignore storage quota errors
  }
  return metrics;
}

/**
 * Track a CLI command copy event (increment copy count)
 */
export function trackComponentCopy(componentId: string): EngagementMetrics {
  const metrics = loadEngagementMetrics();
  metrics.copiesMap[componentId] = (metrics.copiesMap[componentId] || 0) + 1;
  try {
    localStorage.setItem(COPIES_STORAGE_KEY, JSON.stringify(metrics.copiesMap));
  } catch {
    // Ignore storage quota errors
  }
  return metrics;
}

/**
 * Calculate Trending Score for a single component item
 * 
 * Algorithm Formula:
 *  - Base Popularity: installs * 1.0
 *  - Interest Velocity (Views): viewCount * 12.0
 *  - High-Intent Action (Copies): copyCount * 25.0
 *  - Favorite/Saved Signal: isBookmarked ? 40.0 : 0
 *  - Active Stack Integration: isInStack ? 60.0 : 0
 *  - Trust & Quality Multiplier: verified ? +30 bonus points
 *  - System Featured Multiplier: featured ? +40 bonus points
 */
export function calculateTrendingScore(
  item: ComponentItem,
  viewCount: number = 0,
  copyCount: number = 0,
  isBookmarked: boolean = false,
  isInStack: boolean = false
): number {
  const baseInstallsScore = item.installs * 1.0;
  const viewScore = viewCount * 12.0;
  const copyScore = copyCount * 25.0;
  const bookmarkScore = isBookmarked ? 40.0 : 0;
  const stackScore = isInStack ? 60.0 : 0;
  const verifiedBonus = item.verified ? 30.0 : 0;
  const featuredBonus = item.featured ? 40.0 : 0;

  return Math.round(
    baseInstallsScore + viewScore + copyScore + bookmarkScore + stackScore + verifiedBonus + featuredBonus
  );
}

/**
 * Calculate and enrich all components with dynamic Trending Scores & Ranks
 * 
 * Determines top percentile trending threshold dynamically based on engagement dataset.
 */
export function computeTrendingComponents(
  items: ComponentItem[],
  metrics: EngagementMetrics,
  bookmarkedIds: string[],
  stackSlugs: string[]
): ComponentItem[] {
  const bookmarkedSet = new Set(bookmarkedIds);
  const stackSet = new Set(stackSlugs);

  // 1. Calculate individual trending scores
  const scoredItems = items.map((item) => {
    const views = metrics.viewsMap[item.id] || 0;
    const copies = metrics.copiesMap[item.id] || 0;
    const isBookmarked = bookmarkedSet.has(item.id);
    const isInStack = stackSet.has(item.id) || stackSet.has(item.slug);

    const trendingScore = calculateTrendingScore(item, views, copies, isBookmarked, isInStack);

    return {
      ...item,
      views,
      copies,
      trendingScore
    };
  });

  // 2. Sort by score descending to rank them
  const sortedByScore = [...scoredItems].sort((a, b) => (b.trendingScore || 0) - (a.trendingScore || 0));

  // 3. Determine top trending items (top 15% or top 10 items)
  const topCount = Math.max(6, Math.ceil(items.length * 0.15));
  const trendingIds = new Set(sortedByScore.slice(0, topCount).map((item) => item.id));

  // Create rank lookup
  const rankMap = new Map<string, number>();
  sortedByScore.forEach((item, index) => {
    rankMap.set(item.id, index + 1);
  });

  // 4. Return enriched items attached with trending info
  return scoredItems.map((item) => {
    const rank = rankMap.get(item.id) || 999;
    const isTrending = trendingIds.has(item.id);

    return {
      ...item,
      trendingRank: rank,
      isTrending
    };
  });
}
