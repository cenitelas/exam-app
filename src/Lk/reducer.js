import {USER_PRODUCTS,GET_USER_FAVORITE} from "./action";
const prevState = {
    userProducts:[],
    favorites:[]
}

export const userProducts = (state=prevState.userProducts,action)=>{
    switch(action.type){
        case USER_PRODUCTS:
            return action.obj;
        default:
            return state;
    }
}

export const favorites = (state=prevState.favorites,action)=>{
    switch(action.type){
        case GET_USER_FAVORITE:
            return action.obj;
        default:
            return state;
    }
}