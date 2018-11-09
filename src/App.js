import React, {Component} from 'react'
import './App.css'
import PopularBar from "./components/PopularBar"

class App extends Component {
  constructor() {
    super()
    this.state = {
      showPopularBar: false,
      upCount: 5,
      downCount: 8
    }
  }

  componentWillMount() {
    console.log('--- App will mount!');
  }

  componentDidMount() {
    this.timer = setInterval(this.everyFiveSeconds.bind(this), 5000);
    console.log('--- App did mount');
  }

  everyFiveSeconds() {
    let state = this.state
    state.upCount += 20
    this.setState(state)
  }

//muda o state mas não renderiza novamente o dom 
  shouldComponentUpdate(nextProps, nextState) {
    let shouldUpdate = nextState.upCount < 110 ? true : false;
    return shouldUpdate
  }

  componentWillUnmount(){
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <h1>Popular Bar</h1>
        <label>
          <input
            type='checkbox'
            defaultChecked={this.state.showPopularBar}
            ref='showPopularBar'
            onChange={() => this.setState({showPopularBar: !this.state.showPopularBar })
            }
          />
          Show popular bar
        </label>

        <PopularBar
            show={this.state.showPopularBar}
            upCount={this.state.upCount}
            downCount={this.state.downCount}
        />
      </div>
    )
  }
}

export default App
