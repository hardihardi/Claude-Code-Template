# Claude Code Ecosystem & Multi-Provider Stack Builder

A production-grade, interactive catalog and configuration workspace for Claude Code and multi-provider AI ecosystem extensions. Discover, inspect, simulate, and bundle **Skills**, **Agents**, **Commands**, **Settings**, **Hooks**, **MCPs (Model Context Protocol)**, and **Plugins** across isolated target AI environments.

---

## Table of Contents

- [Overview](#overview)
- [Key Architectural Features](#key-architectural-features)
  - [1. Target AI Ecosystem (Isolated Hub)](#1-target-ai-ecosystem-isolated-hub)
  - [2. The 7 Extension Tool Categories](#2-the-7-extension-tool-categories)
  - [3. Component Inspector & Playground](#3-component-inspector--playground)
  - [4. Stack Builder Drawer](#4-stack-builder-drawer)
  - [5. Detailed Theme Switcher](#5-detailed-theme-switcher)
- [Supported Provider Ecosystems](#supported-provider-ecosystems)
- [Tech Stack](#tech-stack)
- [Project Directory Structure](#project-directory-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Development Server](#development-server)
  - [Linting and Type Checking](#linting-and-type-checking)
  - [Production Build & Deployment](#production-build--deployment)
- [Security & Zero Cross-Contamination Guarantee](#security--zero-cross-contamination-guarantee)
- [License](#license)

---

## Overview

Modern AI coding agents and CLI assistants rely on specialized extensions—such as domain skills, autonomous agents, terminal slash commands, lifecycle hooks, and Model Context Protocol (MCP) integrations. 

The **Claude Code Ecosystem & Multi-Provider Stack Builder** provides a central platform to browse, test, and generate provider-native installation commands and manifests tailored for **7 leading AI ecosystems** without cross-contamination.

---

## Key Architectural Features

### 1. Target AI Ecosystem (Isolated Hub)
- **100% Ecosystem Isolation**: Instantly switch between targeted AI providers: **Claude**, **Gemini**, **ChatGPT**, **Z.AI**, **OpenCode**, **DeepSeek**, and **OX Alpha**.
- **Zero Cross-Contamination**: Selecting a specific provider filters and formats all CLI installation scripts, target filesystem directories (`~/.claude/*`, `.gemini/*`, `.openai/*`, `.zai/*`, `.opencode/*`, `.deepseek/*`, `.oxalpha/*`), manifest definitions, and health verification checks exclusively for that provider.

### 2. The 7 Extension Tool Categories
1. **Skills**: Custom domain workflows, operational guidelines, and prompt specifications (`SKILL.md`, `skill.json`, `skill.yaml`, `kernel.toml`).
2. **Agents**: Autonomous agent manifests, role declarations, system instructions, and tool bindings.
3. **Commands**: Terminal slash command executables and shell scripts (Bash/PowerShell).
4. **Settings**: Model guidelines and workspace rules (`AGENTS.md`, `GEMINI.md`, `config.yaml`).
5. **Hooks**: Lifecycle event handlers, security guardrails, and automated triggers (TypeScript, Python, Shell).
6. **MCPs**: Model Context Protocol server registrations and transport configurations.
7. **Plugins**: Self-contained extension packages and dependency manifests.

### 3. Component Inspector & Playground
- **Multi-Format Install Snippets**: One-click copy for CLI commands (`npx`, `gemini-cli`, `opencode`, etc.), direct macOS/Linux Bash installer scripts, Windows PowerShell commands, and raw configuration code.
- **Interactive AI Playground**: Real-time prompt simulation powered by server-side Gemini AI integration.
- **Direct Manifest Downloads**: Export provider-native configuration files (`.md`, `.json`, `.yaml`, `.toml`) directly to your workspace.

### 4. Stack Builder Drawer
- Select multiple components to create a unified stack bundle.
- Generate single-line compound installation scripts for rapid setup.
- Export and import custom stack JSON/YAML configurations.

### 5. Detailed Theme Switcher
- **Light Mode**: High-contrast, clean daylight layout.
- **Dark Mode**: Eye-safe twilight dark interface.
- **System Mode**: Dynamically synchronizes with system theme preferences via `matchMedia` listeners.
- **Persistent Choice**: Theme preference saved in browser `localStorage`.

---

## Supported Provider Ecosystems

| Provider | CLI Tool | Default Install Path | Config Format | Health Check |
| :--- | :--- | :--- | :--- | :--- |
| **Claude** | `npx claude-code-templates` | `~/.claude/` | JSON / SKILL.md | `claude list` |
| **Gemini** | `gemini-cli` | `.gemini/` | JSON | `gemini-cli check` |
| **ChatGPT** | `openai-cli` | `.openai/` | JSON / YAML | `openai-cli status` |
| **Z.AI** | `zai` | `.zai/` | YAML / Python | `zai status` |
| **OpenCode** | `opencode` | `.opencode/` | JSON | `opencode doctor` |
| **DeepSeek** | `deepseek-cli` | `.deepseek/` | JSON | `deepseek-cli verify` |
| **OX Alpha** | `ox-alpha` | `.oxalpha/` | TOML / Python | `ox-alpha verify` |

---

## Tech Stack

- **Frontend**: React 19, TypeScript 5.8, Vite 6, Tailwind CSS 4, Lucide React, Motion
- **Backend**: Node.js, Express 4, `@google/genai` (Google Gemini API SDK)
- **Build & Execution**: Vite, ESBuild, TSX

---

## Project Directory Structure

```text
├── src/
│   ├── components/
│   │   ├── Header.tsx              # Navigation header with ThemeDropdown component
│   │   ├── ComponentCard.tsx       # Interactive card component for items
│   │   ├── ComponentDetailModal.tsx# Component inspector, provider hub & playground
│   │   ├── StackBuilderDrawer.tsx  # Custom stack builder drawer
│   │   ├── SkillTesterModal.tsx    # Live AI simulation modal
│   │   ├── FilterBar.tsx           # Category tabs, provider filters & search bar
│   │   └── Sidebar.tsx             # Main category navigation sidebar
│   ├── utils/
│   │   ├── formatGenerators.ts     # Provider-specific manifest & command generators
│   │   └── mockData.ts             # Default component registry dataset
│   ├── types.ts                    # Global TypeScript interfaces & ThemeMode types
│   ├── App.tsx                     # Primary state manager & theme provider
│   └── main.tsx                    # Application entry point
├── package.json
├── metadata.json
├── .env.example
└── README.md
```

---

## Getting Started

### Prerequisites
- Node.js 18.0.0 or higher
- npm 9.0.0 or higher

### Installation

1. Clone or extract the application source repository.
2. Install dependencies:
```bash
npm install
```

### Environment Variables

If using the interactive AI simulation features, create a `.env` file in the root directory based on `.env.example`:
```env
GEMINI_API_KEY=your_gemini_api_key_here
```

### Development Server

Start the application development server on port 3000:
```bash
npm run dev
```
Navigate to `http://localhost:3000` in your web browser.

### Linting and Type Checking

Run static type analysis and code linting:
```bash
npm run lint
```

### Production Build & Deployment

Build client assets and bundle the server using `esbuild`:
```bash
npm run build
```

Start the production CommonJS server:
```bash
npm run start
```

---

## Security & Zero Cross-Contamination Guarantee

All provider installation commands, filesystem paths, and code generation templates are strictly scoped using provider-matching utility functions (`getProviderInstallCommand`, `getProviderCurlScript`, `getProviderPowerShell`, etc.). 

When a user selects a provider in the **Isolated Hub**, data from other AI providers is completely excluded, ensuring zero cross-contamination and 100% accurate tool declarations.

---

## License

Distributed under the Apache-2.0 License.
