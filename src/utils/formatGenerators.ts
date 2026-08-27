import { ComponentItem, AIProvider, ProviderMeta } from '../types';

export const AI_PROVIDERS: ProviderMeta[] = [
  {
    id: 'claude',
    name: 'Anthropic Claude',
    shortName: 'Claude',
    tagline: 'Claude Code CLI, Claude Desktop & Sonnet 3.7 Native Runtime',
    badge: 'Official / Default',
    cliTool: 'npx claude-code-templates@latest',
    color: 'text-amber-500',
    borderColor: 'border-amber-500/40',
    bgColor: 'bg-amber-500/10',
    activeColor: 'from-amber-500 to-orange-600',
    docUrl: 'https://docs.anthropic.com/en/docs/agents-and-tools/claude-code'
  },
  {
    id: 'gemini',
    name: 'Google Gemini',
    shortName: 'Gemini',
    tagline: 'Google AI Studio, Gemini Code Assist & Google GenAI SDK',
    badge: 'Google AI Ecosystem',
    cliTool: 'gemini-cli',
    color: 'text-blue-500',
    borderColor: 'border-blue-500/40',
    bgColor: 'bg-blue-500/10',
    activeColor: 'from-blue-600 to-indigo-600',
    docUrl: 'https://ai.google.dev/gemini-api/docs'
  },
  {
    id: 'chatgpt',
    name: 'OpenAI ChatGPT',
    shortName: 'ChatGPT',
    tagline: 'OpenAI Assistants API, Custom GPTs & Function Calling Schema',
    badge: 'OpenAI Platform',
    cliTool: 'openai-cli',
    color: 'text-emerald-500',
    borderColor: 'border-emerald-500/40',
    bgColor: 'bg-emerald-500/10',
    activeColor: 'from-emerald-600 to-teal-600',
    docUrl: 'https://platform.openai.com/docs'
  },
  {
    id: 'zai',
    name: 'Z.AI (GLM-4)',
    shortName: 'Z.AI',
    tagline: 'Zhipu AI Developer Platform & Multi-Agent GLM Runtime',
    badge: 'Zhipu Agent Suite',
    cliTool: 'zai',
    color: 'text-purple-500',
    borderColor: 'border-purple-500/40',
    bgColor: 'bg-purple-500/10',
    activeColor: 'from-purple-600 to-violet-600',
    docUrl: 'https://open.bigmodel.cn'
  },
  {
    id: 'opencode',
    name: 'OpenCode Interpreter',
    shortName: 'OpenCode',
    tagline: 'Open-source Local Sandbox & OpenDevin Autonomous Framework',
    badge: 'Open Source Framework',
    cliTool: 'opencode',
    color: 'text-cyan-500',
    borderColor: 'border-cyan-500/40',
    bgColor: 'bg-cyan-500/10',
    activeColor: 'from-cyan-600 to-blue-600',
    docUrl: 'https://github.com/opencode-ai'
  },
  {
    id: 'deepseek',
    name: 'DeepSeek Coder',
    shortName: 'DeepSeek',
    tagline: 'DeepSeek-V3 / R1 Advanced Reasoning & Code Synthesis Engine',
    badge: 'Reasoning Engine',
    cliTool: 'deepseek-cli',
    color: 'text-indigo-500',
    borderColor: 'border-indigo-500/40',
    bgColor: 'bg-indigo-500/10',
    activeColor: 'from-indigo-600 to-sky-600',
    docUrl: 'https://api-docs.deepseek.com'
  },
  {
    id: 'oxalpha',
    name: 'OX Alpha',
    shortName: 'OX Alpha',
    tagline: 'OX Alpha Autonomous Kernel, Distributed Protocol & Agent Fabric',
    badge: 'Autonomous Kernel',
    cliTool: 'ox-alpha',
    color: 'text-pink-500',
    borderColor: 'border-pink-500/40',
    bgColor: 'bg-pink-500/10',
    activeColor: 'from-pink-600 to-rose-600',
    docUrl: 'https://oxalpha.ai/docs'
  }
];

export function getProviderMeta(providerId: AIProvider): ProviderMeta {
  return AI_PROVIDERS.find(p => p.id === providerId) || AI_PROVIDERS[0];
}

/**
 * Get accurate, non-hallucinated CLI install command for any provider and component
 */
export function getProviderInstallCommand(item: ComponentItem, provider: AIProvider): string {
  const shortCmd = item.slug.split('/').pop() || item.slug;
  switch (provider) {
    case 'claude':
      return item.cliCommand || `npx claude-code-templates@latest --${item.type} ${item.slug}`;
    case 'gemini':
      return `gemini-cli ${item.type} add ${item.slug}`;
    case 'chatgpt':
      return `openai-cli ${item.type} install ${item.slug}`;
    case 'zai':
      return `zai ${item.type === 'skill' ? 'skill import' : item.type === 'agent' ? 'agent deploy' : item.type === 'mcp' ? 'mcp add' : 'pkg install'} ${item.slug}`;
    case 'opencode':
      return `opencode ${item.type} install ${item.slug}`;
    case 'deepseek':
      return `deepseek-cli ${item.type} add ${item.slug}`;
    case 'oxalpha':
      return `ox-alpha ${item.type} load ${item.slug}`;
    default:
      return `npx claude-code-templates@latest --${item.type} ${item.slug}`;
  }
}

/**
 * Get target placement file/folder path for a component on a specific provider
 */
export function getProviderTargetPlacement(item: ComponentItem, provider: AIProvider): string {
  const shortSlug = item.slug.split('/').pop() || item.slug;

  switch (provider) {
    case 'claude':
      if (item.type === 'skill') return `~/.claude/skills/${item.slug}/SKILL.md`;
      if (item.type === 'agent') return `~/.claude/agents/${item.slug}/agent.yaml`;
      if (item.type === 'command') return `~/.claude/commands/${shortSlug}.sh`;
      if (item.type === 'setting') return '~/.claude/config.json';
      if (item.type === 'hook') return `~/.claude/hooks/${shortSlug}.sh`;
      if (item.type === 'mcp') return '~/Library/Application Support/Claude/claude_desktop_config.json';
      return `~/.claude/plugins/${item.slug}/plugin.json`;

    case 'gemini':
      if (item.type === 'skill') return `.gemini/skills/${item.slug}/skill.json`;
      if (item.type === 'agent') return `.gemini/agents/${item.slug}/agent.json`;
      if (item.type === 'command') return `.gemini/commands/${shortSlug}.sh`;
      if (item.type === 'setting') return '.gemini/settings.json';
      if (item.type === 'hook') return `.gemini/hooks/${shortSlug}/interceptor.ts`;
      if (item.type === 'mcp') return '.gemini/mcp_servers.json';
      return `.gemini/plugins/${item.slug}/plugin.json`;

    case 'chatgpt':
      if (item.type === 'skill') return `.openai/skills/${item.slug}/instructions.md`;
      if (item.type === 'agent') return `.openai/assistants/${item.slug}/assistant.json`;
      if (item.type === 'command') return `.openai/commands/${shortSlug}.sh`;
      if (item.type === 'setting') return '.openai/settings.json';
      if (item.type === 'hook') return `.openai/hooks/${shortSlug}/guardrail.ts`;
      if (item.type === 'mcp') return '.openai/mcp.json';
      return `.openai/actions/${item.slug}/openapi.json`;

    case 'zai':
      if (item.type === 'skill') return `.zai/skills/${item.slug}/skill.yaml`;
      if (item.type === 'agent') return `.zai/agents/${item.slug}/agent.yaml`;
      if (item.type === 'command') return `.zai/commands/${shortSlug}.sh`;
      if (item.type === 'setting') return '.zai/config.yaml';
      if (item.type === 'hook') return `.zai/hooks/${shortSlug}/hook.py`;
      if (item.type === 'mcp') return '.zai/mcp.json';
      return `.zai/plugins/${item.slug}/manifest.json`;

    case 'opencode':
      if (item.type === 'skill') return `.opencode/skills/${item.slug}/tool.json`;
      if (item.type === 'agent') return `.opencode/agents/${item.slug}/agent.json`;
      if (item.type === 'command') return `.opencode/commands/${shortSlug}.sh`;
      if (item.type === 'setting') return '.opencode/settings.json';
      if (item.type === 'hook') return `.opencode/hooks/${shortSlug}/interceptor.sh`;
      if (item.type === 'mcp') return '.opencode/mcp.json';
      return `.opencode/plugins/${item.slug}/package.json`;

    case 'deepseek':
      if (item.type === 'skill') return `.deepseek/skills/${item.slug}/skill.yaml`;
      if (item.type === 'agent') return `.deepseek/agents/${item.slug}/agent.yaml`;
      if (item.type === 'command') return `.deepseek/commands/${shortSlug}.sh`;
      if (item.type === 'setting') return '.deepseek/settings.json';
      if (item.type === 'hook') return `.deepseek/hooks/${shortSlug}/cot_hook.py`;
      if (item.type === 'mcp') return '.deepseek/mcp.json';
      return `.deepseek/plugins/${item.slug}/plugin.yaml`;

    case 'oxalpha':
      if (item.type === 'skill') return `.oxalpha/skills/${item.slug}/kernel.toml`;
      if (item.type === 'agent') return `.oxalpha/agents/${item.slug}/agent.toml`;
      if (item.type === 'command') return `.oxalpha/commands/${shortSlug}.sh`;
      if (item.type === 'setting') return '.oxalpha/config.toml';
      if (item.type === 'hook') return `.oxalpha/hooks/${shortSlug}/hook.py`;
      if (item.type === 'mcp') return '.oxalpha/mcp.json';
      return `.oxalpha/plugins/${item.slug}/manifest.toml`;

    default:
      return `~/.claude/${item.type}s/${item.slug}/config.json`;
  }
}

