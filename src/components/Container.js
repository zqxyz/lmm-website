import React from 'react';

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

const Container = ({ title, bgColor='#cbd1b6', children }) => {
  return (
    <>
      <div
        className={(bgColor === 'dark') ? 'container dark' : 'container'}
        style={ (bgColor !== 'dark') ? {backgroundColor: bgColor,} : null }
      >
        <div className='page'>

          {(title) ? <h1>{title}</h1> : null }
          {children}
        </div>
      </div>
    </>
  );
}

export default Container;