import React, { useState, useEffect, useRef } from 'react'
import Link from '../../Link'

const SmallNav = ({ links }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false)
  const ref = useRef()

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
        onKeyDown={e => {
          if (e.key === 'Enter') setDropdownVisible(!dropdownVisible)
          else if (e.key === 'Escape' || e.key === 'Esc') setDropdownVisible(false)
        }}
        tabIndex='0'
        ref={ref}
      >

        <svg
          xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor'
          className='bi bi-list' viewBox='0 0 16 16' alt='Menu' title='Links Menu'
        >
          <path
            fillRule='evenodd' d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5
              0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5
              0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
          />
        </svg>

        <div
          className={`menu transition${(dropdownVisible) ? ' visible' : ' hidden'}`}
          onKeyUp={e => { if (e.key === 'Enter') setDropdownVisible(false) }}
        >
          {menuItems}
        </div>

      </div>

    </>
  )
}

export default SmallNav
