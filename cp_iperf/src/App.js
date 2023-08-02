import logo from './logo_sin_fondo.png';
import SwitchesScreen from './Switches';
import HostsScreen from './Hosts';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
function App() {
  return (
    <>
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light" style={{"background-color":"#cccc"}}>
      <img src={logo} alt="" style={{"height":"60px","margin-right":"1%"}}/>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link to="/switches" className='nav-link'>Switches</Link>
            </li>
            <li class="nav-item active">
              <Link to="/hosts" className='nav-link'>Hosts</Link>
            </li>
          </ul>
        </div>
      </nav>
        <Routes>
          <Route path='/switches' element={<SwitchesScreen/>} />
          <Route path='/hosts' element={<HostsScreen/>}/>
        </Routes>
    </Router>
    </>
  );
}

export default App;
