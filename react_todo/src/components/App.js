import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Form from './Form';
import Todo from './Todo';
import EditTodo from './EditTodo';

class App extends Component {
  constructor(props) {
    super(props)
    //stateの定義
    this.state = {
      todos: [], //todosの初期値の中身は空っぽ
      currentId: 0,
    };
  }

  handleSubmit = text => {
    const newTodo = {
      id: this.state.currentId,
      text,
      editing: false
    };
    const newTodos = [...this.state.todos, newTodo]
    this.setState({ todos: newTodos });
    this.state.currentId++;
  }

  handleClickDelete = id => {
    const newTodos = this.state.todos.filter(todo => todo.id !== id)
    this.setState({ todos: newTodos });
  };

  handleClickEdit = (id, key, value) => {
    const newTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          editing: true
        };
      }

      return todo;
    });

    this.setState({ todos: newTodos });
  };

  handleUpdateTodoText = (id, text) => {
    const newTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          text,
          editing: false
        };
      }

      return todo;
    });

    this.setState({ todos: newTodos });
  };


  render() {
    return (
      <Container maxWidth="sm">
        <h1>TODO APP</h1>
        {/* Form コンポーネント */}
        <Form onSubmit={this.handleSubmit} />

        {/* Todo コンポーネント */}
        <ul>
          {this.state.todos.map(({ id, text, editing }) => {
            return (
              <li key={id}>
                {editing ? (
                  <EditTodo
                    text={text}
                    id={id}
                    onSubmit={this.handleUpdateTodoText}
                  />
                ) : (
                    <Todo
                      id={id}
                      text={text}
                      onClick={this.handleClickEdit}
                      onDelete={this.handleClickDelete}
                    />
                  )}
              </li>
            );
          })}
        </ul>
      </Container>
    )
  }
}

export default App;