// Single source of truth for everything personal on the site.
// Components, metadata, the OG image and the chatbot all read from here,
// so a fact only ever needs to be changed in one place.

export type IconName =
  | 'mapPin'
  | 'graduationCap'
  | 'code'
  | 'sparkles'
  | 'plane'
  | 'bookOpen'
  | 'layoutTemplate'
  | 'palette'
  | 'barChart'

export type Link = {
  label: string
  url: string
}

export type Stat = {
  value: string
  label: string
}

export type AboutFact = {
  icon: IconName
  label: string
}

export type Education = {
  qualification: string
  institution: string
  period: string
  honour?: string
}

export type Experience = {
  role: string
  organisation: string
  link?: Link
  highlights: string[]
}

export type Certification = {
  name: string
  issuer: string
}

export type Skill = {
  label: string
  href: string
}

export type Service = {
  icon: IconName
  title: string
  description: string
  tags: string[]
}

export type Project = {
  id: string
  title: string
  category: string
  description: string
  tags: string[]
  icon: IconName
  liveUrl?: string
  repoUrl?: string
}

export type Profile = {
  name: string
  firstName: string
  title: string
  location: {
    city: string
    country: string
    countryCode: string
  }
  email: string
  siteUrl: string
  linkedin: Link
  github: Link
  currentEmployer: string
  availability: string
}

export const profile: Profile = {
  name: 'Ssekajja Victoria Mirembe',
  firstName: 'Victoria',
  title: 'Full Stack Software Developer',
  location: {
    city: 'Kampala',
    country: 'Uganda',
    countryCode: 'UG',
  },
  email: 'victoria.ssekajja@gmail.com',
  siteUrl: 'https://ssekajja-victoria-mirembe-eta-1237.vercel.app',
  linkedin: {
    label: 'linkedin.com/in/ssekajja-victoria',
    url: 'https://www.linkedin.com/in/ssekajja-victoria-243216284/',
  },
  github: {
    label: 'github.com/VictoriaMirembe',
    url: 'https://github.com/VictoriaMirembe',
  },
  currentEmployer: 'Media Challenge Initiative (MCI), AI Media Lab',
  availability: 'Available for work',
}

export const locationLabel = `${profile.location.city}, ${profile.location.country}`

export const intro = {
  hero: `I build fast, accessible, well-crafted interfaces with React and Next.js, and integrate AI where it adds real value. Based in ${locationLabel}.`,
  aboutHook: 'Turning ideas into reliable, shipped software.',
  about: `I am ${profile.firstName}, a ${profile.title} based in ${locationLabel}, currently working at ${profile.currentEmployer}. I build interfaces with React and Next.js, am comfortable working across the stack when a project needs it, and integrate AI capabilities where they add real value.`,
  siteDescription: `Portfolio of ${profile.name}, a ${profile.title} building web applications and AI-powered tools with React, Next.js, Node.js and Python, based in ${locationLabel}.`,
  contact: 'I am open to opportunities, collaborations and conversations. Feel free to reach out.',
}

export const stats: Stat[] = [
  { value: '4+', label: 'Years Coding' },
  { value: '19', label: 'Projects Built' },
  { value: '7', label: 'Technologies' },
  // Public repo count from api.github.com/users/VictoriaMirembe on 2026-10-12.
  { value: '24', label: 'GitHub Repos' },
]

export const education: Education[] = [
  {
    qualification: 'Diploma in Data Science Management and Analytics',
    institution: 'Uganda Institute of Information and Communication Technology (UICT)',
    period: '2025 – 2026',
  },
  {
    qualification: 'Diploma in Computer Science and Information Technology',
    institution: 'Cavendish University Uganda',
    period: '2025 – 2026',
  },
  {
    qualification: 'National Certificate in Information and Communication Technology',
    institution: 'Uganda Institute of Information and Communication Technology (UICT)',
    period: '2023 – 2024',
    honour: 'First Class',
  },
]

export const aboutFacts: AboutFact[] = [
  { icon: 'mapPin', label: locationLabel },
  // Derived from the education list above so the dates can't drift apart.
  { icon: 'graduationCap', label: `Data Science Diploma, ${education[0].period}` },
  { icon: 'code', label: '4+ Years Coding' },
  { icon: 'sparkles', label: 'AI-Integrated Applications' },
]

