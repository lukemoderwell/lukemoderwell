import React, { useState } from 'react'
import Link from 'next/link'
import Layout from '../src/components/Layout'
import { useEffect } from 'react/cjs/react.development'

export default function Home() {
  const [timeSlept, setTimeSlept] = useState('X')
  useEffect(() => {
    const getSleepData = () => {
      fetch('/api/sleep', {})
        .then((response) => response.json())
        .then((data) => {
          const result = data.sleep
          const totalDuration = result[result.length - 1].total
          const sleepHours = totalDuration / 60 / 60
          setTimeSlept(sleepHours.toFixed(2))
        })
    }
    getSleepData()
  }, [])
  return (
    <Layout>
      <main>
        <h1>
          <span role="img" aria-label="An emoji of a man surfing">
            🏄‍♂️
          </span>
        </h1>
        <h2>Hello there, fren.</h2>
        <h3>
          Welcome to my little piece o&apos; web. Why don&apos;t you make
          yourself at home?
        </h3>

        <p> Not to brag but last night I slept for {timeSlept} hours.</p>
        <h4>Contact</h4>
        <p>
          <Link href="mailto:luke.moderwell@gmail.com">
            luke.moderwell@gmail.com
          </Link>
        </p>
      </main>
    </Layout>
  )
}

// Nextjs way to get props at build time
// export async function getStaticProps(context) {
//   return {
//     props: {}, // will be passed to the page component as props
//   }
// }
