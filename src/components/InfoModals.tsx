import React, { useState } from 'react';
import { X, BookOpen, FileText, Briefcase, Megaphone, Terminal, Sparkles, ExternalLink, Check, Copy } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
  onNotify?: (msg: string) => void;
}

export const DocsModal: React.FC<ModalProps> = ({ isOpen, onClose, isDark }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150">
      <div className="fixed inset-0" onClick={onClose} />
      <div className={`relative w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden z-10 border flex flex-col max-h-[90vh] ${
        isDark ? 'bg-zinc-950 border-zinc-800 text-zinc-100' : 'bg-white border-zinc-200 text-zinc-900'
      }`}>
        <div className={`p-5 border-b flex items-center justify-between ${
          isDark ? 'bg-zinc-900/60 border-zinc-800' : 'bg-zinc-50 border-zinc-200'
        }`}>
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-500">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg tracking-tight">Claude Code Documentation</h3>
              <p className={`text-xs ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                Architecture, SKILL.md specifications, and CLI integration guidelines
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-zinc-400 hover:text-zinc-200">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6 text-xs sm:text-sm leading-relaxed">
          <section className="space-y-2">
            <h4 className="font-bold text-base tracking-tight text-amber-500">What are Claude Code Skills?</h4>
            <p className={isDark ? 'text-zinc-300' : 'text-zinc-700'}>
              Skills are modular folders containing instructions, scripts, and resources that extend Claude Code's capabilities for specialized tasks. Each skill has a mandatory <code>SKILL.md</code> with YAML frontmatter specifying its name and description.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="font-bold text-base tracking-tight text-amber-500">How to Install and Use Stacks</h4>
            <p className={isDark ? 'text-zinc-300' : 'text-zinc-700'}>
              You can bundle any number of skills, agents, commands, and MCPs using our Stack Builder. Run the generated command in your project directory:
            </p>
            <div className={`p-3 rounded-lg font-mono text-xs overflow-x-auto ${
              isDark ? 'bg-zinc-900 border border-zinc-800 text-amber-300' : 'bg-zinc-900 text-amber-400'
            }`}>
              npx claude-code-templates@latest --skill development/code-reviewer,creative-design/ui-ux-pro-max
            </div>
          </section>

          <section className="space-y-2">
            <h4 className="font-bold text-base tracking-tight text-amber-500">Triggering Guidelines</h4>
            <p className={isDark ? 'text-zinc-300' : 'text-zinc-700'}>
              Claude Code matches user prompts against the frontmatter description and keywords. You can simulate prompt triggers anytime using our built-in <strong>Prompt Tester</strong> tool.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export const BlogModal: React.FC<ModalProps> = ({ isOpen, onClose, isDark }) => {
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  if (!isOpen) return null;

  const posts = [
    {
      title: "Building Production-Ready Claude Code Skills in 2026",
      date: "August 2026",
      readTime: "5 min read",
      author: "Anthropic Engineering & Ecosystem Guild",
      summary: "Best practices for writing deterministic SKILL.md prompt specifications, avoiding AI slop, and benchmarking trigger accuracy.",
      content: `### Writing Deterministic SKILL.md Files

When building skills for Claude Code, keep your instructions explicit, structured, and test-driven:

1. **Explicit Frontmatter**: Define \`name\` and descriptive \`description\` fields that clearly declare when the skill should activate.
2. **Phase-Gated Protocols**: Structure the body into Inspection, Execution, and Verification phases.
3. **Anti-Slop Directives**: Explicitly ban generic AI clichés such as arbitrary purple gradients or fake mock placeholders.
4. **Automated Verification**: End every skill procedure with mandatory test and linter commands.`
    },
    {
      title: "How to Connect Model Context Protocol (MCP) to Postgres and GitHub",
      date: "July 2026",
      readTime: "8 min read",
      author: "Claude Tooling Team",
      summary: "A deep dive into setting up FastMCP and TypeScript MCP SDK servers for local tool execution.",
      content: `### Connecting FastMCP Python to Claude Code

Model Context Protocol (MCP) bridges Claude Code to external services safely:

\`\`\`python
from mcp.server.fastmcp import FastMCP

mcp = FastMCP("postgres-mcp", dependencies=["asyncpg", "pydantic"])

@mcp.tool()
async def query_db(sql: str) -> str:
    """Execute read-only SQL queries with automatic limits."""
    return f"Result for: {sql}"
\`\`\`

Add the server definition to your project's \`.claude/settings.json\` under the \`mcpServers\` key.`
    },
    {
      title: "The Stack Builder Pattern: Curating 25 Essential Developer Tools",
      date: "June 2026",
      readTime: "4 min read",
      author: "Community Contributors",
      summary: "How modern developer teams organize their AI agent stacks for automated testing, code review, and UX design.",
      content: `### Organizing Multi-Agent Stacks

Instead of running a monolithic mega-prompt, modern engineering teams compose modular stacks:

- **Frontend Core**: UI/UX Pro Max + Frontend Design + Canvas Engine
- **Backend Core**: Senior Architect + Senior Backend + PostgreSQL MCP
- **Quality & Safety**: Sentry Bug Finder + Webapp Testing + Clean Code

Export your stack directly as a \`SKILL.md\` or run via \`npx claude-code-templates\` to load everything in one second.`
    }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150">
      <div className="fixed inset-0" onClick={onClose} />
      <div className={`relative w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden z-10 border flex flex-col max-h-[90vh] ${
        isDark ? 'bg-zinc-950 border-zinc-800 text-zinc-100' : 'bg-white border-zinc-200 text-zinc-900'
      }`}>
        <div className={`p-5 border-b flex items-center justify-between ${
          isDark ? 'bg-zinc-900/60 border-zinc-800' : 'bg-zinc-50 border-zinc-200'
        }`}>
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-500">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg tracking-tight">Claude Code Community Blog</h3>
              <p className={`text-xs ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                Latest releases, agent patterns, and skill architecture guides
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-zinc-400 hover:text-zinc-200">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {selectedPost !== null ? (
            <div className="space-y-4">
              <button
                onClick={() => setSelectedPost(null)}
                className="text-xs font-semibold text-amber-500 hover:underline flex items-center gap-1"
              >
                ← Back to all posts
              </button>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <span>{posts[selectedPost].date}</span>
                  <span>•</span>
                  <span>{posts[selectedPost].readTime}</span>
                  <span>•</span>
                  <span className="text-amber-500">{posts[selectedPost].author}</span>
                </div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                  {posts[selectedPost].title}
                </h3>
              </div>
              <div className={`p-4 rounded-xl border text-xs sm:text-sm leading-relaxed whitespace-pre-line font-sans ${
                isDark ? 'bg-zinc-900/70 border-zinc-800 text-zinc-300' : 'bg-zinc-50 border-zinc-200 text-zinc-800'
              }`}>
                {posts[selectedPost].content}
              </div>
            </div>
          ) : (
            posts.map((p, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedPost(idx)}
                className={`p-4 rounded-xl border transition-all cursor-pointer ${
                  isDark ? 'bg-zinc-900/60 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900' : 'bg-white border-zinc-200 hover:border-zinc-300 hover:shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between text-xs text-zinc-400 mb-1">
                  <span>{p.date}</span>
                  <span>{p.readTime}</span>
                </div>
                <h4 className="font-bold text-sm text-zinc-900 dark:text-zinc-100 hover:text-amber-500 transition-colors">
                  {p.title}
                </h4>
                <p className={`text-xs mt-1.5 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  {p.summary}
                </p>
                <div className="mt-2 text-xs font-semibold text-amber-500 hover:underline">
                  Read full guide →
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export const JobsModal: React.FC<ModalProps> = ({ isOpen, onClose, isDark, onNotify }) => {
  const [appliedJobs, setAppliedJobs] = useState<string[]>([]);

  if (!isOpen) return null;

  const jobs = [
    {
      id: "job-1",
      title: "Senior AI Agent Architect",
      company: "Anthropic Ecosystem Guild",
      location: "San Francisco, CA • Remote",
      type: "Full-time",
      salary: "$190k – $260k",
      description: "Design autonomous tool execution loops, subagent delegation frameworks, and deterministic verification protocols for Claude Code."
    },
    {
      id: "job-2",
      title: "Staff Frontend Engineer (Design Systems)",
      company: "Vercel / Next.js",
      location: "Remote Worldwide",
      type: "Full-time",
      salary: "$180k – $240k",
      description: "Architect high-performance Tailwind v4 token pipelines, accessible AST components, and AI-driven UI generator tooling."
    },
    {
      id: "job-3",
      title: "MCP Core Protocol Engineer",
      company: "Model Context Protocol Labs",
      location: "Remote",
      type: "Full-time",
      salary: "$170k – $230k",
      description: "Build high-throughput JSON-RPC 2.0 FastMCP Python and TypeScript server engines for real-time developer workflows."
    }
  ];

  const handleApply = (jobId: string, jobTitle: string) => {
    setAppliedJobs(prev => [...prev, jobId]);
    if (onNotify) {
      onNotify(`Application submitted for ${jobTitle}! We will connect via your registered GitHub/Email.`);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150">
      <div className="fixed inset-0" onClick={onClose} />
      <div className={`relative w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden z-10 border flex flex-col max-h-[90vh] ${
        isDark ? 'bg-zinc-950 border-zinc-800 text-zinc-100' : 'bg-white border-zinc-200 text-zinc-900'
      }`}>
        <div className={`p-5 border-b flex items-center justify-between ${
          isDark ? 'bg-zinc-900/60 border-zinc-800' : 'bg-zinc-50 border-zinc-200'
        }`}>
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg tracking-tight">AI & Claude Code Ecosystem Jobs</h3>
              <p className={`text-xs ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                Verified engineering roles at leading AI-native development companies
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-zinc-400 hover:text-zinc-200">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {jobs.map((j) => {
            const hasApplied = appliedJobs.includes(j.id);
            return (
              <div key={j.id} className={`p-4 rounded-xl border flex flex-col sm:flex-row sm:items-start justify-between gap-3.5 transition-all ${
                isDark ? 'bg-zinc-900/60 border-zinc-800 hover:border-zinc-700' : 'bg-white border-zinc-200 hover:border-zinc-300'
              }`}>
                <div className="space-y-1.5 flex-1">
                  <h4 className="font-bold text-sm text-zinc-900 dark:text-zinc-100">{j.title}</h4>
                  <p className="text-xs text-amber-500 font-medium">{j.company}</p>
                  <p className={`text-xs ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    {j.description}
                  </p>
                  <div className="flex items-center gap-2 pt-1 text-[11px] text-zinc-400 flex-wrap">
                    <span>{j.location}</span>
                    <span>•</span>
                    <span>{j.type}</span>
                    <span>•</span>
                    <span className="font-semibold text-emerald-500">{j.salary}</span>
                  </div>
                </div>
                <button
                  onClick={() => handleApply(j.id, j.title)}
                  disabled={hasApplied}
                  className={`px-3.5 py-2 rounded-lg text-xs font-semibold shrink-0 min-h-[38px] transition-all ${
                    hasApplied
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                      : 'bg-amber-500 hover:bg-amber-600 text-white shadow-xs'
                  }`}
                >
                  {hasApplied ? (
                    <span className="flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" />
                      <span>Applied</span>
                    </span>
                  ) : (
                    'Apply Now'
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const PromoteModal: React.FC<ModalProps> = ({ isOpen, onClose, isDark, onNotify }) => {
  const [partnerName, setPartnerName] = useState('');
  const [website, setWebsite] = useState('');
  const [category, setCategory] = useState('Integration');

  if (!isOpen) return null;

  const handlePromote = (e: React.FormEvent) => {
    e.preventDefault();
    if (onNotify) onNotify(`Thank you! Promotion request for "${partnerName}" received. Our developer relations team will review it.`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150">
      <div className="fixed inset-0" onClick={onClose} />
      <div className={`relative w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden z-10 border flex flex-col max-h-[90vh] ${
        isDark ? 'bg-zinc-950 border-zinc-800 text-zinc-100' : 'bg-white border-zinc-200 text-zinc-900'
      }`}>
        <div className={`p-5 border-b flex items-center justify-between ${
          isDark ? 'bg-zinc-900/60 border-zinc-800' : 'bg-zinc-50 border-zinc-200'
        }`}>
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-500">
              <Megaphone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg tracking-tight">Promote Your Component</h3>
              <p className={`text-xs ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                Feature your SDK, MCP server, or developer toolkit on the main banner
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-zinc-400 hover:text-zinc-200">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handlePromote} className="p-6 space-y-4">
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-400 block mb-1.5">
              Tool / Organization Name *
            </label>
            <input
              type="text"
              required
              value={partnerName}
              onChange={(e) => setPartnerName(e.target.value)}
              placeholder="e.g. Supabase MCP / Resend Email Kit"
              className={`w-full px-3 py-2 text-xs sm:text-sm rounded-lg border focus:outline-none focus:ring-2 focus:ring-amber-500/50 ${
                isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-100 placeholder-zinc-500' : 'bg-white border-zinc-300 text-zinc-900 placeholder-zinc-400'
              }`}
            />
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-400 block mb-1.5">
              Product Website URL *
            </label>
            <input
              type="url"
              required
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              placeholder="https://example.com"
              className={`w-full px-3 py-2 text-xs sm:text-sm rounded-lg border focus:outline-none focus:ring-2 focus:ring-amber-500/50 ${
                isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-100 placeholder-zinc-500' : 'bg-white border-zinc-300 text-zinc-900 placeholder-zinc-400'
              }`}
            />
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-400 block mb-1.5">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className={`w-full px-3 py-2 text-xs sm:text-sm rounded-lg border focus:outline-none focus:ring-2 focus:ring-amber-500/50 ${
                isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-100' : 'bg-white border-zinc-300 text-zinc-900'
              }`}
            >
              <option value="Web Data">Web Data & Scraping</option>
              <option value="AI Agents & Skills">AI Agents & Skills</option>
              <option value="Planning & Productivity">Planning & Productivity</option>
              <option value="Security & Auditing">Security & Auditing</option>
              <option value="Database">Database & Storage</option>
            </select>
          </div>

          <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 flex justify-end gap-2">
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
              className="px-5 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold shadow-md transition-colors"
            >
              Submit Partner Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export const SignInModal: React.FC<ModalProps & { onLoginSuccess: (email: string) => void }> = ({
  isOpen,
  onClose,
  isDark,
  onNotify,
  onLoginSuccess
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    onLoginSuccess(email);
    if (onNotify) onNotify(`Welcome back, ${email}! Successfully signed in.`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150">
      <div className="fixed inset-0" onClick={onClose} />
      <div className={`relative w-full max-w-md rounded-2xl shadow-2xl overflow-hidden z-10 border flex flex-col ${
        isDark ? 'bg-zinc-950 border-zinc-800 text-zinc-100' : 'bg-white border-zinc-200 text-zinc-900'
      }`}>
        <div className={`p-5 border-b flex items-center justify-between ${
          isDark ? 'bg-zinc-900/60 border-zinc-800' : 'bg-zinc-50 border-zinc-200'
        }`}>
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-500">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg tracking-tight">Sign in to Claude Code</h3>
              <p className={`text-xs ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                Sync custom skills, saved stacks, and API configurations
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-zinc-400 hover:text-zinc-200">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-400 block mb-1.5">
              Email Address *
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="developer@company.com"
              className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border focus:outline-none focus:ring-2 focus:ring-amber-500/50 ${
                isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-100 placeholder-zinc-500' : 'bg-white border-zinc-300 text-zinc-900 placeholder-zinc-400'
              }`}
            />
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-400 block mb-1.5">
              Password *
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border focus:outline-none focus:ring-2 focus:ring-amber-500/50 ${
                isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-100 placeholder-zinc-500' : 'bg-white border-zinc-300 text-zinc-900 placeholder-zinc-400'
              }`}
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white text-xs font-bold shadow-md shadow-orange-500/20 transition-all cursor-pointer min-h-[42px]"
            >
              Sign In to Account
            </button>
          </div>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-zinc-200 dark:border-zinc-800" /></div>
            <div className="relative flex justify-center text-[10px] uppercase font-bold tracking-wider">
              <span className={`px-2 ${isDark ? 'bg-zinc-950 text-zinc-500' : 'bg-white text-zinc-400'}`}>or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => {
                onLoginSuccess("github-dev@user.com");
                if (onNotify) onNotify("Signed in with GitHub Developer Account!");
                onClose();
              }}
              className={`py-2 px-3 rounded-lg border text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer ${
                isDark ? 'border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-zinc-200' : 'border-zinc-300 bg-zinc-50 hover:bg-zinc-100 text-zinc-800'
              }`}
            >
              GitHub
            </button>
            <button
              type="button"
              onClick={() => {
                onLoginSuccess("google-dev@user.com");
                if (onNotify) onNotify("Signed in with Google Account!");
                onClose();
              }}
              className={`py-2 px-3 rounded-lg border text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer ${
                isDark ? 'border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-zinc-200' : 'border-zinc-300 bg-zinc-50 hover:bg-zinc-100 text-zinc-800'
              }`}
            >
              Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

