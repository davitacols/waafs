import ServicePage from '@/components/ServicePage';

export default function Payroll() {
  return (
    <ServicePage
      title="Payroll Services"
      content={
        <>
          <p>
            Unlike generic one-size-fits-all providers, our payroll services are tailored to your
            business and the way your team operates. You can relax knowing the process is handled
            with attention to current employment and tax legislation.
          </p>

          <h3>Key benefits include:</h3>
          <ul>
            <li>Weekly, fortnightly, monthly, and annual payroll processing</li>
            <li>All external returns and internal reports</li>
            <li>BACS, cash, and cheque payments</li>
            <li>Calculations for tax, National Insurance, SSP, SMP, student loans, and more</li>
            <li>P11D and Class 1A computations</li>
            <li>Complete end-of-year reporting and reconciliation</li>
            <li>Full compliance with HMRC e-filing requirements, including RTI</li>
            <li>A completely managed service</li>
            <li>Reduced payroll costs</li>
            <li>Time savings for more important business priorities</li>
            <li>Ongoing professional support and guidance</li>
            <li>Accurate, timely employee payments</li>
          </ul>
        </>
      }
    />
  );
}
