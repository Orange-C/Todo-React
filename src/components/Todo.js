import React from 'react'

var todo = React.createClass({
  propTypes: {
    onClick: React.PropTypes.func.isRequired,
    completed: React.PropTypes.bool.isRequired,
    text: React.PropTypes.string.isRequired
  },

  render() {
    return (
      <li
        onClick={this.props.onClick}
      >
        <span 
          style={{
            textDecoration: this.props.completed? 'line-through':'none'
          }}
        >
          {this.props.text}
        </span>
      </li>
    )
  }
}) 

export default todo