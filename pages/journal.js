import Marquee from '../components/marquee'
import Link from 'next/link'
import { posts } from '../posts'
import Head from 'next/head'
import EntryCard from '../components/entry-card'

export default () => (
  <Marquee>
    <Head>
      <title>Journal</title>
    </Head>
    <div className="entries">
      {
        posts.slice(0).reverse().map(({ id, date, title, tags }) => (
          <EntryCard 
            id={id}
            key={id}
            date={date}
            title={title} 
            tags={tags} />
        ))
      }
    </div>
  </Marquee>
)