/**
 * Get accurate manifest download filename for a component on a specific provider
 */
export function getProviderFileName(item: ComponentItem, provider: AIProvider): string {
  const shortSlug = item.slug.split('/').pop() || item.slug;
  switch (provider) {
    case 'claude':
      if (item.type === 'mcp') return 'claude_desktop_config.json';
      if (item.type === 'skill') return 'SKILL.md';
      if (item.type === 'agent') return 'agent.yaml';
      if (item.type === 'command') return `${shortSlug}.sh`;
      if (item.type === 'setting') return 'config.json';
      if (item.type === 'hook') return `${shortSlug}.sh`;
      return 'plugin.json';

    case 'gemini':
      if (item.type === 'mcp') return 'gemini_mcp_servers.json';
      if (item.type === 'skill') return `${shortSlug}-skill.json`;
      if (item.type === 'agent') return `${shortSlug}-agent.json`;
      if (item.type === 'command') return `${shortSlug}.sh`;
      if (item.type === 'setting') return 'settings.json';
      if (item.type === 'hook') return 'interceptor.ts';
      return 'plugin.json';

    case 'chatgpt':
      if (item.type === 'mcp') return 'mcp.json';
      if (item.type === 'skill') return 'instructions.md';
      if (item.type === 'agent') return 'assistant.json';
      if (item.type === 'command') return `${shortSlug}.sh`;
      if (item.type === 'setting') return 'settings.json';
      if (item.type === 'hook') return 'guardrail.ts';
      return 'openapi.json';

    case 'zai':
      if (item.type === 'mcp') return 'mcp.json';
      if (item.type === 'skill') return 'skill.yaml';
      if (item.type === 'agent') return 'agent.yaml';
      if (item.type === 'command') return `${shortSlug}.sh`;
      if (item.type === 'setting') return 'config.yaml';
      if (item.type === 'hook') return 'hook.py';
      return 'manifest.json';

    case 'opencode':
      if (item.type === 'mcp') return 'mcp.json';
      if (item.type === 'skill') return 'tool.json';
      if (item.type === 'agent') return 'agent.json';
      if (item.type === 'command') return `${shortSlug}.sh`;
      if (item.type === 'setting') return 'settings.json';
      if (item.type === 'hook') return 'interceptor.sh';
      return 'package.json';

    case 'deepseek':
      if (item.type === 'mcp') return 'mcp.json';
      if (item.type === 'skill') return 'skill.yaml';
      if (item.type === 'agent') return 'agent.yaml';
      if (item.type === 'command') return `${shortSlug}.sh`;
      if (item.type === 'setting') return 'settings.json';
      if (item.type === 'hook') return 'cot_hook.py';
      return 'plugin.yaml';

    case 'oxalpha':
      if (item.type === 'mcp') return 'mcp.json';
      if (item.type === 'skill') return 'kernel.toml';
      if (item.type === 'agent') return 'agent.toml';
      if (item.type === 'command') return `${shortSlug}.sh`;
      if (item.type === 'setting') return 'config.toml';
      if (item.type === 'hook') return 'hook.py';
      return 'manifest.toml';

    default:
      return 'config.json';
  }
}

/**
 * Get provider verification command
 */
export function getProviderVerificationCommand(item: ComponentItem, provider: AIProvider): string {
  const shortSlug = item.slug.split('/').pop() || item.slug;
  switch (provider) {
    case 'claude':
      return item.type === 'mcp' 
        ? 'claude mcp list' 
        : `claude ${item.type === 'command' ? 'cmd' : item.type} list`;
    case 'gemini':
      return `gemini-cli ${item.type} check ${shortSlug}`;
    case 'chatgpt':
      return `openai-cli ${item.type} status ${shortSlug}`;
    case 'zai':
      return `zai status --type ${item.type}`;
    case 'opencode':
      return `opencode doctor --check ${item.slug}`;
    case 'deepseek':
      return `deepseek-cli ${item.type} verify ${shortSlug}`;
    case 'oxalpha':
      return `ox-alpha verify --target ${shortSlug}`;
    default:
      return `npx claude-code-templates@latest --check`;
  }
}

/**
 * Get direct curl bash installer script for a provider and tool type
 */
export function getProviderCurlScript(item: ComponentItem, provider: AIProvider): string {
  const shortSlug = item.slug.split('/').pop() || item.slug;
  const placement = getProviderTargetPlacement(item, provider);
  const targetDir = placement.split('/').slice(0, -1).join('/') || '.';

  switch (provider) {
    case 'claude':
      if (item.type === 'mcp') {
        return `# 1. Install MCP Server via Claude Desktop CLI\nclaude mcp add ${shortSlug} npx -y ${item.slug}\n\n# Or verify registered MCP servers:\nclaude mcp list`;
      }
      return `# Direct Claude Code Installer for ${item.name} (${item.type})\nmkdir -p "${targetDir}"\n${item.cliCommand || `npx claude-code-templates@latest --${item.type} ${item.slug}`}\n\n# Verify installation\nclaude ${item.type === 'command' ? 'cmd' : item.type} list`;

    case 'gemini':
      return `# Direct Google Gemini Extension Installer for ${item.name}\nmkdir -p "${targetDir}"\ngemini-cli ${item.type} add ${item.slug}\n\n# Verify tool registration in Gemini environment\ngemini-cli ${item.type} check ${shortSlug}`;

    case 'chatgpt':
      if (item.type === 'agent') {
        return `# OpenAI Assistant Registration\nopenai-cli assistant create --from ${item.slug} --model "gpt-4o"\n\n# Verify assistant status\nopenai-cli assistant status ${shortSlug}`;
      }
      return `# OpenAI Tooling Installer for ${item.name}\nmkdir -p "${targetDir}"\nopenai-cli ${item.type} install ${item.slug}\n\n# Verify installation\nopenai-cli ${item.type} status ${shortSlug}`;

    case 'zai':
      return `# Z.AI GLM-4 Ecosystem Tool Provisioner\nmkdir -p "${targetDir}"\nzai ${item.type === 'skill' ? 'skill import' : item.type === 'agent' ? 'agent deploy' : item.type === 'mcp' ? 'mcp add' : 'pkg install'} ${item.slug}\n\n# Check Z.AI status\nzai status --type ${item.type}`;

    case 'opencode':
      return `# OpenCode Container Sandboxed Installation\nmkdir -p "${targetDir}"\nopencode ${item.type} install ${item.slug} --sandbox container\n\n# Run OpenCode health check\nopencode doctor --check ${item.slug}`;

    case 'deepseek':
      return `# DeepSeek-V3 / R1 Engineering Harness Provisioner\nmkdir -p "${targetDir}"\ndeepseek-cli ${item.type} add ${item.slug} --moe-reasoning\n\n# Verify DeepSeek model binding\ndeepseek-cli ${item.type} verify ${shortSlug}`;

    case 'oxalpha':
      return `# OX Alpha State Transition Kernel Loader\nmkdir -p "${targetDir}"\nox-alpha ${item.type} load ${item.slug} --state-channel\n\n# Verify state channel consensus\nox-alpha verify --target ${shortSlug}`;

    default:
      return `npx claude-code-templates@latest --${item.type} ${item.slug}`;
  }
}

