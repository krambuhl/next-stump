import React from 'react'
import classnames from 'classnames'
import Link from 'next/link'
import { Logo, Wrapper } from 'Tags'

const GlobalHeader = ({
  dark = false,
  className,
  ...attrs
}) => {
  const classList = classnames('GlobalHeader', { 'GlobalHeader--dark': dark }, className)

  return (
    <header className={classList} {...attrs}>
      <Wrapper className='GlobalHeader__wrapper'>
        <div className='GlobalHeader__logo'>
          <Link href='/'><a className='GlobalHeader__logo-link'>
            <Logo dark={dark} />
          </a></Link>
        </div>

        <div className='GlobalHeader__nav'>
          <ul className='GlobalHeader__nav-list'>
            <li><Link href='/#portfolio'><a className='GlobalHeader__nav-link GlobalHeader__nav-link--portfolio'>Portfolio</a></Link></li>
            <li><Link href='/#hello'><a className='GlobalHeader__nav-link GlobalHeader__nav-link--contact'>Say Hello</a></Link></li>
          </ul>
        </div>
      </Wrapper>
    </header>
  )
}

export default GlobalHeader
