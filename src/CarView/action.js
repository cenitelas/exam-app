export const CAR_SHOW_SUCCESS = 'CAR_SHOW_SUCCESS';
export const CLEAR_CAR = 'CLEAR_CAR';
export const SHOW_COMMENTS_SUCCESS = 'SHOW_COMMENTS_SUCCESS';
export const CLEAR_COMMENTS = 'CLEAR_COMMENTS';

export const carShow = (id)=>{
    return dispatch=>{
        dispatch(clearCarSoccess());
        fetch("/db/products.json")
        .then(req=>req.json())
        .then(data=>dispatch(carShowSuccess(data.find(i=>i.id==id))))
    }
}

export const getComments = (id)=>{
    return dispatch=>{
        dispatch(clearCommentsSuccess());
        fetch("/db/comments.json")
        .then(req=>req.json())
        .then(data=>dispatch(getCommentsSuccess(data.filter(i=>i.productId==id))))
    }
}


export const carShowSuccess = (car)=>({
    type:CAR_SHOW_SUCCESS,
    obj:car
})

export const getCommentsSuccess = (comments)=>({
    type:SHOW_COMMENTS_SUCCESS,
    obj:comments
})

export const clearCarSoccess = ()=>({
    type:CLEAR_CAR,
    obj:{}
})

export const clearCommentsSuccess = ()=>({
    type:CLEAR_COMMENTS,
    obj:[]
})