export const experience: Experience[] = [
  {
    role: 'Junior AI Data Scientist',
    organisation: 'Media Challenge Initiative (MCI)',
    link: { label: 'aimedialab.africa', url: 'https://aimedialab.africa' },
    highlights: [
      'Co-developed the AI Media Lab platform, an innovation hub and toolkit equipping journalists and students with AI-powered resources to strengthen fact-based reporting, automate workflows, and combat disinformation across East Africa.',
      'Engineered core functional modules utilizing Large Language Models (LLMs) and advanced AI APIs to process text data, support automated media verification, and streamline editorial workflows.',
      'Integrated intelligent features with modern full-stack web architectures to deliver seamless, responsive user experiences tailored for media professionals.',
    ],
  },
  {
    role: 'Lead Developer & Student Researcher',
    organisation: 'Cavendish University Uganda',
    highlights: [
      'Designed and deployed a personal portfolio website using HTML5, CSS3, JavaScript and React/Next.js, focused on minimalist UI and fast load times.',
      'Built a conceptual Uganda Airlines operations dashboard with data visualization components, consuming data via REST APIs.',
      'Utilized Git and GitHub for version control, branching strategies, and collaborative code integration across project work.',
    ],
  },
  {
    role: 'Class Coordinator / Team Lead',
    organisation: 'Faculty of Science and Technology, Cavendish University Uganda (CUU)',
    highlights: [
      'Primary liaison between administration and IT students on academic requirements and deadlines.',
      'Led a peer development group on software projects, defining team roles for on-time delivery.',
      'Coordinated resources for technical workshops and orientation sessions for 50+ peers.',
    ],
  },
  {
    role: 'President',
    organisation: 'Technology Innovators Students Association (TISA), UICT',
    highlights: [
      'Developed internal guidelines for club operations, member registration, and project management.',
      'Chaired weekly board meetings and general assemblies to align team efforts.',
      'Organized technical workshops (coding bootcamps, UI/UX sessions) and innovation challenges for students.',
      'Acted as point of contact between students and external tech companies for internships and speaking engagements.',
    ],
  },
]

// Not shown on the site yet (Phase 5).
export const certifications: Certification[] = [
  { name: 'Certificate of Internship', issuer: 'Desis Hub Coding School, Kireka' },
  { name: 'Tech-preneur Mentorship Program', issuer: 'Uganda Institute of Information and Communication Technology' },
]

export const skills: { primary: Skill[]; secondary: Skill[] } = {
  primary: [
    { label: 'HTML & CSS', href: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    { label: 'JavaScript', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { label: 'TypeScript', href: 'https://www.typescriptlang.org/docs/' },
    { label: 'React', href: 'https://react.dev/' },
    { label: 'Next.js', href: 'https://nextjs.org/docs' },
    { label: 'Git & GitHub', href: 'https://docs.github.com/' },
  ],
  secondary: [
    { label: 'Node.js', href: 'https://nodejs.org/en/docs' },
    { label: 'Python', href: 'https://docs.python.org/3/' },
    { label: 'PostgreSQL', href: 'https://www.postgresql.org/docs/' },
    { label: 'Drizzle ORM', href: 'https://orm.drizzle.team/docs/overview' },
    { label: 'bcrypt', href: 'https://www.npmjs.com/package/bcrypt' },
    { label: 'Claude AI API', href: 'https://platform.claude.com/docs' },
  ],
}

export const services: Service[] = [
  {
    icon: 'layoutTemplate',
    title: 'Full Stack Web Development',
    description: 'I design and build responsive web applications end to end, from React and Next.js interfaces to Node.js services, REST APIs and PostgreSQL databases.',
    tags: ['Next.js', 'React', 'Node.js', 'PostgreSQL'],
  },
  {
    icon: 'sparkles',
    title: 'AI & LLM Integration',
    description: 'I integrate Large Language Models such as Claude and OpenAI into products to process text, automate workflows and add intelligent features that solve real problems.',
    tags: ['Claude API', 'OpenAI API'],
  },
  {
    icon: 'barChart',
    title: 'Data & Analytics',
    description: 'I clean, analyse and visualise data with Python to turn raw datasets into clear, decision-ready insights.',
    tags: ['Python', 'Pandas', 'Data Visualization'],
  },
]

export const servicesNote =
  'I also lead development teams and facilitate technical workshops, from coding bootcamps to UI/UX sessions.'

export const projects: Project[] = [
  {
    id: 'vansaac-deep-cleans',
    title: 'Vansaac Deep Cleans',
    category: 'Business Website',
    description: 'A business website for a professional cleaning company, with services, pricing, and a WhatsApp booking flow.',
    tags: ['Next.js', 'React', 'JavaScript'],
    icon: 'sparkles',
    liveUrl: 'https://vansaac-deep-cleans.vercel.app',
    repoUrl: 'https://github.com/VictoriaMirembe/Vansaac-Deep-Cleans',
  },
  {
    id: 'pearl-flight',
    title: 'Pearl Flight',
    category: 'Travel & Aviation',
    description: 'A travel and aviation business website built with a focus on clean layout and clear booking information.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    icon: 'plane',
    repoUrl: 'https://github.com/VictoriaMirembe/Pearl-Flight',
  },
  {
    id: 'zara',
    title: 'Zara — AI Story Friend',
    category: 'AI Learning Tool',
    description: 'An AI-powered teaching tool that helps children aged 5 to 8 learn through stories and games using the Claude API.',
    tags: ['Next.js', 'Claude API', 'React'],
    icon: 'bookOpen',
  },
  {
    id: 'mci-e-learning',
    title: 'MCI E-Learning Platform',
    category: 'E-Learning Platform',
    description: 'An e-learning platform for journalism educators to learn about AI-powered disinformation detection.',
    tags: ['Next.js', 'AI Integration', 'CSS'],
    icon: 'graduationCap',
  },
]
