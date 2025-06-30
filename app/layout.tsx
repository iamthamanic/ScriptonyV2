import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/sonner';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Scriptony',
    template: '%s | Scriptony',
  },
  description: 'Web-Anwendung für Drehbuchautoren und Worldbuilding',
  keywords: ['Drehbuch', 'Worldbuilding', 'Scriptwriting', 'Creative Writing'],
  authors: [{ name: 'Scriptony Team' }],
  creator: 'Scriptony',
  metadataBase: new URL('https://scriptony.com'),
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://scriptony.com',
    title: 'Scriptony',
    description: 'Web-Anwendung für Drehbuchautoren und Worldbuilding',
    siteName: 'Scriptony',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scriptony',
    description: 'Web-Anwendung für Drehbuchautoren und Worldbuilding',
    creator: '@scriptony',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}