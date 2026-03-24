import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

interface ServicePageProps {
  title: string;
  content: React.ReactNode;
}

type ServiceDetail = {
  eyebrow: string;
  summary: string;
  fit: string[];
  deliverables: string[];
  highlights: string[];
};

const serviceDetails: Record<string, ServiceDetail> = {
  'End-of-Year Accounts': {
    eyebrow: 'Statutory reporting',
    summary:
      'Annual accounts prepared with care, clear communication, and the right level of attention to your reporting obligations.',
    fit: [
      'You need annual accounts prepared and filed accurately.',
      'You want a smoother handoff between bookkeeping, tax, and year-end reporting.',
      'You would rather spend time leading the business than decoding filing rules.',
    ],
    deliverables: [
      'Preparation of annual accounts for the relevant reporting period',
      'A clearer view of what needs to be filed and when',
      'Support that keeps statutory reporting tied back to the rest of your finance process',
    ],
    highlights: [
      'Keeps reporting structured and deadline-driven',
      'Reduces end-of-year stress and surprises',
      'Creates cleaner handover into tax work and future planning',
    ],
  },
  'Management Accounts': {
    eyebrow: 'Monthly visibility',
    summary:
      'Sharper reporting for owners who want to see performance trends, pressure points, and meaningful numbers before the year is over.',
    fit: [
      'You want regular numbers instead of waiting for year-end to understand performance.',
      'You need better visibility over margins, cash flow, or KPIs.',
      'You are growing and need financial information that supports decisions quickly.',
    ],
    deliverables: [
      'Regular reporting cadence to review performance',
      'A practical snapshot of key financial trends and indicators',
      'More confidence when making pricing, hiring, or spending decisions',
    ],
    highlights: [
      'Turns bookkeeping into useful management information',
      'Makes performance easier to read and discuss',
      'Helps owners move from reactive to proactive decisions',
    ],
  },
  Bookkeeping: {
    eyebrow: 'Financial foundations',
    summary:
      'Reliable bookkeeping that keeps the whole finance function steadier, from VAT and payroll through to year-end reporting.',
    fit: [
      'Your records need to be more organised and easier to trust.',
      'You want transactions captured consistently throughout the month.',
      'You need cleaner books so other compliance work does not become a scramble.',
    ],
    deliverables: [
      'Orderly financial records that support reporting and compliance',
      'Better preparedness for VAT returns and year-end accounts',
      'Less admin friction when you need numbers quickly',
    ],
    highlights: [
      'Improves accuracy across the rest of the finance cycle',
      'Cuts down time lost to messy records and rework',
      'Supports stronger decision-making with cleaner data',
    ],
  },
  'Payroll Services': {
    eyebrow: 'People and compliance',
    summary:
      'Tailored payroll support that keeps employees paid correctly and helps your business stay aligned with current obligations.',
    fit: [
      'You need payroll handled accurately across different pay frequencies.',
      'You want confidence around reporting, deductions, and end-of-year requirements.',
      'You are tired of payroll admin taking attention away from running the business.',
    ],
    deliverables: [
      'Recurring payroll processing suited to your business rhythm',
      'Support across calculations, reporting, and filing requirements',
      'A managed service that reduces internal admin load',
    ],
    highlights: [
      'Helps protect payroll accuracy and timing',
      'Supports HMRC-facing compliance obligations',
      'Frees up owners and teams for more valuable work',
    ],
  },
  'Self-Assessment Tax Returns': {
    eyebrow: 'Personal tax support',
    summary:
      'Straightforward self-assessment support for individuals who need a clear path through filing obligations without unnecessary stress.',
    fit: [
      'You are outside PAYE or have additional income to report.',
      'You want your return prepared carefully and submitted on time.',
      'You would rather not wrestle with forms and deadlines alone.',
    ],
    deliverables: [
      'Preparation and submission support for self-assessment returns',
      'Clearer understanding of obligations and filing timing',
      'A more organised process around personal tax reporting',
    ],
    highlights: [
      'Reduces filing stress for directors and individuals',
      'Keeps the return process organised and deadline-aware',
      'Provides practical help where the rules feel opaque',
    ],
  },
  'Corporation Tax': {
    eyebrow: 'Company tax',
    summary:
      'Corporation tax support designed to keep you compliant, avoid overpaying, and maintain a clearer view of what the company actually owes.',
    fit: [
      'You need confidence around annual tax obligations for a limited company.',
      'You want support that ties tax back to the underlying accounts.',
      'You would like a clearer view of liabilities before deadlines arrive.',
    ],
    deliverables: [
      'Support around corporation tax obligations and filing expectations',
      'A tighter connection between annual accounts and tax work',
      'More clarity around what is due and how it affects retained profit',
    ],
    highlights: [
      'Helps avoid unnecessary tax leakage',
      'Supports cleaner year-end planning',
      'Makes tax obligations easier to understand before they become urgent',
    ],
  },
  'VAT Returns': {
    eyebrow: 'Indirect tax',
    summary:
      'VAT support that prioritises accurate returns, cleaner records, and better control over how VAT affects your cash position.',
    fit: [
      'You need VAT returns filed accurately and on time.',
      'You want fewer errors and less last-minute chasing for information.',
      'You need a better grip on VAT impact when a payment or refund is due.',
    ],
    deliverables: [
      'Accurate VAT return preparation rooted in better record keeping',
      'Improved readiness for filing cycles and submission deadlines',
      'More confidence around the cash-flow impact of VAT',
    ],
    highlights: [
      'Reduces the risk of penalties tied to late or inaccurate filing',
      'Supports steadier cash-flow planning',
      'Encourages cleaner bookkeeping discipline across the business',
    ],
  },
  'Business Start-ups': {
    eyebrow: 'Founder setup',
    summary:
      'Practical early-stage guidance for entrepreneurs who want to launch with the right structure, habits, and compliance foundations in place.',
    fit: [
      'You are turning a business idea into an operating company.',
      'You want help understanding the responsibilities that begin straight away.',
      'You need support setting up the finance side without losing momentum.',
    ],
    deliverables: [
      'Guidance on the early compliance and administration landscape',
      'Support establishing stronger financial habits from the start',
      'A calmer setup process so you can focus on building the business',
    ],
    highlights: [
      'Helps founders start with fewer avoidable mistakes',
      'Reduces confusion around early obligations and deadlines',
      'Creates better foundations for future growth and reporting',
    ],
  },
};

