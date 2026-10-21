'use client'

import { useState } from 'react'
import { MapPin } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import useScrollSpy from '../hooks/useScrollSpy'
import { profile, locationLabel } from '../data/profile'
import { SECTIONS, SECTION_IDS } from '../data/navigation'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useScrollSpy(SECTION_IDS)

  return (
    <nav>
      <div className="logo-group">
        <a href="#home" className="logo">{profile.firstName}</a>
        <span className="location-badge"><MapPin size={12} /> Based in {locationLabel}</span>
      </div>

      <button
        className="nav-toggle"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      <div className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
        {SECTIONS.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={activeId === item.id ? 'nav-link-active' : ''}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </div>

      <ThemeToggle />
    </nav>
  )
}
