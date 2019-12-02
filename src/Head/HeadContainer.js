import {exitUserSuccess} from './action';
import {connect} from 'react-redux';
import Head from './Head';

const mapStateToProps = state=>state;

const mapDispatchToProps= dispatch=>({
    exitUserSuccess:()=>dispatch(exitUserSuccess())

})

export default connect(mapStateToProps,mapDispatchToProps)(Head);

