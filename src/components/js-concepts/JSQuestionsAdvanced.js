import React, { Component } from 'react';
import Prism from "prismjs";
import Gist from 'super-react-gist';

export default class JSQuestionsAdvanced extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render() {
    return (
      <React.Fragment>
        <h1>Javascript Questions: Advanced</h1>

        <p>Some of the advanced Javascript questions (like ES6, OOPs related) are listed below.</p>

        <Gist url='https://gist.github.com/aamrits/bc95009f01b59ba2ac789be856888737' />
      </React.Fragment>
    )
  }
}
