import React, { Component } from 'react';
import CommentForm from './components/CommentForm';
import CommentList from './components/ShowComment';


class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     todoItems: []
  //   };
  //   this.addTodo = this.addTodo.bind(this);
  // }

  // addTodo(newTodo) {
  //   this.setState({
  //     todoItems: this.state.todoItems.concat([newTodo])
  //   })
  // }
  render() {
    // let { todoItems } = this.state;
    return (
      <div>
        {/* <CommentForm onAddTodo={this.addTodo} />
        <CommentList items={todoItems} /> */}
        <CommentForm />
        <CommentList />
      </div >
    );
  }
}

export default App;
