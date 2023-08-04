import React from 'react';
import SwitchesSelect from './componentes/switchesSelect';
function SwitchesScreen(){
    return (
        <div className="bg-secondary">
            <h4>Seleccionar Switch</h4>
            <select className='form-select' style={{"width":"10%"}}>
                <option value="">Elegir...</option>
                <SwitchesSelect/>
            </select>
        </div>
    );
}

export default SwitchesScreen;