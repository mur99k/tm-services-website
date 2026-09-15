import type { Metadata } from 'next';
import { Cairo } from 'next/font/google';
import '../globals.css';

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'TM Services — قريباً | Coming Soon',
  description: 'موقع TM Services قيد التطوير. سنعود قريباً.',
  robots: { index: false, follow: false },
};

export default function MaintenanceLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
