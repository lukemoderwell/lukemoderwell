import React from 'react'
import Layout from '../src/components/Layout'
import postData from '../src/util/posts'

export default function Writing({ posts }) {
  return (
    <Layout frontMatter={{ title: 'Selected Writing' }}>
      {posts.map((post, index) => (
        <h1 key={index}>{post.title}</h1>
      ))}
      Here is where the content will go.
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = Array.from(postData.values())
    .map((post) => post.frontMatter)
    .sort((a, b) => {
      return Number(new Date(b.date || '')) - Number(new Date(a.date || ''))
    })
    .filter((post) => !post.hidden)

  return {
    props: { posts },
  }
}
