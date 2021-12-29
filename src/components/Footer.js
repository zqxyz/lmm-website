import React from 'react'
import Link from '../Link'

const Footer = () => {
  return (
    <>
      <div id='footer'>


        <strong>Local Muscle Movers</strong><br />
        USDOT # 2162841
        <br />
        <Link href='/about'>
          About
        </Link>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <Link href='/contact'>
          Contact
        </Link>

      </div>
    </>
  )
}

export default Footer
