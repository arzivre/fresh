---
slug: cara-debug-nextjs-di-vscode
title: Debug nextjs dengan vscode
date: 2022-04-23
summary: Tutorial debug nextjs di VS code
image: 
---

## konfigurasi Next.js untuk mulai debug mode

```json
 "scripts": {
   "dev": "next",
   "dev:debug": "NODE_OPTIONS='--inspect' next",
  }
```

Untuk Sistem Operasi Windows perlu install cross-env

```json
 "dev:debug": "cross-env NODE_OPTIONS='--inspect' next dev",
```

## konfigurasi VS Code supaya tergubung ke aplikasi Next.js yang sudah berjalan. 

Buat file .vscode/launch.json at the root project anda:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Next.js: attach",
      "port": 9229,
      "request": "attach",
      "skipFiles": [
        "<node_internals>/**"
      ],
      "type": "node",
      "restart": true
    },
    {
      "name": "Next.js: debug server-side",
      "type": "node-terminal",
      "request": "launch",
      "command": "yarn dev"
    },
    {
      "name": "Next.js: debug client-side",
      "type": "pwa-chrome",
      "request": "launch",
      "url": "http://localhost:3000"
    },
    {
      "name": "Next.js: debug full stack",
      "type": "node-terminal",
      "request": "launch",
      "command": "yarn dev",
      "serverReadyAction": {
        "pattern": "started server on .+, url: (https?://.+)",
        "uriFormat": "%s",
        "action": "debugWithChrome"
      }
    }
  ]
}
```