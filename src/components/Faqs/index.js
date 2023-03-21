import {Component} from 'react'

import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="divContainer">
        <div className="faqsContainer">
          <h1 className="heading">FAQs</h1>
          <ul className="listContainer">
            {faqsList.map(eachItem => (
              <FaqItem key={eachItem.id} details={eachItem} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
