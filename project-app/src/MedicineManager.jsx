import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import Navv from './Navv'

function MedicineManager() {
    var [jsonAry, fillJsonArray] = useState([{}]);
    async function dofetch() {
      var url = "http://localhost:8087/med/fetchh";
      var response =await Axios.post(url);
      fillJsonArray(response.data);
    }
    async function dodelete(abc) {
      var name=abc;
      var url = "http://localhost:8087/med/delete";
      var response =await Axios.post(url,name);
      fillJsonArray(response.data);
    }
    
    return (
        <>
        <Navv></Navv>
        <center><input type="button" className="mt-5" readOnly onClick={dofetch} value="FETCH MEDICINES"></input></center>
        <div className="container mt-5">
  <Table responsive="sm">
    
      <tr>
        <th>MEDICINE NAME</th>
        <th>COMPANY</th>
        <th>QTY.</th>
        <th>TYPE</th>
        <th>EXPIRY DATE</th>
        <th>DELETE</th>
      </tr>
    
    {jsonAry.map((obj) => {
        return (
    <tbody>
      <tr>
        <td>{obj.name}</td>
        <td>{obj.comp}</td>
        <td>{obj.quan}</td>
        <td>{obj.typ}</td>
        <td>{obj.exp}</td>
        <td><Button
        variant="primary"
         onClick={() => dodelete(obj.name)}>
      </Button></td>
      </tr>
    </tbody>
        )
        }
    )
      }  
  </Table>
</div>
</>
    )
}
export default MedicineManager
