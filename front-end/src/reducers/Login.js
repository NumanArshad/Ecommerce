import { Login_Action, Login_Status } from '../constants/Login';
const initialState = {
    login_Status: Login_Status.NEW
}
export default function (state = initialState, action) {
    switch (action.type) {
        case Login_Action.NEW:
            return { ...state, login_Status: Login_Status.NEW }
        default:
            return { ...state }
    }
}