import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import MainContainer from '../Main/MainContainer';

function App() {
  return (
    <div className="App">
     <Switch>
          <Route exact path="/" component={MainContainer}></Route>
     </Switch>
    </div>
  );
}

export default App;
