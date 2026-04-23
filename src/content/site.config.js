const siteConfig = {
  site: {
    siteName: "Dr. Anré Anise Anvari",
    siteUrl: "https://anreanvari.elixflare.com",
    defaultTitle: "Dr. Anré Anise Anvari | General Surgery, Surgical Assistant, Emergency Medicine & ICU",
    titleTemplate: "%s | Dr. Anré Anise Anvari",
    description:
      "Official extended digital resume of Dr. Anré Anise Anvari, an independent medical practitioner in South Africa with experience in general surgery, surgical assistance, emergency medicine, ICU support, minor surgical procedures, and clinical decision-making.",
    locale: "en_ZA",
    language: "en",
    themeColor: "#020617",
    googleSiteVerification: "dKQzs1JM_VAihmAWs_4w86bKV9GGaqnpIiJzsWKCEqg",
    ogImagePath: "/og-cover.png",
    profileImagePath: "/profile-photo.jpg",
    profileImageFallbackPath: "/profile-placeholder.svg",
    profileImageAlt: "Profile portrait of Dr. Anré Anise Anvari",
    resumePdfPath: "/resume.pdf",
    logoPath: "/favicon.ico",
    bannerLogoPath: "/logo-transparent.png",
    indexable: true,
  },

  person: {
    name: "Dr. Anré Anise Anvari",
    shortName: "Dr. Anvari",
    honorificPrefix: "Dr.",
    headline: "Independent Medical Practitioner",
    title: "General Surgery . Surgical Assistant . Emergency Medicine . ICU",
    location: "South Africa",
    email: "anreanvari1@gmail.com",
    phoneIntl: "+27627330527",
    phonePretty: "+27 62 733 0527",
    linkedIn: "",
    github: "",
    website: "https://anreanvari.elixflare.com",
    sameAs: [],
    availability:
      "Independent medical practitioner with experience across North West, Free State, Eastern Cape, and Western Cape.",
    summary:
      "Independent medical practitioner with clinical experience across South Africa, including North West, Free State, Eastern Cape, and Western Cape. Background includes minor procedures, surgical assistance, emergency care, ICU support, and patient-centred decision-making.",
    about: [
      "Dr. Anré Anise Anvari is an independent medical practitioner having worked all over South Africa in multiple different provinces, including North West, Free State, Eastern Cape, and Western Cape.",
      "He has experience in performing minor surgical procedures on his own, holistic patient management, and life-saving clinical decision-making.",
      "This website serves as the official extended digital resume of Dr. Anré Anise Anvari.",
    ],
    skills: [
      "Minor Surgical Procedures",
      "General Surgery Assistance",
      "Surgical Ward Rounds",
      "Post-operative Care",
      "Emergency Medicine",
      "ICU Support",
      "Life-saving Clinical Decision-Making",
      "Holistic Patient Management",
      "Trauma & Acute Care",
      "Clinical Documentation",
    ],
  },

  hero: {
    eyebrow: "Independent Medical Practitioner",
    badge: "Profile Photo",
    ctaPrimaryLabel: "Download CV",
    ctaSecondaryLabel: "Email",
    contactButtonLabel: "Contact",
    contactCounterLabel: "views",
    supportingText:
      "To update the portrait later, simply replace public/profile-photo.jpg with your own profile photo.",
  },

  navigation: [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "achievements", label: "Achievements" },
    { id: "languages", label: "Languages" },
    { id: "references", label: "References" },
  ],

  sections: {
    skillsTitle: "Skills & Certifications",
    skillsSubtitle: "Core clinical strengths combined with courses and certifications",
    experience: [
      {
        title: "Medical Doctor - Ironman",
        organisation: "PE",
        period: "2026",
        bullets: [
          "Provided medical support and clinical coverage during Ironman in Port Elizabeth.",
          "Worked in a fast-paced setting requiring rapid assessment, triage awareness, and timely decision-making.",
        ],
      },
      {
        title: "Surgical Assistant",
        organisation: "General Surgery",
        period: "Ongoing Experience",
        bullets: [
          "Conducting parts of general surgery operations and doing ward rounds post-op.",
          "Supporting peri-operative care, patient preparation, theatre assistance, and surgical follow-up management.",
        ],
      },
    ],
    education: [
      {
        degree: "Diploma in Emergency Medicine and Critical Care",
        institution: "Postgraduate Qualification",
        year: "Completed",
      },
      {
        degree: "Bachelor of Medicine and Surgery (MBChB)",
        institution: "University of the Free State (UFS)",
        year: "2022",
      },
      {
        degree: "Secondary School",
        institution: "Grey High School (GHS)",
        year: "2013 – 2017",
      },
    ],
    certifications: [
      "Advanced Paediatric Life Support (PALS)",
      "ATLS",
      "ACLS",
      "BLS",
      "BESST",
      "USGVA",
    ],
    achievements: [
      "2nd Team Tennis — University of the Free State (UFS)",
      "Top 50 in South Africa — National Mathematics Olympiad",
      "Science & English Olympiad Finalist",
      "Student Council member and officer in the Cadet Detachment",
      "1st Team Chess, Tennis, and Basketball at Grey High School",
      "Captain — Eastern Cape Mathematics Team",
    ],
    languages: [
      { name: "English", level: "Fluent" },
      { name: "Afrikaans", level: "Professional" },
      { name: "Persian", level: "Professional" },
      { name: "Sesotho", level: "Basic" },
    ],
    references: [
      {
        name: "Prof. Jan du Plessis",
        role: "Head of Paediatric Oncology — Universitas Hospital, Bloemfontein",
        contact: "Available on request",
      },
      {
        name: "Dr. Ruan Joubert",
        role: "Netcare Cuyler & Greenacres Hospital, Port Elizabeth",
        contact: "Available on request",
      },
      {
        name: "Dr. Juan Swart",
        role: "Medical Officer — Bayville, Mossel Bay",
        contact: "Available on request",
      },
      {
        name: "Dr. Ruan Kruger",
        role: "Anesthesiologist — Universitas, Bloemfontein",
        contact: "Available on request",
      },
      {
        name: "Dr. Coenie Pieterse",
        role: "General Surgeon — Mossel Bay",
        contact: "Available on request",
      },
      {
        name: "Dr. Nikita Blake",
        role: "Specialist in Plastic Surgery — Universitas Hospital & Mediclinic, Bloemfontein",
        contact: "Available on request",
      },
    ],
  },

  footer: {
    note:
      "This website serves as the official extended digital resume of Dr. Anré Anise Anvari and provides a clear overview of his medical background, experience, and contact details.",
  },
};

export default siteConfig;
