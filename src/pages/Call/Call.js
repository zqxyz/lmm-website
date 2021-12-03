import React from 'react'
import Container from '../../components/Container';
import Link from '../../Link';


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

      <div className='landing' style={{ backgroundColor: '#cbd1b6', paddingTop: '1em' }}>
        <div className='page'>

          <div className="ui grid two column stackable">
            <div className="column center aligned">
              <h2>For our Portland, ME branch</h2>
              <p>Call 207-390-9090</p>
            </div>
            <div className="column center aligned">
              <h2>For our Burlington, VT branch</h2>
              <p>Call 802-899-0908</p>
            </div>
          </div>

        </div>
      </div>

    </>
  );
}

export default Call;