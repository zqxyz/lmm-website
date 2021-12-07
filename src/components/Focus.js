import React from 'react'
import Container from './Container'

/**
 * Container for emphasized content
 * @prop {string} bgColor - (optional) color for background, standard
 * html (hex or rgb), special term 'dark' can be used for light text
 * on dark bg
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
const Focus = ({ bgColor, lightText, children }) => {
  return (
    <Container bgColor={bgColor} lightText={lightText}>
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
