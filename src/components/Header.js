import React, { Component } from 'react'
import { connect } from 'react-redux'

import { action_sidebar_toggle } from 'actions/action-sidebar'

class Header extends Component {
  state = {
    sidebar: false,
  }

  render() {
    return (
      <header ref='header' className='header'>
        <button className='openbtn' onClick={this.props.action_sidebar_toggle}>
          ☰{' '}
        </button>
      </header>
    )
  }
}

export default connect(
  null,
  { action_sidebar_toggle },
)(Header)
