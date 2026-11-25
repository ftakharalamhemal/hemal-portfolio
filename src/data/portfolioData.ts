export interface ExpertiseArea {
  index: string;
  title: string;
  subtitle: string;
  description: string;
  capabilities: string[];
}

export interface ExperienceItem {
  id: string;
  organization: string;
  designation: string;
  duration: string;
  location: string;
  focus: string;
  responsibilities: string[];
}

export interface ProjectPhoto {
  src: string;
  alt: string;
  caption: string;
}

export type ProjectCategory = 'all' | 'proposals' | 'feasibility' | 'rail';

export interface ProjectItem {
  id: string;
  title: string;
  clientOrDonor: string;
  role: string;
  duration: string;
  category: Exclude<ProjectCategory, 'all'>;
  categoryLabel: string;
  location: string;
  overview: string;
  highlights: string[];
  deliverables: string[];
  photos?: ProjectPhoto[];
}

export type ProposalSector =
  | 'All'
  | 'Water & Climate'
  | 'Infrastructure & Health'
  | 'Agriculture & Fisheries'
  | 'Policy, Port & Labor';

export interface ProposalSubmissionItem {
  index: string;
  title: string;
  authority: string;
  sector: Exclude<ProposalSector, 'All'>;
  packageRef?: string;
}

export interface FeasibilityStudyItem {
  index: string;
  title: string;
  client: string;
  duration: string;
  period: string;
  location: string;
}

export interface EventPhoto {
  src: string;
  alt: string;
  caption: string;
  aspect?: 'portrait' | 'landscape';
}

export interface EventHighlight {
  id: string;
  kicker: string;
  title: string;
  date: string;
  venue: string;
  organization: string;
  role: string;
  paragraphs: string[];
  stats: { label: string; value: string }[];
  photos: EventPhoto[];
}

export interface CredentialItem {
  id: string;
  title: string;
  issuer: string;
  identifier: string;
  type: 'Membership' | 'Training';
  detail: string;
}

export interface EducationItem {
  degree: string;
  department: string;
  institution: string;
  result: string;
  year: string;
}

export interface ReferenceItem {
  name: string;
  designation: string;
  organization: string;
  phone: string;
  email: string;
}

export const PROFILE = {
  name: 'Iftakhar Alam Hemal',
  roleLine: 'Civil Engineer · Senior Executive Officer (Civil) at SRCL',
  currentRole: 'Senior Executive Officer (Civil)',
  currentOrg: 'Sustainable Research and Consultancy Limited',
  location: 'Gulbagh, Malibagh, Dhaka-1217, Bangladesh',
  email: 'hemal8666@gmail.com',
  phone: '+8801637-607215',
  linkedinUrl: 'https://www.linkedin.com/in/iftakhar-alam-hemal/',
  cvPdfUrl: '/assets/aistudio/Cv_of_Iftakhar_Alam_Hemal_37b1a367.pdf',
  portraitUrl: '/assets/aistudio/Formal_Pic_himel_3f67e020.jpg',
  headline:
    'EOI, RFP and Proposal Writing | e-GP Tender Submission | Feasibility Studies | Field Coordination',
  summary:
    'Civil Engineer with over 3.5 years of hands-on experience across government, donor-funded, and flagship rail infrastructure projects. I specialize in winning and delivering complex consulting and civil assignments—from e-GP procurement and donor-compliant proposals to field hydrogeological coordination and site supervision.',
};

export const HERO_SNAPSHOT = [
  {
    value: '3.5+ Years',
    label: 'Engineering & Advisory',
    context: 'Consultancy, procurement & rail works',
  },
  {
    value: '4 Core Areas',
    label: 'End-to-End Delivery',
    context: 'EOI/RFP, e-GP, feasibility & field ops',
  },
  {
    value: 'IEB & ADB',
    label: 'Verified Registrations',
    context: 'National engineer & donor CMS roster',
  },
  {
    value: 'PPR 2025',
    label: 'e-GP Procurement Ready',
    context: 'Works, Goods & Services tender bids',
  },
];

