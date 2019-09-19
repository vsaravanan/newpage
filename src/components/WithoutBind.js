import React from 'react'

// using without bind
export default class WithoutBind extends React.Component {
  constructor() {
    super()
    this.state = { sayings: '' }
  }
  update = () => {
    this.setState({ sayings: this.textbox.value })
  }
  render() {
    return (
      <div>
        Mukul Says{' '}
        <input
          type='text'
          ref={e => {
            this.textbox = e
          }}
          onChange={this.update}
        />
        <br />
        <em>{this.state.sayings}</em>
      </div>
    )
  }
}
