import styled from 'styled-components';

const BlockquoteElement = styled.blockquote`
    font-size: 24px;
    font-family: "Playfair Display", Georgia, serif;
`

export default ({ by, children }) => (
  <BlockquoteElement>
    <p>
      { children }
      <br />
      {
        by && `– ${ by }`
      }
    </p>
  </BlockquoteElement>
)
