import React, {useEffect} from 'react';
import cx from 'classnames';
import moment from 'moment-timezone';
import styles from './Home.module.scss';

export default function Home() {
  useEffect(() => {
    const clock = document.getElementById('clock');
    function updateClock() {
      const now = moment.tz('America/New_York').format('H:mm:ss');
      clock.innerText = now;
    }
    setInterval(updateClock, 1000);
  }, [])
  return (
    <body>
      <main className={styles.main}>
        <div className={styles.gridCol4}>
          <img
            alt="Luke Moderwell working on something mind-blowing"
            src="/images/lm-banner.jpg"
          />
        </div>
        <div className={cx(styles.gridCol2, styles.dFlex, styles.alignItemsCenter)}>
          <div className={styles.mainContent}>
            <h2 className={cx(styles.flush, 'f3')}>🏄‍♂️ Surfs up,</h2>
            <p style={{display: 'inline'}}>
              my name is
              <h1 className={styles.ttu} style={{animation: 'color-change 8s infinite'}}>
                Luke Moderwell
              </h1>
              and welcome to my small slice of internet.
            </p>
            <h4 className={styles.ttu}>Current</h4>
            <ul className={styles.mt0}>
              <li>
                Design/Eng/Founder @ <a href="https://modcorp.biz">Modcorp</a>
              </li>
            </ul>
            <h4 className={styles.ttu}>Past</h4>
            <ul className={styles.mt0}>
              <li>
                Product Design @{' '}
                <a href="https://dotdash.io/" target="_blank">
                  Dot Dash
                </a>
              </li>
              <li>
                Frontend @{' '}
                <a href="https://crossroads.net/" target="_blank">
                  Crossroads Church
                </a>
              </li>
              <li>
                Product Design @{' '}
                <a href="https://krushmedia.com/">Krush Technologies</a> (now
                Krush Media)
              </li>
              <li>
                Design @ <a href="https://themindbox.co">Mindbox Studios</a>
              </li>
            </ul>
            <h4 className={cx(styles.flush, styles.ttu)}>Contact</h4>
            <p className={styles.flush}>
              <a href="mailto:luke.moderwell@gmail.com">
                luke.moderwell@gmail.com
              </a>
            </p>
            <p className={styles.flush}>
              Cincinnati, OH <span id="clock">12:00:00</span>
            </p>
          </div>
        </div>
      </main>
    </body>
  );
}
