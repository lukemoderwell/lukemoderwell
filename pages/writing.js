import React from 'react'
import Layout from '../src/components/Layout'
import PlainLink from '../src/components/PlainLink'
import CalloutBlock from '../src/components/CalloutBlock'
import postsMap from '../src/util/posts'

export default function Writing({ posts = null }) {
  return (
    <Layout
      frontMatter={{
        title: "Things I've Written",
        excerpt: 'Occassionally I write about design, art, and life.',
      }}
    >
      {posts.length > 0
        ? posts.map((post, index) => (
            <span key={index}>
              <PlainLink href={`/writing/${post.slug}`} key={index}>
                <h3>{post.title}</h3>
              </PlainLink>
              <p>{post.date}</p>
            </span>
          ))
        : 'Hmmm. Something went wrong here.'}
      <CalloutBlock>
        For more writing like this checkout{' '}
        <PlainLink href="https://lukemoderwell.substack.com/" isExternal>
          my weekly newsletter
        </PlainLink>
        .
      </CalloutBlock>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = Array.from(postsMap.values())
    .map((post) => post.frontMatter)
    .sort((a, b) => {
      return Number(new Date(b.date || '')) - Number(new Date(a.date || ''))
    })
    .filter((post) => !post.hidden)
  return {
    props: { posts },
  }
}