export const EXPERTISE_AREAS: ExpertiseArea[] = [
  {
    index: '01',
    title: 'EOI, RFP & Proposal Writing',
    subtitle: 'Government, IMED & Donor Submissions',
    description:
      'Structuring and authoring winning technical and financial proposals aligned strictly with client Terms of Reference (ToR), IMED guidelines, and multilateral donor standards.',
    capabilities: [
      'EOI, RFP & tender document authoring',
      'Methodology, work plan & staffing schedules',
      'ToR-based expert CV shortlisting & formatting',
      'DPP format & donor regulatory compliance',
    ],
  },
  {
    index: '02',
    title: 'e-GP Tender Submission',
    subtitle: 'Electronic Government Procurement (PPR 2025)',
    description:
      'Managing end-to-end electronic bidding across Works, Goods, and Services packages with audit-ready documentation, financial scheduling, and timely portal submission.',
    capabilities: [
      'Full-cycle e-GP bid preparation & submission',
      'Financial proposal preparation in e-GP portal',
      'Eligibility, matrix & credential verification',
      'Market intelligence & tender opportunity tracking',
    ],
  },
  {
    index: '03',
    title: 'Feasibility Studies & Assessments',
    subtitle: 'Technical Analysis & Environmental Planning',
    description:
      'Preparing and reviewing feasibility study reports, Initial Environmental Examinations (IEE), and baseline surveys integrating institutional, risk, and cost dimensions.',
    capabilities: [
      'Feasibility study & baseline survey reporting',
      'Institutional arrangement & implementation strategy',
      'Risk assessment & preliminary cost estimation',
      'Concept notes, inception plans & client briefings',
    ],
  },
  {
    index: '04',
    title: 'Field Coordination & Site Engineering',
    subtitle: 'WASH, Hydrogeology & Heavy Civil Works',
    description:
      'Leading field teams, hydrogeological monitoring, community KIIs, and structural concrete quality assurance across coastal islands and major national rail corridors.',
    capabilities: [
      'Production & monitoring well supervision & aquifer tests',
      'KoboToolbox surveys & Key Informant Interviews (KIIs)',
      'Concrete structural casting & material QA checks',
      'CSC Request for Inspection (RFI) & estimation',
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'srcl-senior',
    organization: 'Sustainable Research and Consultancy Limited (SRCL)',
    designation: 'Senior Executive Officer (Civil)',
    duration: 'January 2026 – Present',
    location: 'Dhaka, Bangladesh',
    focus: 'Procurement Leadership, Feasibility Review & Mentoring',
    responsibilities: [
      'Lead IMED, government, and donor-funded EOI, RFP, technical, and financial proposal operations in full compliance with donor regulations and DPP formats.',
      'Manage end-to-end e-GP tender submissions (Works, Goods, and Services), including financial proposals through the e-GP system.',
      'Shortlist, evaluate, and finalize project experts’ CVs against ToR criteria and donor eligibility standards.',
      'Oversee Feasibility Study Reports covering technical analysis, institutional arrangements, implementation strategy, risk assessment, and cost estimates.',
      'Drive market intelligence, opportunity assessment, management briefs, and technical mentoring for junior and executive staff.',
    ],
  },
  {
    id: 'srcl-exec',
    organization: 'Sustainable Research and Consultancy Limited (SRCL)',
    designation: 'Executive Officer (Civil)',
    duration: 'January 2025 – December 2025',
    location: 'Dhaka, Bangladesh',
    focus: 'Multidisciplinary Proposals, Field Coordination & Budgets',
    responsibilities: [
      'Coordinated engineers, planners, environmental specialists, and economists to compile methodologies, staffing plans, schedules, and budgets.',
      'Supported baseline surveys and project formulation alongside field coordinators and data validation teams.',
      'Represented the firm in stakeholder consultations, pre-bid meetings, site visits, and local authority liaisons.',
      'Maintained updated organizational profiles, project experience matrices, and expert CV databases for rapid bid assembly.',
    ],
  },
  {
    id: 'srcl-junior',
    organization: 'Sustainable Research and Consultancy Limited (SRCL)',
    designation: 'Junior Executive Officer (Civil)',
    duration: 'September 2023 – December 2024',
    location: 'Dhaka, Bangladesh',
    focus: 'Market Research, ToR Compliance & Technical Annexes',
    responsibilities: [
      'Conducted sector trend studies, competitor analysis, and opportunity screening for infrastructure and development tenders.',
      'Performed compliance checks against ToR requirements, procurement rules, and eligibility criteria.',
      'Drafted survey summaries, technical annexes, concept notes, and internal progress briefs under senior supervision.',
      'Maintained structured audit records of ongoing bids, awarded contracts, and client correspondence.',
    ],
  },
  {
    id: 'crec-padma',
    organization: 'China Railway Engineering Corporation (CREC)',
    designation: 'Assistant Engineer — Padma Rail Link Project',
    duration: 'January 2023 – August 2023',
    location: 'Padma Rail Corridor, Bangladesh',
    focus: 'Structural Concrete QA, Station Works & CSC Inspections',
    responsibilities: [
      'Supervised Parapet Wall, Anchorage Sealing, Restraint Block, and Expansion Joint concrete casting strictly per approved Method Statements.',
      'Prepared Requests for Inspection (RFI) and technical quality checklists for the Construction Supervision Consultant (CSC).',
      'Directed station building construction activities, labor scheduling, detailed quantity estimation, and site problem resolution.',
      'Delivered daily technical progress and safety compliance reports to senior Chinese engineers.',
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'undp-gca-wash',
    title:
      'Assessment of MAR, Pond Sand Filter (PSF), Reverse Osmosis (RO) & Groundwater Salinity Front',
    clientOrDonor: 'Gender-Responsive Coastal Adaptation (GCA) Project · Funded by UNDP Bangladesh',
    role: 'Field & Team Coordinator (SRCL)',
    duration: 'December 2024 – May 2025 (6 Months)',
    category: 'feasibility',
    categoryLabel: 'Feasibility Study & Field Assessment',
    location: '10 Coastal Upazilas & Island Sites, Bangladesh',
    overview:
      'Led field operations and presented technical findings at the UNDP National Dissemination & Sharing Workshop—evaluating Managed Aquifer Recharge (MAR), PSF, RO systems, and salinity fronts for gender-responsive, community-focused drinking water solutions in coastal Bangladesh.',
    highlights: [
      'Supervised installation of 2-inch production wells and 1.5-inch monitoring wells across island sites, coordinating water quality testing (up to 30 samples/island) and aquifer salinity analysis.',
      'Identified and assessed operational and abandoned PSF units across 10 Upazilas and evaluated RO system performance and effluent compliance.',
      'Executed community surveys (KoboToolbox, Google Forms, paper) and Key Informant Interviews (KIIs) with local stakeholders and technical experts.',
      'Contributed technical field findings and represented SRCL at the UNDP National Sharing Workshop.',
    ],
    deliverables: [
      'Aquifer & Groundwater Salinity Monitoring',
      'PSF & RO Performance & Effluent Audit',
      'KoboToolbox Surveys & Stakeholder KIIs',
      'National Sharing Workshop Dissemination',
    ],
    photos: [
      {
        src: '/assets/aistudio/1778823295393_8576ab0e.jpg',
        alt: 'Officials and SRCL team on stage at the UNDP GCA National Dissemination & Sharing Workshop',
        caption:
          'National Sharing Workshop on MAR, PSF, RO Systems & Salinity Front — GCA Project, UNDP Bangladesh',
      },
      {
        src: '/assets/aistudio/1778823295551_85664ac8.jpg',
        alt: 'Iftakhar Alam Hemal with SRCL colleagues and project leadership at the UNDP GCA National Sharing Workshop',
        caption: 'Team Coordinator with SRCL leadership at the UNDP GCA National Sharing Workshop',
      },
    ],
  },
  {
    id: 'padma-rail-link',
    title: 'Padma Rail Link Project — Viaduct Structural Works & Station Construction',
    clientOrDonor: 'China Railway Engineering Corporation (CREC)',
    role: 'Assistant Engineer',
    duration: 'January 2023 – August 2023 (8 Months)',
    category: 'rail',
    categoryLabel: 'Rail & Heavy Civil Engineering',
    location: 'Padma Rail Corridor, Bangladesh',
    overview:
      'Executed on-site civil supervision, concrete structural casting QA, CSC inspection management, and station building construction on one of Bangladesh’s flagship railway corridors.',
    highlights: [
      'Supervised concrete casting for Parapet Walls, Anchorage Sealing, Restraint Blocks, and Expansion Joints.',
      'Prepared Requests for Inspection (RFI) and quality checklists for the Construction Supervision Consultant (CSC).',
      'Managed station building construction, workforce coordination, detailed quantity estimation, and daily safety compliance.',
    ],
    deliverables: [
      'CSC RFI & Inspection Quality Checklists',
      'Concrete Casting & Material QA Records',
      'Station Construction & Labor Scheduling',
      'Detailed Quantity Estimation',
    ],
  },
];

export const PROPOSAL_SUBMISSIONS: ProposalSubmissionItem[] = [
  {
    index: '01',
    title: 'Assessment of Pond Sand Filter, Reverse Osmosis System and the Groundwater Salinity Front (GCA Project)',
    authority: 'UNDP Bangladesh (Donor-Funded Project)',
    sector: 'Water & Climate',
  },
  {
    index: '02',
    title: 'Developing Resilient Watershed Management and Monitoring Plan through Hydrogeological Analysis, Risk Mapping, and Nature-Based Solutions',
    authority: 'Donor-Funded Project',
    sector: 'Water & Climate',
  },
  {
    index: '03',
    title: 'Environmental Assessment: A Sectoral Analysis of Water, Agriculture and Rural Development Projects',
    authority: 'Planning Commission',
    sector: 'Water & Climate',
  },
  {
    index: '04',
    title: 'Feasibility Study on Control of Reproductive Diseases of Cross-bred Cattle and Calf Health Care and Management Project',
    authority: 'Department of Livestock Services (DLS)',
    sector: 'Agriculture & Fisheries',
    packageRef: 'Package No: SR-2',
  },
  {
    index: '05',
    title: 'Assess and Evaluate the Operational Status of 5 Reverse Osmosis (RO) Plants under the Satkhira Resilient Water System Pilot Project',
    authority: 'Uttaran (NGO)',
    sector: 'Water & Climate',
  },
  {
    index: '06',
    title: 'Contracting a Firm to Conduct the Feasibility Study of Local Government Initiative on Climate Change (LoGIC) Phase-II',
    authority: 'UNDP',
    sector: 'Water & Climate',
  },
  {
    index: '07',
    title: 'Conduct Customer Satisfaction Survey on Water Utility Services in CWASA Catchment Areas',
    authority: 'WaterAid',
    sector: 'Water & Climate',
  },
  {
    index: '08',
    title: 'Consultancy Service for Feasibility Study of Enhance Production of Oil Crops (2nd Revised) Project',
    authority: 'Department of Agricultural Extension (DAE)',
    sector: 'Agriculture & Fisheries',
  },
  {
    index: '09',
    title: 'Consultancy Services for Feasibility Study for Ch27+900 to Ch28+860m of Companyganj–Nabinagar Road (Z-1206) and Ch00+000 to Ch00+600m of Nabinagar–Ashuganj Road (Z-2031), Brahmanbaria (2025–2026)',
    authority: 'Roads and Highways Department (RHD), Road Division, Brahmanbaria',
    sector: 'Infrastructure & Health',
  },
  {
    index: '10',
    title: "Feasibility Study and Master Plan for Sustainable Tuna Fishing in the Bay of Bengal and Indian Ocean: Unlocking Bangladesh's Blue-Economy Potential",
    authority: 'Department of Fisheries',
    sector: 'Agriculture & Fisheries',
    packageRef: 'Package No: SD3',
  },
  {
    index: '11',
    title: 'Program on Agricultural and Rural Transformation for Nutrition, Entrepreneurship and Resilience in Bangladesh (PARTNER) — DAE Part',
    authority: 'Implementation Monitoring and Evaluation Division (IMED)',
    sector: 'Agriculture & Fisheries',
  },
  {
    index: '12',
    title: 'Development of National Policy for Inclusive Construction and Road Dust Emissions Mitigation for Bangladesh',
    authority: 'International Centre for Integrated Mountain Development (ICIMOD), Kathmandu, Nepal',
    sector: 'Policy, Port & Labor',
  },
  {
    index: '13',
    title: 'Creating Employment at Home and Abroad through Caregiving and Foreign Language Training for Unemployed Youth in All Metropolitan Cities of the Country',
    authority: 'Department of Youth Development',
    sector: 'Policy, Port & Labor',
  },
  {
    index: '14',
    title: 'Consulting Services for Organizational Structure Review and HR Policy Reform of the Mongla Port Authority (MPA)',
    authority: 'Mongla Port Authority (MPA)',
    sector: 'Policy, Port & Labor',
  },
  {
    index: '15',
    title: 'Preliminary Feasibility Study for 43.00 Acres of Land under the Jurisdiction of the Public Works Department at Karail Bosti, Mohakhali, Dhaka',
    authority: 'PWD Survey Division',
    sector: 'Infrastructure & Health',
  },
  {
    index: '16',
    title: 'Conducting a Combined Feasibility Study for Karnaphuli 250-Bedded Hospital, Hathazari 600-Bedded Hospital, and Nilphamari 1000-Bedded Hospital',
    authority: 'Directorate General of Health Services (DGHS)',
    sector: 'Infrastructure & Health',
  },
  {
    index: '17',
    title: 'Feasibility Study for the Expansion and Modernization of Healthcare Services by Upgrading All Upazila Health Complexes in Bangladesh to 151-Bed Facilities',
    authority: 'Public Works Department (PWD)',
    sector: 'Infrastructure & Health',
  },
  {
    index: '18',
    title: 'Hiring a National Firm for the Preparation of a Rapid Assessment on Regulating Labour Administration in EPZs and Other Industrial Zones: Bangladesh and International Practices',
    authority: 'International Labour Organization (ILO)',
    sector: 'Policy, Port & Labor',
  },
  {
    index: '19',
    title: 'Feasibility Study for the Construction of BCS Tax Academy Project',
    authority: 'Public Works Department (PWD)',
    sector: 'Infrastructure & Health',
  },
  {
    index: '20',
    title: 'Assessment of Working Conditions, Decent Work Issues and Workplace Risks, and Development of Capacity-Building Packages for Decent Work under the DECENT Project',
    authority: 'SAJIDA Foundation',
    sector: 'Policy, Port & Labor',
  },
];

export const FEASIBILITY_STUDIES: FeasibilityStudyItem[] = [
  {
    index: '01',
    title:
      'Feasibility Study and DPP Preparation for "Establishment of a 1000 Bed Bangladesh-China Friendship General Hospital to Provide Advanced Medical Services"',
    client: 'Directorate General of Health Services (DGHS) in association with NAPD',
    duration: '3 Months',
    period: 'Dec 2025 – Feb 2026',
    location: 'Nilphamari',
  },
  {
    index: '02',
    title:
      'Feasibility Study and DPP Preparation for "Construction Project of a 600-Bed Medical College Hospital, Nursing Institute, and Regional Health Management Training Center at Hathazari, Chattogram"',
    client: 'Directorate General of Health Services (DGHS) in association with NAPD',
    duration: '3 Months',
    period: 'Dec 2025 – Feb 2026',
    location: 'Chattogram',
  },
  {
    index: '03',
    title:
      'Feasibility Study and DPP Preparation for "Construction Project of a 100-Bed Upazila Health Complex at Karnaphuli, Chattogram"',
    client: 'Directorate General of Health Services (DGHS) in association with NAPD',
    duration: '3 Months',
    period: 'Dec 2025 – Feb 2026',
    location: 'Chattogram',
  },
  {
    index: '04',
    title: 'Feasibility Study and Survey of Reconstruction of Kurigram District Jail Project',
    client: 'Public Works Department (PWD)',
    duration: '3 Months',
    period: 'July 2025 – Sept 2025',
    location: 'Kurigram',
  },
  {
    index: '05',
    title: 'Feasibility Study and Survey of Reconstruction of Rajshahi Central Jail Project',
    client: 'Public Works Department (PWD)',
    duration: '3 Months',
    period: 'June 2025 – Sept 2025',
    location: 'Rangpur',
  },
  {
    index: '06',
    title: 'Feasibility Study and Survey of Reconstruction of Rangpur Central Jail Project',
    client: 'Public Works Department (PWD)',
    duration: '5 Months',
    period: 'April 2025 – August 2025',
    location: 'Rangpur',
  },
  {
    index: '07',
    title:
      'Feasibility Study and Survey for Re-Construction of Rangamati and Khagrachari District Jail Project [Khagrachari Part]',
    client: 'Public Works Department (PWD)',
    duration: '6 Months',
    period: 'April 2025 – Sept 2025',
    location: 'Khagrachari',
  },
  {
    index: '08',
    title:
      'Feasibility Study and Survey for Re-Construction of Rangamati and Khagrachari District Jail Project [Rangamati Part]',
    client: 'Public Works Department (PWD)',
    duration: '3 Months',
    period: 'April 2025 – Sept 2025',
    location: 'Rangamati',
  },
  {
    index: '09',
    title: 'Feasibility Study for "Construction of Munshiganj Medical College Hospital"',
    client: 'Health Services Division and PWD',
    duration: '6 Months',
    period: 'June 2024 – Dec 2024',
    location: 'Munshiganj',
  },
  {
    index: '10',
    title:
      'Feasibility Study for "Vertical Expansion and Upgradation to International Standards of the National Institute of Ophthalmology and Hospital Project"',
    client: 'Health Services Division and PWD',
    duration: '6 Months',
    period: 'May 2024 – Nov 2024',
    location: 'Dhaka',
  },
  {
    index: '11',
    title: 'Feasibility Study of Project Construction of Satellite Town at Chakpara Area in Rajshahi City',
    client: 'Rajshahi City Corporation',
    duration: '6 Months',
    period: 'May 2024 – October 2024',
    location: 'Rajshahi',
  },
  {
    index: '12',
    title:
      'Feasibility Study of Construction of Quarters for Government Officials/Employees in Mymensingh District (Including Project Design-Drawing and Masterplan Preparation)',
    client: 'Public Works Department (PWD)',
    duration: '6 Months',
    period: 'April 2024 – Sept 2024',
    location: 'Mymensingh',
  },
  {
    index: '13',
    title: 'Feasibility Study of the "Construction of Central Jail Hospital" Project',
    client: 'Public Works Department (PWD)',
    duration: '6 Months',
    period: 'April 2024 – Oct 2024',
    location: 'Keraniganj',
  },
  {
    index: '14',
    title:
      'Feasibility Study for Improvement of National Highways (N 506, N 509 & Z 5905) Connecting Kurigram and Lalmonirhat District Headquarters with Divisional Towns and SASEC Corridor',
    client: 'GoB, Roads and Highways Department (RHD)',
    duration: '6 Months',
    period: 'Feb 2024 – July 2024',
    location: 'Rangpur, Kurigram, Lalmonirhat',
  },
  {
    index: '15',
    title:
      'Feasibility Study for "Construction of the Academic Building of the National Institute of Cardiovascular Diseases and Hospital at Sher-e-Bangla Nagar, Dhaka"',
    client: 'Health Services Division and PWD',
    duration: '6 Months',
    period: 'Dec 2023 – June 2024',
    location: 'Dhaka',
  },
  {
    index: '16',
    title:
      'Feasibility Study of Construction of Training Academy of Department of Narcotics Control (Including EIA)',
    client: 'Department of Narcotics Control (DNC)',
    duration: '6 Months',
    period: 'Dec 2023 – May 2024',
    location: 'Kushtia',
  },
  {
    index: '17',
    title:
      'Feasibility Study of Construction of 41 District Offices (07 in 1st Phase) Project by Department of Narcotics Control (Including Project Design-Drawing and Masterplan Preparation)',
    client: 'Department of Narcotics Control (DNC)',
    duration: '6 Months',
    period: 'Aug 2023 – Jan 2024',
    location: '7 Districts',
  },
  {
    index: '18',
    title:
      'Feasibility Study of the "Construction of Drug Addiction Treatment and Rehabilitation Centres in 6 Divisional Cities" Project (Including EIA)',
    client: 'Department of Narcotics Control (DNC)',
    duration: '6 Months',
    period: 'Aug 2023 – January 2024',
    location: 'Rajshahi, Khulna, Barisal, Rangpur, Sylhet, Chattogram, Mymensingh',
  },
  {
    index: '19',
    title: 'Feasibility Study for "Construction of Khulna VAT and Customs House Building Project"',
    client: 'PWD, Khulna VAT and Customs',
    duration: '6 Months',
    period: 'June 2023 – Dec 2023',
    location: 'Khulna',
  },
  {
    index: '20',
    title: 'Establishment of 60 Day Care Centers',
    client: 'Department of Women Affairs (DWA)',
    duration: '6 Months',
    period: 'June 2022 – Dec 2022',
    location: '64 Districts',
  },
  {
    index: '21',
    title:
      'Feasibility Study of the Project titled "Construction of Permanent Building of Training Academy, Auditorium and Day Center of the Department of Women Affairs" (Including EIA)',
    client: 'Department of Women Affairs (DWA)',
    duration: '6 Months',
    period: 'May 2022 – Oct 2022',
    location: 'Khulna, Rajshahi, Chattogram, Gopalganj, Mymensingh, Faridpur',
  },
  {
    index: '22',
    title:
      'Feasibility Study of the "Construction of Modern Buildings for Divisional Offices of the Anti-Corruption Commission in Khulna, Rangpur, Rajshahi, Barisal, and Sylhet" Project (Including EIA)',
    client: 'Anti-Corruption Commission (ACC)',
    duration: '6 Months',
    period: 'April 2022 – September 2022',
    location: 'Khulna, Rangpur, Rajshahi, Barishal, Sylhet',
  },
  {
    index: '23',
    title:
      'Feasibility Study of "Construction of Complexes of Women Affairs Department in Khulna, Rajshahi, Chattogram Divisional District Cities and Gopalganj Districts (1st Phase)" and "District Level (1st Phase)" (Including EIA)',
    client: 'Department of Women Affairs (DWA)',
    duration: '6 Months',
    period: 'Mar 2022 – August 2022',
    location: 'Khulna, Rajshahi, Chattogram, Gopalganj & 7 Other Districts',
  },
];

export const EVENT_HIGHLIGHTS: EventHighlight[] = [
  {
    id: 'stamford-career-expo-2026',
    kicker: 'Alumni Representation & Industry Engagement',
    title: 'Stamford University Career Expo 2026',
    date: '03 October 2026',
    venue: 'Stamford University Bangladesh, 51 Siddheswari, Dhaka',
    organization: 'Sustainable Research & Consultancy Ltd. (SRCL)',
    role: 'Senior Executive Officer (Civil)',
    paragraphs: [
      'Proud to be part of the Stamford University Career Expo 2026, featuring 1,000+ job and internship opportunities.',
      'As a Civil Engineering graduate of Stamford University Bangladesh, it was a special feeling to return to my university while representing Sustainable Research & Consultancy Ltd. (SRCL), connecting with students, graduates, and future professionals at my alma mater.',
    ],
    stats: [
      { label: 'Expo Scale', value: '1,000+ Roles' },
      { label: 'Representing', value: 'SRCL' },
      { label: 'Alma Mater', value: 'Civil ’23' },
    ],
    photos: [
      {
        src: '/assets/aistudio/1791124319299_857d74d0.jpg',
        alt: 'Iftakhar Alam Hemal holding appreciation crest at Stamford University Career Expo 2026',
        caption: 'Receiving appreciation crest at Stamford University Career Expo 2026',
        aspect: 'portrait',
      },
      {
        src: '/assets/aistudio/1791124319746_b029433c.jpg',
        alt: 'Iftakhar Alam Hemal with the SRCL team, faculty members, and students at the SRCL Career Expo booth',
        caption: 'SRCL booth with faculty, students & graduates at Stamford University',
        aspect: 'portrait',
      },
    ],
  },
  {
    id: 'doe-river-pollution-workshop-2026',
    kicker: 'Environmental Monitoring & Technical Workshop',
    title: 'Volunteer Training Workshop: Survey of River and Industrial Pollution around Dhaka City',
    date: '13 September 2026',
    venue: 'Department of Environment (DoE), Agargaon, Dhaka',
    organization: 'Department of Environment (GoB) & Stamford University Bangladesh',
    role: 'Representative, SRCL (Senior Executive Officer)',
    paragraphs: [
      'Participated on behalf of SRCL in the Volunteer Training Workshop organized by the Department of Environment (GoB) in cooperation with Stamford University Bangladesh, focused on river and industrial pollution assessment, environmental monitoring, and systematic field survey methods around Dhaka City.',
      'Engaged with environmental experts, researchers, and academics to support evidence-based pollution control and resilient water management—because protecting our rivers means protecting public health and future generations.',
    ],
    stats: [
      { label: 'Organizer', value: 'DoE, GoB' },
      { label: 'Partner', value: 'Stamford Univ.' },
      { label: 'Representing', value: 'SRCL' },
    ],
    photos: [
      {
        src: '/assets/aistudio/1789383934452_c824ceee.jpg',
        alt: 'Official programme banner for the Volunteer Training Workshop on Survey of River and Industrial Pollution around Dhaka City',
        caption: 'Official programme banner — DoE, Agargaon, Dhaka (13 September 2026)',
        aspect: 'landscape',
      },
      {
        src: '/assets/aistudio/1789383934512_2d1f090d.jpg',
        alt: 'Group photo of participants, DoE officials, and Stamford University representatives in the DoE auditorium',
        caption: 'Participants, DoE officials & academics at the DoE auditorium',
        aspect: 'landscape',
      },
    ],
  },
  {
    id: 'undp-gca-sharing-workshop',
    kicker: 'National Dissemination & Sharing Workshop',
    title: 'Assessment of MAR, PSF, RO Systems & Salinity Front in Coastal Bangladesh',
    date: 'UNDP GCA Project',
    venue: 'National Sharing Workshop, Dhaka, Bangladesh',
    organization: 'Gender-Responsive Coastal Adaptation (GCA) Project · Funded by UNDP Bangladesh',
    role: 'Team Coordinator · Sustainable Research & Consultancy Limited (SRCL)',
    paragraphs: [
      'Honored to participate in the National Sharing Workshop on Findings from the Assessment of MAR, PSF, RO Systems, and Salinity Front in Coastal Bangladesh, under the Gender-Responsive Coastal Adaptation (GCA) Project, funded by UNDP Bangladesh.',
      'As a Team Coordinator with SRCL, contributed to groundwater monitoring and aquifer testing, assessment of PSF and RO systems, community surveys and KIIs, and evaluating sustainable, gender-responsive drinking water solutions in coastal Bangladesh.',
    ],
    stats: [
      { label: 'Donor', value: 'UNDP Bangladesh' },
      { label: 'Programme', value: 'GCA Project' },
      { label: 'Role', value: 'Team Coordinator' },
    ],
    photos: [
      {
        src: '/assets/aistudio/1778823295393_8576ab0e.jpg',
        alt: 'Officials and SRCL team on stage at the UNDP GCA National Dissemination & Sharing Workshop',
        caption: 'National Sharing Workshop — GCA Project, UNDP Bangladesh',
        aspect: 'landscape',
      },
      {
        src: '/assets/aistudio/1778823295551_85664ac8.jpg',
        alt: 'Iftakhar Alam Hemal with SRCL colleagues and project leadership at the UNDP GCA National Sharing Workshop',
        caption: 'Team Coordinator with SRCL leadership at the UNDP GCA Workshop',
        aspect: 'portrait',
      },
    ],
  },
];

export const CREDENTIALS: CredentialItem[] = [
  {
    id: 'ieb',
    title: 'Member, Institution of Engineers, Bangladesh (IEB)',
    issuer: 'The Institution of Engineers, Bangladesh',
    identifier: 'Membership No: A-28784',
    type: 'Membership',
    detail: 'Registered national professional civil engineering member in Bangladesh.',
  },
  {
    id: 'adb-cms',
    title: 'Registered Consultant — ADB Consultant Management System (CMS)',
    issuer: 'Asian Development Bank (ADB)',
    identifier: 'Registration No: 249698',
    type: 'Membership',
    detail: 'Verified individual consultant profile for multilateral donor-funded opportunities.',
  },
  {
    id: 'egp-ppr',
    title: 'e-GP Training (Bidder Part) based on PPR 2025',
    issuer: 'Alltender · Mirpur-10, Dhaka',
    identifier: '01 May 2026',
    type: 'Training',
    detail:
      'Practical training covering e-GP bidding procedures, bidder participation, procurement documentation, and tender submission under PPR 2025.',
  },
  {
    id: 'ieb-pm',
    title: 'Key Concepts of Project Management & Their Application in Bangladesh',
    issuer: 'Civil Engineering Division, IEB',
    identifier: '5-Day Intensive Program',
    type: 'Training',
    detail:
      'Comprehensive 5-day program on project lifecycle governance, scheduling, cost control, and engineering delivery in Bangladesh.',
  },
  {
    id: 'pti-plan',
    title: 'Project Planning, Methodology, and Work Plan Development',
    issuer: 'Professional Training Institute',
    identifier: '5-Day Professional Program',
    type: 'Training',
    detail:
      'Focused training on technical methodology design, structured work plan preparation, and phased implementation strategies.',
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'Bachelor of Science (B.Sc.)',
    department: 'Civil Engineering',
    institution: 'Stamford University Bangladesh',
    result: 'CGPA: 3.50 / 4.00',
    year: '2023',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    department: 'Science',
    institution: 'Comilla Pathshala College',
    result: 'GPA: 3.58 / 5.00',
    year: '2018',
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    department: 'Science',
    institution: 'Comilla Residential School',
    result: 'GPA: 4.56 / 5.00',
    year: '2016',
  },
];

export const LANGUAGES = [
  { language: 'English', reading: 'High', writing: 'High', speaking: 'High' },
  { language: 'Bangla', reading: 'High', writing: 'High', speaking: 'High' },
];

export const REFERENCES: ReferenceItem[] = [
  {
    name: 'Md. Shohanuzzaman',
    designation: 'Deputy Manager (Business and Operation)',
    organization: 'Sustainable Research and Consultancy Limited',
    phone: '01645-501946',
    email: 'ronyshohanuzzaman@gmail.com',
  },
  {
    name: 'M A Khan Mamun',
    designation: 'Assistant Manager (Business and Operation)',
    organization: 'Sustainable Research and Consultancy Limited',
    phone: '01775-710710',
    email: 'makhanmamun@gmail.com',
  },
];

export type GalleryCategory =
  | 'All Photos'
  | 'Field & Surveys'
  | 'Institutional Meetings'
  | 'Workshops';

export interface GalleryPhoto {
  id: string;
  index: string;
  src: string;
  alt: string;
  caption: string;
  category: Exclude<GalleryCategory, 'All Photos'>;
  location: string;
}

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'field-highway-survey',
    index: '01',
    src: '/assets/aistudio/1765453064678_ecef7730.jpg',
    alt: 'Iftakhar Alam Hemal in a high-visibility safety vest with engineering and survey team members during a field site inspection',
    caption: 'Joint Highway & Corridor Feasibility Field Survey',
    category: 'Field & Surveys',
    location: 'Field Site, Bangladesh',
  },
  {
    id: 'field-salinity-testing',
    index: '02',
    src: '/assets/aistudio/PXL_20250409_061434398_f2dbdc74.jpg',
    alt: 'Iftakhar Alam Hemal conducting on-site water salinity and quality measurements using a digital meter in coastal Bangladesh',
    caption: 'On-Site Coastal Water Quality & Salinity Testing',
    category: 'Field & Surveys',
    location: 'Coastal Upazila, Bangladesh',
  },
  {
    id: 'field-khulna-team',
    index: '03',
    src: '/assets/aistudio/IMG_3523_222db4e4.jpg',
    alt: 'Field survey and coordination team assembled outside Divisional Govt. Public Library in Khulna',
    caption: 'Field Survey Team Deployment at Divisional Govt. Public Library',
    category: 'Field & Surveys',
    location: 'Khulna',
  },
  {
    id: 'field-karamjal-sundarbans',
    index: '04',
    src: '/assets/aistudio/WhatsApp_Image_2026-09-01_at_11.50.08_AM_84ffe7c2.jpeg',
    alt: 'Consultancy and field team standing beneath the Karamjal Sundarbans gateway during a regional assignment',
    caption: 'Sundarbans Field Visit & Team Coordination at Karamjal',
    category: 'Field & Surveys',
    location: 'Karamjal, Sundarbans',
  },
  {
    id: 'meeting-mongla-session',
    index: '05',
    src: '/assets/aistudio/WhatsApp_Image_2026-09-01_at_11.50.13_AM__2__8ba7a084.jpeg',
    alt: 'Official stakeholder consultation and technical briefing meeting inside the Mongla Port Authority conference room',
    caption: 'Consultative Meeting at Mongla Port Authority',
    category: 'Institutional Meetings',
    location: 'Mongla Port Authority',
  },
  {
    id: 'meeting-mongla-group',
    index: '06',
    src: '/assets/aistudio/WhatsApp_Image_2026-09-01_at_11.50.16_AM_c525ff53.jpeg',
    alt: 'Iftakhar Alam Hemal and SRCL colleagues standing with Mongla Port Authority officials after a project meeting',
    caption: 'Consultancy Delegation with Mongla Port Authority Officials',
    category: 'Institutional Meetings',
    location: 'Mongla Port Authority',
  },
  {
    id: 'meeting-berc-dhaka',
    index: '07',
    src: '/assets/aistudio/IMG20250106155730_557a6f05.jpg',
    alt: 'Technical consultation session with officials at the Bangladesh Energy Regulatory Commission conference room in Dhaka',
    caption: 'Stakeholder Consultation at Bangladesh Energy Regulatory Commission (BERC)',
    category: 'Institutional Meetings',
    location: 'Dhaka',
  },
  {
    id: 'meeting-central-jail-keraniganj',
    index: '08',
    src: '/assets/aistudio/20240424_111652_ba662a7b.jpg',
    alt: 'Feasibility study team meeting with the Senior Jail Superintendent at Dhaka Central Jail in Keraniganj',
    caption: 'Infrastructure Feasibility Coordination at Dhaka Central Jail',
    category: 'Institutional Meetings',
    location: 'Keraniganj, Dhaka',
  },
  {
    id: 'meeting-rajshahi-dig-prisons',
    index: '09',
    src: '/assets/aistudio/20240313_161233_4bd7d6f3.jpg',
    alt: 'Project coordination meeting with the Deputy Inspector General of Prisons in Rajshahi Division',
    caption: 'Regional Coordination Meeting with DIG of Prisons, Rajshahi Division',
    category: 'Institutional Meetings',
    location: 'Rajshahi',
  },
  {
    id: 'meeting-client-dhaka',
    index: '10',
    src: '/assets/aistudio/IMG20241125122412_c178362e.jpg',
    alt: 'Iftakhar Alam Hemal and SRCL colleague meeting with a government official at a client office in Dhaka',
    caption: 'Client Coordination & Feasibility Review Meeting',
    category: 'Institutional Meetings',
    location: 'Dhaka',
  },
  {
    id: 'meeting-srcl-office',
    index: '11',
    src: '/assets/aistudio/IMG20260712140113_2d01c781.jpg',
    alt: 'Technical and procurement team briefing inside the SRCL office in Dhaka',
    caption: 'Project Planning & Tender Coordination Briefing at SRCL',
    category: 'Institutional Meetings',
    location: 'SRCL Head Office, Dhaka',
  },
  {
    id: 'workshop-undp-gca-stage',
    index: '12',
    src: '/assets/aistudio/20260407_134257_c8cbc255.jpg',
    alt: 'Officials, UNDP representatives, and project team members gathered on stage at the DPHE Auditorium for the GCA National Dissemination Workshop',
    caption: 'National Dissemination & Sharing Workshop — UNDP GCA Project',
    category: 'Workshops',
    location: 'DPHE Auditorium, Dhaka',
  },
  {
    id: 'workshop-undp-gca-team',
    index: '13',
    src: '/assets/aistudio/20260407_134035_1__d0502f45.jpg',
    alt: 'Iftakhar Alam Hemal with SRCL colleagues and project leadership in front of the UNDP GCA workshop stage',
    caption: 'SRCL Coastal Assessment Team at the UNDP GCA Dissemination Workshop',
    category: 'Workshops',
    location: 'DPHE Auditorium, Dhaka',
  },
];

