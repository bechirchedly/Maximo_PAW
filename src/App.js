import React ,{useEffect,useState} from 'react';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


import './App.css';
import { Navbar, Nav } from 'react-bootstrap';
import Tab from './Tab';
import Login from './Login';
import Logout from './Logout';
import Signup from './Signup';
import Search from './Newtab';
import TableTest from './TableTest';
import DataTable from './datatable';
import TableMenu from './TableMenu';
import { Link, Route, BrowserRouter as Router ,Switch } from 'react-router-dom'; 
//import firebase from './firebase';
import { UserContext } from './UserContext';




function App() {

  // useEffect(()=> {
  //   const msg = firebase.messaging();
  //   msg.requestPermission().then(()=>{
  //     return msg.getToken();
  //   }).then((data)=>{
  //     console.warn("token " , data);
  //   })
  // })
  // useEffect(()=>{
  //   <TestFireBase></TestFireBase>

  // },[])


  // const nameTake = (data) => {
  //   return data;
  //   //console.log(data);
  // };
  const succes = sessionStorage.getItem('succes');

   return (
    
    <div className="App">
      
      <Router>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand to="#home">Maximo</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/Tab">TableApi</Nav.Link>
          </Nav>
          <Nav inline="true">
            {/* {(!succes)?<Nav.Link href="/login" >Login</Nav.Link>:null} */}
            <Nav.Link href="/workorder">work</Nav.Link>
            <Nav.Link href="/test">Test</Nav.Link>
            {succes?<Nav.Link href="/" onClick={()=>{  sessionStorage.removeItem('succes');sessionStorage.removeItem('userName');   }} >Logout</Nav.Link>:null}
            {console.log(succes)}
            {/* <Nav.Link href="/signup">Sign up</Nav.Link> */}
          </Nav>
        </Navbar>
        <Switch>
        
          <Route path="/Tab" component={Tab} ></Route>
          <Route exact path="/" component={Login} ></Route>
          {/* <Route path="/login" component={()=>( <Logout   />)} ></Route> */}
          <Route path="/signup" component={Signup} ></Route>
          <Route path="/search" component={Search} ></Route>
          <Route path="/workorder" component={TableMenu} ></Route>
          <Route path="/test" component={DataTable} ></Route>
        </Switch>
      </Router>
      

    </div>
  );
}



export default App;
