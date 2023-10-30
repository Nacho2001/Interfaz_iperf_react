import React from 'react';
import SwitchesSelect from './componentes/switchesSelect';
function SwitchesScreen(){
    return (
        <div>
            <h4>Seleccionar Switch</h4>
            <select className='form-select' style={{"max-width":"170px"}}>
                <option value="">Elegir...</option>
                <SwitchesSelect/>
            </select>
        </div>
    );
}

export default SwitchesScreen;