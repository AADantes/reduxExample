
import{ActionTypes} from "../Constants/Action-types";

import React from 'react'

const initialState ={
    students: [
        {
            id: 1,
            lastname: 'Ponce',
            firstname:'Lhance'
        },

    ]

 
}

export const LibraryReducers = (state=initialState, {type,payload}) => {
 switch (type) {
    case ActionTypes.SET_STUDENTS:
        return {...state,students:payload};

    default:
        return state;
  }
}