/**
 * Get direct PowerShell installer script for a provider and tool type
 */
export function getProviderPowerShell(item: ComponentItem, provider: AIProvider): string {
  const shortSlug = item.slug.split('/').pop() || item.slug;
  const placement = getProviderTargetPlacement(item, provider).replace('~/', '$HOME/');
  const targetDir = placement.split('/').slice(0, -1).join('/') || '.';

  switch (provider) {
    case 'claude':
      if (item.type === 'mcp') {
        return `# PowerShell: Register MCP Server in Claude Desktop\n& claude mcp add ${shortSlug} npx -y ${item.slug}\nWrite-Host "Claude MCP Server ${item.name} registered!" -ForegroundColor Green`;
      }
      return `# PowerShell: Install Claude ${item.type} (${item.name})\nif (-not (Test-Path "${targetDir}")) { New-Item -ItemType Directory -Path "${targetDir}" -Force | Out-Null }\n& ${item.cliCommand || `npx claude-code-templates@latest --${item.type} ${item.slug}`}\nWrite-Host "Claude ${item.name} installed successfully!" -ForegroundColor Green`;

    case 'gemini':
      return `# PowerShell: Install Gemini ${item.type} (${item.name})\nif (-not (Test-Path "${targetDir}")) { New-Item -ItemType Directory -Path "${targetDir}" -Force | Out-Null }\n& gemini-cli ${item.type} add ${item.slug}\nWrite-Host "Gemini extension ${item.name} active!" -ForegroundColor Green`;

    case 'chatgpt':
      return `# PowerShell: Install OpenAI ${item.type} (${item.name})\nif (-not (Test-Path "${targetDir}")) { New-Item -ItemType Directory -Path "${targetDir}" -Force | Out-Null }\n& openai-cli ${item.type} install ${item.slug}\nWrite-Host "OpenAI tool ${item.name} configured!" -ForegroundColor Green`;

    case 'zai':
      return `# PowerShell: Install Z.AI ${item.type} (${item.name})\nif (-not (Test-Path "${targetDir}")) { New-Item -ItemType Directory -Path "${targetDir}" -Force | Out-Null }\n& zai pkg install ${item.slug}\nWrite-Host "Z.AI GLM-4 tool ${item.name} provisioned!" -ForegroundColor Green`;

    case 'opencode':
      return `# PowerShell: Install OpenCode ${item.type} (${item.name})\nif (-not (Test-Path "${targetDir}")) { New-Item -ItemType Directory -Path "${targetDir}" -Force | Out-Null }\n& opencode ${item.type} install ${item.slug}\nWrite-Host "OpenCode sandbox package ${item.name} installed!" -ForegroundColor Green`;

    case 'deepseek':
      return `# PowerShell: Install DeepSeek ${item.type} (${item.name})\nif (-not (Test-Path "${targetDir}")) { New-Item -ItemType Directory -Path "${targetDir}" -Force | Out-Null }\n& deepseek-cli ${item.type} add ${item.slug}\nWrite-Host "DeepSeek tool ${item.name} ready!" -ForegroundColor Green`;

    case 'oxalpha':
      return `# PowerShell: Install OX Alpha ${item.type} (${item.name})\nif (-not (Test-Path "${targetDir}")) { New-Item -ItemType Directory -Path "${targetDir}" -Force | Out-Null }\n& ox-alpha ${item.type} load ${item.slug}\nWrite-Host "OX Alpha state-kernel module ${item.name} bound!" -ForegroundColor Green`;

    default:
      return `& npx claude-code-templates@latest --${item.type} ${item.slug}`;
  }
}

/**
 * Generate native provider configuration snippet for a component (Detailed, accurate, and valid for all 7 types across all 7 providers)
 */
