import Head from 'next/head';
import { useRouter } from 'next/router';

const mappings: Record<string, Array<[string, string]>> = {
  'govt-jobs|10th': [['10th Pass Sarkari Jobs', '/category/10th-pass-jobs/'], ['Police Constable Jobs', '/category/police-jobs/'], ['Railway Group D Jobs', '/category/railway-jobs/'], ['All Sarkari Naukri', '/category/sarkari-naukri/']],
  'govt-jobs|12th': [['12th Pass Govt Jobs', '/category/12th-pass-jobs/'], ['Defence Jobs', '/category/defence-jobs/'], ['SSC Jobs', '/category/ssc-jobs/'], ['All Sarkari Naukri', '/category/sarkari-naukri/']],
  'govt-jobs|graduate': [['SSC CGL Jobs', '/category/ssc-jobs/'], ['Bank PO/Clerk Jobs', '/category/bank-jobs/'], ['State Govt Jobs', '/category/state-wise-jobs/'], ['UPSC Jobs', '/category/exam-notification/'], ['All Graduate Jobs', '/category/graduate-jobs/']],
  'private-jobs|fresher': [['Private Fresher Jobs', '/category/private-jobs/'], ['IT Fresher Jobs', '/category/it-jobs/'], ['BPO Jobs', '/category/private-jobs/'], ['All Private Jobs', '/category/private-jobs/']],
  'wfh-jobs|part-time': [['Part-Time WFH Jobs', '/category/work-from-home-jobs/'], ['Data Entry WFH', '/category/work-from-home-jobs/'], ['Remote Support Jobs', '/category/work-from-home-jobs/'], ['All WFH Jobs', '/category/work-from-home-jobs/']],
  'results|ssc': [['SSC Results', '/category/results/'], ['SSC Answer Key', '/category/answer-key/'], ['Admit Card Updates', '/category/admit-card/'], ['All Results', '/category/results/']],
};

const defaultLinks: Array<[string, string]> = [['Latest Jobs', '/category/latest-jobs/'], ['Sarkari Naukri', '/category/sarkari-naukri/'], ['Private Jobs', '/category/private-jobs/'], ['Work From Home', '/category/work-from-home-jobs/'], ['Exam Notification', '/category/exam-notification/'], ['Admit Card', '/category/admit-card/'], ['Results', '/category/results/']];

export default function JobsFinderGoPage() {
  const router = useRouter();
  const track = typeof router.query.track === 'string' ? router.query.track : 'govt-jobs';
  const filter = typeof router.query.filter === 'string' ? router.query.filter : 'graduate';
  const key = `${track}|${filter}`;
  const links = mappings[key] || defaultLinks;

  return (
    <>
      <Head>
        <title>Jobs Finder - Step 3</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="container py-4 py-md-5">
        <section className="hero p-4 p-md-5 shadow-sm mb-4">
          <p className="text-uppercase mb-2 fw-semibold small">Step 3 of 3</p>
          <h1 className="display-6 fw-bold mb-2">Final Step - Best Matching Job Categories</h1>
          <p className="mb-0">Aapke selection ke hisaab se curated categories neeche di gayi hain.</p>
        </section>

        <div className="d-flex flex-wrap align-items-center gap-2 mb-4">
          <span className="badge text-bg-dark p-2">You selected: {track} &gt; {filter}</span>
          <span className="badge text-bg-warning p-2">New</span>
          <span className="badge text-bg-danger p-2">Last Date Alert</span>
        </div>

        <section>
          <div className="row g-3">
            {links.map(([label, url]) => (
              <div className="col-12 col-md-6" key={label}>
                <a className="card-link" href={url}>
                  <div className="card shadow-sm h-100 border-0">
                    <div className="card-body">
                      <h2 className="h5 card-title mb-2">{label}</h2>
                      <p className="mb-0 text-primary fw-semibold">Direct Official Notification -&gt;</p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-4 d-flex flex-wrap gap-2">
          <a className="btn btn-success" href="/category/latest-jobs/">Abhi Apply Karein (Open Category) -&gt;</a>
          <a className="btn btn-outline-success" href="#">Join Free Job Alert (WhatsApp/Telegram)</a>
          <a className="btn btn-outline-secondary" href="/jobs-finder/choose">&larr; Back</a>
        </section>

        <p className="mt-4 text-muted small">Always verify details on official notification before applying.</p>
      </main>

      <style jsx global>{`
        body { background: #f8fafc; }
        .hero { background: linear-gradient(135deg, #fd7e14, #dc3545); color: #fff; border-radius: 1rem; }
        .card-link { text-decoration: none; }
      `}</style>
    </>
  );
}
