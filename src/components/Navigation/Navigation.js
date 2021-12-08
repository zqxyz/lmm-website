import React from 'react'
import useCurrentWidth from './screenWidth'
import links from '../../config/links.json'
import TinyNav from './TinyNav'
import SmallNav from './SmallNav'
import BigNav from './BigNav'

const Navigation = () => {
  const width = useCurrentWidth()

  const navByWidth = () => {
    if (width < 601) return <TinyNav links={links} />
    if (width < 881) return <SmallNav links={links} />
    return <BigNav links={links} />
  }

  return (
    <div id='navWrap'>
      <div className='ui menu' id='navigation'>

        {navByWidth()}

      </div>
    </div>
  )
}

export default Navigation