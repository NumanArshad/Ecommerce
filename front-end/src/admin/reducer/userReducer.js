import {ALL_USERS} from "../../utils/types"

const initialState={
    users:[]
}
export default function (state=initialState,action){
    switch(action.type){
        case ALL_USERS:
            return {...state,users:action.payload}
        default:
            return state
    }
}