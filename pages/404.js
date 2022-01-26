import Layout from '../src/components/Layout'
import PlainLink from '../src/components/PlainLink'

export default function FourOhFourPage() {
  return (
    <Layout frontMatter={{ title: '404 Page Not Found' }}>
      <p>
        The page you tried to access cannot be found. Maybe try going{' '}
        <PlainLink href="/">home</PlainLink>.
      </p>
    </Layout>
  )
}
