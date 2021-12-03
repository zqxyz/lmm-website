import React from 'react'


const Call = () => {
    return (
        <>

            <div className='container dark'>
                <div className='page'>

                    <h1>Contacting us by phone</h1>
                    <p>
                        The <strong>fastest</strong> way to get onto our schedule is to complete
                        our estimate form. We book on a first-come, first serve
                        basis.
                    </p>
                    <button className='ui blue button huge action'>
                        Get started with our estimate form
                    </button>
                </div>
            </div>

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