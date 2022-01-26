import React from 'react'
import Layout from '../src/components/Layout'
import PlainLink from '../src/components/PlainLink'
import postsMap from '../src/util/posts'

export default function Writing({ posts = null }) {
  return (
    <Layout frontMatter={{ title: 'Selected Writing' }}>
      {posts.length > 0
        ? posts.map((post, index) => (
            <PlainLink href={`writing/${post.slug}`} key={index}>
              {post.title}
            </PlainLink>
          ))
        : 'Hmmm. Something went wrong here.'}
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
