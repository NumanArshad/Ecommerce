import { combineReducers } from 'redux';
import authReducer from './auth';
import productReducer from './products';
import loadingReducer from "./loadingReducer"
import categoryReducer from "../admin/reducer/categoryReducer"
import userReducer from "../admin/reducer/userReducer"
const rootReducer = combineReducers({
    authReducer,
    productReducer,
    categoryReducer,userReducer,
    loadingReducer
});
export default rootReducer;