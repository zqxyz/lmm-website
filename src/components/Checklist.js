import React from 'react'

/**
 * Stylized checklist with checkboxes
 * @children 2+ `<>` JSX elements as checklist items
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
  let i = 0
  const items = Array.from(children.map(child => {
    return (
      <li
        key={`checklistItem-${i++}`}
      >
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
