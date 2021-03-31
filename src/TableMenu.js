import React, {useState, useEffect} from 'react';
import { TabMenu } from 'primereact/tabmenu';
import {Button} from 'primereact/button';
import 'primereact/resources/themes/saga-blue/theme.css';
import { Switch } from 'react-router';
import Details from './Details';
import Plans from './Plans';
import Log from './Log';
import Actuals from './Actuals';
import { useHistory, useLocation } from "react-router-dom";

const TableMenu = (props) => {

    const history = useHistory();

    const items = [
        {label: 'Back', icon: 'pi pi-fw pi-caret-left'},
        {label: 'Work Order', icon: 'pi pi-fw pi-home'},
        {label: 'Plans', icon: 'pi pi-fw pi-calendar'},
        {label: 'Actuals', icon: 'pi pi-fw pi-pencil'},
        {label: 'Log', icon: 'pi pi-fw pi-file'},
        
    ];
    const [selectMenu,setSelectMenu] = useState('');
    const [activedItem, setactivedItem] = useState(null);

    const handelChange = (e) => {
        setactivedItem(e.value);
        setSelectMenu(e.value.label); 
    }



   

    return (
        <div>
            <div className="card">
                <TabMenu model={items} activeItem={activedItem} onTabChange={handelChange} />
            </div>
            {(() =>{
                switch(selectMenu){
                    case 'Work Order':
                        return <Details/>
                    case 'Plans':
                        return <Plans/>
                    case 'Actuals':
                        return <Actuals/>
                    case 'Log':
                        return <Log/>
                    case 'Back':
                        {
                            let collection = localStorage.getItem("WoNumData");
                            const coll = JSON.parse(collection);
                        history.push({pathname:'/test'},{state:{dataLocale : coll}})
                        }
                    
                     
                    default:
                        return <Details/>

                }

            })()}
        </div>
    );
}

export default TableMenu;