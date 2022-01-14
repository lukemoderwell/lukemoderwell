import React, { useEffect } from "react"
import cx from "classnames"
import moment from "moment-timezone"
import styles from "../src/styles/Home.module.css"
import Link from "next/link"

export default function Home() {
  useEffect(() => {
    const clock = document.getElementById("clock")
    function updateClock() {
      const now = moment.tz("America/New_York").format("H:mm:ss")
      clock.innerText = now
    }
    setInterval(updateClock, 1000)
  }, [])
  
  return (
    <main className={styles.main}>
        <div className={styles.mainContent}>
          <h2 className={cx(styles.flush)}>
            <span role="img" aria-label="An emoji of a man surfing">
              🏄‍♂️
            </span>
          </h2>
          <h4 className={cx(styles.flush, styles.ttu)}>Contact</h4>
          <p className={styles.flush}>
            <Link href="mailto:luke.moderwell@gmail.com">
              luke.moderwell@gmail.com
            </Link>
          </p>
          <p className={styles.flush}>
            Cincinnati, OH <span id="clock">12:00:00</span>
          </p>
        </div>
    </main>
  )
}
