import React,{useState} from 'react';

export default function Logout({takeState}) {

    sessionStorage.removeItem('userName');
    localStorage.removeItem('token');

    


    return (

        <div>
            
        </div>
    )
}
