import React from 'react'
import AddBar from '../containers/AddBar'
import VisibleTodoList from '../containers/VisibleTodoList'
import Footer from './Footer'

let App = React.createClass({
  render() {
    return (
      <div className="app">
        <h3 className="headline">TodoApp based on React + Redux + Webpack</h3>
        <AddBar />
        <VisibleTodoList />
        <Footer /> 
      </div>
    );
  }
})

export default App;