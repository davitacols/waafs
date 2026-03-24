import Link from 'next/link';
import BrandLogo from '@/components/BrandLogo';
import { serviceLinks } from '@/components/siteData';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-[rgba(16,28,40,0.96)] text-white">
      <div className="site-shell py-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr,0.8fr]">
          <div className="max-w-xl">
            <BrandLogo theme="light" />
            <h2 className="mt-5 font-serif text-4xl text-white">
              Calm, practical support for growing companies.
            </h2>
            <p className="mt-4 max-w-lg text-base leading-8 text-white/65">
              We help founders and established small businesses stay on top of bookkeeping,
              reporting, payroll, tax, and compliance without turning every deadline into a fire drill.
            </p>
            <Link href="/#contact" className="cta-primary mt-6">
              Start the conversation
            </Link>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/45">Services</h3>
            <div className="mt-5 grid gap-3">
              {serviceLinks.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="text-sm leading-6 text-white/72 transition hover:text-white"
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/45">Explore</h3>
            <div className="mt-5 grid gap-3 text-sm leading-6 text-white/72">
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>
              <Link href="/resources" className="transition hover:text-white">
                Resources
              </Link>
              <Link href="/glossary" className="transition hover:text-white">
                A-Z Glossary
              </Link>
              <Link href="/#contact" className="transition hover:text-white">
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Waffins. All rights reserved.</p>
          <p>Accounting, compliance, and advisory support built around real small-business pressure.</p>
        </div>
      </div>
    </footer>
  );
}
