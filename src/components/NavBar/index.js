// Write your code here.
import {Component} from 'react'

import './index.css'

class NavBar extends Component {
  render() {
    const {score, topScore} = this.props
    return (
      <div className="header" style={{backgroundColor: '#6a59ff'}}>
        <div>
          <img src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png" />
          <h1>Emoji Game</h1>
        </div>
        <div>
          <p>Score: {score}</p>
          <p>Top Score: {topScore}</p>
        </div>
      </div>
    )
  }
}
export default NavBar
