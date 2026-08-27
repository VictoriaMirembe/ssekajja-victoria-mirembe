'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Wrapper from './components/Wrapper'
import {
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiPython,
  SiNodedotjs,
  SiDrizzle,
  SiPostgresql,
  SiGithub,
} from 'react-icons/si'
import {
  Sparkles,
  MapPin,
  GraduationCap,
  Code2,
  Mail,
  Send,
  Copy,
  Check,
  LayoutTemplate,
  Palette,
  Plane,
  BookOpen,
} from 'lucide-react'
import { FaLinkedin } from 'react-icons/fa'

const FRONTEND_SKILLS = [
  { label: 'HTML & CSS', href: 'https://developer.mozilla.org/en-US/docs/Web/HTML', Icon: SiHtml5, color: '#E34F26' },
  { label: 'JavaScript', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
  { label: 'TypeScript', href: 'https://www.typescriptlang.org/docs/', Icon: SiTypescript, color: '#3178C6' },
  { label: 'React', href: 'https://react.dev/', Icon: SiReact, color: '#61DAFB' },
  { label: 'Next.js', href: 'https://nextjs.org/docs', Icon: SiNextdotjs, color: undefined },
  { label: 'Git & GitHub', href: 'https://docs.github.com/', Icon: SiGithub, color: undefined },
]

const OTHER_SKILLS = [
  { label: 'Node.js', href: 'https://nodejs.org/en/docs' },
  { label: 'Python', href: 'https://docs.python.org/3/' },
  { label: 'PostgreSQL', href: 'https://www.postgresql.org/docs/' },
  { label: 'Drizzle ORM', href: 'https://orm.drizzle.team/docs/overview' },
  { label: 'bcrypt', href: 'https://www.npmjs.com/package/bcrypt' },
  { label: 'Claude AI API', href: 'https://platform.claude.com/docs' },
]

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
    navigator.clipboard.writeText("jemistates7@gmail.com")
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
    window.location.href = `mailto:jemistates7@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <Wrapper>

      <main id="home" className="page-section">
        <div className="hero-section">
          <div className="hero-text">
            <p className="hero-greeting">Hello, I am</p>
            <h1>Ssekajja Victoria Mirembe</h1>
            <h2>Frontend Developer</h2>
            <p className="hero-description">
              I build fast, accessible, well-crafted interfaces with React and
              Next.js, and integrate AI where it adds real value. Based in Kampala, Uganda.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn">View My Work</a>
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
              alt="Victoria Ssekajja"
              width={300}
              height={300}
            />
          </div>

        </div>

        <div className="stats-section">
          <div className="stat-card">
            <h3>4+</h3>
            <p>Years Coding</p>
          </div>
          <div className="stat-card">
            <h3>19</h3>
            <p>Projects Built</p>
          </div>
          <div className="stat-card">
            <h3>7</h3>
            <p>Technologies</p>
          </div>
          <div className="stat-card">
            <h3>21</h3>
            <p>GitHub Repos</p>
          </div>
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
        <p className="about-hook">Turning ideas into reliable, shipped software.</p>
        <p>
          I am Victoria, a Frontend Developer based in Kampala, Uganda, currently
          working at MCI Media Lab. I build interfaces with React and Next.js,
          am comfortable working across the stack when a project needs it, and
          integrate AI capabilities where they add real value.
        </p>

        <div className="about-facts">
          <div className="about-fact">
            <MapPin size={18} />
            <span>Kampala, Uganda</span>
          </div>
          <div className="about-fact">
            <GraduationCap size={18} />
            <span>Data Science Diploma, 2026</span>
          </div>
          <div className="about-fact">
            <Code2 size={18} />
            <span>4+ Years Coding</span>
          </div>
          <div className="about-fact">
            <Sparkles size={18} />
            <span>AI-Integrated Applications</span>
          </div>
        </div>

        <div className="education">
          <h2>Education</h2>
          <div className="education-list">
            <div className="card">
              <h3>Certificate in Information and Communication Technology</h3>
              <p>Uganda Institute of Information and Communication Technology — 2023 to 2025</p>
              <span className="tag">First Class</span>
            </div>
            <div className="card">
              <h3>Diploma in Data Science Management Analytics</h3>
              <p>Uganda Institute of Information and Communication Technology — 2025 to Expected 2027</p>
            </div>
            <div className="card">
              <h3>Diploma in Computer Science and Information Technology</h3>
              <p>Cavendish University Uganda — 2025 to Expected 2027</p>
            </div>
          </div>
        </div>
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
            {FRONTEND_SKILLS.map(({ label, href, Icon, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="skill"
              >
                <span className="skill-icon">
                  <Icon size={14} color={color} />
                </span>
                {label}
              </a>
            ))}
          </div>
          <div className="skills-secondary">
            <p className="skills-secondary-label">Also comfortable with (backend &amp; AI)</p>
            <div className="skills-secondary-set">
              {OTHER_SKILLS.map(({ label, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="skill-sm">
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="services-section">
          <h2>What I Do</h2>
          <p>Here is how I can help your organisation</p>
          <div className="services">
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon"><LayoutTemplate size={22} /></div>
                <h3>Frontend Engineering</h3>
                <p>I build fast, responsive, accessible interfaces with React, Next.js, and TypeScript that work on any device.</p>
                <div className="service-tech-tags">
                  <span className="tech-tag-sm">Next.js</span>
                  <span className="tech-tag-sm">React</span>
                  <span className="tech-tag-sm">TypeScript</span>
                </div>
              </div>
              <div className="service-card">
                <div className="service-icon"><Palette size={22} /></div>
                <h3>UI Craft &amp; Design Systems</h3>
                <p>I turn designs into clean, consistent component systems with careful attention to detail and motion.</p>
                <div className="service-tech-tags">
                  <span className="tech-tag-sm">HTML &amp; CSS</span>
                  <span className="tech-tag-sm">JavaScript</span>
                </div>
              </div>
              <div className="service-card">
                <div className="service-icon"><Sparkles size={22} /></div>
                <h3>AI-Enhanced Interfaces</h3>
                <p>I integrate AI capabilities into the frontend to add smart, interactive features where they add real value.</p>
                <div className="service-tech-tags">
                  <span className="tech-tag-sm">Claude API</span>
                  <span className="tech-tag-sm">Python</span>
                </div>
              </div>
            </div>
            <p className="services-note">
              I also work across the stack when a project calls for it — Node.js, PostgreSQL, and Drizzle ORM on the backend.
            </p>
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

          <a
            href="https://vansaac-deep-cleans.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="featured-project-card"
          >
            <ProjectBanner Icon={Sparkles} />
            <div className="featured-project-body">
              <span className="project-category">Business Website</span>
              <h3>Vansaac Deep Cleans</h3>
              <p>A business website for a professional cleaning company, with services, pricing, and a WhatsApp booking flow.</p>
              <div className="project-tags">
                <span className="tag">Next.js</span>
                <span className="tag">React</span>
                <span className="tag">JavaScript</span>
              </div>
            </div>
          </a>

          <a
            href="https://github.com/VictoriaMirembe/Pearl-Flight"
            target="_blank"
            rel="noopener noreferrer"
            className="featured-project-card"
          >
            <ProjectBanner Icon={Plane} />
            <div className="featured-project-body">
              <span className="project-category">Travel & Aviation</span>
              <h3>Pearl Flight</h3>
              <p>A travel and aviation business website built with a focus on clean layout and clear booking information.</p>
              <div className="project-tags">
                <span className="tag">HTML</span>
                <span className="tag">CSS</span>
                <span className="tag">JavaScript</span>
              </div>
            </div>
          </a>

          <div className="featured-project-card">
            <ProjectBanner Icon={BookOpen} />
            <div className="featured-project-body">
              <span className="project-category">AI Learning Tool</span>
              <h3>Zara — AI Story Friend</h3>
              <p>An AI-powered teaching tool that helps children aged 5 to 8 learn through stories and games using the Claude API.</p>
              <div className="project-tags">
                <span className="tag">Next.js</span>
                <span className="tag">Claude API</span>
                <span className="tag">React</span>
              </div>
            </div>
          </div>

          <div className="featured-project-card">
            <ProjectBanner Icon={GraduationCap} />
            <div className="featured-project-body">
              <span className="project-category">E-Learning Platform</span>
              <h3>MCI E-Learning Platform</h3>
              <p>An e-learning platform for journalism educators to learn about AI-powered disinformation detection.</p>
              <div className="project-tags">
                <span className="tag">Next.js</span>
                <span className="tag">AI Integration</span>
                <span className="tag">CSS</span>
              </div>
            </div>
          </div>

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
        <p>I am open to opportunities, collaborations and conversations. Feel free to reach out.</p>

        <div className="contact-layout">
          <div className="contact-info-column">
            <div className="footer-status contact-status">
              <span className="status-dot"></span>
              Available for work
            </div>

            <div className="contact-grid">
              <div className="contact-card">
                <Mail size={18} className="contact-card-icon" />
                <div>
                  <h3>Email</h3>
                  <a href="mailto:jemistates7@gmail.com">jemistates7@gmail.com</a>
                </div>
              </div>
              <div className="contact-card">
                <FaLinkedin size={18} className="contact-card-icon" color="#0A66C2" />
                <div>
                  <h3>LinkedIn</h3>
                  <a href="https://www.linkedin.com/in/ssekajja-victoria-243216284/" target="_blank" rel="noopener noreferrer">linkedin.com/in/ssekajja-victoria</a>
                </div>
              </div>
              <div className="contact-card">
                <SiGithub size={18} className="contact-card-icon" />
                <div>
                  <h3>GitHub</h3>
                  <a href="https://github.com/VictoriaMirembe" target="_blank" rel="noopener noreferrer">github.com/VictoriaMirembe</a>
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
