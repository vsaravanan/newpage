import PropTypes from 'prop-types'
import React from 'react'

// Component
class PropTypesExample extends React.Component {
  render() {
    return (
      <div>
        {/* printing all props */}
        <h1>
          {this.props.arrayProp}
          <br />

          {this.props.stringProp}
          <br />

          {this.props.numberProp}
          <br />

          {this.props.boolProp}
          <br />
        </h1>
      </div>
    )
  }
}

// validating prop types
PropTypesExample.propTypes = {
  arrayProp: PropTypes.array,
  stringProp: PropTypes.string,
  numberProp: PropTypes.number,
  boolProp: PropTypes.bool,
}

// creating default props
PropTypesExample.defaultProps = {
  arrayProp: ['Ram', 'Shyam', 'Raghav'],
  stringProp: 'GeeksforGeeks',
  numberProp: 10,
  boolProp: true,
}

export default PropTypesExample
