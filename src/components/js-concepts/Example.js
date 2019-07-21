import React, { Component } from 'react';
import Prism from "prismjs";
import { Accordion, Card } from 'react-bootstrap';

export default class Example extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render() {
    return (
      <React.Fragment>
        <h1>Example</h1>

        <p>Below is an example sample page.</p>

        <Accordion defaultActiveKey="0">
          <Card className="card callout-is-helpful">
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Accordion
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body className="card-body">
                This is an example of accordion.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>

        <div className="card callout-is-helpful">
          <div className="card-header">
            A block
          </div>
          <div className="card-body">
            This is an example of a block.
          </div>
        </div>

        <div className="alert-is-helpful">
          <p>This is an example of an alert block.</p>
        </div>

        <pre>
          <code className="language-javascript">
          {`
  // This is a code block
  obj2 = obj1;
  obj2.x = 5;
  console.log(obj1, obj2); // {x: 5, y: 3} {x: 5, y: 3}
          `}
          </code>
        </pre>
      </React.Fragment>
    )
  }
}
