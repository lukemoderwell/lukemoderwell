import React from 'react'
import Layout from '../src/components/Layout'

export default function Home({ timeSlept }) {
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
      </main>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const OURA_SLEEP_URL = `https://api.ouraring.com/v1/sleep?access_token=${process.env.OURA_TOKEN}`
  const timeSlept = await fetch(OURA_SLEEP_URL, {})
    .then((response) => response.json())
    .then((data) => {
      const result = data.sleep
      const totalDuration = result[result.length - 1].total
      const sleepHours = totalDuration / 60 / 60
      return sleepHours.toFixed(2)
    })

  return {
    props: { timeSlept }, // will be passed to the page component as props
  }
}
