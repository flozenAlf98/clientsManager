import modalReducer from './modal';
import usersReducer from './users';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    modal: modalReducer,
    users: usersReducer,
});

export default allReducers;