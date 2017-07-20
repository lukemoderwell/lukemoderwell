import Page from '../../components/page'
import Content from '../../components/content'
import Blockquote from '../../components/blockquote'
import P from '../../components/paragraph'
import Link from 'next/link'
import Head from 'next/head'
import { Heading } from 'rebass'

export default () => (
  <Page>
    <Head>
      <title>People Are Like Grass</title>
    </Head>
    <Content>
      <Heading>People Are Like Grass</Heading>
      <Blockquote>
        <sup>6</sup> A voice said "Shout!". I asked, "What should I shout?"
        "Shout that people are like the grass. Their beauty fades as quickly as 
        the flowers in a field. <sup>7</sup> The grass withers and the flowers
        fade beneath the breathe of the Lord and so it is with people. <sup>8</sup> The grass withers 
        and the flowers fade but the word of our God stands forever." <br />
        <span className="author">Isaiah 40:6-8</span>
      </Blockquote>
      <P>Sometimes it can be hard to be humble. Remember that our lives are fragile like grass.</P>
    </Content> 
  </Page>
)
