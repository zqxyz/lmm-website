import React from 'react'
import Container from '../components/Container'
import Columns from '../components/Columns'
import Link from '../Link'
import useCurrentWidth from '../screenWidth'

const Call = () => {
  const width = useCurrentWidth()
  return (
    <>

      <Container
        title='Contacting us by phone'
        bgColor='#313530'
        lightText
      >
        <p>
          The <strong>fastest</strong> way to get booked with us is to complete
          our <Link href='/estimate'>estimate form</Link>.
        </p>
        <p>
          For other inquiries, call the office you'd like to contact using
          the numbers listed below.
        </p>
      </Container>

      <Container
        bgColor='rgb(236, 234, 228)'
      >
        <Columns>
          <column>
            <center>
              <h2>Portland, ME</h2>
              <p>
                {(width < 768) ? <>Call <a href="tel:2073909090">207-390-9090</a></>
                  : <>Call 207-390-9090</>}
              </p>
            </center>
          </column>
          <column>
            <center>
              <h2>Burlington, VT</h2>
              <p>
                {(width < 768) ? <>Call <a href="tel:8028990908">802-899-0908</a></>
                  : <>Call 802-899-0908</>}
              </p>
            </center>
          </column>
        </Columns>
      </Container>

    </>
  )
}

export default Call
