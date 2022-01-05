import React from 'react'
import Route from './Route'
import links from './config/links.js'
import Preload from './components/Preload'
import Header from './components/Header'
import Footer from './components/Footer'
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

      {links.map(link => {
        return (
          <Route path={link.path}>
            {link.component}
          </Route>
        )
      }
      )}

      <Preload />
      <Footer />
    </>
  )
}

export default App
