import React from 'react';
import Cars from '../Cars/Cars'
import {Dropdown,DropdownButton} from 'react-bootstrap'
import './Main.css'
class Main extends React.Component{
    componentDidMount(){
        this.props.getCategories();
        this.props.getProducts();
    }
    render(){
        return(
            <div className="main">
                <div className="search">
                    <label>Поиск: <input type="text" value={this.props.search} onChange={(e)=>{this.props.getProducts();this.props.searchItem(e.target.value)}}></input></label>
                    {this.props.categories.length>0 && <DropdownButton size="sm" variant="light" id="button" title={"Фильтр: "+this.props.categories.find(i=>i.id==this.props.filter).name} onSelect={(e)=>{this.props.getProducts();this.props.setFilter(e)}}>
                        {this.props.categories.map((item,i)=><Dropdown.Item key={i} as="button" eventKey={item.id}>{item.name}</Dropdown.Item>)}
                    </DropdownButton>}
                </div>    
                <Cars userId={this.props.user.id} addFavorite={this.props.addUserFavorite} products={this.props.products}/>

            </div>
        )
    }
}

export default Main;