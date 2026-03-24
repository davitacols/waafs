export type ServiceLink = {
  href: string;
  label: string;
  teaser: string;
};

export const serviceLinks: ServiceLink[] = [
  {
    href: '/services/end-of-year-accounts',
    label: 'End-of-Year Accounts',
    teaser: 'Statutory accounts prepared clearly, accurately, and on time.',
  },
  {
    href: '/services/management-accounts',
    label: 'Management Accounts',
    teaser: 'Monthly visibility that helps you make better business decisions.',
  },
  {
    href: '/services/bookkeeping',
    label: 'Bookkeeping',
    teaser: 'Organised records that keep reporting, VAT, and year-end work clean.',
  },
  {
    href: '/services/payroll',
    label: 'Payroll Services',
    teaser: 'Reliable payroll processing with current HMRC compliance in mind.',
  },
  {
    href: '/services/self-assessment',
    label: 'Self-Assessment Tax Returns',
    teaser: 'Straightforward filing support for directors, landlords, and individuals.',
  },
  {
    href: '/services/corporation-tax',
    label: 'Corporation Tax',
    teaser: 'Practical tax support focused on compliance and retained profit.',
  },
  {
    href: '/services/vat-returns',
    label: 'VAT Returns',
    teaser: 'Timely VAT filing that protects cash flow and avoids nasty surprises.',
  },
  {
    href: '/services/business-startups',
    label: 'Business Start-ups',
    teaser: 'Early-stage guidance for founders who want the right structure from day one.',
  },
];
