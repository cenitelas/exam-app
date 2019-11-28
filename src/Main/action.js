export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const GET_CATEGORIES_SUCCESS = "GET_CATEGORIES_SUCCESS";

export const getProducts = ()=>{
    return dispatch=>{
        fetch("/db/products.json")
        .then(req=>req.json())
        .then(data=>dispatch(getProductsSuccess(data)))
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