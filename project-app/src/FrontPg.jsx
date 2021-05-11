import React from 'react'
import { Card, CardDeck } from 'react-bootstrap'
import Intropg from './Intropg'
import LoginModal from './LoginModal'
import Navv from './Navv'
import SignupModal from './SignupModal'
import "./App.css"

function FrontPg() {
    return (
        <>
        <center>
        <div>
        <Navv></Navv>
        <CardDeck>
        <Card className="border-top-0 border-left-0 border-right-0">
        <center> <Intropg></Intropg> </center> 
        </Card>
        <Card className="border-top-0 border-left-0 border-right-0 col-md-7">
        <div className="mt-5">
        <br></br>
        <br></br>
        <br></br>
          <LoginModal></LoginModal>
          <SignupModal></SignupModal>
        </div>
        </Card>
      </CardDeck>
        </div>
        </center>
       </>
    )
}

export default FrontPg
