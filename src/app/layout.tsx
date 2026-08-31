import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { victory } from '../commonComponents/fonts';
import './globals.css';
import { LanguageProvider } from './context/languageUseContent';
import { Toaster } from "sonner";

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
        <LanguageProvider>{children}</LanguageProvider>
        <Toaster
          position="top-right"
          richColors
          closeButton
          duration={3000}
          theme="light"
        />
      </body>
    </html>
  );
}