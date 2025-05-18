# uTeach Landing Page

This project is a modern, responsive landing page for the "uTeach" platform, built with Next.js, React, TypeScript, and Tailwind CSS. It showcases various sections including features, testimonials, teacher profiles, and integrated tools.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
- [Available Scripts](#available-scripts)

## Features

- Fully responsive design.
- Smooth animations on scroll using Intersection Observer.
- Multiple sections: Hero, Features, Teachers, Tools, Stats, Testimonials, Join CTA, Partners, Footer.
- Optimized images using `next/image`.
- Modern UI styled with Tailwind CSS.

## Technologies Used

- **Next.js:** React framework for server-side rendering, static site generation, etc.
- **React:** JavaScript library for building user interfaces.
- **TypeScript:** Superset of JavaScript that adds static typing.
- **Tailwind CSS:** Utility-first CSS framework for rapid UI development.
- **Lucide React:** Library for SVG icons.
- **Shadcn/UI (or similar):** Implied by `@/components/ui/button` for UI components like buttons.

## Project Structure

```
page-3/
├── public/
│   ├── logo.png
│   ├── hero-teacher.png
│   ├── profile/
│   │   ├── 1.png
│   │   └── ... (other profile images)
│   └── ... (other static assets)
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── TeachersSection.tsx
│   │   ├── ToolsSection.tsx
│   │   ├── StatsSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── JoinSection.tsx
│   │   ├── PartnerLogos.tsx
│   │   ├── Footer.tsx
│   │   └── ui/
│   │       └── button.tsx (example)
│   ├── app/
│   │   └── page.tsx  (Main landing page)
│   │   └── layout.tsx (Root layout)
│   └── ... (other source files)
├── package.json
├── tsconfig.json
└── next.config.js
```

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v18.x or later recommended)
- npm, yarn, or pnpm

### Installation

1.  Clone the repository (if applicable) or navigate to your project directory.
2.  Install the dependencies:
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
Open http://localhost:3000 with your browser to see the result.

## Available Scripts

In the project directory, you can run:

- `npm run dev` or `yarn dev`: Runs the app in development mode.
- `npm run build` or `yarn build`: Builds the app for production.
- `npm run start` or `yarn start`: Starts a Next.js production server.
- `npm run lint` or `yarn lint`: Lints the codebase (assuming ESLint is configured).