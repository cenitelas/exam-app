import {getCategories, getProducts} from './action';
import {connect} from 'react-redux';
import Main from './Main';

const mapStateToProps = state=>state;
const mapDispatchToProps= dispatch=>({
    getCategories:()=>dispatch(getCategories()),
    getProducts:()=>dispatch(getProducts())
})

export default connect(mapStateToProps,mapDispatchToProps)(Main);

