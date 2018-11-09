import React, { Component } from 'react';
import '../css/ClickCounter.css';

class ClickCounter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clickCount: 0
    }
    super()
    
    console.log(props.emoji + '=== ClickCounter constructor is here!')
  }

  componentWillMount() {
    console.log(this.props.emoji + '=== ClickCounter will mount. Yay!')
  }

  componentDidMount() {
    console.log(this.props.emoji + '=== ClikcCounter did mount. count: ' +
                this.props.count)
  }

  componentWillReceiveProps(nextProps) {
      console.log(this.props.emoji +
                '=== ClikcCounter will receive props. next props:' +
                nextProps.count)
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(this.props.emoji + '=== ClikcCounter will update' +
                ' nextProps.count: ' + nextProps.count +
                ' nextState.clickCount: ' + nextState.clickCount)
  }

  componentDidUpdate() {
    console.log(this.props.emoji + '=== ClikcCounter did update')
  }

  componentWillUnmount() {
    console.log(this.props.emoji + '=== ClikcCounter will unmount :-(')
  }
  
  getTotal() {
    console.warn('count ',this.props.count);
    console.warn('clickCount ',this.state.clickCount);
    return this.state.clickCount + this.props.count
  }

  render() {
    return (
      <span className='padded'
            onClick={() => {
              let clickCount = this.state.clickCount + 1
              this.setState({clickCount: clickCount})
            }}
      >
        <button>{this.props.emoji}</button>
        {this.getTotal() < 100 ? this.getTotal() : '99+'}
      </span>
    );
  }
}

export default ClickCounter;