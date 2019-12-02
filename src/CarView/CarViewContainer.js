import {carShow,getComments} from './action';
import {addUserFavorite} from '../Main/action';
import {connect} from 'react-redux';
import CarView from './CarView';

const mapStateToProps = state=>state;

const mapDispatchToProps= dispatch=>({
    carShow:(id)=>dispatch(carShow(id)),
    getComments:(id)=>dispatch(getComments(id)),
    addUserFavorite:(id,carId)=>addUserFavorite(id,carId)

})

export default connect(mapStateToProps,mapDispatchToProps)(CarView);

