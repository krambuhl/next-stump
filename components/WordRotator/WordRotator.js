import React from 'react'

class WordRotator extends React.Component {
  constructor(props) {
    super(props)
    this.state = { counter: 0 }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ counter: this.state.counter + 1 })
    }, 1000);
  }

  render () {
    return (
      <React.Fragment>
        {this.props.words[this.state.counter % this.props.words.length]}
      </React.Fragment>
    )
  }
}

export default WordRotator
