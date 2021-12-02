import './style/main.css'
import React from 'react'
import Route from './Route'
import Landing from './pages/Landing/Landing'
import Resources from './pages/Resources/Resources'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <div id='navWrap'>
        <Header />
      </div>
      <Route path='/'>
        <Landing />
      </Route>
      <Route path='/resources'>
        <Resources />
      </Route>
      <Footer />
    </>
  )
}

export default App
