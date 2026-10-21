import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const brandIconSvg = `
<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="4" y="4" width="72" height="72" rx="22" fill="#172231"/>
  <path d="M18 20L28 54L40 27L52 54L62 20" stroke="#F9F1E5" stroke-width="7.5" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="62" cy="16.5" r="5.5" fill="#C46D36"/>
</svg>
`;

const brandIcon = `data:image/svg+xml,${encodeURIComponent(brandIconSvg)}`;

export const metadata: Metadata = {
  title: 'Waafins | Small businesses. Our business.',
  description: 'Waafins provides accounting, tax, payroll, and compliance support for growing small businesses.',
  icons: {
    icon: brandIcon,
    shortcut: brandIcon,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
