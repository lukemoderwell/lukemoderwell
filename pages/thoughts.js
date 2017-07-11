import Marquee from '../components/marquee';
import Link from 'next/link';
import { posts } from '../posts';
import Head from 'next/head';

const Post = ({ id, date, title }) => (
  <div className="post">
    <span className="date">{ date }</span>
    <Link prefetch href={`/${new Date(date).getFullYear()}/${id}`}><a>{ title }</a></Link>
    </div>
)

export default () => (
  <Marquee>
    <Head>
      <title>Thoughts</title>
    </Head>
    <div className="posts">
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
