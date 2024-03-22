
import{ActionTypes} from "../Constants/Action-types";

import React from 'react'

const initialState ={
    students: [
        {
            id: 1,
            lastname: 'Ponce',
            firstname:'Lhance'
        },

    ],

    books: [
        {
            id: 1,
            bookname: 'One Piece',
            description: 'Shonen',
            status: 'AVAILABLE'
        }
    ]
}

export const LibraryReducers = (state=initialState, {type,payload}) => {
 switch (type) {
    case ActionTypes.SET_STUDENTS:
        return (state, payload);

    default:
        return state;
  }
}
