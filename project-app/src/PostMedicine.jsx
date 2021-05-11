import React, { useState } from 'react'
import { Jumbotron,Button, Form } from 'react-bootstrap'
import Navv from './Navv'
import './index.css';
import Axios from 'axios';

function PostMedicine() {
  var [medObj,setmedObj]=useState({
    name:"",
    comp:"",
    exp:"",
    quan:"",
    typ:"",
    myfile:""
});
var doFill =async (event) => {
    var { name, value } = event.target;

    await setmedObj({
      ...medObj,
      [name]: value,
    });
  };    
    var [fileName,setFileName]=useState("Choose File");

    var [file,setFile]=useState('');
    function onPicChange(event)
{
  setmedObj({...medObj,["myfile"]:event.target.files[0].name});
}
    
  async function doSave()
    {
      // var formData=new FormData();
      // formData.append("filee",setFileName);
      alert(JSON.stringify(medObj));
      var url = "http://localhost:8087/med/savee";
      var response=await Axios.post(url,medObj,{headers:{'Content-Type':'multipart/form-data'}}); 
      alert(JSON.stringify(response.data));
      setFileName(response.data.msg);
    //   }
    // var formData=new FormData();
    //     formData.append("myfile",fileName);
    //     // formData.append("val",medObj);
    // var url = "http://localhost:8087/med/savee";
    // var response = await Axios.post(url,formData,{headers:{'Content-Type':'multipart/form-data'}});
    // alert(JSON.stringify(response.data));
  }
    return (
      // <form method="post" action="http://localhost:8087/med/savee" encType="multipart/form-data">
        <div>
        <Navv></Navv>
        <center>
        <Jumbotron className="col-md-8 mt-4">
        <Form.Text className="text-muted">
          <b>CHECK EXPIRY DATE BEFORE UPLOADING DO NOT UPLOAD EXPIRED MEDICINES</b>
        </Form.Text>
        <h1>Medicines</h1>
        <p>
          <img src="pix/medicines.jfif" height="500" className="rounded-circle col-md-4 float-left"></img>
            <center>Medicine:-<input type="file" onChange={onPicChange} ></input></center>
            <Form.Group controlId="formBasictext" className="mt-4 col-md-8 float-right">
        <input type="text" className="border-top-0 border-left-0 border-right-0 col-md-12" name="name" value={medObj.name} onChange={doFill} placeholder="Medicine Name" />
        <Form.Text className="text-muted">
          Please Enter Full Name Of Medicine.
        </Form.Text>
      </Form.Group>
        <Form.Group controlId="formBasictext" className="mt-2 col-md-8 float-right">
          <input type="text" className="border-top-0 border-left-0 border-right-0 col-md-12" name="comp" value={medObj.comp} onChange={doFill} placeholder="Company" />
          <Form.Text className="text-muted">
           Enter Company Name.
        </Form.Text>
          </Form.Group>
        <Form.Group controlId="formBasictext" className="mt-2 col-md-8 float-right">
          <input type="number" className="border-top-0 border-left-0 border-right-0 col-md-12" name="quan" value={medObj.quan} onChange={doFill} placeholder="Quantity" />
          <Form.Text className="text-muted">
           Enter Medicine Quantity.
        </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasictext" className="mt-2 col-md-8 float-right">
        <input type="radio" className="border-top-0 border-left-0 border-right-0 col-md-1" name="typ" onChange={doFill} value="Tablets" />Tablets
        <input type="radio" className="border-top-0 border-left-0 border-right-0 col-md-1" name="typ" onChange={doFill}  value="Strips" />Strips
        <input type="radio" className="border-top-0 border-left-0 border-right-0 col-md-1" name="typ" onChange={doFill} value="Bottles" />Bottles
        <input type="radio" className="border-top-0 border-left-0 border-right-0 col-md-1" name="typ" onChange={doFill} value="Injections" />Injections
        <input type="radio" className="border-top-0 border-left-0 border-right-0 col-md-1" name="typ" onChange={doFill} value="Boxes" />Boxes
        </Form.Group>
        <Form.Group controlId="formBasicPassword" className="mt-2 col-md-8 float-right">
        EXPIRY DATE:-<input type="date" className="border-top-0 border-left-0 border-right-0 col-md-10" onChange={doFill} value={medObj.exp} name="exp" placeholder="Expiry Date" />
        <Form.Text className="text-muted">
           Enter Correct Expiry Date of Medicine.
        </Form.Text>
        </Form.Group>
        </p>
        <p>
        <input type="button" value="Update Record" ></input>
          <Button variant="secondary" onClick={doSave} className="mt-2" >Make Available</Button>
        </p>
      </Jumbotron>
      </center>
        </div>
        // </form>
    )
}

export default PostMedicine
