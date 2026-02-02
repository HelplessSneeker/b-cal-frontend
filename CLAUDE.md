# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev      # Start development server (http://localhost:8080)
pnpm build    # Production build
pnpm lint     # Run ESLint
```

## Architecture

This is a Next.js 16 application using the App Router with React 19 and TypeScript.

### Key Directories

- `app/` - Next.js App Router pages and layouts
  - `app/login/` - Login page
  - `app/signup/` - Signup page
  - `app/page.tsx` - Main calendar page (protected by AuthProvider)
- `components/` - React components
  - `components/ui/` - shadcn/ui primitives (avatar, button, calendar, card, dropdown-menu, field, input, label, loading, separator, sonner, spinner)
  - `components/AuthProvider.tsx` - Wraps protected routes, redirects unauthenticated users
  - `components/login-form.tsx` - Shared form for login/signup pages
  - `components/calendar-header.tsx` - Top navigation with view selector, date navigation, and user menu
  - `components/calendar-sidebar.tsx` - Left sidebar with "New Entry" button and mini calendar
  - `components/sidebar-calendar.tsx` - Mini calendar using react-day-picker with view-aware selection
- `lib/` - Utilities and services
  - `lib/utils.ts` - `cn()` class merging helper
  - `lib/api.ts` - API wrapper with error/success toast handling
  - `lib/auth.ts` - Authentication API functions (login, signup, logout, getMe)
  - `lib/date-utils.ts` - Date manipulation (getStartOfWeek, getEndOfWeek, getStartOfMonth, getEndOfMonth)
  - `lib/stores/` - Zustand stores for client state

### Authentication

- Cookie-based auth with a NestJS backend (configured via `NEXT_PUBLIC_BACKEND_URL`)
- `AuthProvider` component wraps protected routes and redirects unauthenticated users
- User state managed via Zustand store (`useUserStore`)

### State Management

- Zustand for client-side state (`lib/stores/`)
- `useUserStore` - Current authenticated user
- `useCalendarStore` - Calendar view state (Day/Week/Month) and current date

### API Layer

- `lib/api.ts` provides a typed `api<T>()` function for backend requests
- Automatic toast notifications for success/error responses
- All requests include credentials for cookie-based auth

### Styling

- Tailwind CSS v4 with CSS variables for theming (defined in `app/globals.css`)
- shadcn/ui configured with "new-york" style and lucide icons (`components.json`)
- Dark mode via `.dark` class on ancestor elements
- Use `cn()` from `@/lib/utils` for conditional class merging

### Path Aliases

- `@/*` maps to the project root (e.g., `@/components/ui/button`)
