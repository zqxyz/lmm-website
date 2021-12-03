import React from 'react'
import Columns from './Columns'
import Focus from './Focus'
import Link from '../Link'

const Footer = () => {
  return (
    <>
      <div className='page' style={{
        background: 'url(http://localhost:3000/images/boxPlaceholder.png) no-repeat',
        height: '200px',
        textAlign: 'center'
      }}>
        <strong>US DOT# 2162841</strong><br />
        Local Muscle Movers © 2022. All Rights Reserved.
      </div>
    </>
  )
}

export default Footer
