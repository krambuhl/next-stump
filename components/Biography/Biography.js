import React from 'react'
import { WordRotator } from 'Components'
import { Heading, Strata, Wrapper } from 'Tags'

const Biography = () => (
  <Strata id='biography' className='Biography'>
    <Wrapper className='Rhythm--large'>
      <Heading tagName='h2' level='h1'>Well, Hello There!</Heading>

      <p>
        I am Evan Krambuhl and I make artifacts on the internet.
      </p>

      <p>
        We should make something together, take a look at my <a href='#portfolio' className='u-color-portfolio'>portfolio</a>, or just <a href='#say-hello' className='u-color-contact'>say hello</a>.
      </p>

      <p>
        <img src='/static/head-1.jpg' srcSet='/static/head-1.jpg 1x, /static/head-1@2x.jpg 2x' alt='my face' width='100%' style={{ borderRadius: 100000, maxWidth: 480 }} />
      </p>

      <br />

      <Heading level='h2'>I like</Heading>

      <ul>
        <li>Minimalism</li>
        <li>Maximalism</li>
        <li>Mentoring</li>
        <li>Javascript</li>
        <li>User Experience Design</li>
        <li>Functional Programming</li>
        <li>Data Visualization</li>
        <li>Mathmatics</li>
        <li>Music</li>
        <li>Drumming</li>
        <li>Audio Engineering</li>
        <li>Frank Zappa</li>
        <li>Franz Kafka</li>
        <li>Kurt Vonnegut</li>
        <li>Magical Realism</li>
        <li>Couch Surfing</li>
        <li>Tent Camping</li>
        <li>Gardening</li>
        <li>Board Games</li>
        <li>Almonds</li>
      </ul>
    </Wrapper>
  </Strata>
)

export default Biography
