import { connect } from 'react-redux'
import { addTodo } from '../actions' 
import AddTodo from '../components/AddTodo'

const mapStateToProps = (state) => {
  return {
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddEnter: (text) => {
      dispatch(addTodo(text))
    }
  }
}

const AddBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo)

export default AddBar;

// let AddTodo = ({ dispatch }) => {
//   let input

//   return (
//     <form
//       className='addform'
//       onSubmit={e => {
//         e.preventDefault();
//         if(!input.value.trim()){
//           return
//         }
//         dispatch(addTodo(input.value));
//         input.value = '';
//       }}
//     >
//       <input
//         placeholder="Enter a todo" 
//         ref={node => {
//           input = node
//         }} 
//       />
//     </form>
//   )
// }