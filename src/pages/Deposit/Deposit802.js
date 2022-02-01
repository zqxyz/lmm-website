import React from 'react'
import Container from '../../components/Container'

const Deposit802 = () => {
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
            value="cea6f20b-f7e1-4097-9d3c-70836e38eff7"
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

export default Deposit802
