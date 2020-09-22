import { AUTH_SUCCESS } from "../utils/types";
import { decodeJwt } from "../actions/auth";
const initialState = {
  user: decodeJwt(localStorage.getItem("token")) || {},
  isAuthenticated: !!localStorage.getItem("token")
};
export default function(state = initialState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return { ...state, isAuthenticated: true, user: action.payload };
    default:
      return { ...state };
  }
}
