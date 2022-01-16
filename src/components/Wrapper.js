
export default function Wrapper({ id = "content", children }) {
  return (
    <>
      <div id={id} role="region" tabIndex={-1}>
        <main>{children}</main>
      </div>
      <style jsx>{`
        div {
          display: grid;
          grid-gap: var(--sp-m);
          grid-template-columns: var(--grid-spec);
          flex-grow: 1;
        }
        div:focus {
          outline: none;
        }
        main {
          grid-column: var(--center-column);
        }
      `}</style>
    </>
  )
}