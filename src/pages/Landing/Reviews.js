import React from 'react'
import Banner from '../../components/Banner';
import Columns from '../../components/Columns'
import Container from '../../components/Container'
import reviewJson from '../../config/reviews.json'

function shuffle(array) {
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
  const fetchThreeReviews = () => { return shuffle(reviewJson).slice(0, 3) }
  const [reviews, setReviews] = React.useState(fetchThreeReviews())

  return (
    <Container
      bgColor='rgb(46, 96, 65)'
      lightText
    >
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
      <div className="ui block clear" style={{ margin: '1.5em 0 3.5em 0' }}>
        <button
          className="ui button small green right floated"
          style={{ margin: '1em 0 1em 0', color: 'black' }}
          onClick={() => setReviews(fetchThreeReviews())}
        >
          More reviews
        </button>
      </div>
    </Container>
  )
}

export default Reviews
