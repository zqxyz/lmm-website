import React from 'react'
import Container from './Container'

/**
 * Two column container for section of page content with header
 * on left and body on the right
 * @prop {string} title - h1 title of page or banner message
 * @prop {string} bgColor - (optional) color for background
 * @children JSX elements to render inside component. First element
 * acts as subtitle. Buttons or widgets may be used instead.
 * Remaining child elements will render inside right column.
 * 
 * EXAMPLE:
 * 
 * 
 * `<ContainerSplitLeft`  
 * &nbsp;&nbsp;`title="Section title"`  
 * &nbsp;&nbsp;`bgColor="#d2efdf"`  
 * `>`  
 * &nbsp;&nbsp;`<>`  
 * &nbsp;&nbsp;&nbsp;`Subtitle for section`  
 * &nbsp;&nbsp;`</>`  
 * &nbsp;&nbsp;`<ul>`  
 * &nbsp;&nbsp;&nbsp;`<li>List item one</li>`  
 * &nbsp;&nbsp;&nbsp;`<li>List item two</li>`  
 * &nbsp;&nbsp;&nbsp;`<li>List item three</li>`  
 * &nbsp;&nbsp;`</ul>`  
 * `</ContainerSplitLeft>`  
 * 
 */

const ContainerSplitLeft = ({ title, bgColor = '#cbd1b6', children }) => {
  const subTitle = children[0].props.children
  const content = Array.from(children).splice(1)

  return (
    <Container bgColor={bgColor}>

      <div className='ui stackable grid'>

        <div className='five wide column'>
          <h1>{title}</h1><br />
          <div style={{ fontSize: '1.15em', color: '#252525' }}>
            {subTitle}
          </div>
        </div>

        <div className='eleven wide column'>
          {content}
        </div>
      </div>

    </Container>
  );
}

export default ContainerSplitLeft;