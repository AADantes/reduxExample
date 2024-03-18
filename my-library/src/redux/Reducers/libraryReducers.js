import { ActionTypes } from "../Constants/action-types";

const initialState = {
students:[ 

    {
        id:1,
        lastname:'Dantes',
        firstname:'Allan'
    },

    {
        id:2,
        lastname:'Cruz',
        firstname:'Jerwin'
    }

]

}

export const libraryReducer = (state=initialState, {type,payload}) =>
{
    switch (type){
        case ActionTypes.SET_STUDENTS:
        return {...state,students:payload};
        default:
        return state;
    }
}