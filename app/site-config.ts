import { profile, intro } from "./data/profile"

export const SITE_URL = profile.siteUrl
export const SITE_NAME = profile.name
export const SITE_TITLE = `${profile.name} — ${profile.title}`
export const SITE_DESCRIPTION = intro.siteDescription
export const SITE_KEYWORDS = [
  profile.name,
  profile.title,
  "React Developer",
  "Next.js Developer",
  `Web Developer ${profile.location.country}`,
  `${profile.location.city} ${profile.location.country}`,
]
