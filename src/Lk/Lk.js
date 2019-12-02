import React from 'react';
import Cars from '../Cars/Cars'
import {Link} from 'react-router-dom';
import './Lk.css'
class Lk extends React.Component{
    render(){
        let user = this.props.user;
        return(
            <div className="lk">
                <div className="link">
                <Link to="/lk/favorite">Избранное</Link>
                <Link to="/lk/products">Ваши объявления</Link>
                </div>
                <h2>Имя: {user.name}</h2>
                <h2>Email: {user.email}</h2>
                <h2>Телефон: {user.phone}</h2>
            </div>
        )
    }
}

export default Lk;