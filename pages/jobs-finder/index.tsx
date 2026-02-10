import Head from 'next/head';

const options = [
  ['Latest Sarkari Naukri 2026 ->', 'govt-jobs', 'primary'],
  ['Private Jobs for Freshers ->', 'private-jobs', 'outline-primary'],
  ['Work From Home Jobs Apply ->', 'wfh-jobs', 'outline-primary'],
  ['Apne State ki Jobs Dekho ->', 'state-wise', 'outline-primary'],
  ['Qualification Wise Jobs ->', 'qualification', 'outline-primary'],
  ['New Exam Notifications ->', 'exam-notification', 'outline-primary'],
  ['Admit Card Download Updates ->', 'admit-card', 'outline-primary'],
  ['Latest Result Check Karo ->', 'results', 'outline-primary'],
  ['Apprenticeship / Internship Openings ->', 'apprenticeship', 'outline-primary'],
  ['Urgent Hiring Jobs (Apply Fast) ->', 'urgent-hiring', 'warning'],
] as const;

export default function JobsFinderEntryPage() {
  return (
    <>
      <Head>
        <title>Jobs Finder - Step 1</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="container py-4 py-md-5">
        <section className="hero p-4 p-md-5 shadow-sm mb-4">
          <p className="text-uppercase mb-2 fw-semibold small">Step 1 of 3</p>
          <h1 className="display-6 fw-bold">India ki Top Jobs ek hi jagah - Choose Your Path</h1>
          <p className="mb-0">Sarkari, Private, WFH, Exam, Result - jo chahiye wahi select karo aur direct relevant jobs page pe jao.</p>
        </section>

        <section className="mb-4 d-flex flex-wrap gap-2">
          <span className="badge rounded-pill trust-badge px-3 py-2">Daily Updated Listings</span>
          <span className="badge rounded-pill trust-badge px-3 py-2">Verified Sources</span>
          <span className="badge rounded-pill trust-badge px-3 py-2">Free Job Alerts</span>
        </section>

        <section>
          <div className="row g-3">
            {options.map(([label, track, variant]) => (
              <div className="col-12 col-md-6" key={track}>
                <a className={`btn btn-${variant} w-100 option-btn d-flex align-items-center justify-content-center`} href={`/jobs-finder/choose?track=${track}`}>
                  {label}
                </a>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-4 text-muted small">
          Note: Hum kisi recruitment agency nahi hain; hum sirf latest vacancy updates aur official links provide karte hain.
        </footer>
      </main>
      <style jsx global>{`
        body { background: #f8fafc; }
        .hero { background: linear-gradient(135deg, #0d6efd, #6610f2); color: #fff; border-radius: 1rem; }
        .option-btn { min-height: 74px; font-weight: 600; }
        .trust-badge { background: #e9f2ff; color: #0b5ed7; }
      `}</style>
    </>
  );
}
