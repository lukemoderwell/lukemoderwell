import Page from '../../components/page';
import Content from '../../components/content';
import Link from 'next/link';
import Head from 'next/head';

export default () => (
  <Page>
    <Head>
      <title>Jello World</title>
    </Head>
    <Content>
      <h1>Jello World</h1>
      <p>For the past few months now I have wanted to start a journal. The reasons for this are to 
      better organize my thoughts, to develop a reflective habit, and to improve at writing. I imagine this
      exercise as something that takes place every morning for about 30 minutes. I'll try not censor my writing
      and keep most things stream of consciousness. It's possible that I'll go back and expand upon older entries.</p>

      <p>This content may contain but is not limited to: personal life events, spiritual/theology,
      design, philosophy, humor, recipes, programmning, poetry, music, and memories. See <Link href="/ideas" prefetch><a>ideas</a></Link> for a list of possible future topics.</p>
    </Content>
  </Page>
)
