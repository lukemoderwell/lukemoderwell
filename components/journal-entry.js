import styled from 'styled-components'
import Link from 'next/link'
import { Heading } from 'rebass'

const Entry = styled.li `
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

const JournalEntry = ({id, date, title, tags}) => (
  <Entry>
    <Link prefetch href={`/journal/${id}`}>
      <a>
        <Heading>{title}</Heading>
        <span className="date">{date}</span>
      </a>
    </Link>
  </Entry>
)

export default JournalEntry
