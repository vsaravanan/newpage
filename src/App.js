import React, { Component } from 'react'
import CategoryTree from './CategoryTree'
import Header from './components/Header'
import Footer from './components/Footer'

class App extends Component {
  state = { menu: false }
  toggleMenu = () => {
    this.setState({ menu: !this.state.menu })
  }
  render() {
    // const collapsed = this.state.menu ? '' : 'collapsed'

    return (
      // <div>
      //   <div id='sidebar' className={collapsed}>
      //     <Home />
      //   </div>
      //   <div id='content'>
      //     <Header />
      //     <button className='menubutton' title='Toggle sidebar' onClick={this.toggleMenu}>
      //       Menu
      //     </button>
      //     <h3>Some content</h3>
      //     <Footer />
      //   </div>
      // </div>

      <div class='wrapper'>
        <header class='header'>
          <Header />
        </header>
        <article class='main'>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
            egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
            Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
            placerat eleifend leo.
          </p>
        </article>
        <aside class='aside aside-1'>
          <CategoryTree />
        </aside>

        <footer class='footer'>
          <Footer />
        </footer>
      </div>
    )
  }
}
export default App
