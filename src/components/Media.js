import Image from 'next/image'
import PlainLink from './PlainLink'

const Media = ({ author, cover, notes, title, url }) => {
  return (
    <>
      <PlainLink href={url}>
        <div className="media-container">
          <Image
            alt={`The media cover for “${title}” by ${author}`}
            height={cover.height}
            sizes={'4rem'}
            src={cover.src}
            width={cover.width}
          />
          <div>
            <h3 className="title zm">{title}</h3>
            <p className="small meta zm">{author}</p>
            {notes && (
              <p
                className="small serif meta zm"
                style={{
                  paddingTop: 'var(--sp-xs)',
                }}
              >
                <em>‘{notes}’</em>
              </p>
            )}
          </div>
        </div>
      </PlainLink>
      <style jsx>{`
        .media-container {
          align-items: start;
          display: grid;
          grid-gap: var(--sp-s);
          grid-template-columns: var(--sp-xxl) 1fr;
          margin-bottom: var(--sp-l);
        }
        /* Override Figure's margin-bottom */
        .media-container :global(figure) {
          margin-bottom: 0;
        }
        .title {
          line-height: 1.4;
        }
      `}</style>
    </>
  )
}

export default Media
