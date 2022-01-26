import Link from 'next/link'

const PlainLink = ({
  children,
  className,
  href,
  onClick,
  isExternal = false,
}) => (
  <>
    <span className={`plainlink-wrapper ${className}`}>
      <Link href={href} passHref={true}>
        <a
          href={String(href)}
          onClick={onClick}
          target={isExternal ? '_blank' : '_self'}
          rel="noopener noreferrer"
        >
          {children}
        </a>
      </Link>
    </span>
    <style jsx>{`
      .plainlink-wrapper a {
        text-decoration: none;
      }
    `}</style>
  </>
)

export default PlainLink
