import React, { Component } from 'react';
import Prism from "prismjs";
import Gist from 'super-react-gist';

export default class Looping extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render() {
    return (
      <React.Fragment>
        <h1>Looping in Objects and Array</h1>

        <p>In JavaScript frontend frameworks, working with APIs is a common thing. Often, we manipulate JSON objects and arrays. Hence, it becomes essential to know how to loop through an object or an array so that we can show the data accordingly.</p>

        <p>In this blog, we will discuss looping in </p>
        <ol>
          <li>Arrays</li>
          <li>Objects</li>
          <li>Two-dimensional Arrays</li>
        </ol>
        
        <h3>1. Looping through an Array</h3>

        <p>Consider an array like this.</p>

        <pre>
          <code className="language-javascript">
          {`
  let arr = ['virat kohli', 'sachin tendulkar', 'rohit sharma', 'dhoni'];
          `}
          </code>
        </pre>

        <p>We want to put this data in a tabular form in a table, named players. I am using ES6 to achieve this. The code looks something like this.</p>

        <Gist url='https://gist.github.com/aamrits/601adacf6b2dcb960d05751aa8369763' />

        <p>The output will look something like this.</p>

        <img src="https://miro.medium.com/max/116/1*maizF-DddYb6fdaGWV_3CA.png" className="img-fluid" />

        <h3>2. Looping through an object</h3>

        <p>Consider an object like this.</p>

        <pre>
          <code className="language-javascript">
          {`
  let obj = {        
    'cricket': 'kohli',        
    'tennis': 'federer',        
    'football': 'messi'    
  }
          `}
          </code>
        </pre>

        <p>Now we want to put it in a tabular form, where the key of the object will be under Sports column and value of the object will be in Players column. We can achieve this like this.</p>

        <Gist url='https://gist.github.com/aamrits/945ae443793603487f26a60997ffade5' />

        <p>Here, <strong>Object.keys()</strong> is used to fetch the keys of the <strong>‘obj’</strong> and then it stores as an array. The <strong>map()</strong> method loops through the array of keys and finds the <strong>values of the obj</strong> by <strong>obj[key].</strong></p>

        <p>The output will look something like this.</p>

        <img src="https://miro.medium.com/max/143/1*YNezl-LqrBWsAXxLQG0t0w.png" className="img-fluid" />

        <h3>3. Looping through a two-dimensional array</h3>

        <p>Let’s consider the following array.</p>

        <pre>
          <code className="language-javascript">
          {`
  let arr2 = [        
    ['cricket', 'kohli'],        
    ['football', 'messi'],        
    ['tennis', 'federer']    
  ];
          `}
          </code>
        </pre>

        <p>We want to achieve the same table which we did in the previous one. We can do something like this.</p>

        <Gist url='https://gist.github.com/aamrits/6077bc2cd3d3c74868929308929c2690' />

        <p>The output table will look the same as in the previous one.</p>

        <p>So, in this way, we can loop and arrange the data from an object or an array.</p>
      </React.Fragment>
    )
  }
}
