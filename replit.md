# POPPIN - OnlyFans SEO Agency

## Overview

POPPIN is a modern full-stack web application for an OnlyFans SEO agency specializing in organic growth strategies. The application features a dark-themed, high-impact landing page with sophisticated animations and a professional brand presence. Built as a monorepo with a React frontend and Express backend, it's designed to showcase SEO expertise and attract OnlyFans agencies looking to scale their operations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with a custom dark theme and professional color palette
- **UI Components**: Comprehensive component library based on shadcn/ui with Radix UI primitives
- **Animations**: Framer Motion for sophisticated page transitions and brand reveal animations
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation resolvers

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: tsx for TypeScript execution in development
- **Build**: esbuild for fast production builds
- **API Pattern**: RESTful API structure with /api prefix routing

### Data Storage Solutions
- **Database**: PostgreSQL configured through Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Development Storage**: In-memory storage implementation for development/testing
- **Session Management**: PostgreSQL session store with connect-pg-simple

### Design System
- **Typography**: League Gothic for headings, Inter for body text
- **Theme**: Custom dark theme with yellow accent color (#fdbf00)
- **Component System**: Consistent design tokens through CSS variables
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Accessibility**: Radix UI primitives ensure ARIA compliance

### Development Environment
- **Monorepo Structure**: Shared code in `/shared`, client in `/client`, server in `/server`
- **Development Tools**: Replit-optimized with hot reload and error overlay
- **Code Quality**: TypeScript strict mode with comprehensive type checking
- **Build Pipeline**: Separate client (Vite) and server (esbuild) build processes

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon Database
- **drizzle-orm**: Type-safe database ORM with PostgreSQL dialect
- **@tanstack/react-query**: Server state management and caching
- **framer-motion**: Animation library for UI transitions and effects

### UI Component Libraries
- **@radix-ui/***: Complete set of accessible UI primitives (accordion, dialog, dropdown, etc.)
- **lucide-react**: Icon library for consistent iconography
- **class-variance-authority**: Utility for creating component variants
- **tailwind-merge**: Intelligent Tailwind class merging

### Development and Build Tools
- **vite**: Fast build tool and development server
- **tsx**: TypeScript execution for development
- **esbuild**: Fast bundler for production server builds
- **@replit/vite-plugin-runtime-error-modal**: Development error handling
- **@replit/vite-plugin-cartographer**: Replit-specific development tools

### Form and Validation
- **react-hook-form**: Performant form library with minimal re-renders
- **@hookform/resolvers**: Integration layer for form validation
- **zod**: Type-safe schema validation
- **drizzle-zod**: Integration between Drizzle ORM and Zod schemas

### Utility Libraries
- **date-fns**: Date manipulation and formatting
- **clsx**: Conditional class name utility
- **nanoid**: Secure random ID generation
- **wouter**: Lightweight routing library