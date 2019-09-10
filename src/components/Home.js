import React, { Component } from 'react'
import CategoryTree from '../CategoryTree'
import './style.css'

class Home extends Component {
  render() {
    return (
      <div className='Home'>
        <CategoryTree />
      </div>
    )
  }
}

export default Home
