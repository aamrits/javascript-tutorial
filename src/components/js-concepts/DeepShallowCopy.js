import React, { Component } from 'react';
import Prism from "prismjs";
import Gist from 'super-react-gist';

export default class DeepShallowCopy extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render() {
    return (
      <React.Fragment>
        <h1>Deep Copy & Shallow Copy</h1>

        <p>Deep copy and Shallow copy of an <strong>object</strong> is an important aspect of JavaScript and as a developer, it is useful to understand this concept.</p>
        <p>Let’s declare an object.</p>
        
        <pre>
          <code className="language-javascript">
          {`
  let obj1 = {x: 2, y: 3}
  obj2 = obj1;
          `}
          </code>
        </pre>

        <div className="alert-is-helpful">
          <p>Shallow Copy makes a copy of the reference to <strong>‘obj1’</strong> into <strong>‘obj2’</strong>. Think about it as a copy of <strong>obj1’</strong>s Address. So, the addresses of <strong>‘obj1’</strong> and <strong>‘obj2’</strong> will be the same i.e. they will be pointing to the same memory location.</p>
        </div>

        <pre>
          <code className="language-javascript">
          {`
  // Shallow Copy: The value of obj1 changes
  obj2 = obj1;
  obj2.x = 5;
  console.log(obj1, obj2); // {x: 5, y: 3} {x: 5, y: 3}
          `}
          </code>
        </pre>

        <p>Here, the value of <strong>‘x’</strong> changes in both <strong>‘obj1’</strong> and <strong>‘obj2’</strong>.</p>

        <div className="alert-is-helpful">
          <p>Deep copy makes a copy of all the members of <strong>‘obj1’</strong>, allocates different memory location for <strong>‘obj2’</strong> and then assigns the copied members to <strong>‘obj2’</strong> to achieve deep copy. In this way, if <strong>‘obj1’</strong> vanishes <strong>‘obj2’</strong> is still valid in the memory.</p>
        </div>

        <p>Method 1: We can use <strong>Object.assign()</strong> for deep copying.</p>

        <pre>
          <code className="language-javascript">
          {`
  obj1 = {x: 5, y: 3}
  // Deep Copy: The values of obj1 remains unchanged
  // Method 1: Use Object.assign()
  obj3 = Object.assign({}, obj1);
  obj3.x = 56;
  console.log(obj1, obj3); // {x: 5, y: 3} {x: 56, y: 3}
          `}
          </code>
        </pre>

        <p>Here, we can see that the values of <strong>‘obj1’</strong> don’t change. The value of <strong>‘obj3’</strong> changes.</p>

        <p>Method 2: We can also use <strong>JSON.parse</strong> and <strong>JSON.stringify</strong> to achieve the same result.</p>

        <pre>
          <code className="language-javascript">
          {`
  obj1 = {x: 5, y: 3}
  // Deep Copy: The values of obj1 remains unchanged
  // Method 2: Use JSON.parse(JSON.stringify())
  obj4 = JSON.parse(JSON.stringify(obj1));
  obj4.x = 10;
  console.log(obj1, obj4); // {x: 5, y: 3} {x: 10, y: 3}
          `}
          </code>
        </pre>

        <p>To sum it up here is the entire code.</p>

        <Gist url='https://gist.github.com/aamrits/16059d4b44a7c61513b3330d101803fc' />
      </React.Fragment>
    )
  }
}
