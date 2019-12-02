export const LOGON_SUCCESS = 'LOGON_SUCCESS';
export const EXIT_SUCCESS = 'EXIT_SUCCESS';
export const ERROR_SUCCESS = 'ERROR_SUCCESS';
export const ERROR_CLEAR = 'ERROR_CLEAR';

export const userLogin = (user)=>{
    return dispatch=>{
        fetch("/db/users.json")
        .then(req=>req.json())
        .then(data=>{
            if(data.find(i=>i.email===user.email && i.password===user.password)!=null){
                dispatch(errorClear());
                dispatch(userLoginSuccess(data.find(i=>i.email===user.email && i.password===user.password)));
            }
            else
                dispatch(errorSuccess("Неверный email или пароль"))
        })
    }
}


export const userLoginSuccess= user=>({
    type:LOGON_SUCCESS,
    obj:user
})

export const errorSuccess= (error)=>({
    type:ERROR_SUCCESS,
    obj:error
})

export const errorClear= ()=>({
    type:ERROR_CLEAR,
    obj:""
})