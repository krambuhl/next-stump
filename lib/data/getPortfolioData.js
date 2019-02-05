import fetch from 'isomorphic-unfetch'

export default async function getPortfolioData () {
  const res = await fetch('http://localhost:3000/static/portfolio.json')
  const json = await res.json()
  return json
}
