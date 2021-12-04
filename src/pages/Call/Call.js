import React from 'react'
import Container from '../../components/Container';
import Link from '../../Link';
import Columns from '../../components/Columns';


const Call = () => {
  return (
    <>

      <Container
        title="Contacting us by phone"
        bgColor='dark'
      >
        <p>
          The <strong>fastest</strong> way to get booked with us is to complete
          our estimate form.
        </p>
        <Link href="#">
          <button className='ui blue button huge'>
            Get started with our estimate form
          </button>
        </Link>
      </Container>

      <Container>
        <Columns>
          <column style={{textAlign: 'center'}}>
            <h2>For our Portland, ME branch</h2>
            <p>Call 207-390-9090</p>
          </column>
          <column style={{textAlign: 'center'}}>
            <h2>For our Burlington, VT branch</h2>
            <p>Call 802-899-0908</p>
          </column>
        </Columns>
      </Container>

    </>
  );
}

export default Call;