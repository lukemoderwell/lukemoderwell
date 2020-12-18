import React, { useEffect } from 'react';
import cx from 'classnames';
import moment from 'moment-timezone';
import styles from './Home.module.scss';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

export default function Home() {
  useEffect(() => {
    const clock = document.getElementById('clock');
    function updateClock() {
      const now = moment.tz('America/New_York').format('H:mm:ss');
      clock.innerText = now;
    }
    setInterval(updateClock, 1000);
  }, []);
  return (
    <main className={styles.main}>
      <div className={styles.gridCol4}>
        <img
          alt="Luke Moderwell working on something mind-blowing"
          src="/images/lm-banner.jpg"
        />
      </div>
      <div
        className={cx(styles.gridCol2, styles.dFlex, styles.alignItemsCenter)}
      >
        <div className={styles.mainContent}>
          <h2 className={cx(styles.flush)}><span role="img" aria-label="An emoji of a man surfing">🏄‍♂️</span> Surfs up,</h2>
          <p style={{ display: 'inline-block', marginBottom: '1rem'}}>
            my name is
            <h1
              className={cx(styles.ttu, styles.inline, styles.colorChange)}
              style={{ margin: '0 4px' }}
            >
              Luke Moderwell
            </h1>
            and welcome to my small slice of internets. To get a weekly dose of
            my takes on software, music, family, and farming consider
            subscribing to{' '}
            <OutboundLink rel="noreferrer" href="https://lukemoderwell.substack.com/">
              my newsletter
            </OutboundLink>
            .
          </p>
          <iframe src="https://lukemoderwell.substack.com/embed" height="120" style={{margin: '-12px'}} frameborder="0" scrolling="no"></iframe>

          <h4 className={styles.ttu}>Current</h4>
          <ul className={styles.mt0}>
            <li>
              Making Things @{' '}
              <OutboundLink rel="noreferrer" href="https://modcorp.biz">
                Modcorp
              </OutboundLink>
            </li>
          </ul>
          <h4 className={cx(styles.flush, styles.ttu)}>Other Places</h4>
          <ul className={styles.mt0}>
            <li>
              <OutboundLink rel="noreferrer" href="https://github.com/lukemoderwell">
                Github
              </OutboundLink>
            </li>
            <li>
              <OutboundLink rel="noreferrer" href="https://www.linkedin.com/in/luke-moderwell-548a5022/">
                LinkedIn
              </OutboundLink>
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
  );
}
