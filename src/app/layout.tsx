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
      <body suppressHydrationWarning>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}