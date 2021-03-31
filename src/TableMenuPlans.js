import React, {useState , useEffect} from 'react';
import { useLocation } from "react-router-dom";
import { TabMenu } from 'primereact/tabmenu';
import 'primereact/resources/themes/saga-blue/theme.css';
import LaborTable from './LaborTable';
import MaterialTable from './MaterialTable';
import ServiceTable from './ServiceTable';
import ToolsTable from './ToolsTable';


const TableMenuPlans = (props) => {

    const location = useLocation();
    const [dataTable, setDataTable] = useState(null);

    useEffect(() => {
        setDataTable(location.state.data.wplabor)
        


    }, [])

    const items = [
        {label: 'Labor', icon: 'pi pi-briefcase'},
        {label: 'Materials', icon: 'pi pi-fw pi-info-circle'},
        {label: 'Services', icon: 'pi pi-fw pi-phone'},
        {label: 'Tools', icon: 'pi pi-fw pi-pencil'},
        
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
                    case 'Labor':
                        return <LaborTable dataTable={dataTable} />
                    case 'Materials':
                        return <MaterialTable/>
                    case 'Services':
                        return <ServiceTable/>
                    case 'Tools':
                        return <ToolsTable />
                    default:
                        return <LaborTable dataTable={dataTable} />

                }

            })()}
        </div>
    );
}

export default TableMenuPlans;