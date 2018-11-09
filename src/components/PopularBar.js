import React, {Component} from 'react'
import ClickCounter from './ClickCounter.js'
import '../css/PopularBar.css';

var thumbsup = '\u{1F44D}'
var thumbsdown = '\u{1F44E}'

class PopularBar extends Component {
  constructor() {
    super()
    this.state = {show: true};
    console.log('--- PopularBar constructor is here!');
  }

  componentWillMount() {
    console.log('--- PopularBar will mount. Yay!');
  }

  componentDidMount() {
    console.log('--- PopularBar did mount. upCount: ' + this.props.upCount + ', downCount: ' + this.props.downCount)
  }
  //TODO :: depreciado :'(
  componentWillReceiveProps(nextProps) {
    if (nextProps.show !== this.state.show) {
      let opaccityEffect = nextProps.show;
      this.setState({show: opaccityEffect});  
    }
  }

  render() {
    return (
        <div className={this.state.show ? 'slideBar' : 'hideBar' } style={this.props.style}>
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