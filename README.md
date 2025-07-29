# Decentralized Payments Platform – Built with Next.js 15, EVM, Viem & Tailwind

## Overview

A modern, production-ready Web3 payment application for sending and receiving cryptocurrencies across EVM-compatible blockchains. Built with a focus on performance, extensibility, and developer experience, the platform supports peer-to-peer transfers, ERC-20 interactions, and integration with custom payment smart contracts.

## Tech Stack

* **Frontend:** Next.js 15 (App Router), React 19, TypeScript
* **Styling:** Tailwind CSS 4, Shadcn/ui, Heroicons
* **Web3:** RainbowKit, Wagmi v2, Viem
* **Tooling:** ESLint, Prettier, Husky, Commitlint, Lint-staged
* **Testing & CI:** Playwright for E2E, GitHub Actions for CI/CD

## Features

* Wallet connection with support for MetaMask, WalletConnect, Coinbase Wallet, etc.
* Native ETH payments with transaction lifecycle handling
* Smart contract interactions using typed read/write hooks
* Modular, reusable UI components with responsive layout
* Strict linting, formatting, and testing workflows for reliability
* Scalable project structure optimized for long-term maintainability

## Getting Started

```bash
git clone https://github.com/mastaan66/web3-payment-app my-payments-app
cd my-payments-app
npm install
cp .env.example .env.local  # Add your Alchemy/Infura keys
npm run dev
```

## Example: ETH Payment via Viem

```tsx
const { sendTransaction } = useSendTransaction();
sendTransaction({
  to: '0xRecipientAddress',
  value: parseEther('0.05'),
});
```

## Project Structure

```
src/
├── app/              # Routes and layouts (App Router)
├── components/       # Reusable UI and feature components
├── lib/              # Web3 client, constants, and ABIs
├── hooks/            # Custom hooks for Web3 logic
├── utils/            # Pure utility functions
├── styles/           # Tailwind config and global styles
```

## Roadmap

* ERC-20 token transfers
* Escrow and multisig flows
* Smart contract payment modules
* The Graph integration for on-chain data indexing
* Fiat on-ramp and off-ramp support (via third-party APIs)

## License

MIT. Contributions welcome. All logos and product names are trademarks of their respective owners.

## Live Demo

[Live Demo]()