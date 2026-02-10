# 3-Page WordPress Subfolder Landing Plan (Vacancy Blog)

## Goal
Create a guided 3-step landing flow in a **subfolder** (without editing existing WordPress pages) so users quickly reach relevant vacancy categories.

---

## 1) Exact Sitemap (Subfolder Structure)

> Replace `yourdomain.com` with your domain.  
> Suggested base subfolder: `/jobs-finder/`

### Page 1 (Entry)
- **URL:** `https://yourdomain.com/jobs-finder/`
- **Slug:** `jobs-finder`
- **Purpose:** Broad selection (job intent).

### Page 2 (Refine)
- **URL:** `https://yourdomain.com/jobs-finder/choose/`
- **Slug:** `jobs-finder/choose`
- **Purpose:** Detailed selection (qualification/state/sector/exam type).

### Page 3 (Final Redirect Hub)
- **URL:** `https://yourdomain.com/jobs-finder/go/`
- **Slug:** `jobs-finder/go`
- **Purpose:** Final options mapped to your WordPress category pages.

### Query parameter flow (recommended)
- Page 1 -> Page 2: `?track=<top-level-choice>`
- Page 2 -> Page 3: `?track=<top-level-choice>&filter=<detail-choice>`

Example:
- `/jobs-finder/choose/?track=govt-jobs`
- `/jobs-finder/go/?track=govt-jobs&filter=graduate`

---

## 2) Button Taxonomy (Exact Option Set)

## Page 1 Buttons (Broad intent)
1. **Sarkari Naukri (Govt Jobs)**
2. **Private Jobs (Fresher + Experienced)**
3. **Work From Home Jobs (WFH)**
4. **State Wise Jobs**
5. **Qualification Wise Jobs**
6. **Exam Notifications**
7. **Admit Card Updates**
8. **Result Updates**
9. **Apprenticeship / Internship**
10. **Urgent Hiring Jobs**

## Page 2 Buttons (Dynamic by Page 1 choice)

### If `track=govt-jobs`
- 10th Pass Govt Jobs
- 12th Pass Govt Jobs
- Graduate Govt Jobs
- Central Govt Jobs
- State Govt Jobs
- Bank / SSC / Railway / Defence

### If `track=private-jobs`
- Fresher Private Jobs
- 1-3 Years Experience Jobs
- IT / Software Jobs
- BPO / Call Center Jobs
- Sales / Marketing Jobs
- City Wise Private Jobs

### If `track=wfh-jobs`
- WFH for Freshers
- Part-Time WFH
- Full-Time Remote Jobs
- Data Entry / Back Office
- Customer Support Remote
- Freelance / Project Based

### If `track=state-wise`
- Uttar Pradesh Jobs
- Bihar Jobs
- Rajasthan Jobs
- Madhya Pradesh Jobs
- Maharashtra Jobs
- Delhi NCR Jobs

### If `track=qualification`
- 10th Pass Jobs
- 12th Pass Jobs
- ITI Jobs
- Diploma Jobs
- Graduate Jobs
- Post Graduate Jobs

### If `track=exam-notification`
- SSC Exams
- Banking Exams
- Railway Exams
- UPSC / Civil Services
- State PSC Exams
- Teaching Exams

### If `track=admit-card`
- SSC Admit Card
- Banking Admit Card
- Railway Admit Card
- State Exams Admit Card
- Teaching Admit Card

### If `track=results`
- SSC Results
- Banking Results
- Railway Results
- State PSC Results
- Board/Teaching Results

### If `track=apprenticeship`
- Govt Apprenticeship
- PSU Apprenticeship
- Private Apprenticeship
- ITI Apprenticeship
- Internship for Freshers

### If `track=urgent-hiring`
- Closing Soon Jobs
- Walk-in Interview Jobs
- This Week Hiring
- High Salary Openings
- No Experience Required

## Page 3 Buttons (Final category links)
Map each final button to an existing category URL in WordPress.

Examples:
- `/category/sarkari-naukri/`
- `/category/private-jobs/`
- `/category/work-from-home-jobs/`
- `/category/state-wise-jobs/`
- `/category/10th-pass-jobs/`
- `/category/12th-pass-jobs/`
- `/category/graduate-jobs/`
- `/category/bank-jobs/`
- `/category/ssc-jobs/`
- `/category/railway-jobs/`
- `/category/defence-jobs/`
- `/category/exam-notification/`
- `/category/admit-card/`
- `/category/results/`
- `/category/apprenticeship-jobs/`

---

## 3) High CTR Button Text (Hindi + English Mix)

Use these labels directly on buttons/cards.

## Page 1 (Primary CTA copy)
- **Latest Sarkari Naukri 2026 ->**
- **Private Jobs for Freshers ->**
- **Work From Home Jobs Apply ->**
- **Apne State ki Jobs Dekho ->**
- **Qualification Wise Jobs ->**
- **New Exam Notifications ->**
- **Admit Card Download Updates ->**
- **Latest Result Check Karo ->**
- **Apprenticeship / Internship Openings ->**
- **Urgent Hiring Jobs (Apply Fast) ->**

## Page 2 (Refine CTA copy)
- **10th Pass ke liye Best Jobs ->**
- **12th Pass Direct Recruitment ->**
- **Graduate ke liye Top Vacancies ->**
- **UP/Bihar/MP State Jobs ->**
- **Bank + SSC + Railway Mega Openings ->**
- **Fresher WFH Jobs (No Experience) ->**
- **City Wise Private Jobs ->**
- **Exam Wise Notification Dekho ->**
- **Admit Card Direct Link ->**
- **Result + Cutoff Check ->**

