import React from 'react';

export default function Home() {
  return (
    <body>
      <main class="main">
        <div class="grid-col-4">
          <img
            alt="Luke Moderwell working on something mind-blowing"
            src="static/img/lm-banner.jpg"
          />
        </div>
        <div class="grid-col-2 d-flex align-items-center">
          <div class="main-content">
            <h2 class="flush">🏄‍♂️ Surfs up,</h2>
            <p style="display: inline;">
              my name is
              <h1 class="ttu" style="animation: color-change 8s infinite;">
                Luke Moderwell
              </h1>
              and welcome to my small slice of internet.
            </p>
            <h4 class="ttu">Current</h4>
            <ul class="mt0">
              <li>
                Design/Eng/Founder @ <a href="https://modcorp.biz">Modcorp</a>
              </li>
            </ul>
            <h4 class="ttu">Past</h4>
            <ul class="mt0">
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
            <h4 class="flush ttu">Contact</h4>
            <p class="flush">
              <a href="mailto:luke.moderwell@gmail.com">
                luke.moderwell@gmail.com
              </a>
            </p>
            <p class="flush">
              Cincinnati, OH <span id="clock">12:00:00</span>
            </p>
            <a href="./exp/drid/index.html"></a>
            <a href="./exp/drive/index.html"></a>
            <a href="./exp/horizon/index.html"></a>
            <a href="./exp/gallery/index.html"></a>
            <a href="./exp/photo-viewer/index.html"></a>
            <a href="./exp/video/index.html"></a>
            <a href="./assets/img/about-drive.pdf"></a>
            <a href="./misc/eb-and-tat/index.html"></a>
          </div>
        </div>
      </main>
    </body>
  );
}
