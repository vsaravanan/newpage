import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'

class SideBar extends Component {
  state = {}

  componentWillMount = () => {}

  render() {
    return (
      <div>
        <NavLink to='/javascript'> javascript </NavLink>
        <NavLink to='/spring'> spring </NavLink>
      </div>
    )
  }
}

export default withRouter(SideBar)
