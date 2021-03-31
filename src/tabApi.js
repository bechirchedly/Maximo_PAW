/*import React , {useState , useEffect } from 'react'
export default function tabApi()
{
    const [data,setData]=useState([])
    useEffect(()=>{
        let url = "http://maxgps.smartech-tn.com:9876/maximo/oslc/script/qr?_lid=maxadmin&_lpwd=maxadmin"
        fetch(url).then((response)=>{
            response.json().then((result)=>{
                console.warn(result)
                setData(result)
            })
        })
    },[])
    
        return(
            <div>
                <h1>     Table API     </h1>
            </div>
        )
    
    
}*/