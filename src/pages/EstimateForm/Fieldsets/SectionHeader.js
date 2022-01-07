import React from 'react'
import useCurrentWidth from '../../../screenWidth'

const SectionHeader = ({icon, title, legendAlignment, legendStyle}) => {
  const width = useCurrentWidth()

  if (width > 562) {
    return (
      <legend
        align={legendAlignment}
        style={legendStyle}
      >
        {icon}&nbsp;&nbsp;{title}
      </legend>
    )
  } else {
    return (
      <h2>
        {icon}&nbsp;&nbsp;{title}
      </h2>
    )
  }
}

export default SectionHeader