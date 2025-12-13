# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a Next.js 16.0.10 landing page project bootstrapped with `create-next-app` using the App Router architecture and TypeScript. It uses TailwindCSS v4 for styling and includes ESLint for code quality.

## Development Commands
- `npm run dev` - Start development server (runs on http://localhost:3000)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Architecture & Structure
- **Framework**: Next.js with App Router (`app/` directory)
- **Main files**:
  - `app/layout.tsx` - Root layout with Geist fonts and global styles
  - `app/page.tsx` - Home page component
  - `app/globals.css` - Global CSS with Tailwind directives
- **Configuration**:
  - TypeScript with strict mode enabled
  - TailwindCSS v4 with PostCSS
  - ESLint with Next.js and TypeScript rules
  - Path aliases configured (`@/*` maps to `./`)

## Key Technologies
- **React 19.2.1** with React DOM
- **TailwindCSS v4** via `@tailwindcss/postcss`
- **TypeScript 5** with strict configuration
- **Next.js fonts** using Geist Sans and Geist Mono from Google Fonts

## Styling Notes
- Uses CSS custom properties for fonts (`--font-geist-sans`, `--font-geist-mono`)
- Dark mode support built into the design
- Responsive design with mobile-first approach using Tailwind classes