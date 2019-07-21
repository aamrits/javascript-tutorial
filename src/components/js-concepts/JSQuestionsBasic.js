import React, { Component } from 'react';
import Prism from "prismjs";
import { Accordion, Card } from 'react-bootstrap';

export default class JSQuestionsBasic extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render() {
    return (
      <React.Fragment>
        <h1>Javascript Questions: Basics</h1>

        <p>We are using the StackBlitz Generator to show you a ready-made, simple application that you can examine and play with interactively. In actual development you will typically.</p>

        <Accordion defaultActiveKey="0">
          <Card className="card callout-is-helpful">
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Click me!
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body className="card-body">
                Hello! I'm the body
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </React.Fragment>
    )
  }
}
