
import{ActionTypes} from "../Constants/Action-types";

import React from 'react'

const initialState ={
    students: [
        {
            id: 1,
            lastname: 'Ponce',
            firstname:'Lhance',
            status:'Active'
        },

    ]

 
}
    const singlestudentinitialize ={
        id: '',
        lastname:'',
        firstname:'',
        status:'Active'
    }
    
export const LibraryReducers = (state=initialState, {type,payload}) => {
 switch (type) {
    case ActionTypes.SET_STUDENTS:
        return {...state,students:payload};

    default:
        return state;
    
  }
}


    export const selectedstudentreducer=(state=singlestudentinitialize,{type,payload})=>{
        switch (type) {
            case ActionTypes.SELECTED_STUDENT:
                return {...state,...payload};
        
            default:
                return state;
    }
    }