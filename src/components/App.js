import React from 'react'
import { Switch, Route} from 'react-router-dom'

import '../style/style.css'
// import '../boostrap/css/bootstrap.min.css'

import Footer from './Footer'
import Nav from './Nav'

import Home from './Home'
import Portfolio from './Portfolio'
import Contact from './Contact'

function App() {
  return (
    <div className="App">
      <Nav/> 
      <Switch>
        <Route exact path='/' > <Home/></Route>
        <Route path='/portfolio'> <Portfolio/></Route>
        <Route path='/contact'> <Contact/> </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
