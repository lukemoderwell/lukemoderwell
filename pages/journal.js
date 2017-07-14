import Marquee from '../components/marquee';
import Link from 'next/link';
import { posts } from '../posts';
import Head from 'next/head';

const Post = ({ id, date, title }) => (
  <div className="entry">
    <span className="date">{ date }</span>
    <Link prefetch href={`/${new Date(date).getFullYear()}/${id}`}><a>{ title }</a></Link>
    </div>
)

export default () => (
  <Marquee>
    <Head>
      <title>Journal</title>
    </Head>
    <div className="entries">
      {
        posts.map(({ id, date, title }) => (
          <Post 
            id={id}
            key={id}
            date={date}
            title={title} />
        ))
      }
    </div>
  </Marquee>
)
