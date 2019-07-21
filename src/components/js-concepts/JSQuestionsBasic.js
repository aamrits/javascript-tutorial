import React, { Component } from 'react';
import Prism from "prismjs";

export default class JSQuestionsBasic extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  
  render() {
    return (
      <React.Fragment>
        <h1>Javascript Questions: Basics</h1>

        <p>We are using the StackBlitz Generator to show you a ready-made, simple application that you can examine and play with interactively. In actual development you will typically.</p>

        <div className="alert-is-helpful">
          <p>We are using the StackBlitz Generator to show you a ready-made, simple application that you can examine and play with interactively. In actual development you will typically.</p>
        </div>

        <div className="card callout-is-helpful">
          <div className="card-header">
            <p>Area Chart Example</p>
          </div>
          <div className="card-body">
            <p>We are using the StackBlitz Generator to show you a ready-made, simple application that you can examine and play with interactively. In actual development you will typically.</p>
          </div>
        </div>

        <pre>
          <code className="language-javascript">
          {`
  onSubmit(e) {
    e.preventDefault();
    const job = {
      title: 'Developer',
      company: 'Facebook' 
    };
  }
          `}
          </code>
        </pre>
      </React.Fragment>
    )
  }
}
