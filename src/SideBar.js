import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'

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
        <NavLink to='/javascript'> javascript </NavLink>
        <NavLink to='/spring'> spring </NavLink>
      </div>
    )
  }
}

export default withRouter(SideBar)
