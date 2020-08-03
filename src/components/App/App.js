import React from 'react';
import './App.css';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';
import NavBar from '../NavBar/NavBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { title: 'Task 1', description: 'Description 1', priority: 'high', assignee: 'agent 1' },
        { title: 'Task 2', description: 'Description 2', priority: 'low', assignee: 'agent 2' },
        { title: 'Task 3', description: 'Description 3', priority: 'normal', assignee: 'agent 3' },
        { title: 'Task 4', description: 'Description 4', priority: 'high', assignee: 'agent 4' }
      ],
      title: '',
      description: '',
      priority: 'high',
      assignee: 'agent 1',
    }
    this.onChangeValue = this.onChangeValue.bind(this);
    this.onAddItem = this.onAddItem.bind(this);
    this.onRemoveItem = this.onRemoveItem.bind(this);
  }

  onChangeValue(event) {
    let { name, value } = event.target;
    this.setState({ [name]: value })
    console.log({ name, value })
  }

  onAddItem(event) {
    event.preventDefault();
    this.setState(state => {
      const todos = [...state.todos,
      {
        title: state.title,
        description: state.description,
        priority: state.priority,
        assignee: state.assignee,
      }];

      return {
        todos
      }
    })
  }

  onRemoveItem(index) {
    this.setState({
      todos: this.state.todos.filter(e => {
        return index !== this.state.todos.indexOf(e)
      })
    })
  }

  render() {
    return (
      <div>
        <NavBar counter={this.state.todos.length}/>
        <div className="container">
          <div className="row">
            <div className="col">
              <TodoForm onChange={this.onChangeValue} onClick={this.onAddItem} todos={this.state.todos} />
            </div>
            <div className="col-8">
              <TodoList todos={this.state.todos} onClick={this.onRemoveItem} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
