# Scriptony 2.0 - Developer Guide

## Schnellstart

```bash
# Repository klonen
git clone <repo-url>
cd scriptony-v2

# Dependencies installieren
pnpm install

# Lokale Supabase Services starten
pnpm supabase:start
# Alternative: Docker Compose
docker-compose up -d

# Datenbank migrationen ausführen
pnpm prisma:migrate

# Prisma Client generieren
pnpm prisma:generate

# Development Server starten
pnpm dev
```

Die Anwendung ist dann verfügbar unter: http://localhost:3000

## Architektur Übersicht

### Tech Stack
- **Framework:** Next.js 14 mit App Router
- **Sprache:** TypeScript (strict mode)
- **Datenbank:** Supabase PostgreSQL mit Prisma ORM
- **API:** tRPC für typsichere End-to-End APIs
- **State Management:** Zustand + TanStack Query
- **UI:** Tailwind CSS + shadcn/ui + Radix UI
- **Authentifizierung:** Supabase Auth
- **Testing:** Vitest + Playwright
- **Linting:** ESLint + Prettier

### Projektstruktur

```
/
├── app/                    # Next.js App Router
│   ├── (marketing)/        # Öffentliche Marketing-Seiten
│   ├── (auth)/            # Authentifizierungs-Seiten
│   ├── (app)/             # Geschützte App-Seiten
│   └── api/trpc/          # tRPC API Handler
├── components/            # UI-Komponenten
│   ├── ui/                # shadcn/ui Basis-Komponenten
│   └── common/            # Wiederverwendbare App-Komponenten
├── features/              # Feature-Module (Feature-Driven Development)
├── lib/                   # Hilfsfunktionen und Utilities
├── prisma/                # Datenbank Schema und Migrationen
├── styles/                # Globale Styles und Theme-System
└── tests/                 # Test-Dateien
```

### Feature-Driven Development (FDD)

Jedes Feature ist in einem eigenen Modul unter `/features/{feature-name}/` organisiert:

```
features/auth/
├── api/           # tRPC Router und Schemas
├── components/    # Feature-spezifische UI-Komponenten
├── hooks/         # Feature-spezifische React Hooks
├── lib/           # Client-seitige Hilfsfunktionen
├── services/      # Server-seitige Business-Logik
├── stores/        # Zustand State Management
└── types.ts       # TypeScript Typen
```

## Wichtige NPM Scripts

### Development
- `pnpm dev` - Development Server starten
- `pnpm build` - Production Build erstellen
- `pnpm start` - Production Server starten
- `pnpm preview` - Build und Preview starten

### Code Quality
- `pnpm lint` - ESLint ausführen
- `pnpm lint:fix` - ESLint mit automatischen Fixes
- `pnpm typecheck` - TypeScript Type Checking
- `pnpm format:check` - Prettier Format Check
- `pnpm format:write` - Code formatieren
- `pnpm check` - Alle Checks ausführen

### Testing
- `pnpm test` - Unit Tests mit Vitest
- `pnpm test:ui` - Vitest UI öffnen
- `pnpm test:e2e` - End-to-End Tests mit Playwright

### Datenbank
- `pnpm prisma:generate` - Prisma Client generieren
- `pnpm prisma:migrate` - Neue Migration erstellen und ausführen
- `pnpm prisma:studio` - Prisma Studio öffnen
- `pnpm prisma:reset` - Datenbank zurücksetzen

### Supabase
- `pnpm supabase:start` - Lokale Supabase Services starten
- `pnpm supabase:stop` - Lokale Services stoppen
- `pnpm supabase:status` - Status der Services anzeigen

## Umgebungsvariablen

Kopiere `.env.example` zu `.env.local` und fülle die Werte aus:

```bash
cp .env.example .env.local
```

