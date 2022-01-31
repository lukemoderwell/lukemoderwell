const GlobalStyles = () => (
  <>
    <style global jsx>
      {`
        :root {
          color-scheme: light dark;
          --gray-hue: 32;
          --gray-sat-mult: 0.2;
          --gray00: hsl(var(--gray-hue), calc(var(--gray-sat-mult) * 50%), 98%);
          --gray05: hsl(var(--gray-hue), calc(var(--gray-sat-mult) * 40%), 95%);
          --gray10: hsl(var(--gray-hue), calc(var(--gray-sat-mult) * 40%), 90%);
          --gray20: hsl(var(--gray-hue), calc(var(--gray-sat-mult) * 40%), 70%);
          --gray30: hsl(var(--gray-hue), calc(var(--gray-sat-mult) * 30%), 30%);
          --gray35: hsl(var(--gray-hue), calc(var(--gray-sat-mult) * 15%), 20%);
          --gray40: hsl(var(--gray-hue), calc(var(--gray-sat-mult) * 30%), 5%);
          --baseline: 1.6;
          --xxs: 0.125;
          --xs: 0.5;
          --s: 0.75;
          --m: 1;
          --l: 1.25;
          --xl: 2;
          --xxl: 3;
          --sp-xxs: calc(var(--xxs) * 1rem);
          --sp-xs: calc(var(--xs) * 1rem);
          --sp-s: calc(var(--s) * 1rem);
          --sp-m: calc(var(--m) * 1rem);
          --sp-l: calc(var(--l) * 1rem);
          --sp-xl: calc(var(--xl) * 1rem);
          --sp-xxl: calc(var(--xxl) * 1rem);
          --container-width: 33rem;
          --page-width: calc(
            var(--container-width) + (var(--baseline) * var(--m) * 2)
          );
          --content-width: calc(0.25rem + (100vw - var(---page-width)) / 2);
          --breakpoint-narrow: 50em;
          --breakpoint-medium: 64em;
          --site-color: #7d501d;
          --text-color: var(--gray40);
          --meta-color: var(--gray30);
          --wash-color: var(--gray00);
          --mark-color: rgba(255, 200, 0, 0.15);
          --highlight-color: coral;
          --hover-color: var(--site-color);
          --code-wash: var(--gray05);
          --code-color: #222;
          --grid-spec: minmax(0, 1fr) minmax(auto, var(--container-width))
            minmax(0, 1fr);
          --center-column: 2 / 3;
          --font-mono: 'Inconsolata', monospace;
          --font-sans: system-ui, -apple-system, sans-serif;
          --font-sans-extended: var(--font-sans);
          --font-serif: Georgia, serif;
          --font-body: var(--font-sans);
          --font-heading: var(--font-sans);
          --font-caption: var(--font-sans);
        }

        @media (max-width: 50em) {
          :root {
            --grid-spec: minmax(100%, 1fr);
            --center-column: 1 / -1;
          }
        }

        @media (prefers-color-scheme: dark) {
          :root {
            --text-color: var(--gray00);
            --meta-color: var(--gray10);
            --wash-color: var(--gray40);
            --code-wash: #222;
            --code-color: #eee;
          }
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html {
          background-color: var(--wash-color);
          color: var(--text-color);
          font-family: var(--font-body);
          font-size: clamp(100%, 2.5vw, 115%);
          line-height: var(--baseline);
          padding: var(--sp-m);
          font-feature-settings: 'ss02' 1;
          font-variant-alternates: stylistic(ss02);
        }

        p {
          margin-bottom: 1em;
        }

        img {
          width: 100%;
        }
      `}
    </style>
  </>
)

export default GlobalStyles
