export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  points: string[];
}

export interface ProjectItem {
  id: number;
  title: string;
  description: string[];
  tech: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface CertificationItem {
  id: number;
  title: string;
  issuer: string;
  year: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  grade: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  location: string;
}