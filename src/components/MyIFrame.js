import React, { Component } from 'react'
import { connect } from 'react-redux'
import './style.css'

class MyIFrame extends Component {
  render() {
    var pathname = this.props.pathname
    if (pathname === '/') {
      return 'Click sidebar button'
    } else {
      return (
        <div>
          <iframe
            id='iframeid'
            title='tutorials'
            src={'http://localhost' + pathname + '.htm'}
            sandbox='allow-same-origin allow-forms allow-scripts allow-popups allow-top-navigation allow-top-navigation-by-user-activation'
          ></iframe>
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  pathname: state.router.location.pathname,
})

export default connect(mapStateToProps)(MyIFrame)
