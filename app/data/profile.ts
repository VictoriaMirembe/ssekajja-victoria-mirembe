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
  | 'server'
  | 'database'
  | 'gitBranch'
  | 'users'

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
  // 'work' roles are listed first; 'leadership' roles get their own group.
  kind: 'work' | 'leadership'
  role: string
  organisation: string
  link?: Link
  highlights: string[]
}

export type Certification = {
  name: string
  issuer: string
}

export type SkillGroup = {
  title: string
  icon: IconName
  skills: string[]
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
  status?: string
  // Real screenshot in /public/projects. Without one, the card shows an icon banner.
  image?: {
    src: string
    alt: string
  }
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
  resumeUrl: string
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
  // The PDF lives in /public, so it is served from the site root.
  resumeUrl: '/Ssekajja_Victoria_Mirembe_Resume.pdf',
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
  // Shortened from the Profile section of the resume.
  hero: 'Detail oriented Software Engineer and Data Science professional building scalable full stack applications and production-grade AI tools with React, Next.js, Node.js and Python.',
  aboutHook: 'Turning ideas into reliable, shipped software.',
  about: [
    `I am ${profile.firstName}, a ${profile.title} based in ${locationLabel}, currently working at ${profile.currentEmployer}. I have hands on experience building scalable full stack applications, integrating Large Language Models (LLMs) like Claude and OpenAI, and developing production-grade AI tools for modern media and enterprise ecosystems.`,
    'I combine front-end development with a strong foundation in database management, RESTful API architectures, and intelligent automation. A fast learner and clear communicator, I have a proven ability to lead development teams, architect robust codebases, and support diverse audiences, from technical stakeholders to non-technical users in training and workshop settings, from concept to deployment.',
  ],
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
    kind: 'work',
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
    kind: 'work',
    role: 'Lead Developer & Student Researcher',
    organisation: 'Cavendish University Uganda',
    highlights: [
      'Designed and deployed a personal portfolio website using HTML5, CSS3, JavaScript and React/Next.js, focused on minimalist UI and fast load times.',
      'Built a conceptual Uganda Airlines operations dashboard with data visualization components, consuming data via REST APIs.',
      'Utilized Git and GitHub for version control, branching strategies, and collaborative code integration across project work.',
    ],
  },
  {
    kind: 'leadership',
    role: 'Class Coordinator / Team Lead',
    organisation: 'Faculty of Science and Technology, Cavendish University Uganda (CUU)',
    highlights: [
      'Primary liaison between administration and IT students on academic requirements and deadlines.',
      'Led a peer development group on software projects, defining team roles for on-time delivery.',
      'Coordinated resources for technical workshops and orientation sessions for 50+ peers.',
    ],
  },
  {
    kind: 'leadership',
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

export const certifications: Certification[] = [
  { name: 'Certificate of Internship', issuer: 'Desis Hub Coding School, Kireka' },
  { name: 'Tech-preneur Mentorship Program', issuer: 'Uganda Institute of Information and Communication Technology' },
]

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    icon: 'layoutTemplate',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Responsive, mobile-friendly UI'],
  },
  {
    title: 'Backend & APIs',
    icon: 'server',
    skills: ['Node.js', 'REST API development & consumption', 'Drizzle ORM'],
  },
  {
    title: 'AI & LLMs',
    icon: 'sparkles',
    skills: ['Anthropic Claude API', 'OpenAI API', 'LLM integrations'],
  },
  {
    title: 'Data & Analytics',
    icon: 'barChart',
    skills: ['Python (Pandas, NumPy, Scikit-learn)', 'Data visualization', 'Data cleaning', 'Statistical analysis'],
  },
  {
    title: 'Databases & Security',
    icon: 'database',
    skills: ['SQL', 'MySQL', 'PostgreSQL', 'bcrypt'],
  },
  {
    title: 'DevOps',
    icon: 'gitBranch',
    skills: ['Git', 'GitHub', 'CI/CD pipelines', 'Contabo VPS hosting'],
  },
  {
    title: 'Design',
    icon: 'palette',
    skills: ['UI/UX prototyping', 'Graphic design & digital asset creation'],
  },
  {
    title: 'Leadership',
    icon: 'users',
    skills: ['Team leadership', 'Workshop facilitation', 'Technical documentation'],
  },
]

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
    id: 'ai-media-lab',
    title: 'AI Media Lab Platform',
    category: 'AI E-Learning Platform',
    description: 'Co-developed an AI-powered innovation ecosystem utilizing LLMs and modern web infrastructure to support fact-checking and modern journalistic workflows.',
    tags: ['Next.js', 'LLMs', 'AI APIs', 'E-Learning'],
    icon: 'sparkles',
    liveUrl: 'https://aimedialab.africa',
    image: {
      src: '/projects/ai-media-lab.jpg',
      alt: 'AI Media Lab homepage with the headline "Supporting journalists to separate fact from fiction, with AI."',
    },
  },
  {
    id: 'hr-system',
    title: 'HR-System',
    category: 'HR Platform',
    description: 'Full-stack HR platform covering onboarding, employee records, leave, attendance, payroll and a self-service portal.',
    tags: ['Next.js', 'PostgreSQL'],
    icon: 'layoutTemplate',
    repoUrl: 'https://github.com/VictoriaMirembe/HR-System',
  },
  {
    id: 'vansaac-deep-cleans',
    title: 'Vansaac Deep Cleans',
    category: 'Business Website',
    description: 'Business website for a cleaning company with services, pricing and a WhatsApp booking flow.',
    tags: ['Next.js', 'React', 'JavaScript'],
    icon: 'sparkles',
    liveUrl: 'https://vansaac-deep-cleans.vercel.app',
    repoUrl: 'https://github.com/VictoriaMirembe/Vansaac-Deep-Cleans',
    image: {
      src: '/projects/vansaac-deep-cleans.jpg',
      alt: 'Vansaac Deep Cleans homepage with the headline "Spotless Spaces, Every Time" and a WhatsApp Us button.',
    },
  },
  {
    id: 'pearl-flight',
    title: 'Pearl-Flight',
    category: 'Travel & Aviation',
    description: 'Travel and aviation business website.',
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
    status: 'In progress',
  },
  {
    id: 'data-analytics-practicum',
    title: 'Data Analytics Practicum (UICT)',
    category: 'Data Analytics',
    description: 'Applying statistical models and data cleaning to real-world datasets.',
    tags: ['Statistical models', 'Data cleaning'],
    icon: 'barChart',
  },
]
