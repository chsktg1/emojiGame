/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'

import WinOrLoseCard from '../WinOrLoseCard'

import NavBar from '../NavBar'

import './index.css'

import EmojiCard from '../EmojiCard'

class EmojiGame extends Component {
  constructor(props) {
    super(props)
    const {emojisList} = this.props
    this.state = {
      emojisList,
      selectedItems: [],
      lost: false,
      score: 0,
      topScore: 0,
    }
  }

  selectedAndShuffle = id => {
    console.log(id, 'selected')
    const {selectedItems, topScore} = this.state
    if (selectedItems.includes(id)) {
      this.setState(p => ({
        topScore: Math.max(p.score, topScore),
        lost: true,
      }))
    } else {
      this.setState(p => ({
        emojisList: p.emojisList.sort(() => Math.random() - 0.5),
        selectedItems: [...p.selectedItems, id],
        score: p.score + 1,
      }))
    }
  }

  wantToPlayAgain = () => {
    // console.log('in want to play again')

    const {emojisList} = this.props
    this.setState({emojisList, selectedItems: [], lost: false, score: 0})
  }

  render() {
    const {emojisList, lost, score, topScore} = this.state
    return (
      <>
        {lost || score === 12 ? (
          <WinOrLoseCard
            topScore={topScore}
            score={score}
            wantToPlayAgain={this.wantToPlayAgain}
          />
        ) : (
          <>
            <NavBar score={score} topScore={topScore} />
            <ul className="emojiContainer">
              {emojisList.map(emoji => (
                <EmojiCard
                  key={emoji.id}
                  emoji={emoji}
                  selectedAndShuffle={this.selectedAndShuffle}
                />
              ))}
            </ul>
          </>
        )}
      </>
    )
  }
}

export default EmojiGame
