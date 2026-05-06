export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  featured?: boolean;
  inStock: boolean;
};

export const products: Product[] = [
  // ─── TRACK A: PUBLIC HEALTH (7 categories) ───────────────────────────────
  {
    id: 1,
    name: "Innovation in Public Health Samman",
    category: "Track A – Public Health Recognitions",
    price: 1,
    inStock: true,
    image: "https://images.pexels.com/photos/6823569/pexels-photo-6823569.jpeg",
    description:
      "For government health departments, public hospitals, and PPP entities that have implemented a transformative health innovation with measurable beneficiary outcomes.",
    featured: true,
  },
  {
    id: 2,
    name: "Best District Hospital Samman",
    category: "Track A – Public Health Recognitions",
    price: 1,
    inStock: true,
    image: "https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg",
    description:
      "For government-run District Hospitals under the State Department of Health and Family Welfare with strong OPD/IPD performance, clinical outcomes, and patient feedback.",
  },
  {
    id: 3,
    name: "Best Community Health Centre / Sub-Divisional Hospital Samman",
    category: "Track A – Public Health Recognitions",
    price: 1,
    inStock: true,
    image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg",
    description:
      "For government-run CHCs and Sub-Divisional Hospitals demonstrating excellence in referral, institutional delivery, specialist services, and patient care.",
  },
  {
    id: 4,
    name: "Best Primary Health Centre Samman",
    category: "Track A – Public Health Recognitions",
    price: 1,
    inStock: true,
    image: "https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg",
    description:
      "For government-run PHCs under the National Health Mission with strong immunisation coverage, ANC/PNC records, and essential medicines availability.",
  },
  {
    id: 5,
    name: "Best Ayushman Arogya Mandir Samman",
    category: "Track A – Public Health Recognitions",
    price: 1,
    inStock: true,
    image: "https://images.pexels.com/photos/5721665/pexels-photo-5721665.jpeg",
    description:
      "For Ayushman Arogya Mandirs (Health and Wellness Centres) functioning under the NHM with strong ABHA enrolment, NCD screening, and wellness programme records.",
  },
  {
    id: 6,
    name: "Excellence in Public Health Infrastructure Development Samman",
    category: "Track A – Public Health Recognitions",
    price: 1,
    inStock: true,
    image: "https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg",
    description:
      "For state/district governments and PPP entities that have built or upgraded public health infrastructure with documented utilisation and capacity data.",
  },
  {
    id: 7,
    name: "Frontline Champion Samman – ANM / ASHA Worker",
    category: "Track A – Public Health Recognitions",
    price: 1,
    inStock: true,
    image: "https://images.pexels.com/photos/6303531/pexels-photo-6303531.jpeg",
    description:
      "For individual ANMs and ASHA workers under the NHM who have demonstrated outstanding performance in immunisation, institutional deliveries, and community health.",
  },

  // ─── TRACK B: PRIVATE HEALTHCARE (6 categories) ──────────────────────────
  {
    id: 8,
    name: "Technology and Innovation Leader Samman",
    category: "Track B – Private Healthcare Recognitions",
    price: 1,
    inStock: true,
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg",
    description:
      "For private hospitals, diagnostic chains, and healthcare institutions that have adopted and operationalised healthcare technology with measurable clinical or operational improvement.",
    featured: true,
  },
  {
    id: 9,
    name: "Startup of the Year Samman",
    category: "Track B – Private Healthcare Recognitions",
    price: 1,
    inStock: true,
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
    description:
      "For private healthcare startups incorporated after 2019 with demonstrated traction in revenue, user numbers, or health outcomes and a compelling pitch.",
  },
  {
    id: 10,
    name: "Clinical Excellence Leader Samman",
    category: "Track B – Private Healthcare Recognitions",
    price: 1,
    inStock: true,
    image: "https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg",
    description:
      "For NABH-accredited or NABH-pending private hospitals and specialty clinics with a documented clinical audit programme and strong outcome data.",
  },
  {
    id: 11,
    name: "Patient Experience Leader Samman",
    category: "Track B – Private Healthcare Recognitions",
    price: 1,
    inStock: true,
    image: "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg",
    description:
      "For private hospitals and clinics with a minimum of 200 verified patient reviews across at least 2 digital platforms and evidence of feedback-driven improvements.",
  },
  {
    id: 12,
    name: "Healthcare Employer of the Year Samman",
    category: "Track B – Private Healthcare Recognitions",
    price: 1,
    inStock: true,
    image: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg",
    description:
      "For private hospitals with minimum 100 full-time employees demonstrating excellence in training, employee welfare, and gender diversity.",
  },
  {
    id: 13,
    name: "Medical Value Travel Leader Samman",
    category: "Track B – Private Healthcare Recognitions",
    price: 1,
    inStock: true,
    image: "https://images.pexels.com/photos/305565/pexels-photo-305565.jpeg",
    description:
      "For private hospitals treating international patients with documented medical tourism activity, international accreditation, and concierge support infrastructure.",
  },

  // ─── TRACK C: AYUSH (11 categories) ──────────────────────────────────────
  {
    id: 14,
    name: "Best Wellness Initiative Samman",
    category: "Track C – AYUSH Recognitions",
    price: 1,
    inStock: true,
    image: "https://images.pexels.com/photos/1666667/pexels-photo-1666667.jpeg",
    description:
      "For AYUSH wellness centres, yoga studios, naturopathy centres, and wellness resorts with documented client reach, staff qualifications, and satisfaction data.",
    featured: true,
  },
  {
    id: 15,
    name: "Best Yoga Instructor Samman",
    category: "Track C – AYUSH Recognitions",
    price: 1,
    inStock: true,
    image: "https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg",
    description:
      "For certified Yoga Instructors from government programmes or private practice with minimum 3 years of experience, recognised certification, and participant testimonials.",
  },
  {
    id: 16,
    name: "Best Panchakarma Therapist Samman",
    category: "Track C – AYUSH Recognitions",
    price: 1,
    inStock: true,
    image: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg",
    description:
      "For certified Panchakarma Therapists in government or private AYUSH settings with a BAMS or equivalent qualification and documented patient outcomes.",
  },
  {
    id: 17,
    name: "Best AYUSH Doctor – Government Sector Samman",
    category: "Track C – AYUSH Recognitions",
    price: 1,
    inStock: true,
    image: "https://images.pexels.com/photos/590045/pexels-photo-590045.jpeg",
    description:
      "For AYUSH doctors employed by government departments or hospitals (all systems eligible) with strong patient outcome records and a CMO/departmental recommendation.",
  },
  {
    id: 18,
    name: "Best AYUSH Doctor – Private Sector Samman",
    category: "Track C – AYUSH Recognitions",
    price: 1,
    inStock: true,
    image: "https://images.pexels.com/photos/935949/pexels-photo-935949.jpeg",
    description:
      "For AYUSH doctors in private practice or private hospitals with minimum 5 years of clinical experience, patient testimonials, and council registration.",
  },
  {
    id: 19,
    name: "Best AYUSH Healthcare Institution Samman",
    category: "Track C – AYUSH Recognitions",
    price: 1,
    inStock: true,
    image: "https://images.pexels.com/photos/668353/pexels-photo-668353.jpeg",
    description:
      "For registered AYUSH hospitals (IPD) and clinics (OPD) with minimum 2 years of operation, patient load data, and qualified staff register.",
  },
  {
    id: 20,
    name: "AYUSH Innovation and Research Samman",
    category: "Track C – AYUSH Recognitions",
    price: 1,
    inStock: true,
    image: "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg",
    description:
      "For individual researchers, AYUSH research institutions, and R&D entities with published papers, patent filings, or new drug approvals as tangible research output.",
  },
  {
    id: 21,
    name: "AYUSH Startup of the Year Samman",
    category: "Track C – AYUSH Recognitions",
    price: 1,
    inStock: true,
    image: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg",
    description:
      "For AYUSH sector startups incorporated after 2019 with demonstrated traction in revenue, user numbers, or health outcomes and a compelling pitch overview.",
  },
  {
    id: 22,
    name: "Best AYUSH Pharmacy Samman",
    category: "Track C – AYUSH Recognitions",
    price: 1,
    inStock: true,
    image: "https://images.pexels.com/photos/2449543/pexels-photo-2449543.jpeg",
    description:
      "For licensed AYUSH pharmaceutical manufacturers compliant with Schedule T GMP, with quality testing reports and a signed no-sample-failure declaration.",
  },
  {
    id: 23,
    name: "Best AYUSH Entrepreneur Samman",
    category: "Track C – AYUSH Recognitions",
    price: 1,
    inStock: true,
    image: "https://images.pexels.com/photos/4652058/pexels-photo-4652058.jpeg",
    description:
      "For founders or promoters of registered AYUSH manufacturing companies who have played a primary leadership role and demonstrated significant business growth.",
  },
  {
    id: 24,
    name: "Best AYUSH Exporter Samman",
    category: "Track C – AYUSH Recognitions",
    price: 1,
    inStock: true,
    image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
    description:
      "For registered AYUSH product exporters with documented export revenues for 2 financial years, an IEC certificate, and FSSAI or WHO-GMP export compliance.",
  },

  // ─── TRACK D: HEALTHCARE MANUFACTURERS (12 categories) ───────────────────
  {
    id: 25,
    name: "Outstanding Business Growth Samman – Industry Leader (above INR 500 Cr)",
    category: "Track D – Healthcare Manufacturers Recognitions",
    price: 1,
    inStock: true,
    image: "https://images.pexels.com/photos/7821486/pexels-photo-7821486.jpeg",
    description:
      "For pharma, AYUSH, or medical device manufacturers with annual turnover above INR 500 Crores, audited financials, and a 3-year revenue CAGR statement.",
    featured: true,
  },
  {
    id: 26,
    name: "Outstanding Business Growth Samman – Mid-Scale Enterprise (INR 100–500 Cr)",
    category: "Track D – Healthcare Manufacturers Recognitions",
    price: 1,
    inStock: true,
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
    description:
      "For pharma, AYUSH, or medical device manufacturers with annual turnover between INR 100–500 Crores with audited financials and documented CAGR over 3 years.",
  },
  {
    id: 27,
    name: "Outstanding Business Growth Samman – Emerging Enterprise (up to INR 100 Cr)",
    category: "Track D – Healthcare Manufacturers Recognitions",
    price: 1,
    inStock: true,
    image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg",
    description:
      "For pharma, AYUSH, or medical device manufacturers with annual turnover up to INR 100 Crores. MSMEs especially encouraged to apply.",
  },
  {
    id: 28,
    name: "Excellence in Global Representation Samman – Industry Leader (above INR 500 Cr)",
    category: "Track D – Healthcare Manufacturers Recognitions",
    price: 1,
    inStock: true,
    image: "https://images.pexels.com/photos/3943903/pexels-photo-3943903.jpeg",
    description:
      "For pharma or medical device manufacturers above INR 500 Crores with documented presence in regulated international markets and WHO-GMP or USFDA/EMA/MHRA approvals.",
  },
  {
    id: 29,
    name: "Excellence in Global Representation Samman – Mid-Scale Enterprise (INR 100–500 Cr)",
    category: "Track D – Healthcare Manufacturers Recognitions",
    price: 1,
    inStock: true,
    image: "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg",
    description:
      "For pharma, AYUSH, or medical device manufacturers INR 100–500 Crores with documented export revenues and destination country compliance certificates.",
  },
  {
    id: 30,
    name: "Excellence in Global Representation Samman – Emerging Enterprise (up to INR 100 Cr)",
    category: "Track D – Healthcare Manufacturers Recognitions",
    price: 1,
    inStock: true,
    image: "https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg",
    description:
      "For pharma, AYUSH, or medical device manufacturers up to INR 100 Crores with at least one export shipment or international regulatory filing.",
  },
  {
    id: 31,
    name: "Commitment to Quality and Compliance Samman",
    category: "Track D – Healthcare Manufacturers Recognitions",
    price: 1,
    inStock: true,
    image: "https://images.pexels.com/photos/8376263/pexels-photo-8376263.jpeg",
    description:
      "For registered pharma, AYUSH, and medical device manufacturers of all sizes with a clean regulatory record, current GMP certificate, and internal QA audit reports.",
  },
  {
    id: 32,
    name: "Breakout Smart Packaging Samman",
    category: "Track D – Healthcare Manufacturers Recognitions",
    price: 1,
    inStock: true,
    image: "https://images.pexels.com/photos/4021769/pexels-photo-4021769.jpeg",
    description:
      "For registered manufacturers that have commercially implemented an innovative packaging system that is safe, sustainable, and traceable.",
  },
  {
    id: 33,
    name: "Best In-House Testing and Laboratory Facility Samman",
    category: "Track D – Healthcare Manufacturers Recognitions",
    price: 1,
    inStock: true,
    image: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg",
    description:
      "For registered manufacturers with documented in-house testing facilities. Third-party-only testing is not eligible. MSMEs especially encouraged.",
  },
  {
    id: 34,
    name: "Breakout R&D and Innovation Samman",
    category: "Track D – Healthcare Manufacturers Recognitions",
    price: 1,
    inStock: true,
    image: "https://images.pexels.com/photos/3861438/pexels-photo-3861438.jpeg",
    description:
      "For registered manufacturers with documented R&D output (patent filing, new drug approval, or publication) in the preceding 3 years.",
  },
  {
    id: 35,
    name: "Employer and Workforce Excellence Samman",
    category: "Track D – Healthcare Manufacturers Recognitions",
    price: 1,
    inStock: true,
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    description:
      "For pharma, AYUSH, and medical device manufacturers with minimum 50 full-time employees demonstrating strong training, welfare, and diversity practices.",
  },
  {
    id: 36,
    name: "Best Qualified Technical Staff Samman",
    category: "Track D – Healthcare Manufacturers Recognitions",
    price: 1,
    inStock: true,
    image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg",
    description:
      "Open to all registered pharma, AYUSH, and medical device manufacturers. Recognises a Qualified Persons Register, training logs, and low attrition in technical roles.",
  },

  // ─── TRACK E: NUTRACEUTICALS (8 categories, new in 2026) ─────────────────
  {
    id: 37,
    name: "Outstanding Business Growth Samman – Industry Leader, Nutraceuticals (above INR 500 Cr)",
    category: "Track E – Nutraceuticals Recognitions",
    price: 1,
    inStock: true,
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    description:
      "For FSSAI Central License-holding nutraceutical manufacturers with annual turnover above INR 500 Crores, audited financials, and product SKU list with FSSAI category codes.",
    featured: true,
  },
  {
    id: 38,
    name: "Outstanding Business Growth Samman – Mid-Scale Enterprise, Nutraceuticals (INR 100–500 Cr)",
    category: "Track E – Nutraceuticals Recognitions",
    price: 1,
    inStock: true,
    image: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg",
    description:
      "For FSSAI-licensed nutraceutical manufacturers with annual turnover INR 100–500 Crores, including third-party manufacturers with principal brand supply list.",
  },
  {
    id: 39,
    name: "Outstanding Business Growth Samman – Emerging Enterprise, Nutraceuticals (up to INR 100 Cr)",
    category: "Track E – Nutraceuticals Recognitions",
    price: 1,
    inStock: true,
    image: "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg",
    description:
      "For FSSAI-licensed nutraceutical manufacturers with annual turnover up to INR 100 Crores. MSMEs and white-label manufacturers especially encouraged.",
  },
  {
    id: 40,
    name: "Excellence in Global Reach Samman – Industry Leader, Nutraceuticals (above INR 500 Cr)",
    category: "Track E – Nutraceuticals Recognitions",
    price: 1,
    inStock: true,
    image: "https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg",
    description:
      "For FSSAI-licensed nutraceutical manufacturers above INR 500 Crores with documented international export activity and FSSAI NOC or WHO-GMP export certificate.",
  },
  {
    id: 41,
    name: "Excellence in Global Reach Samman – Mid-Scale Enterprise, Nutraceuticals (INR 100–500 Cr)",
    category: "Track E – Nutraceuticals Recognitions",
    price: 1,
    inStock: true,
    image: "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg",
    description:
      "For FSSAI-licensed nutraceutical exporters in the INR 100–500 Crore range with export invoices, destination country list, and regulatory action declaration.",
  },
  {
    id: 42,
    name: "Excellence in Global Reach Samman – Emerging Enterprise, Nutraceuticals (up to INR 100 Cr)",
    category: "Track E – Nutraceuticals Recognitions",
    price: 1,
    inStock: true,
    image: "https://images.pexels.com/photos/6169042/pexels-photo-6169042.jpeg",
    description:
      "For FSSAI-licensed nutraceutical manufacturers up to INR 100 Crores with at least one export shipment or international filing.",
  },
  {
    id: 43,
    name: "Commitment to Quality and Compliance Samman – Nutraceuticals",
    category: "Track E – Nutraceuticals Recognitions",
    price: 1,
    inStock: true,
    image: "https://images.pexels.com/photos/8376296/pexels-photo-8376296.jpeg",
    description:
      "For all FSSAI-licensed nutraceutical manufacturers with a current GMP certificate, correct product labelling per FSSAI regulations, and internal QA audit reports.",
  },
  {
    id: 44,
    name: "Breakout Product Innovation Samman – Nutraceuticals",
    category: "Track E – Nutraceuticals Recognitions",
    price: 1,
    inStock: true,
    image: "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg",
    description:
      "For FSSAI-licensed nutraceutical manufacturers who have developed and commercially launched an innovative product in the last 3 years with health benefit evidence.",
  },

  // ─── CROSS-TRACK: SUSTAINABILITY & COMMUNITY (5 categories) ──────────────
  {
    id: 45,
    name: "Environmental Sustainability Leader Samman – Public Sector",
    category: "Cross-Track – Sustainability and Community Recognitions",
    price: 1,
    inStock: true,
    image: "https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg",
    description:
      "For government healthcare institutions with documented sustainability initiatives running for at least 12 months, with energy/water/waste reduction baselines.",
    featured: true,
  },
  {
    id: 46,
    name: "Environmental Sustainability Leader Samman – Private Sector",
    category: "Cross-Track – Sustainability and Community Recognitions",
    price: 1,
    inStock: true,
    image: "https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg",
    description:
      "For private hospitals, AYUSH institutions, and healthcare manufacturers with energy audit data, water management records, and biomedical waste compliance.",
  },
  {
    id: 47,
    name: "Community Health Outreach Leader Samman – Public Sector",
    category: "Cross-Track – Sustainability and Community Recognitions",
    price: 1,
    inStock: true,
    image: "https://images.pexels.com/photos/6749771/pexels-photo-6749771.jpeg",
    description:
      "For government health departments, NHM missions, and government AYUSH departments with authorised community health programmes and measurable beneficiary reach.",
  },
  {
    id: 48,
    name: "Community Health Outreach Leader Samman – Private Sector",
    category: "Cross-Track – Sustainability and Community Recognitions",
    price: 1,
    inStock: true,
    image: "https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg",
    description:
      "For private hospitals, AYUSH institutions, and manufacturers with documented community health programmes running for at least 12 months with outcome evidence.",
  },
  {
    id: 49,
    name: "Technology-Driven and CSR Impact Champion Samman",
    category: "Cross-Track – Sustainability and Community Recognitions",
    price: 1,
    inStock: true,
    image: "https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg",
    description:
      "Open to all organisations across all tracks using digital platforms, data, or CSR investment to deliver measurable community health outcomes.",
  },

  // ─── JURY CHOICE RECOGNITIONS (10 awards) ────────────────────────────────
  {
    id: 50,
    name: "Private Medical Institution of the Year",
    category: "Jury Choice Recognitions",
    price: 1,
    inStock: true,
    image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg",
    description:
      "Jury Choice recognition. Not open for direct nomination. Requires minimum 2 competitive nominations filed under Track B. The jury identifies recipients from the competitive nominee pool.",
    featured: true,
  },
  {
    id: 51,
    name: "Private Medical College of the Year",
    category: "Jury Choice Recognitions",
    price: 1,
    inStock: true,
    image: "https://images.pexels.com/photos/256401/pexels-photo-256401.jpeg",
    description:
      "Jury Choice recognition. Not open for direct nomination. Requires minimum 2 competitive nominations filed under Track B.",
  },
  {
    id: 52,
    name: "AYUSH Institution of the Year",
    category: "Jury Choice Recognitions",
    price: 1,
    inStock: true,
    image: "https://images.pexels.com/photos/1539673/pexels-photo-1539673.jpeg",
    description:
      "Jury Choice recognition. Not open for direct nomination. Requires minimum 2 competitive nominations filed under Track C.",
  },
  {
    id: 53,
    name: "AYUSH Medical College of the Year",
    category: "Jury Choice Recognitions",
    price: 1,
    inStock: true,
    image: "https://images.pexels.com/photos/5863391/pexels-photo-5863391.jpeg",
    description:
      "Jury Choice recognition. Not open for direct nomination. Requires minimum 2 competitive nominations filed under Track C.",
  },
  {
    id: 54,
    name: "Nutraceutical Company of the Year",
    category: "Jury Choice Recognitions",
    price: 1,
    inStock: true,
    image: "https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg",
    description:
      "Jury Choice recognition. Not open for direct nomination. Requires minimum 2 competitive nominations filed under Track E.",
  },
  {
    id: 55,
    name: "Lifetime Achievement – Doctor in Government Service",
    category: "Jury Choice Recognitions",
    price: 1,
    inStock: true,
    image: "https://images.pexels.com/photos/260339/pexels-photo-260339.jpeg",
    description:
      "Jury Choice recognition. Organisations or industry bodies may submit a Letter of Recommendation and Detailed Profile to PHDCCI. Not open for direct self-nomination.",
  },
  {
    id: 56,
    name: "Lifetime Achievement – Doctor in Private Practice",
    category: "Jury Choice Recognitions",
    price: 1,
    inStock: true,
    image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg",
    description:
      "Jury Choice recognition. Organisations or industry bodies may submit a Letter of Recommendation and Detailed Profile to PHDCCI.",
  },
  {
    id: 57,
    name: "Lifetime Achievement – AYUSH Doctor (Government Service)",
    category: "Jury Choice Recognitions",
    price: 1,
    inStock: true,
    image: "https://images.pexels.com/photos/4225881/pexels-photo-4225881.jpeg",
    description:
      "Jury Choice recognition. Organisations or industry bodies may submit a Letter of Recommendation and Detailed Profile to PHDCCI.",
  },
  {
    id: 58,
    name: "Lifetime Achievement – AYUSH Doctor (Private Practice)",
    category: "Jury Choice Recognitions",
    price: 1,
    inStock: true,
    image: "https://images.pexels.com/photos/3938922/pexels-photo-3938922.jpeg",
    description:
      "Jury Choice recognition. Organisations or industry bodies may submit a Letter of Recommendation and Detailed Profile to PHDCCI.",
  },
  {
    id: 59,
    name: "Pioneer of Nutraceuticals",
    category: "Jury Choice Recognitions",
    price: 1,
    inStock: true,
    image: "https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg",
    description:
      "Jury Choice recognition. Organisations or industry bodies may submit a Letter of Recommendation and Detailed Profile to PHDCCI.",
  },
];

export const categories = [
  "All",
  "Track A – Public Health Recognitions",
  "Track B – Private Healthcare Recognitions",
  "Track C – AYUSH Recognitions",
  "Track D – Healthcare Manufacturers Recognitions",
  "Track E – Nutraceuticals Recognitions",
  "Cross-Track – Sustainability and Community Recognitions",
  "Jury Choice Recognitions",
];