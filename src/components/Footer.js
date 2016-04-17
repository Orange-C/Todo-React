import React from 'react'
import FilterLink from '../containers/FilterLink'

var Footer = React.createClass({
  render() {
    return (
      <div className="footer">
        <FilterLink filter="SHOW_ALL">
          All
        </FilterLink>
        <FilterLink filter="SHOW_ACTIVE">
          Active
        </FilterLink>
        <FilterLink filter="SHOW_COMPLETED">
          Completed
        </FilterLink>
      </div>
    )
  }
})

export default Footer;