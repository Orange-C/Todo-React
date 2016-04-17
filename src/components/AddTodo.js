import React from 'react'

var AddTodo = React.createClass({
  propTypes: {
    onAddEnter: React.PropTypes.func.isRequired
  },

  render() {
    return (
      <div>
        <form
          className='addform'
          onSubmit={e => {
            let input = this.refs.input;
            e.preventDefault();
            if(!input.value.trim()){
              return
            }
            this.props.onAddEnter(input.value);
            input.value = '';
          }}
        >
          <input
            placeholder="Enter a todo" 
            ref="input"
          />
        </form>
      </div>
    )
  }
})

export default AddTodo