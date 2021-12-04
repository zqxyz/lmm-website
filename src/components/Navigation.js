import React from 'react'
import Link from '../Link'

const Navigation = () => {
  return (
    <div id='navWrap'>
      <div className='ui menu' id='navigation'>
        <Link href='/' className='link header item'>
          <span id='localmuscle'>
            {/* <img src="http://localhost:3000/images/JubilatSample.png" /> */}
            Local Muscle Movers
          </span>
        </Link>
        <Link href='/about' className='link item'>
          About
        </Link>
        <Link href='/resources' className='link item'>
          Resources
        </Link>
        <Link href='/join' className='link item'>
          Join Our Crew
        </Link>
        <Link href='/contact' className='link item'>
          Contact Us
        </Link>
        <div className='right menu'>
          <Link href='/estimate' className='link item'>
            Get an Estimate
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navigation
