import React, { useState } from 'react'

/**
 * Widget for information sorted by tabs
 * @prop {string} [`defaultTab`=children[0].props.title] -- title
 * of tab to display by default upon page load
 * @children pass `<tab>` elements containing `title`
 * prop each. The child elements of each `tab` will
 * render when corresponding title is selected. 2 minimum.
 *
 * Usage example:
 *
 * `<Tabs defaultTab="First Tab">`  
 * &nbsp;`<tab title="First Tab">`  
 * &nbsp; &nbsp;`<p>`  
 * &nbsp; &nbsp; &nbsp; `Body of tab goes here.`  
 * &nbsp; &nbsp;`<p>`  
 * &nbsp;`</tab>`  
 * &nbsp;`<tab title="Second Tab">`  
 * &nbsp; &nbsp;`<p>`  
 * &nbsp; &nbsp;&nbsp; `Tab 2 body goes here.`  
 * &nbsp; &nbsp;`<p>`  
 * &nbsp;`</tab>`  
 * `</Tabs>`  
 *
 */
const Tabs = ({ children, defaultTab }) => {
  if (!defaultTab) defaultTab = children[0].props.title
  const [activeTab, setActiveTab] = useState(defaultTab)

  const titles = Array.from(children.map((child) => {
    return (
      <div
        tabIndex='0'
        key={`tabOf${child.props.title}`}
        className={(activeTab === child.props.title)
          ? 'active item'
          : 'item'}
        onClick={() => { setActiveTab(child.props.title) }}
        onKeyPress={e => { if (e.key === 'Enter') setActiveTab(child.props.title) }}
      >
        {child.props.title}
      </div>
    )
  }))

  const bodies = Array.from(children.map((child) => {
    return (
      <div
        key={`bodyOf${child.props.title}`}
        className={(activeTab === child.props.title)
          ? 'ui bottom attached tab segment active'
          : 'ui bottom attached tab segment'}
      >
        {child.props.children}
      </div>
    )
  }))

  return (
    <>
      <div className='ui top attached tabular menu stackable'>
        {titles}
      </div>
      {bodies}
    </>
  )
}

export default Tabs
