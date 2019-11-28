import {GET_CATEGORIES_SUCCESS,GET_PRODUCTS_SUCCESS} from "./action";
const prevState = {
    products:[],
    categories:[]
}

export const categories = (state=prevState.categories,action)=>{
    switch(action.type){
        case GET_CATEGORIES_SUCCESS:
            return action.obj;
        default:
            return state;
    }
}

export const products = (state=prevState.products,action)=>{
    switch(action.type){
        case GET_PRODUCTS_SUCCESS:
            return action.obj;
        default:
            return state;
    }
}