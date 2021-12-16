import React from 'react'
import Preload from './components/Preload'
import Route from './Route'
import Landing from './pages/Landing/Landing'
import Resources from './pages/Resources'
import Call from './pages/Call'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import Join from './pages/Join'
import Estimate from './pages/Estimate'
import Contact from './pages/Contact'

const App = () => {
  return (
    <>
      <Header />

      <Route path='/'>
        <Landing />
      </Route>

      <Route path='/estimate'>
        <Estimate />
      </Route>

      <Route path='/resources'>
        <Resources />
      </Route>

      <Route path='/about'>
        <About />
      </Route>

      <Route path='/join'>
        <Join />
      </Route>

      <Route path='/contact'>
        <Contact />
      </Route>
      
      <Route path='/call'>
        <Call />
      </Route>

      <Preload />
      <Footer />
    </>
  )
}

export default App
