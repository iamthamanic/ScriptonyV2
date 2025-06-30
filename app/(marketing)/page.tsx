import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  FileText,
  Globe,
  Zap,
  Users,
  Shield,
  BarChart3,
} from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Scriptony - Professionelles Drehbuch & Worldbuilding',
  description:
    'Die ultimative Lösung für Drehbuchautoren und Worldbuilding-Enthusiasten. Erstelle, organisiere und teile deine kreativen Projekte.',
};

/**
 * Marketing Landing Page
 * Main entry point for new users
 */
export default function LandingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Professionelles{' '}
              <span className="text-primary">Drehbuch</span> &{' '}
              <span className="text-primary">Worldbuilding</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Die ultimative Lösung für Drehbuchautoren und Worldbuilding-Enthusiasten. 
              Erstelle, organisiere und teile deine kreativen Projekte mit modernsten Tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg">
                <Link href="/auth/signup">Kostenlos starten</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg">
                <Link href="/demo">Live Demo</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Alles was du brauchst, an einem Ort
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Von der ersten Idee bis zum fertigen Drehbuch - Scriptony begleitet dich 
              durch den gesamten kreativen Prozess.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <FileText className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Skript-Projekte</CardTitle>
                <CardDescription>
                  Organisiere deine Drehbücher mit Szenen, Charakteren und detaillierten 
                  Produktionsnotizen.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Globe className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Worldbuilding</CardTitle>
                <CardDescription>
                  Erschaffe komplexe Welten mit Geographie, Politik, Kultur und 
                  durchdachten Gesellschaftsstrukturen.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Creative Gym</CardTitle>
                <CardDescription>
                  Trainiere deine Kreativität mit täglich neuen Challenges und 
                  gamifizierten Übungen.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Teamarbeit</CardTitle>
                <CardDescription>
                  Arbeite nahtlos mit deinem Team zusammen und verwalte Berechtigungen 
                  professionell.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Datenschutz</CardTitle>
                <CardDescription>
                  Deine kreativen Werke sind sicher geschützt mit modernster 
                  Verschlüsselung und DSGVO-Konformität.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <BarChart3 className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Analytics</CardTitle>
                <CardDescription>
                  Verfolge deinen Fortschritt und erkenne Patterns in deinem 
                  kreativen Workflow.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Bereit, deine kreative Reise zu beginnen?
            </h2>
            <p className="text-xl text-muted-foreground">
              Schließe dich tausenden von Autoren an, die bereits mit Scriptony 
              ihre Geschichten zum Leben erwecken.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg">
                <Link href="/auth/signup">Kostenlos registrieren</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg">
                <Link href="/contact">Kontakt aufnehmen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <blockquote className="text-2xl font-medium italic text-muted-foreground">
              &ldquo;Kunst ist eine Lüge, die uns die Wahrheit erkennen lässt.&rdquo;
            </blockquote>
            <cite className="block mt-4 text-sm text-muted-foreground/70">
              - Pablo Picasso
            </cite>
          </div>
        </div>
      </section>
    </div>
  );
}