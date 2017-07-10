import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  display: block;
  max-width: 640px;
  margin: 3rem auto 4rem;
`

const Header = (props) => {
  return(
    <HeaderContainer>
      <h1>
        <a href="/" rel="home">Luke Moderwell</a>
      </h1>
    </HeaderContainer>
  )
}

export default Header
