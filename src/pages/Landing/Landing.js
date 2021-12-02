import './landing.css'
import React from 'react'
import Reviews from './Reviews'

const Landing = () => {
  return (
    <>

      {/* Estimate Quick Button */}
      <div
        className='landing picture' style={
        {
          backgroundImage: 'url(http://localhost:3000/images/muscleMasthead.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '275px'
        }
}
      >
        <div className='page'>

          <h1>Let us move you</h1><br /><br /><br />
          <button className='ui blue button huge action'>
            Get a free estimate
          </button>
        </div>
      </div>

      {/* Introduction */}
      <div className='landing' style={{ backgroundColor: '#cbd1b6', paddingTop: '1em' }}>
        <div className='page'>
          <div className='ui stackable grid'>
            <div className='ten wide column'>
              <h1 style={{ textAlign: 'right' }}>Trusted for over a decade</h1>
              <p>
                We've built a reputation throughout New England as a moving company you can trust.
                Whether you're moving halfway across the country or across the street, we've got
                you covered. Throughout our history we've seen it all, and we use that experience
                to make your move as smooth as possible. Our customers return to us time and time
                again for their moving needs. Let our reviews speak for themselves: Check us out
                on Google Reviews and Yelp for more firsthand customer feedback!
              </p>
            </div>
            <div className='six wide column'>
              <img src='http://localhost:3000/images/movingAction.JPG' alt='Crew in action' />
            </div>
          </div>
        </div>
      </div>

      <Reviews />

      {/* Crew segment */}
      <div className='landing' style={{ backgroundColor: '#cbd1b6', paddingTop: '1em' }}>
        <div className='page'>
          <div className='ui stackable grid'>
            <div className='six wide column'>
              <img src='http://localhost:3000/images/happyCrew.jpg' alt='Team flexing with a young customer' />
            </div>
            <div className='ten wide column'>
              <h1>Your Local Moving Team</h1>
              <p>
                We build crews that work well together, and crews that work well together keep our
                customers happy. Our staff has experience with all manner of moves, be it a top
                floor apartment in the middle of a city or a rural location with rougher terrain,
                we can handle it all!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Closing call to action segment */}
      <div className='landing' style={{ backgroundColor: 'rgb(105, 171, 105)' }}>
        <div
          className='page' style={{
            paddingTop: '5em',
            paddingBottom: '3em',
            marginBottom: '3em',
            textAlign: 'center'
          }}
        >
          <h1>Start your move with us</h1>
          <p>
            The first step is filling out our estimate form
          </p>
          <br />
          <button className='ui blue button huge action'>
            Get a free estimate
          </button>
        </div>
      </div>

    </>
  )
}

export default Landing
