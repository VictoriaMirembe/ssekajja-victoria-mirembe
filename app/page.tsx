'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Wrapper from './components/Wrapper'
import { SiGithub } from 'react-icons/si'
import {
  Sparkles,
  MapPin,
  GraduationCap,
  Code2,
  Mail,
  Send,
  Copy,
  Check,
  Download,
  LayoutTemplate,
  Palette,
  Plane,
  BookOpen,
  BarChart3,
  Server,
  Database,
  GitBranch,
  Users,
  ShoppingCart,
  Sprout,
  type LucideIcon,
} from 'lucide-react'
import { FaLinkedin } from 'react-icons/fa'
import {
  profile,
  intro,
  stats,
  aboutFacts,
  education,
  certifications,
  experience,
  skillGroups,
  services,
  servicesNote,
  projects,
  type IconName,
} from './data/profile'

// The data file stores icon names; this maps each name to its component.
const ICONS: Record<IconName, LucideIcon> = {
  mapPin: MapPin,
  graduationCap: GraduationCap,
  code: Code2,
  sparkles: Sparkles,
  plane: Plane,
  bookOpen: BookOpen,
  layoutTemplate: LayoutTemplate,
  palette: Palette,
  barChart: BarChart3,
  server: Server,
  database: Database,
  gitBranch: GitBranch,
  users: Users,
  shoppingCart: ShoppingCart,
  sprout: Sprout,
}

const EXPERIENCE_GROUPS = [
  { kind: 'work', title: 'Work' },
  { kind: 'leadership', title: 'Leadership' },
] as const

function ProjectBanner({ Icon }: { Icon: React.ComponentType<{ size?: number; strokeWidth?: number }> }) {
  return (
    <div className="project-card-banner">
      <div className="banner-chrome">
        <span className="banner-dot" />
        <span className="banner-dot" />
        <span className="banner-dot" />
      </div>
      <div className="banner-icon">
        <Icon size={40} strokeWidth={1.5} />
      </div>
    </div>
  )
}

