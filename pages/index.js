import Marquee from '../components/marquee';
import Section from '../components/section';
import Link from 'next/link';

export default () => (
  <Marquee>
    <Section>
      <Link href="/"><h1>Luke Moderwell</h1></Link>
      <Link prefetch href="/thoughts"><a>Thoughts</a></Link>
      <hr />
      <Link prefetch href="/ideas"><a>Ideas</a></Link>
    </Section>
  </Marquee>
)
