import Footer from './Footer'
import GlobalStyles from './GlobalStyles'
import Header from './Header'
// import Metatags from './Metatags'
import Wrapper from './Wrapper'
import siteConfig from '../data/siteconfig.json'

const Content = ({ frontMatter, children }) => {
  const site = siteConfig
  const title = frontMatter?.title || site.title
  const isRoot = title === site.title
  const date = frontMatter?.date
  const excerpt = frontMatter?.excerpt || site.description

  return (
    <>
      {/* <Metatags description={excerpt || site.description} title={title} /> */}
      <Header siteTitle={site.title} />
      <Wrapper>
        {!isRoot && (
          <header>
            <h1>{title}</h1>
            {date && <time className="small">{date}</time>}
          </header>
        )}
        {children}
      </Wrapper>
      <Footer />

      <style jsx>{`
        header {
          margin-bottom: var(--sp-l);
          padding-bottom: var(--sp-xl);
        }
        header > :global(h1) {
          margin-bottom: 0 !important;
          padding-bottom: 0 !important;
        }
      `}</style>
    </>
  )
}

export default function Layout({ children, frontMatter }) {
  return (
    <>
      <Content frontMatter={frontMatter}>{children}</Content>
      <GlobalStyles />
    </>
  )
}
