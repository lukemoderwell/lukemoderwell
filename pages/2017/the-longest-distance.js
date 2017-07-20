import Page from '../../components/page'
import Content from '../../components/content'
import P from '../../components/paragraph'
import Blockquote from '../../components/blockquote'
import Link from 'next/link'
import Head from 'next/head'
import { Heading } from 'rebass'

export default () => (
  <Page>
    <Head>
      <title>The Longest Distance</title>
    </Head>
    <Content>
      <Heading>The Longest Distance</Heading>
      <P>There's an old saying that goes like this:</P>
      <Blockquote>
        The longest distance between two points is a short cut.
      </Blockquote>
      <P>
        Growth and change take time. Usually a lot more time than we want them to take. 
        Avoid shortcuts and start thinking longer term.
      </P>
    </Content> 
  </Page>
)
