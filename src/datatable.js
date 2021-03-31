import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { DataTable } from 'primereact/datatable';
import { useHistory, useLocation } from "react-router-dom";

import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { ProgressSpinner } from 'primereact/progressspinner';
import './plans.css';
import SubscribeToTopic from './SubscribeToTopic';



import './DataTableDemo.css';

const DataTableFilterDemo = () => {

    const history = useHistory();

    const [dataWonum, setDataWonum] = useState(null);
    const [tableDon, setTableDon] = useState(null);
    const [tableName, setTableName] = useState(null);
    const [table, setTable] = useState([]);
    const [globalFilter, setGlobalFilter] = useState(null);
    const dt = useRef(null);
    const [verifier, setVerfier] = useState(true);
    const [empty, setEmpty] = useState(true)
    const [isLoading, setIsLoading] = useState(false);
    const [takeDataWo, settakeDataWo] = useState([]);
    const [idWonum, setIdWonum] = useState(null);
    const [loadingSelector, setloadingSelector] = useState(false);
    const [tableOnline, settableOnline] = useState(null);

    const userSession = sessionStorage.getItem('userName');

    useEffect(()=>{
        //subscribeTokenTopic();
        SubscribeToTopic();




    },[userSession])



    useEffect(() => {
        otherApi();
    }, []);

    useEffect(() => {
        if (dataWonum) {
            //console.log("cersrrr")
            //console.log(dataWonum)
            history.push({
                pathname: '/workorder',
                state: {
                    data: dataWonum,
                    loading: true,
                }
            })
        }

    }, [dataWonum])
    
    useEffect(() => {
        takeData();

    }, [takeDataWo, idWonum])

    const takeData = () => {
        //console.log(takeDataWo);
        //console.log(idWonum);
        
        const index = takeDataWo.find(item => item.wonum == idWonum);
        //console.log(index);
        setDataWonum(index)

    }




    const otherApi = async () => {


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
                const newta = [...queryCapa.map((item) => ({ name: item.name.replace(/WOTRACK:/g, ""), href: item.href }))];
                localStorage.setItem("AllData", JSON.stringify(newta));
                setTableDon(newta);
                //console.log(`voici le table DON ${tableDon}`);



            }
            else {
                setVerfier(false);
            }


        }).catch(err => {
            let collection = localStorage.getItem("AllData");
            setTableDon(JSON.parse(collection));
            //console.errer("You have a probleme pour la recuperation de data")
        })
    }

    const urlClient = (...atributes) => {
        const atributeString = [...atributes].join(',');
        return (`&oslc.select=${atributeString}`)
    }

    const apiConsommer = async (e) => {


        setTableName(e.value)
        setVerfier(true);
        setEmpty(true);
        settableOnline([])
        //setTable([]);
        console.log(e.value)
        setIsLoading(true);
        if (e.value) {
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
                    const tab = res.data.member;
                    //console.log(tab)
                    const obj = {};
                    const namme = e.value.name;
                    obj[namme] = tab;

                    settableOnline(tab);

                    setTable([...table, obj]);
                    //setTable(tab);
                    let dataLocale = JSON.parse(localStorage.getItem("someData"));
                    if (dataLocale) {
                        const index = dataLocale.find(item => Object.keys(item) == namme);
                        if (!index) {
                            localStorage.setItem("someData", JSON.stringify([...dataLocale, obj]));
                        }


                    } else {
                        localStorage.setItem("someData", JSON.stringify([obj]));

                    }

                    setIsLoading(false);

                    if (tab.length == 0) {
                        setEmpty(false)
                    }
                    else {
                        setVerfier(true);
                        setEmpty(true);
                    }

                }

            }).catch(err => {
                    const namme = e.value.name;
                    let dataLocaleStore = JSON.parse(localStorage.getItem("someData"));
                    const index = dataLocaleStore.find(item => Object.keys(item) == namme);
                if (index) {
                    
                    const tableIndex = Object.values(index)
                    //console.log(tableIndex[0]);
                    settableOnline(tableIndex[0]);
                    setIsLoading(false);
                    if (tableIndex[0].length == 0) {
                        setEmpty(false)
                    }
                    else {
                        setVerfier(true);
                        setEmpty(true);
                    }

                    

                }
                setVerfier(true); console.error("you have a probleme with this !!!")
            });

        } else {
            setIsLoading(false);
        }


    }



    const onSelected = async (e) => {

        setIdWonum(Number(e.value.wonum));

        const href = e.value.href;
        await axios({
            method: "GET",
            url: href,
            headers: {
                "maxauth": JSON.parse(localStorage.getItem('token')).token
            },
            params: {
                lean: 1
            }
        }).then(
            res => {
                if (res.status == '200') {

                    const reslt = res.data;
                    const id = e.value.wonum ;
                    const obj = {};
                    obj[id] = reslt;

                    let woData = JSON.parse(localStorage.getItem("WoNumData"));
                    if(woData){
                        const index = woData.find(item => Object.keys(item) == id);
                        if(!index){
                            localStorage.setItem("WoNumData",JSON.stringify([...woData, obj]))

                        }
                    }else{
                        localStorage.setItem("WoNumData",JSON.stringify([obj]))
                    }
                    



                    //console.log("avant");
                    settakeDataWo([...takeDataWo, reslt]);
                    

                }
            }
        ).catch(err => {
            const id = e.value.wonum;
            //console.log(id)
            let woDataId = JSON.parse(localStorage.getItem("WoNumData"));
            const index = woDataId.find(item => Object.keys(item) == id);
            //console.log("index")
            //console.log(index)
            
                //console.log(tableIndex[0]);
            if (index) {
                
                const tableIndex = Object.values(index)
                //console.log(tableIndex[0]);
                setDataWonum(tableIndex[0])
            }

            if (dataWonum) {
                history.push({
                    pathname: '/workorder',
                    state: {
                        data: dataWonum,
                        loading: true

                    }
                })
            } else {
                console.error(err);
                console.error("How to solve this erreuuurur !!!!!");

            }

        })

    }





    const header = (
        <div className="table-header">
            <Dropdown className="drop" value={tableName} options={tableDon} onChange={apiConsommer} optionLabel="name" filter showClear filterBy="name"
                placeholder="Select a Work Order" />
            List of Work Order

            <span id="p-input-span" className="p-input-icon-left ">
                <i className="pi pi-search" />
                <InputText id="p-input-my" type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Global Search" />
                {(isLoading) ? <ProgressSpinner className="retour" /> : null}
            </span>
            {/* <div className="retour"> { (isLoading) ? <ProgressSpinner/> : null}</div> */}




        </div>

    );


    const body = (<Column field="wonum" header="Number" filter filterPlaceholder="Search by number" />)
    const body1 = <Column field="description" filterField="description" header="Description" filter filterPlaceholder="Search by description" />
    const body2 = <Column field="location" header="Location" filter filterPlaceholder="Search by location" />;
    const erreur = <h1 className="errerr">Bad request 404</h1>
    const emptyTable = <h1 className="errerr">No Work Order Found</h1>
    // const erreur  = <Messages ref={msgs1} />
    // const erreur  = <Messages ref={msgs1} />

    return (
        <div className="datatable-filter-demo">
            {(!verifier) ? erreur : null}
            {(!empty) ? emptyTable : null}
            <div className="card">
                <DataTable ref={dt} value={tableOnline} paginator rows={10}
                    header={header} className="headd"
                    globalFilter={globalFilter} emptyMessage="No Work Order found." onSelectionChange={onSelected} selectionMode="single">

                    {body}
                    {body1}
                    {body2}

                </DataTable>
            </div>
        </div>
    );
}

export default DataTableFilterDemo;