export default function ServicePage({ title, content }: ServicePageProps) {
  const detail = serviceDetails[title];

  return (
    <div className="site-shell py-10 md:py-16">
      <section className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="section-card p-8 md:p-10">
          <span className="eyebrow">{detail?.eyebrow ?? 'Business support'}</span>
          <h1 className="display-title mt-6 max-w-4xl">{title}</h1>
          <p className="lede mt-5">
            {detail?.summary ??
              'Focused support shaped around your business, your deadlines, and the realities of day-to-day operations.'}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/#contact" className="cta-primary">
              Start a conversation
            </Link>
            <Link href="/resources" className="cta-secondary">
              Explore resources
            </Link>
          </div>
        </div>

        <aside className="glass-panel p-8 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/55">
            Best when you need
          </p>
          <div className="mt-6 space-y-4">
            {(detail?.fit ?? []).map((item) => (
              <div key={item} className="rounded-[1.4rem] border border-white/10 bg-white/5 p-5">
                <p className="text-base leading-7 text-white/82">{item}</p>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-[1.05fr,0.95fr]">
        <article className="section-card p-8 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--secondary)]">
            How we approach it
          </p>
          <div className="rich-copy mt-5">{content}</div>
        </article>

        <div className="space-y-6">
          <div className="section-card p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--secondary)]">
              What this usually covers
            </p>
            <div className="mt-5 space-y-3">
              {(detail?.deliverables ?? []).map((item) => (
                <div key={item} className="info-card">
                  <p className="text-base leading-7 text-[color:var(--ink)]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="section-card p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--secondary)]">
              Why clients value it
            </p>
            <div className="mt-5 grid gap-3">
              {(detail?.highlights ?? []).map((item) => (
                <div key={item} className="info-card">
                  <p className="text-base leading-7 text-[color:var(--ink)]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="mt-12">
        <ContactForm />
      </div>
    </div>
  );
}
