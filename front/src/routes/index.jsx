import {
    BrowserRouter as Router,
    Route,
    Routes as Switch,
  } from 'react-router-dom'

import React from 'react'

//Pages
import Accueil from '../pages/Accueil'
import User from '../pages/User'

//Components
import Banner from '../components/Banner'
import SideBar from '../components/SideBar'

function RoutesPath() {
  return (
    <Router>
      <div id='dashboard'>
        <Banner />
        <SideBar />
        <div id='dashboard__container'>
            <Switch>
            <Route path="/" element={<Accueil />}></Route>
            <Route exact path="/User" element={<User />}></Route>
            </Switch>
        </div>
    </div>
    </Router>
  )
}

export default RoutesPath