import {products,categories} from './Main/reducer';
import {combineReducers} from 'redux';

export default()=>combineReducers({products,categories});