import React from 'react'

var Link = React.createClass({
  propTypes: {
    active: React.PropTypes.bool.isRequired,
    children: React.PropTypes.node.isRequired,
    onClick: React.PropTypes.func.isRequired
  },

  render() {
    return (
      <a 
        className={this.props.active? 'showbtn active':'showbtn'}
        href="#"
        onClick={e => {
          e.preventDefault();
          this.props.onClick();
        }}
      >
        {this.props.children}
      </a>
    )
  }
})

export default Link