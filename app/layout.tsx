import './globals.css';
import type { Metadata } from 'next';
import { Inter, Montserrat, Michroma } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });
const michroma = Michroma({ weight: '400', subsets: ['latin'], variable: '--font-michroma' });

export const metadata: Metadata = {
  title: 'Celebrate for Change',
  description: 'Turn your birthday into real-world impact.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${montserrat.variable} ${michroma.variable} min-h-screen flex flex-col`} style={{ fontFamily: 'var(--font-montserrat), var(--font-inter), system-ui, sans-serif' }}>
        <Navbar />
        <main className="flex-grow w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}