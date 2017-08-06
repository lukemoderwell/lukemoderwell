import styled from 'styled-components';

const FlexContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: 2rem;
  text-align: center;
`

const Marquee = (props) => {
  return(
    <FlexContainer>
        {props.children}
    </FlexContainer> 
  )
}

export default Marquee;
