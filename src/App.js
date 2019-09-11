import React, { Component } from 'react'
import CategoryTree from './CategoryTree'

class App extends Component {
  render() {
    return (
      <div class='wrapper'>
        <aside class='aside aside-1'>
          <CategoryTree />
        </aside>
        <article class='main'>
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
export default App
