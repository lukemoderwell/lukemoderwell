import React from 'react';
import styled from 'styled-components';

const ContentContainer = styled.article`
  max-width: 640px;
  margin: 0 auto;
`

const Content = (props) => {
  return(
    <ContentContainer>
      {props.children}
    </ContentContainer>
  )
}

export default Content;
