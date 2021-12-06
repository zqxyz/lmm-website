import React, { useState } from 'react'
import Link from '../../Link'

const SmallNav = ({ links }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false)

  let i = 0
  const menuItems = [...links].splice(1).map(item => {
    return (
      <Link
        key={`linkMiniNav${i++}`}
        href={item.path}
        className='link item'
      >
        {(!item.shortName) ? item.name : item.shortName}
      </Link>
    )
  })

  return (
    <>

      <Link href={links[0].path} className='link header item'>
        <span id='localmuscle'>
          {links[0].name}
        </span>
      </Link>


      <div
        className={(dropdownVisible)
            ? 'ui inline dropdown item right active visible'
            : 'ui dropdown item right item'}
        onClick={() => setDropdownVisible(!dropdownVisible)}
      >
          More
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            className="bi bi-list" viewBox="0 0 16 16" style={{ marginLeft: '1em' }}>
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5
              0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5
              0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
          </svg>
          <div className={`menu transition${(dropdownVisible) ? ' visible' : ' hidden'}`}>
            {menuItems}
          </div>

      </div>




    </>
  )
}

export default SmallNav