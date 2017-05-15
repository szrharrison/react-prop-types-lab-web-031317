import React from 'react'

class Product extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p><strong>Made By:</strong> {this.props.producer}</p>
        <ul>
          {this.props.hasWatermark &&
            <li><strong>Watermarked</strong></li>
          }
          <li><strong>Color:</strong> {this.props.color}</li>
          <li><strong>Weight:</strong> {this.props.weight} lbms</li>
        </ul>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  // weight: React.PropTypes.number.isRequired,
  weight: function(props, weight, componentName) {
    if ( !props[weight] ) {
      return new Error('There must be a weight')
    }
    if ( typeof props[weight] != 'number' ) {
      return new Error('The weight must be a number')
    }
    if ( props[weight] < 80 || props[weight] > 300 ) {
      return new Error(
        'Invalid prop `' + weight + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      )
    }
  }
}

export default Product
