import React, {Component} from 'react'
import ClickCounter from './ClickCounter.js'

var thumbsup = '\u{1F44D}'
var thumbsdown = '\u{1F44E}'

class PopularBar extends Component {
  constructor() {
    super()
    //console.log('--- PopularBar constructor is here!')
  }

  componentWillMount() {
    console.log('--- PopularBar will mount. Yay!')
  }

  componentDidMount() {
    // console.log('--- PopularBar did mount. upCount: ' + this.props.upCount + ', downCount: ' + this.props.downCount)
  }

  render() {
    if (!this.props.show) {
      return (<div />)
    }

    return (
        <div className="padded" style={this.props.style}>
          <ClickCounter
            emoji={thumbsup}
            count={this.props.upCount}
          />
          <ClickCounter
            emoji={thumbsdown}
            count={this.props.downCount}
          />
        </div>
    )
  }
}

export default PopularBar