import {ALL_CATEGORIIES} from "../../utils/types"

const initialState={
    categories:[]
}
export default function (state=initialState,action){
    switch(action.type){
        case ALL_CATEGORIIES:
            return {...state,categories:action.payload}
        default:
            return state
    }
}