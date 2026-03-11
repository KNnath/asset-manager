# Whiskey River Media

## Overview
Premium AI-powered marketing agency website and client portal (WhiskeyNeat.ai). Built for founders scaling from $100K/month to $10M/month.

## Tech Stack
- **Frontend:** React + Tailwind CSS + wouter (routing) + TanStack Query
- **Backend:** Express + PostgreSQL + Drizzle ORM
- **Auth:** Express-session (cookie-based)
- **Fonts:** Cormorant Garamond (display) + DM Sans (body)

## Architecture
```
client/src/
├── pages/          # Route-level components
│   ├── Home.tsx    # Homepage (/)
│   ├── Services.tsx # Services & Pricing (/services)
│   ├── Apply.tsx   # Application form (/apply)
│   ├── Login.tsx   # Client login (/login)
│   ├── Portal.tsx  # Client dashboard (/portal)
│   └── Intelligence.tsx # WhiskeyNeat.ai explainer (/intelligence)
├── components/
│   └── layout/     # Navbar, Footer
├── lib/
│   ├── api.ts      # API client helper
│   └── queryClient.ts
└── assets/images/  # Generated visual assets

server/
├── index.ts        # Express server setup
├── routes.ts       # API routes (/api/*)
├── storage.ts      # Database storage interface (Drizzle)
├── db.ts           # Database connection
├── seed.ts         # Demo data seeder
├── vite.ts         # Vite dev middleware
└── static.ts       # Production static serving

shared/
└── schema.ts       # Drizzle schema + Zod validation
```

## Database Tables
- `users` - Client accounts (email auth)
- `applications` - Apply form submissions
- `client_services` - Active services per client
- `kpis` - Dashboard KPI data (MEC, ROAS, etc.)
- `messages` - Portal messaging threads
- `reports` - Downloadable intelligence reports
- `activity_log` - Recent activity timeline
- `upcoming_items` - Scheduled items

## API Routes
- `POST /api/auth/login` - Client login
- `GET /api/auth/me` - Current session user
- `POST /api/auth/logout` - Logout
- `POST /api/applications` - Submit application form
- `GET /api/portal/dashboard` - Dashboard KPIs + activity + upcoming
- `GET /api/portal/services` - Client's active services
- `GET /api/portal/messages` - Message thread
- `POST /api/portal/messages` - Send a message
- `GET /api/portal/reports` - Available reports

## Demo Credentials
- Email: client@apexindustrial.com
- Password: demo123

## Design System
- Background: #0a0a08 (deep bourbon black)
- Cards: #161614
- Accent: #C8922A (aged gold/amber)
- Text: #F5F0E8 (off-white cream)
- Muted: #8A8478
- Border: #252420
