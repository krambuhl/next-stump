import React from 'react'
import Link from 'next/link'
import { Logo, Wrapper } from 'Tags'

const PageWrapper = props => (
  <Wrapper>
    <Link href='/'><a>
      <Logo />
      <h1><span>Stumptown</span><span>Bear</span></h1>
    </a></Link>
  </Wrapper>
)

export default PageWrapper
