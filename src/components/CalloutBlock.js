export default function CalloutBlock({ children }) {
  return (
    <>
      <div className="calloutBlock">{children}</div>
      <style jsx>{`
        .calloutBlock {
          background-color: var(--mark-color);
          font-size: clamp(1rem, 2.5vw, 1.15rem);
          padding: var(--sp-s);
          margin: var(--sp-m) 0;
        }
      `}</style>
    </>
  )
}
