import React from 'react';
import { FeaturedPartner } from '../types';
import { Globe, Sparkles, Layers, ArrowUpRight, Megaphone, ExternalLink, ShieldCheck } from 'lucide-react';

interface FeaturedIntegrationsProps {
  partners: FeaturedPartner[];
  isDark: boolean;
  onOpenPromote: () => void;
}

export const FeaturedIntegrations: React.FC<FeaturedIntegrationsProps> = ({
  partners,
  isDark,
  onOpenPromote
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-5 h-5 text-blue-500" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-amber-500" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-emerald-500" />;
      default:
        return <Sparkles className="w-5 h-5 text-indigo-500" />;
    }
  };

  return (
    <section className="mb-8">
      {/* Header section with title and promote link */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
        <div>
          <h2 className={`text-xl sm:text-2xl font-bold tracking-tight ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>
            Ready-to-use configurations for your Claude Code projects
          </h2>
          <p className={`text-xs sm:text-sm mt-0.5 ${isDark ? 'text-zinc-400' : 'text-zinc-700 font-medium'}`}>
            Featured verified toolkits, enterprise scrapers, and planning frameworks.
          </p>
        </div>
        <button
          onClick={onOpenPromote}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline self-start sm:self-auto cursor-pointer"
        >
          <Megaphone className="w-3.5 h-3.5" />
          <span>Promote your component</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Featured Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
        {partners.map((partner) => (
          <div
            key={partner.id}
            className={`group relative rounded-xl border p-4 transition-all duration-200 hover:shadow-lg ${
              isDark
                ? 'bg-zinc-900/60 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900'
                : 'bg-white border-zinc-200/80 hover:border-zinc-300 hover:shadow-zinc-100'
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className={`p-2.5 rounded-lg border ${
                  isDark ? 'bg-zinc-800/80 border-zinc-700/60' : 'bg-zinc-50 border-zinc-200'
                }`}>
                  {getIcon(partner.iconName)}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className={`font-bold text-sm tracking-tight group-hover:text-amber-500 transition-colors ${
                      isDark ? 'text-zinc-100' : 'text-zinc-900'
                    }`}>
                      {partner.name}
                    </h3>
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
                  </div>
                  <span className={`text-xs font-semibold ${isDark ? 'text-zinc-400' : 'text-zinc-700'}`}>
                    {partner.category}
                  </span>
                </div>
              </div>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                isDark
                  ? 'bg-zinc-800 text-zinc-300 border-zinc-700'
                  : 'bg-zinc-100 text-zinc-900 border-zinc-200'
              }`}>
                {partner.badge}
              </span>
            </div>

            <p className={`text-xs line-clamp-2 mb-3 leading-relaxed ${isDark ? 'text-zinc-300' : 'text-zinc-700 font-normal'}`}>
              {partner.tagline}
            </p>

            <div className="flex items-center justify-between pt-2 border-t border-zinc-100 dark:border-zinc-800/60 text-xs">
              <span className={`font-mono text-[11px] font-semibold ${isDark ? 'text-zinc-500' : 'text-zinc-600'}`}>
                verified integration
              </span>
              <a
                href={partner.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium text-amber-600 dark:text-amber-400 hover:text-amber-500 group-hover:translate-x-0.5 transition-transform"
              >
                <span>Learn more</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
