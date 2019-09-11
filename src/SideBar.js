import React, { Component } from 'react'

class SideBar extends Component {
  state = {}

  componentWillMount = () => {}

  render() {
    return (
      <div>
        <a href='#aa'>About</a>
        <a href='#bb'>Services</a>
        <a href='#c'>Clients</a>
        <a href='#d'>Contact</a>
      </div>
    )
  }
}

export default SideBar
