import {ALL_PRODUCTS} from "../utils/types"
const intial_state={
    products:[]
}

export default function(state=intial_state,action){
    
    switch(action.type){
        case ALL_PRODUCTS:
         //   alert(JSON.stringify(action))
            return {...state,products:action.payload}
        default:
            return state
    }
}