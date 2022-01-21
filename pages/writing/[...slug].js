import Layout from '../../src/components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import postData from '../../src/util/posts'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

const defaultComponents = {
  a: Link,
  Image,
}

export default function PostPage({ source, frontMatter }) {
  const components = {
    ...defaultComponents,
  }
  return (
    <Layout frontMatter={frontMatter}>
      <MDXRemote {...source} components={components} />
    </Layout>
  )
}

export const getStaticProps = async ({ params }) => {
  if (!params) {
    console.error('No parameters passed for static generation')
    return { props: {} }
  }
  const postKey = String(params.slug.join('/'))
  const source = postData.find((post) => post.frontMatter.slug === postKey)
  const { content, frontMatter } = source
  const mdxSource = await serialize(content, {})

  return {
    props: {
      source: mdxSource,
      frontMatter,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = postData.map((post) => ({
    params: { slug: post.frontMatter?.slug.split('/') },
  }))

  return {
    paths,
    fallback: false,
  }
}
