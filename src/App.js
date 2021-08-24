import Home from "./pages/Home"

import GlobalStyles from "./components/GlobalStyles"
import { Route } from "react-router"

const App = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <Route>
        <Home path={['/game/:id', '/']} />
      </Route>
    </div>
  )
}

export default App
