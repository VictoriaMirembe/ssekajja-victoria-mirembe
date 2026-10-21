// The page sections, in order. Nav, SideNav and the scrollspy all use this list,
// so adding a section here adds it everywhere.
export const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
] as const

export type SectionId = (typeof SECTIONS)[number]['id']

// Defined once (not inside a component) so useScrollSpy gets the same array
// on every render and doesn't re-create its observer each time.
export const SECTION_IDS: SectionId[] = SECTIONS.map((section) => section.id)
