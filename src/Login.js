//import { Button } from 'bootstrap';
import React, { useState , useRef } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';


const Login = (props) => {

    //console.log(props);

    //const [user, setUser] = useState({ "ABOUGHDIRI": "123456" });
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [loginIs,setLoginIs] = useState(true);
    const [token,setToken] = useState('')
    const [erreur , setErreur] = useState('');
    const [log, setLog] = useState(false);
     

    // nameTT(userName);

    // const TakeName = () => {
    //     return userName;
    // }
    
    

    const handleSubmit = (e) =>{
        e.preventDefault();
        setPassword('');
        setUserName('');
    }
    



    const handleName = (e) => {
        e.preventDefault();
        setUserName(e.target.value)

    }
    const handlePass = (e) => {
        e.preventDefault();
        setPassword(e.target.value)

    }

    /*handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.url + "hello")

    }*/

    const urlMaximo = (domaineUrl,OsNAme,pageSize,...atribute) =>{

        const atributeString = [...atribute].join(',');
        return(`http://${domaineUrl}/maximo/oslc/os/${OsNAme}?savedQuery=${pageSize}&oslc.select=${atributeString}`)


    }
    urlMaximo('demo.smartech-tn.com','wo_pwa',"10","asset","location","description");

    const history = useHistory();

    // const testRequest = async () => {



    //     await axios({
    //         method: "GET",
    //         url :"http://demo.smartech-tn.com/maximo/oslc/apimeta/WO_PWA",
    //         headers: {
    //             "maxauth": Buffer("ABOUGHDIRI:123456").toString('base64')
    //         }
    //     }).then(res => {
    //         console.log(res.status)
    //         if (res.status == '200'){
    //             const queryCapa = res.data.queryCapability
    //             const newta = queryCapa.map((item)=> ({name : item.name , href : item.href }))
    //             console.log(newta)
    //         }
    //     }).catch(err =>{
    //         console.error("You have a probleme")
    //     })


    // }
   

    const testLogin = async (userName, password) => {

        
        const token = Buffer(userName + ":" + password).toString('base64')
         setToken(token);
        await axios({
            method: "POST",
            url: "http://demo.smartech-tn.com/maximo/oslc/apitoken/create",
            // url :urlMaximo('demo.smartech-tn.com','wo_pwa',"WOTRACK%3ABT+termin%C3%A9s","wonum","location","description"),
            headers: {
                "maxauth": btoa(userName + ":" + password)
            },
            credentials : 'include',
            params: {
               lean:1
            },
            data: { expiration: 120 }
        }).then(res => {
            if (res.status == '200') {
                sessionStorage.setItem('userName',userName);
                sessionStorage.setItem('succes',true);
                setLog(!log);
                console.log((res.data.apikey));
                history.push("/test")
                localStorage.setItem('token',JSON.stringify({
                    token:token
                }))

                // localStorage.setItem('login',JSON.stringify({
                //     token:res.data.apikey
                // }))

                
                
                


            } else {
                console.log("failed to log in");
                setLoginIs(false)

            }

        }).catch(error => {
            console.error(error.res);
            console.log(error.res)
            setErreur(error.res)
            // setLoginIs(false)

        });
        

        // await axios({
        //     method: "GET",
        //     // url: "http://demo.smartech-tn.com/maximo/oslc/apitoken/create",
        //     url :urlMaximo('demo.smartech-tn.com','wo_pwa',"WOTRACK%3ABT+termin%C3%A9s","wonum","location","description"),
        //     headers: {
        //         "maxauth": Buffer(userName + ":" + password).toString('base64')
        //     },
        //     // credentials : 'include',
        //     params: {
        //        lean:1
        //     },
        //     data: { expiration: 120 }
        // }).then(res => {
        //     if (res.status == '200') {
        //         // console.log((res.data.apikey));
                
        //         // localStorage.setItem('login',JSON.stringify({
        //         //     token:res.data.apikey
        //         // }))
                
                


        //     } else {
        //         console.log("failed to log in");
        //         setLoginIs(false)

        //     }

        // }).catch(error => {
        //     console.error(error.res);
        //     setLoginIs(false)

        // });



        



    }



    

    return (
        <div className="form-login" >
            <h1>Login</h1>
            <h2>{props.user}</h2>
            <form  onSubmit={handleSubmit} >
                {(!loginIs) ?(<h4>Unauthorized 401</h4>):null}
                <input id='userid' onChange={handleName} value={userName} type="text" name="user" placeholder="username" />
                <br />
                <br />
                <input id='pwd'onChange={handlePass} value={password} type="password" name="password" placeholder="password" />
                <br />
                <br />
                <Button onClick={() => testLogin(userName,password)}>Login</Button>
                
               

            </form>
        </div >
    )
};

export let userName ; 

function mapStateToProps(state){
    return{
        user : state.user
    }

};
// function mapDispatchToProps(dispatch){
//     changeUser : () => dispatch({type: 'CHANGE_USER', payload :{userName}});
//     resetUser : () => dispatch({type : 'RESET_USER',payload:{}});

// }






export default connect(mapStateToProps)(Login);