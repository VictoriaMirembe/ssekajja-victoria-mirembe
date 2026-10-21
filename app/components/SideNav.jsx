'use client'

import { Home, User, Briefcase, Sparkles, FolderGit2, Mail } from 'lucide-react'
import useScrollSpy from '../hooks/useScrollSpy'
import { SECTIONS, SECTION_IDS } from '../data/navigation'

const ICONS = {
  home: Home,
  about: User,
  experience: Briefcase,
  skills: Sparkles,
  projects: FolderGit2,
  contact: Mail,
}

export default function SideNav() {
  const activeId = useScrollSpy(SECTION_IDS)

  return (
    <div className="side-nav">
      {SECTIONS.map(({ id, label }) => {
        const Icon = ICONS[id]
        return (
          <a
            key={id}
            href={`#${id}`}
            className={`side-nav-item ${activeId === id ? 'side-nav-item-active' : ''}`}
          >
            <Icon size={18} />
            <span className="side-nav-tooltip">{label}</span>
          </a>
        )
      })}
    </div>
  )
}
