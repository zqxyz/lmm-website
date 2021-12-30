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

import links from './config/links.json'
import Error404 from './pages/Error404'

const App = () => {
  const validLinks = links.map(link => link.path)
  const [valid, setValid] = React.useState(true)

  React.useEffect(() => {
    setValid(validLinks.includes(window.location.pathname))
  })

  return (
    <>
      <Header />

      {(!valid) ?
        <Route path={window.location.pathname}>
          <Error404 />
        </Route>
        : null}

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

      <Route path='/call'>
        <Call />
      </Route>

      <Preload />
      <Footer />
    </>
  )
}

export default App
