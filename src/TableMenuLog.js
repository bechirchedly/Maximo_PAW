import React, {useState , useEffect} from 'react';
import { useLocation } from "react-router-dom";
import { TabMenu } from 'primereact/tabmenu';
import 'primereact/resources/themes/saga-blue/theme.css';
import CommunicationLog from './CommunicationLog';
import WorkLog from './WorkLog';


const TableMenuLog = (props) => {

    const location = useLocation();
    const [dataTable, setDataTable] = useState(null);

    useEffect(() => {
        setDataTable(location.state.data.wplabor)
        


    }, [])

    const items = [
        {label: 'Work Log', icon: 'pi pi-briefcase'},
        {label: 'Communication Log', icon: 'pi pi-fw pi-phone'},

        
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
                    case 'Work Log':
                        return <WorkLog dataTable={dataTable} />
                    case 'Communication Log':
                        return <CommunicationLog/>
                    default:
                        return <WorkLog dataTable={dataTable} />

                }

            })()}
        </div>
    );
}

export default TableMenuLog;