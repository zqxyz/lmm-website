import React from 'react'
import Container from './Container'

/**
 * Container for emphasized content
 * @prop {string} [`bgColor`] -- HTML color for background. Can
 * use hex/RGB/transparent/none. Special term 'dark' may be used
 * to display light text on preset dark grey
 * @prop {boolean} [`lightText`] -- used to display light text
 * on manually set dark background
 * @prop {string} [`id`] -- HTML id attribute
 * @children JSX elements to render
 *
 * Usage example:
 *
 * `<Focus bgColor="rgb(105, 171, 105)">`  
 * &nbsp;`<h1>Centered Title</h1>`  
 * &nbsp;`<p>`  
 * &nbsp;&nbsp;`Text to emphasize`  
 * &nbsp;`</p>`  
 * `</Focus>`  
 */
const Focus = ({ bgColor, lightText, id, children }) => {
  return (
    <Container bgColor={bgColor} lightText={lightText} id={id}>
      <div
        className='page' style={{
          paddingBottom: '2em',
          textAlign: 'center'
        }}
      >
        {children}
      </div>
    </Container>
  )
}

export default Focus
