import { ActionTypes } from "../Constants/Action-types";

export const setBooks = (books) => {
    return{
        
        type: ActionTypes.SET_BOOKS,
        payload: books,

};

}