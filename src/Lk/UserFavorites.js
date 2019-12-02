import React from 'react';
import Cars from '../Cars/Cars'
import {getUserFavorite,delUserFavorite} from './action';
import {connect} from 'react-redux';

class UserFavorites extends React.Component{
    componentDidMount() {
        this.props.getUserFavorite(this.props.user.id);
    }
    render(){
        console.log(this.props)
        return(
            <div className="userProducts">
                     <Cars delUserFavorite={this.props.delUserFavorite} delUserId={this.props.user.id} products={this.props.favorites}/>
            </div>
        )
    }
}

const mapStateToProps = state=>state;

const mapDispatchToProps= dispatch=>({
    getUserFavorite:(userId)=>dispatch(getUserFavorite(userId)),
    delUserFavorite:(userId,productId)=>dispatch(delUserFavorite(userId,productId))

})

export default connect(mapStateToProps,mapDispatchToProps)(UserFavorites);