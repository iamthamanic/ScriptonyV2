# Deployment Guide für Render.com

## Vorbereitung

1. **GitHub Repository erstellen**
   - Code zu GitHub pushen
   - Repository öffentlich oder privat erstellen

2. **Render.com Account**
   - Account bei render.com erstellen
   - GitHub-Integration aktivieren

## Deployment Schritte

### 1. Neuen Web Service erstellen
- Bei Render.com einloggen
- "New" → "Web Service" auswählen
- GitHub Repository verbinden: `scriptony/Scriptony v2`

### 2. Build & Deploy Konfiguration
- **Name**: `scriptony-v2`
- **Environment**: `Node`
- **Build Command**: `npm ci && npm run build`
- **Start Command**: `npm start`
- **Auto Deploy**: Aktiviert (bei jedem Push)

### 3. Environment Variables setzen
In Render.com Dashboard → Settings → Environment:

```
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
```

Weitere Variables bei Bedarf hinzufügen (siehe .env.example).

### 4. Domain konfigurieren
- Custom Domain hinzufügen (optional)
- SSL wird automatisch konfiguriert

## Health Check

Die App stellt einen Health Check Endpoint bereit:
- URL: `https://your-app.onrender.com/api/health`
- Render kann diesen für Monitoring nutzen

## Wichtige Dateien

- `render.yaml` - Render-spezifische Konfiguration
- `package.json` - Node.js Version und Scripts
- `.env.example` - Beispiel für Environment Variables
- `app/api/health/route.ts` - Health Check Endpoint

## Troubleshooting

### Build Fehler
- Logs in Render Dashboard prüfen
- Node.js Version kompatibel (>=18.0.0)
- Dependencies korrekt installiert

### Runtime Fehler
- Environment Variables prüfen
- Health Check Endpoint testen
- Application Logs analysieren

## Performance Optimierungen

- Next.js automatische Optimierungen
- Statische Assets via CDN
- Image Optimization aktiviert
- Gzip Kompression

## Monitoring

- Render Dashboard für Logs und Metriken
- Health Check für Uptime Monitoring
- Performance Metrics verfügbar