import React, { useState } from 'react' 
import { Button, Col, Form} from 'react-bootstrap'
import axios from 'axios'
function LoginModal() {
        var [userObj,setuserObj]=useState({
          uid:"",
          pwd:""
      });
      var doUpdate =async (event) => {
          var { name, value } = event.target;
      
          await setuserObj({
            ...userObj,
            [name]: value,
          });
        };
        var dofind=async ()=>{
            var url="http://localhost:8087/react/findd";
            var response =await axios.post(url, userObj);
            alert(JSON.stringify(response.data));
}
    const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
    return (
        <>
        <div className="container">
                <p>
                <center><img width="100" height="100" src="pix/user.webp"></img></center>
                <Form.Label column sm="3">
                User-Id
                </Form.Label>
                <Col sm="12">
                <input type="text" variant="" value={userObj.uid} name="uid" onChange={doUpdate} className="border-top-0 border-left-0 border-right-0 col-md-12" placeholder="UID" />
                </Col>
                <Form.Label column sm="3">
                Password
                </Form.Label>
                <Col sm="12">
                    <input type="password" variant="" value={userObj.pwd} name="pwd" onChange={doUpdate} className="border-top-0 border-left-0 border-right-0 col-md-12" placeholder="Password" />
                </Col>
                </p>
        
            
                <Button variant="nav-link" className="text-primary" href="/User" exact onClick={dofind}>
                   <u>LOGIN</u> 
                </Button>
          </div>
        </>
    )
}

export default LoginModal;