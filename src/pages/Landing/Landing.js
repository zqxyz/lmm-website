import './landing.css'
import React from 'react'
import Reviews from './Reviews'
import Banner from '../../components/Banner'
import Container from '../../components/Container'
import Link from '../../Link'
import Focus from '../../components/Focus'

const Landing = () => {
  return (
    <>


      <Banner
        // imageUrl="/images/mastheadFaded.jpg"
        imageUrl="/images/stockBanner.jpg"
        // title="Let us move you"
        title="Let's get moving"
      >
        <br />
        <Link href="#">
          <button className='ui blue button huge'>
            Get a free estimate
          </button>
        </Link>
      </Banner>


      <Container bgColor="rgb(128, 203, 128)">
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
      </Container>


      <Container
        bgColor="#cbd1b6"
      >
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
      </Container>


      <Banner
        title="Our Trucks are Equipped To Protect Your Goods"
        imageUrl="/images/stockBanner.jpg"
        height="350px"
      >
      </Banner>


      <Reviews />


      <Focus bgColor="rgb(105, 171, 105)">
        <h1>Start your move with us</h1>
        <p>
          The first step is filling out our estimate form
        </p>
        <br />
        <Link href="#">
          <button className='ui blue button huge'>
            Get a free estimate
          </button>
        </Link>
      </Focus>

    </>
  )
}

export default Landing