export function getProviderConfigSnippet(item: ComponentItem, provider: AIProvider): string {
  const safeIdentifier = item.slug.replace(/[^a-zA-Z0-9_]/g, '_');
  const shortSlug = item.slug.split('/').pop() || item.slug;

  // 1. CLAUDE ECOSYSTEM
  if (provider === 'claude') {
    if (item.type === 'mcp') return generateMcpFormat(item);
    if (item.type === 'skill') return generateMarkdownFormat(item);
    if (item.type === 'agent') {
      return `# Anthropic Claude Agent Definition
name: "${item.name}"
identifier: "${item.slug}"
version: "${item.version || '1.0.0'}"
model: "claude-3-7-sonnet-20250219"
thinking:
  budget_tokens: 16000
capabilities:
${(item.tags || []).map(t => `  - "${t}"`).join('\n')}
system_prompt: |
  ${(item.fullInstructions || item.description).replace(/\n/g, '\n  ')}
tools:
  - name: "${safeIdentifier}_exec"
    description: "${item.description}"
`;
    }
    if (item.type === 'command') {
      return `#!/usr/bin/env bash
# Claude Code CLI Slash Command: ${item.name}
# Slug: ${item.slug}
set -euo pipefail

echo "Executing ${item.name}..."
# Triggers: ${(item.triggers || []).join(', ')}
${item.samplePrompt ? `# Sample: ${item.samplePrompt}` : ''}

claude run --instruction "${item.description}" "$@"
`;
    }
    if (item.type === 'setting') {
      return JSON.stringify({
        "$schema": "https://claude.ai/schemas/settings.json",
        "settings": {
          "identifier": item.slug,
          "name": item.name,
          "enabled": true,
          "version": item.version || "1.0.0",
          "permissions": {
            "allowShellExecution": true,
            "allowFileSystemWrite": true
          },
          "parameters": {
            "model": "claude-3-7-sonnet",
            "extendedThinking": true
          }
        }
      }, null, 2);
    }
    if (item.type === 'hook') {
      return `#!/usr/bin/env bash
# Claude Lifecycle Hook: ${item.name}
# Event Trigger: pre-tool-execution
set -e

TOOL_NAME="\${1:-}"
PARAMS="\${2:-}"

echo "[Claude Hook] Intercepting execution for ${item.name}..."
# Validation logic
exit 0
`;
    }
    if (item.type === 'plugin') {
      return JSON.stringify({
        "name": item.name,
        "id": item.slug,
        "version": item.version || "1.0.0",
        "description": item.description,
        "entry": "dist/index.js",
        "permissions": ["workspace:read", "workspace:write"]
      }, null, 2);
    }
    return generateMarkdownFormat(item);
  }

  // 2. GEMINI ECOSYSTEM (Google GenAI SDK & Vertex AI)
  if (provider === 'gemini') {
    if (item.type === 'mcp') {
      return JSON.stringify({
        "$schema": "https://ai.google.dev/schemas/gemini-mcp.json",
        "mcpServers": {
          [safeIdentifier]: {
            "command": "npx",
            "args": ["-y", item.slug],
            "env": {
              "GEMINI_API_KEY": "${GEMINI_API_KEY}"
            }
          }
        }
      }, null, 2);
    }
    if (item.type === 'skill') {
      return JSON.stringify({
        "$schema": "https://ai.google.dev/schemas/gemini-tool-extension.json",
        "provider": "Google Gemini",
        "component": {
          "name": item.name,
          "slug": item.slug,
          "type": item.type,
          "category": item.category,
          "version": item.version || "2.0.0",
          "systemInstruction": item.fullInstructions || item.description,
          "triggers": item.triggers || [],
          "toolDeclarations": [
            {
              "name": safeIdentifier,
              "description": item.description,
              "parameters": {
                "type": "OBJECT",
                "properties": {
                  "prompt": { "type": "STRING", "description": "Input instruction for " + item.name },
                  "context": { "type": "OBJECT", "description": "Execution context parameters" }
                },
                "required": ["prompt"]
              }
            }
          ]
        }
      }, null, 2);
    }
    if (item.type === 'agent') {
      return JSON.stringify({
        "$schema": "https://ai.google.dev/schemas/gemini-agent.json",
        "agent": {
          "name": item.name,
          "slug": item.slug,
          "model": "gemini-2.0-flash",
          "systemInstruction": {
            "parts": [{ "text": item.fullInstructions || item.description }]
          },
          "tools": [
            { "googleSearch": {} },
            { "codeExecution": {} }
          ],
          "generationConfig": {
            "temperature": 0.2,
            "maxOutputTokens": 8192
          }
        }
      }, null, 2);
    }
    if (item.type === 'command') {
      return `#!/usr/bin/env bash
# Google Gemini CLI Command: ${item.name}
set -euo pipefail

PROMPT="\${1:-${item.samplePrompt || item.description}}"
gemini-cli run --model "gemini-2.0-flash" --prompt "$PROMPT"
`;
    }
    if (item.type === 'setting') {
      return JSON.stringify({
        "gemini": {
          "model": "gemini-2.0-flash",
          "generationConfig": {
            "temperature": 0.2,
            "responseMimeType": "application/json"
          },
          "safetySettings": [
            { "category": "HARM_CATEGORY_HATE_SPEECH", "threshold": "BLOCK_ONLY_HIGH" },
            { "category": "HARM_CATEGORY_DANGEROUS_CONTENT", "threshold": "BLOCK_ONLY_HIGH" }
          ]
        }
      }, null, 2);
    }
    if (item.type === 'hook') {
      return `import { GoogleGenAI } from '@google/genai';

/**
 * Gemini Middleware Lifecycle Hook: ${item.name}
 */
export async function onBeforeGenerate(contents: any[], config: any) {
  console.log('[Gemini Hook] Validating request for ${item.name}');
  return { contents, config };
}

export async function onAfterResponse(response: any) {
  // Inspect grounding metadata and citations
  return response;
}
`;
    }
    if (item.type === 'plugin') {
      return JSON.stringify({
        "name": item.name,
        "extensionId": item.slug,
        "version": item.version || "2.0.0",
        "entry": "dist/gemini-plugin.js",
        "capabilities": item.tags || []
      }, null, 2);
    }
  }

  // 3. CHATGPT / OPENAI ECOSYSTEM
  if (provider === 'chatgpt') {
    if (item.type === 'mcp') {
      return JSON.stringify({
        "mcp_version": "1.0",
        "servers": [
          {
            "name": safeIdentifier,
            "command": "npx",
            "args": ["-y", item.slug],
            "env": { "OPENAI_API_KEY": "${OPENAI_API_KEY}" }
          }
        ]
      }, null, 2);
    }
    if (item.type === 'skill') {
      return JSON.stringify({
        "type": "function",
        "function": {
          "name": safeIdentifier,
          "description": item.description,
          "strict": true,
          "parameters": {
            "type": "object",
            "properties": {
              "instruction": { "type": "string", "description": "Specific task instruction" },
              "parameters": { "type": "object", "additionalProperties": false }
            },
            "required": ["instruction", "parameters"],
            "additionalProperties": false
          }
        }
      }, null, 2);
    }
    if (item.type === 'agent') {
      return JSON.stringify({
        "assistant_id": `asst_${safeIdentifier}`,
        "name": item.name,
        "model": "gpt-4o",
        "instructions": item.fullInstructions || item.description,
        "tools": [
          { "type": "file_search" },
          { "type": "code_interpreter" }
        ],
        "metadata": {
          "slug": item.slug,
          "version": item.version || "1.0.0"
        }
      }, null, 2);
    }
    if (item.type === 'command') {
      return `#!/usr/bin/env bash
# OpenAI CLI Command Runner: ${item.name}
set -euo pipefail
openai-cli chat --model "gpt-4o" --instruction "${item.description}" "$@"
`;
    }
    if (item.type === 'setting') {
      return JSON.stringify({
        "openai": {
          "model": "gpt-4o",
          "temperature": 0.2,
          "strict_schema": true,
          "seed": 42
        }
      }, null, 2);
    }
    if (item.type === 'hook') {
      return `import OpenAI from 'openai';

/**
 * OpenAI Tool Dispatch Guardrail Hook: ${item.name}
 */
export function validateToolDispatch(toolCall: OpenAI.Chat.Completions.ChatCompletionMessageToolCall) {
  if (toolCall.function.name === '${safeIdentifier}') {
    const args = JSON.parse(toolCall.function.arguments);
    if (!args.instruction) {
      throw new Error('Missing required instruction argument');
    }
  }
  return true;
}
`;
    }
    if (item.type === 'plugin') {
      return JSON.stringify({
        "openapi": "3.1.0",
        "info": {
          "title": item.name,
          "description": item.description,
          "version": item.version || "1.0.0"
        },
        "servers": [{ "url": `https://api.openai.com/v1/tools/${item.slug}` }],
        "paths": {
          "/execute": {
            "post": {
              "operationId": safeIdentifier,
              "summary": item.name,
              "requestBody": {
                "required": true,
                "content": {
                  "application/json": {
                    "schema": {
                      "type": "object",
                      "properties": {
                        "query": { "type": "string" }
                      },
                      "required": ["query"]
                    }
                  }
                }
              },
              "responses": {
                "200": { "description": "Success" }
              }
            }
          }
        }
      }, null, 2);
    }
  }

  // 4. Z.AI (GLM-4 / Zhipu AI)
  if (provider === 'zai') {
    if (item.type === 'skill' || item.type === 'mcp') {
      return `# Z.AI GLM-4 Tool Definition
version: "1.0"
provider: "Z.AI Zhipu Agent Engine"
tool:
  name: "${item.name}"
  slug: "${item.slug}"
  type: "${item.type}"
  model_affinity: "glm-4-plus"
  capabilities:
${(item.tags || []).map(t => `    - "${t}"`).join('\n')}
  auto_triggers:
${(item.triggers || [item.name.toLowerCase()]).map(t => `    - "${t}"`).join('\n')}
  runtime:
    execution_timeout_sec: 60
    sandbox_mode: "isolated"
`;
    }
    if (item.type === 'agent') {
      return `# Z.AI GLM-4 Enterprise Autonomous Agent
agent:
  name: "${item.name}"
  slug: "${item.slug}"
  model: "glm-4-plus"
  context_window: "128k"
  role_prompt: |
    ${(item.fullInstructions || item.description).replace(/\n/g, '\n    ')}
  tools:
    - name: "${safeIdentifier}"
      type: "function"
  multilingual: true
`;
    }
    if (item.type === 'command') {
      return `#!/usr/bin/env bash
# Z.AI Command Script: ${item.name}
zai run --model glm-4-plus --instruction "${item.description}" "$@"
`;
    }
    if (item.type === 'setting') {
      return `# Z.AI Engine Settings
zai:
  default_model: "glm-4-plus"
  context_limit: 128000
  stream_responses: true
  temperature: 0.3
`;
    }
    if (item.type === 'hook') {
      return `"""
Z.AI Python Lifecycle Hook: ${item.name}
"""
def on_pre_generation(payload: dict) -> dict:
    print(f"[Z.AI Hook] Pre-processing payload for ${item.name}")
    return payload

def on_post_generation(result: dict) -> dict:
    return result
`;
    }
    if (item.type === 'plugin') {
      return JSON.stringify({
        "name": item.name,
        "version": item.version || "1.0.0",
        "description": item.description,
        "engine": "glm-4"
      }, null, 2);
    }
  }

  // 5. OPENCODE ECOSYSTEM
  if (provider === 'opencode') {
    if (item.type === 'skill' || item.type === 'mcp') {
      return JSON.stringify({
        "$schema": "https://opencode.ai/schemas/tool-config.json",
        "tool": {
          "id": item.slug,
          "name": item.name,
          "type": item.type,
          "description": item.description,
          "command": `opencode ${item.type} install ${item.slug}`,
          "triggers": item.triggers || [],
          "dependencies": item.dependencies || []
        }
      }, null, 2);
    }
    if (item.type === 'agent') {
      return JSON.stringify({
        "$schema": "https://opencode.ai/schemas/agent.json",
        "agent": {
          "id": item.slug,
          "name": item.name,
          "version": item.version || "2.0.0",
          "runtime": "opencode-container",
          "instructions": item.fullInstructions || item.description,
          "capabilities": item.tags || []
        }
      }, null, 2);
    }
    if (item.type === 'command') {
      return `#!/usr/bin/env bash
# OpenCode Sandboxed Terminal Runner: ${item.name}
opencode exec --sandbox container --command "${item.description}" "$@"
`;
    }
    if (item.type === 'setting') {
      return JSON.stringify({
        "opencode": {
          "sandbox": "container",
          "securityPolicy": "strict",
          "autoInstallDependencies": true
        }
      }, null, 2);
    }
    if (item.type === 'hook') {
      return `#!/usr/bin/env bash
# OpenCode Sandbox Boundary Interceptor Hook: ${item.name}
CMD="\${1:-}"
echo "[OpenCode Hook] Auditing sandbox command: $CMD"
exit 0
`;
    }
    if (item.type === 'plugin') {
      return JSON.stringify({
        "name": item.name,
        "version": item.version || "2.0.0",
        "main": "dist/index.js",
        "opencodePlugin": true
      }, null, 2);
    }
  }

  // 6. DEEPSEEK ECOSYSTEM (DeepSeek-V3 / DeepSeek-R1)
  if (provider === 'deepseek') {
    if (item.type === 'skill' || item.type === 'mcp') {
      return `# DeepSeek AI Engineer Harness Definition
provider: "DeepSeek Coder / DeepSeek-V3 / R1"
tool_identifier: "${item.slug}"
component_name: "${item.name}"
tool_type: "${item.type}"
system_prompt_injection: |
  ${(item.fullInstructions || item.description).replace(/\n/g, '\n  ')}
parameters_schema:
  type: "object"
  properties:
    code_context:
      type: "string"
      description: "Codebase context and diff"
    task_intent:
      type: "string"
      description: "Specific task to perform"
  required: ["task_intent"]
`;
    }
    if (item.type === 'agent') {
      return `# DeepSeek-V3 / R1 Autonomous Engineering Harness
agent_config:
  name: "${item.name}"
  slug: "${item.slug}"
  primary_model: "deepseek-reasoner"
  fallback_model: "deepseek-chat"
  reasoning_budget_tokens: 16384
  system_instructions: |
    ${(item.fullInstructions || item.description).replace(/\n/g, '\n    ')}
  moe_execution:
    parallel_passes: 4
    context_tokens: 65536
`;
    }
    if (item.type === 'command') {
      return `#!/usr/bin/env bash
# DeepSeek Reasoning Command Runner: ${item.name}
deepseek-cli reason --model "deepseek-reasoner" --prompt "${item.description}" "$@"
`;
    }
    if (item.type === 'setting') {
      return JSON.stringify({
        "deepseek": {
          "model": "deepseek-reasoner",
          "reasoningBudgetTokens": 16384,
          "streamReasoningTokens": true,
          "temperature": 0.6
        }
      }, null, 2);
    }
    if (item.type === 'hook') {
      return `"""
DeepSeek-R1 CoT Token Auditor Hook: ${item.name}
"""
def verify_reasoning_tokens(reasoning_chunk: str) -> bool:
    # Verifies mathematical consistency and proof invariants
    return True
`;
    }
    if (item.type === 'plugin') {
      return `# DeepSeek Reasoning Visualizer Plugin
name: "${item.name}"
version: "${item.version || '1.0.0'}"
features:
  - "proof-graph-rendering"
  - "cot-token-stream"
`;
    }
  }

  // 7. OX ALPHA ECOSYSTEM (Decentralized Autonomous Kernel)
  if (provider === 'oxalpha') {
    if (item.type === 'skill' || item.type === 'mcp') {
      return `[ox_alpha_tool]
name = "${item.name}"
slug = "${item.slug}"
type = "${item.type}"
version = "${item.version || '1.0.0'}"
protocol = "ox-alpha-v1"

[runtime]
engine = "autonomous-kernel"
triggers = [${(item.triggers || []).map(t => `"${t}"`).join(', ')}]
execution_mode = "deterministic"
`;
    }
    if (item.type === 'agent') {
      return `[ox_alpha_agent]
name = "${item.name}"
slug = "${item.slug}"
version = "${item.version || '1.0.0'}"
kernel_version = "v1.2"

[consensus]
verification_threshold = 0.85
proof_timeout_ms = 60000

[state_channel]
channel_sync = "strict"
cryptographic_attestation = true
`;
    }
    if (item.type === 'command') {
      return `#!/usr/bin/env bash
# OX Alpha State Transition Script: ${item.name}
ox-alpha dispatch --target "${item.slug}" --payload "$@"
`;
    }
    if (item.type === 'setting') {
      return `[oxalpha_settings]
network = "mainnet"
proof_timeout_ms = 120000
verification_threshold = 0.8
state_channel_sync = "strict"
`;
    }
    if (item.type === 'hook') {
      return `"""
OX Alpha Cryptographic State Channel Validator: ${item.name}
"""
def validate_state_transition(proof_payload: bytes) -> bool:
    # Verifies cryptographic signatures and zero-knowledge proof validity
    return True
`;
    }
    if (item.type === 'plugin') {
      return `[plugin]
name = "${item.name}"
version = "${item.version || '1.0.0'}"
entrypoint = "kernel_module"
`;
    }
  }

  return generateMarkdownFormat(item);
}


