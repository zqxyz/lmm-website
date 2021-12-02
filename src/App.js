import './style/main.css'
import React from 'react'
import Route from './Route'
import Landing from './pages/Landing/Landing'
import Resources from './pages/Resources/Resources'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About/About'

const App = () => {
  return (
    <>
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
      <Footer />
    </>
  )
}

export default App
