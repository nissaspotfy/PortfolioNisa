// ============================================================
//  PORTFOLIO DATA — Anissa Nursafitri (Updated from CV)
// ============================================================

export const personalDetails = {
  name: 'Anissa Nursafitri',
  phone: '081223759986',
  email: 'anissanursafitri532@gmail.com',
  linkedin: 'https://www.linkedin.com/in/anissa-nursafitri-36a972279/',
  github: 'https://github.com/nissaspotfy',
  website: 'https://anissanursafitri.vercel.app/',
  address: 'Jl. Cijambe Pakojan Kp. Cipeundeuy RT/RW : 005/010, Kel. Sukakarya, Kec. Warudoyong, Kota Sukabumi, Jawa Barat',
  summary:
    'A motivated and detail-oriented Fresh Graduate from Universitas Pasundan with a strong passion for Web Development. Proficient in Laravel, JavaScript, React, and Express.js, with hands-on experience developing web applications. Eager to leverage technical expertise and problem-solving skills to contribute meaningfully to innovative software projects.',
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certificate', href: '#certificate' },
];

export const socialLinks = [
  { icon: 'linkedin', href: 'https://www.linkedin.com/in/anissa-nursafitri-36a972279/', label: 'LinkedIn' },
  { icon: 'github', href: 'https://github.com/nissaspotfy', label: 'GitHub' },
  { icon: 'instagram', href: 'https://www.instagram.com/anissa.ns_/', label: 'Instagram' },
  { icon: 'blogger', href: 'https://moofscience.blogspot.com/', label: 'Blog' },
  { icon: 'youtube', href: 'https://www.youtube.com/@nsstory9832/', label: 'YouTube' },
];

export const typingWords = [
  'Fullstack Developer',
  'Web Developer',
  'System Analyst',
  'UI / UX Designer',
];

export const projectExperiences = [
  {
    id: 1,
    title: "E-Commerce D'raosan — Culinary Ordering Platform",
    institution: 'Universitas Pasundan',
    location: 'Bandung',
    period: 'Nov 2025 – Jun 2026',
    role: 'Fullstack & System Architecture',
    image: '/img/final_project_preview.jpg',
    githubUrl: 'https://github.com/nissaspotfy/TugasAkhir',
    demoUrl: null,
    points: [
      'Authored SRS documentation and UML diagrams (Use Case, Sequence, Class) for system architecture.',
      'Developed responsive SPA frontend using React.js for customer ordering and admin dashboard.',
      'Built RESTful APIs with Express.js and designed MySQL database schema for transaction management.',
      'Implemented real-time transaction tracking, invoice generation, and automated sales analytics.',
    ],
    tech: ['React.js', 'Express.js', 'MySQL', 'RESTful API', 'Culinary E-Commerce'],
  },
  {
    id: 2,
    title: 'REventS — AI-Powered Event Management Platform',
    institution: 'Juara Vibe Coding',
    location: 'Jakarta',
    period: 'May 2026 – Jun 2026',
    role: 'Fullstack Developer',
    image: '/img/revents_preview.jpg',
    githubUrl: 'https://github.com/nissaspotfy/REventS_Apps',
    demoUrl: null,
    points: [
      'Engineered REventS, an AI-powered event management platform supporting dual-mode switching between Event Organizers and Audiences.',
      'Integrated Gemini AI (via Google AI Studio) to build automated event concept generators (Rev Copilot) and interactive AI assistant chatbots (REvas\'st).',
      'Developed core operational modules, including real-time analytics dashboards, RSVP/ticket tracking, and automated certificate generation.',
      'Built responsive full-stack interfaces to streamline end-to-end event planning and audience engagement.',
    ],
    tech: ['React.js', 'Gemini AI', 'Google AI Studio', 'Fullstack', 'Analytics'],
  },
  {
    id: 3,
    title: 'ISBN-Registered Machine Learning Textbook',
    authors: 'Handoko Supeno, M. Fauzan Dwi Putera, Anissa Nursafitri',
    publisher: 'PT. Inkara Media Buku',
    institution: 'Universitas Pasundan',
    location: 'Bandung',
    period: 'May 2025 – Dec 2025',
    role: 'Textbook Author',
    image: '/img/ml_textbook_cover.jpg',
    isbn: '978-634-7240-30-9',
    isbnUrl: 'https://isbn.perpusnas.go.id/landing_page/search',
    storeUrl: 'https://store.inkara.co.id/product.php?slug=dasar-dasar-teori-machine-learning-untuk-ilmu-data-dan-kecerdasan-buatan',
    githubUrl: null,
    demoUrl: null,
    isTextbook: true,
    points: [
      'Co-authored an ISBN-registered Machine Learning textbook for university-level curriculum.',
      'Wrote core chapters covering fundamental Artificial Intelligence, Machine Learning, and Data Science concepts.',
      'Designed practical case studies, practice questions, and conceptual diagrams to enhance learning.',
      'Managed end-to-end publishing workflow, from literature research to final editorial review.',
    ],
    tech: ['Machine Learning', 'Artificial Intelligence', 'Data Science', 'ISBN Published'],
  },
  {
    id: 4,
    title: 'Continuity of Care — Mobile App SRS & System Analysis',
    institution: 'PT Aneheim Nimbus Universal',
    location: 'Bandung',
    period: 'Aug 2025 – Oct 2025',
    role: 'System Analyst Intern',
    image: '/img/midwifery_preview.jpg',
    srsUrl: '/SRS_Continuity_of_Care_Anissa_Nursafitri.pdf',
    githubUrl: null,
    demoUrl: null,
    points: [
      'Conducted requirement gathering and authored SRS documentation for a midwifery clinical practice logging and assessment platform.',
      'Designed UML diagrams (Use Case, Activity, Sequence) mapping student examination data entry and preceptor evaluation workflows.',
      'Defined functional specifications for real-time clinical data input, preceptor scoring matrices, and feedback verification systems.',
    ],
    tech: ['System Analysis', 'SRS', 'UML Diagrams', 'Workflow Design'],
  },
];

