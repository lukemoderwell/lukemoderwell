import React from 'react'
import Link from 'next/link'
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
  //   {
  //     to: '/portfolio',
  //     label: 'Portfolio',
  //   },
  //   {
  //     to: '/playlist',
  //     label: 'Playlist',
  //   },
]

const Header = ({ siteTitle }) => {
  return (
    <>
      <header>
        <Link href="/">{siteTitle}</Link>

        <nav>
          {links.map(({ to, label }) => (
            <Link key={to} href={to}>
              {label}
            </Link>
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
        nav :global(ul) {
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
