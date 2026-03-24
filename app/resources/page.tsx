import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

const resources = [
  {
    category: 'Self assessment',
    title: 'Who needs to do a self assessment?',
    description: 'A useful starting point if you are unsure whether a tax return is required.',
    href: 'https://www.gov.uk/self-assessment-tax-returns/who-must-send-a-tax-return',
  },
  {
    category: 'Registration',
    title: 'Registering for self-assessment as self-employed',
    description: 'Government guidance for getting registered properly when you start trading.',
    href: 'https://www.gov.uk/register-for-self-assessment/self-employed',
  },
  {
    category: 'VAT',
    title: 'When do you need to register for VAT?',
    description: 'A quick reference point for registration thresholds and timing.',
    href: 'https://www.gov.uk/vat-registration/when-to-register',
  },
  {
    category: 'Payroll',
    title: 'PAYE guidance for employers',
    description: 'A practical reference for businesses employing staff and running payroll.',
    href: 'https://www.gov.uk/paye-for-employers',
  },
  {
    category: 'Corporation tax',
    title: 'Corporation tax overview',
    description: 'An official reference for limited companies and their tax obligations.',
    href: 'https://www.gov.uk/corporation-tax',
  },
  {
    category: 'Record keeping',
    title: 'Company and accounting records',
    description: 'Why organised records matter and what businesses are expected to retain.',
    href: 'https://www.gov.uk/running-a-limited-company/company-and-accounting-records',
  },
];

export default function Resources() {
  return (
    <div className="site-shell py-10 md:py-16">
      <section className="grid gap-6 lg:grid-cols-[1fr,0.92fr]">
        <div className="section-card p-8 md:p-10">
          <span className="eyebrow">Useful references</span>
          <h1 className="section-title mt-5">Straight answers from official sources when you need them.</h1>
          <p className="mt-5 text-lg leading-8 text-[color:var(--muted)]">
            These links are a practical way to check government guidance around self-assessment,
            VAT, payroll, corporation tax, and record keeping. They work well alongside tailored advice.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/#contact" className="cta-primary">
              Ask about your situation
            </Link>
            <Link href="/glossary" className="cta-secondary">
              Browse the glossary
            </Link>
          </div>
        </div>

        <div className="section-card p-8 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--secondary)]">
            When these are especially useful
          </p>
          <div className="mt-6 grid gap-4">
            {[
              'You need to check whether a filing or registration applies to you.',
              'You want to understand official terminology before acting.',
              'You need a reliable reference point before discussing next steps.',
            ].map((item) => (
              <div key={item} className="info-card">
                <p className="text-base leading-7 text-[color:var(--ink)]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {resources.map((resource) => (
          <a
            key={resource.href}
            href={resource.href}
            target="_blank"
            rel="noopener noreferrer"
            className="section-card p-6 transition hover:-translate-y-1"
          >
            <span className="tag-pill">{resource.category}</span>
            <h2 className="mt-4 text-3xl">{resource.title}</h2>
            <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">{resource.description}</p>
            <span className="mt-6 inline-flex text-sm font-semibold text-[color:var(--accent-strong)]">
              Open official guidance
            </span>
          </a>
        ))}
      </section>

      <div className="mt-12">
        <ContactForm />
      </div>
    </div>
  );
}
