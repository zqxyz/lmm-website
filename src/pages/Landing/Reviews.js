import React from 'react'
import reviewJson from '../../reviews.json'

function shuffle (array) {
  let currentIndex = array.length; let randomIndex

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]]
  }

  return array
}

const Reviews = () => {
  // Pulls 3 review at random from src/reviews.json
  const reviews = shuffle(reviewJson).slice(0, 3)

  return (
    <div id='reviewWrap' style={{ backgroundColor: '#44663f' }}>
      <div className='page' style={{ paddingTop: '2em' }}>
        <h1>Reviews</h1>
        <div className='ui stackable grid'>
          {reviews.map(review => {
            return (
              <div className='column five wide quote' key={review.key}>
                "{review.quote}"
                <div className='quoteAttr'>{review.author}</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Reviews
