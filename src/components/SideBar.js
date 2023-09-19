import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
// import { withRouter } from './MyWithRouter'
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
      let delimiter = process.env.react_app_os === 'windows' ? '\\' : '/'

      var navlinks = statichtmls.map((v, i) => {
        let splitted = v.split(delimiter)
        let repeats = splitted.length - 1
        let spaces = '.'.repeat(repeats)
        let showmenu = spaces + splitted[splitted.length - 1]
        // console.log(showmenu)
        return (
          <NavLink key={'navlink' + i} to={'/' + v}>
            {showmenu}
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
export default withRouter(connect(mapStateToProps, { fetchMenus })(SideBar))
