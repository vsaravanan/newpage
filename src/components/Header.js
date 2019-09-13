import React, { Component } from 'react'
import { connect } from 'react-redux'

import { action_sidebar_toggle, action_close_sidebar } from 'actions/action-sidebar'

class Header extends Component {
  onClick = () => {
    this.props.action_sidebar_toggle()
    this.props.action_close_sidebar()
  }

  render() {
    return (
      <header ref='header' className='header'>
        <button className='openbtn' onClick={this.onClick}>
          ☰{' '}
        </button>
      </header>
    )
  }
}

export default connect(
  null,
  { action_sidebar_toggle, action_close_sidebar },
)(Header)
