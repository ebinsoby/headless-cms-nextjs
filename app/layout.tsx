import './css/style.css';

import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'CMS Learning Lab — Contentful + Next.js',
    template: '%s | CMS Learning Lab',
  },
  description:
    'A personal learning project exploring how to build a headless, CMS-driven website by integrating Contentful with Next.js, React and TypeScript.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} bg-slate-900 font-inter tracking-tight text-slate-100 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
