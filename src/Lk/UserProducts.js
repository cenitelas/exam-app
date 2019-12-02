import React from 'react';
import Cars from '../Cars/Cars'
import {getUserProducts} from './action';
import {connect} from 'react-redux';
class UserProducts extends React.Component{
    componentDidMount() {
        this.props.getUserProducts(this.props.user.id);
    }
    render(){
        console.log(this.props);
        return(
            <div className="userProducts">
                     <Cars products={this.props.userProducts}/>
            </div>
        )
    }
}
const mapStateToProps = state=>state;

const mapDispatchToProps= dispatch=>({
    getUserProducts:(userId)=>dispatch(getUserProducts(userId))

})

export default connect(mapStateToProps,mapDispatchToProps)(UserProducts);