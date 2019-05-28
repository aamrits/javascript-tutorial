import React, { Component } from 'react';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar/Navbar';
import JSQuestionsBasic from './components/js-concepts/JSQuestionsBasic';
import JSQuestionsAdvanced from './components/js-concepts/JSQuestionsAdvanced';
import DeepShallowCopy from './components/js-concepts/DeepShallowCopy';
import NotFound from './components/NotFound';

class App extends Component {
  render() { 
    return (
      <HashRouter>
        <div className="container-fluid">
          <div className="row">
            <div className="col-3 p-0">
              <Navbar />
            </div>
            <div className="col-9 page-wrap">
              <Switch>
                <Route exact path="/" component={ Home } />
                <Route path="/js-questions-basic" component={ JSQuestionsBasic } />
                <Route path="/js-questions-advanced" component={ JSQuestionsAdvanced } />
                <Route path="/deep-shallow-copy" component={ DeepShallowCopy } />
                <Route path="*" component={ NotFound } />
              </Switch>
            </div>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
