import type { Metadata } from 'next';
import './globals.css';
import ReduxProvider from '@/redux/Provider/provider';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Homepage',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" sizes="any" />
      </head>
      <body suppressHydrationWarning>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}