import React from 'react'
import Container from '../../components/Container'

const Deposit207_160 = () => {
  return (
    <>

      <Container
        title='Place your deposit'
        bgColor='rgb(59, 85, 52)'
        lightText
      >
        <p>
          Thanks again for choosing Local Muscle Movers!
        </p>
        <p>
          Please click on the button below to go to our secure
          transactions page and place your deposit for your upcoming move.
        </p>
      </Container>

      <Container
        bgColor='rgb(89, 130, 78)'
      >
        <form
          name="PrePage"
          method="post"
          action="https://Simplecheckout.authorize.net/payment/CatalogPayment.aspx"
        >
          <input
            type="hidden"
            name="LinkId"
            value="5adb0e19-f48e-42c4-9e12-a58f28be582c"
          />
          <button
            type="submit"
            className="ui blue button huge pop"
          >
          Pay deposit now
        </button>
      </form>
    </Container>

    </>
  )
}

export default Deposit207_160
