import Marquee from '../components/marquee'
import Section from '../components/section'
import NameTag from '../components/nametag'
import styled from 'styled-components'
import Link from 'next/link'

const StyledMarquee = styled(Marquee)`
    background-color: #e3c16d;
`

export default () => (
  <StyledMarquee>
    <Section>
      <Link href="/"><NameTag>Luke Moderwell</NameTag></Link>
      <Link prefetch href="/journal"><a>Journal</a></Link>
    </Section>
  </StyledMarquee>
)
