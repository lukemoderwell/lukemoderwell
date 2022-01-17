import React, { useEffect, useState } from 'react'
import moment from 'moment-timezone'
import Link from 'next/link'

export default function Footer() {
  const [time, setTime] = useState('12:00:00')
  useEffect(() => {
    function updateClock() {
      const now = moment.tz('America/New_York').format('H:mm:ss')
      setTime(now)
    }

    const timer = setInterval(() => updateClock(), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <footer>
        <div className="wrapper small">
          This site was written, designed, and built by Luke Moderwell. Find my
          code <Link href="https://github.com/lukemoderwell">here</Link>, or
          send me a{' '}
          <Link href="mailto:lukemoderwell@gmail.com">electronic mail</Link> to
          say hi.
          <p>
            <small>
              <em>Cincinnati, OH {time}</em>
            </small>
          </p>
        </div>
      </footer>
      <style jsx>{`
        footer {
          border-top: 1px solid;
          margin-top: var(--sp-l);
          padding-bottom: var(--sp-l);
          padding-top: var(--sp-s);
          color: var(--meta-color);
          display: grid;
          grid-template-columns: var(--grid-spec);
        }
        .wrapper {
          grid-column: var(--center-column);
        }
      `}</style>
    </>
  )
}
