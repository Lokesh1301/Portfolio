import { ExperienceItem, ProjectItem, SkillCategory, CertificationItem, EducationItem, ContactInfo } from './types';

export const PROFILE = {
  name: "Lokesh S",
  title: "Java Full Stack Developer • MCA Graduate",
  // Replace the URL below with your actual photo URL
  image: "WhatsApp Image 2025-12-12 at 7.28.50 AM.jpeg", 
  about: "I am a Java Full Stack Developer and MCA Graduate with strong skills in backend logic, object-oriented programming, SQL databases, debugging, and application development. I enjoy building reliable backend modules, clean architectures, and efficient systems that make applications fast, scalable, and maintainable."
};

export const CONTACT: ContactInfo = {
  email: "lokeshsivakumar1301@gmail.com",
  phone: "+91 8428174227",
  linkedin: "https://linkedin.com/in/lokesh-sivakumar",
  github: "https://github.com/Lokesh1301",
  location: "Chennai, India"
};

export const SKILLS: SkillCategory[] = [
  {
    category: "Frontend Development",
    items: ["React.js", "JavaScript", "HTML", "CSS", "Bootstrap"]
  },
  {
    category: "Backend Development",
    items: ["Java", "JDBC", "SQL", "Backend Logic"]
  },
  {
    category: "Databases",
    items: ["MySQL", "SQLite"]
  },
  {
    category: "Tools & Concepts",
    items: ["Git", "VS Code", "Eclipse", "OOP", "Data Structures", "SDLC", "Agile"]
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 1,
    role: "Job — Java Full Stack",
    company: "Vcodez Innovating Ideas",
    period: "Jan 2025 – Mar 2025",
    points: [
      "Developed Java-based backend modules for green hydrogen simulation tools (15% faster processing).",
      "Applied OOP concepts to model chemical kinetics (18% accuracy improvement).",
      "Debugged and optimized code with senior developers, working on the full development lifecycle."
    ]
  },
  {
    id: 2,
    role: "Intern",
    company: "Cognifyz Technologies",
    period: "Jul 2023 – Aug 2023",
    points: [
      "Built 12+ Java programs focusing on OOP, multithreading, exception handling.",
      "Improved runtime performance and reduced debugging effort by 15%."
    ]
  },
  {
    id: 3,
    role: "Intern",
    company: "Layots Technologies Pvt Ltd",
    period: "Jun 2022 – Jul 2022",
    points: [
      "Configured LAN/MAN/WAN networks ensuring 99.9% uptime.",
      "Worked with Cat6 cabling, IP configurations & basic networking concepts."
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    title: "Hyperbolic Nanostructural Catalysis Simulation",
    tech: ["Java", "SQL", "OOP"],
    description: [
      "Built a Java simulation for proton disentanglement kinetics (18% higher accuracy).",
      "Designed a normalized SQL schema (35% faster queries).",
      "Added real-time monitoring (30% fewer reruns)."
    ]
  },
  {
    id: 2,
    title: "Online Hostel Booking System",
    tech: ["HTML", "CSS", "SQL", "Java"],
    description: [
      "Created frontend UI using HTML & CSS with user/admin login roles.",
      "Designed SQL database to track room availability (20% fewer booking errors).",
      "Optimized booking workflow improving interaction speed by 30%."
    ]
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 1,
    title: "Java Full Stack Internship",
    issuer: "Vcodez",
    year: "2025"
  },
  {
    id: 2,
    title: "Java Programming",
    issuer: "Cognifyz Technologies",
    year: "2023"
  },
  {
    id: 3,
    title: "Business Analyst Certification",
    issuer: "Aiwazo Academy",
    year: "2023"
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "MCA",
    institution: "SRM University",
    year: "2023–2025",
    grade: "CGPA: 8.56"
  },
  {
    degree: "BSc IT",
    institution: "Guru Nanak College",
    year: "2020–2023",
    grade: "CGPA: 8.4"
  }
]; 

export const NAV_LINKS = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Skills", path: "#skills" },
  { name: "Experience", path: "#experience" },
  { name: "Projects", path: "#projects" },
  { name: "Contact", path: "#contact" },
];