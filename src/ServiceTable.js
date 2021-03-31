import React ,{useState} from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Checkbox } from 'primereact/checkbox';

const ServiceTable = (props) => {

    const [expandedRows, setExpandedRows] = useState(null);
    const [selectedOrder, setselectedOrder] = useState(null);

    const rowExpansionTemplate = () => {
        console.log("selectedOrder")

        console.log(selectedOrder)

        return (
            <div className="orders-subtable">
                <h5>Details</h5>
                <div className="container">
                    <div >

                        <table >

                            <tbody>


                                <tr>
                                    <th >Task:</th>
                                    <td><span className="underline--dotted champ">{selectedOrder.taskid || "________"}</span></td>


                                </tr>
                                <tr>
                                    <th >Crew Work Group:</th>
                                    <td ><span className="underline--dotted champ">{selectedOrder.crewworkgroup || "________"}</span></td>

                                </tr>
                                <tr>
                                    <th >Craft:</th>
                                    <td><span className="underline--dotted champ">{selectedOrder.craft || "________"}</span></td>


                                </tr>
                                <tr>
                                    <th >Skill Level</th>
                                    <td ><span className="underline--dotted champ">{selectedOrder.skilllevel || "________"}</span></td>

                                </tr>

                            </tbody>


                        </table>

                    </div>
                    <div >
                        <table >
                            <tbody>
                                <tr>
                                    <th >Vendor:</th>
                                    <td><span className="underline--dotted champ">{selectedOrder.vendor || "__________________"}</span></td>


                                </tr>
                                <tr>
                                    <th >Labor Contract:</th>
                                    <td><span className="underline--dotted champ">{selectedOrder.contratnum || "__________________"}</span></td>


                                </tr>
                                <tr>
                                    <th >Quantity:</th>
                                    <td><span className="underline--dotted champ">{selectedOrder.quantity || "__________________"}</span></td>


                                </tr>
                                <tr>
                                    <th >Crew:</th>
                                    <td><span className="underline--dotted champ">{selectedOrder.amcrew || "__________________"}</span></td>


                                </tr>
                                <tr>
                                    <th >Labor:</th>
                                    <td><span className="underline--dotted champ">{selectedOrder.laborcode || "__________________"}</span></td>


                                </tr>
                                <tr>
                                    <th >Outside?</th>
                                    <td><Checkbox disabled="true" checked={selectedOrder.outside}></Checkbox></td>


                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div >
                        <table >
                            <tbody>
                                <tr>
                                    <th >Regular Hours:</th>
                                    <td><span className="underline--dotted champ">{selectedOrder.laborhrs || "________"}</span></td>


                                </tr>
                                <tr>
                                    <th >Rate:</th>
                                    <td><span className="underline--dotted champ">{selectedOrder.rate || "________"}</span></td>


                                </tr>
                                <tr>
                                    <th >Line Cost:</th>
                                    <td><span className="underline--dotted champ">{selectedOrder.linecost || "________"}</span></td>


                                </tr>
                                <tr>
                                    <th >Rate Changed ?</th>
                                    <td><Checkbox disabled="true" checked={selectedOrder.ratehaschanged}></Checkbox></td>


                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        );
    }
    const onRowTable = async (e) => {

        setExpandedRows(e.data);
        const dataLocalRef = e.data;
        const long = (dataLocalRef.length) - 1;
        setselectedOrder(dataLocalRef[long])


    }
    return (
        <>
        <DataTable className="p-rowgroup-header" value={props.dataTable} paginator rows={5} expandedRows={props.expandedRows} onRowToggle={props.onRowTable}
                    emptyMessage="There are no rows to display." rowExpansionTemplate={props.rowExpansionTemplate} >

                    <Column expander style={{ width: '3em' }} />
                    <Column field="taskid" header="Task" />
                    <Column field="amcrewtype" header="Service" />
                    <Column field="craft" header="Description" />
                    <Column field="skilllevel" header="Quantity" />
                    <Column field="vendor" header="Unit Cost" />
                    <Column field="quantity" header="Line Cost" />
                </DataTable>
            
        </>
    )
}

export default ServiceTable