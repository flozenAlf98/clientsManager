import modalReducer from './modal';
import usersReducer from './users';
import filtersReducer from './filtersReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    modal: modalReducer,
    users: usersReducer,
    filters: filtersReducer,
});

export default allReducers;