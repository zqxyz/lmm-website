import React from 'react'
import Navigation from './Navigation/Navigation'
import Link from '../Link'
import Columns from './Columns'

const Header = () => {
  return (
    <>
      <div id='headwrap'>
        <Navigation />

        <Columns
          style={{
            maxWidth: '1300px',
            margin: '0 auto 0 auto',
            padding: '1em 1.1em 0 1.1em'
          }}
        >

          <column className='onlyOnLargeScreens'>
            Moving 7 days a week
          </column>

          <column className='right aligned'>
            <Link href='/call'>
              Call us
              <svg
                xmlns='http://www.w3.org/2000/svg' width='18' height='18'
                fill='currentColor' className='bi bi-telephone-fill' viewBox='-2 -4 16 20'
              >
                <path
                  fillRule='evenodd' d='M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29
                  2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457
                  2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306
                  1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846
                  1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0
                  1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z'
                />
              </svg>
            </Link> Monday-Friday, 9AM to 4PM
          </column>

        </Columns>
      </div>

    </>
  )
}

export default Header
