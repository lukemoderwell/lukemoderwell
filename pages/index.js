import styled from 'styled-components'
import Link from 'next/link'
import Marquee from '../components/marquee'
import Section from '../components/section'
import NameTag from '../components/nametag'

const LinkList = styled.div`
  a {
    margin: 1rem 0;
    display: block;
  }
`

export default () => (
  <Marquee>
    <Section>
      <Link href="/"><NameTag>Luke Moderwell</NameTag></Link>
      <LinkList>
        <Link prefetch href="/journal"><a>Journal</a></Link>
        <Link prefetch href="/ideas"><a>Future Topics</a></Link>
      </LinkList>
    </Section>
  </Marquee>
)
