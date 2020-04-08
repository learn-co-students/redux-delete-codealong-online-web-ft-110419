// ./src/components/todos/TodosContainer.js
import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'
 
class TodosContainer extends Component {
 
  renderTodos = () => {
    return this.props.todos.map(todo => <Todo delete={this.props.delete} key={todo.id} todo={todo} />)
  } //ToDo is receiving this.props.delete. key was based off the index provided by map--- was text={todo}, where did text go?
  //props are coming from mapDispatchtoProps aka store? what about todo.id why not acces with this.props.todos 
  
 
  render() {
    return(
      <div>
        {this.renderTodos()}
      </div>
    );
  }
};
 
const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    delete: todoText => dispatch({type: 'DELETE_TODO', payload: todoText })
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
