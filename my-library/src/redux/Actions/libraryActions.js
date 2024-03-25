import { ActionTypes } from "../Constants/Action-types";

export const setStudent = (students) => {
    return{
        
        type: ActionTypes.SET_STUDENTS,
        payload: students,

};

}

export const setSelectedStudent = (students) => {
    return{
        
        type: ActionTypes.SELECTED_STUDENT,
        payload: students,
    }
}