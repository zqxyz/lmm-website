import React from 'react';

/**
 * Stylized checklist with checkboxes
 * @children JSX elements as checklist items
 * 
 * Usage example:
 * 
 * `<Checklist>`  
 * &nbsp;`<>List item one</>`  
 * &nbsp;`<>List item two</>`  
 * &nbsp;`<>List item three</>`  
 * &nbsp;`<>Final list item</>`  
 * `</Checklist>`  
 * 
 */
const Checklist = ({ children }) => {
  const items = Array.from(children.map(child => {
    return (
      <li>
        {child.props.children}
      </li>
    )
  }))
  return (
    <ul className='checklist'>
      {items}
    </ul>
  )
}

export default Checklist