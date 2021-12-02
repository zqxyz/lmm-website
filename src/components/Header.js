import React from 'react'
import Navigation from './Navigation'

const Header = () => {
  return (
    <>
      <Navigation />
      {/* Text before main content */}
      <div className='page'>
        <div className='ui stackable grid'>
          <div className='ten wide column'>
            <i class='bi bi-telephone-fill' />
            Call us at <strong>207-632-9286</strong> Monday-Friday, 9AM to 4PM
          </div>
          <div className='six wide column right aligned'>
            Moving 7 days a week
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
