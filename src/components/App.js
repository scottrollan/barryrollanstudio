import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './nav/Header';
import Footer from './footer/Footer';
import Home from './home/Home';
import Services from './services/Services';
import Color from './color/Color';
import Contact from './contact/Contact';
import styles from './App.module.css';

class App extends React.Component {
  render() {
    return (
      <div className={styles.app}>
        <div className="ui container">
          <Router>
            <Header />
            <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route path="/services" component={Services}></Route>
              <Route path="/color" component={Color}></Route>
              <Route path="/contact" component={Contact}></Route>
            </Switch>
          </Router>
          <div className={styles.push}></div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
