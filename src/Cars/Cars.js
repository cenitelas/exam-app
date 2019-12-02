import React from 'react';
import Car from '../Car/Car'
class Cars extends React.Component{
    render(){
        return(
            <div className="Cars">
                {this.props.products && this.props.products.map((item,i)=><Car delUserFavorite={this.props.delUserFavorite} delUserId={this.props.delUserId} userId={this.props.userId} addFavorite={this.props.addFavorite} key={i} car={item}/>)}
            </div>
        )
    }
}

export default Cars;