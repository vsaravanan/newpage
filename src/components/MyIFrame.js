import React, { Component } from 'react'
import './style.css'

class MyIFrame extends Component {
  render() {
    return (
      <div>
        <iframe
          id='iframeid'
          title='tutorials'
          src='http://localhost/javascript.htm'
          sandbox='allow-same-origin allow-forms allow-scripts allow-popups allow-top-navigation allow-top-navigation-by-user-activation'
        ></iframe>
      </div>
    )
  }
}

export default MyIFrame
