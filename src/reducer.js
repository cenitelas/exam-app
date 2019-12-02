import {categories,filter,search,products} from './Main/reducer';
import {user,error} from './Logon/reducer'
import {userProducts, favorites} from './Lk/reducer'
import {combineReducers} from 'redux';

export default()=>combineReducers({products,categories,filter,search,user,error,userProducts,favorites});