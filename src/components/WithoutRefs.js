import React from 'react'

// without refs
export default class WithoutRefs extends React.Component {
  constructor() {
    super()
    this.state = { sayings: '' }
  }
  update(e) {
    this.setState({ sayings: e.target.value })
  }
  render() {
    return (
      <div>
        Mukul Says <input type='text' onChange={this.update.bind(this)} />
        <br />
        <em>{this.state.sayings}</em>
      </div>
    )
  }
}
