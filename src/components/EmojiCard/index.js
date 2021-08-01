// Write your code here.

import './index.css'

const EmojiCard = props => {
  const {emoji, selectedAndShuffle} = props
  const {id, emojiName, emojiUrl} = emoji

  const sendMe = () => {
    selectedAndShuffle(id)
  }

  return (
    <li className="emojiHolder" onClick={sendMe}>
      <img src={emojiUrl} alt={emojiName} />
    </li>
  )
}

export default EmojiCard
