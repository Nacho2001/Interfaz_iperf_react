import React from 'react';
import SwitchesScreen from '../Switches';
import HostsScreen from '../Hosts';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
function Enrutador(){
    return (
        <>
        <Router>
            <div className='bg-warning' style={{"width":"20%"}}>
                <div className='offcanvas-header'>
                    <h5>Menú</h5>
                </div>
                <div className="offcanvas-body">
                    <ul>
                        <li><Link to="/switches" className='link-primary'>Switches</Link></li>
                        <li><Link to="/hosts" className='link-primary'>Hosts</Link></li>
                    </ul>
                </div>        
            </div>
            <Routes>
                <Route path="/switches" element={<SwitchesScreen/>}/>
                <Route path="/hosts" element={<HostsScreen/>}/>
            </Routes>
        </Router>
        </>
    )
}

export default Enrutador;