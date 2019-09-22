import React, { Component } from 'react'
import data from './data'

import './anz.css'

class Diagram extends Component {
  state = {
    data: data,
  }

  componentWillMount = () => {
    this.setState({ data: data })
  }

  // onSelect = node => {
  //   if (this.state.selected) {
  //     this.state.selected.setState({ selected: false })
  //   }
  //   this.setState({ selected: node })
  //   node.setState({ selected: true })
  //   if (this.props.onCategorySelect) {
  //     this.props.onCategorySelect(node)
  //   }
  // }
  render() {
    return (
      <div>
        <div class='container'>
          <div class='myrow '>
            <div class='item'>guava</div>
            {/* <div class='item item-relative'>lemon</div> */}
          </div>
          <div class='myrow '>
            <div class='item'>apple</div>
            {/* <div class='item item-relative'>orange</div> */}
          </div>
        </div>

        {/* <div id='flex-row'>
          <div class='flex-item' id='flex'>
            Flex box{' '}
          </div>
          <div class='raw-item' id='raw'>
            Raw box
          </div>
        </div> */}
      </div>
    )
  }
}

export default Diagram