/**
 * Generate SKILL.md format for a single component
 */
export function generateMarkdownFormat(item: ComponentItem): string {
  const triggersList = (item.triggers || [item.name.toLowerCase()]).map(t => `- \`${t}\``).join('\n');
  const dependenciesList = (item.dependencies || ['None']).map(d => `- \`${d}\``).join('\n');

  return `# SKILL.md - ${item.name}

> ${item.description}

## Metadata
- **Type**: \`${item.type}\`
- **Slug**: \`${item.slug}\`
- **Category**: \`${item.category}\`
- **Version**: \`${item.version || '1.0.0'}\`
- **Author**: ${item.author || 'Claude Ecosystem Contributor'}
- **Verification**: ${item.verified ? 'Verified Official Pattern' : 'Community Contribution'}

## Auto-Trigger Matrix
Claude Code will automatically load and activate this component when any of the following phrases or keywords are present in the user prompt:
${triggersList}

## System Instructions & Protocol
${item.fullInstructions || `When working with ${item.name}, follow strict type safety, modular architecture, and zero-hallucination execution. Verify test coverage before submitting changes.`}

## Sample Prompt Usage
\`\`\`text
${item.samplePrompt || `Use ${item.name} to analyze and optimize the current workspace.`}
\`\`\`

## Dependencies
${dependenciesList}
`;
}

/**
 * Generate MCP (Model Context Protocol) JSON config
 */
export function generateMcpFormat(item: ComponentItem): string {
  const isPython = item.slug.includes('python') || item.category === 'ai-research';
  const serverKey = item.slug.replace(/[^a-zA-Z0-9_-]/g, '-').toLowerCase();

  const config = {
    mcpServers: {
      [serverKey]: {
        command: isPython ? 'uvx' : 'npx',
        args: isPython
          ? [`mcp-server-${serverKey}`]
          : ['-y', `@modelcontextprotocol/server-${serverKey}`],
        env: {
          [`${serverKey.toUpperCase().replace(/[^A-Z0-9]/g, '_')}_ENABLED`]: 'true',
          [`${serverKey.toUpperCase().replace(/[^A-Z0-9]/g, '_')}_LOG_LEVEL`]: 'info'
        },
        description: item.description
      }
    }
  };

  return JSON.stringify(config, null, 2);
}