export default function Home() {
  const [copied, setCopied] = useState(false)

  function copyEmail() {
    navigator.clipboard.writeText(profile.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" })

  function handleContactSubmit(e: React.FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio message from ${contactForm.name}`)
    const body = encodeURIComponent(
      `${contactForm.message}\n\n— ${contactForm.name} (${contactForm.email})`
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <Wrapper>

      <main id="home" className="page-section">
        <div className="hero-section">
          <div className="hero-text">
            <p className="hero-greeting">Hello, I am</p>
            <h1>{profile.name}</h1>
            <h2>{profile.title}</h2>
            <p className="hero-description">{intro.hero}</p>
            <div className="hero-buttons">
              <a href="#projects" className="btn">View My Work</a>
              <a href={profile.resumeUrl} download className="btn-outline">
                <Download size={16} />
                Download Resume
              </a>
              <a href="#contact" className="btn-outline">Contact Me</a>
              <button onClick={copyEmail} className="btn-outline">
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {copied ? "Copied" : "Copy Email"}
              </button>
            </div>
          </div>

          <div className="hero-image">
            <Image
              src="/profile.jpg"
              alt={`Portrait of ${profile.name}`}
              width={300}
              height={300}
            />
          </div>

        </div>

        <div className="stats-section">
          {stats.map(({ value, label }) => (
            <div key={label} className="stat-card">
              <h3>{value}</h3>
              <p>{label}</p>
            </div>
          ))}
        </div>
      </main>

      <motion.section
        id="about"
        className="page-section about-section"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        <h1>Learn About Me</h1>
        <p className="about-hook">{intro.aboutHook}</p>
        {intro.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}

        <div className="about-facts">
          {aboutFacts.map(({ icon, label }) => {
            const Icon = ICONS[icon]
            return (
              <div key={label} className="about-fact">
                <Icon size={18} />
                <span>{label}</span>
              </div>
            )
          })}
        </div>

        <div className="education">
          <h2>Education</h2>
          <div className="education-list">
            {education.map(({ qualification, institution, period, honour }) => (
              <div key={qualification} className="card">
                <h3>{qualification}</h3>
                <p>{institution} — {period}</p>
                {honour && <span className="tag">{honour}</span>}
              </div>
            ))}
          </div>
        </div>

        <div className="education">
          <h2>Certifications &amp; Training</h2>
          <div className="education-list">
            {certifications.map(({ name, issuer }) => (
              <div key={name} className="card">
                <h3>{name}</h3>
                <p>{issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="experience"
        className="page-section experience-section"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        <h2>Experience</h2>
        <p>Where I have built, led and shipped</p>
        {EXPERIENCE_GROUPS.map(({ kind, title }) => (
          <div key={kind} className="experience-group">
            <h3 className="experience-group-title">{title}</h3>
            <div className="experience-list">
              {experience
                .filter((job) => job.kind === kind)
                .map(({ role, organisation, link, highlights }) => (
                  <article key={`${role}-${organisation}`} className="card experience-card">
                    <h3>{role}</h3>
                    <p className="experience-org">{organisation}</p>
                    <ul className="experience-highlights">
                      {highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                    {link && (
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="experience-link"
                      >
                        {link.label} ↗
                      </a>
                    )}
                  </article>
                ))}
            </div>
          </div>
        ))}
      </motion.section>

      <motion.section
        id="skills"
        className="page-section skills-section"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        <div className="skills">
          <h2>My Skills Set</h2>
          <div className="skills-set">
            {skillGroups.map(({ title, icon, technologies, practices = [] }) => {
              const Icon = ICONS[icon]
              return (
                <div key={title} className="skill-group">
                  <h3>
                    <span className="skill-icon"><Icon size={14} /></span>
                    {title}
                  </h3>
                  <ul className="skill-group-list">
                    {technologies.map((tech) => (
                      <li key={tech} className="skill-sm">{tech}</li>
                    ))}
                    {practices.map((practice) => (
                      <li key={practice} className="skill-sm skill-practice">{practice}</li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>

        <div className="services-section">
          <h2>What I Do</h2>
          <p>Here is how I can help your organisation</p>
          <div className="services">
            <div className="services-grid">
              {services.map(({ icon, title, description, tags }) => {
                const Icon = ICONS[icon]
                return (
                  <div key={title} className="service-card">
                    <div className="service-icon"><Icon size={22} /></div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <div className="service-tech-tags">
                      {tags.map((tag) => (
                        <span key={tag} className="tech-tag-sm">{tag}</span>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
            <p className="services-note">{servicesNote}</p>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="projects"
        className="page-section featured-projects-section"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        <h2>Projects</h2>
        <p>A few things I have shipped</p>
        <div className="featured-projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="featured-project-card">
              {project.image ? (
                <div className="project-card-banner project-card-shot">
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    fill
                    sizes="(max-width: 900px) 100vw, 360px"
                  />
                </div>
              ) : (
                <ProjectBanner Icon={ICONS[project.icon]} />
              )}
              <div className="featured-project-body">
                <span className="project-category">{project.category}</span>
                <h3>
                  {project.title}
                  {project.status && <span className="project-status">{project.status}</span>}
                </h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                {(project.liveUrl || project.repoUrl) && (
                  <div className="project-links">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                        Live site ↗
                      </a>
                    )}
                    {project.repoUrl && (
                      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                        Code ↗
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="contact"
        className="page-section contact-section"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        <h1>Contact Me</h1>
        <p>{intro.contact}</p>

        <div className="contact-layout">
          <div className="contact-info-column">
            <div className="footer-status contact-status">
              <span className="status-dot"></span>
              {profile.availability}
            </div>

            <div className="contact-grid">
              <div className="contact-card">
                <Mail size={18} className="contact-card-icon" />
                <div>
                  <h3>Email</h3>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </div>
              </div>
              <div className="contact-card">
                <FaLinkedin size={18} className="contact-card-icon" color="#0A66C2" aria-hidden="true" />
                <div>
                  <h3>LinkedIn</h3>
                  <a href={profile.linkedin.url} target="_blank" rel="noopener noreferrer">{profile.linkedin.label}</a>
                </div>
              </div>
              <div className="contact-card">
                <SiGithub size={18} className="contact-card-icon" aria-hidden="true" />
                <div>
                  <h3>GitHub</h3>
                  <a href={profile.github.url} target="_blank" rel="noopener noreferrer">{profile.github.label}</a>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleContactSubmit}>
            <h2>Send me a message</h2>
            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={contactForm.name}
                onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label>Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={contactForm.email}
                onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                rows={5}
                placeholder="Write your message here..."
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn">
              <Send size={16} />
              Send Message
            </button>
          </form>
        </div>
      </motion.section>

    </Wrapper>
  );
}
