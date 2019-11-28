import React from 'react';

class Main extends React.Component{
    componentDidMount(){
        this.props.getProducts();
    }
    render(){
        console.log(this.props);
        return(
            <div className="Main">
                {this.props.products.map((item,i)=><h1 key={i}>{item.head}</h1>)}
            </div>
        )
    }
}

export default Main;