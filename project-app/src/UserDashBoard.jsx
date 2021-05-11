import React from 'react'
import { Badge } from 'react-bootstrap'
import Navv from './Navv'

function UserDashBoard() {
    return (
        <center>    
        <Navv></Navv>
        <div className="col-sm-12 mt-5">
                    <div className="card border-0 bg-transparent">
                        <div className="card-body">
                            <h5 className="card-title h4 text-dark font-weight-light"></h5>
                            <h5 className="card-title h2">HOW DOES THIS WORKS?
                            </h5>
                            <p className="card-text h5 font-weight-light" >Complete your profile details.</p>
                            <p className="card-text h5 font-weight-light" >For GETTING a MEDICINE check for a suitable MEDICINE and click on SHOW DETAILS.</p>
                            <p className="card-text h5 font-weight-light" >For POSTING a MEDICINE add the MEDICINE description correctly and we'll find best GETTER for you.</p>                            
                            <p className="card-text font-weight-bold h5">Thousands of MEDICINES available. check out!!</p>
                        </div>
                    </div>
                </div>
        <a href="/Profile">
        <Badge pill variant="dark" className="col-md-5 mt-5">
        <font size="100"> PROFILE</font>
        </Badge>
        </a>
        <a href="/PostMedicines">
        <Badge pill variant="dark" className="col-md-5">
        <font size="100"> POST YOUR MEDICINES</font>
        </Badge>
        </a>
        <br></br>
        <br></br>
        <a href="/GetMedicines">
        <Badge pill variant="dark" className="col-md-5">
        <font size="100"> AVAILABLE MEDICINES</font>
        </Badge>
        </a>
        <a href="/MedicineManager">
        <Badge pill variant="dark" className="col-md-5">
        <font size="100">MEDICINE MANAGER</font>
        </Badge>
        </a>
        </center>
    )
    }

export default UserDashBoard

