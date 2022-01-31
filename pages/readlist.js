import React from 'react'
import Layout from '../src/components/Layout'
import Media from '../src/components/Media'
import widont from '../src/util/widont'

const AIRTABLE_URL = 'https://api.airtable.com/v0/appx3tocSCx5kliMc/Library'

export default function Readlist({ entries = null }) {
  return (
    <Layout
      frontMatter={{
        title: 'Book List',
        excerpt: "A list of books I've read.",
      }}
    >
      <p>
        {widont(
          "A rough list of books I've read, am curretly reading, or hope to read someday."
        )}
      </p>
      {entries.length > 0 &&
        entries.map((entry, index) => (
          <Media
            key={index}
            title={entry.title}
            author={entry.author}
            url={entry.url}
            cover={{
              src: entry.thumbnail[0].thumbnails.large.url,
              height: entry.thumbnail[0].thumbnails.large.height,
              width: entry.thumbnail[0].thumbnails.large.width,
            }}
          />
        ))}
    </Layout>
  )
}

// Nextjs way to get props at build time
export const getStaticProps = async () => {
  const rawEntries = await fetch(AIRTABLE_URL, {
    headers: {
      Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
    },
  })
    .then((d) => d.json())
    .then((d) => d.records)
    .then((d) =>
      d.map((record) => {
        const { fields } = record
        return fields
      })
    )

  const entries = rawEntries.sort((a, b) => new Date(b.date) - new Date(a.date))
  return {
    props: {
      entries,
    }, // will be passed to the page component as props
  }
}
