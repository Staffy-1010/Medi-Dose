import Axios from 'axios';
import React, { useState } from 'react'
import { Form,Button, Jumbotron } from 'react-bootstrap'
import Navv from './Navv'

function Profile() {
  var [userObj,setuserObj]=useState({
    uid:"",
    name:"",
    city:"",
    address:"",
    Email:""
});
var dofill =async (event) => {
    var { name, value } = event.target;

    await setuserObj({
      ...userObj,
      [name]: value,
    });
  };
  var dosubmit=async ()=>{
      var url="http://localhost:8087/react/submit";
      var response =await Axios.post(url, userObj);
      alert(JSON.stringify(response.data));    
  }
  var doUpdate=async ()=>{
    var url="http://localhost:8087/react/update";
    var response =await Axios.post(url, userObj);
    alert(JSON.stringify(response.data));    
} 
  return (
        <div>
        <Navv></Navv>
        <center>
        <Jumbotron className="col-md-6  mt-5">
        <p className="h1">SETUP PROFILE</p>
        <Form className="mt-5 col-md-12">
        <Form.Group controlId="formBasictext" className="mt-5 col-md-12">
          <input type="text" className="border-top-0 border-left-0 border-right-0 col-md-12" onChange={dofill} value={userObj.uid} name="uid" placeholder="User-Id" />
          <Form.Text className="text-muted">
            We'll never share your text with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasictext" className="mt-5 col-md-12">
        <input type="text" className="border-top-0 border-left-0 border-right-0 col-md-12" onChange={dofill} value={userObj.name} name="name" placeholder="Name" />
        <Form.Text className="text-muted">
          We'll never share your text with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasictext" className="mt-5 col-md-12">
        <input type="email" className="border-top-0 border-left-0 border-right-0 col-md-12" onChange={dofill} value={userObj.Email} name="Email" placeholder="E-mail" />
        <Form.Text className="text-muted">
          We'll never share your text with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasictext" className="mt-5 col-md-12">
          <input type="text" className="border-top-0 border-left-0 border-right-0 col-md-12" onChange={dofill} value={userObj.address} name="address" placeholder="Address" />
          <Form.Text className="text-muted">
            We'll never share your text with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword" className="mt-5 col-md-12">
          <input type="text" className="border-top-0 border-left-0 border-right-0 col-md-12" onChange={dofill} value={userObj.city} name="city" placeholder="City" />
        <Form.Text className="text-muted">
            We'll never share your text with anyone else.
          </Form.Text>
          </Form.Group>
        <Button variant="primary" onClick={dosubmit} className="mt-5">
          Submit
        </Button>
        <Button variant="primary" onClick={doUpdate} className="mt-5">
          Update
        </Button>
      </Form>
      </Jumbotron>
      </center>
        </div>
    )
}

export default Profile
