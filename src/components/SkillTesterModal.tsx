import React, { useState } from 'react';
import { ComponentItem } from '../types';
import { X, Play, Sparkles, CheckCircle2, AlertCircle, ArrowRight, Layers, Terminal } from 'lucide-react';

interface SkillTesterModalProps {
  isOpen: boolean;
  onClose: () => void;
  allComponents: ComponentItem[];
  onAddToStack: (item: ComponentItem) => void;
  isDark: boolean;
  onNotify: (msg: string) => void;
}

export const SkillTesterModal: React.FC<SkillTesterModalProps> = ({
  isOpen,
  onClose,
  allComponents,
  onAddToStack,
  isDark,
  onNotify
}) => {
  const [promptInput, setPromptInput] = useState('');
  const [matchedComponents, setMatchedComponents] = useState<{ component: ComponentItem; reason: string; score: number }[]>([]);
  const [hasEvaluated, setHasEvaluated] = useState(false);

  if (!isOpen) return null;

  const samplePrompts = [
    "I need to review a pull request and find security bugs in this typescript repository",
    "Design a modern dark-mode bento grid landing page with responsive cards",
    "Create a PostgreSQL database schema and write optimized SQL queries with indexing",
    "Extract tabular data and KPIs from a scanned multi-page PDF invoice",
    "Write a Playwright end-to-end test suite for user authentication and checkout flow",
    "Containerize this full-stack React and Node.js application using multi-stage Docker"
  ];

  const evaluatePrompt = (textToTest: string) => {
    const text = (textToTest || promptInput).trim().toLowerCase();
    if (!text) return;

    const matches: { component: ComponentItem; reason: string; score: number }[] = [];

    for (const comp of allComponents) {
      let score = 0;
      let matchedReason = '';

      // Direct trigger matching
      if (comp.triggers) {
        for (const trigger of comp.triggers) {
          if (text.includes(trigger.toLowerCase())) {
            score = Math.max(score, 95);
            matchedReason = `Matched trigger rule: "${trigger}"`;
            break;
          }
        }
      }

      // Name matching
      if (text.includes(comp.name.toLowerCase())) {
        score = Math.max(score, 90);
        matchedReason = matchedReason || `Direct name match for "${comp.name}"`;
      }

      // Tag matching
      const matchedTag = comp.tags.find(t => text.includes(t.toLowerCase()));
      if (matchedTag && score < 80) {
        score = Math.max(score, 75);
        matchedReason = matchedReason || `Matched tag: #${matchedTag}`;
      }

      // Category matching
      if (text.includes(comp.category.toLowerCase().replace('-', ' ')) && score < 70) {
        score = Math.max(score, 60);
        matchedReason = matchedReason || `Related to ${comp.category}`;
      }

      if (score >= 60) {
        matches.push({ component: comp, reason: matchedReason, score });
      }
    }

    matches.sort((a, b) => b.score - a.score);
    setMatchedComponents(matches.slice(0, 6));
    setHasEvaluated(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150">
      <div className="fixed inset-0" onClick={onClose} />

      <div className={`relative w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden z-10 border flex flex-col max-h-[90vh] ${
        isDark ? 'bg-zinc-950 border-zinc-800 text-zinc-100' : 'bg-white border-zinc-200 text-zinc-900'
      }`}>
        
        {/* Header */}
        <div className={`p-5 border-b flex items-center justify-between ${
          isDark ? 'bg-zinc-900/60 border-zinc-800' : 'bg-zinc-50 border-zinc-200'
        }`}>
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-500">
              <Play className="w-5 h-5" />
            </div>
            <div>
              <h3 className={`font-bold text-lg tracking-tight ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>Claude Code Prompt Tester</h3>
              <p className={`text-xs ${isDark ? 'text-zinc-400' : 'text-zinc-600 font-medium'}`}>
                Simulate how the Claude Code trigger engine matches skills to developer prompts
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* Input Box */}
          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-400 block">
              Enter your developer prompt:
            </label>
            <div className="flex gap-2">
              <textarea
                rows={3}
                value={promptInput}
                onChange={(e) => setPromptInput(e.target.value)}
                placeholder="E.g., I want to build a high-performance React component with custom Tailwind layout..."
                className={`w-full p-3 text-xs sm:text-sm rounded-xl border focus:outline-none focus:ring-2 focus:ring-amber-500/50 ${
                  isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-100 placeholder-zinc-500' : 'bg-zinc-50 border-zinc-300 text-zinc-900 placeholder-zinc-500'
                }`}
              />
            </div>

            <div className="flex items-center justify-between flex-wrap gap-2 pt-1">
              <span className={`text-[11px] font-semibold ${isDark ? 'text-zinc-400' : 'text-zinc-700'}`}>
                Click a sample prompt or type your own:
              </span>
              <button
                onClick={() => evaluatePrompt(promptInput)}
                disabled={!promptInput.trim()}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-white text-xs font-bold shadow-md transition-colors cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Evaluate Trigger Match</span>
              </button>
            </div>

            {/* Sample Prompts Pills */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {samplePrompts.map((sample, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setPromptInput(sample);
                    evaluatePrompt(sample);
                  }}
                  className={`text-left text-[11px] px-2.5 py-1 rounded-lg border transition-colors ${
                    isDark
                      ? 'bg-zinc-900 border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-zinc-200'
                      : 'bg-zinc-100 border-zinc-200 hover:border-zinc-300 text-zinc-800 hover:text-black font-medium'
                  }`}
                >
                  "{sample.slice(0, 45)}..."
                </button>
              ))}
            </div>
          </div>

          {/* Results section */}
          {hasEvaluated && (
            <div className="space-y-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-400">
                  Triggered Components ({matchedComponents.length})
                </span>
                {matchedComponents.length > 0 && (
                  <button
                    onClick={() => {
                      matchedComponents.forEach(m => onAddToStack(m.component));
                      onNotify(`Added ${matchedComponents.length} triggered components to your stack!`);
                    }}
                    className="text-xs font-semibold text-amber-500 hover:underline flex items-center gap-1"
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>Add All Triggered to Stack</span>
                  </button>
                )}
              </div>

              {matchedComponents.length === 0 ? (
                <div className={`p-4 rounded-xl border text-center ${
                  isDark ? 'bg-zinc-900/50 border-zinc-800' : 'bg-zinc-50 border-zinc-200'
                }`}>
                  <AlertCircle className="w-6 h-6 text-zinc-400 mx-auto mb-2" />
                  <p className="text-xs font-semibold">No direct skill triggers matched this prompt.</p>
                  <p className={`text-[11px] mt-1 ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                    Try mentioning specific keywords like "frontend", "review", "security", "docker", "pdf", or "mcp".
                  </p>
                </div>
              ) : (
                <div className="space-y-2.5">
                  {matchedComponents.map((item, idx) => (
                    <div
                      key={idx}
                      className={`p-3.5 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                        isDark ? 'bg-zinc-900/70 border-zinc-800' : 'bg-white border-zinc-200 shadow-xs'
                      }`}
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                          <h4 className="font-bold text-sm tracking-tight text-zinc-900 dark:text-zinc-100">{item.component.name}</h4>
                          <span className={`text-[10px] font-mono px-2 py-0.2 rounded border ${
                            isDark ? 'bg-zinc-800 text-zinc-400 border-zinc-700' : 'bg-zinc-100 text-zinc-700 border-zinc-200'
                          }`}>
                            {item.component.category}
                          </span>
                        </div>
                        <p className={`text-xs mt-1 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                          {item.reason}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                        <span className="text-xs font-bold text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded">
                          {item.score}% Match
                        </span>
                        <button
                          onClick={() => {
                            onAddToStack(item.component);
                            onNotify(`Added ${item.component.name} to stack!`);
                          }}
                          className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold shadow-xs"
                        >
                          + Add to Stack
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
