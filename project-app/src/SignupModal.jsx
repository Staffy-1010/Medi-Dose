import React, { useState } from 'react'
import { Button, Col, Form, Modal } from 'react-bootstrap'
import axios from 'axios';


function SignupModal() {
  var [userObj,setuserObj]=useState({
    uid:"",
    pwd:"",
    mob:""
});
var doUpdate =async (event) => {
    var { name, value } = event.target;

    await setuserObj({
      ...userObj,
      [name]: value,
    });
  };
  var [fileName,setFileName]=useState("Choose File");

  var [file,setFile]=useState('');
    var onChange=(event)=>{
    setFile(event.target.files[0]);
    setFileName(event.target.files[0].name);
}

  async function doSave() {
    try{
      var formData=new FormData();
      formData.append("filee",file);
    var url = "http://localhost:8087/react/savee";
    var response =await axios.post(url,userObj);
    alert(JSON.stringify(response.data));
    }
    catch(err)
    {
        if(err.response.status==500)
            alert("Server error");
        else
            alert(err.response.data.msg);
    }
  }
        const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);




    return (
        <div className="container">
        <Button variant="Light" className="col-md-5 text-primary" onClick={handleShow}>
            <u>New To Medi-Dose? SIGNUP</u>
        </Button>
                <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Signup</Modal.Title>
                </Modal.Header>
        
                <Modal.Body>
                    <p>
                    <center><img width="100" height="100" src="pix/user.webp"></img></center>
                    <Form.Label column md="6">
          User-Id:
        </Form.Label>
                <Col sm="12">
                <input type="text" variant="" value={userObj.uid} name="uid" onChange={doUpdate} className="border-top-0 border-left-0 border-right-0 col-md-12" placeholder="UID" />
                </Col>
                <Form.Label column sm="6">
                Password
                </Form.Label>
                <Col sm="12">
                    <input type="password" variant="" value={userObj.pwd} name="pwd" onChange={doUpdate} className="border-top-0 border-left-0 border-right-0 col-md-12" placeholder="Password" />
                </Col>
                <Form.Label column sm="6">
                Mobile
                </Form.Label>
                <Col sm="12">
                <input type="number" variant="" value={userObj.mob} name="mob" onChange={doUpdate} className="border-top-0 border-left-0 border-right-0 col-md-12" placeholder="MOBILE NO." />
                </Col>
                <br></br>
                <Form.Label column sm="6">
                ID-Proof(Aadhar Card)
                </Form.Label>
                <center><input type="file" name="file" onChange={onChange}></input></center>
                    </p>
                </Modal.Body>
        
                <Modal.Footer>
                    <Button variant="primary" onClick={doSave}>
                      SIGNUP
                    </Button>
          </Modal.Footer>
                  
        </Modal>
        </div>
    )
}

export default SignupModal;
