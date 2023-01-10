## Description

Demo shop for the article [You Might Not Need Module Federation: Orchestrate your Microfrontends at Runtime with Import Maps](https://dev.to/zaikivla/you-might-not-need-module-federation-orchestrate-your-microfrontends-at-runtime-with-import-maps-3n82).

## Prerequisites

Node [18.12.0](https://nodejs.org/en/blog/release/v18.12.0).

## Project structure

The project is using [NPM workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces) and [Nx](https://nx.dev/).

```
t-shop
├─ mfs ⬅ microfrontends
│  ├─ product-buy-box
│  ├─ product-teaser
│  ├─ product-tile
│  ├─ shop-footer
│  └─ shop-header
├─ publisher ⬅ handles submission of assets
├─ resolver ⬅ stores and updates import map
└─ shell ⬅ host app
```

## Installation

```bash
npm install
```

## Running the app

1. Run Import Map Resolver in terminal 1

```bash
npm run start
```

2. Build and publish microfrontends in terminal 2

```bash
npm run build
```

3. Open http://localhost:4173

## Import map server

You can inspect current import map by calling: http://localhost:3000/api/
