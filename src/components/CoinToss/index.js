// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {result: 0, total: 0, heads: 0, tails: 0}

  updateToss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({heads: prevState.heads + 1}))
    } else {
      this.setState(prevState => ({tails: prevState.tails + 1}))
    }
    this.setState({result: tossResult})
    this.setState(prevState => ({total: prevState.total + 1}))
  }

  render() {
    const {result, total, heads, tails} = this.state
    let resultImage
    if (result === 0) {
      resultImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
    } else {
      resultImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    }

    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="heading-des">Heads (or) Tails</p>
          <img className="image" src={resultImage} alt="toss result" />
          <button type="button" className="button" onClick={this.updateToss}>
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count">Total: {total}</p>
            <p className="count">Heads: {heads}</p>
            <p className="count">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
