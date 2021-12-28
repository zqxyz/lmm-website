import React from 'react'
import Link from '../Link'

const Footer = () => {
  return (
    <>
      <div id='footer'>
        <div id='footerInner'>
          Local Muscle Movers<br />
          <strong>US DOT# 2162841</strong>
          <br />
          <Link href='/about'>
            About
          </Link>
          &nbsp; &nbsp; &nbsp;
          <Link href='/contact'>
            Contact us
          </Link>
        </div>
      </div>
    </>
  )
}

export default Footer
