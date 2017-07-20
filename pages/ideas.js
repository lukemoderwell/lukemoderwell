import Marquee from '../components/marquee';
import Section from '../components/section';
import Link from 'next/link';
import Head from 'next/head';
import styled from 'styled-components'
import { ideas } from '../ideas';


const StyledIdea = styled.li`
  list-style: none;
  text-align: left;
  margin-bottom: 1rem;

    &:before {
      content: '-';
      color: #ABABAB;
      position: absolute;
      margin-left: -20px;
    }
`

const Idea = ({id, idea, notes, link}) => (
  <StyledIdea>
    {link.length > 0 
      ? <Link href={link}><a><h3>{idea}</h3></a></Link>
      : <h3>{idea}</h3> }
    <p className="notes">{notes}</p>
  </StyledIdea>
)

export default() => (
  <Marquee>
    <Section>
      <Head>
        <title>Idea List</title>
      </Head>
      <Link prefetch href="/">
        <a>Luke Moderwell</a>
      </Link>
      <div className="ideas">
        <ul>
          {
            ideas.map(({id, idea, notes, link}) => (
              <Idea id={id} key={id} idea={idea} notes={notes} link={link}/>
            ))
          }
        </ul>
      </div>
    </Section>
  </Marquee>
)
