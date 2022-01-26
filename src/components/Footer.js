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
          <p>
            Starting a new design project? Currently open for bookings in 2022:{' '}
            <Link href="mailto:lukemoderwell@gmail.com">Get connected</Link>.
          </p>
          <p>
            <small>Cincinnati, OH {time}</small>
          </p>
        </div>
      </footer>
      <style jsx>{`
        footer {
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
