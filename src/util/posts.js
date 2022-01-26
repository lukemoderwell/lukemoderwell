import fs from 'fs'
import read from 'fs-readdir-recursive'
import matter from 'gray-matter'
import path from 'path'
import convertDateToString from './dateFormat'

const POSTS_PATH = path.join(process.cwd(), 'content')
const paths = read(POSTS_PATH)
const postsMap = paths
  .filter((it) => it.endsWith('.mdx'))
  .map((filePath) => {
    const fullPath = path.join(POSTS_PATH, filePath)
    const source = fs.readFileSync(fullPath)

    const slug = fullPath.replace(/^.*\/content\//, '').replace('.mdx', '')
    // const ogSlug = slug.replace(/^\//, '').replace(/\//g, '-') + '.png'

    const { content, data } = matter(source)

    const formattedData = { ...data, date: convertDateToString(data.date) }
    return {
      content,
      frontMatter: {
        ...formattedData,
        slug,
        // ogSlug,
      },
      path: fullPath,
    }
  })

export function postsForCategory(category) {
  return Array.from(postsMap.values()).filter((post) =>
    post.frontMatter?.categories?.includes(category)
  )
}

export const allCategories = Array.from(postsMap.values())
  .reduce((categories, post) => {
    return post.frontMatter?.categories
      ? [...categories, ...post.frontMatter.categories]
      : categories
  }, [])
  .filter((v, i, a) => a.indexOf(v) === i)

export default postsMap
