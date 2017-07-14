import Header from '../components/header';
import Footer from '../components/footer';
import Section from '../components/section';
import Meta from '../components/meta'

const Page = (props) => {
  return(
    <div>
      <Meta />
      <Header />
      <Section>
        {props.children}
      </Section>
      <Footer />
    </div>
  )
}

export default Page
