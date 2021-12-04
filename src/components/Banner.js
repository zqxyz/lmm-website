import React from 'react'

/**
 * Image banner with title, optionally renders child JSX element
 * with content (see example below)
 * @prop {string} title - h1 title of page or banner message
 * @prop {string} height -  height and units of banner e.g. '275px'
 * @prop {string} imageUrl -  url of image to use as banner
 *
 * EXAMPLE:
 *
 *
 * `<Banner`
 * &nbsp;&nbsp;`title="Let us move you"`
 * &nbsp;&nbsp;`height="275px"`
 * &nbsp;&nbsp;`imageUrl="/images/muscleMasthead.jpg"`
 * `>`
 * &nbsp;&nbsp;`<button className='ui blue button huge'>`
 * &nbsp;&nbsp;&nbsp;`Get a free estimate`
 * &nbsp;&nbsp;`</button>`
 * `</Banner>`
 *
 */
const Banner = ({ title, height, imageUrl, children }) => {
  return (
    <>
      <div
        className='container picture' style={
          {
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: height
          }
        }
      >
        <div className='page'>

          {(title) ? <h1>{title}</h1> : null}
          <br />
          {children}
        </div>
      </div>
    </>
  )
}

export default Banner
