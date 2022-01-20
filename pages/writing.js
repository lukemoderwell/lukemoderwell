import React from 'react'
import Layout from '../src/components/Layout'

export default function Writing({ posts }) {
  return (
    <Layout frontMatter={{ title: "Selected Writing" }}>
      {/* {posts.map((post, index) => (
        <h1 key={index}>Hi There</h1>
      ))} */}
      Here is where the content will go.
    </Layout>
  )
}