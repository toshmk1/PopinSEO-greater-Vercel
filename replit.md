# Overview

POPPIN is an OnlyFans SEO agency website built with a modern React frontend and Express.js backend. The application showcases the agency's SEO services with an emphasis on bold branding and professional presentation. The site features animated hero sections, service showcases, and is designed to convert visitors into clients seeking OnlyFans marketing services.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The frontend uses React with TypeScript and follows a component-based architecture:

- **React Router**: Uses Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management and React hooks for local state
- **Styling**: Tailwind CSS with a custom dark theme and shadcn/ui component library
- **UI Components**: Extensive use of Radix UI primitives through shadcn/ui for accessible, customizable components
- **Animation**: Framer Motion for page transitions and interactive animations
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture

The backend follows a minimal Express.js REST API pattern:

- **Server Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Session Management**: Connect-pg-simple for PostgreSQL-backed sessions
- **Development**: TSX for TypeScript execution in development
- **Production**: ESBuild for server bundling

## Data Storage

- **Database**: PostgreSQL configured through Neon Database serverless connection
- **ORM**: Drizzle ORM with type-safe schema definitions and migrations
- **Schema Location**: Shared schema definitions in `/shared/schema.ts`
- **Storage Interface**: Abstracted storage layer with both in-memory and database implementations

## Authentication & Authorization

The application includes a basic user authentication structure:

- **User Model**: Username/password based authentication schema
- **Storage Abstraction**: Flexible storage interface supporting multiple backends
- **Session Handling**: PostgreSQL-backed sessions for persistent login state

## External Dependencies

- **Database**: Neon Database (PostgreSQL serverless)
- **UI Framework**: shadcn/ui component system built on Radix UI
- **Styling**: Tailwind CSS with custom theme configuration
- **Fonts**: Google Fonts (League Gothic and Inter)
- **Development**: Replit-specific plugins for development environment integration
- **Animation**: Framer Motion for UI animations and transitions
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React icon library

The architecture supports a scalable marketing website with potential for user authentication, contact forms, and content management features. The separation of concerns between frontend and backend allows for independent scaling and deployment strategies.