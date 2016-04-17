import React from 'react'
import Todo from './Todo'

var TodoList = React.createClass({
  propTypes: {
    todos: React.PropTypes.arrayOf(React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      completed: React.PropTypes.bool.isRequired,
      text: React.PropTypes.string.isRequired
    })),
    filter: React.PropTypes.string.isRequired,
    onTodoClick: React.PropTypes.func.isRequired
  },

  render() {
    var todoNodes = this.props.todos.map((todo)=>{
      return (
        <Todo 
          key={todo.id}
          completed={todo.completed}
          text={todo.text}
          onClick={() => this.props.onTodoClick(todo.id)}
        />
      )
    })

    var visibilityInfo = ((filter) => {
      let len = this.props.todos.length;
      let suffix = len === 1? '':'s' 
      switch(filter) {
        case 'SHOW_ALL':
          return len + ' todo' + suffix +' in all'
        case 'SHOW_COMPLETED':
          return len + ' todo' + suffix +' completed'
        case 'SHOW_ACTIVE': 
          return len + ' todo' + suffix +' to be done'
      }
    })(this.props.filter)

    return (
      <div>
        <h4 className="headline">
          TodoList
          <span className="info">
            {visibilityInfo}
          </span>
        </h4>
        <ul className='todo-list'>
          {todoNodes}
        </ul>  
      </div>
    );
  }
})

export default TodoList;