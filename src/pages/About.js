import React from 'react'
import Container from '../components/Container'
import ContainerSplitLeft from '../components/ContainerSplitLeft'
import Banner from '../components/Banner'
import Focus from '../components/Focus'

const About = () => {
  return (
    <>

      <Banner
        title="Meet the Muscle"
        imageUrl='/images/crew.jpg'
        height='300px'
      />


      <ContainerSplitLeft
        title="Our story, in storage units"
        bgColor="rgb(232, 234, 228)"
      >
        <p>
          No doubt we're well acquanted with storage units, ten years
          ago our story started in one! Founding partner Alex Sargent
          got the idea to start a moving company after overhearing
          complaints about the moving experience and attitude of the
          movers people had hired. Ned Swain, a frequent customer,
          liked the idea so much he brought it to two other friends,
          Jake Holz and Jon Donnell. Soon after, Local Muscle was
          born with the driving idea that customer service and attitude
          of the crews will be what sets us apart. The results
          speak for themselves.
        </p>
        <iframe style={{ width: '100%', minHeight: '300px', backgroundColor: 'black' }} src="https://www.youtube.com/embed/zsexg2uA4ak"
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </ContainerSplitLeft>


      <Focus
        bgColor='rgb(203, 217, 212)'
      >
        <p style={{ fontSize: '1.5em' }}>
          <strong>Our Mission</strong>: To provide a stress free and cost effective move that leaves you
          wondering what you were worried about in the first place.
        </p>
      </Focus>


      <ContainerSplitLeft
        title="Why choose Local Muscle?"
        bgColor="rgb(232, 234, 228)"
      >
        <p>
          We've built a reputation throughout New England as a moving company you can trust.
          Whether you're moving halfway across the country or across the street, we've
          got you covered.Throughout our history we really have seen it all, and use
          that knowledge to make your move as smooth as possible.Many of our
          customers have returned to us time and time again for their moving needs.
          That being said, we prefer to let our reviews speak for themselves.
          Check us out on Google Reviews and Yelp for more firsthand customer feedback!
        </p>
        <iframe style={{ width: '100%', minHeight: '300px', backgroundColor: 'black' }} src="https://youtube.com/embed/CLv16TFTKNs"
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </ContainerSplitLeft>


      <Container
        bgColor='rgb(232, 234, 228)'
      >
        <p>
          Put simply, we want to change your opinion of movers
          and moving for the better. Each move is carefully tailored
          to best fit your needs and ensure a positive experience for
          customers and crews alike. From the point you complete our
          estimate form, a member of our dedicated staff will be in
          contact with you every step of the way.
        </p>
      </Container>


      <Focus
        bgColor='rgb(232, 234, 228)'
      >
        <p style={{ fontSize: '1.5em' }}>
          "I <em>love</em> lifting heavy awkward things, and running around." - Ned Swain
        </p>
      </Focus>


    </>
  )
}

export default About
