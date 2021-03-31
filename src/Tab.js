import React, { useState, useEffect } from 'react'
import {Table} from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
export default function Tab() {
    const [data, setData] = useState([])
    useEffect(() => {
        let url = "http://maxgps.smartech-tn.com:9876/maximo/oslc/script/qr?_lid=maxadmin&_lpwd=maxadmin"
        fetch(url).then((response) => {
            response.json().then((result) => {
                //console.warn(result.mumber)
                setData(result.mumber)
                console.log(result.mumber)
                localStorage.setItem("Tab",JSON.stringify(result.mumber))
            })
                
            }).catch(err =>{
                
                let collection = localStorage.getItem("Tab");
                setData(JSON.parse(collection))
        })
    }, [])

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Assetnum</th>
                        <th>Description</th>
                        <th>Location</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                   {
                       data.map((item)=> (
                           <tr key={uuidv4()} >
                               <td key={uuidv4()}> {item.assetnum} </td>
                               <td key={uuidv4()}>{item.description}</td>
                               <td key={uuidv4()}>{item.location}</td>
                               <td key={uuidv4()}>{item.status}</td>

                           </tr>
                       ))
                   }
                </tbody>
            </Table>
        </div>
    )


}