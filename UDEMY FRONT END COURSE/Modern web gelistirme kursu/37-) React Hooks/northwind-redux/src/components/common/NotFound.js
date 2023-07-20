import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <h3>Page Not Found</h3>
        <p>Hey Body, you stay wrong point </p>
        <p>Turn back to the right <Link to="/" title="Home Page">side</Link></p>

      </div>
    )
  }
}
