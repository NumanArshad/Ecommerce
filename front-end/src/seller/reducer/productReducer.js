import {ALL_PRODUCTS} from "../../utils/types"

const initialState={
    products:[]
}
export default function (state=initialState,action){
    switch(action.type){
        case ALL_PRODUCTS:
            return {...state,products:action.payload}
        default:
            return state
    }
}