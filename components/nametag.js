import styled from 'styled-components';

const NameTag = styled.h1`
    font-family: "Input Mono", Menlo, monospace;
    font-size: 1rem;
    font-weight: 300;
    color: rgba(0,0,0,.85);
`

export default ({ children }) => (
  <NameTag>
      { children }
  </NameTag>
)
