// ============================================================
// PHDCCI Himalayan Pharma Conclave & Samman 2026
// products.ts — UPDATED with correct pricing + full documentary
// requirements from PHDCCI_Registration_Fees_2026.xlsx and
// PHDCCI_Documentary_Requirements_2026.pdf
// ============================================================

export type PriceBand = "Large Enterprise" | "Medium Enterprise" | "Small Enterprise / MSME / Individual" | "Complimentary";

export interface Product {
  id: string;
  code: string;
  track: string;
  name: string;
  shortDescription: string;       // card description on /products
  fullDescription: string;        // detail page — who should apply
  price: number;                  // 0 = No Fee
  priceBand: PriceBand;
  priceNote: string;              // shown near price on detail page
  featured: boolean;
  image: string;
  universalMandatoryDocs: string[];   // same for every category
  categoryMandatoryDocs: string[];    // specific to this category
  supportingOptionalDocs: string[];   // optional / strengthening docs
  eligibilityNote?: string;           // special eligibility / disqualification rules
}

// ── Universal mandatory docs – 3 required for ALL categories ──────────────────
// These are injected into each product below but also exported
// so the checkout checklist can render them from a single source of truth.
export const UNIVERSAL_MANDATORY_DOCS: string[] = [
  "GST Returns — last 2 quarters (GSTR-3B or GSTR-1). Individual practitioners not required to be GST-registered may substitute with state medical/professional council registration or employer letter confirming 6+ months active practice. Government institutions are exempt and substitute with appointment letter + departmental authorisation.",
  "Valid manufacturing or operating licence relevant to the category (specific licence stated on each category card). Must be current and valid on date of submission. Government institutions substitute with appointment letter from relevant government department.",
  "Key team members details — full name, designation, mobile number, and one photograph for each person who would be called to the stage at the Gala Night (minimum 1, maximum 5 members).",
];

// ── Price band helper ──────────────────────────────────────────────────────────
// Large Enterprise = ₹7,500 | Medium Enterprise = ₹5,000
// Small / MSME / Individual = ₹3,500 | Complimentary / Govt = ₹0

