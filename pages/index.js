import React from 'react'
import Layout from '../src/components/Layout'
import PlainLink from '../src/components/PlainLink'
import widont from '../src/util/widont'

export default function Home() {
  return (
    <>
      <Layout>
        <main>
          <h1>
            <span role="img" aria-label="An emoji of a man surfing">
              🏄‍♂️
            </span>
          </h1>
          <h2>
            {widont("Hi, I'm Luke. Welcome to my little slice of the web.")}
          </h2>

          <p>Here are a few things to look at while you wait:</p>
          <ul>
            <li>
              Currently building design &amp; brand tools at{' '}
              <PlainLink
                href="https://mailchimp.com/create-content/"
                isExternal
              >
                Mailchimp
              </PlainLink>
            </li>
            <li>
              I like music and play in{' '}
              <PlainLink href="https://annaandthedeeperwell.com" isExternal>
                a band
              </PlainLink>{' '}
              with my wife.
            </li>
            <li>
              I play{' '}
              <PlainLink
                href="https://en.wikipedia.org/wiki/Fender_Jazz_Bass"
                isExternal
              >
                this bass
              </PlainLink>{' '}
              and{' '}
              <PlainLink
                href="https://en.wikipedia.org/wiki/Fender_Telecaster"
                isExternal
              >
                these
              </PlainLink>{' '}
              <PlainLink
                href="https://www.youtube.com/watch?v=BU13uUJ_VfA˝"
                isExternal
              >
                guitars
              </PlainLink>
              .
            </li>
            <li>
              My family currently raises chickens for eggs and meat. We also
              raise rabbits for cuteness.
            </li>
          </ul>
        </main>
      </Layout>
      <style jsx>{`
        h2,
        h3 {
          margin-bottom: 1rem;
        }

        ul {
          margin-left: 1rem;
        }
      `}</style>
    </>
  )
}
