import React from 'react'
import PlainLink from './PlainLink'
import ThemeSwitcher from './ThemeSwitcher'

const links = [
  {
    to: '/writing',
    label: 'Writing',
  },
  {
    to: '/readlist',
    label: 'Reads',
  },
]

const Header = ({ siteTitle }) => {
  return (
    <>
      <header>
        <PlainLink href="/">{siteTitle}</PlainLink>

        <nav>
          {links.map(({ to, label }) => (
            <PlainLink key={to} href={to}>
              {label}
            </PlainLink>
          ))}
        </nav>

        <ThemeSwitcher />
      </header>
      <style jsx>{`
        header {
          display: grid;
          grid-template-columns: var(--grid-spec);
          grid-gap: var(--sp-xs);
          flex-wrap: wrap;
          margin-bottom: var(--sp-s);
        }

        nav {
          display: flex;
          gap: var(--sp-s);
        }

        @media (max-width: 64em) {
          header > :global(*) {
            grid-column: var(--center-column);
          }
        }
      `}</style>
    </>
  )
}

export default Header