export const organisationalExperiences = [
  {
    id: 1,
    role: 'Secretary',
    organization: 'Google Developer Group on Campus Universitas Pasundan',
    location: 'Bandung',
    period: 'Jan 2024 – Feb 2025',
    points: [
      'Managed end-to-end organizational administration, official documentation, and internal correspondence for the GDGoC community.',
      'Coordinated tech events, workshops, and developer initiatives to foster technology education and skill-building on campus.',
      'Facilitated cross-team collaboration and maintained relationships with external partners and sponsors.',
    ],
  },
  {
    id: 2,
    role: 'Secretary of PSDM Department',
    organization: 'Informatics Engineering Student Association',
    location: 'Bandung',
    period: 'Oct 2024 – Feb 2025',
    points: [
      'Handled departmental administration and progress tracking for Human Resource Development (PSDM) initiatives.',
      'Spearheaded member development programs, including structured recruitment, technical bootcamps, and leadership workshops.',
      'Established mentoring systems and performance evaluation frameworks to improve organizational capabilities.',
    ],
  },
  {
    id: 3,
    role: 'Event Manager',
    organization: 'Google Developer Student Club Universitas Pasundan',
    location: 'Bandung',
    period: 'Aug 2023 – Jun 2024',
    points: [
      'Planned and executed large-scale tech events, including hands-on workshops, seminars, and Google Study Jams.',
      'Managed end-to-end event logistics, speaker coordination, and timeline execution to ensure seamless delivery.',
      'Drove participant outreach and engagement, attracting attendees both from within and outside the university.',
    ],
  },
  {
    id: 4,
    role: 'Publication, Design & Documentation Staff',
    organization: 'Informatics Department Orientation Committee',
    location: 'Bandung',
    period: 'Nov 2023 – Feb 2024',
    points: [
      'Designed creative promotional assets, social media graphics, and visual branding for the orientation series.',
      'Managed content distribution strategies across digital channels to boost participant awareness and engagement.',
      'Documented official orientation activities and managed multimedia archives for committee publications.',
    ],
  },
];

export const experience = organisationalExperiences;

export const education = [
  {
    id: 1,
    institution: 'Universitas Pasundan',
    location: 'Bandung',
    period: 'Sep 2022 – Jul 2026',
    degree: 'Bachelor of Informatics Engineering',
    gpa: '3.64 / 4.00',
    highlights: [
      'System Analyst E-Commerce Platform',
      'UI/UX Designer E-Waste Management',
      'Assistant Laboratory For Object-Oriented Systems',
      'Secretary Of Google Developer Group On Campus Universitas Pasundan',
      'Event Manager Of Google Developer Student Club Universitas Pasundan',
      'Secretary PSDM Department of Informatics Engineering Student Association',
      'Secretary Publication, Design & Documentation Division of PKKMB 2023',
    ],
  },
  {
    id: 2,
    institution: 'SMA Negeri 1 Kota Sukabumi',
    location: 'Sukabumi',
    period: 'Jun 2019 – Jul 2022',
    degree: 'Senior High School, Majored in Natural Sciences',
    gpa: null,
    highlights: [
      'General Chairperson — Youth Health Cadres',
      'Head of Talent & Creative Division — Islamic Student Association',
      'Official Student Guide & Liaison — National Healthy School Competition (LSS)',
    ],
  },
];

