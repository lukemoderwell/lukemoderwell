import styled from 'styled-components';

const BlockquoteElement = styled.blockquote`
    margin: 2rem 0;  
    font-size: 24px;
    font-family: "Playfair Display", Georgia, serif;
    padding-left: 20px;
    border-left: 4px solid #FE8019;
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
