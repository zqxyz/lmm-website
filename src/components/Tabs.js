import React, { useState } from 'react';


const Tabs = ({ children, defaultTab }) => {
  const [activeTab, setActiveTab] = useState(defaultTab)

  const titles = Array.from(children.map((child) => {
    let i = 0
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