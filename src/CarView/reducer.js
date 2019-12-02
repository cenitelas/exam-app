import {CAR_SHOW_SUCCESS,SHOW_COMMENTS_SUCCESS,CLEAR_CAR,CLEAR_COMMENTS} from "./action";
const prevState = {
    car:{},
    comments:[]
}

export const car = (state=prevState.car,action)=>{
    switch(action.type){
        case CAR_SHOW_SUCCESS:
            return action.obj;
        case CLEAR_CAR:
            return action.obj;
        default:
            return state;
    }
}

export const comments = (state=prevState.comments,action)=>{
    switch(action.type){
        case SHOW_COMMENTS_SUCCESS:
            return action.obj;
        case CLEAR_COMMENTS:
            return action.obj;
        default:
            return state;
    }
}