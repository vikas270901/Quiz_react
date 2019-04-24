import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Redirect } from "react-router-dom";
import Header from './components/Header';
import QuizPage from './components/QuizPage';
import Main from './components/Main';
// import StarTest from './components/StarTest';
import Result from './components/Result';
import End from './components/End';
import Default from './components/Default';
class App extends Component {
  render() {
    window.unload = function() {
      // return "Dude, are you sure you want to leave? Think of the kittens!!!"
  }
    return (
      <React.Fragment>
        <Header />
      <header>
        <div className="container">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component = {Main} />
            <Route exact path='/quiz' component={QuizPage} />
            {/* <Route exact path='/startest' component={StarTest} /> */}
            <Route exact path='/Result' component={Result} />
            <Route exact path='/end' component={End} />
            <Route component={Default} />
          </Switch>
        </BrowserRouter>
        
        </div>
        </header>
      </React.Fragment>
    );
  }
}

export default App;
