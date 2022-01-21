import React from 'react';
import Container from '../../components/Container';
import Link from '../../Link';

const Submitted = ({ branch }) => {
  return (
    <>

      <Container
        title="Thank you!"
        bgColor='rgba(74, 98, 75, 0.9)'
        lightText
      >
        <p>
          Your request has been submitted. Look out for a response from us within
          {(branch !== 'portland') ? ' 1 to 2 week days.' : ' a few minutes.'}
        </p>
      </Container>

      <Container
        bgColor='rgba(204, 208, 196, 0.8)'
      >
        <p>
          Check out our <Link href='/resources'>resources</Link> page for a moving
          preparation checklist and service details.
        </p>
      </Container>
    </>
  )
}

export default Submitted