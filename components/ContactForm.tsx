'use client';

export default function ContactForm() {
  return (
    <section id="contact" className="section-card p-8 md:p-10">
      <div className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr]">
        <div className="max-w-xl">
          <span className="eyebrow">Let's make the finance side easier</span>
          <h2 className="section-title mt-5">Tell us where the operational pressure is showing up.</h2>
          <p className="mt-5 text-lg leading-8 text-[color:var(--muted)]">
            Whether you need help with year-end accounts, cleaner bookkeeping, VAT, payroll,
            or early-stage setup, we can shape support around the way your business actually runs.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              'Founders who want a calmer month-end process',
              'Teams juggling payroll, tax, and reporting deadlines',
              'Start-ups that need the right structure from day one',
              'Small businesses that want clearer financial visibility',
            ].map((point) => (
              <div key={point} className="info-card">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--secondary)]">
                  Best fit
                </p>
                <p className="mt-3 text-base leading-7 text-[color:var(--ink)]">{point}</p>
              </div>
            ))}
          </div>
        </div>

        <form className="rounded-[1.7rem] border border-[rgba(23,34,49,0.08)] bg-white/55 p-6 shadow-[0_18px_40px_rgba(23,34,49,0.08)] md:p-8">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--secondary)]">
              Request a consultation
            </p>
            <p className="mt-3 text-base leading-7 text-[color:var(--muted)]">
              Share a few details and we can start shaping the right level of support.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <input type="text" placeholder="Name" className="contact-input" required />
            <input type="email" placeholder="Email" className="contact-input" required />
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <input type="tel" placeholder="Phone" className="contact-input" />
            <input type="text" placeholder="Business name" className="contact-input" />
          </div>

          <textarea
            placeholder="Tell us what you need help with"
            rows={6}
            className="contact-textarea mt-4"
            required
          />

          <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-6 text-[color:var(--muted)]">
              Helpful context: deadlines coming up, current pain points, and the type of business you run.
            </p>
            <button type="submit" className="cta-primary">
              Send enquiry
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
