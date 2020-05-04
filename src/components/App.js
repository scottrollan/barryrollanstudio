import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Services from './Services';
import Color from './Color';
import Contact from './Contact';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="ui container">
          <BrowserRouter>
            <Header />
            <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route path="/services" component={Services}></Route>
              <Route path="/color" component={Color}></Route>
              <Route path="/contact" component={Contact}></Route>
            </Switch>
          </BrowserRouter>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