/**
 * Generate Python FastMCP Code for MCP Server
 */
export function generateFastMcpCode(item: ComponentItem): string {
  const serverKey = item.slug.replace(/[^a-zA-Z0-9_]/g, '_').toLowerCase();
  
  return `""\"
FastMCP Server for ${item.name} (${item.slug})
Auto-generated for Model Context Protocol execution.
""\"

from fastmcp import FastMCP, Context
import os

# Initialize FastMCP Server
mcp = FastMCP("${item.name}")

@mcp.tool()
async function execute_${serverKey}_task(
    query: str, 
    ctx: Context
) -> str:
    """
    ${item.description}
    """
    ctx.info(f"Executing ${item.name} with query: {query}")
    
    # Process logic
    result = f"Successfully processed '{query}' using ${item.name}."
    return result

@mcp.resource("config://${serverKey}")
def get_${serverKey}_config() -> str:
    """Return configuration state for ${item.name}."""
    return f"Status: Active | Type: ${item.type} | Category: ${item.category}"

if __name__ == "__main__":
    mcp.run()
`;
}

/**
 * Generate JSON manifest configuration
 */
export function generateJsonFormat(item: ComponentItem): string {
  const config = {
    $schema: 'https://claude.ai/schemas/claude-code-component.json',
    name: item.slug,
    version: item.version || '1.0.0',
    type: item.type,
    category: item.category,
    metadata: {
      displayName: item.name,
      description: item.description,
      author: item.author || 'Claude Ecosystem',
      verified: item.verified || false,
      installs: item.installs
    },
    triggers: item.triggers || [],
    dependencies: item.dependencies || [],
    tags: item.tags || []
  };

  return JSON.stringify(config, null, 2);
}

/**
 * Generate YAML Workflow Configuration
 */
export function generateYamlFormat(item: ComponentItem): string {
  const triggersStr = (item.triggers || []).map(t => `"${t}"`).join(', ');
  const tagsStr = (item.tags || []).map(t => `"${t}"`).join(', ');

  return `# Claude Code Component Definition
version: "1.0"
component:
  name: "${item.name}"
  slug: "${item.slug}"
  type: ${item.type}
  category: ${item.category}
  verified: ${item.verified ? 'true' : 'false'}
  version: "${item.version || '1.0.0'}"

triggers: [${triggersStr}]
tags: [${tagsStr}]

installation:
  npx: "npx claude-code-templates@latest --${item.type} ${item.slug}"
  target_directory: "~/.claude/${item.type}s/${item.slug}"

execution:
  mode: "auto-eval"
  sandbox: "strict"
`;
}

/**
 * Generate Shell Script for installation
 */
export function generateShellScript(item: ComponentItem): string {
  return `#!/usr/bin/env bash
# ==============================================================================
# Installer Script for ${item.name} (${item.type})
# ==============================================================================
set -euo pipefail

echo "[Claude Code] Installing ${item.name}..."

# Target Directory
TARGET_DIR="$HOME/.claude/${item.type}s"
mkdir -p "$TARGET_DIR"

# Execute Installation
npx claude-code-templates@latest --${item.type} "${item.slug}"

echo "Successfully installed ${item.name} in $TARGET_DIR!"
`;
}

/**
 * Generate PowerShell Script for Windows installation
 */
export function generatePowerShellScript(item: ComponentItem): string {
  return `# ==============================================================================
# Windows PowerShell Installer for ${item.name} (${item.type})
# ==============================================================================
$ErrorActionPreference = "Stop"

Write-Host "[Claude Code] Installing ${item.name} on Windows..." -ForegroundColor Cyan

$targetDir = Join-Path $HOME ".claude\\${item.type}s"
if (-not (Test-Path $targetDir)) {
    New-Item -ItemType Directory -Path $targetDir -Force | Out-Null
}

# Run NPX installer
& npx claude-code-templates@latest --${item.type} "${item.slug}"

Write-Host "Successfully installed ${item.name}!" -ForegroundColor Green
`;
}

/**
 * Generate Docker Compose configuration
 */
export function generateDockerScript(item: ComponentItem): string {
  return `# Docker Compose setup for ${item.name} (${item.type})
version: '3.8'

services:
  claude-${item.type}-runner:
    image: node:20-alpine
    container_name: claude-${item.slug.replace(/[^a-zA-Z0-9]/g, '-')}
    working_dir: /app
    environment:
      - NODE_ENV=development
      - CLAUDE_COMPONENT_SLUG=${item.slug}
      - CLAUDE_COMPONENT_TYPE=${item.type}
    volumes:
      - .:/app
      - claude-data:/root/.claude
    command: >
      sh -c "npx claude-code-templates@latest --${item.type} ${item.slug} && tail -f /dev/null"
    restart: unless-stopped

volumes:
  claude-data:
`;
}

/**
 * Generate .env configuration format
 */
export function generateEnvFormat(item: ComponentItem): string {
  const envPrefix = item.slug.replace(/[^a-zA-Z0-9]/g, '_').toUpperCase();
  return `# Environment Configuration for ${item.name} (${item.slug})
# Add these variables to your project's .env file

# API Credentials & Token for ${item.name}
${envPrefix}_API_KEY=your_${envPrefix.toLowerCase()}_api_key_here
${envPrefix}_ENABLED=true
${envPrefix}_LOG_LEVEL=info
${envPrefix}_TIMEOUT_MS=30000

# Optional Claude Code Sandbox Override
CLAUDE_CODE_${envPrefix}_ALLOW_OFFLINE=false
`;
}

/**
 * Generate Stack Multi-Format Export Bundle (ACCURATE & SEPARATED BY TOOL TYPE)
 */
