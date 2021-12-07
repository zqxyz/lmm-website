import React from 'react'

/**
 * Container for section of page content
 * @prop {string} title - (optional) h1 title of page or banner message
 * @prop {string} bgColor - (optional) color for background, standard
 * html (hex or rgb), special term 'dark' can be used for light text
 * on dark bg
 *
 * EXAMPLE:
 *
 *
 * `<Container`
 * &nbsp;&nbsp;`title="Walrus facts"`
 * &nbsp;&nbsp;`bgColor="#d2efdf"`
 * `>`
 * &nbsp;&nbsp;`<p>`
 * &nbsp;&nbsp;&nbsp;`The largest known walrus weighs ~3,700 lbs`
 * &nbsp;&nbsp;`</p>`
 * `</Container>`
 *
 */

const Container = ({ title, bgColor = '#cbd1b6', lightText, children }) => {
  // const clipboardWrite = text => {
  //   navigator.clipboard.writeText(text).then(() => {
  //     console.log('copied')
  //   },
  //     () => {
  //       console.log('clipboard access blocked')
  //     })
  // }

  return (
    <>
      <div
        className={
          `container${(bgColor === 'dark') ? ' dark' : ''}`
        }
        style={(bgColor !== 'dark') ? { backgroundColor: bgColor } : null}
      >
        <div className={`page${(lightText || bgColor === 'dark') ? ' lightText' : ''}`}>

          {(title)
            ? <h1
                id={`heading-${title.replace(' ', '-')}`}
              >
              {title}
              </h1>
            : null}
          {children}
        </div>
      </div>
    </>
  )
}

export default Container
