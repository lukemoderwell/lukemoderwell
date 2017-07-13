import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const HeaderContainer = styled.header`
  display: block;
  max-width: 640px;
  margin: 3rem auto 4rem;
  text-align: center;
`

const Header = (props) => {
  return(
    <HeaderContainer>
      <Link prefetch href="/" rel="home"><a>Luke Moderwell</a></Link>
    </HeaderContainer>
  )
}

export default Header
