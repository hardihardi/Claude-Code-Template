import React, { useState } from 'react';
import { ComponentItem, ComponentType, Category } from '../types';
import { CATEGORIES_LIST } from '../data/componentsData';
import { X, Plus, Sparkles, Check, Code, ShieldCheck } from 'lucide-react';

interface CreateComponentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSaveComponent: (newItem: ComponentItem) => void;
  isDark: boolean;
  onNotify: (msg: string) => void;
}

export const CreateComponentModal: React.FC<CreateComponentModalProps> = ({
  isOpen,
  onClose,
  onSaveComponent,
  isDark,
  onNotify
}) => {
  const [name, setName] = useState('');
  const [type, setType] = useState<ComponentType>('skill');
  const [category, setCategory] = useState<Category>('development');
  const [description, setDescription] = useState('');
  const [triggers, setTriggers] = useState('');
  const [tags, setTags] = useState('');
  const [instructions, setInstructions] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !description.trim()) {
      onNotify('Please fill in Component Name and Description.');
      return;
    }

    const slug = `${category}/${name.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-')}`;
    const triggerArray = triggers.split(',').map(t => t.trim()).filter(Boolean);
    const tagArray = tags.split(',').map(t => t.trim()).filter(Boolean);

    const newItem: ComponentItem = {
      id: `custom-${Date.now()}`,
      slug,
      name: name.trim(),
      type,
      category,
      description: description.trim(),
      installs: 1,
      verified: true,
      featured: false,
      version: '1.0.0',
      author: 'You (Custom)',
      tags: tagArray.length > 0 ? tagArray : ['Custom', type],
      triggers: triggerArray.length > 0 ? triggerArray : [name.toLowerCase()],
      fullInstructions: instructions.trim() || `# ${name}\n${description}\n\n## Guidelines\n- Custom user generated configuration.`,
      cliCommand: `npx claude-code-templates@latest --${type} ${slug}`
    };

    onSaveComponent(newItem);
    onNotify(`Created custom component "${name}" and added to catalog!`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150">
      <div className="fixed inset-0" onClick={onClose} />

      <div className={`relative w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden z-10 border flex flex-col max-h-[90vh] ${
        isDark ? 'bg-zinc-950 border-zinc-800 text-zinc-100' : 'bg-white border-zinc-200 text-zinc-900'
      }`}>
        
        {/* Header */}
        <div className={`p-5 border-b flex items-center justify-between ${
          isDark ? 'bg-zinc-900/60 border-zinc-800' : 'bg-zinc-50 border-zinc-200'
        }`}>
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500">
              <Plus className="w-5 h-5" />
            </div>
            <div>
              <h3 className={`font-bold text-lg tracking-tight ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>Submit New Claude Component</h3>
              <p className={`text-xs ${isDark ? 'text-zinc-400' : 'text-zinc-600 font-medium'}`}>
                Define custom skills, agents, MCPs, hooks, or commands
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-4">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-400 block mb-1.5">
                Component Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="E.g., Tailwind V4 Optimizer"
                className={`w-full px-3 py-2 text-xs sm:text-sm rounded-lg border focus:outline-none focus:ring-2 focus:ring-amber-500/50 ${
                  isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-100 placeholder-zinc-500' : 'bg-white border-zinc-300 text-zinc-900 placeholder-zinc-400'
                }`}
              />
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-400 block mb-1.5">
                Type
              </label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value as ComponentType)}
                className={`w-full px-3 py-2 text-xs sm:text-sm rounded-lg border focus:outline-none focus:ring-2 focus:ring-amber-500/50 ${
                  isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-100' : 'bg-white border-zinc-300 text-zinc-900'
                }`}
              >
                <option value="skill" className={isDark ? 'bg-zinc-900 text-zinc-100' : 'bg-white text-zinc-900'}>Skill</option>
                <option value="agent" className={isDark ? 'bg-zinc-900 text-zinc-100' : 'bg-white text-zinc-900'}>Agent</option>
                <option value="command" className={isDark ? 'bg-zinc-900 text-zinc-100' : 'bg-white text-zinc-900'}>Command (/slash)</option>
                <option value="mcp" className={isDark ? 'bg-zinc-900 text-zinc-100' : 'bg-white text-zinc-900'}>MCP Server</option>
                <option value="hook" className={isDark ? 'bg-zinc-900 text-zinc-100' : 'bg-white text-zinc-900'}>Hook</option>
                <option value="setting" className={isDark ? 'bg-zinc-900 text-zinc-100' : 'bg-white text-zinc-900'}>Setting</option>
                <option value="plugin" className={isDark ? 'bg-zinc-900 text-zinc-100' : 'bg-white text-zinc-900'}>Plugin</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-400 block mb-1.5">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value as Category)}
              className={`w-full px-3 py-2 text-xs sm:text-sm rounded-lg border focus:outline-none focus:ring-2 focus:ring-amber-500/50 ${
                isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-100' : 'bg-white border-zinc-300 text-zinc-900'
              }`}
            >
              {CATEGORIES_LIST.filter(c => c.id !== 'all').map(c => (
                <option key={c.id} value={c.id} className={isDark ? 'bg-zinc-900 text-zinc-100' : 'bg-white text-zinc-900'}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-400 block mb-1.5">
              Description *
            </label>
            <textarea
              required
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Explain what this component does and when Claude should trigger it..."
              className={`w-full p-3 text-xs sm:text-sm rounded-lg border focus:outline-none focus:ring-2 focus:ring-amber-500/50 ${
                isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-100 placeholder-zinc-500' : 'bg-white border-zinc-300 text-zinc-900 placeholder-zinc-400'
              }`}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-400 block mb-1.5">
                Trigger Phrases (comma separated)
              </label>
              <input
                type="text"
                value={triggers}
                onChange={(e) => setTriggers(e.target.value)}
                placeholder="e.g. optimize css, tailwind v4, modern styling"
                className={`w-full px-3 py-2 text-xs sm:text-sm rounded-lg border focus:outline-none focus:ring-2 focus:ring-amber-500/50 ${
                  isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-100 placeholder-zinc-500' : 'bg-white border-zinc-300 text-zinc-900 placeholder-zinc-400'
                }`}
              />
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-400 block mb-1.5">
                Tags (comma separated)
              </label>
              <input
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="e.g. CSS, Tailwind, Performance"
                className={`w-full px-3 py-2 text-xs sm:text-sm rounded-lg border focus:outline-none focus:ring-2 focus:ring-amber-500/50 ${
                  isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-100 placeholder-zinc-500' : 'bg-white border-zinc-300 text-zinc-900 placeholder-zinc-400'
                }`}
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-400 block mb-1.5">
              Full SKILL.md / Instruction Markdown (Optional)
            </label>
            <textarea
              rows={4}
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              placeholder="# Instructions&#10;1. Step one...&#10;2. Step two..."
              className={`w-full p-3 font-mono text-xs rounded-lg border focus:outline-none focus:ring-2 focus:ring-amber-500/50 ${
                isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-100 placeholder-zinc-500' : 'bg-white border-zinc-300 text-zinc-900 placeholder-zinc-400'
              }`}
            />
          </div>

          <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className={`px-4 py-2 rounded-lg text-xs font-medium border ${
                isDark ? 'border-zinc-800 text-zinc-400 hover:bg-zinc-900' : 'border-zinc-300 text-zinc-700 hover:bg-zinc-100'
              }`}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold shadow-md transition-colors"
            >
              Add Component
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
