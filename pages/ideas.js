import Marquee from '../components/marquee';
import Section from '../components/section';
import Link from 'next/link';
import Head from 'next/head';
import { ideas } from '../ideas';


const Idea = ({ id, idea, notes, link }) => (
    <li className="idea">
        {
            link.length > 0 ? 
            <Link href={link}><a><h3>{idea}</h3></a></Link>
            : <h3>{idea}</h3>
        }
        <p className="notes">{notes}</p>
    </li>
)

export default () => (
  <Marquee>
    <Section>
        <Head>
        <title>Idea List</title>
        </Head>
        <Link prefetch href="/"><a>Luke Moderwell</a></Link>
        <div className="ideas">
            <ul>
                {
                    ideas.map(({ id, idea, notes, link }) => (
                        <Idea 
                            id={id}
                            key={id}
                            idea={idea}
                            notes={notes}
                            link={link} />
                    ))
                }
            </ul>
        </div>
    </Section>
  </Marquee>
)
