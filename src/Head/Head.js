import React from 'react';
import {Link} from 'react-router-dom';
import {Alert} from 'react-bootstrap'
import './Head.css'
class Head extends React.Component{
    render(){
        return(
            <>
                {this.props.error && this.props.error.length>0 &&
                        <Alert variant="danger">{this.props.error}</Alert>
                }
                <div className="head">
                    {(!this.props.user.email)
                    ?
                         <>
                        <Link to="/">Главная</Link>
                        <Link to="/logon">Вход</Link>
                        </>
                    :
                        <>
                        <h2>Здравствуйте - {this.props.user.name}</h2>
                        <Link to="/">Главная</Link>
                        <Link to="/lk">Личный кабинет</Link>
                        <Link to="/" onClick={this.props.exitUserSuccess}>Выход</Link>               
                        </>
                    }
                </div>
            </>
        )
    }
}

export default Head;