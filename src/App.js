import Body from './Components/Layout/Body/Body'
import { Route } from "react-router-dom";
import Splash from './Components/Splash/Splash'

import './App.css'

function App() {
  return (
    <>
      <Route exact path="/">
        <Splash />
      </Route>
      <Route exact path="/welcome">
        <Body />
      </Route>
    </>
  )
}
export default App;
