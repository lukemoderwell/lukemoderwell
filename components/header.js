import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const HeaderContainer = styled.header`
  display: block;
  max-width: 640px;
  margin: 3rem auto 4rem;
`

const Header = (props) => {
  return(
    <HeaderContainer>
      <h1>
        <Link prefetch href="/" rel="home"><a>Luke Moderwell</a></Link>
      </h1>
    </HeaderContainer>
  )
}

export default Header
