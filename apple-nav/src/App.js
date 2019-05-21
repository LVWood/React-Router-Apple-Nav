import React from 'react';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import MainMenu from './Components/MainMenu';
import navData from './data';
import './App.css'

import { Route, Switch, Redirect } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: navData
    }
  }

  render() {
    return (
      <div className="Routes">
        <div className="header-bar">
          {this.state.data.map(item => {
            return <NavBar item={item.id}/>
          })}
        </div>
        
        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/">
            <Redirect to="/Home" />
          </Route>
          <Route exact path="/id" component={MainMenu} />
        </Switch>
      </div>
    );
  }
}


export default App;