### Wichtige Variablen
- `DATABASE_URL` - PostgreSQL Verbindung
- `NEXT_PUBLIC_SUPABASE_URL` - Supabase Projekt URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase Anonymous Key
- `SUPABASE_SERVICE_ROLE_KEY` - Supabase Service Role Key (nur server-seitig!)

## Design System

Scriptony verwendet ein konsistentes Design System basierend auf der ursprünglichen UI:

### Farben
- **Primary:** #6E59A5 (Scriptony Purple)
- **Secondary:** #E5DEFF (Light Purple)
- **Accent:** #33C3F0 (Blue)
- **Accent Pink:** #D946EF

### Komponenten
Alle UI-Komponenten folgen dem Design System und sind über CSS-Variablen konfigurierbar. Das Theme unterstützt automatisch Light/Dark Mode.

## Entwicklungsrichtlinien

### Code Quality
- **TypeScript Strict Mode:** Aktiviert - keine `any` Typen ohne Begründung
- **ESLint:** Alle Regeln müssen befolgt werden
- **Prettier:** Automatische Code-Formatierung
- **Imports:** Verwende absolute Pfade mit `@/` Alias

### Komponenten
- Verwende `cn()` Utility für Tailwind Class-Merging
- Alle Komponenten müssen TypeScript-Interfaces haben
- Prefer functional components mit React Hooks
- Verwende `React.forwardRef` für referenzierte Komponenten

### Testing
- **Unit Tests:** Für kritische Business-Logik (>80% Coverage)
- **Integration Tests:** Für Feature-Interaktionen
- **E2E Tests:** Für wichtige User-Flows
- **Accessibility Tests:** Mit axe-core Integration

### Git Workflow
- Feature Branches: `feature/beschreibung`
- Commit Messages: Konventionelle Commits
- Pre-commit Hooks: Linting und Type-Checking automatisch

## Debugging

### Entwicklung
- React DevTools Browser Extension
- Prisma Studio für Datenbank-Inspektion
- Supabase Dashboard für Auth und Storage

### Logs
- Browser Console für Client-seitige Logs
- Server Logs in Terminal während Development
- Sentry für Production Error Tracking

## Deployment

### Vorbereitung
```bash
# Build testen
pnpm build

# Alle Tests ausführen
pnpm test && pnpm test:e2e

# Code Quality prüfen
pnpm check
```

### Vercel Deployment
Die App ist für Vercel optimiert:
- Automatische Deployments über Git
- Environment Variables über Vercel Dashboard
- Supabase Integration über Vercel Marketplace

## Hilfe & Ressourcen

### Dokumentation
- [Next.js Docs](https://nextjs.org/docs)
- [Supabase Docs](https://supabase.com/docs)
- [Prisma Docs](https://www.prisma.io/docs)
- [tRPC Docs](https://trpc.io/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

### Interne Dokumentation
- `/docs/adr/` - Architecture Decision Records
- Feature-spezifische READMEs in `/features/`

### Support
- GitHub Issues für Bug Reports
- Team Chat für Entwickler-Fragen
- Code Reviews über Pull Requests

## Features Übersicht

### Implementierte Features (Phase 1)
✅ **Basis-Setup**
- Next.js App Router Struktur
- TypeScript + ESLint + Prettier
- Tailwind CSS + shadcn/ui
- Design System basierend auf Scriptony 1.0

✅ **Marketing Landing Page**
- Responsive Design
- Theme Support (Light/Dark)
- SEO-optimiert

### Nächste Features (Phase 2)
🔄 **Authentifizierung**
- Supabase Auth Integration
- Login/Signup Pages
- Password Reset

🔄 **Organisationen**
- Multi-Tenancy Support
- Rollen-Management
- Organisation erstellen/verwalten

### Geplante Features
⏳ Dashboard & Navigation
⏳ Skript-Projektmanagement
⏳ Worldbuilding System
⏳ Creative Gym
⏳ Admin-Bereich

---

**Letzte Aktualisierung:** 2024-12-29
**Version:** 2.0.0-alpha