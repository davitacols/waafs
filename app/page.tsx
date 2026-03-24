import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import { serviceLinks } from '@/components/siteData';

const clientProfiles = [
  {
    title: 'Start-ups and founders',
    description: 'Build the finance side properly from day one instead of untangling preventable mistakes later.',
  },
  {
    title: 'Limited companies',
    description: 'Keep accounts, corporation tax, and statutory reporting working in sync.',
  },
  {
    title: 'Contractors and consultants',
    description: 'Stay on top of filings and deadlines without letting admin crowd out billable work.',
  },
  {
    title: 'Landlords and partnerships',
    description: 'Get practical support where tax, reporting, and documentation need to stay organised.',
  },
];

const valuePoints = [
  'Tailored support instead of one-size-fits-all packages',
  'Clearer visibility over deadlines, obligations, and risk',
  'Practical advice for real small-business pressure',
  'A calmer path through compliance-heavy admin',
];

const processSteps = [
  {
    step: '01',
    title: 'Understand the pressure points',
    description: 'We start with where your current finance process feels messy, delayed, or overly manual.',
  },
  {
    step: '02',
    title: 'Shape the right support mix',
    description: 'From bookkeeping and payroll to year-end accounts, we focus on what will actually reduce friction.',
  },
  {
    step: '03',
    title: 'Keep the essentials moving',
    description: 'Deadlines, reporting requirements, and recurring finance work stay structured instead of becoming a monthly scramble.',
  },
];

export default function Home() {
  return (
    <div className="site-shell py-10 md:py-16">
      <section className="grid gap-8 lg:grid-cols-[1.08fr,0.92fr] lg:items-start">
        <div className="animate-fade-up">
          <span className="eyebrow">Waffins accounting, tax, and compliance for ambitious small businesses</span>
          <h1 className="display-title mt-6 max-w-4xl">Waffins</h1>
          <p className="mt-4 font-serif text-2xl text-[color:var(--ink)] sm:text-3xl">
            Small businesses. Our business.
          </p>
          <p className="lede mt-6">
            We help founders, directors, landlords, contractors, and growing teams take the
            weight of bookkeeping, payroll, tax, and reporting off their plate without losing visibility.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/#contact" className="cta-primary">
              Book a consultation
            </Link>
            <Link href="#services" className="cta-secondary">
              Explore services
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {valuePoints.map((point) => (
              <span key={point} className="tag-pill">
                {point}
              </span>
            ))}
          </div>
        </div>

        <div className="glass-panel p-8 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/55">
            What we take off your plate
          </p>
          <div className="mt-6 space-y-4">
            {serviceLinks.slice(0, 4).map((service) => (
              <div key={service.href} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <Link href={service.href} className="font-serif text-2xl text-white">
                  {service.label}
                </Link>
                <p className="mt-2 text-sm leading-7 text-white/70">{service.teaser}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/55">
              Built around real business pressure
            </p>
            <p className="mt-3 text-base leading-7 text-white/75">
              The goal is not just filing on time. It is creating more breathing room, fewer avoidable
              surprises, and a finance function that supports growth instead of slowing it down.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-[0.9fr,1.1fr]">
        <div className="section-card p-8 md:p-10">
          <span className="eyebrow">Who we help</span>
          <h2 className="section-title mt-5">Support that fits the way smaller businesses actually operate.</h2>
          <p className="mt-5 text-lg leading-8 text-[color:var(--muted)]">
            Some clients need the full compliance backbone handled for them. Others need a
            sharper reporting rhythm or cleaner books so the business can move faster.
          </p>
          <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
            Across every engagement, the focus stays the same: keep the essentials accurate,
            reduce unnecessary admin drag, and make the numbers easier to work with.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {clientProfiles.map((profile) => (
            <div key={profile.title} className="info-card p-6">
              <h3 className="text-2xl">{profile.title}</h3>
              <p className="mt-3 text-base leading-7 text-[color:var(--muted)]">
                {profile.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="mt-16">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="eyebrow">Core services</span>
            <h2 className="section-title mt-5">The finance work that keeps small businesses steady.</h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-[color:var(--muted)]">
            From day-to-day bookkeeping through to annual accounts and tax filings, each service
            is shaped to reduce friction and give you more confidence in the numbers.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {serviceLinks.map((service) => (
            <Link key={service.href} href={service.href} className="section-card p-6 transition hover:-translate-y-1">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--secondary)]">
                Service
              </p>
              <h3 className="mt-4 text-3xl">{service.label}</h3>
              <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">{service.teaser}</p>
              <span className="mt-6 inline-flex text-sm font-semibold text-[color:var(--accent-strong)]">
                Learn more
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <div className="mb-8">
          <span className="eyebrow">How we work</span>
          <h2 className="section-title mt-5">Less noise. More clarity. Better follow-through.</h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {processSteps.map((step) => (
            <div key={step.step} className="section-card p-8">
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
                Step {step.step}
              </span>
              <h3 className="mt-4 text-3xl">{step.title}</h3>
              <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 section-card p-8 md:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
          <div>
            <span className="eyebrow">Why clients stay</span>
            <h2 className="section-title mt-5">You should not need to become an accountant to run a good business.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              'A more organised route through statutory and tax obligations',
              'Support that helps you avoid fines, penalties, and reactive panic',
              'Sharper visibility over performance and reporting requirements',
              'A team that treats your business objectives as part of the brief',
            ].map((item) => (
              <div key={item} className="info-card">
                <p className="text-base leading-7 text-[color:var(--ink)]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-16">
        <ContactForm />
      </div>
    </div>
  );
}
