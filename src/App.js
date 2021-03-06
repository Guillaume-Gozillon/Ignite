import Home from './pages/Home'
import Nav from './components/Nav'

import GlobalStyles from './components/GlobalStyles'
import { Route } from 'react-router'

const App = () => {
  return (
    <div className='App'>
      <GlobalStyles />
      <Nav />
      <Route>
        <Home path={['/game/:id', '/']} />
      </Route>
    </div>
  )
}

export default App
