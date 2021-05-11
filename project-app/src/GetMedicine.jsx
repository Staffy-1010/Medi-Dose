import Axios from 'axios';
import React, { useState } from 'react'
import { Card } from 'react-bootstrap';
import Navv from './Navv';

function GetMedicine() {
    var [jsonAry, fillJsonArray] = useState([{}]);
    async function dofetch() {
      var url = "http://localhost:8087/med/fetchh";
      var response =await Axios.post(url);
      fillJsonArray(response.data);
    }
    window.onload=dofetch();
    return (
        <>
        <Navv></Navv>
        <div className="container">
        {jsonAry.map((obj) => {
            return (
        <Card className="col-md-4 mt-5 float-left">
        <Card.Body className="text-center">
        <p><img width="100" height="100" className="rounded-circle" src="../../Mongo-react/uploads/{obj.pic}"></img></p>
        <p>{obj.name}</p>
        <p>{obj.comp}</p>
        <p>{obj.quan}</p>
        <p>{obj.typ}</p>
        <p>{obj.exp}</p>
        </Card.Body>
        </Card>
            )})}
        </div>
        </>
    )
}

export default GetMedicine
