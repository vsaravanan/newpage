import React, { Component } from 'react'
import TreeNode from './TreeNode'
import data from './data'

class CategoryTree extends Component {
  state = {
    data: data,
  }

  componentWillMount = () => {
    this.setState({ data: data })
  }

  onSelect = node => {
    if (this.state.selected) {
      this.state.selected.setState({ selected: false })
    }
    this.setState({ selected: node })
    node.setState({ selected: true })
    if (this.props.onCategorySelect) {
      this.props.onCategorySelect(node)
    }
  }
  render() {
    return (
      <div className='panel panel-default'>
        <div className='panel-body'>
          <ul className='category-tree'>
            <TreeNode
              key={this.state.data.id}
              data={this.state.data}
              onCategorySelect={this.onSelect}
            />
          </ul>
        </div>
      </div>
    )
  }
}

export default CategoryTree
