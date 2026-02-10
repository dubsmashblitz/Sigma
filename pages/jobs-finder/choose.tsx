import Head from 'next/head';
import { useRouter } from 'next/router';

const data: Record<string, { title: string; options: Array<[string, string]> }> = {
  'govt-jobs': {
    title: 'Sarkari Naukri Filters',
    options: [
      ['10th Pass ke liye Best Jobs ->', '10th'],
      ['12th Pass Direct Recruitment ->', '12th'],
      ['Graduate ke liye Top Vacancies ->', 'graduate'],
      ['Central Govt Jobs ->', 'central-govt'],
      ['State Govt Jobs ->', 'state-govt'],
      ['Bank + SSC + Railway Mega Openings ->', 'major-sectors'],
    ],
  },
  'private-jobs': { title: 'Private Job Filters', options: [['Fresher Private Jobs ->', 'fresher'], ['1-3 Years Experience Jobs ->', 'exp-1-3'], ['IT / Software Jobs ->', 'it-software'], ['BPO / Call Center Jobs ->', 'bpo-call-center'], ['Sales / Marketing Jobs ->', 'sales-marketing'], ['City Wise Private Jobs ->', 'city-wise']] },
  'wfh-jobs': { title: 'Remote/WFH Filters', options: [['Fresher WFH Jobs (No Experience) ->', 'fresher'], ['Part-Time WFH ->', 'part-time'], ['Full-Time Remote Jobs ->', 'full-time'], ['Data Entry / Back Office ->', 'data-entry'], ['Customer Support Remote ->', 'customer-support'], ['Freelance / Project Based ->', 'freelance']] },
  'state-wise': { title: 'State Selection', options: [['Uttar Pradesh Jobs ->', 'up'], ['Bihar Jobs ->', 'bihar'], ['Rajasthan Jobs ->', 'rajasthan'], ['Madhya Pradesh Jobs ->', 'mp'], ['Maharashtra Jobs ->', 'maharashtra'], ['Delhi NCR Jobs ->', 'delhi-ncr']] },
  qualification: { title: 'Qualification Selection', options: [['10th Pass Jobs ->', '10th'], ['12th Pass Jobs ->', '12th'], ['ITI Jobs ->', 'iti'], ['Diploma Jobs ->', 'diploma'], ['Graduate Jobs ->', 'graduate'], ['Post Graduate Jobs ->', 'post-graduate']] },
  'exam-notification': { title: 'Exam Notification Selection', options: [['SSC Exams ->', 'ssc'], ['Banking Exams ->', 'banking'], ['Railway Exams ->', 'railway'], ['UPSC / Civil Services ->', 'upsc'], ['State PSC Exams ->', 'state-psc'], ['Teaching Exams ->', 'teaching']] },
  'admit-card': { title: 'Admit Card Selection', options: [['SSC Admit Card ->', 'ssc'], ['Banking Admit Card ->', 'banking'], ['Railway Admit Card ->', 'railway'], ['State Exams Admit Card ->', 'state-exams'], ['Teaching Admit Card ->', 'teaching']] },
  results: { title: 'Result Selection', options: [['SSC Results ->', 'ssc'], ['Banking Results ->', 'banking'], ['Railway Results ->', 'railway'], ['State PSC Results ->', 'state-psc'], ['Board/Teaching Results ->', 'teaching']] },
  apprenticeship: { title: 'Apprenticeship Selection', options: [['Govt Apprenticeship ->', 'govt'], ['PSU Apprenticeship ->', 'psu'], ['Private Apprenticeship ->', 'private'], ['ITI Apprenticeship ->', 'iti'], ['Internship for Freshers ->', 'internship-fresher']] },
  'urgent-hiring': { title: 'Urgent Hiring Selection', options: [['Closing Soon Jobs ->', 'closing-soon'], ['Walk-in Interview Jobs ->', 'walk-in'], ['This Week Hiring ->', 'this-week'], ['High Salary Openings ->', 'high-salary'], ['No Experience Required ->', 'no-experience']] },
};

export default function JobsFinderChoosePage() {
  const router = useRouter();
  const trackParam = typeof router.query.track === 'string' ? router.query.track : 'govt-jobs';
  const activeTrack = data[trackParam] ? trackParam : 'govt-jobs';
  const config = data[activeTrack];

  return (
    <>
      <Head>
        <title>Jobs Finder - Step 2</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="container py-4 py-md-5">
        <section className="hero p-4 p-md-5 shadow-sm mb-4">
          <p className="text-uppercase mb-2 fw-semibold small">Step 2 of 3</p>
          <h1 className="display-6 fw-bold mb-2">Step 2 - Apni Exact Preference Select Karein</h1>
          <p className="mb-0">Neeche se apna category filter chuniye aur direct final jobs page pe jaiye.</p>
        </section>

        <div className="alert alert-info" role="alert"><strong>You selected: {activeTrack}</strong></div>

        <section>
          <h2 className="h4 mb-3">{config.title}</h2>
          <div className="row g-3">
            {config.options.map(([label, filter]) => (
              <div className="col-12 col-md-6" key={filter}>
                <a className="btn btn-success w-100 option-btn d-flex align-items-center justify-content-center" href={`/jobs-finder/go?track=${activeTrack}&filter=${filter}`}>{label}</a>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-4">
          <a className="btn btn-dark" href="/category/latest-jobs/">Can’t decide? Show Me Latest Jobs</a>
          <a className="btn btn-outline-secondary ms-2" href="/jobs-finder">&larr; Back</a>
        </section>
      </main>

      <style jsx global>{`
        body { background: #f8fafc; }
        .hero { background: linear-gradient(135deg, #198754, #20c997); color: #fff; border-radius: 1rem; }
        .option-btn { min-height: 74px; font-weight: 600; }
      `}</style>
    </>
  );
}
