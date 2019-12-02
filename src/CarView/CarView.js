import React from 'react';
import {Container,Row,Col,Image} from 'react-bootstrap';
import './CarView.css';

class CarView extends React.Component{
    componentDidMount(){
        this.props.carShow(this.props.match.params["id"]);
        this.props.getComments(this.props.match.params["id"]);
    }
    render(){
        let car = this.props.car;
        console.log(this.props)
        return(
            <div className="carView">
                {car && <Container>
                    <Row>
                        <Col xs={1} md={7}>
                        <Image src={car.image} rounded />
                        </Col>
                        <Col xs={1} md={5}>
                            {this.props.user.name && <span onClick={()=>this.props.addUserFavorite(this.props.user.id,car.id)}>★</span>}
                            <h3>{car.head}</h3>
                            <Col>{car.text}</Col>
                            <h4>Стоимость: {car.price}$</h4>
                            <p>Дата размещения: {new Date(car.date+"T00:00:00").toLocaleString('ru',{year: 'numeric',month: 'long',day: 'numeric'})}</p>
                        </Col>
                    </Row>
                </Container>}
                {this.props.comments && this.props.comments.map((item,i)=><h1>{item.text}</h1>)}
            </div>
        )
    }
}

export default CarView;