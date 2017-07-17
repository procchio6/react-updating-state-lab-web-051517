import React from 'react'

class DigitalClicker extends React.Component {

  state = {
    timesClicked:0
  }

  increaseCounter = () => {
    this.setState({
      timesClicked: ++this.state.timesClicked
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.increaseCounter}>
          {this.state.timesClicked}
        </button>
      </div>
    )
  }
}

export default DigitalClicker
