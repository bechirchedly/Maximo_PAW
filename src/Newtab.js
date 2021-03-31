import React , { Component } from 'react';
import AsyncSelect from 'react-select/async';
import { Table } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';



class SearchClient extends Component {

    constructor(props){
        super();
       this.state = { selectedClient : [],
        selecteTable :[]
    
    };


      
        

    }
    urlMaximo = (domaineUrl,OsNAme,pageSize,...atribute) =>{

        const atributeString = [...atribute].join(',');
        return(`http://${domaineUrl}/maximo/oslc/os/${OsNAme}?savedQuery=${pageSize}&oslc.select=${atributeString}`)


    }

    urlClient = (...atributes) =>{
        const atributeString = [...atributes].join(',');
        return(`&oslc.select=${atributeString}`)
    }

    


    
    
    loadOptions = async (inputValue,callback) =>{
   await axios({
            method: "GET",
            url :"http://demo.smartech-tn.com/maximo/oslc/apimeta/WO_PWA/" + inputValue,
            headers: {
                "maxauth": JSON.parse(localStorage.getItem('token')).token
            },
            params: {
               lean:1
            }
        }).then(res => {
            if (res.status =='200'){
                const queryCapa = res.data.queryCapability
                const newta = [...queryCapa.map((item)=> ({label : item.name.replace(/WOTRACK:/g,"") , href : item.href }))]
                console.log(typeof(newta))
                this.setState({selectedClient : newta});
                callback(newta)
                
                
               
                
     
            }
        }).catch(err =>{
            console.log(err.message);
            console.errer("You have a probleme")
        })

        
    }
    onChangeInput =async (value)=>{
        
        console.log(value)
        
        // this.setState({ selectedClient : selectedClient || [] })
        await axios({
            method: "GET",
            url :value.href + this.urlClient("wonum","location","description"),
            headers: {
                "maxauth": JSON.parse(localStorage.getItem('token')).token
            },
            params: {
               lean:1
            }
        }).then(res => {
            if(res.status ='200'){
                const table = res.data.member
                console.log(table)
                this.setState({selecteTable : table})

              
                

            }
        }).catch(err =>{console.error("you have a probleme with this !!!")})
    }
    
    
    // onChange = selectedClient =>{
    //     this.setState({
    //         selectedClient : selectedClient || []
    //     })
    // }



    render(){
        

        return(
            <div>

                
                
                 <AsyncSelect
                defaultValue={this.state.selectedClient}
                options={this.state.selectedClient}
                onChange={this.onChangeInput}
                openMenuOnClick={this.loadOptions}
                placeholder={'search for somthing ...'}
                loadOptions={this.loadOptions}
                isSearchable
                //options={this.loadOptions}
                theme={theme => ({
                    ...theme,
                    borderRadius: 0,
                    colors: {
                      ...theme.colors,
                      primary25: 'hotpink',
                      primary: 'black',
                    },
                  })}
                
                
                /> 
                <br/>
                <br/>
                <br/>
                <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Wonum</th>
                        <th>Description</th>
                        <th>Location</th>
                        
                    </tr>
                </thead>
                <tbody>
                   {
                       this.state.selecteTable.map((item)=> (
                           <tr key={uuidv4()} >
                               <td key={uuidv4()}> {item.wonum} </td>
                               <td key={uuidv4()}>{item.description}</td>
                               <td key={uuidv4()}>{item.location}</td>
                               
                           </tr>
                       ))
                   }
                </tbody>
            </Table>
                
            
            </div>
        )
    }








}
export default SearchClient ;