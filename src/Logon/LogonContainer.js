import {userLogin, exitUserSuccess, errorSuccess, errorClear} from './action';
import {connect} from 'react-redux';
import Logon from './Logon';

const mapStateToProps = state=>state;

const mapDispatchToProps= dispatch=>({
    userLogin:(user)=>dispatch(userLogin(user)),
    errorSuccess:(text)=>dispatch(errorSuccess(text)),
    errorClear:()=>dispatch(errorClear())

})

export default connect(mapStateToProps,mapDispatchToProps)(Logon);

