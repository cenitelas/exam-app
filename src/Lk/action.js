export const USER_PRODUCTS = 'USER_PRODUCTS';
export const GET_USER_FAVORITE = 'GET_USER_FAVORITE';

export const getUserProducts=(userId)=>{
    return dispatch=>{
        fetch("/db/products.json")
        .then(req=>req.json())
        .then(data=>dispatch(getUserProductsSuccess(data.filter(i=>i.userId===userId))))
    }
}

export const getUserFavorite=(userId)=>{
        return dispatch=>{
            fetch("/db/products.json")
            .then(req=>req.json())
            .then(data=>{
                    let fav = JSON.parse(localStorage.getItem('favorites'));
                    let products = [];
                    data.forEach((item)=>{
                        fav.filter(i=>i.userId===userId).forEach((item2)=>{
                            if(item.id===item2.productId){
                                products.push(item);
                            }
                        })
                    })
                    dispatch(getUserFavoriteSuccess(products));
             })
        }
}

export const delUserFavorite=(userId,productId)=>{
        return dispatch=>{
            let fav = JSON.parse(localStorage.getItem('favorites'));
            console.log(userId+"|"+productId);
            fav.splice(fav.indexOf(fav.find(i=>i.userId===userId && i.productId===productId)),1);
            localStorage.setItem('favorites',JSON.stringify(fav));
            dispatch(getUserFavorite(userId));
        }
}


export const getUserProductsSuccess= (products)=>({
    type:USER_PRODUCTS,
    obj:products
})

export const getUserFavoriteSuccess= (favorite)=>({
    type:GET_USER_FAVORITE,
    obj:favorite
})