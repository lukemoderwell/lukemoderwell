import fs from 'fs'
import read from 'fs-readdir-recursive'
import matter from 'gray-matter'
import path from 'path'

const POSTS_PATH = path.join(process.cwd(), 'content')
console.log(POSTS_PATH)
const paths = read(POSTS_PATH)
const postsMap = paths
  .filter((it) => it.endsWith('.mdx'))
  .map((filePath) => {
    const fullPath = path.join(POSTS_PATH, filePath)
    const source = fs.readFileSync(fullPath)

    const slug = fullPath.replace(/^.*\/blog\//, '').replace('.mdx', '')
    const ogSlug = slug.replace(/^\//, '').replace(/\//g, '-') + '.png'

    const { content, data } = matter(source)
    return {
      content,
      frontMatter: {
        ...data,
        slug,
        ogSlug,
      },
      path: fullPath,
    }
  })
  .map((entry) => {
    const {
      frontMatter: { slug },
    } = entry
    return [slug, entry]
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
