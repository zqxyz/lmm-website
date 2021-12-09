import React from 'react'
import Container from './Container'

/**
 * Two column container for section of page content with header
 * on and body left with secondary content on right
 * @prop {string} `title` -- h1 title for contents of container
 * @prop {string} [`bgColor`] -- HTML color for background. Can
 * use hex/RGB/transparent/none. Special term 'dark' may be used
 * to display light text on preset dark grey
 * @prop {boolean} [`lightText`] -- used to display light text
 * on manually set dark background
 * @prop {string} [`id`] -- html id attribute
 * @children JSX elements to render inside component. First element
 * displays under title as primary content. Remaining children
 * display as secondary elements to right of main body.
 *
 * EXAMPLE:
 *
 *
 * `<ContainerSplitLeftWide`  
 * &nbsp;&nbsp;`title="Section title"`  
 * &nbsp;&nbsp;`bgColor="#d2efdf"`  
 * `>`  
 * &nbsp;&nbsp;`<p>`  
 * &nbsp;&nbsp;&nbsp;`Main content goes here`  
 * &nbsp;&nbsp;`</p>`  
 * &nbsp;&nbsp;`<img src="#" alt="secondary content" />`  
 * `</ContainerSplitLeftWide>`  
 *
 */

const ContainerSplitLeft = ({ title, bgColor = '#cbd1b6', lightText, id, children }) => {
  const subTitle = children[0].props.children
  const content = Array.from(children).splice(1)

  return (
    <Container bgColor={bgColor} lightText={lightText} id={id}>

      <div className='ui stackable grid'>

        <div className='eleven wide column'>
          <h1 id={`heading-${title.replace(' ', '-')}`}>{title}</h1><br />
          <div style={{ fontSize: '1.15em', lineHeight: '1.5em' }}>
            {subTitle}
          </div>
        </div>

        <div className='five wide column'>
          {content}
        </div>
      </div>

    </Container>
  )
}

export default ContainerSplitLeft
