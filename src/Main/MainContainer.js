import {getCategories, setFilter, searchItem, getProducts,addUserFavorite} from './action';
import {connect} from 'react-redux';
import Main from './Main';

const mapStateToProps = state=>{
    if(state.filter!=1){
        state.products = state.products.filter(i=>i.categoryId==state.filter);
    }
    if(state.search.length>0){
        state.products = state.products.filter(i=>i.head.toUpperCase().indexOf(state.search.toUpperCase())>=0);
    }
    return state;
};

const mapDispatchToProps= dispatch=>({
    getCategories:()=>dispatch(getCategories()),
    setFilter:(filter)=>dispatch(setFilter(filter)),
    searchItem:(text)=>dispatch(searchItem(text)),
    getProducts:()=>dispatch(getProducts()),
    addUserFavorite:(userId,productId)=>addUserFavorite(userId,productId)

})

export default connect(mapStateToProps,mapDispatchToProps)(Main);

