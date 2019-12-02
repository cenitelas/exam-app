import React from 'react';
import {Container,Row,Col,Image} from 'react-bootstrap'
import './Car.css'

class Car extends React.Component{
    render(){
        var car = this.props.car;
        return(
            <div className="car">
                {car && <Container>
                    <Row>
                        <Col xs={1} md={1}>
                        <Image src={car.image} rounded />
                        </Col>
                        <Col xs={1} md={9}>
                            <h3>{car.head}</h3>
                            <Col>{car.text}</Col>
                        </Col>
                        <Col xs={1} md={2}>
                            {this.props.userId && <span onClick={()=>this.props.addFavorite(this.props.userId,car.id)}>★</span>}
                            <Row xs={5}><h4>{car.price}$</h4></Row>
                            <Row xs={5}>{new Date(car.date+"T00:00:00").toLocaleString('ru',{year: 'numeric',month: 'long',day: 'numeric'})}</Row>
                            {this.props.delUserId && <span onClick={()=>this.props.delUserFavorite(this.props.delUserId,car.id)}>Удалить</span>}
                        </Col>
                    </Row>
                </Container>}
            </div>
        )
    }
}

export default Car;