import styled from 'styled-components';

const P = styled.p`
    margin: 1.5rem 0;
    font-size: 1rem;
    line-height: 1.625rem;
    font-family: "Input Mono Narrow", Menlo, monospace;
    color: rgba(0,0,0,.85);
`

export default ({ children }) => (
  <P>
      { children }
  </P>
)
