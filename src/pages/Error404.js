import React from 'react'
import Container from '../components/Container'
import Link from '../Link'

const Error404 = () => {
  return (
    <>

      <Container
        title='Page not found'
        bgColor='#313530'
        lightText
      >
        <p>
          The requested page can't be located.
        </p>
        <p>
           <Link href='/'>Learn more about us here</Link> or <Link href='/estimate'>get an estimate.</Link>
        </p>
      </Container>

    

    </>
  )
}

export default Error404
