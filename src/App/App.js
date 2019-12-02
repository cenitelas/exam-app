import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import MainContainer from '../Main/MainContainer';
import LogonContainer from '../Logon/LogonContainer';
import HeadContainer from '../Head/HeadContainer'
import LkContainer from '../Lk/LkContainer';
import UserProducts from '../Lk/UserProducts';
import UserFavorites from '../Lk/UserFavorites';
import CarViewContainer from '../CarView/CarViewContainer'

function App() {
  return (
    <div className="App">
      <HeadContainer></HeadContainer>
     <Switch>
          <Route exact path="/" component={MainContainer}></Route>
          <Route exact path="/logon" component={LogonContainer}></Route>
          <Route exact path="/lk" component={LkContainer}></Route>
          <Route exact path="/lk/products" component={UserProducts}></Route>
          <Route exact path="/lk/favorite" component={UserFavorites}></Route>
          <Route exact path="/:id" component={CarViewContainer}></Route>
     </Switch>
    </div>
  );
}

export default App;
