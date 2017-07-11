import Marquee from '../components/marquee';
import Link from 'next/link';
import { ideas } from '../ideas';
import Head from 'next/head';

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
    <Head>
      <title>Idea List</title>
    </Head>
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
  </Marquee>
)
