import React, { Component } from 'react'
import SideBar from './SideBar'
import Header from './components/Header'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <header className='header'>
          <Header />
        </header>
        <aside id='mySidebar' className='aside-1 sidebar sidebar-close'>
          <SideBar />
        </aside>
        <article className='main'>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
            egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
            Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
            placerat eleifend leo.
          </p>
        </article>
      </div>
    )
  }
}

const mapStateToProps = state => ({})
export default connect(mapStateToProps)(App)
