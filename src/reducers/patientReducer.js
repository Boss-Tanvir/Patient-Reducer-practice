export let initialState = {
    patients : []
}

export let patientReducer = (state, action) => {
    switch(action.type){
        case 'ADD_PATIENT':
            let newPatient = {
                id : action.id,
                name : action.name
            }
            let allPatient = [...state.patients, newPatient]
            return {patients : allPatient};
        case 'REMOVE_PATIENT':
            let removePatient = state.patients.filter(pt => pt.id !== action.id)
            let newState = {patients : removePatient}
            return newState;
        default :
            return state    
    }
}