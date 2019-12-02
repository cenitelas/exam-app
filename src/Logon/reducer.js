import {LOGON_SUCCESS, ERROR_SUCCESS, EXIT_SUCCESS,ERROR_CLEAR} from "./action";
const prevState = {
    user:{},
    error:""
}

export const user = (state=prevState.user,action)=>{
    switch(action.type){
        case LOGON_SUCCESS:
            return action.obj;
        case EXIT_SUCCESS:
            return action.obj;
        default:
            return state;
    }
}

export const error = (state=prevState.error,action)=>{
    switch(action.type){
        case ERROR_SUCCESS:
            return action.obj;
        case ERROR_CLEAR:
            return action.obj
        default:
            return state;
    }
}