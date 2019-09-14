import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchMenus } from 'actions/action-menus'

class SideBar extends Component {
  state = {}

  componentWillMount = () => {
    this.props.fetchMenus()
  }

  render() {
    const menus = this.props.menus

    if (menus) {
      const statichtmls = menus.statichtmls

      var navlinks = statichtmls.map((v, i) => {
        return (
          <NavLink key={'navlink' + i} to={'/' + v}>
            {' '}
            {v}{' '}
          </NavLink>
        )
      })
    }

    return <div>{navlinks}</div>
  }
}

const mapStateToProps = state => ({
  menus: state.data_menus.list,
})
export default withRouter(
  connect(
    mapStateToProps,
    { fetchMenus },
  )(SideBar),
)
