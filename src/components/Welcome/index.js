// Write your code here

import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribe: false}

  subscribe = () => {
    this.setState(prevState => ({isSubscribe: !prevState.isSubscribe}))
  }

  getButtonText = () => {
    const {isSubscribe} = this.state
    return isSubscribe ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const text = this.getButtonText()
    return (
      <div className="Container">
        <h1 className="heading">Welcome</h1>
        <p className="message">Thank You! Happy Learning</p>
        <button className="button" type="button" onClick={this.subscribe}>
          {text}
        </button>
      </div>
    )
  }
}

export default Welcome