const products: Product[] = [

  // ══════════════════════════════════════════════════════════════════
  // TRACK A — PUBLIC HEALTH (A1–A7)  |  All government — No Fee
  // ══════════════════════════════════════════════════════════════════

  {
    id: "a1",
    code: "A1",
    track: "Track A – Public Health Recognitions",
    name: "Innovation in Public Health Samman",
    shortDescription:
      "For government health departments, public hospitals, and PPP entities that have implemented a transformative health innovation with measurable beneficiary outcomes.",
    fullDescription:
      "Open to state and district government health departments, government-run public hospitals, and PPP (Public-Private Partnership) health entities that have implemented a transformative innovation in public health delivery. The innovation must have been operationalised and must show measurable improvement in beneficiary numbers or health metrics.",
    price: 0,
    priceBand: "Medium Enterprise",
    priceNote: "No registration fee — government / public sector category",
    featured: true,
    image: "https://images.pexels.com/photos/6823569/pexels-photo-6823569.jpeg",
    universalMandatoryDocs: UNIVERSAL_MANDATORY_DOCS,
    categoryMandatoryDocs: [
      "Government order or project sanction authorising the innovation",
      "Outcome data: beneficiary numbers and health metrics improved",
      "Budget utilization statement for the innovation",
      "Brief description of the innovation — typed in the nomination form (max 300 words)",
    ],
    supportingOptionalDocs: [
      "Media coverage or press release",
      "Before-and-after photographs of implementation",
      "Letter of endorsement from district/state health authority",
    ],
    eligibilityNote:
      "Government institutions are exempt from GST returns and manufacturing licence. Substitute with: appointment letter from the relevant government department confirming current posting + departmental authorisation to participate.",
  },

  {
    id: "a2",
    code: "A2",
    track: "Track A – Public Health Recognitions",
    name: "Best District Hospital Samman",
    shortDescription:
      "For government-run District Hospitals under the State Department of Health and Family Welfare with strong OPD/IPD performance, clinical outcomes, and patient feedback.",
    fullDescription:
      "Open to government-run District Hospitals functioning under the State Department of Health and Family Welfare. Nominees should demonstrate strong patient load management, clinical service quality, and active patient feedback collection through Mera Aspataal or an internal system.",
    price: 0,
    priceBand: "Medium Enterprise",
    priceNote: "No registration fee — government / public sector category",
    featured: false,
    image: "https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg",
    universalMandatoryDocs: UNIVERSAL_MANDATORY_DOCS,
    categoryMandatoryDocs: [
      "NQAS or Kayakalp certification (current, if held)",
      "OPD/IPD load data and bed occupancy statistics (last 12 months)",
      "Key clinical data: deliveries, emergency cases, major procedures",
      "Patient feedback summary — Mera Aspataal or internal system",
    ],
    supportingOptionalDocs: [
      "LaQshya certification (if applicable)",
      "Media coverage or awards received",
      "Photographs of facility",
    ],
    eligibilityNote:
      "Government institutions are exempt from GST returns and manufacturing licence. Substitute with: appointment letter from the relevant government department + departmental authorisation.",
  },

  {
    id: "a3",
    code: "A3",
    track: "Track A – Public Health Recognitions",
    name: "Best Community Health Centre / Sub-Divisional Hospital Samman",
    shortDescription:
      "For government-run CHCs and Sub-Divisional Hospitals demonstrating excellence in referral, institutional delivery, specialist services, and patient care.",
    fullDescription:
      "Open to government-run Community Health Centres (CHCs) and Sub-Divisional Hospitals. Nominees must provide referral statistics, institutional delivery data, and a list of specialist services available with frequency of availability.",
    price: 0,
    priceBand: "Small Enterprise / MSME / Individual",
    priceNote: "No registration fee — government / public sector category",
    featured: false,
    image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg",
    universalMandatoryDocs: UNIVERSAL_MANDATORY_DOCS,
    categoryMandatoryDocs: [
      "NQAS or LaQshya certification (if held)",
      "Referral and institutional delivery data (last 12 months)",
      "Specialist services available — list with frequency of availability",
      "Patient feedback summary",
    ],
    supportingOptionalDocs: [
      "Photographs of facility",
      "Media or departmental recognition",
      "Outreach programme details",
    ],
    eligibilityNote:
      "Government institutions substitute GST returns and manufacturing licence with appointment letter + departmental authorisation.",
  },

  {
    id: "a4",
    code: "A4",
    track: "Track A – Public Health Recognitions",
    name: "Best Primary Health Centre Samman",
    shortDescription:
      "For government-run PHCs under the National Health Mission with strong immunisation coverage, ANC/PNC records, and essential medicines availability.",
    fullDescription:
      "Open to government-run Primary Health Centres (PHCs) functioning under the National Health Mission. The nomination focuses on immunisation coverage, antenatal/postnatal care, and availability of essential medicines in the catchment area.",
    price: 0,
    priceBand: "Small Enterprise / MSME / Individual",
    priceNote: "No registration fee — government / public sector category",
    featured: false,
    image: "https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg",
    universalMandatoryDocs: UNIVERSAL_MANDATORY_DOCS,
    categoryMandatoryDocs: [
      "NQAS certification or Kayakalp assessment score (current)",
      "Immunisation coverage data for catchment area (last 12 months)",
      "ANC and PNC registration and follow-up records",
      "Essential medicines availability register",
    ],
    supportingOptionalDocs: [
      "Photographs of facility and outreach activities",
      "Patient feedback or community testimonials",
      "Departmental recognition or awards",
    ],
    eligibilityNote:
      "Government institutions substitute GST returns and manufacturing licence with appointment letter + departmental authorisation.",
  },

  {
    id: "a5",
    code: "A5",
    track: "Track A – Public Health Recognitions",
    name: "Best Ayushman Arogya Mandir Samman",
    shortDescription:
      "For Ayushman Arogya Mandirs (Health and Wellness Centres) functioning under the NHM with strong ABHA enrolment, NCD screening, and wellness programme records.",
    fullDescription:
      "Open to Ayushman Arogya Mandirs (formerly Health and Wellness Centres) functioning under the National Health Mission. Nominees must demonstrate strong performance on the NHM dashboard, ABHA enrolment, NCD screening, and wellness programme attendance.",
    price: 0,
    priceBand: "Small Enterprise / MSME / Individual",
    priceNote: "No registration fee — government / public sector category",
    featured: false,
    image: "https://images.pexels.com/photos/36885032/pexels-photo-36885032.jpeg",
    universalMandatoryDocs: UNIVERSAL_MANDATORY_DOCS,
    categoryMandatoryDocs: [
      "NHM dashboard performance extract for the facility (last 12 months)",
      "ABHA (Ayushman Bharat Health Account) enrolment numbers",
      "NCD screening statistics: hypertension, diabetes, cancer screenings",
      "Wellness programme attendance records",
    ],
    supportingOptionalDocs: [
      "Photographs of facility",
      "Testimonials from community members",
      "ABDM digital records adoption evidence",
    ],
    eligibilityNote:
      "Government institutions substitute GST returns and manufacturing licence with appointment letter of Community Health Officer + departmental authorisation.",
  },

  {
    id: "a6",
    code: "A6",
    track: "Track A – Public Health Recognitions",
    name: "Excellence in Public Health Infrastructure Development Samman",
    shortDescription:
      "For state/district governments and PPP entities that have built or upgraded public health infrastructure with documented utilisation and capacity data.",
    fullDescription:
      "Open to state and district governments and PPP entities responsible for building or significantly upgrading public health infrastructure. Nominees must provide project sanction documents, completion or status reports, and post-completion utilisation data.",
    price: 0,
    priceBand: "Medium Enterprise",
    priceNote: "No registration fee — government / public sector category",
    featured: false,
    image: "https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg",
    universalMandatoryDocs: UNIVERSAL_MANDATORY_DOCS,
    categoryMandatoryDocs: [
      "Government order or project sanction document",
      "Project completion certificate or current status report",
      "Infrastructure details: facility type, beds/capacity added, equipment installed",
      "Utilization data post-completion (OPD/IPD load, services delivered)",
    ],
    supportingOptionalDocs: [
      "Photographs: before and after",
      "Media coverage",
      "Green or climate-resilient design certifications",
    ],
    eligibilityNote:
      "Government institutions substitute GST returns and manufacturing licence with appointment letter of authorised official + departmental authorisation.",
  },

  {
    id: "a7",
    code: "A7",
    track: "Track A – Public Health Recognitions",
    name: "Frontline Champion Samman – ANM / ASHA Worker",
    shortDescription:
      "For individual ANMs and ASHA workers under the NHM who have demonstrated outstanding performance in immunisation, institutional deliveries, and community health.",
    fullDescription:
      "Open to individual Auxiliary Nurse Midwives (ANMs) and ASHA workers operating under the National Health Mission. Recognises grassroots healthcare delivery performance including immunisation coverage, institutional deliveries, and community health outcomes within the worker's catchment area.",
    price: 0,
    priceBand: "Small Enterprise / MSME / Individual",
    priceNote: "No registration fee — government / public sector individual category",
    featured: false,
    image: "https://images.pexels.com/photos/6303531/pexels-photo-6303531.jpeg",
    universalMandatoryDocs: UNIVERSAL_MANDATORY_DOCS,
    categoryMandatoryDocs: [
      "Performance records from supervisory ANM or Block Medical Officer",
      "Immunisation and institutional delivery data for the worker's catchment (last 12 months)",
      "Letter of recommendation from District CMO or Block MO",
      "Service record: years in post, attendance record",
    ],
    supportingOptionalDocs: [
      "Community testimonials or letters from beneficiaries",
      "Any departmental award or recognition received",
      "Media coverage",
    ],
    eligibilityNote:
      "Individual ANMs and ASHA workers substitute GST returns with government appointment letter from health department. Manufacturing licence requirement not applicable.",
  },

  // ══════════════════════════════════════════════════════════════════
  // TRACK B — PRIVATE HEALTHCARE (B1–B6)
  // Licence: Clinical Establishment Registration Certificate (CER Act 2010)
  // Startups: Certificate of Incorporation from MCA
  // ══════════════════════════════════════════════════════════════════

  {
    id: "b1",
    code: "B1",
    track: "Track B – Private Healthcare Recognitions",
    name: "Technology and Innovation Leader Samman",
    shortDescription:
      "For private hospitals, diagnostic chains, and healthcare institutions that have adopted and operationalised healthcare technology with measurable clinical or operational improvement.",
    fullDescription:
      "Open to private hospitals, diagnostic chains, and healthcare institutions that have adopted and operationalised healthcare technology — including AI diagnostics, robotic surgery, telemedicine platforms, or hospital information systems. Nominees must present evidence of adoption and before-vs-after improvement metrics.",
    price: 7500,
    priceBand: "Large Enterprise",
    priceNote: "Registration fee: ₹7,500 (GST extra as applicable)",
    featured: true,
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg",
    universalMandatoryDocs: UNIVERSAL_MANDATORY_DOCS,
    categoryMandatoryDocs: [
      "Clinical Establishment Registration Certificate (CER Act 2010 or state-level equivalent)",
      "Description of technology implemented — typed in form (max 300 words)",
      "Evidence of adoption: procurement invoice or IT deployment record",
      "Outcome data: clinical or operational improvement metrics before vs. after",
      "Staff training records for the technology",
    ],
    supportingOptionalDocs: [
      "NABH accreditation certificate",
      "Media coverage or published case study",
      "Patient feedback on the technology",
    ],
  },

  {
    id: "b2",
    code: "B2",
    track: "Track B – Private Healthcare Recognitions",
    name: "Startup of the Year Samman",
    shortDescription:
      "For private healthcare startups incorporated after 2019 with demonstrated traction in revenue, user numbers, or health outcomes and a compelling pitch.",
    fullDescription:
      "Open to private healthcare startups registered in India and incorporated after 2019. Nominees must demonstrate traction through revenue data, user numbers, or health outcome metrics, and submit a brief pitch deck of up to 10 slides.",
    price: 3500,
    priceBand: "Small Enterprise / MSME / Individual",
    priceNote: "Registration fee: ₹3,500 (GST extra as applicable)",
    featured: false,
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
    universalMandatoryDocs: UNIVERSAL_MANDATORY_DOCS,
    categoryMandatoryDocs: [
      "Certificate of Incorporation (MCA portal) — confirms incorporation after 2019",
      "DPIIT Startup India recognition certificate (if held)",
      "Traction evidence: revenue data, user numbers, or health outcome metrics (last 12 months)",
      "Brief pitch deck — PDF, max 10 slides",
      "Product or service description — typed in form (max 300 words)",
    ],
    supportingOptionalDocs: [
      "Media coverage or investor validation letters",
      "Press mentions or awards received",
      "Demo video link (YouTube/Drive — do not upload file)",
    ],
  },

  {
    id: "b3",
    code: "B3",
    track: "Track B – Private Healthcare Recognitions",
    name: "Clinical Excellence Leader Samman",
    shortDescription:
      "For NABH-accredited or NABH-pending private hospitals and specialty clinics with a documented clinical audit programme and strong outcome data.",
    fullDescription:
      "Open to NABH-accredited or NABH-pending private hospitals and specialty clinics that run a structured clinical audit programme. Nominees must present clinical outcome data including complication rates, readmission rates, and key procedure metrics, along with a sample audit report.",
    price: 5000,
    priceBand: "Medium Enterprise",
    priceNote: "Registration fee: ₹5,000 (GST extra as applicable)",
    featured: false,
    image: "https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg",
    universalMandatoryDocs: UNIVERSAL_MANDATORY_DOCS,
    categoryMandatoryDocs: [
      "Clinical Establishment Registration Certificate",
      "NABH accreditation certificate (current) or NABH application acknowledgement",
      "Clinical outcome data: complication rates, readmission rates, key procedure metrics",
      "Sample clinical audit report (last 12 months)",
      "Case studies of complex or breakthrough procedures — anonymised, max 3",
    ],
    supportingOptionalDocs: [
      "Media coverage or peer recognition",
      "Published outcomes or research from the institution",
      "International accreditation (JCI, etc.) if held",
    ],
  },

  {
    id: "b4",
    code: "B4",
    track: "Track B – Private Healthcare Recognitions",
    name: "Patient Experience Leader Samman",
    shortDescription:
      "For private hospitals and clinics with a minimum of 200 verified patient reviews across at least 2 digital platforms and evidence of feedback-driven improvements.",
    fullDescription:
      "Open to private hospitals and clinics that have accumulated a minimum of 200 verified patient reviews across at least two digital platforms (e.g. Google, Practo). Nominees must show an aggregate rating summary and demonstrate improvement actions taken in response to patient feedback.",
    price: 5000,
    priceBand: "Medium Enterprise",
    priceNote: "Registration fee: ₹5,000 (GST extra as applicable)",
    featured: false,
    image: "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg",
    universalMandatoryDocs: UNIVERSAL_MANDATORY_DOCS,
    categoryMandatoryDocs: [
      "Clinical Establishment Registration Certificate",
      "Screenshots of Google / Practo / other platform ratings — last 12 months (PDF)",
      "Aggregate rating and total verified review count (must be 200+ reviews minimum)",
      "Patient feedback summary highlighting most common positive themes",
      "Evidence of improvement actions taken in response to patient feedback",
    ],
    supportingOptionalDocs: [
      "Response rate to online reviews (screenshot)",
      "Internal patient satisfaction survey data",
      "Media coverage mentioning patient experience",
    ],
  },

  {
    id: "b5",
    code: "B5",
    track: "Track B – Private Healthcare Recognitions",
    name: "Healthcare Employer of the Year Samman",
    shortDescription:
      "For private hospitals with minimum 100 full-time employees demonstrating excellence in training, employee welfare, and gender diversity.",
    fullDescription:
      "Open to private hospitals and healthcare organisations with a minimum of 100 full-time employees. Nominees must demonstrate excellence in staff training and CME, employee welfare programmes (health insurance, safety, wellbeing), and gender diversity across all levels.",
    price: 7500,
    priceBand: "Large Enterprise",
    priceNote: "Registration fee: ₹7,500 (GST extra as applicable)",
    featured: false,
    image: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg",
    universalMandatoryDocs: UNIVERSAL_MANDATORY_DOCS,
    categoryMandatoryDocs: [
      "Clinical Establishment Registration Certificate",
      "Total employee count and 2-year attrition rate (HR statement)",
      "Training and CME records — last 12 months (training register summary)",
      "Employee welfare programme documentation (health insurance, safety, wellbeing)",
      "Gender diversity data: proportion of women at all levels",
    ],
    supportingOptionalDocs: [
      "Third-party employer rating (Glassdoor, AmbitionBox — screenshot)",
      "Employee testimonials — anonymised, max 3",
      "Awards or recognition as employer",
    ],
  },

  {
    id: "b6",
    code: "B6",
    track: "Track B – Private Healthcare Recognitions",
    name: "Medical Value Travel Leader Samman",
    shortDescription:
      "For private hospitals treating international patients with documented medical tourism activity, international accreditation, and concierge support infrastructure.",
    fullDescription:
      "Open to private hospitals that treat international patients and have documented evidence of medical tourism activity. NABH International or JCI accreditation is a key differentiator. Nominees must provide international patient numbers, testimonials, and evidence of empanelment with international health insurers or medical travel agencies.",
    price: 7500,
    priceBand: "Large Enterprise",
    priceNote: "Registration fee: ₹7,500 (GST extra as applicable)",
    featured: false,
    image: "https://images.pexels.com/photos/305565/pexels-photo-305565.jpeg",
    universalMandatoryDocs: UNIVERSAL_MANDATORY_DOCS,
    categoryMandatoryDocs: [
      "Clinical Establishment Registration Certificate",
      "Number of international patients treated — last 12 months (register extract)",
      "NABH International or JCI accreditation certificate (if held)",
      "Testimonials from international patients — minimum 3, with consent",
      "Empanelment with international health insurance or medical travel agency",
    ],
    supportingOptionalDocs: [
      "Range of specialties offered to international patients",
      "Language and concierge support infrastructure details",
      "Media coverage in international publications",
    ],
  },

  // ══════════════════════════════════════════════════════════════════
  // TRACK C — AYUSH (C1–C11)
  // Licence: AYUSH hospital/clinic registration (state AYUSH dept)
  //          Manufacturers: State/Central AYUSH Mfg Licence (Schedule T GMP)
  //          Individuals: State AYUSH Medical Council registration
  // ══════════════════════════════════════════════════════════════════

  {
    id: "c1",
    code: "C1",
    track: "Track C – AYUSH Recognitions",
    name: "Best Wellness Initiative Samman",
    shortDescription:
      "For AYUSH wellness centres, yoga studios, naturopathy centres, and wellness resorts with documented client reach, staff qualifications, and satisfaction data.",
    fullDescription:
      "Open to AYUSH wellness centres, yoga studios, naturopathy centres, and wellness resorts. Nominees must demonstrate a structured wellness initiative with documented client intake records, satisfaction surveys or testimonials from at least 10 clients, and a list of certified instructors or therapists.",
    price: 3500,
    priceBand: "Small Enterprise / MSME / Individual",
    priceNote: "Registration fee: ₹3,500 (GST extra as applicable)",
    featured: true,
    image: "https://images.pexels.com/photos/1666667/pexels-photo-1666667.jpeg",
    universalMandatoryDocs: UNIVERSAL_MANDATORY_DOCS,
    categoryMandatoryDocs: [
      "AYUSH wellness centre registration / state licence",
      "Programme schedule and client intake records — last 12 months",
      "Client satisfaction survey results or testimonials — minimum 10",
      "Community reach data: number of clients served",
      "Staff qualifications: certified instructors/therapists list",
    ],
    supportingOptionalDocs: [
      "Photographs of facility and programmes",
      "Media coverage or awards",
      "Outcome data: participant health improvement metrics",
    ],
  },

  {
    id: "c2",
    code: "C2",
    track: "Track C – AYUSH Recognitions",
    name: "Best Yoga Instructor Samman",
    shortDescription:
      "For certified Yoga Instructors from government programmes or private practice with minimum 3 years of experience, recognised certification, and participant testimonials.",
    fullDescription:
      "Open to certified Yoga Instructors from government-run programmes or private practice with a minimum of 3 years of teaching experience. A recognised certification from QCI, the Yoga Certification Board, or an equivalent body is required, along with participant feedback from at least 10 individuals.",
    price: 3500,
    priceBand: "Small Enterprise / MSME / Individual",
    priceNote: "Registration fee: ₹3,500 (GST extra as applicable)",
    featured: false,
    image: "https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg",
    universalMandatoryDocs: UNIVERSAL_MANDATORY_DOCS,
    categoryMandatoryDocs: [
      "Yoga certification (QCI / Yoga Certification Board / recognized body)",
      "Proof of teaching experience — minimum 3 years (employer letter or class attendance records)",
      "Participant feedback or testimonials — minimum 10",
      "Council/board registration certificate (if applicable)",
      "Description of teaching methodology and community impact — typed in form (max 200 words)",
    ],
    supportingOptionalDocs: [
      "Media coverage or awards received",
      "Participation in government wellness programmes",
      "Photographs of classes",
    ],
    eligibilityNote:
      "Individual yoga instructors not required to be GST-registered may substitute GST returns with state professional council registration or employer letter confirming 6+ months active practice.",
  },

  {
    id: "c3",
    code: "C3",
    track: "Track C – AYUSH Recognitions",
    name: "Best Panchakarma Therapist Samman",
    shortDescription:
      "For certified Panchakarma Therapists in government or private AYUSH settings with a BAMS or equivalent qualification and documented patient outcomes.",
    fullDescription:
      "Open to certified Panchakarma Therapists working in government or private AYUSH hospitals, clinics, or wellness centres. Nominees must hold a BAMS degree or equivalent AYUSH qualification and a Panchakarma specialisation certificate, and must provide patient testimonials with written consent from at least 5 patients.",
    price: 3500,
    priceBand: "Small Enterprise / MSME / Individual",
    priceNote: "Registration fee: ₹3,500 (GST extra as applicable)",
    featured: false,
    image: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg",
    universalMandatoryDocs: UNIVERSAL_MANDATORY_DOCS,
    categoryMandatoryDocs: [
      "BAMS degree or equivalent AYUSH qualification",
      "Panchakarma training or specialisation certificate",
      "Institutional letter confirming active clinical practice",
      "Patient testimonials — minimum 5, with written consent",
      "Description of practice and contribution — typed in form (max 200 words)",
    ],
    supportingOptionalDocs: [
      "Media coverage or peer recognition",
      "Evidence of training junior therapists",
      "Photographs from practice (with patient consent)",
    ],
    eligibilityNote:
      "Individual practitioners not required to be GST-registered may substitute GST returns with state AYUSH Medical Council registration or employer letter.",
  },

  {
    id: "c4",
    code: "C4",
    track: "Track C – AYUSH Recognitions",
    name: "Best AYUSH Doctor – Government Sector Samman",
    shortDescription:
      "For AYUSH doctors employed by government departments or hospitals (all systems eligible) with strong patient outcome records and a CMO/departmental recommendation.",
    fullDescription:
      "Open to AYUSH doctors employed by government departments, hospitals, or Ayushman Arogya Mandirs. All AYUSH systems are eligible — nominees must specify their system in the nomination form. A letter of recommendation from the departmental head or CMO is mandatory.",
    price: 3500,
    priceBand: "Small Enterprise / MSME / Individual",
    priceNote: "Registration fee: ₹3,500 (GST extra as applicable)",
    featured: false,
    image: "https://images.pexels.com/photos/590045/pexels-photo-590045.jpeg",
    universalMandatoryDocs: UNIVERSAL_MANDATORY_DOCS,
    categoryMandatoryDocs: [
      "Government appointment letter",
      "AYUSH degree certificate (BAMS / BHMS / BUMS / BSMS or equivalent)",
      "State AYUSH Medical Council registration certificate",
      "Patient outcome records or departmental performance data — last 12 months",
      "Letter of recommendation from departmental head or CMO",
    ],
    supportingOptionalDocs: [
      "Media coverage or awards",
      "Contributions to government health programmes",
      "Community outreach activity records",
    ],
    eligibilityNote:
      "Government-employed doctors are exempt from the GST returns requirement. Substitute with government appointment letter from health department.",
  },

  {
    id: "c5",
    code: "C5",
    track: "Track C – AYUSH Recognitions",
    name: "Best AYUSH Doctor – Private Sector Samman",
    shortDescription:
      "For AYUSH doctors in private practice or private hospitals with minimum 5 years of clinical experience, patient testimonials, and council registration.",
    fullDescription:
      "Open to AYUSH doctors in private practice or employed by private AYUSH hospitals, with a minimum of 5 years of clinical experience. All AYUSH systems are eligible. Nominees must hold State AYUSH Medical Council registration and provide at least 5 patient testimonials with written consent.",
    price: 3500,
    priceBand: "Small Enterprise / MSME / Individual",
    priceNote: "Registration fee: ₹3,500 (GST extra as applicable)",
    featured: false,
    image: "https://images.pexels.com/photos/935949/pexels-photo-935949.jpeg",
    universalMandatoryDocs: UNIVERSAL_MANDATORY_DOCS,
    categoryMandatoryDocs: [
      "AYUSH degree certificate (BAMS / BHMS / BUMS / BSMS or equivalent)",
      "State AYUSH Medical Council registration certificate",
      "Clinic or hospital registration certificate",
      "Patient testimonials — minimum 5, with written consent",
      "Description of clinical practice and patient impact — typed in form (max 200 words)",
    ],
    supportingOptionalDocs: [
      "Media coverage or peer recognition",
      "Published articles or case studies",
      "Contribution to AYUSH education or public awareness",
    ],
  },

  {
    id: "c6",
    code: "C6",
    track: "Track C – AYUSH Recognitions",
    name: "Best AYUSH Healthcare Institution Samman",
    shortDescription:
      "For registered AYUSH hospitals (IPD) and clinics (OPD) with minimum 2 years of operation, patient load data, and qualified staff register.",
    fullDescription:
      "Open to registered AYUSH hospitals providing in-patient services (IPD) and AYUSH clinics providing out-patient services (OPD) with at least 2 years of operational history. Nominees must present patient load data for the last 12 months and a staff qualification register.",
    price: 5000,
    priceBand: "Medium Enterprise",
    priceNote: "Registration fee: ₹5,000 (GST extra as applicable)",
    featured: false,
    image: "https://images.pexels.com/photos/668353/pexels-photo-668353.jpeg",
    universalMandatoryDocs: UNIVERSAL_MANDATORY_DOCS,
    categoryMandatoryDocs: [
      "AYUSH hospital or clinic registration certificate — state or central",
      "NABH AYUSH accreditation certificate (if held) or application acknowledgement",
      "Patient load data: OPD/IPD numbers — last 12 months",
      "Staff qualification register: AYUSH doctors and supporting staff",
      "Photographs of facility — interior and exterior",
    ],
    supportingOptionalDocs: [
      "Community health outreach activity records",
      "Media coverage or awards",
      "Patient testimonials — minimum 5",
    ],
  },

  {
    id: "c7",
    code: "C7",
    track: "Track C – AYUSH Recognitions",
    name: "AYUSH Innovation and Research Samman",
    shortDescription:
      "For individual researchers, AYUSH research institutions, and R&D entities with published papers, patent filings, or new drug approvals as tangible research output.",
    fullDescription:
      "Open to individual researchers, AYUSH research institutions, and R&D entities with documented research output in the AYUSH domain. Evidence of tangible research output — patent filing, new drug approval, or peer-reviewed publication — is mandatory. Nominees must submit copies of first pages of at least 2 published papers.",
    price: 5000,
    priceBand: "Medium Enterprise",
    priceNote: "Registration fee: ₹5,000 (GST extra as applicable)",
    featured: false,
    image: "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg",
    universalMandatoryDocs: UNIVERSAL_MANDATORY_DOCS,
    categoryMandatoryDocs: [
      "Institutional affiliation letter or research organisation registration",
      "Published research papers — copies of first pages (minimum 2)",
      "Research output evidence: patent filing, or new drug approval, or peer-reviewed publication",
      "Description of research significance — typed in form (max 300 words)",
      "Collaboration agreement with academic or research bodies (if applicable)",
    ],
    supportingOptionalDocs: [
      "Citation data for published papers",
      "Media coverage or awards",
      "Impact on clinical AYUSH practice",
    ],
  },

  {
    id: "c8",
    code: "C8",
    track: "Track C – AYUSH Recognitions",
    name: "AYUSH Startup of the Year Samman",
    shortDescription:
      "For AYUSH sector startups incorporated after 2019 with demonstrated traction in revenue, user numbers, or health outcomes and a compelling pitch overview.",
    fullDescription:
      "Open to AYUSH sector startups registered in India and incorporated after 2019. Nominees must demonstrate traction and submit a brief pitch overview (PDF, max 8 slides). FSSAI or AYUSH licence is required if applicable to the product or service.",
    price: 3500,
    priceBand: "Small Enterprise / MSME / Individual",
    priceNote: "Registration fee: ₹3,500 (GST extra as applicable)",
    featured: false,
    image: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg",
    universalMandatoryDocs: UNIVERSAL_MANDATORY_DOCS,
    categoryMandatoryDocs: [
      "Certificate of Incorporation or business registration — confirms incorporation after 2019",
      "FSSAI or AYUSH licence (if applicable to the product/service)",
      "Traction evidence: revenue data, user numbers, or health outcome metrics",
      "Product or service description — typed in form (max 300 words)",
      "Brief pitch overview — PDF, max 8 slides",
    ],
    supportingOptionalDocs: [
      "Media coverage or investor validation",
      "DPIIT Startup India recognition (if held)",
      "Testimonials from users or healthcare professionals",
    ],
  },

  {
    id: "c9",
    code: "C9",
    track: "Track C – AYUSH Recognitions",
    name: "Best AYUSH Pharmacy Samman",
    shortDescription:
      "For licensed AYUSH pharmaceutical manufacturers compliant with Schedule T GMP, with quality testing reports and a signed no-sample-failure declaration.",
    fullDescription:
      "Open to licensed AYUSH pharmaceutical manufacturers operating under State or Central AYUSH Manufacturing Licence with Schedule T GMP compliance. Nominees must provide a product list, GMP compliance certificate, quality testing reports from the last 12 months, and a signed no-sample-failure declaration.",
    price: 5000,
    priceBand: "Medium Enterprise",
    priceNote: "Registration fee: ₹5,000 (GST extra as applicable)",
    featured: false,
    image: "https://images.pexels.com/photos/2449543/pexels-photo-2449543.jpeg",
    universalMandatoryDocs: UNIVERSAL_MANDATORY_DOCS,
    categoryMandatoryDocs: [
      "State or Central AYUSH Manufacturing Licence (Schedule T)",
      "GMP compliance certificate — Schedule T or equivalent (current)",
      "Product list with registration details — all currently manufactured AYUSH products",
      "Quality testing reports from in-house or NABL-accredited laboratory (last 12 months)",
      "No sample-failure declaration — signed on company letterhead",
    ],
    supportingOptionalDocs: [
      "Media or industry recognition",
      "Export evidence (if applicable)",
      "R&D or new product development documentation",
    ],
  },

  {
    id: "c10",
    code: "C10",
    track: "Track C – AYUSH Recognitions",
    name: "Best AYUSH Entrepreneur Samman",
    shortDescription:
      "For founders or promoters of registered AYUSH manufacturing companies who have played a primary leadership role and demonstrated significant business growth.",
    fullDescription:
      "Open to founders or promoters of registered AYUSH manufacturing companies who have personally led the company's growth. CA-certified audited financial statements for the last 3 years, revenue growth data, and a description of the entrepreneurial journey are mandatory.",
    price: 5000,
    priceBand: "Medium Enterprise",
    priceNote: "Registration fee: ₹5,000 (GST extra as applicable)",
    featured: false,
    image: "https://images.pexels.com/photos/4652058/pexels-photo-4652058.jpeg",
    universalMandatoryDocs: UNIVERSAL_MANDATORY_DOCS,
    categoryMandatoryDocs: [
      "State or Central AYUSH Manufacturing Licence",
      "Business registration certificate",
      "Audited financial statements — last 3 years (CA-certified)",
      "Description of entrepreneurial journey and company built — typed in form (max 300 words)",
      "Employee count and revenue growth data",
    ],
    supportingOptionalDocs: [
      "Media coverage or industry recognition",
      "Awards or honours received",
      "Export achievements (if applicable)",
    ],
  },

  {
    id: "c11",
    code: "C11",
    track: "Track C – AYUSH Recognitions",
    name: "Best AYUSH Exporter Samman",
    shortDescription:
      "For registered AYUSH product exporters with documented export revenues for 2 financial years, an IEC certificate, and FSSAI or WHO-GMP export compliance.",
    fullDescription:
      "Open to registered AYUSH product exporters with documented export revenues for the preceding 2 financial years. Nominees must hold an IEC (Import Export Code) certificate and a FSSAI No Objection Certificate for export or a WHO-GMP export certificate. CA-certified export revenue data is mandatory.",
    price: 7500,
    priceBand: "Large Enterprise",
    priceNote: "Registration fee: ₹7,500 (GST extra as applicable)",
    featured: false,
    image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
    universalMandatoryDocs: UNIVERSAL_MANDATORY_DOCS,
    categoryMandatoryDocs: [
      "State or Central AYUSH Manufacturing Licence",
      "IEC (Import Export Code) certificate",
      "FSSAI No Objection Certificate for export or WHO-GMP export certificate",
      "Export revenue data — last 2 financial years (CA-certified or bank statement)",
      "Destination country list and product categories exported",
    ],
    supportingOptionalDocs: [
      "International supply or distributor agreements (redacted)",
      "Compliance certificates from destination country food authorities",
      "Media coverage in export markets",
    ],
  },

  // ══════════════════════════════════════════════════════════════════
  // TRACK D — HEALTHCARE MANUFACTURERS (D1a–D8)
  // Licence: GMP-compliant Manufacturing Licence (CDSCO or State Drug Licensing Authority)
  // Disqualification: Any pending/recently issued sample-failure orders (last 24 months) = ineligible
  // ══════════════════════════════════════════════════════════════════

  {
    id: "d1a",
    code: "D1a",
    track: "Track D – Healthcare Manufacturers Recognitions",
    name: "Outstanding Business Growth Samman – Industry Leader (above INR 500 Cr)",
    shortDescription:
      "For pharma, AYUSH, or medical device manufacturers with annual turnover above INR 500 Crores, audited financials, and a 3-year revenue CAGR statement.",
    fullDescription:
      "Open to pharma, AYUSH, or medical device manufacturers with annual turnover above INR 500 Crores. Nominees must provide CA-certified audited financial statements for FY 2022-23, 2023-24, and 2024-25, a single-page 3-year CAGR calculation, and a signed no-sample-failure declaration.",
    price: 7500,
    priceBand: "Large Enterprise",
    priceNote: "Registration fee: ₹7,500 (GST extra as applicable)",
    featured: true,
    image: "https://images.pexels.com/photos/7821486/pexels-photo-7821486.jpeg",
    universalMandatoryDocs: UNIVERSAL_MANDATORY_DOCS,
    categoryMandatoryDocs: [
      "Manufacturing Licence — CDSCO or State Drug Licensing Authority (current, GMP-compliant)",
      "Audited financial statements — FY 2022-23, 2023-24, 2024-25 (CA-certified)",
      "Revenue CAGR calculation — single-page statement showing 3-year turnover and CAGR",
      "Product list: all pharmaceutical / AYUSH / medical device products manufactured",
      "No sample-failure declaration — signed on company letterhead",
    ],
    supportingOptionalDocs: [
      "DMF filings and ANDA approvals (copies)",
      "New GMP or international regulatory certifications obtained",
      "Export invoices or FOB revenue statement (if export activity)",
    ],
    eligibilityNote:
      "Any manufacturer with pending or recently issued domestic or international sample-failure orders in the last 24 months is NOT eligible.",
  },

  {
    id: "d1b",
    code: "D1b",
    track: "Track D – Healthcare Manufacturers Recognitions",
    name: "Outstanding Business Growth Samman – Mid-Scale Enterprise (INR 100–500 Cr)",
    shortDescription:
      "For pharma, AYUSH, or medical device manufacturers with annual turnover between INR 100–500 Crores with audited financials and documented CAGR over 3 years.",
    fullDescription:
      "Open to pharma, AYUSH, or medical device manufacturers with annual turnover between INR 100 Crores and INR 500 Crores. Same documentary requirements as the Industry Leader tier — CA-certified financials for 3 years, CAGR calculation, product list, and no-sample-failure declaration.",
    price: 5000,
    priceBand: "Medium Enterprise",
    priceNote: "Registration fee: ₹5,000 (GST extra as applicable)",
    featured: false,
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
    universalMandatoryDocs: UNIVERSAL_MANDATORY_DOCS,
    categoryMandatoryDocs: [
      "Manufacturing Licence — CDSCO or State Drug Licensing Authority (current, GMP-compliant)",
      "Audited financial statements — FY 2022-23, 2023-24, 2024-25 (CA-certified)",
      "Revenue CAGR calculation — single-page statement showing 3-year turnover and CAGR",
      "Product list: all pharmaceutical / AYUSH / medical device products manufactured",
      "No sample-failure declaration — signed on company letterhead",
    ],
    supportingOptionalDocs: [
      "DMF filings and ANDA approvals (copies)",
      "New GMP or international regulatory certifications obtained",
      "Export invoices or FOB revenue statement (if export activity)",
    ],
    eligibilityNote:
      "Any manufacturer with pending or recently issued sample-failure orders in the last 24 months is NOT eligible.",
  },

  {
    id: "d1c",
    code: "D1c",
    track: "Track D – Healthcare Manufacturers Recognitions",
    name: "Outstanding Business Growth Samman – Emerging Enterprise (up to INR 100 Cr)",
    shortDescription:
      "For pharma, AYUSH, or medical device manufacturers with annual turnover up to INR 100 Crores. MSMEs especially encouraged to apply.",
    fullDescription:
      "Open to pharma, AYUSH, or medical device manufacturers with annual turnover up to INR 100 Crores. MSMEs are especially encouraged. The nomination requires CA-certified financial statements for 3 years, a CAGR statement, product list, and a no-sample-failure declaration.",
    price: 3500,
    priceBand: "Small Enterprise / MSME / Individual",
    priceNote: "Registration fee: ₹3,500 (GST extra as applicable)",
    featured: false,
    image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg",
    universalMandatoryDocs: UNIVERSAL_MANDATORY_DOCS,
    categoryMandatoryDocs: [
      "Manufacturing Licence — CDSCO or State Drug Licensing Authority (current, GMP-compliant)",
      "Audited financial statements — FY 2022-23, 2023-24, 2024-25 (CA-certified)",
      "Revenue CAGR calculation — single-page statement showing 3-year turnover and CAGR",
      "Product list: all pharmaceutical / AYUSH / medical device products manufactured",
      "No sample-failure declaration — signed on company letterhead",
    ],
    supportingOptionalDocs: [
      "DMF filings and ANDA approvals (copies)",
      "New GMP or international regulatory certifications obtained",
      "Export invoices or FOB revenue statement (if export activity)",
    ],
    eligibilityNote:
      "Any manufacturer with pending or recently issued sample-failure orders in the last 24 months is NOT eligible.",
  },

  {
    id: "d2a",
    code: "D2a",
    track: "Track D – Healthcare Manufacturers Recognitions",
    name: "Excellence in Global Representation Samman – Industry Leader (above INR 500 Cr)",
    shortDescription:
      "For pharma or medical device manufacturers above INR 500 Crores with documented presence in regulated international markets and WHO-GMP or USFDA/EMA/MHRA approvals.",
    fullDescription:
      "Open to pharma or medical device manufacturers above INR 500 Crores with documented presence in regulated international markets. WHO-GMP certificate for export OR USFDA/EMA/MHRA approval letters are mandatory. CA-certified export revenues for FY 2023-24 and 2024-25 must be submitted.",
    price: 7500,
    priceBand: "Large Enterprise",
    priceNote: "Registration fee: ₹7,500 (GST extra as applicable)",
    featured: false,
    image: "https://images.pexels.com/photos/3943903/pexels-photo-3943903.jpeg",
    universalMandatoryDocs: UNIVERSAL_MANDATORY_DOCS,
    categoryMandatoryDocs: [
      "Manufacturing Licence — CDSCO or State Drug Licensing Authority",
      "Export revenue figures — FY 2023-24 and FY 2024-25 (CA-certified or audited P&L extract)",
      "Destination country and product category list — table format",
      "No sample-failure declaration — signed on company letterhead",
      "WHO-GMP certificate for export (if held) OR USFDA / EMA / MHRA approval letters",
    ],
    supportingOptionalDocs: [
      "International government procurement or supply agreements (redacted)",
      "DMF filing acknowledgements and ANDA approval letters",
      "Compliance certificates from destination market drug authorities",
    ],
    eligibilityNote:
      "Any manufacturer with pending or recently issued sample-failure orders in the last 24 months is NOT eligible.",
  },

  {
    id: "d2b",
    code: "D2b",
    track: "Track D – Healthcare Manufacturers Recognitions",
    name: "Excellence in Global Representation Samman – Mid-Scale Enterprise (INR 100–500 Cr)",
    shortDescription:
      "For pharma, AYUSH, or medical device manufacturers INR 100–500 Crores with documented export revenues and destination country compliance certificates.",
    fullDescription:
      "Open to pharma, AYUSH, or medical device manufacturers with turnover between INR 100 Crores and INR 500 Crores that have documented export revenues. WHO-GMP or equivalent export certification is required where applicable.",
    price: 5000,
    priceBand: "Medium Enterprise",
    priceNote: "Registration fee: ₹5,000 (GST extra as applicable)",
    featured: false,
    image: "https://images.pexels.com/photos/8828607/pexels-photo-8828607.jpeg",
    universalMandatoryDocs: UNIVERSAL_MANDATORY_DOCS,
    categoryMandatoryDocs: [
      "Manufacturing Licence — CDSCO or State Drug Licensing Authority",
      "Export revenue figures — FY 2023-24 and FY 2024-25 (CA-certified or audited P&L extract)",
      "Destination country and product category list — table format",
      "No sample-failure declaration — signed on company letterhead",
      "WHO-GMP certificate for export (if held) OR USFDA / EMA / MHRA approval letters",
    ],
    supportingOptionalDocs: [
      "International government procurement or supply agreements (redacted)",
      "DMF filing acknowledgements and ANDA approval letters",
      "Compliance certificates from destination market drug authorities",
    ],
    eligibilityNote:
      "Any manufacturer with pending or recently issued sample-failure orders in the last 24 months is NOT eligible.",
  },

  {
    id: "d2c",
    code: "D2c",
    track: "Track D – Healthcare Manufacturers Recognitions",
    name: "Excellence in Global Representation Samman – Emerging Enterprise (up to INR 100 Cr)",
    shortDescription:
      "For pharma, AYUSH, or medical device manufacturers up to INR 100 Crores with at least one export shipment or international regulatory filing.",
    fullDescription:
      "Open to pharma, AYUSH, or medical device manufacturers with turnover up to INR 100 Crores that have at least one export shipment or international regulatory filing. MSMEs are especially encouraged to apply.",
    price: 3500,
    priceBand: "Small Enterprise / MSME / Individual",
    priceNote: "Registration fee: ₹3,500 (GST extra as applicable)",
    featured: false,
    image: "https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg",
    universalMandatoryDocs: UNIVERSAL_MANDATORY_DOCS,
    categoryMandatoryDocs: [
      "Manufacturing Licence — CDSCO or State Drug Licensing Authority",
      "Export revenue figures — FY 2023-24 and FY 2024-25 (CA-certified or audited P&L extract)",
      "Destination country and product category list — table format",
      "No sample-failure declaration — signed on company letterhead",
      "WHO-GMP certificate for export (if held) OR USFDA / EMA / MHRA approval letters",
    ],
    supportingOptionalDocs: [
      "International government procurement or supply agreements (redacted)",
      "DMF filing acknowledgements and ANDA approval letters",
      "Compliance certificates from destination market drug authorities",
    ],
    eligibilityNote:
      "Any manufacturer with pending or recently issued sample-failure orders in the last 24 months is NOT eligible.",
  },

  {
    id: "d3",
    code: "D3",
    track: "Track D – Healthcare Manufacturers Recognitions",
    name: "Commitment to Quality and Compliance Samman",
    shortDescription:
      "For registered pharma, AYUSH, and medical device manufacturers of all sizes with a clean regulatory record, current GMP certificate, and internal QA audit reports.",
    fullDescription:
      "Open to all registered pharma, AYUSH, and medical device manufacturers of any size with a clean regulatory record. A current GMP certificate (WHO-GMP, Schedule M compliance, or USFDA-approved facility letter) is mandatory, along with the last 2 internal QA audit reports and a signed no-sample-failure declaration.",
    price: 5000,
    priceBand: "Medium Enterprise",
    priceNote: "Registration fee: ₹5,000 (GST extra as applicable)",
    featured: false,
    image: "https://images.pexels.com/photos/8376263/pexels-photo-8376263.jpeg",
    universalMandatoryDocs: UNIVERSAL_MANDATORY_DOCS,
    categoryMandatoryDocs: [
      "Manufacturing Licence — CDSCO or State Drug Licensing Authority",
      "Current GMP certificate — WHO-GMP, Schedule M compliance, or USFDA-approved facility letter",
      "Last 2 internal QA audit reports with corrective action records",
      "No sample-failure declaration — signed on company letterhead",
      "Stability study summary for key products (from in-house or NABL-accredited lab)",
    ],
    supportingOptionalDocs: [
      "Collaboration agreements with IITs or CSIR labs (if any)",
      "USFDA / EMA / MHRA inspection clearance letters",
      "Batch traceability documentation sample",
    ],
  },

  {
    id: "d4",
    code: "D4",
    track: "Track D – Healthcare Manufacturers Recognitions",
    name: "Breakout Smart Packaging Samman",
    shortDescription:
      "For registered manufacturers that have commercially implemented an innovative packaging system that is safe, sustainable, and traceable.",
    fullDescription:
      "Open to all registered manufacturers that have commercially implemented an innovative packaging system. The packaging must be in active commercial use. Nominees must describe the innovation's safety, sustainability, and traceability features in the nomination form (max 300 words) and provide at least 3 photographs.",
    price: 5000,
    priceBand: "Medium Enterprise",
    priceNote: "Registration fee: ₹5,000 (GST extra as applicable)",
    featured: false,
    image: "https://images.pexels.com/photos/4021769/pexels-photo-4021769.jpeg",
    universalMandatoryDocs: UNIVERSAL_MANDATORY_DOCS,
    categoryMandatoryDocs: [
      "Manufacturing Licence — CDSCO or State Drug Licensing Authority",
      "Photographs of the packaging — minimum 3, maximum 10 (clear images showing design and features)",
      "Material Safety Data Sheet (MSDS) for packaging material",
      "Commercial invoice or dispatch record proving packaging is in active use",
      "Description of innovation — typed in form (max 300 words): safe, sustainable, and traceable features",
    ],
    supportingOptionalDocs: [
      "Patent filing or design registration certificate",
      "Green packaging certification",
      "Regulatory acknowledgement or endorsement of the packaging approach",
    ],
  },

  {
    id: "d5",
    code: "D5",
    track: "Track D – Healthcare Manufacturers Recognitions",
    name: "Best In-House Testing and Laboratory Facility Samman",
    shortDescription:
      "For registered manufacturers with documented in-house testing facilities. Third-party-only testing is not eligible. MSMEs especially encouraged.",
    fullDescription:
      "Open to all registered manufacturers with documented in-house testing facilities. Manufacturers that rely exclusively on third-party testing are not eligible. MSMEs are especially encouraged to apply. Nominees must provide an itemised equipment inventory and the last drug inspector or CDSCO inspection report for the laboratory.",
    price: 3500,
    priceBand: "Small Enterprise / MSME / Individual",
    priceNote: "Registration fee: ₹3,500 (GST extra as applicable)",
    featured: false,
    image: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg",
    universalMandatoryDocs: UNIVERSAL_MANDATORY_DOCS,
    categoryMandatoryDocs: [
      "Manufacturing Licence — CDSCO or State Drug Licensing Authority",
      "In-house equipment inventory — itemised list with make, model, and year of installation",
      "In-house vs. outsourced testing proportion — simple statement or table for last 12 months",
      "NABL accreditation certificate (if held)",
      "Last drug inspector or CDSCO inspection report for the laboratory",
    ],
    supportingOptionalDocs: [
      "Internally developed or validated test methods — method validation sheets",
      "Photographs of laboratory",
      "Staff qualification details for lab technicians",
    ],
    eligibilityNote:
      "Manufacturers that rely solely on third-party testing are NOT eligible for this category.",
  },

  {
    id: "d6",
    code: "D6",
    track: "Track D – Healthcare Manufacturers Recognitions",
    name: "Breakout R&D and Innovation Samman",
    shortDescription:
      "For registered manufacturers with documented R&D output (patent filing, new drug approval, or publication) in the preceding 3 years.",
    fullDescription:
      "Open to all registered manufacturers with documented R&D output in the preceding 3 years. At least one of the following must be presented as mandatory evidence: patent filing acknowledgement, new drug approval, or first page of a published peer-reviewed paper. A detailed description of R&D output (max 400 words) is also required.",
    price: 5000,
    priceBand: "Medium Enterprise",
    priceNote: "Registration fee: ₹5,000 (GST extra as applicable)",
    featured: false,
    image: "https://images.pexels.com/photos/3861438/pexels-photo-3861438.jpeg",
    universalMandatoryDocs: UNIVERSAL_MANDATORY_DOCS,
    categoryMandatoryDocs: [
      "Manufacturing Licence — CDSCO or State Drug Licensing Authority",
      "Description of the R&D output — typed in form (max 400 words)",
      "R&D output evidence — ONE of: patent filing acknowledgement, or new drug approval, or published paper first page",
      "R&D facility equipment inventory or NABL certificate",
      "New regulatory approval or product launch emerging from the R&D (if applicable)",
    ],
    supportingOptionalDocs: [
      "Research collaboration agreement with IIT or CSIR lab",
      "Additional publications (first pages only)",
      "Investment in R&D infrastructure as proportion of revenue",
    ],
  },

  {
    id: "d7",
    code: "D7",
    track: "Track D – Healthcare Manufacturers Recognitions",
    name: "Employer and Workforce Excellence Samman",
    shortDescription:
      "For pharma, AYUSH, and medical device manufacturers with minimum 50 full-time employees demonstrating strong training, welfare, and diversity practices.",
    fullDescription:
      "Open to registered pharma, AYUSH, and medical device manufacturers with a minimum of 50 full-time employees. Nominees must demonstrate excellence in training and upskilling (last 12 months), employee welfare programmes, and gender diversity across the workforce and supervisory roles.",
    price: 5000,
    priceBand: "Medium Enterprise",
    priceNote: "Registration fee: ₹5,000 (GST extra as applicable)",
    featured: false,
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    universalMandatoryDocs: UNIVERSAL_MANDATORY_DOCS,
    categoryMandatoryDocs: [
      "Manufacturing Licence — CDSCO or State Drug Licensing Authority",
      "Total employee count and 2-year attrition rate — HR statement",
      "Training and upskilling records — last 12 months (training register summary)",
      "Employee welfare programme documentation — health insurance, safety, wellbeing initiatives",
      "Gender diversity data: proportion of women in workforce and in supervisory roles",
    ],
    supportingOptionalDocs: [
      "Third-party employer rating (Glassdoor, AmbitionBox — screenshot)",
      "Skilling programme for rural or underserved workers",
      "Employee testimonials — anonymised, max 3",
    ],
  },

  {
    id: "d8",
    code: "D8",
    track: "Track D – Healthcare Manufacturers Recognitions",
    name: "Best Qualified Technical Staff Samman",
    shortDescription:
      "Open to all registered pharma, AYUSH, and medical device manufacturers. Recognises a Qualified Persons Register, training logs, and low attrition in technical roles.",
    fullDescription:
      "Open to all registered pharma, AYUSH, and medical device manufacturers of any size. Focuses on the qualifications and continuous professional development of technical staff. Nominees must provide a Qualified Persons Register (QPR) and training logs for the last 12 months, plus representative qualification certificates.",
    price: 3500,
    priceBand: "Small Enterprise / MSME / Individual",
    priceNote: "Registration fee: ₹3,500 (GST extra as applicable)",
    featured: false,
    image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg",
    universalMandatoryDocs: UNIVERSAL_MANDATORY_DOCS,
    categoryMandatoryDocs: [
      "Manufacturing Licence — CDSCO or State Drug Licensing Authority",
      "Qualified Persons Register (QPR) — list of all technical staff with qualifications and years of experience",
      "Training logs — last 12 months (training programme names, dates, number of staff trained)",
      "Sample qualification certificates — 5 to 10 representative certificates (B.Pharm, M.Pharm, PhD, D.Pharm, MLT)",
      "Staff retention data for technical roles — 2-year attrition rate",
    ],
    supportingOptionalDocs: [
      "CME and conference attendance records for technical staff",
      "Regulatory inspection outcomes citing technical team performance",
      "Internal mentoring programme documentation",
    ],
  },

  // ══════════════════════════════════════════════════════════════════
  // TRACK E — NUTRACEUTICALS (E1a–E4)  — NEW IN 2026
  // Licence: FSSAI Central License (FSS Nutraceuticals Regulations 2022)
  // State FSSAI Licenses for nutraceutical manufacture NOT acceptable
  // Additional universal for Track E: No Adverse Regulatory Action Declaration
  // White-label & third-party manufacturers explicitly eligible
  // ══════════════════════════════════════════════════════════════════

  {
    id: "e1a",
    code: "E1a",
    track: "Track E – Nutraceuticals Recognitions",
    name: "Outstanding Business Growth Samman – Industry Leader, Nutraceuticals (above INR 500 Cr)",
    shortDescription:
      "For FSSAI Central License-holding nutraceutical manufacturers with annual turnover above INR 500 Crores, audited financials, and product SKU list with FSSAI category codes.",
    fullDescription:
      "Open to FSSAI Central License-holding nutraceutical manufacturers with annual turnover above INR 500 Crores. White-label and third-party manufacturers are explicitly eligible — growth in brands supplied and formulations counts as business growth. CA-certified financials for 3 years, a CAGR statement, and a nutraceutical product SKU list with FSSAI category codes are mandatory.",
    price: 7500,
    priceBand: "Large Enterprise",
    priceNote: "Registration fee: ₹7,500 (GST extra as applicable)",
    featured: true,
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    universalMandatoryDocs: UNIVERSAL_MANDATORY_DOCS,
    categoryMandatoryDocs: [
      "FSSAI Central License — explicitly covering nutraceutical categories under FSS (Nutraceuticals) Regulations 2022 (verifiable on FoSCoS portal). State FSSAI Licenses are NOT acceptable.",
      "No Adverse Regulatory Action Declaration — signed on company letterhead (no FSSAI show-cause notice, product recall, or seizure in last 24 months; no pending FSSAI enforcement action for false health claims)",
      "Audited financial statements — FY 2022-23, 2023-24, 2024-25 (CA-certified)",
      "Revenue CAGR calculation — single-page showing 3-year turnover and CAGR",
      "Nutraceutical product SKU list with FSSAI product category codes",
      "For third-party manufacturers: principal brand supply list with approximate volumes",
    ],
    supportingOptionalDocs: [
      "New FSSAI product category endorsements added to Central License",
      "Export invoices or FOB revenue statement (if applicable)",
      "New client brand agreements or distribution contracts",
    ],
  },

  {
    id: "e1b",
    code: "E1b",
    track: "Track E – Nutraceuticals Recognitions",
    name: "Outstanding Business Growth Samman – Mid-Scale Enterprise, Nutraceuticals (INR 100–500 Cr)",
    shortDescription:
      "For FSSAI-licensed nutraceutical manufacturers with annual turnover INR 100–500 Crores, including third-party manufacturers with principal brand supply list.",
    fullDescription:
      "Open to FSSAI Central License-holding nutraceutical manufacturers with annual turnover between INR 100 Crores and INR 500 Crores. Third-party and white-label manufacturers are eligible. Same documentary requirements as the Industry Leader tier at this scale.",
    price: 5000,
    priceBand: "Medium Enterprise",
    priceNote: "Registration fee: ₹5,000 (GST extra as applicable)",
    featured: false,
    image: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg",
    universalMandatoryDocs: UNIVERSAL_MANDATORY_DOCS,
    categoryMandatoryDocs: [
      "FSSAI Central License — nutraceutical categories (State FSSAI Licenses NOT acceptable)",
      "No Adverse Regulatory Action Declaration — signed on company letterhead",
      "Audited financial statements — FY 2022-23, 2023-24, 2024-25 (CA-certified)",
      "Revenue CAGR calculation — single-page showing 3-year turnover and CAGR",
      "Nutraceutical product SKU list with FSSAI product category codes",
      "For third-party manufacturers: principal brand supply list with approximate volumes",
    ],
    supportingOptionalDocs: [
      "New FSSAI product category endorsements added to Central License",
      "Export invoices or FOB revenue statement (if applicable)",
      "New client brand agreements or distribution contracts",
    ],
  },

  {
    id: "e1c",
    code: "E1c",
    track: "Track E – Nutraceuticals Recognitions",
    name: "Outstanding Business Growth Samman – Emerging Enterprise, Nutraceuticals (up to INR 100 Cr)",
    shortDescription:
      "For FSSAI-licensed nutraceutical manufacturers with annual turnover up to INR 100 Crores. MSMEs and white-label manufacturers especially encouraged.",
    fullDescription:
      "Open to FSSAI Central License-holding nutraceutical manufacturers with annual turnover up to INR 100 Crores. MSMEs and white-label manufacturers are especially encouraged. A No Adverse Regulatory Action Declaration is mandatory for all Track E categories.",
    price: 3500,
    priceBand: "Small Enterprise / MSME / Individual",
    priceNote: "Registration fee: ₹3,500 (GST extra as applicable)",
    featured: false,
    image: "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg",
    universalMandatoryDocs: UNIVERSAL_MANDATORY_DOCS,
    categoryMandatoryDocs: [
      "FSSAI Central License — nutraceutical categories (State FSSAI Licenses NOT acceptable)",
      "No Adverse Regulatory Action Declaration — signed on company letterhead",
      "Audited financial statements — FY 2022-23, 2023-24, 2024-25 (CA-certified)",
      "Revenue CAGR calculation — single-page showing 3-year turnover and CAGR",
      "Nutraceutical product SKU list with FSSAI product category codes",
      "For third-party manufacturers: principal brand supply list with approximate volumes",
    ],
    supportingOptionalDocs: [
      "New FSSAI product category endorsements added to Central License",
      "Export invoices or FOB revenue statement (if applicable)",
      "New client brand agreements or distribution contracts",
    ],
  },

  {
    id: "e2a",
    code: "E2a",
    track: "Track E – Nutraceuticals Recognitions",
    name: "Excellence in Global Reach Samman – Industry Leader, Nutraceuticals (above INR 500 Cr)",
    shortDescription:
      "For FSSAI-licensed nutraceutical manufacturers above INR 500 Crores with documented international export activity and FSSAI NOC or WHO-GMP export certificate.",
    fullDescription:
      "Open to FSSAI Central License-holding nutraceutical manufacturers above INR 500 Crores with documented international export activity. A FSSAI No Objection Certificate for export or a WHO-GMP export certificate is mandatory, along with export invoices or shipping bills for the last 2 financial years.",
    price: 7500,
    priceBand: "Large Enterprise",
    priceNote: "Registration fee: ₹7,500 (GST extra as applicable)",
    featured: false,
    image: "https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg",
    universalMandatoryDocs: UNIVERSAL_MANDATORY_DOCS,
    categoryMandatoryDocs: [
      "FSSAI Central License — nutraceutical categories (State FSSAI Licenses NOT acceptable)",
      "FSSAI No Objection Certificate for export OR WHO-GMP export certificate (current)",
      "Export invoices or shipping bills — last 2 financial years",
      "Destination country and product category list — table format",
      "No Adverse Regulatory Action Declaration — signed on company letterhead",
    ],
    supportingOptionalDocs: [
      "International buyer or distributor agreements (redacted)",
      "Compliance certificates from destination market food authorities",
      "IEC (Import Export Code) certificate",
    ],
  },

  {
    id: "e2b",
    code: "E2b",
    track: "Track E – Nutraceuticals Recognitions",
    name: "Excellence in Global Reach Samman – Mid-Scale Enterprise, Nutraceuticals (INR 100–500 Cr)",
    shortDescription:
      "For FSSAI-licensed nutraceutical exporters in the INR 100–500 Crore range with export invoices, destination country list, and regulatory action declaration.",
    fullDescription:
      "Open to FSSAI Central License-holding nutraceutical manufacturers with turnover between INR 100 Crores and INR 500 Crores that have documented export revenues. Export invoices or shipping bills for the last 2 financial years are mandatory.",
    price: 5000,
    priceBand: "Medium Enterprise",
    priceNote: "Registration fee: ₹5,000 (GST extra as applicable)",
    featured: false,
    image: "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg",
    universalMandatoryDocs: UNIVERSAL_MANDATORY_DOCS,
    categoryMandatoryDocs: [
      "FSSAI Central License — nutraceutical categories (State FSSAI Licenses NOT acceptable)",
      "FSSAI No Objection Certificate for export OR WHO-GMP export certificate (current)",
      "Export invoices or shipping bills — last 2 financial years",
      "Destination country and product category list — table format",
      "No Adverse Regulatory Action Declaration — signed on company letterhead",
    ],
    supportingOptionalDocs: [
      "International buyer or distributor agreements (redacted)",
      "Compliance certificates from destination market food authorities",
      "IEC (Import Export Code) certificate",
    ],
  },

  {
    id: "e2c",
    code: "E2c",
    track: "Track E – Nutraceuticals Recognitions",
    name: "Excellence in Global Reach Samman – Emerging Enterprise, Nutraceuticals (up to INR 100 Cr)",
    shortDescription:
      "For FSSAI-licensed nutraceutical manufacturers up to INR 100 Crores with at least one export shipment or international filing.",
    fullDescription:
      "Open to FSSAI Central License-holding nutraceutical manufacturers with turnover up to INR 100 Crores that have made at least one export shipment or international regulatory filing. MSMEs are especially encouraged.",
    price: 3500,
    priceBand: "Small Enterprise / MSME / Individual",
    priceNote: "Registration fee: ₹3,500 (GST extra as applicable)",
    featured: false,
    image: "https://images.pexels.com/photos/6169042/pexels-photo-6169042.jpeg",
    universalMandatoryDocs: UNIVERSAL_MANDATORY_DOCS,
    categoryMandatoryDocs: [
      "FSSAI Central License — nutraceutical categories (State FSSAI Licenses NOT acceptable)",
      "FSSAI No Objection Certificate for export OR WHO-GMP export certificate (current)",
      "Export invoices or shipping bills — last 2 financial years",
      "Destination country and product category list — table format",
      "No Adverse Regulatory Action Declaration — signed on company letterhead",
    ],
    supportingOptionalDocs: [
      "International buyer or distributor agreements (redacted)",
      "Compliance certificates from destination market food authorities",
      "IEC (Import Export Code) certificate",
    ],
  },

  {
    id: "e3",
    code: "E3",
    track: "Track E – Nutraceuticals Recognitions",
    name: "Commitment to Quality and Compliance Samman – Nutraceuticals",
    shortDescription:
      "For all FSSAI-licensed nutraceutical manufacturers with a current GMP certificate, correct product labelling per FSSAI regulations, and internal QA audit reports.",
    fullDescription:
      "Open to all FSSAI Central License-holding nutraceutical manufacturers with a clean regulatory record. A current GMP certificate (FSSAI, WHO-GMP, or equivalent) is mandatory. Product labels for nominated products must show 'NOT FOR MEDICINAL USE', correct RDA declarations, and Schedule-compliant ingredient listing.",
    price: 5000,
    priceBand: "Medium Enterprise",
    priceNote: "Registration fee: ₹5,000 (GST extra as applicable)",
    featured: false,
    image: "https://images.pexels.com/photos/8376296/pexels-photo-8376296.jpeg",
    universalMandatoryDocs: UNIVERSAL_MANDATORY_DOCS,
    categoryMandatoryDocs: [
      "FSSAI Central License — nutraceutical categories",
      "Current GMP certificate — FSSAI, WHO-GMP, or equivalent",
      "Product label copies for nominated products — must show: NOT FOR MEDICINAL USE, correct RDA declarations, Schedule-compliant ingredient listing",
      "Last 2 internal QA audit reports with corrective action records",
      "Ingredient compliance register — confirming all ingredients from FSSAI Schedules I/II/III/IV/VI/VII/VIII",
    ],
    supportingOptionalDocs: [
      "Stability test reports from in-house or NABL-accredited laboratory",
      "No Adverse Regulatory Action Declaration (if not already submitted for another E category)",
      "FSSAI label approval letters for key products",
    ],
  },

  {
    id: "e4",
    code: "E4",
    track: "Track E – Nutraceuticals Recognitions",
    name: "Breakout Product Innovation Samman – Nutraceuticals",
    shortDescription:
      "For FSSAI-licensed nutraceutical manufacturers who have developed and commercially launched an innovative product in the last 3 years with health benefit evidence.",
    fullDescription:
      "Open to FSSAI Central License-holding nutraceutical manufacturers that have developed and commercially launched an innovative product within the last 3 years. Health benefit evidence — clinical study reference, consumer research, or peer-reviewed citation — is mandatory alongside commercial launch evidence.",
    price: 5000,
    priceBand: "Medium Enterprise",
    priceNote: "Registration fee: ₹5,000 (GST extra as applicable)",
    featured: false,
    image: "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg",
    universalMandatoryDocs: UNIVERSAL_MANDATORY_DOCS,
    categoryMandatoryDocs: [
      "FSSAI Central License — nutraceutical categories",
      "FSSAI license modification or product category endorsement confirming the product is licensed",
      "Product label copies — confirming correct FSSAI classification and all mandatory declarations",
      "Health benefit evidence — clinical study reference, consumer research, or peer-reviewed citation",
      "Commercial launch evidence — distribution invoice, e-commerce listing, or distributor agreement",
    ],
    supportingOptionalDocs: [
      "Patent filing or IP registration for the formulation or delivery system",
      "Description of innovation — typed in form (max 400 words)",
      "NABL or accredited laboratory validation reports",
    ],
  },

  // ══════════════════════════════════════════════════════════════════
  // CROSS-TRACK — SUSTAINABILITY & COMMUNITY (CT1–CT5)
  // Open to nominees from ALL five tracks
  // Public sector and private sector evaluated in separate peer groups
  // ══════════════════════════════════════════════════════════════════

  {
    id: "ct1",
    code: "CT1",
    track: "Cross-Track – Sustainability and Community Recognitions",
    name: "Environmental Sustainability Leader Samman – Public Sector",
    shortDescription:
      "For government healthcare institutions with documented sustainability initiatives running for at least 12 months, with energy/water/waste reduction baselines.",
    fullDescription:
      "Open to government healthcare institutions and public sector health entities that have documented sustainability initiatives running for at least 12 months. Nominees must provide baseline figures and current figures for energy, water, or waste reduction, supported by a government order or institutional policy authorising the initiative.",
    price: 3500,
    priceBand: "Small Enterprise / MSME / Individual",
    priceNote: "Registration fee: ₹3,500 (GST extra as applicable)",
    featured: true,
    image: "https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg",
    universalMandatoryDocs: UNIVERSAL_MANDATORY_DOCS,
    categoryMandatoryDocs: [
      "Govt. appointment letter of authorised official",
      "Government order or institutional policy authorising the sustainability initiative",
      "Energy or water or waste reduction data — with baseline figures and current figures",
      "Implementation records covering the last 12 months",
      "Description of sustainability initiative — typed in form (max 300 words)",
    ],
    supportingOptionalDocs: [
      "Third-party audit or green certification",
      "Photographs of sustainability infrastructure",
      "Media coverage",
    ],
    eligibilityNote:
      "Government institutions substitute GST returns with appointment letter + departmental authorisation. Evaluated in a separate peer group from private sector nominees.",
  },

  {
    id: "ct2",
    code: "CT2",
    track: "Cross-Track – Sustainability and Community Recognitions",
    name: "Environmental Sustainability Leader Samman – Private Sector",
    shortDescription:
      "For private hospitals, AYUSH institutions, and healthcare manufacturers with energy audit data, water management records, and biomedical waste compliance.",
    fullDescription:
      "Open to private hospitals, AYUSH institutions, and healthcare manufacturers with documented sustainability initiatives and a minimum of 12 months of data. Energy consumption reduction, water management, and biomedical or industrial waste compliance must be evidenced.",
    price: 5000,
    priceBand: "Medium Enterprise",
    priceNote: "Registration fee: ₹5,000 (GST extra as applicable)",
    featured: false,
    image: "https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg",
    universalMandatoryDocs: UNIVERSAL_MANDATORY_DOCS,
    categoryMandatoryDocs: [
      "Manufacturing or Clinical Establishment licence relevant to the nominee's track",
      "Energy consumption data with year-on-year reduction metrics (from energy audit or utility bills)",
      "Water management and conservation records",
      "Biomedical or industrial waste management compliance certificate",
      "Description of sustainability initiative — typed in form (max 300 words)",
    ],
    supportingOptionalDocs: [
      "Green building or manufacturing certification (LEED, IGBC, GRIHA, or equivalent)",
      "Solar or renewable energy adoption evidence",
      "Carbon footprint tracking data or targets",
    ],
    eligibilityNote:
      "Evaluated in a separate peer group from public sector nominees in the same category.",
  },

  {
    id: "ct3",
    code: "CT3",
    track: "Cross-Track – Sustainability and Community Recognitions",
    name: "Community Health Outreach Leader Samman – Public Sector",
    shortDescription:
      "For government health departments, NHM missions, and government AYUSH departments with authorised community health programmes and measurable beneficiary reach.",
    fullDescription:
      "Open to government health departments, NHM missions, and government AYUSH departments with documented community health outreach programmes. A government order or mission-mode programme authorisation is mandatory, along with beneficiary reach data and outcome metrics.",
    price: 3500,
    priceBand: "Small Enterprise / MSME / Individual",
    priceNote: "Registration fee: ₹3,500 (GST extra as applicable)",
    featured: false,
    image: "https://images.pexels.com/photos/6749771/pexels-photo-6749771.jpeg",
    universalMandatoryDocs: UNIVERSAL_MANDATORY_DOCS,
    categoryMandatoryDocs: [
      "Govt. appointment letter of authorised official",
      "Government order or mission-mode programme authorisation",
      "Beneficiary reach data: number of people covered and geography",
      "Outcome metrics: immunisation rates, screening numbers, awareness reach, or disease incidence change",
      "Photographs and documentation of outreach activities",
    ],
    supportingOptionalDocs: [
      "Media coverage",
      "Supervisory authority endorsement or commendation",
      "Third-party impact assessment",
    ],
    eligibilityNote:
      "Government institutions substitute GST returns with appointment letter + departmental authorisation. Evaluated in a separate peer group from private sector nominees.",
  },

  {
    id: "ct4",
    code: "CT4",
    track: "Cross-Track – Sustainability and Community Recognitions",
    name: "Community Health Outreach Leader Samman – Private Sector",
    shortDescription:
      "For private hospitals, AYUSH institutions, and manufacturers with documented community health programmes running for at least 12 months with outcome evidence.",
    fullDescription:
      "Open to private hospitals, AYUSH healthcare bodies, and manufacturers with documented community health programmes running for at least 12 months. Beneficiary reach data, programme outcome evidence, and photographs with media coverage are mandatory.",
    price: 5000,
    priceBand: "Medium Enterprise",
    priceNote: "Registration fee: ₹5,000 (GST extra as applicable)",
    featured: false,
    image: "https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg",
    universalMandatoryDocs: UNIVERSAL_MANDATORY_DOCS,
    categoryMandatoryDocs: [
      "Manufacturing or Clinical Establishment licence relevant to the nominee's track",
      "Programme description — typed in form (max 300 words)",
      "Beneficiary reach data: number of people served (last 12 months)",
      "Community health outcome evidence: screenings, treatments, awareness campaigns conducted",
      "Photographs and media coverage of the programme",
    ],
    supportingOptionalDocs: [
      "Partnership agreements with government or NGOs",
      "CSR spend documentation (Companies Act 2013, if applicable)",
      "Testimonials from beneficiary communities",
    ],
    eligibilityNote:
      "Evaluated in a separate peer group from public sector nominees in the same category.",
  },

  {
    id: "ct5",
    code: "CT5",
    track: "Cross-Track – Sustainability and Community Recognitions",
    name: "Technology-Driven and CSR Impact Champion Samman",
    shortDescription:
      "Open to all organisations across all tracks using digital platforms, data, or CSR investment to deliver measurable community health outcomes.",
    fullDescription:
      "Open to all organisations across all five tracks that are using digital platforms, data analytics, or CSR investment to deliver measurable community health outcomes. Technology platform evidence (app screenshots, portal link, or user data report) and beneficiary reach/impact data are mandatory.",
    price: 5000,
    priceBand: "Medium Enterprise",
    priceNote: "Registration fee: ₹5,000 (GST extra as applicable)",
    featured: false,
    image: "https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg",
    universalMandatoryDocs: UNIVERSAL_MANDATORY_DOCS,
    categoryMandatoryDocs: [
      "Manufacturing or Clinical Establishment or Govt. appointment letter relevant to the nominee's track",
      "Technology platform evidence: app screenshots, portal link, or user data report",
      "Beneficiary reach and impact data — last 12 months",
      "CSR spend documentation — Companies Act 2013 compliance records (if applicable)",
      "Programme description — typed in form (max 300 words)",
    ],
    supportingOptionalDocs: [
      "Third-party impact assessment or CSR audit",
      "Photographs and media coverage",
      "SDG alignment documentation",
    ],
  },

  // ══════════════════════════════════════════════════════════════════
  // JURY CHOICE RECOGNITIONS (J1–J10)  — NOT open for direct nomination
  // Complimentary — No Fee
  // ══════════════════════════════════════════════════════════════════

  {
    id: "j1",
    code: "J1",
    track: "Jury Choice Recognitions",
    name: "Private Medical Institution of the Year",
    shortDescription:
      "Jury Choice recognition. Not open for direct nomination. Requires minimum 2 competitive nominations filed under Track B. The jury identifies recipients from the competitive nominee pool.",
    fullDescription:
      "This is a Jury Choice recognition — it is NOT open for direct self-nomination. The jury identifies recipients from the pool of nominees who have filed at least 2 nominations under Track B (Private Healthcare). No separate nomination form or documentary submission is required.",
    price: 0,
    priceBand: "Complimentary",
    priceNote: "Complimentary — no fee. Awarded from pool of nominees with 2+ Track B nominations.",
    featured: true,
    image: "https://images.pexels.com/photos/4769127/pexels-photo-4769127.jpeg",
    universalMandatoryDocs: [],
    categoryMandatoryDocs: [
      "Minimum 2 competitive nominations filed under Track B — verified automatically from the nomination portal",
    ],
    supportingOptionalDocs: [],
    eligibilityNote:
      "Not open for direct self-nomination. Jury identifies recipients from Track B competitive nominee pool.",
  },

  {
    id: "j2",
    code: "J2",
    track: "Jury Choice Recognitions",
    name: "Private Medical College of the Year",
    shortDescription:
      "Jury Choice recognition. Not open for direct nomination. Requires minimum 2 competitive nominations filed under Track B.",
    fullDescription:
      "This is a Jury Choice recognition — it is NOT open for direct self-nomination. Requires minimum 2 competitive nominations filed under Track B. The jury identifies recipients from the competitive nominee pool.",
    price: 0,
    priceBand: "Complimentary",
    priceNote: "Complimentary — no fee. Awarded from pool of nominees with 2+ Track B nominations.",
    featured: false,
    image: "https://images.pexels.com/photos/256401/pexels-photo-256401.jpeg",
    universalMandatoryDocs: [],
    categoryMandatoryDocs: [
      "Minimum 2 competitive nominations filed under Track B — verified automatically from the nomination portal",
    ],
    supportingOptionalDocs: [],
    eligibilityNote:
      "Not open for direct self-nomination. Jury identifies recipients from Track B competitive nominee pool.",
  },

  {
    id: "j3",
    code: "J3",
    track: "Jury Choice Recognitions",
    name: "AYUSH Institution of the Year",
    shortDescription:
      "Jury Choice recognition. Not open for direct nomination. Requires minimum 2 competitive nominations filed under Track C.",
    fullDescription:
      "This is a Jury Choice recognition — it is NOT open for direct self-nomination. Requires minimum 2 competitive nominations filed under Track C (AYUSH). The jury identifies recipients from the competitive nominee pool.",
    price: 0,
    priceBand: "Complimentary",
    priceNote: "Complimentary — no fee. Awarded from pool of nominees with 2+ Track C nominations.",
    featured: false,
    image: "https://images.pexels.com/photos/1539673/pexels-photo-1539673.jpeg",
    universalMandatoryDocs: [],
    categoryMandatoryDocs: [
      "Minimum 2 competitive nominations filed under Track C — verified automatically from the nomination portal",
    ],
    supportingOptionalDocs: [],
    eligibilityNote:
      "Not open for direct self-nomination. Jury identifies recipients from Track C competitive nominee pool.",
  },

  {
    id: "j4",
    code: "J4",
    track: "Jury Choice Recognitions",
    name: "AYUSH Medical College of the Year",
    shortDescription:
      "Jury Choice recognition. Not open for direct nomination. Requires minimum 2 competitive nominations filed under Track C.",
    fullDescription:
      "This is a Jury Choice recognition — it is NOT open for direct self-nomination. Requires minimum 2 competitive nominations filed under Track C. The jury identifies recipients from the competitive nominee pool.",
    price: 0,
    priceBand: "Complimentary",
    priceNote: "Complimentary — no fee. Awarded from pool of nominees with 2+ Track C nominations.",
    featured: false,
    image: "https://images.pexels.com/photos/5863391/pexels-photo-5863391.jpeg",
    universalMandatoryDocs: [],
    categoryMandatoryDocs: [
      "Minimum 2 competitive nominations filed under Track C — verified automatically from the nomination portal",
    ],
    supportingOptionalDocs: [],
    eligibilityNote:
      "Not open for direct self-nomination. Jury identifies recipients from Track C competitive nominee pool.",
  },

  {
    id: "j5",
    code: "J5",
    track: "Jury Choice Recognitions",
    name: "Nutraceutical Company of the Year",
    shortDescription:
      "Jury Choice recognition. Not open for direct nomination. Requires minimum 2 competitive nominations filed under Track E.",
    fullDescription:
      "This is a Jury Choice recognition — it is NOT open for direct self-nomination. Requires minimum 2 competitive nominations filed under Track E (Nutraceuticals). The jury identifies recipients from the competitive nominee pool.",
    price: 0,
    priceBand: "Complimentary",
    priceNote: "Complimentary — no fee. Awarded from pool of nominees with 2+ Track E nominations.",
    featured: false,
    image: "https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg",
    universalMandatoryDocs: [],
    categoryMandatoryDocs: [
      "Minimum 2 competitive nominations filed under Track E — verified automatically from the nomination portal",
    ],
    supportingOptionalDocs: [],
    eligibilityNote:
      "Not open for direct self-nomination. Jury identifies recipients from Track E competitive nominee pool.",
  },

  {
    id: "j6",
    code: "J6",
    track: "Jury Choice Recognitions",
    name: "Lifetime Achievement – Doctor in Government Service",
    shortDescription:
      "Jury Choice recognition. Organisations or industry bodies may submit a Letter of Recommendation and Detailed Profile to PHDCCI. Not open for direct self-nomination.",
    fullDescription:
      "This is a Jury Choice recognition — it is NOT open for direct self-nomination. Organisations or industry bodies may submit a Letter of Recommendation and a Detailed Profile (max 4 pages) directly to PHDCCI on behalf of the nominee. The jury identifies recipients based on industry recommendations and jury consensus.",
    price: 0,
    priceBand: "Complimentary",
    priceNote: "Complimentary — awarded based on industry recommendations and jury consensus.",
    featured: false,
    image: "https://images.pexels.com/photos/260339/pexels-photo-260339.jpeg",
    universalMandatoryDocs: [],
    categoryMandatoryDocs: [
      "Letter of Recommendation — on letterhead of a recognised institution, industry body, or professional association. Must address: years known to nominee, specific contributions, and reason for recommendation. No template — must be original.",
      "Detailed Profile — maximum 4 pages covering career timeline, key milestones, positions held, recognitions received, and specific contributions to the sector or region.",
      "Media coverage file — compilation of published articles, interviews, or coverage (PDF or photograph format)",
    ],
    supportingOptionalDocs: [],
    eligibilityNote:
      "Submitted by organisations or industry bodies on behalf of the nominee. Not open for direct self-nomination.",
  },

  {
    id: "j7",
    code: "J7",
    track: "Jury Choice Recognitions",
    name: "Lifetime Achievement – Doctor in Private Practice",
    shortDescription:
      "Jury Choice recognition. Organisations or industry bodies may submit a Letter of Recommendation and Detailed Profile to PHDCCI.",
    fullDescription:
      "This is a Jury Choice recognition — it is NOT open for direct self-nomination. Organisations or industry bodies may submit a Letter of Recommendation and a Detailed Profile (max 4 pages) directly to PHDCCI on behalf of the nominee.",
    price: 0,
    priceBand: "Complimentary",
    priceNote: "Complimentary — awarded based on industry recommendations and jury consensus.",
    featured: false,
    image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg",
    universalMandatoryDocs: [],
    categoryMandatoryDocs: [
      "Letter of Recommendation — on letterhead of a recognised institution, industry body, or professional association. Must be original (no template). Must address: years known, specific contributions, reason for recommendation.",
      "Detailed Profile — maximum 4 pages: career timeline, key milestones, positions held, recognitions, contributions to sector/region.",
      "Media coverage file — compiled articles, interviews, or coverage (PDF or photograph format)",
    ],
    supportingOptionalDocs: [],
    eligibilityNote:
      "Submitted by organisations or industry bodies on behalf of the nominee. Not open for direct self-nomination.",
  },

  {
    id: "j8",
    code: "J8",
    track: "Jury Choice Recognitions",
    name: "Lifetime Achievement – AYUSH Doctor (Government Service)",
    shortDescription:
      "Jury Choice recognition. Organisations or industry bodies may submit a Letter of Recommendation and Detailed Profile to PHDCCI.",
    fullDescription:
      "This is a Jury Choice recognition — it is NOT open for direct self-nomination. Organisations or industry bodies may submit a Letter of Recommendation and a Detailed Profile (max 4 pages) directly to PHDCCI on behalf of the nominee.",
    price: 0,
    priceBand: "Complimentary",
    priceNote: "Complimentary — awarded based on industry recommendations and jury consensus.",
    featured: false,
    image: "https://images.pexels.com/photos/4225881/pexels-photo-4225881.jpeg",
    universalMandatoryDocs: [],
    categoryMandatoryDocs: [
      "Letter of Recommendation — on letterhead of a recognised institution, industry body, or professional association. Must be original (no template). Must address: years known, specific contributions, reason for recommendation.",
      "Detailed Profile — maximum 4 pages: career timeline, key milestones, positions held, recognitions, contributions to sector/region.",
      "Media coverage file — compiled articles, interviews, or coverage (PDF or photograph format)",
    ],
    supportingOptionalDocs: [],
    eligibilityNote:
      "Submitted by organisations or industry bodies on behalf of the nominee. Not open for direct self-nomination.",
  },

  {
    id: "j9",
    code: "J9",
    track: "Jury Choice Recognitions",
    name: "Lifetime Achievement – AYUSH Doctor (Private Practice)",
    shortDescription:
      "Jury Choice recognition. Organisations or industry bodies may submit a Letter of Recommendation and Detailed Profile to PHDCCI.",
    fullDescription:
      "This is a Jury Choice recognition — it is NOT open for direct self-nomination. Organisations or industry bodies may submit a Letter of Recommendation and a Detailed Profile (max 4 pages) directly to PHDCCI on behalf of the nominee.",
    price: 0,
    priceBand: "Complimentary",
    priceNote: "Complimentary — awarded based on industry recommendations and jury consensus.",
    featured: false,
    image: "https://images.pexels.com/photos/3938922/pexels-photo-3938922.jpeg",
    universalMandatoryDocs: [],
    categoryMandatoryDocs: [
      "Letter of Recommendation — on letterhead of a recognised institution, industry body, or professional association. Must be original (no template). Must address: years known, specific contributions, reason for recommendation.",
      "Detailed Profile — maximum 4 pages: career timeline, key milestones, positions held, recognitions, contributions to sector/region.",
      "Media coverage file — compiled articles, interviews, or coverage (PDF or photograph format)",
    ],
    supportingOptionalDocs: [],
    eligibilityNote:
      "Submitted by organisations or industry bodies on behalf of the nominee. Not open for direct self-nomination.",
  },

  {
    id: "j10",
    code: "J10",
    track: "Jury Choice Recognitions",
    name: "Pioneer of Nutraceuticals",
    shortDescription:
      "Jury Choice recognition. Organisations or industry bodies may submit a Letter of Recommendation and Detailed Profile to PHDCCI.",
    fullDescription:
      "This is a Jury Choice recognition — it is NOT open for direct self-nomination. Organisations or industry bodies may submit a Letter of Recommendation and a Detailed Profile (max 4 pages) directly to PHDCCI on behalf of the nominee.",
    price: 0,
    priceBand: "Complimentary",
    priceNote: "Complimentary — awarded based on industry recommendations and jury consensus.",
    featured: false,
    image: "https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg",
    universalMandatoryDocs: [],
    categoryMandatoryDocs: [
      "Letter of Recommendation — on letterhead of a recognised institution, industry body, or professional association. Must be original (no template). Must address: years known, specific contributions, reason for recommendation.",
      "Detailed Profile — maximum 4 pages: career timeline, key milestones, positions held, recognitions, contributions to sector/region.",
      "Media coverage file — compiled articles, interviews, or coverage (PDF or photograph format)",
    ],
    supportingOptionalDocs: [],
    eligibilityNote:
      "Submitted by organisations or industry bodies on behalf of the nominee. Not open for direct self-nomination.",
  },
];

export default products;

// Named export expected by CategoryFilter and other components
export const categories: string[] = [
  "All",
  "Track A – Public Health Recognitions",
  "Track B – Private Healthcare Recognitions",
  "Track C – AYUSH Recognitions",
  "Track D – Healthcare Manufacturers Recognitions",
  "Track E – Nutraceuticals Recognitions",
  "Cross-Track – Sustainability and Community Recognitions",
  "Jury Choice Recognitions",
];

// Convenience helpers
export const getProductsByTrack = (track: string): Product[] =>
  track === "All" ? products : products.filter((p) => p.track === track);

export const getProductById = (id: string): Product | undefined =>
  products.find((p) => p.id === id);

export const getProductByCode = (code: string): Product | undefined =>
  products.find((p) => p.code === code);