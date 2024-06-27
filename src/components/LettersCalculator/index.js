import './index.css'
import {Component} from 'react'
class LettersCalculator extends Component {
  state = {len: 0}

  makechange = event => this.setState({len: event.target.value.length})

  render() {
    const {len} = this.state

    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="letter-calculator"
        />
        <div className="note">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label className="input-label" htmlFor="input-text">
            Enter the Phrase
          </label>
          <br />
          <input
            className="input"
            type="text"
            onChange={this.makechange}
            placeholder="Enter the Phrase"
            id="input-text"
          />
          <div className="count-board">
            <p className="description">{`No.of letters: ${len}`}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
