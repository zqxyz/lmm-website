import './style/main.css'
import React from 'react'
import Route from './Route'
import Landing from './pages/Landing/Landing'
import Resources from './pages/Resources/Resources'
import Call from './pages/Call/Call'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About/About'

const App = () => {
  return (
    <>
    {/* <div style={{backgroundColor: 'green', padding: '0.2em'}}>
      <center>
        We will be closed on 12/24, 12/25, and 1/1
      </center>
    </div> */}
      <Header />
      <Route path='/'>
        <Landing />
      </Route>
      <Route path='/resources'>
        <Resources />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/call'>
        <Call />
      </Route>
      <Footer />
    </>
  )
}

export default App
