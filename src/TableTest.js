import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";
import './TableTest.css';
import { Table } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import DataTable from './datatable';


const TableTest = () => {

    const [tableDon, setTableDon] = useState([]);
    const [test , setTest] = useState([]);
    const [selectEle, setSelectEle] = useState([]);
    const [selecteTable, setSelectTable] = useState([]);
    const [valeur,setValeur] = useState("");
    const [val,setVal] =useState('kaka');
    const [eleee,setEleee] = useState('b');

    useEffect(() => {
        recupDonnees();
        

    }, [])


    const recupDonnees = async () => {

        await axios({
            method: "GET",
            url: "http://demo.smartech-tn.com/maximo/oslc/apimeta/WO_PWA/",
            headers: {
                "maxauth": JSON.parse(localStorage.getItem('token')).token
            },
            params: {
                lean: 1
            }
        }).then(res => {
            if (res.status == '200') {
                const queryCapa = res.data.queryCapability
                const newta = [...queryCapa.map((item) => ({ label: item.name.replace(/WOTRACK:/g, ""), href: item.href }))]
                setTableDon(newta)
                console.log("hello")
            }
        }).catch(err => {
            console.errer("You have a probleme")
        })
    }
    //recupDonnees();















    // loadOptions = async (inputValue, callback) => {
    //     await axios({
    //         method: "GET",
    //         url: "http://demo.smartech-tn.com/maximo/oslc/apimeta/WO_PWA/" + inputValue,
    //         headers: {
    //             "maxauth": JSON.parse(localStorage.getItem('token')).token
    //         },
    //         params: {
    //             lean: 1
    //         }
    //     }).then(res => {
    //         if (res.status == '200') {
    //             const queryCapa = res.data.queryCapability
    //             const newta = [...queryCapa.map((item) => ({ label: item.name.replace(/WOTRACK:/g, ""), href: item.href }))]
    //             console.log(typeof (newta))
    //             this.setState({ selectedClient: newta });
    //             callback(newta)





    //         }
    //     }).catch(err => {
    //         console.errer("You have a probleme")
    //     })


    // }
    // onChangeInput = async (value) => {

    //     console.log(value)

    //     // this.setState({ selectedClient : selectedClient || [] })
    //     await axios({
    //         method: "GET",
    //         url: value.href + this.urlClient("wonum", "location", "description"),
    //         headers: {
    //             "maxauth": JSON.parse(localStorage.getItem('token')).token
    //         },
    //         params: {
    //             lean: 1
    //         }
    //     }).then(res => {
    //         if (res.status = '200') {
    //             const table = res.data.member
    //             console.log(table)
    //             this.setState({ selecteTable: table })




    //         }
    //     }).catch(err => { console.error("you have a probleme with this !!!") })
    // }


    // onChange = selectedClient =>{
    //     this.setState({
    //         selectedClient : selectedClient || []
    //     })
    // }
    const urlClient = (...atributes) => {
        const atributeString = [...atributes].join(',');
        return (`&oslc.select=${atributeString}`)
    }

    const onChangeTab = async (e) => {
        setSelectEle(e.value);
        console.log(e.value)

        await axios({
            method: "GET",
            url: e.value.href + urlClient("wonum", "location", "description"),
            headers: {
                "maxauth": JSON.parse(localStorage.getItem('token')).token
            },
            params: {
                lean: 1
            }
        }).then(res => {
            if (res.status = '200') {
                const table = res.data.member
                console.log(table)
                setSelectTable(table);
                setVal("ououi")
                




            }
        }).catch(err => { console.error("you have a probleme with this !!!") });


         const dataa = () => {
             setTest(selecteTable)
             setEleee(val);
             console.log(eleee)
             console.log(test)


        }
        dataa();

        
    }

    const tableHandelChange = (e) => {

        setValeur(e.target.value);

        setSelectTable(selecteTable.map((el)=>{
            return(el.description = "helloo")
        }))
        console.log(selecteTable)


    }


    
    

    
    






    return (
        <div>



            <div className="dropdown-demo">
                <div className="card">

                <div className="drop">
                <Dropdown
                        className="toleft"
                        value={selectEle}
                        options={tableDon}
                        onChange={onChangeTab}
                        optionLabel="label"
                        filter showClear
                        filterBy="label"
                        placeholder="Select a Country"
                    // valueTemplate={selectedCountryTemplate}
                    // itemTemplate={countryOptionTemplate} 
                    />
                    <div className="con">
                    <InputText className="toleft" value={valeur} onChange={(e) => setValeur(e.target.value)} />
                    </div>
                    </div>
                    
                

                </div>
            </div>
            <br />
            <br />
            <br />

            {/* <DataTable data={test}/> */}
            {/* <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Wonum</th>
                        <th>Description</th>
                        <th>Location</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        selecteTable.map((item) => (
                            <tr key={uuidv4()} >
                                <td key={uuidv4()}> {item.wonum} </td>
                                <td key={uuidv4()}>{item.description}</td>
                                <td key={uuidv4()}>{item.location}</td>

                            </tr>
                        ))
                    }
                </tbody>
            </Table> */}


        </div>
    )
}


export default TableTest;