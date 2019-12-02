export const GET_CATEGORIES_SUCCESS = "GET_CATEGORIES_SUCCESS";
export const SET_FILTER_SUCCESS = "SET_FILTER_SUCCESS";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";


export const getProducts = ()=>{
    return dispatch=>{
        fetch("/db/products.json")
        .then(req=>req.json())
        .then(data=>dispatch(getProductsSuccess(data)))
    }
}

export const addUserFavorite=(userId,productId)=>{
        let fav = JSON.parse(localStorage.getItem('favorites'));
        if(!fav.find(i=>i.userId==userId && i.productId==productId)){
            fav.push({userId:userId,productId:productId});
            localStorage.setItem('favorites',JSON.stringify(fav));
            alert("Добавлено в избранное!")
        }else{
            alert("Данный транспорт уже есть в избранном!")
        }
}

export const getProductsSuccess = (products)=>(
    {
        type:GET_PRODUCTS_SUCCESS,
        obj:products
    }
)


export const getCategories = ()=>{
    return dispatch=>{
        fetch("/db/categories.json")
        .then(req=>req.json())
        .then(data=>dispatch(getCategoriesSuccess(data)))
    }
}

export const getCategoriesSuccess = (categories)=>(
    {
        type:GET_CATEGORIES_SUCCESS,
        obj:categories
    }
)

export const setFilter = (filter)=>(
    {
        type:SET_FILTER_SUCCESS,
        obj:filter
    }
)

export const searchItem = (text)=>(
    {
        type:SEARCH_SUCCESS,
        obj:text
    }
)