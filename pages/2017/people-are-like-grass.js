import Page from '../../components/page';
import Content from '../../components/content';
import Blockquote from '../../components/blockquote';
import Link from 'next/link';
import Head from 'next/head';

export default () => (
  <Page>
    <Head>
      <title>People Are Like Grass</title>
    </Head>
    <Content>
      <h1>People Are Like Grass</h1>
      <Blockquote>
        <sup>6</sup> A voice said "Shout!". I asked, "What should I shout?"
        "Shout that people are like the grass. Their beauty fades as quickly as 
        the flowers in a field. <sup>7</sup> The grass withers and the flowers
        fade beneath the breathe of the Lord and so it is with people. <sup>8</sup>The grass withers 
        and the flowers fade but the word of our God stands forever."
      </Blockquote>
    </Content> 
  </Page>
)