## Page 3 (Final conversion CTA copy)
- **Abhi Apply Karein (Open Category) ->**
- **Direct Official Notification ->**
- **Eligibility + Last Date Dekhein ->**
- **Application Form Link ->**
- **All Jobs in This Category ->**

---

## 4) Ready-to-Use Content + Layout Drafts

These are copy-paste ready page drafts (headlines, sections, and buttons).

## Page 1 Draft (`/jobs-finder/`)

### Hero
**H1:** India ki Top Jobs ek hi jagah - Choose Your Path  
**Subtext:** Sarkari, Private, WFH, Exam, Result - jo chahiye wahi select karo aur direct relevant jobs page pe jao.

### Trust bar
- Daily Updated Listings
- Verified Sources
- Free Job Alerts

### Button grid (2-column mobile-friendly)
- Latest Sarkari Naukri 2026 -> `/jobs-finder/choose/?track=govt-jobs`
- Private Jobs for Freshers -> `/jobs-finder/choose/?track=private-jobs`
- Work From Home Jobs Apply -> `/jobs-finder/choose/?track=wfh-jobs`
- Apne State ki Jobs Dekho -> `/jobs-finder/choose/?track=state-wise`
- Qualification Wise Jobs -> `/jobs-finder/choose/?track=qualification`
- New Exam Notifications -> `/jobs-finder/choose/?track=exam-notification`
- Admit Card Download Updates -> `/jobs-finder/choose/?track=admit-card`
- Latest Result Check Karo -> `/jobs-finder/choose/?track=results`
- Apprenticeship / Internship Openings -> `/jobs-finder/choose/?track=apprenticeship`
- Urgent Hiring Jobs (Apply Fast) -> `/jobs-finder/choose/?track=urgent-hiring`

### Footer microcopy
**Note:** Hum kisi recruitment agency nahi hain; hum sirf latest vacancy updates aur official links provide karte hain.

---

## Page 2 Draft (`/jobs-finder/choose/`)

### Hero
**H1:** Step 2 - Apni Exact Preference Select Karein  
**Subtext:** Neeche se apna category filter chuniye aur direct final jobs page pe jaiye.

### Dynamic section title
- If `track=govt-jobs` -> **Sarkari Naukri Filters**
- If `track=private-jobs` -> **Private Job Filters**
- If `track=wfh-jobs` -> **Remote/WFH Filters**
- If `track=state-wise` -> **State Selection**
- If `track=qualification` -> **Qualification Selection**
- If `track=exam-notification` -> **Exam Notification Selection**
- If `track=admit-card` -> **Admit Card Selection**
- If `track=results` -> **Result Selection**
- If `track=apprenticeship` -> **Apprenticeship Selection**
- If `track=urgent-hiring` -> **Urgent Hiring Selection**

### Button grid examples
(Show the relevant set from Section 2 based on `track`.)

Button link format:
- `/jobs-finder/go/?track=<track>&filter=<selected-filter>`

Example buttons for govt:
- 10th Pass Govt Jobs -> `/jobs-finder/go/?track=govt-jobs&filter=10th`
- 12th Pass Govt Jobs -> `/jobs-finder/go/?track=govt-jobs&filter=12th`
- Graduate Govt Jobs -> `/jobs-finder/go/?track=govt-jobs&filter=graduate`
- Bank / SSC / Railway / Defence -> `/jobs-finder/go/?track=govt-jobs&filter=major-sectors`

### Sticky helper CTA
**Can’t decide?** -> “Show Me Latest Jobs” button to `/category/latest-jobs/`

---

## Page 3 Draft (`/jobs-finder/go/`)

### Hero
**H1:** Final Step - Best Matching Job Categories  
**Subtext:** Aapke selection ke hisaab se curated categories neeche di gayi hain.

### Result summary chip
- “You selected: Govt Jobs > Graduate”

### Final action cards
For selected `track` + `filter`, show 4-8 relevant final category buttons.

Example for `govt-jobs + graduate`:
- SSC CGL Jobs -> `/category/ssc-jobs/`
- Bank PO/Clerk Jobs -> `/category/bank-jobs/`
- State PCS Jobs -> `/category/state-govt-jobs/`
- UPSC Related Jobs -> `/category/upsc-jobs/`
- All Graduate Govt Jobs -> `/category/graduate-jobs/`

### Conversion boosters
- “Last Date Alert” ribbon on cards
- “New” badge for recently updated categories
- Secondary button: **Join Free Job Alert (WhatsApp/Telegram)**

### Compliance note
“Always verify details on official notification before applying.”

---

## 5) URL Mapping Template (fill once, reuse always)

Create a mapping sheet before implementation:

- `track=govt-jobs, filter=10th -> /category/10th-pass-sarkari-jobs/`
- `track=govt-jobs, filter=12th -> /category/12th-pass-sarkari-jobs/`
- `track=govt-jobs, filter=graduate -> /category/graduate-sarkari-jobs/`
- `track=private-jobs, filter=fresher -> /category/private-fresher-jobs/`
- `track=wfh-jobs, filter=part-time -> /category/part-time-work-from-home/`
- `track=results, filter=ssc -> /category/ssc-results/`

Keep this map in one JSON/CSV so page 3 can be fully data-driven.
