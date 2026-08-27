# Claude Code Ecosystem & Stack Builder

A comprehensive, verified directory and interactive configuration tool for the **Claude Code** ecosystem, including skills, agents, Model Context Protocols (MCPs), custom commands, settings, hooks, and plugins.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-19.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4.0-38bdf8)
![Vite](https://img.shields.io/badge/Vite-6.2-646cff)

---

## 🌟 Key Features

- **🔍 Exhaustive Ecosystem Directory**: Explore thousands of verified resources categorized into:
  - **Skills** (872) – Core functional competencies and prompts.
  - **Agents** (422) – Autonomous sub-agents and persona modules.
  - **Commands** (286) – Custom slash commands and shell workflows.
  - **MCPs** (101) – Model Context Protocol server integrations.
  - **Settings** (71) – Production configurations and rules.
  - **Hooks** (62) – Lifecycle hooks and trigger event rules.
  - **Plugins** (34) – Full extension suites.
- **⚡ Interactive Stack Builder Drawer**:
  - Combine multiple skills, agents, and MCPs into a single prompt stack.
  - Export custom `.claude/config.json` configuration or generated prompt text.
  - Pre-built ecosystem presets (e.g., *Senior Fullstack Developer*, *DevOps Specialist*, *Security Auditor*).
- **🌓 Responsive Theme System**:
  - **Light Mode** ☀️
  - **Dark Mode** 🌙
  - **System Mode** 💻 (Automatically respects system theme preferences with real-time event listeners).
  - Preference persistence powered by `localStorage`.
- **🎯 Dynamic Filtering & Search**:
  - Instant full-text search across titles, tags, descriptions, and authors.
  - Organized category sidebar (*Development & Code*, *Workflow & Productivity*, *Security & DevOps*, *Data & Analytics*, *Creative & Design*, *System & Config*).
  - Sorting options: *Most Popular*, *🔥 Trending*, *Most Installs*, *Recently Added*, *A-Z*.
- **🧪 Skill & Prompt Tester Modal**:
  - Interactively test prompt outputs, parameter inputs, and code snippets before deploying to Claude Code CLI.
- **➕ Component Contribution Modal**:
  - User-friendly dialog to add custom skills, MCPs, or commands to local state.

---

## 📁 Project Structure

```text
├── src/
│   ├── components/            # UI Components
│   │   ├── ComponentCard.tsx         # Individual resource card component
│   │   ├── ComponentDetailModal.tsx   # Detailed view modal with code copy & usage
│   │   ├── CreateComponentModal.tsx   # Modal for submitting custom skills/tools
│   │   ├── FeaturedIntegrations.tsx   # Highlighted top tools & integrations
│   │   ├── FilterBar.tsx             # Active filter indicators, view mode, & sorting
│   │   ├── Header.tsx                # Top navigation, global search, and Theme Dropdown
│   │   ├── InfoModals.tsx            # Documentation & guide modals
│   │   ├── Sidebar.tsx               # Type counts, category filters, and presets
│   │   ├── SkillTesterModal.tsx      # Sandbox modal to test prompts and outputs
│   │   └── StackBuilderDrawer.tsx    # Drawer to compose, export, and manage prompt stacks
│   ├── data/
│   │   └── componentsData.ts         # Dataset of skills, agents, MCPs, commands, & categories
│   ├── types.ts                      # TypeScript type definitions & interfaces
│   ├── App.tsx                       # Main application state & layout orchestrator
│   ├── index.css                     # Global Tailwind CSS imports & base styles
│   └── main.tsx                      # React application entry point
├── metadata.json                     # AI Studio application metadata
├── package.json                      # Project dependencies & build scripts
├── tsconfig.json                     # TypeScript compiler configuration
└── vite.config.ts                    # Vite configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your environment:

- **Node.js**: v18.0.0 or higher
- **npm** or **bun** / **yarn**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/claude-code-ecosystem.git
   cd claude-code-ecosystem
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```text
   http://localhost:3000
   ```

---

## 📜 Available Scripts

In the project directory, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Runs the Vite development server on port `3000` with host `0.0.0.0`. |
| `npm run build` | Compiles and builds the production bundle into the `dist` folder. |
| `npm run preview` | Previews the production build locally. |
| `npm run lint` | Runs TypeScript type checking (`tsc --noEmit`). |
| `npm run clean` | Cleans build artifacts (`dist`). |

---

## 🛠️ Technology Stack

- **Frontend Framework**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict type safety)
- **Build Tool & Bundler**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Motion](https://motion.dev/) (`motion/react`)

---

## 🤝 Contributing

Contributions are welcome! If you'd like to add new Claude Code skills, agents, or MCPs to the catalog:

1. Fork the project repository.
2. Create your feature branch (`git checkout -b feature/AddSkill`).
3. Commit your changes (`git commit -m 'Add new Kubernetes MCP skill'`).
4. Push to the branch (`git push origin feature/AddSkill`).
5. Open a Pull Request.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
