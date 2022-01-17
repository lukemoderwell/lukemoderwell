import Link from "next/link"

const PlainLink = ({ children, className, href, onClick }) => (
  <>
    <span className={`plainlink-wrapper ${className}`}>
      <Link href={href} passHref={true}>
        <a href={String(href)} onClick={onClick}>
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