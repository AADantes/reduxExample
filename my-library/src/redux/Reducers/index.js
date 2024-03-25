import {combineReducers} from 'redux';
<<<<<<< HEAD
import {LibraryReducers,selectedstudentreducer} from './LibraryReducers';
import {BookReducers} from './BookReducers';

=======
import {LibraryReducers} from './LibraryReducers';
import {BookReducers} from './BookReducers';
>>>>>>> a1b2ae6c45532b58059aa36070d9b51575ed36f8

const reducers = combineReducers({
    allStudents:LibraryReducers,
    allBooks:BookReducers,
<<<<<<< HEAD
    singlestudent:selectedstudentreducer
=======
>>>>>>> a1b2ae6c45532b58059aa36070d9b51575ed36f8

})

export default reducers;