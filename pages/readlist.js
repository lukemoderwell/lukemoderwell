import React from 'react'
import Layout from '../src/components/Layout'
import Media from '../src/components/Media'

const AIRTABLE_URL = 'https://api.airtable.com/v0/appx3tocSCx5kliMc/Library'

export default function Readlist({ entries }) {
  return (
    <Layout>
      <h3>2022</h3>
      {entries.map((entry, index) => (
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
          notes={entry.notes}
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
        console.log(fields)
        return fields
      })
    )

  const entries = rawEntries.sort((a, b) => a.title.localeCompare(b.title))
  return {
    props: {
      entries,
    }, // will be passed to the page component as props
  }
}
