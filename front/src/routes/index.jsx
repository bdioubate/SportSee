import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom'

//Pages
import Accueil from '../pages/Accueil'
import User from '../pages/User'
import Error from '../pages/Error'

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
            <Route exact path="/" element={<Accueil />}></Route>
            <Route path="/user/:id" element={<User />}></Route>
            <Route path="*" element={<Error />}></Route>
            </Switch>
        </div>
    </div>
    </Router>
  )
}

export default RoutesPath