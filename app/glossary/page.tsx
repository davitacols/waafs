import ContactForm from '@/components/ContactForm';

type GlossaryItem = {
  letter: string;
  term: string;
  definition: string;
};

const glossaryTerms: GlossaryItem[] = [
  { letter: 'A', term: 'Accounts Payable', definition: 'Money owed by a business to its suppliers.' },
  { letter: 'A', term: 'Accounts Receivable', definition: 'Money owed to a business by its customers.' },
  { letter: 'B', term: 'Balance Sheet', definition: 'A financial statement showing assets, liabilities, and equity at a specific point in time.' },
  { letter: 'B', term: 'Bookkeeping', definition: 'The recording of financial transactions in a systematic manner.' },
  { letter: 'C', term: 'Corporation Tax', definition: 'Tax paid by limited companies on their profits.' },
  { letter: 'C', term: 'Cash Flow', definition: 'The movement of money in and out of a business.' },
  { letter: 'D', term: 'Depreciation', definition: 'The reduction in value of an asset over time.' },
  { letter: 'E', term: 'Equity', definition: 'The value of ownership interest in a business.' },
  { letter: 'F', term: 'Fiscal Year', definition: 'A 12-month period used for accounting purposes and tax reporting.' },
  { letter: 'G', term: 'Gross Profit', definition: 'Revenue minus the cost of goods sold.' },
  { letter: 'H', term: 'HMRC', definition: "His Majesty's Revenue and Customs, the UK tax authority." },
  { letter: 'I', term: 'Invoice', definition: 'A document requesting payment for goods or services provided.' },
  { letter: 'K', term: 'KPI', definition: 'Key Performance Indicator, a measurable value showing business performance.' },
  { letter: 'L', term: 'Liability', definition: 'A financial obligation or debt owed by a business.' },
  { letter: 'N', term: 'Net Profit', definition: 'Total revenue minus all expenses, taxes, and costs.' },
  { letter: 'N', term: 'National Insurance', definition: 'Contributions paid by employees and employers to fund state benefits.' },
  { letter: 'P', term: 'PAYE', definition: 'Pay As You Earn, the system for collecting income tax and National Insurance from employees.' },
  { letter: 'P', term: 'Profit and Loss', definition: 'A financial statement showing revenues and expenses over a period.' },
  { letter: 'R', term: 'RTI', definition: 'Real Time Information, reporting payroll information to HMRC in real time.' },
  { letter: 'S', term: 'Self-Assessment', definition: 'The system for reporting income and calculating tax owed to HMRC.' },
  { letter: 'T', term: 'Tax Relief', definition: 'A reduction in tax liability through allowable deductions or credits.' },
  { letter: 'V', term: 'VAT', definition: 'Value Added Tax, a consumption tax on goods and services.' },
];

export default function Glossary() {
  const groupedTerms = glossaryTerms.reduce<Record<string, GlossaryItem[]>>((acc, item) => {
    if (!acc[item.letter]) {
      acc[item.letter] = [];
    }

    acc[item.letter].push(item);
    return acc;
  }, {});

  const letters = Object.keys(groupedTerms);

  return (
    <div className="site-shell py-10 md:py-16">
      <section className="section-card p-8 md:p-10">
        <span className="eyebrow">A-Z glossary</span>
        <h1 className="section-title mt-5">Accounting language without the unnecessary fog.</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[color:var(--muted)]">
          A quick reference for common accounting and tax terms that show up when you are running
          or growing a business.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {letters.map((letter) => (
            <a key={letter} href={`#letter-${letter}`} className="tag-pill">
              {letter}
            </a>
          ))}
        </div>
      </section>

      <div className="mt-10 space-y-6">
        {letters.map((letter) => (
          <section key={letter} id={`letter-${letter}`} className="section-card p-6 md:p-8">
            <div className="flex items-center gap-4">
              <div className="letter-chip">{letter}</div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--secondary)]">
                  Glossary section
                </p>
                <h2 className="mt-2 text-3xl">{letter}</h2>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {groupedTerms[letter].map((item) => (
                <div key={item.term} className="info-card p-6">
                  <h3 className="text-2xl">{item.term}</h3>
                  <p className="mt-3 text-base leading-7 text-[color:var(--muted)]">{item.definition}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-12">
        <ContactForm />
      </div>
    </div>
  );
}
