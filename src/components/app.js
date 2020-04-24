import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Catalogue from '../containers/catalogue'
import Pokemon from '../components/item-detailed-view'

const app = () => {
  return(
    <Router>
      <div>
        <h1>Pokemons!</h1>
        <div>
          <Switch>
            <Route exact path="/"> <Catalogue /> </Route>
            <Route path="/pokemon/:name"> <Pokemon /> </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default app