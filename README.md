# Next.js Dashboard

A modern, responsive dashboard built with Next.js, React, Tailwind CSS, and Radix UI components. This project provides a clean and extensible foundation for admin panels, analytics dashboards, or SaaS applications.

## Features

- **Next.js 15** for fast, server-rendered React apps
- **TypeScript** for type safety
- **Tailwind CSS** for rapid, utility-first styling
- **Radix UI** for accessible, unstyled UI primitives
- **Responsive layout** with sidebar navigation and header
- **Dashboard, Customers, and Notifications pages**
- **Reusable UI components** (Button, Input, Sheet, Tooltip, etc.)

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- pnpm (or npm/yarn)

### Installation

1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd nextjs-dashboard
   ```
2. Install dependencies:
   ```sh
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```
3. Run the development server:
   ```sh
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `app/` - Next.js app directory (pages, layout, global styles)
- `components/` - Reusable React components
- `components/ui/` - Custom UI primitives (Button, Input, etc.)
- `hooks/` - Custom React hooks
- `lib/` - Utility functions
- `public/` - Static assets
- `styles/` - Additional global styles

## Customization
- Update the sidebar and header in `components/app-sidebar.tsx` and `components/header.tsx`.
- Add new pages in the `app/` directory.
- Extend UI components in `components/ui/` as needed.

## License

This project is open source and available under the [MIT License](LICENSE).

