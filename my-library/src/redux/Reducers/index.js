import {combineReducers} from 'redux';
import {LibraryReducers} from './LibraryReducers';
import {BookReducers} from './BookReducers';

const reducers = combineReducers({
    allStudents:LibraryReducers,
    allBooks:BookReducers,

})

export default reducers;