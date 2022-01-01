import React, { useState, useEffect, useRef } from 'react'
import Link from '../../Link'

const Mini = ({ links }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false)
  const ref = useRef()

  let i = 0
  const menuItems = [...links].splice(1).filter((link) => {
    return link.position !== 'hidden'
  }).map(item => {
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

  useEffect(() => {
    const onBodyClick = event => {
      if (ref.current.contains(event.target)) {
        return
      }
      setDropdownVisible(false)
    }

    document.body.addEventListener(
      'click', onBodyClick, { capture: true }
    )

    return () => {
      document.body.removeEventListener('click', onBodyClick, { capture: true })
    }
  }, [])

  return (
    <div
      className='link header item mini'
      onClick={() => setDropdownVisible(!dropdownVisible)}
      onKeyDown={e => {
        if (e.key === 'Enter') setDropdownVisible(!dropdownVisible)
        else if (e.key === 'Escape' || e.key === 'Esc') setDropdownVisible(false)
      }}
      tabIndex='0'
      ref={ref}
    >

      <div
        id='localmuscle'
        className={(dropdownVisible) ? 'ui inline dropdown item active visible' : ''}
      >
        {/* {links[0].name} */}
        Local<br /> Muscle
        <div
          className={`menu transition${(dropdownVisible) ? ' visible' : ' hidden'}`}
          onKeyUp={e => { if (e.key === 'Enter') setDropdownVisible(false) }}
        >
          {menuItems}
        </div>
      </div>

      <span style={{ float: 'right' }}>
        <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-caret-down-fill' viewBox='0 0 16 16'>
          <path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z' />
        </svg>

      </span>

    </div>
  )
}

export default Mini
