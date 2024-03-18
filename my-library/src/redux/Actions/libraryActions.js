import { ActionTypes } from "../Constants/action-types";

export const setStudent = (students) => {
    return{
        
        type: ActionTypes.SET_STUDENTS,
        payload: students,

};
}