import styled from 'styled-components'
import Link from 'next/link'
import { Heading } from 'rebass'

const StyledEntryCard = styled.li `
  margin: 1.5rem 0;
  text-align: left;
  list-style: none;

   /* &:before {
      content: '-';
      color: #ABABAB;
      position: absolute;
      margin-left: -20px;
    } */

    span {
      display: block;
      color: rgba(0,0,0,.5);
    }

    a {
      color: black;
      text-decoration: none;
    }
`

const EntryCard = ({id, date, title, tags}) => (
  <StyledEntryCard>
    <Link prefetch href={`/${new Date(date).getFullYear()}/${id}`}>
      <a>
        <span className="date">{date}</span>
        <Heading>{title}</Heading>
        <span className="tags">{tags}</span>
      </a>
    </Link>
  </StyledEntryCard>
)

export default EntryCard
