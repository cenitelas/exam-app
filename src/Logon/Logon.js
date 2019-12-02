import React, {Component} from 'react';


import './Logon.css'
class Logon extends Component {
  constructor(props){
      super(props)
    this.state = {
        email: "",
        password: ""
    }
  }

  componentDidUpdate(){
    if(this.props.user && this.props.user.email){
      this.props.history.push("/");
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = () => {
    if(this.state.email.length==0 || this.state.password==0){
        this.props.errorSuccess("Поля не могут быть пустыми!")
    }
    else{
        this.props.errorClear();
        if(!localStorage.getItem('favorites')){
          localStorage.setItem('favorites', JSON.stringify([]));
        }
        this.props.userLogin(this.state)
    }
  }

  componentWillMount(){
    this.props.errorClear();
  }
  render() {
    return (
      <div className="Logon">

        <form className="logon" onSubmit={this.handleSubmit}>
          <h1>Вход</h1>

          <label>E-mail</label>
          <input
            name='email'
            value={this.state.email}
            onChange={this.handleChange}
            /><br/>

          <label>Пароль</label>
          <input
            type='password'
            name='password'
            value={this.state.password}
            onChange={this.handleChange}
            /><br/>

          <h3 onClick={this.handleSubmit}>Вход</h3>
        </form>
      </div>
    )
  }
}


export default Logon;