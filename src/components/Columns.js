import React from 'react'

/**
 * Create 1 through 10 equally wide, stackable columns
 * @children JSX `<column>` elements
 *
 * Usage example:
 *
 * `<Columns>`
 * &nbsp;`<column>`
 * &nbsp;&nbsp;`<h2>First Column</h2>`
 * &nbsp;&nbsp;`Column contents`
 * &nbsp;`</column>`
 * &nbsp;`<column>`
 * &nbsp;&nbsp;`<h2>Second Column</h2>`
 * &nbsp;&nbsp;`Second column's contents`
 * &nbsp;`</column>`
 *  &nbsp;`<column>`
 * &nbsp;&nbsp;`<h2>Third Column</h2>`
 * &nbsp;&nbsp;`<p>`
 * &nbsp;&nbsp;&nbsp;`Third column. A paragraph.`
 * &nbsp;&nbsp;`</p>`
 * &nbsp;`</column>`
 * `</Columns>`
 *
 */
const Columns = ({ style, children }) => {
  let i = 0
  const columns = Array.from(children.map(child => {
    return (
      <div
        key={`column${i++}`}
        className='column'
        style={child.props.style}
      >
        {child.props.children}
      </div>
    )
  }))
  const numberWordsKey = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten'
  }
  const numberWord = numberWordsKey[children.length]
  return (
    <div
      className={`ui stackable grid ${numberWord} column`}
      style={style}
    >
      {columns}
    </div>
  )
}

export default Columns
