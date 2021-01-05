import { combineReducers } from 'redux';
import { eventReducer } from '../modules/Event/reducer';

const appReducer = combineReducers({
    events: eventReducer,
});

export const rootReducer = (state, action) => {
    return appReducer(state, action);
};
