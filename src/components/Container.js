import React from 'react'

/**
 * Container for section of page content
 * @prop {string} `title` -- h1 title for contents of container
 * @prop {string} [`bgColor`] -- HTML color for background. Can
 * use hex/RGB/transparent/none. Special term 'dark' may be used
 * to display light text on preset dark grey
 * @prop {boolean} [`lightText`] -- used to display light text
 * on manually set dark background
 * @prop {string} [`id`] -- html id attribute
 * @children JSX elements to render inside component.
 *
 * EXAMPLE:
 *
 *
 * `<Container`  
 * &nbsp;&nbsp;`title="Walrus facts"`  
 * &nbsp;&nbsp;`bgColor="#d2efdf"`  
 * `>`  
 * &nbsp;&nbsp;`<p>`  
 * &nbsp;&nbsp;&nbsp;`The largest known walrus weighs ~3,700 lbs`  
 * &nbsp;&nbsp;`</p>`  
 * `</Container>`  
 *
 */

const Container = ({ title, bgColor = '#cbd1b6', lightText, noshadow, id, children }) => {
  return (
    <>
      <div
        id={id}
        className={
          `container${(bgColor === 'dark') ? ' dark' : ''}${(noshadow) ? ' noshadow' : ''}`
        }
        style={(bgColor !== 'dark') ? { backgroundColor: bgColor } : null}
      >
        <div
          className={`page${(lightText || bgColor === 'dark') ? ' lightText' : ''}`}
        >

          {(title)
            ? <h1
              id={`heading-${title.replace(' ', '-')}`}
            >
              {title}
            </h1>
            : null}
          {children}
        </div>
      </div>
    </>
  )
}

export default Container
