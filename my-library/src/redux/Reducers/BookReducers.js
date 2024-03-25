
import{ActionTypes} from "../Constants/Action-types";

import React from 'react'

const initialState ={
    books: [
        {
            id: 1,
            bookname: 'Ponce',
            genrename:'Lhance',
            status:'sadf'
        },

    ]

 
}

export const BookReducers = (state=initialState, {type,payload}) => {
 switch (type) {
    case ActionTypes.SET_BOOKS:
        return {...state,books:payload};

    default:
        return state;
  }
}