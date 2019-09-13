import React, { Component } from 'react'
import SideBar from './components/SideBar'
import Header from './components/Header'
import { connect } from 'react-redux'
import MyIFrame from './components/MyIFrame'

class App extends Component {
  render() {
    console.log(' App sidebar_show ' + this.props.sidebar_show)
    const sidebar_show = this.props.sidebar_show ? 'sidebar-open' : 'sidebar-close'

    return (
      <div className='wrapper'>
        <header className='header'>
          <Header />
        </header>
        <aside id='mySidebar' className={'aside-1 sidebar ' + sidebar_show}>
          <SideBar />
        </aside>
        <article className='main'>
          <MyIFrame />
        </article>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  sidebar_show: state.sidebar.show,
})
export default connect(mapStateToProps)(App)
