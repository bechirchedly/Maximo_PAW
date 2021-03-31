import React from 'react';
import { useLocation } from 'react-router-dom';
import './plans.css';
import TableMenuLog from './TableMenuLog';
import './plans.css'

function Log() {
    const location = useLocation();





    return (
        <div className='container'>
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
            <TableMenuLog/>
            </div>



        </div>
    )
}

export default Log





