import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const sampleStr = "Alan said, \"Peter is learning JavaScript\".";
const conversation = 'Finn exclaims to Jake, "Algebraic!"';
const goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; 
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

const anAdjective = "awesome!";
let ourStr = "freeCodeCamp is ";
ourStr += anAdjective;

export default class NotFound extends Component {

  render() {
    return (
      <div>
        <h3>Page Not Found</h3>
        <p>Hey Body, you stay wrong point </p>
        <p>Turn back to the right <Link to="/" title="Home Page">side</Link></p>
        <div>{sampleStr}</div>
        <div>{conversation}</div>
        <div>{goodStr}</div>
        <div>{myStr}</div>
        <div>{ourStr += anAdjective}</div>


      </div>
    )
  }
}
