import { combineReducers } from 'redux';
import authReducer from './auth';
import productReducer from './products';

const rootReducer = combineReducers({
    authReducer,
    productReducer
});
export default rootReducer;