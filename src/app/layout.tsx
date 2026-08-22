import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { victory } from '../commonComponents/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Creatine Company',
  description:
    'Premium Creatine Monohydrate. Pure performance. Zero compromise.',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`min-h-full flex flex-col ${victory.variable}`}>
        {children}
      </body>
    </html>
  );
}