import  React , { useState } from 'react';
import TableMenu from './TableMenu';
import { useLocation } from "react-router-dom";
import './details.css';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';


const Details = () => {

    
    const location = useLocation();
    const tableOfData = location.state.data;
    //const index = tableOfData.forEach((item)=>{if(item.wonum == location.state.id){return (tableOfData.indexOf(item))}});
    const preFix = tableOfData;
    
    const checkedBtn = <Checkbox disabled={true} checked={true}></Checkbox>;
    const noCheckedBtn = <Checkbox disabled={true} checked={false} ></Checkbox>;

    const timeStatus = preFix.statusdate;
    const numOverTime = timeStatus.indexOf('+');
    const newtime = timeStatus.slice(0, numOverTime);
    





    return (

        <div>

            {/* <div className="container full-width"> */}
            <div className="container1">
                <div >

                    <table >

                        <tbody>


                            <tr>
                                <th >Work Order:</th>
                                <td><span className="underline--dotted champ">{preFix.wonum|| "________"}</span></td>
                                <td><span className="underline--dotted champ">{preFix.description || "____________________________"}</span></td>

                            </tr>
                            <tr>
                                <th >Location:</th>
                                <td><span className="underline--dotted champ">{preFix.location|| "________"}</span></td>
                                {preFix.locations?<td><span className="underline--dotted champ">{preFix.locations[0].description || "________"}</span></td>:null}

                            </tr>
                            <tr>
                                <th >Asset:</th>
                                <td ><span className="underline--dotted champ">{preFix.assetnum || "________"}</span></td>
                                <td><span className="underline--dotted champ">{preFix.assetnum || "_________________________________________"}</span></td>
                            </tr>
                            <tr>
                                <th >Configuration Item:</th>
                                <td><span className="underline--dotted champ">{preFix.cinum || "________"}</span></td>
                                <td><span className="underline--dotted champ">{preFix.assetnum || "_________________________________________"}</span></td>

                            </tr>
                            <tr>
                                <th >Parent WO</th>
                                <td ><span className="underline--dotted champ">{preFix.parent || "________"}</span></td>

                            </tr>
                            <tr>
                                <th >Classifiation</th>
                                <td><span className="underline--dotted champ">{preFix.launchentryname || "_________________________"}</span></td>

                            </tr>
                            <tr>
                                <th >Class Description</th>
                                <td ><span className="underline--dotted champ">{preFix.launchentryname || "_________________________"}</span></td>

                            </tr>
                            <tr>
                                <th >Launch Entry Name</th>
                                <td ><span className="underline--dotted champ">{preFix.launchentryname || "__________________________"}</span></td>

                            </tr>
                        </tbody>


                    </table>

                </div>
                <div >
                    <table >
                        <tbody>
                            <tr>
                                <th >Site:</th>
                                <td><span className="underline--dotted champ">{preFix.siteid || "__________________"}</span></td>


                            </tr>
                            <tr>
                                <th >Class:</th>
                                <td><span className="underline--dotted champ">{preFix.woclass || "__________________"}</span></td>


                            </tr>
                            <tr>
                                <th >Work Type:</th>
                                <td ><span className="underline--dotted champ">{preFix.worktype || "__________________"}</span></td>

                            </tr>
                            <tr>
                                <th >GL Account:</th>
                                <td><span className="underline--dotted champ">{preFix.glaccount || "__________________"}</span></td>


                            </tr>
                            <tr>
                                <th >Failure Class:</th>
                                <td ><span className="underline--dotted champ">{preFix.failurecode || "__________________"}</span></td>

                            </tr>
                            <tr>
                                <th >Problem Code</th>
                                <td><span className="underline--dotted champ">{preFix.problemcode || "__________________"}</span></td>

                            </tr>
                            <tr>
                                <th >Storeroom Material Status:</th>
                                <td ><span className="underline--dotted champ">{preFix.storeroommtstatus || "__________________"}</span></td>

                            </tr>
                            <tr>
                                <th >Direct Issue Material Status:</th>
                                <td ><span className="underline--dotted champ">{preFix.dirissuemtlstatus || "__________________"}</span></td>

                            </tr>
                            <tr>
                                <th >Work Package Material Status:</th>
                                <td ><span className="underline--dotted champ">{preFix.workpackmtlstatus || "__________________"}</span></td>

                            </tr>
                            <tr>
                                <th >Material Status Last Updated:</th>
                                <td ><span className="underline--dotted champ">{preFix.availstatusdate || "__________________"}</span></td>

                            </tr>

                        </tbody>
                    </table>

                </div>
                <div >
                    <table >
                        <tbody>
                            <tr>
                                <th ><a>Attachments</a></th>
                                <td><span className="underline--dotted champ"></span></td>


                            </tr>
                            <tr>
                                <th >Status:</th>
                                <td><span className="underline--dotted champ">{preFix.status|| "________"}</span></td>


                            </tr>
                            <tr>
                                <th >Status Date:</th>
                                <td ><span className="underline--dotted champ">{newtime}</span></td>

                            </tr>
                            <tr>
                                <th >Inherit Status Changes?</th>
                                <td>{(preFix.parentchgsstatus) ? checkedBtn : noCheckedBtn}</td>


                            </tr>
                            <tr>
                                <th >Accepts Charges?</th>
                                <td >{(preFix.woacceptscharges) ? checkedBtn : noCheckedBtn}</td>

                            </tr>
                            <tr>
                                <th >Is Task?</th>
                                <td>{(preFix.istask) ? checkedBtn : noCheckedBtn}</td>

                            </tr>
                            <tr>
                                <th >Under Flow Control?</th>
                                <td >{(preFix.flowcontrolled) ? checkedBtn : noCheckedBtn}</td>

                            </tr>
                            <tr>
                                <th >Suspend Flow Control?</th>
                                <td >{(preFix.suspendflow) ? checkedBtn : noCheckedBtn}</td>

                            </tr>
                            <tr>
                                <th >Flow Action:</th>
                                <td ><span className="underline--dotted champ">{preFix.flowaction || "____________________"}</span></td>

                            </tr>
                            <tr>
                                <th >Flow action Assist?</th>
                                <td >{(preFix.suspendflow) ? checkedBtn : noCheckedBtn}</td>

                            </tr>

                        </tbody>
                    </table>
                </div>

            </div>
            <div className="container2" >
            <div className="div1">
                    <table >
                        <tbody>
                            <tr>
                                <th >Job Plan:</th>
                                <td><span className="underline--dotted champ">{preFix.jpnum|| "________"}</span></td>


                            </tr>
                            <tr>
                                <th >Job Plan Revision #:</th>
                                <td><span className="underline--dotted champ">{preFix.pluscjprevnum|| "________"}</span></td>


                            </tr>
                            <tr>
                                <th >PM:</th>
                                <td ><span className="underline--dotted champ">{preFix.pmnum|| "________"}</span></td>

                            </tr>
                            <tr>
                                <th >Safety Plan:</th>
                                <td><span className="underline--dotted champ">{preFix.safetyplanid|| "________"}</span></td>


                            </tr>
                            <tr>
                                <th >Contract:</th>
                                <td ><span className="underline--dotted champ">{preFix.contact|| "________"}</span></td>

                            </tr>
                            <tr>
                                <th >Inspection Form:</th>
                                <td><span className="underline--dotted champ">{preFix.inspformnum|| "________"}</span></td>
                                <td><span className="underline--dotted champ">{preFix.inspectionform|| "_______________________________________________"}</span></td>

                            </tr>
                            <tr>
                                <th >Inspection Result:</th>
                                <td ><span className="underline--dotted champ">{preFix.resultnum|| "________"}</span></td>

                            </tr>
                            

                        </tbody>
                    </table>
                </div>
                <div className="div2">
                    <table >
                        <tbody>
                            
                            <tr>
                                <th >Asset up?</th>
                                {/* <td>{(preFix.asset[0].isrunning) ? checkedBtn : noCheckedBtn}</td> */}


                            </tr>
                            <tr>
                                <th >Warranties Exist?</th>
                                <td >{(preFix.warrantyexist) ? checkedBtn : noCheckedBtn}</td>

                            </tr>
                            <tr>
                                <th >SLA Applied?</th>
                                <td>{(preFix.slaapplied) ? checkedBtn : noCheckedBtn}</td>

                            </tr>
                            <tr>
                                <th >Charge to Store?</th>
                                <td >{(preFix.chargestore) ? checkedBtn : noCheckedBtn}</td>

                            </tr>
                            <tr>
                                <th >Current Value:</th>
                                <td ><span className="underline--dotted champ">{preFix.currentvalue|| "_________________"}</span></td>

                            </tr>
                            

                        </tbody>
                    </table>
                </div>
                <div className="div3">
                    <table >
                        
                        <tbody>
                            <tr>
                                <th >Asset/Location Priority:</th>
                                <td><span className="underline--dotted champ">{preFix.assetlocpriority|| "___________________"}</span></td>


                            </tr>
                            <tr>
                                <th >Priority:</th>
                                <td><span className="underline--dotted champ">{preFix.wopriority|| "___________________"}</span></td>


                            </tr>
                            <tr>
                                <th >Priority Justification:</th>
                                <td ><span className="underline--dotted champ">{preFix.justifypriority|| "_______________________________________________"}</span></td>

                            </tr>
                            <tr>
                                <th >Risk Assessment:</th>
                                <td><span className="underline--dotted champ">{preFix.risk|| "___________________"}</span></td>


                            </tr>
                        
                            

                        </tbody>
                    </table>
                </div>
                
            </div>
            <div className="container1">
                
                <div className="div2">
                    <table >
                        <tbody>
                            <tr>
                                <th >Service Address:</th>
                                <td><span className="underline--dotted champ">{preFix.siteid || "__________"}</span></td>
                                <td><span className="underline--dotted champ">{preFix.siteid || "_____________________________________"}</span></td>


                            </tr>
                            <tr>
                                <th >Formatted Address:</th>
                                <td><span className="underline--dotted champ">{preFix.woclass || "__________________________________"}</span></td>


                            </tr>
                            <tr>
                                <th >Street Address:</th>
                                <td ><span className="underline--dotted champ">{preFix.worktype || "___________________________"}</span></td>

                            </tr>
                            

                        </tbody>
                    </table>

                </div>
                <div className="div3">
                    <table >
                        <tbody>
                            <tr>
                                <th >City:</th>
                                <td><span className="underline--dotted champ"></span></td>


                            </tr>
                            <tr>
                                <th >State/Province:</th>
                                <td><span className="underline--dotted champ">{preFix.status|| "________"}</span></td>
                                <td><span className="underline--dotted champ">{preFix.status|| "________________________________________"}</span></td>


                            </tr>
                            

                        </tbody>
                    </table>
                </div>

            </div>
        </div>


        //</div>
    )


}

export default Details;