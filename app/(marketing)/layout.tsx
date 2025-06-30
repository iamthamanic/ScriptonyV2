import { ScriptonyLogo } from '@/components/common/scriptony-logo';
import { ThemeToggle } from '@/components/common/theme-toggle';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface MarketingLayoutProps {
  children: React.ReactNode;
}

/**
 * Marketing Layout
 * Layout for public marketing pages (landing page, pricing, etc.)
 */
export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Marketing Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <ScriptonyLogo href="/" size="md" />

          {/* Navigation & Actions */}
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/features"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Preise
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Über uns
              </Link>
            </nav>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Button asChild variant="outline" size="sm">
                <Link href="/auth/login">Anmelden</Link>
              </Button>
              <Button asChild size="sm">
                <Link href="/auth/signup">Registrieren</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Marketing Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <ScriptonyLogo size="sm" />
              <p className="text-sm text-muted-foreground">
                Die professionelle Lösung für Drehbuchautoren und Worldbuilding-Enthusiasten.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Produkt</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/features" className="hover:text-foreground transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-foreground transition-colors">
                    Preise
                  </Link>
                </li>
                <li>
                  <Link href="/roadmap" className="hover:text-foreground transition-colors">
                    Roadmap
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/docs" className="hover:text-foreground transition-colors">
                    Dokumentation
                  </Link>
                </li>
                <li>
                  <Link href="/help" className="hover:text-foreground transition-colors">
                    Hilfe
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-foreground transition-colors">
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/privacy" className="hover:text-foreground transition-colors">
                    Datenschutz
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-foreground transition-colors">
                    Nutzungsbedingungen
                  </Link>
                </li>
                <li>
                  <Link href="/imprint" className="hover:text-foreground transition-colors">
                    Impressum
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Scriptony. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}