import React from 'react'
import useCurrentWidth from './screenWidth'
import links from '../../config/links.json'
import TinyNav from './TinyNav'
import SmallNav from './SmallNav'
import BigNav from './BigNav'


const Navigation = () => {
  const width = useCurrentWidth()

  const renderedNav = () => {
    if (width < 880) {
      if (width < 600) {
        return <TinyNav links={links} />
      } else {
        return <SmallNav links={links} />
      }
    }
    return <BigNav links={links} />
  }

  return (
    <div id='navWrap'>
      <div className='ui menu' id='navigation'>
        {renderedNav()}
      </div>
    </div>
  )

}

export default Navigation
