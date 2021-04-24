import React, { useReducer, useRef } from 'react';
import { initialState, patientReducer } from '../../reducers/patientReducer';


const PatientManagement = () => {
    let nameRef = useRef()
    const [state, dispatch] = useReducer(patientReducer, initialState)
    

    let handleSubmit = e => {
        e.preventDefault()
        dispatch({
            type: 'ADD_PATIENT',
            name : nameRef.current.value,
            id : state.patients.length
        })
        nameRef.current.value = ''
    }

    console.log(state, dispatch);

    return (
        <div>
          <h1>Patient Management : {state.patients.length}</h1>
        <form onSubmit={handleSubmit}>
            <input ref={nameRef}/>
            {
                state.patients.map(pt  =>  <li key={pt.id} 
                
                    onClick={() => dispatch({
                        type : 'REMOVE_PATIENT',
                        id : pt.id
                    })}
                
                >{pt.name}</li>)
            }
        </form>

        </div>
    );
};

export default PatientManagement;