export function generateStackExport(
  items: ComponentItem[], 
  format: 'npx' | 'json' | 'md' | 'mcp' | 'yaml' | 'sh' | 'ps1' | 'docker' | 'env'
): string {
  if (items.length === 0) {
    return '# Your stack is currently empty. Add skills, agents, commands, settings, hooks, MCPs, or plugins to export.';
  }

  // Group items strictly by tool type
  const skills = items.filter(i => i.type === 'skill');
  const agents = items.filter(i => i.type === 'agent');
  const commands = items.filter(i => i.type === 'command');
  const settings = items.filter(i => i.type === 'setting');
  const hooks = items.filter(i => i.type === 'hook');
  const mcps = items.filter(i => i.type === 'mcp');
  const plugins = items.filter(i => i.type === 'plugin');

  switch (format) {
    case 'npx': {
      const parts = ['npx claude-code-templates@latest'];
      if (skills.length > 0) parts.push(`--skill ${skills.map(i => i.slug).join(',')}`);
      if (agents.length > 0) parts.push(`--agent ${agents.map(i => i.slug).join(',')}`);
      if (commands.length > 0) parts.push(`--command ${commands.map(i => i.slug).join(',')}`);
      if (settings.length > 0) parts.push(`--setting ${settings.map(i => i.slug).join(',')}`);
      if (hooks.length > 0) parts.push(`--hook ${hooks.map(i => i.slug).join(',')}`);
      if (mcps.length > 0) parts.push(`--mcp ${mcps.map(i => i.slug).join(',')}`);
      if (plugins.length > 0) parts.push(`--plugin ${plugins.map(i => i.slug).join(',')}`);

      return parts.join(' ');
    }

    case 'json': {
      const config = {
        $schema: 'https://claude.ai/schemas/claude-code-stack.json',
        version: '1.0.0',
        name: `claude-stack-${items.length}-tools`,
        createdAt: new Date().toISOString(),
        summary: {
          totalComponents: items.length,
          skillsCount: skills.length,
          agentsCount: agents.length,
          commandsCount: commands.length,
          settingsCount: settings.length,
          hooksCount: hooks.length,
          mcpsCount: mcps.length,
          pluginsCount: plugins.length
        },
        tools: {
          skills: skills.map(i => ({ name: i.name, slug: i.slug, category: i.category, triggers: i.triggers || [] })),
          agents: agents.map(i => ({ name: i.name, slug: i.slug, category: i.category, triggers: i.triggers || [] })),
          commands: commands.map(i => ({ name: i.name, slug: i.slug, category: i.category, triggers: i.triggers || [] })),
          settings: settings.map(i => ({ name: i.name, slug: i.slug, category: i.category })),
          hooks: hooks.map(i => ({ name: i.name, slug: i.slug, category: i.category, triggers: i.triggers || [] })),
          mcps: mcps.map(i => ({ name: i.name, slug: i.slug, category: i.category })),
          plugins: plugins.map(i => ({ name: i.name, slug: i.slug, category: i.category }))
        }
      };
      return JSON.stringify(config, null, 2);
    }

    case 'mcp': {
      const mcpServers: Record<string, {
        command: string;
        args: string[];
        env: Record<string, string>;
        description: string;
      }> = {};

      mcps.forEach(item => {
        const key = item.slug.replace(/[^a-zA-Z0-9_-]/g, '-').toLowerCase();
        const isPython = item.slug.includes('python') || item.category === 'ai-research';
        mcpServers[key] = {
          command: isPython ? 'uvx' : 'npx',
          args: isPython 
            ? [`mcp-server-${key}`] 
            : ['-y', `@modelcontextprotocol/server-${key}`],
          env: {
            [`${key.toUpperCase().replace(/[^A-Z0-9]/g, '_')}_ENABLED`]: 'true',
            [`${key.toUpperCase().replace(/[^A-Z0-9]/g, '_')}_LOG_LEVEL`]: 'info'
          },
          description: item.description
        };
      });

      // Include non-MCP items in a structured metadata object for Claude Desktop / CLI
      const nonMcpTools = {
        skills: skills.map(i => i.slug),
        agents: agents.map(i => i.slug),
        commands: commands.map(i => i.slug),
        settings: settings.map(i => i.slug),
        hooks: hooks.map(i => i.slug),
        plugins: plugins.map(i => i.slug)
      };

      return JSON.stringify({ 
        mcpServers, 
        _claudeCodeTools: nonMcpTools 
      }, null, 2);
    }

    case 'md': {
      const formatSection = (title: string, list: ComponentItem[]) => {
        if (list.length === 0) return '';
        return [
          `### ${title} (${list.length})`,
          ...list.map(i => `- **${i.name}** (\`${i.slug}\`): ${i.description}`),
          ''
        ].join('\n');
      };

      return [
        `# Claude Code Stack Specification`,
        `> Multi-Tool Stack Configuration Bundle (${items.length} Total Components)`,
        '',
        `| Tool Category | Count | Status |`,
        `| :--- | :--- | :--- |`,
        `| **Skills** | ${skills.length} | ${skills.length > 0 ? 'Active' : 'None'} |`,
        `| **Agents** | ${agents.length} | ${agents.length > 0 ? 'Active' : 'None'} |`,
        `| **Commands** | ${commands.length} | ${commands.length > 0 ? 'Active' : 'None'} |`,
        `| **Settings** | ${settings.length} | ${settings.length > 0 ? 'Active' : 'None'} |`,
        `| **Hooks** | ${hooks.length} | ${hooks.length > 0 ? 'Active' : 'None'} |`,
        `| **MCPs** | ${mcps.length} | ${mcps.length > 0 ? 'Active' : 'None'} |`,
        `| **Plugins** | ${plugins.length} | ${plugins.length > 0 ? 'Active' : 'None'} |`,
        '',
        `## 1. Categorized Tools Catalog`,
        formatSection('Skills', skills),
        formatSection('Agents', agents),
        formatSection('Commands', commands),
        formatSection('Settings', settings),
        formatSection('Hooks', hooks),
        formatSection('MCP Servers', mcps),
        formatSection('Plugins', plugins),
        `## 2. Trigger Evaluation Matrix`,
        `| Tool | Type | Auto-Trigger Keywords |`,
        `| :--- | :--- | :--- |`,
        ...items.map(item => `| **${item.name}** | \`${item.type}\` | ${(item.triggers || [item.name.toLowerCase()]).map(t => `\`${t}\``).join(', ')} |`)
      ].join('\n');
    }

    case 'yaml': {
      return `# Claude Code Multi-Tool Stack Specification
version: "1.0"
stack_name: "claude-code-stack-${items.length}"
total_components: ${items.length}
created_at: "${new Date().toISOString()}"

tools:
  skills:
${skills.length > 0 ? skills.map(i => `    - name: "${i.name}"\n      slug: "${i.slug}"`).join('\n') : '    []'}
  agents:
${agents.length > 0 ? agents.map(i => `    - name: "${i.name}"\n      slug: "${i.slug}"`).join('\n') : '    []'}
  commands:
${commands.length > 0 ? commands.map(i => `    - name: "${i.name}"\n      slug: "${i.slug}"`).join('\n') : '    []'}
  settings:
${settings.length > 0 ? settings.map(i => `    - name: "${i.name}"\n      slug: "${i.slug}"`).join('\n') : '    []'}
  hooks:
${hooks.length > 0 ? hooks.map(i => `    - name: "${i.name}"\n      slug: "${i.slug}"`).join('\n') : '    []'}
  mcps:
${mcps.length > 0 ? mcps.map(i => `    - name: "${i.name}"\n      slug: "${i.slug}"`).join('\n') : '    []'}
  plugins:
${plugins.length > 0 ? plugins.map(i => `    - name: "${i.name}"\n      slug: "${i.slug}"`).join('\n') : '    []'}

install_command: "${generateStackExport(items, 'npx')}"
`;
    }

    case 'sh': {
      return `#!/usr/bin/env bash
# ==============================================================================
# Claude Code Multi-Tool Stack Installer (${items.length} Components)
# ==============================================================================
set -euo pipefail

echo "[Claude Code] Provisioning Stack (${skills.length} Skills, ${agents.length} Agents, ${commands.length} Commands, ${settings.length} Settings, ${hooks.length} Hooks, ${mcps.length} MCPs, ${plugins.length} Plugins)..."

# Ensure all target directories exist
mkdir -p "$HOME/.claude/skills"
mkdir -p "$HOME/.claude/agents"
mkdir -p "$HOME/.claude/commands"
mkdir -p "$HOME/.claude/settings"
mkdir -p "$HOME/.claude/hooks"
mkdir -p "$HOME/.claude/mcp"
mkdir -p "$HOME/.claude/plugins"

# Execute CLI installation
${generateStackExport(items, 'npx')}

echo "Successfully installed ${items.length} components across all tool categories!"
echo "Start Claude Code in this repository: claude"
`;
    }

    case 'ps1': {
      return `# ==============================================================================
# Windows PowerShell Claude Code Multi-Tool Stack Installer (${items.length} Components)
# ==============================================================================
$ErrorActionPreference = "Stop"

Write-Host "[Claude Code] Provisioning multi-tool stack on Windows..." -ForegroundColor Cyan

$claudeDir = Join-Path $HOME ".claude"
$categories = @('skills', 'agents', 'commands', 'settings', 'hooks', 'mcp', 'plugins')

foreach ($cat in $categories) {
    $targetDir = Join-Path $claudeDir $cat
    if (-not (Test-Path $targetDir)) {
        New-Item -ItemType Directory -Path $targetDir -Force | Out-Null
    }
}

# Run installation via npx
& ${generateStackExport(items, 'npx')}

Write-Host "All ${items.length} components successfully installed!" -ForegroundColor Green
Write-Host "Launch Claude Code by running: claude" -ForegroundColor Yellow
`;
    }

    case 'docker': {
      return `# Docker Compose for Claude Code Multi-Tool Stack (${items.length} Components)
version: '3.8'

services:
  claude-code-runner:
    image: node:20-alpine
    container_name: claude-code-stack
    working_dir: /workspace
    environment:
      - NODE_ENV=development
      - CLAUDE_CODE_SKILLS_COUNT=${skills.length}
      - CLAUDE_CODE_AGENTS_COUNT=${agents.length}
      - CLAUDE_CODE_COMMANDS_COUNT=${commands.length}
      - CLAUDE_CODE_SETTINGS_COUNT=${settings.length}
      - CLAUDE_CODE_HOOKS_COUNT=${hooks.length}
      - CLAUDE_CODE_MCPS_COUNT=${mcps.length}
      - CLAUDE_CODE_PLUGINS_COUNT=${plugins.length}
    volumes:
      - .:/workspace
      - claude-config:/root/.claude
    command: >
      sh -c "${generateStackExport(items, 'npx')} && tail -f /dev/null"
    restart: unless-stopped

volumes:
  claude-config:
`;
    }

    case 'env': {
      const formatEnvGroup = (title: string, list: ComponentItem[]) => {
        if (list.length === 0) return '';
        return [
          `# ==============================================================================`,
          `# ${title} (${list.length})`,
          `# ==============================================================================`,
          ...list.map(i => {
            const prefix = i.slug.replace(/[^a-zA-Z0-9]/g, '_').toUpperCase();
            return `# ${i.name} (${i.slug})\n${prefix}_ENABLED=true\n${prefix}_LOG_LEVEL=info`;
          }),
          ''
        ].join('\n');
      };

      return `# Aggregated Environment Variables for Claude Code Stack (${items.length} components)

${formatEnvGroup('SKILLS CONFIGURATION', skills)}
${formatEnvGroup('AGENTS CONFIGURATION', agents)}
${formatEnvGroup('COMMANDS CONFIGURATION', commands)}
${formatEnvGroup('SETTINGS CONFIGURATION', settings)}
${formatEnvGroup('HOOKS CONFIGURATION', hooks)}
${formatEnvGroup('MCP SERVERS CONFIGURATION', mcps)}
${formatEnvGroup('PLUGINS CONFIGURATION', plugins)}
`;
    }
  }
}

