import logo from './logo_sin_fondo.png';
import SwitchesScreen from './Switches';
import HostsScreen from './Hosts';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import './App.css';
function App() {
  return (
    <>
    <Router>
      <div id="head" className="d-flex justify-content-center shadow-sm">
      <img src={logo} alt="" className="img"/>
      {/*<Link to="/" className='elemento'><img src={logo} alt="" style={{"height":"55px"}}/></Link>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link to="/switches" className='nav-link'>Switches</Link>
            </li>
            <li class="nav-item active">
              <Link to="/hosts" className='nav-link'>Hosts</Link>
            </li>
          </ul>
        </div>*/}
      </div>
      <div className="mt-2 ms-2 mr-3">
        <SwitchesScreen/>
      </div>
        <Routes>
          <Route path='/switches' element={<SwitchesScreen/>} />
          <Route path='/hosts' element={<HostsScreen/>}/>
        </Routes>
    </Router>
    </>
  );
}

export default App;
