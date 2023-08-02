import Enrutador from './componentes/router';
import logo from './logo_sin_fondo.png';

function App() {
  return (
    <>
      <div className="text-center" style={{"height":"80px","background-color":"#cccc"}}>
        <img src={logo} alt="" style={{"height":"100%"}}/>
      </div>
      <div className='d-flex flex-row'>
        <Enrutador/>
      </div>
    </>
  );
}

export default App;
