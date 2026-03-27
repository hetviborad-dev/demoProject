import type {Metadata} from 'next';
import { Inter, Oswald } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-heading',
});

export const metadata: Metadata = {
  title: 'Sixpack Fitness',
  description: 'Hybrid Workout Equipment & Fitness Services',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body className="font-sans antialiased bg-white text-zinc-900" suppressHydrationWarning>{children}</body>
    </html>
  );
}
