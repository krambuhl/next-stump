import React from 'react'
import { WordRotator } from 'Components'
import { Heading, Wrapper } from 'Tags'

const Biography = () => (
  <Wrapper className='Rhythm--large'>
    <Heading>Well, Hello There!</Heading>

    <p>
      I am Evan Krambuhl and I make artifacts on the internet.
    </p>

    <p>
      We should make something together, take a look at my <a href='#portfolio' class='color-portfolio'>portfolio</a>, or just <a href='#say-hello' class='color-sayhello'>say hello</a>.
    </p>

    <p>
      <img src='/static/head-1.jpg' alt='my face' width='100%' style={{ borderRadius: 100000, maxWidth: 480 }} />
    </p>

    <p>
      <WordRotator words={[
        'Minimalism',
        'Maximalism',
        'Mentoring',
        'Javascript',
        'User Experience Design',
        'Functional Programming',
        'Data Visualization',
        'Mathmatics',
        'Music',
        'Drumming',
        'Audio Engineering',
        'Frank Zappa',
        'Franz Kafka',
        'Kurt Vonnegut',
        'Magical Realism',
        'Couch Surfing',
        'Tent Camping',
        'Gardening',
        'Board Games',
        'Almonds'
      ]} />
    </p>
  </Wrapper>
)

export default Biography
