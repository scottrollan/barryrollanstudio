import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Services from './Services';
import Color from './Color';

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/services" component={Services}></Route>
            <Route path="/color" component={Color}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
