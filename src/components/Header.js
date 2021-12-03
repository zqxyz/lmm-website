import React from 'react'
import Navigation from './Navigation'
import Link from '../Link'

const Header = () => {
  return (
    <>
      <Navigation />
      {/* Text before main content */}
      <div className='page'>
        <div className='ui stackable grid'>
          <div className='ten wide column'>
            Moving 7 days a week
          </div>
          <div className='six wide column right aligned'>
            <Link href="/call">
              <i class='bi bi-telephone-fill' /> Call us
            </Link> Monday-Friday, 9AM to 4PM
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