export const skills = {
  row1: [
    { name: 'HTML5', icon: 'html' },
    { name: 'CSS3', icon: 'css' },
    { name: 'Vite', icon: 'vite' },
    { name: 'Node.js', icon: 'node' },
    { name: 'Express.js', icon: 'express' },
    { name: 'Next.js', icon: 'next' },
    { name: 'React', icon: 'react' },
    { name: 'JavaScript', icon: 'js' },
    { name: 'Tailwind CSS', icon: 'tailwind' },
  ],
  row2: [
    { name: 'GitHub', icon: 'github' },
    { name: 'Postman', icon: 'postman' },
    { name: 'Figma', icon: 'figma' },
    { name: 'VS Code', icon: 'vscode' },
    { name: 'Kotlin', icon: 'kotlin' },
    { name: 'Laravel', icon: 'laravel' },
    { name: 'PHP', icon: 'php' },
    { name: 'Java', icon: 'java' },
    { name: 'MySQL', icon: 'mysql' },
    { name: 'UML & System Analysis', icon: 'uml' },
  ],
  softSkills: [
    { name: 'Problem Solving', icon: '🧠' },
    { name: 'Teamwork & Collaboration', icon: '🤝' },
    { name: 'Creative Communication', icon: '💬' },
    { name: 'Growth Mindset', icon: '🌱' },
    { name: 'Leadership', icon: '👑' },
    { name: 'Public Speaking', icon: '🎙️' },
  ],
  achievements: [
    {
      title: '1st Winner — Departmental Creative Video Competition',
      year: '2020',
    },
    {
      title: '7th Place & National Finalist — National UI/UX Design Competition',
      year: '2023',
    },
  ],
};

export const certificates = [
  {
    id: 1,
    title: 'Certificate of Completion — #JuaraVibeCoding Participant',
    issuer: 'Google Developer Groups',
    date: 'May 2026',
    image: '/img/JVC_page-0001.jpg',
    description: 'Awarded for dedication and creative participation in #JuaraVibeCoding Vibe Coding Study Jam by Google Developer Groups. Verified Credential ID: JVC2605-KQEY-Q3NX.',
    verifyUrl: 'https://goo.gle/jvc-cert-verifier',
  },
  {
    id: 2,
    title: 'GDSC Core Member Certificate (2023–2024)',
    issuer: 'Google Developer Student Clubs UNPAS',
    date: '2023 – 2024',
    image: '/img/gdsc_core_member.jpg',
    description: 'Official certificate of appreciation presented for valuable contribution and leadership as a Core Member of Google Developer Student Clubs Universitas Pasundan.',
  },
  {
    id: 3,
    title: 'Wadhwani Foundation — Entrepreneurship Certificate',
    issuer: 'Wadhwani Foundation',
    date: 'December 2025',
    image: '/img/wadhwani.jpg',
    description: 'Certificate of completion for Entrepreneurship Education by Wadhwani Foundation, cultivating skills in venture creation, business innovation, and strategic thinking.',
  },
  {
    id: 4,
    title: 'National Creative Video Competition',
    issuer: 'Muhammadiyah University Malang',
    date: 'August 2020',
    image: '/img/vid2.jpg',
    description: 'Certificate of the national creative video competition at the Millad event of Muhammadiyah University.',
  },
  {
    id: 5,
    title: 'National Creative Video Competition',
    issuer: 'Bakrie University',
    date: 'August 2020',
    image: '/img/vid3.jpg',
    description: 'Certificate of national creative video competition organized by Bakrie University.',
  },
  {
    id: 3,
    title: 'National Creative Video Competition',
    issuer: 'Pasar Rebo Nursing Academy',
    date: 'March 2021',
    image: '/img/vid5.jpg',
    description: 'Certificate of the national creative video competition organized by the student senate of Pasar Rebo Nursing Academy.',
  },
  {
    id: 4,
    title: 'Basic Java Programming',
    issuer: 'Sololearn',
    date: 'June 2023',
    image: '/img/sololearn.png',
    description: 'Certificate of learning basic Java programming organized by Sololearn.',
  },
  {
    id: 5,
    title: 'Basic Project Management',
    issuer: 'Dicoding',
    date: 'August 2023',
    image: '/img/dicoding.jpg',
    description: 'Basic project management learning certificate organized by Dicoding.',
  },
  {
    id: 6,
    title: 'National Singing Competition',
    issuer: 'Prisma Got Talent',
    date: 'August 2020',
    image: '/img/nyanyi.jpg',
    description: 'Certificate of the national singing competition organized by Prisma Got Talent.',
  },
  {
    id: 7,
    title: 'Pasanggiri Sunda Competition',
    issuer: 'Sukabumi City Government',
    date: 'April 2021',
    image: '/img/pasanggirisunda.png',
    description: 'Certificate of the pasanggiri sunda competition organized by the Sukabumi City government.',
  },
  {
    id: 8,
    title: 'National Creative Video Competition',
    issuer: 'STKIP Kusuma Negara',
    date: 'August 2020',
    image: '/img/stkip.png',
    description: 'Certificate of the national creative video competition organized by STKIP Kusuma Negara.',
  },
  {
    id: 9,
    title: 'Creative Video Competition',
    issuer: 'STH Pasundan',
    date: 'March 2022',
    image: '/img/sthpasundan.png',
    description: 'Certificate of creative video competition organized by STH Pasundan.',
  },
];
