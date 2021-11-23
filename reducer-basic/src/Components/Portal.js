import React, { useReducer, useState } from 'react';
import { portalReducer } from '../Reducers/portalReducer';
import { portalState } from '../Store/portalStore';

const Portal = () => {
    const [state, dispatch] = useReducer(portalReducer, portalState)
    const [name, setName] = useState('');
    return (
        <div>
            <h2>A PORTAL A GREAT TOWNPORTAL </h2>
            <h3>Has patients: {state.patients.length}</h3>
            <input type="tet" onChange={e => setName(e.target.value)} />
            <button onClick={() => dispatch({ type: 'ADD_PATIENT', name: name })}>Add</button>
            <br />
            <h3>-------------------------------</h3>
            {
                state.patients.map(patient => <p key={patient.id}>
                    {patient.name}
                    <button onClick={() => dispatch({ type: 'REMOVE_PATIENT', id: patient.id })}>Del</button>
                </p>)
            }
        </div>
    );
};

export default Portal;