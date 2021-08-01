// Write your code here.
const WinOrLoseCard = props => {
  const {wantToPlayAgain, topScore, score} = props
  const again = () => {
    // console.log('clicked')

    wantToPlayAgain()
  }

  return score === 12 ? (
    <div>
      <h1>You Won</h1>
      <p>Best Score</p>
      <p>12/12</p>
      <button onClick={again}>Play Again</button>
      <img src="https://assets.ccbp.in/frontend/react-js/won-game-img.png" />
    </div>
  ) : (
    <div>
      <h1>You Lose</h1>
      <p>Score</p>
      <p>{score}/12</p>
      <button onClick={again}>Play Again</button>
      <img src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png" />
    </div>
  )
}

export default WinOrLoseCard
