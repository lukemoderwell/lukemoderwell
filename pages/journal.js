import Marquee from '../components/marquee';
import Link from 'next/link';
import { posts } from '../posts';
import Head from 'next/head';
import styled from 'styled-components'

const StyledPost = styled.li`
  margin: 1rem 0;
  text-align: left;
  list-style: none;

    &:before {
      content: '-';
      color: #ABABAB;
      position: absolute;
      margin-left: -20px;
    }

    span {
      padding-left: .5rem;
      color: rgba(0,0,0,.5);
    }
`

const Post = ({ id, date, title }) => (
  <StyledPost>
    <Link prefetch href={`/${new Date(date).getFullYear()}/${id}`}><a>{ title }</a></Link>
    <span className="date">{ date }</span>
  </StyledPost>
)

export default () => (
  <Marquee>
    <Head>
      <title>Journal</title>
    </Head>
    <div className="entries">
      {
        posts.slice(0).reverse().map(({ id, date, title }) => (
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
