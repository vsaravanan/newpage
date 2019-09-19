import React from 'react'

// using callback refs
export default class CallbackRefs extends React.Component {
  constructor() {
    super()
    this.state = { sayings: '' }
  }
  update() {
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
          onChange={this.update.bind(this)}
        />
        <br />
        <em>{this.state.sayings}</em>
      </div>
    )
  }
}
