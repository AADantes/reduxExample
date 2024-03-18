import { combineReducers} from 'redux';
import {libraryReducer} from './libraryReducers';

const reducers = combineReducers({
    allStudents:libraryReducer,

});

export default reducers;