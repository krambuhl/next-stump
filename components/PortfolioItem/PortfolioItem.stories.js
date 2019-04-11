import React from 'react';
import { storiesOf } from '@storybook/react';
import { PortfolioItem } from 'Components'
import Centered from 'Decorators/Centered'
import Padding from 'Decorators/Padding'
import { Wrapper320 } from 'Decorators/Wrapper'

const portfolioItem = JSON.parse(`{"slug":"intuit-hackathon","title":"Intuit Hackathon","year":2019,"company":"Turn","companyHref":"https://turnwith.us/","projectHref":"https://www.smallbizhack.com/","thumbnail":{"srcSet":"/static/portfolio/thumbnail-320-70b1da012868129e7eb0437b22f0b245.jpg 320w,/static/portfolio/thumbnail-640-6eae06576ebd5a21852e58c63f6213db.jpg 640w","images":[{"path":"/static/portfolio/thumbnail-320-70b1da012868129e7eb0437b22f0b245.jpg","width":320,"height":320},{"path":"/static/portfolio/thumbnail-640-6eae06576ebd5a21852e58c63f6213db.jpg","width":640,"height":640}],"src":"/static/portfolio/thumbnail-320-70b1da012868129e7eb0437b22f0b245.jpg","width":320,"height":320}}`)

storiesOf('PortfolioItem', module)
  .addDecorator(Wrapper320)
  .addDecorator(Padding)
  .addDecorator(Centered)
  .add('example', () => <PortfolioItem {...portfolioItem} />)
