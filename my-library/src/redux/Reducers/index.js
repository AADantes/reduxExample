import {combineReducers} from 'redux';
import {LibraryReducers,selectedstudentreducer} from './LibraryReducers';
import {BookReducers} from './BookReducers';


const reducers = combineReducers({
    allStudents:LibraryReducers,
    allBooks:BookReducers,
    singlestudent:selectedstudentreducer

})

export default reducers;