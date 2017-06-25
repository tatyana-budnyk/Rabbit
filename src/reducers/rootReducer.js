import {combineReducers} from 'redux';
import {rabbitReducer} from './rabbitReducer';
import {addHunter} from './addHunter';

export const rootReducer = combineReducers({
    rabbitReducer,
    addHunter
});

