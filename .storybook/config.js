import { configure, addDecorator } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import Router from 'next/router'

// mock next stuff
const mockedRouter = { push: () => {}, prefetch: () => {} }
Router.router = mockedRouter

// should only be added once
// best place is in config.js
addDecorator(withA11y)

// automatically import all files ending in *.stories.js
const req = require.context('../components', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
