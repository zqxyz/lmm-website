import React, { useState } from 'react';

/**
 * Widget for information sorted by tabs
 * @prop {string} defaultTab title of tab to display by
 * default upon page load
 * @children pass `Fragment` elements containing `title`
 * prop each. The child elements of each `Fragment` will
 * render when parent title is selected.
 * 
 * Usage example:
 * 
 * `<Tabs defaultTab="First Tab">`  
 * &nbsp;`<Fragment title="First Tab">`  
 * &nbsp; &nbsp;`<p>`  
 * &nbsp; &nbsp; &nbsp; `Body of tab goes here.`  
 * &nbsp; &nbsp;`<p>`  
 * &nbsp;`</Fragment>`  
 * &nbsp;`<Fragment title="Second Tab">`  
 * &nbsp; &nbsp;`<p>`  
 * &nbsp; &nbsp;&nbsp; `Tab 2 body goes here.`  
 * &nbsp; &nbsp;`<p>`  
 * &nbsp;`</Fragment>`  
 * `</Tabs>`
 * 
 */
const Tabs = ({ children, defaultTab }) => {
  const [activeTab, setActiveTab] = useState(defaultTab)

  const titles = Array.from(children.map((child) => {
    return (
      <div
        className={(activeTab === child.props.title)
          ? 'active item'
          : 'item'}
        onClick={() => { setActiveTab(child.props.title) }}
      >
        {child.props.title}
      </div>
    )
  }))

  const bodies = Array.from(children.map((child) => {
    return (
      <div
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