import React from 'react'
import Columns from '../../components/Columns'
import Container from '../../components/Container'
import reviewJson from '../../config/reviews.json'

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
    <Container bgColor='#44663f' lightText>
      <Columns>
        {reviews.map(review => {
          return (
            <column
              key={review.key}
              style={{ fontStyle: 'italic' }}
            >
              "{review.quote}"
              <div style={{ textAlign: 'right', fontWeight: '600' }}>
                {review.author}
              </div>
            </column>
          )
        })}
      </Columns>
    </Container>
  )
}

export default Reviews
