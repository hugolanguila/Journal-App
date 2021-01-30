import { createStore, combineReducers } from 'redux';
import { authReducer } from './../reducers/authReducer';

const reducers = combineReducers({
	auth: authReducer
});

export const store = createStore( 
	reducers 
	//window.__REDUX_DEVTOOLS__ && window.__REDUX_DEVTOOLS__()
); 
