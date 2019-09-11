import React, { Component } from 'react'
// import { findDOMnode } from 'react-dom'
import $ from 'jquery'
export default class Header extends Component {
  state = {
    sidebar: false,
  }

  openNav = () => {
    // this.setState({ sidebar: !this.state.sidebar })
    // const el = findDOMnode(this.refs.header)
    // $(el).slideToggle()
    var ele = $('#mySidebar')
    ele.toggleClass('sidebar-close sidebar-open')
  }
  render() {
    return (
      <header ref='header' className='header'>
        <button class='openbtn' onClick={this.openNav}>
          ☰{' '}
        </button>
      </header>
    )
  }
}
