import React from 'react'
import Link from '../../Link'

const BigNav = ({ links }) => {
  // Primary links, left aligned
  let i = 0
  const menuItems = [...links].splice(1).filter((link) => {
    return link.position === 'primary'
  }).map(item => {
    return (
      <Link
        key={`linkFullsizeNav${i++}`}
        href={item.path}
        className='link item'
      >
        {item.name}
      </Link>
    )
  })

  // Links aligned right
  let j = 0
  const menuItemsRight = [...links].splice(1).filter((link) => {
    return link.position === 'secondary'
  }).map(item => {
    return (
      <Link
        key={`linkRightFullsizeNav${j++}`}
        href={item.path}
        className='link item'
      >
        {item.name}
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
      {menuItems}
      <div className='right menu'>
        {menuItemsRight}
      </div>
    </>
  )
}

export default BigNav
