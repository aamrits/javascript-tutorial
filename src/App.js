import React, { Component } from 'react';
import './App.css';
import { HashRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar/Navbar';
import JSQuestionsBasic from './components/js-concepts/JSQuestionsBasic';
import JSQuestionsAdvanced from './components/js-concepts/JSQuestionsAdvanced';
import DeepShallowCopy from './components/js-concepts/DeepShallowCopy';
import NotFound from './components/NotFound';
import Example from './components/js-concepts/Example';

class App extends Component {
  toggleBtn = () => {
    document.querySelector('.wrapper').classList.toggle('active');
  }
  render() { 
    return (
      <HashRouter>
        <nav className="navbar navbar-light fixed-top navbar-header-styles">
          <Link to="/" className="navbar-brand text-uppercase">Javascript Tutorial</Link>
          <div className="toggle-btn" onClick={ this.toggleBtn }>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav> 
        
        <div className="container-fluid">
          <div className="row">
            <div className="wrapper active">
              <Navbar toggleBtn= { this.toggleBtn } /> 
            </div>
            <div className="page-wrap">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12">
                  <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route path="/js-questions-basic" component={ JSQuestionsBasic } />
                    <Route path="/js-questions-advanced" component={ JSQuestionsAdvanced } />
                    <Route path="/deep-shallow-copy" component={ DeepShallowCopy } />
                    <Route path="/example" component={ Example } />
                    <Route path="*" component={ NotFound } />
                  </Switch>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
