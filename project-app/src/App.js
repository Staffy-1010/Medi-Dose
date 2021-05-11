import React from 'react'
import { Card, CardDeck } from 'react-bootstrap'
import Intropg from './Intropg'
import LoginModal from './LoginModal'
import Navv from './Navv'
import SignupModal from './SignupModal'
import "./App.css"
import Profile from './Profile'
import { Route, Switch } from 'react-router-dom'
import FrontPg from './FrontPg'
import UserDashBoard from './UserDashBoard'
import PostMedicine from './PostMedicine'
import GetMedicine from './GetMedicine'
import MedicineManager from './MedicineManager'

function App() {
    return (
      <>
       <Switch>
       <Route path="/" exact component={FrontPg}></Route>
       <Route path="/User" exact component={UserDashBoard}></Route>
       <Route path="/Profile" exact component={Profile}></Route>
       <Route path="/PostMedicines" exact component={PostMedicine}></Route>
       <Route path="/GetMedicines" exact component={GetMedicine}></Route>
       <Route path="/MedicineManager" exact component={MedicineManager}></Route>
       </Switch>
      </>
    )
}

export default App
