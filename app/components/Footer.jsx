import React from 'react'
import { MapPin } from 'lucide-react'
import { profile, locationLabel } from '../data/profile'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-inner">

        <div className="footer-top">
          <div className="logo-group">
            <a href="#home" className="logo">{profile.firstName}</a>
            <span className="location-badge"><MapPin size={12} /> Based in {locationLabel}</span>
          </div>
          <div className="footer-status">
            <span className="status-dot"></span>
            {profile.availability}
          </div>
        </div>

        <div className="footer-links">
          <a href={profile.github.url} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={profile.linkedin.url} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>

        <p className="footer-copyright">
          © {year} {profile.name}. All rights reserved.
        </p>

      </div>
    </footer>
  )
}

export default Footer
