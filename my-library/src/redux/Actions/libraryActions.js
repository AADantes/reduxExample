import { ActionTypes } from "../Constants/Action-types";

export const setStudent = (students) => {
    return{
        
        type: ActionTypes.SET_STUDENTS,
        payload: students,

};

<<<<<<< HEAD
}

export const setSelectedStudent = (students) => {
    return{
        
        type: ActionTypes.SELECTED_STUDENT,
        payload: students,
    }
=======
>>>>>>> a1b2ae6c45532b58059aa36070d9b51575ed36f8
}