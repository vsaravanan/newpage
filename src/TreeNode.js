import React, { Component } from 'react'
import classNames from 'classnames'

class TreeNode extends Component {
  state = {
    children: [],
  }

  onCategorySelect = ev => {
    // ev.preventDefault()
    // ev.stopPropagation()
    if (this.props.data.children) {
      if (this.props.onCategorySelect) {
        this.props.onCategorySelect(this)
      }
    }
  }

  onChildDisplayToggle = ev => {
    ev.preventDefault()
    ev.stopPropagation()
    if (this.props.data.children) {
      if (this.state.children && this.state.children.length) {
        this.setState({ children: null })
      } else {
        this.setState({ children: this.props.data.children })
      }
    }
  }

  render() {
    var classes = classNames({
      'has-children': this.props.data.children ? true : false,
      open: this.state.children && this.state.children.length ? true : false,
      closed: this.state.children ? false : true,
      selected: this.state.selected ? true : false,
    })

    return (
      <li ref={'node'} className={classes} onClick={this.onChildDisplayToggle}>
        <span onClick={this.onCategorySelect} data-id={this.props.data.id}>
          {this.props.data.name}
        </span>
        <ul>
          {this.state.children && this.state.children.map
            ? this.state.children.map(child => (
                <TreeNode key={child.id} data={child} onCategorySelect={this.onCategorySelect} />
              ))
            : null}
        </ul>
      </li>
    )
  }
}

export default TreeNode
