import Marquee from '../components/marquee'
import Section from '../components/section'
import NameTag from '../components/nametag'
import Link from 'next/link';

export default () => (
  <Marquee>
    <Section>
      <Link href="/"><NameTag>Luke Moderwell</NameTag></Link>
      <Link prefetch href="/journal"><a>Journal</a></Link>
    </Section>
  </Marquee>
)
