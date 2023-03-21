import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {isShowAnswer: false}

  onClickButton = () => {
    this.setState(prevState => ({isShowAnswer: !prevState.isShowAnswer}))
  }

  render() {
    const {details} = this.props
    const {isShowAnswer} = this.state
    const {questionText, answerText} = details

    const iconChange = isShowAnswer
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const iconAlt = isShowAnswer ? 'minus' : 'plus'

    return (
      <li className="faqsItemContainer">
        <div className="questionContainer">
          <h1 className="question">{questionText}</h1>
          <button
            type="button"
            className="buttonEl"
            onClick={this.onClickButton}
          >
            <img src={iconChange} alt={iconAlt} className="icons" />
          </button>
        </div>
        {isShowAnswer ? (
          <div className="answerContainer">
            <hr className="horizontalLine" />
            <p className="answer">{answerText}</p>
          </div>
        ) : (
          ''
        )}
      </li>
    )
  }
}
export default FaqItem
