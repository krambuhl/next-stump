import React from 'react'
import classnames from 'classnames'
import Link from 'next/link'
import { Logo, Wrapper } from 'Components'
import * as Breakpoints from 'Vars/breakpoints'

const GlobalHeader = ({
  dark = false,
  className,
  ...attrs
}) => {
  const classList = classnames('root', { 'dark': dark }, className)

  return (
    <header className={classList} {...attrs}>
      <Wrapper>
        <div className='wrapper'>
          <div className='logo'>
            <Link href='/'><a className='logo-link'>
              <Logo dark={dark} />
            </a></Link>
          </div>

          <div className='nav'>
            <ul className='nav-list'>
              <li><Link href='/#portfolio'><a className='nav-link nav-link--portfolio'>Portfolio</a></Link></li>
              <li><Link href='/#hello'><a className='nav-link nav-link--contact'>Say Hello</a></Link></li>
            </ul>
          </div>
        </div>
      </Wrapper>

      <style jsx>{`
        .root {
          font-size: 1rem;
          padding-top: 2em;
          z-index: 100;
          background-color: var(--color-tan-transparent);

          @media (${Breakpoints.small}) {
            position: sticky;
            top: 0;
            padding-top: 0;
          }
        }

        .dark {
          background-color: #000;
        }

        .wrapper {
          position: relative;
          z-index: 2;

          @media (${Breakpoints.small}) {
            display: flex;
            width: 100%;
          }
        }

        .logo {
          text-align: center;

          @media (${Breakpoints.small}) {
            margin-left: calc(var(--padding) * -0.55);
          }
        }

        .logo-link {
          display: inline-block;
          color: var(--color-black);
          text-decoration: none;
          padding: calc(var(--padding) * 0.55) var(--padding) calc(var(--padding) * 0.45);
        }

        .nav {
          flex-grow: 1;
          text-align: center;

          @media (${Breakpoints.small}) {
            text-align: right;
          }
        }

        .nav-list {
          margin-left: calc(var(--padding) * -0.5);

          & > li {
            display: inline-block;
          }

          @media (${Breakpoints.small}) {
            margin-left: auto;
            margin-right: calc(var(--padding) * -0.5);
          }
        }

        .nav-link {
          display: inline-block;
          padding: calc(var(--padding) * 0.5) var(--padding);
          text-decoration: none;
          font-weight: 500;
          border-bottom: transparent solid 4px;
        }

        .nav-link--portfolio {
          color: var(--color-portfolio) !important;

          &:hover {
            border-bottom-color: var(--color-portfolio);
          }
        }

        .nav-link--contact {
          color: var(--color-contact) !important;

          &:hover {
            border-bottom-color: var(--color-contact);
          }
        }
      `}</style>
    </header>
  )
}

export default GlobalHeader
