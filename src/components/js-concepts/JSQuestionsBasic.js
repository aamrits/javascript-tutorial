import React, { Component } from 'react';
import Prism from "prismjs";
import Gist from 'super-react-gist';

export default class JSQuestionsBasic extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render() {
    return (
      <React.Fragment>
        <h1>Javascript Questions: Basics</h1>

        <p>Some of the basic Javascript questions are listed below.</p>

        <Gist url='https://gist.github.com/aamrits/bed4773f9589b6884a126c88891e2911' />
      </React.Fragment>
    )
  }
}
