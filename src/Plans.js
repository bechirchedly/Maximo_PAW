import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from "react-router-dom";
import { DataTable } from 'primereact/datatable';
import { Checkbox } from 'primereact/checkbox';
import { Column } from 'primereact/column';
import './plans.css';
import axios from 'axios';
import './DataTableDemo.css';
import TableMenuPlans from './TableMenuPlans'


const Plans = () => {
    const location = useLocation();
    const [dataTable, setDataTable] = useState(null);
    
    const [selectedOrderActivity, setselectedOrderActivity] = useState(null);
    const [selected, setSelected] = useState(false);
    
    const [activityTable, setActivityTable] = useState(null)
    const tag = useRef(null);
    const [expandedRowsActivity, setExtendedRowsActivity] = useState(null);





    useEffect(() => {
        setDataTable(location.state.data.wplabor)
        setActivityTable(location.state.data.woactivity)


    }, [])


    
  
    const onRowTableAcitivity = async (e) => {


        setExtendedRowsActivity(e.data);


        const dataLocalRef = e.data;
        const long = (dataLocalRef.length) - 1;
        setselectedOrderActivity(dataLocalRef[long])


    }

    const rowExpansionTemplateActivity = () => {
        //console.log("selectedOrder")

        //console.log(selectedOrder)


        return (
            <div className="orders-subtable">
                <h5>Task Information</h5>
                <div className="container">
                    <div >

                        <table >

                            <tbody>


                                <tr>
                                    <th >Task:</th>
                                    <td><span className="underline--dotted champ">{selectedOrderActivity.taskid || "________"}</span></td>
                                    <td><span className="underline--dotted champ">{selectedOrderActivity.description || "____________________________________"}</span></td>
                                </tr>
                                <tr>
                                    <th >Sequence:</th>
                                    <td ><span className="underline--dotted champ">{selectedOrderActivity.wosequence || "________"}</span></td>

                                </tr>
                                <tr>
                                    <th >Status:</th>
                                    <td><span className="underline--dotted champ">{selectedOrderActivity.status || "________"}</span></td>


                                </tr>
                                <tr>
                                    <th >Classification:</th>
                                    <td ><span className="underline--dotted champ">{selectedOrderActivity.skilllevel || "________"}</span></td>

                                </tr>
                                <tr>
                                    <th >Classification Description:</th>
                                    <td ><span className="underline--dotted champ">{selectedOrderActivity.skilllevel || "________"}</span></td>

                                </tr>
                                <tr>
                                    <th >Inspection Form:</th>
                                    <td ><span className="underline--dotted champ">{selectedOrderActivity.inspformnum || "________"}</span></td>

                                </tr>
                                <tr>
                                    <th >Inspection Result:</th>
                                    <td ><span className="underline--dotted champ">{selectedOrderActivity.inspformnum || "________"}</span></td>

                                </tr>

                            </tbody>


                        </table>

                    </div>
                    <div >
                        <table >
                            <tbody>
                                <tr>
                                    <th >Under Flow Control?</th>
                                    <td><Checkbox disabled="true" checked={selectedOrderActivity.flowcontrolled}></Checkbox></td>


                                </tr>
                                <tr>
                                    <th >Flow Action:</th>
                                    <td><span className="underline--dotted champ">{selectedOrderActivity.flowaction || "__________________"}</span></td>


                                </tr>
                                <tr>
                                    <th >Suspend Flow Control?</th>
                                    <td><Checkbox disabled="true" checked={selectedOrderActivity.suspendflow}></Checkbox></td>


                                </tr>
                                <tr>
                                    <th >Flow Action Assist?</th>
                                    <td><Checkbox disabled="true" checked={selectedOrderActivity.flowactionassist}></Checkbox></td>


                                </tr>
                                <tr>
                                    <th >Launch Entry Name:</th>
                                    <td><span className="underline--dotted champ">{selectedOrderActivity.launchentryname || "__________________"}</span></td>


                                </tr>
                                <tr>
                                    <th >Interruptible?</th>
                                    <td><Checkbox disabled="true" checked={selectedOrderActivity.interruptible}></Checkbox></td>


                                </tr>
                                <tr>
                                    <th >Interruptible shift:</th>
                                    <td><span className="underline--dotted champ">{selectedOrderActivity.intshift || "__________________"}</span></td>


                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div >
                        <table >
                            <tbody>
                                <tr>
                                    <th >Attachement:</th>
                                    <td><span className="underline--dotted champ">{selectedOrderActivity.laborhrs || "________"}</span></td>


                                </tr>
                                <tr>
                                    <th >Inherit Status Changes?</th>
                                    <td><Checkbox disabled="true" checked={selectedOrderActivity.parentchgsstatus}></Checkbox></td>


                                </tr>
                                <tr>
                                    <th >Accepts Charges?</th>
                                    <td><Checkbox disabled="true" checked={selectedOrderActivity.woacceptscharges}></Checkbox></td>


                                </tr>
                                <tr>
                                    <th >Owner:</th>
                                    <td><span className="underline--dotted champ">{selectedOrderActivity.owner || "_______________"}</span></td>


                                </tr>
                                <tr>
                                    <th >Owner Group:</th>
                                    <td><span className="underline--dotted champ">{selectedOrderActivity.ownergroup || "_______________"}</span></td>
                                </tr>
                                <tr>
                                    <th >Crew Work Group::</th>
                                    <td><span className="underline--dotted champ">{selectedOrderActivity.crewworkgroup || "_______________"}</span></td>


                                </tr>
                                <tr>
                                    <th >Route:</th>
                                    <td><span className="underline--dotted champ">{selectedOrderActivity.route || "_______________"}</span></td>


                                </tr>
                                <tr>
                                    <th >Route Stop:</th>
                                    <td><span className="underline--dotted champ">{selectedOrderActivity.routestopid || "______________________"}</span></td>


                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <h5>Work Reference Information</h5>
                <div className="container">
                    <div >

                        <table >

                            <tbody>


                                <tr>
                                    <th >Reference WO:</th>
                                    <td><span className="underline--dotted champ">{selectedOrderActivity.wonum || "________"}</span></td>

                                </tr>
                                <tr>
                                    <th >Location:</th>
                                    <td ><span className="underline--dotted champ">{selectedOrderActivity.location || "________"}</span></td>
                                    <td><span className="underline--dotted champ">{selectedOrderActivity.description || "____________________________________"}</span></td>

                                </tr>
                                <tr>
                                    <th >Asset:</th>
                                    <td><span className="underline--dotted champ">{selectedOrderActivity.assetnum || "________"}</span></td>
                                    <td><span className="underline--dotted champ">{selectedOrderActivity.description || "____________________________________"}</span></td>

                                </tr>


                            </tbody>


                        </table>

                    </div>
                    <div >
                        <table >
                            <tbody>
                                <tr>
                                    <th >Service Group:</th>
                                    <td><span className="underline--dotted champ">{selectedOrderActivity.commoditygroup || "__________________"}</span></td>


                                </tr>
                                <tr>
                                    <th >Service:</th>
                                    <td><span className="underline--dotted champ">{selectedOrderActivity.commodity || "__________________"}</span></td>


                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <div >
                        <table >
                            <tbody>
                                <tr>
                                    <th >Observation:</th>
                                    <td><span className="underline--dotted champ">{selectedOrderActivity.observation || "________"}</span></td>


                                </tr>
                                <tr>
                                    <th >Inspector:</th>
                                    <td><span className="underline--dotted champ">{selectedOrderActivity.inspector || "________"}</span></td>


                                </tr>
                                <tr>
                                    <th >Measurement Point:</th>
                                    <td><span className="underline--dotted champ">{selectedOrderActivity.pointnum || "________"}</span></td>


                                </tr>
                                <tr>
                                    <th >Measurement Value:</th>
                                    <td><span className="underline--dotted champ">{selectedOrderActivity.measurementvalue || "_______________"}</span></td>


                                </tr>
                                <tr>
                                    <th >Measurement Date:</th>
                                    <td><span className="underline--dotted champ">{selectedOrderActivity.measuredate || "_______________"}</span></td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
                <h5>Work Reference Information</h5>
                <div className="container">
                    <div >

                        <table >

                            <tbody>


                                <tr>
                                    <th >Target Start:</th>
                                    <td><span className="underline--dotted champ">{selectedOrderActivity.targstartdate || "________"}</span></td>

                                </tr>
                                <tr>
                                    <th >Target Finish:</th>
                                    <td ><span className="underline--dotted champ">{selectedOrderActivity.targcompdate || "________"}</span></td>


                                </tr>
                                <tr>
                                    <th >Scheduled Start:</th>
                                    <td><span className="underline--dotted champ">{selectedOrderActivity.schedstart || "________"}</span></td>


                                </tr>
                                <tr>
                                    <th >Scheduled Finish:</th>
                                    <td><span className="underline--dotted champ">{selectedOrderActivity.schedfinish || "________"}</span></td>

                                </tr>
                                <tr>
                                    <th >Start No Earlier Than:</th>
                                    <td ><span className="underline--dotted champ">{selectedOrderActivity.sneconstraint || "________"}</span></td>


                                </tr>
                                <tr>
                                    <th >Finish No Later Than:</th>
                                    <td><span className="underline--dotted champ">{selectedOrderActivity.fnlconstraint || "________"}</span></td>


                                </tr>


                            </tbody>


                        </table>

                    </div>
                    <div >
                        <table >
                            <tbody>
                                <tr>
                                    <th >Actual Start:</th>
                                    <td><span className="underline--dotted champ">{selectedOrderActivity.actstart || "__________________"}</span></td>


                                </tr>
                                <tr>
                                    <th >Actual Finish:</th>
                                    <td><span className="underline--dotted champ">{selectedOrderActivity.actfinish || "__________________"}</span></td>


                                </tr>
                                <tr>
                                    <th >Estimated Duration:</th>
                                    <td><span className="underline--dotted champ">{selectedOrderActivity.estdur || "__________________"}</span></td>


                                </tr>
                                <tr>
                                    <th >Time Remaining:</th>
                                    <td><span className="underline--dotted champ">{selectedOrderActivity.remdur || "__________________"}</span></td>


                                </tr>
                                <tr>
                                    <th >Predecessors:</th>
                                    <td><span className="underline--dotted champ">{selectedOrderActivity.predessorwos || "__________________"}</span></td>


                                </tr>


                            </tbody>
                        </table>
                    </div>

                </div>

            </div>
        );
    }





    return (
        <div className="container">
            <div >

                <table >

                    <tbody>


                        <tr>
                            <th >Work Order:</th>
                            <td><span className="underline--dotted champ">{location.state.data.wonum || "________"}</span></td>
                            <td><span className="underline--dotted champ">{location.state.data.description || "____________________________"}</span></td>

                        </tr>
                        <tr>
                            <th >Parent WO</th>
                            <td ><span className="underline--dotted champ">{location.state.data.parent || "________"}</span></td>

                        </tr>

                    </tbody>


                </table>

            </div>
            <div >
                <table >
                    <tbody>
                        <tr>
                            <th >Site:</th>
                            <td><span className="underline--dotted champ">{location.state.data.siteid || "__________________"}</span></td>


                        </tr>
                    </tbody>
                </table>
            </div>
            <div >
                <table >
                    <tbody>
                        <tr>
                            <th >Status:</th>
                            <td><span className="underline--dotted champ">{location.state.data.status || "________"}</span></td>


                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="table1">
                <DataTable value={activityTable} paginator rows={5} expandedRows={expandedRowsActivity} onRowToggle={onRowTableAcitivity}
                    emptyMessage="No Work Order found." rowExpansionTemplate={rowExpansionTemplateActivity} >

                    <Column expander style={{ width: '3em' }} />
                    <Column field="wosequence" header="Squence" />
                    <Column field="taskid" header="Task" />
                    <Column field="description" header="Summary" />
                    <Column field="estdur" header="Estimation Duration" />
                    <Column field="status" header="Status" />
                    <Column field="owner" header="Owner" />
                    <Column field="ownergroup" header="Owner Groupe" />
                </DataTable>
            </div>
            <div className="table2">
            
               <TableMenuPlans />
            </div>


        </div>
    )
}

export default Plans
