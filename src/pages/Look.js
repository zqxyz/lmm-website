import React from 'react';
import Container from '../components/Container';

const Look = () => {
  const next = (sheet) => {
    const stylesheet = document.querySelector('#style');
    const header = stylesheet.parentNode
    header.removeChild(stylesheet)

    let newSheet = document.createElement('link')
    newSheet.setAttribute('href', sheet)
    newSheet.setAttribute('rel', "stylesheet")
    newSheet.setAttribute('id', "style")
    header.appendChild(newSheet)
  }
  return (
    <>
      <Container
        bgColor='dark'
      >
        <button
          className='ui green button huge pop'
          onClick={() => {
            next("/style/main.css");
            const container = document.querySelector('.container')
            container.setAttribute('style', `background-image: none !important; background-color: #202020`)
          }
          }
        >
          Default
        </button>

        <h1>Other directions</h1>

        <button
          className='ui green button huge pop'
          onClick={() => {
            next("/style/main2.css");
            const container = document.querySelector('.container')
            container.setAttribute('style', `background-image: none !important; background-color: #202020`)
          }
          }
        >
          Alt 1
        </button>

        <button
          className='ui green button huge pop'
          onClick={() => {
            next("/style/main3.css");
            const container = document.querySelector('.container')
            container.setAttribute('style', `background-image: none !important; background-color: #8a7c2f`)
          }
          }
        >
          Alt 2
        </button>
      </Container>
    </>
  )
}

export default Look