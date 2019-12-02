import {GET_CATEGORIES_SUCCESS,SET_FILTER_SUCCESS,SEARCH_SUCCESS,GET_PRODUCTS_SUCCESS} from "./action";
const prevState = {
    products:[],
    categories:[],
    filter:1,
    search:""
}

export const products = (state=prevState.products,action)=>{
    switch(action.type){
        case GET_PRODUCTS_SUCCESS:
            return action.obj;
        default:
            return state;
    }
}

export const categories = (state=prevState.categories,action)=>{
    switch(action.type){
        case GET_CATEGORIES_SUCCESS:
            return action.obj;
        default:
            return state;
    }
}

export const filter = (state=prevState.filter,action)=>{
    switch(action.type){
        case SET_FILTER_SUCCESS:
            return action.obj;
        default:
            return state;
    }
}

export const search = (state=prevState.search,action)=>{
    switch(action.type){
        case SEARCH_SUCCESS:
            return action.obj;
        default:
            return state;
    }
}