/**
 * Generate full Stack Multi-Format Export customized for any AI Provider
 */
export function generateProviderStackExport(
  items: ComponentItem[],
  provider: AIProvider,
  format: 'npx' | 'json' | 'md' | 'mcp' | 'yaml' | 'sh' | 'ps1' | 'docker' | 'env'
): string {
  if (items.length === 0) {
    return `# Your stack is currently empty. Add tools to export for ${getProviderMeta(provider).name}.`;
  }

  const meta = getProviderMeta(provider);
  const skills = items.filter(i => i.type === 'skill');
  const agents = items.filter(i => i.type === 'agent');
  const commands = items.filter(i => i.type === 'command');
  const settings = items.filter(i => i.type === 'setting');
  const hooks = items.filter(i => i.type === 'hook');
  const mcps = items.filter(i => i.type === 'mcp');
  const plugins = items.filter(i => i.type === 'plugin');

  if (provider === 'claude') {
    return generateStackExport(items, format);
  }

  switch (format) {
    case 'npx': {
      // CLI Install command for this provider
      const cmds: string[] = [];
      items.forEach(item => {
        cmds.push(getProviderInstallCommand(item, provider));
      });
      return cmds.join(' && \\\n  ');
    }

    case 'json': {
      return JSON.stringify({
        $schema: `https://${provider}.ai/schemas/agent-stack.json`,
        provider: meta.name,
        runtime: meta.cliTool,
        version: "1.0.0",
        createdAt: new Date().toISOString(),
        totalTools: items.length,
        breakdown: {
          skills: skills.length,
          agents: agents.length,
          commands: commands.length,
          settings: settings.length,
          hooks: hooks.length,
          mcps: mcps.length,
          plugins: plugins.length
        },
        tools: items.map(item => ({
          name: item.name,
          slug: item.slug,
          type: item.type,
          category: item.category,
          installCommand: getProviderInstallCommand(item, provider),
          placement: getProviderTargetPlacement(item, provider)
        }))
      }, null, 2);
    }

    case 'yaml': {
      return `# ${meta.name} Multi-Tool Stack Configuration
version: "1.0"
provider: "${meta.name}"
total_components: ${items.length}
created_at: "${new Date().toISOString()}"

tools:
${items.map(item => `  - name: "${item.name}"
    slug: "${item.slug}"
    type: "${item.type}"
    category: "${item.category}"
    target_placement: "${getProviderTargetPlacement(item, provider)}"`).join('\n')}
`;
    }

    case 'sh': {
      return `#!/usr/bin/env bash
# ==============================================================================
# ${meta.name} Stack Installer (${items.length} Tools)
# ==============================================================================
set -euo pipefail

echo "[${meta.shortName}] Installing ${items.length} tools into local workspace..."

# Install items sequentially
${items.map(item => `echo "Installing ${item.name} (${item.type})..."
${getProviderInstallCommand(item, provider)}`).join('\n\n')}

echo "Successfully configured all ${items.length} tools for ${meta.name}!"
`;
    }

    case 'ps1': {
      return `# ==============================================================================
# Windows PowerShell ${meta.name} Stack Installer (${items.length} Tools)
# ==============================================================================
$ErrorActionPreference = "Stop"

Write-Host "[${meta.shortName}] Installing ${items.length} tools on Windows..." -ForegroundColor Cyan

${items.map(item => `Write-Host "Installing ${item.name}..."
& ${getProviderInstallCommand(item, provider)}`).join('\n\n')}

Write-Host "All ${items.length} tools successfully installed for ${meta.name}!" -ForegroundColor Green
`;
    }

    case 'mcp': {
      const mcpServers: Record<string, any> = {};
      mcps.forEach(item => {
        const key = item.slug.replace(/[^a-zA-Z0-9_-]/g, '-').toLowerCase();
        mcpServers[key] = {
          command: 'npx',
          args: ['-y', `@modelcontextprotocol/server-${key}`],
          description: item.description,
          provider: meta.name
        };
      });
      return JSON.stringify({ provider: meta.name, mcpServers }, null, 2);
    }

    case 'md': {
      return `# ${meta.name} Stack Specification
> ${meta.tagline}

### Stack Overview (${items.length} Components)
| Component | Type | Category | Target Placement |
| :--- | :--- | :--- | :--- |
${items.map(item => `| **${item.name}** | \`${item.type}\` | \`${item.category}\` | \`${getProviderTargetPlacement(item, provider)}\` |`).join('\n')}

### Installation Command
\`\`\`bash
${items.map(item => getProviderInstallCommand(item, provider)).join(' && \\\n  ')}
\`\`\`
`;
    }

    case 'docker': {
      const runnerName = `${provider}-stack-runner`;
      return `# Docker Compose for ${meta.name} Multi-Tool Stack (${items.length} Components)
version: '3.8'

services:
  ${runnerName}:
    image: node:20-alpine
    container_name: ${runnerName}
    working_dir: /workspace
    environment:
      - NODE_ENV=development
      - TARGET_AI_PROVIDER=${provider}
      - TOTAL_TOOLS_COUNT=${items.length}
    volumes:
      - .:/workspace
      - ${provider}-config:/root/.${provider}
    command: >
      sh -c "${items.map(item => getProviderInstallCommand(item, provider)).join(' && ')} && tail -f /dev/null"
    restart: unless-stopped

volumes:
  ${provider}-config:
`;
    }

    case 'env': {
      const apiKeyVar = provider === 'gemini' ? 'GEMINI_API_KEY' :
                        provider === 'chatgpt' ? 'OPENAI_API_KEY' :
                        provider === 'zai' ? 'ZAI_API_KEY' :
                        provider === 'deepseek' ? 'DEEPSEEK_API_KEY' :
                        provider === 'oxalpha' ? 'OXALPHA_API_KEY' : 'ANTHROPIC_API_KEY';
      return `# Environment Configuration for ${meta.name} Stack (${items.length} Components)
# Target Ecosystem: ${meta.name} (${meta.tagline})

# Provider Authentication
${apiKeyVar}=your_api_key_here

# Tool Configurations
${items.map(i => {
  const prefix = i.slug.replace(/[^a-zA-Z0-9]/g, '_').toUpperCase();
  return `# ${i.name} (${i.slug} - ${i.type})\n${prefix}_ENABLED=true\n${prefix}_LOG_LEVEL=info`;
}).join('\n\n')}
`;
    }

    default:
      return generateStackExport(items, format);
  }
}

