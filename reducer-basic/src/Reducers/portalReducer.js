export const portalReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_PATIENT':
            const patient = {
                name: action.name,
                id: action.name + (state.patients.length + 1)
            }
            const newPatients = [...state.patients, patient]
            return {
                ...state,
                patients: newPatients
            }
            break;
        case 'REMOVE_PATIENT':
            const removePatient = state.patients.filter(patient => patient.id !== action.id);
            console.log(action);
            return {
                ...state,
                patients: removePatient
            }

        default:
            return state;
            break;
    }
}