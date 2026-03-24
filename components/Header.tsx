'use client';

import Link from 'next/link';
import { useState } from 'react';
import BrandLogo from '@/components/BrandLogo';
import { serviceLinks } from '@/components/siteData';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const handleNavigate = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(16,28,40,0.82)] text-white backdrop-blur-xl">
      <div className="site-shell py-4">
        <nav className="flex items-center justify-between gap-4">
          <Link href="/" className="min-w-0" onClick={handleNavigate}>
            <BrandLogo theme="light" />
          </Link>

          <button
            type="button"
            className="inline-flex rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white lg:hidden"
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            Menu
          </button>

          <div className="hidden items-center gap-2 lg:flex">
            <Link href="/" className="nav-pill" onClick={handleNavigate}>
              Home
            </Link>

            <div className="relative">
              <button
                type="button"
                className="nav-pill"
                onClick={() => setIsServicesOpen((current) => !current)}
                aria-expanded={isServicesOpen}
              >
                Services
                <span className="ml-2 text-xs text-white/60">v</span>
              </button>

              {isServicesOpen ? (
                <div className="absolute left-0 top-full mt-3 w-[320px] rounded-[1.6rem] border border-white/10 bg-[rgba(255,252,247,0.96)] p-3 text-slate-900 shadow-[0_24px_60px_rgba(15,23,42,0.22)]">
                  <div className="mb-2 px-3 pt-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-slate-500">
                    Business solutions
                  </div>
                  <div className="space-y-1">
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block rounded-2xl px-3 py-3 transition hover:bg-[rgba(23,34,49,0.05)]"
                        onClick={handleNavigate}
                      >
                        <span className="block font-semibold text-slate-900">{service.label}</span>
                        <span className="mt-1 block text-sm leading-6 text-slate-600">
                          {service.teaser}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            <Link href="/resources" className="nav-pill" onClick={handleNavigate}>
              Resources
            </Link>
            <Link href="/glossary" className="nav-pill" onClick={handleNavigate}>
              Glossary
            </Link>
            <Link href="/#contact" className="cta-primary ml-2" onClick={handleNavigate}>
              Book a consultation
            </Link>
          </div>
        </nav>

        {isMenuOpen ? (
          <div className="glass-panel mt-4 p-4 lg:hidden">
            <div className="space-y-2">
              <Link
                href="/"
                className="block rounded-2xl px-4 py-3 text-white/90 hover:bg-white/10"
                onClick={handleNavigate}
              >
                Home
              </Link>

              <button
                type="button"
                className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-white/90 hover:bg-white/10"
                onClick={() => setIsServicesOpen((current) => !current)}
                aria-expanded={isServicesOpen}
              >
                <span>Services</span>
                <span className="text-xs text-white/60">{isServicesOpen ? '-' : '+'}</span>
              </button>

              {isServicesOpen ? (
                <div className="space-y-2 rounded-[1.5rem] border border-white/10 bg-white/5 p-3">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block rounded-2xl px-3 py-3 text-sm text-white/80 hover:bg-white/10 hover:text-white"
                      onClick={handleNavigate}
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              ) : null}

              <Link
                href="/resources"
                className="block rounded-2xl px-4 py-3 text-white/90 hover:bg-white/10"
                onClick={handleNavigate}
              >
                Resources
              </Link>
              <Link
                href="/glossary"
                className="block rounded-2xl px-4 py-3 text-white/90 hover:bg-white/10"
                onClick={handleNavigate}
              >
                Glossary
              </Link>
              <Link href="/#contact" className="cta-primary mt-2 w-full" onClick={handleNavigate}>
                Book a consultation
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
