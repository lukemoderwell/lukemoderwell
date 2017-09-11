import Page from '../../components/page'
import Content from '../../components/content'
import P from '../../components/paragraph'
import Link from 'next/link'
import Head from 'next/head'
import { Heading } from 'rebass'

export default () => (
  <Page>
    <Head>
      <title>Practicing Rest</title>
    </Head>
    <Content>
      <Heading>Practicing Rest</Heading>
      <P>I've been noticing something lacking in my life. This thing is <em>rest</em>.</P>
      <P>
        Like most Americans, I've been taught what it means to work. I know how to wake up early and pull all-nighters.
        I'm familar with the feeling of pushing past exhaustion to get things done. I learned at my first job
        that those who left the office late were looked at as the hardest workers and generally got favored by managers.
        Sending and answering emails late into the night is expected because we now work 24/7. We have a culture of work.
      </P>
      <P>
        Recently my family and I have started trying to celebrate Shabbat (שבת) or Sabbath in English.
        Simply put, Shabbat is the idea that human beings should have a weekly rythmn of resting. This concept
        comes from <a href="https://www.biblegateway.com/passage/?search=Gen.2.2-Gen.2.3&version=NLT">Genesis 2:2-3</a> 
        when God rests after 6 days of creation. Keeping the Sabbath is <a href="https://www.biblegateway.com/passage/?search=Exodus+20%3A8-11&version=NLT">one of the 10 commandments</a> and
        Jesus also <a href="https://www.biblegateway.com/passage/?search=Mark%202:23-27">spoke about it's importance</a> saying it was literally made for us as humans.
      </P>
      <P>Resting and observing Shabbat has been extremely challenging for me.
      Americans, religious and secular alike, don't typically take an entire 24 hours off.
      It's not something that I've ever experienced or practiced. What does rest look like?
      Is it laying around doing nothing? Is it really a code-word for meditation or some other
      spiritual act of focus? It's corny to say, but for me resting can be hard work.
      </P>
    </Content> 
  </Page>
)
