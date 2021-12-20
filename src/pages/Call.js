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
        bgColor='dark'
      >
        <p>
          The <strong>fastest</strong> way to get booked with us is to complete
          our estimate form.
        </p>
        <Link href='#'>
          <button className='ui blue button huge pop'>
            Get started with our estimate form
          </button>
        </Link>
      </Container>

      <Container>
        <Columns>
          <column>
            <center>
              <h2>For our Portland, ME branch</h2>
              <p>
                {(width < 768) ? <>Call <a href="tel:2073909090">207-390-9090</a></>
                  : <>Call 207-390-9090</>}
              </p>
            </center>
          </column>
          <column>
            <center>
              <h2>For our Burlington, VT branch</h2>
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
