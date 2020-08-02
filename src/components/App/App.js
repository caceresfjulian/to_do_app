import React from 'react';
import './App.css';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [
        {title: 'Task 1', description: 'Description 1', priority:'high', assignee:'agent 1' },
        {title: 'Task 2', description: 'Description 2', priority: 'low', assignee:'agent 2'},
        {title: 'Task 3', description: 'Description 3', priority: 'normal', assignee:'agent 3'},
        {title: 'Task 4', description: 'Description 4', priority: 'high', assignee: 'agent 4'}
      ],
      title: '',
      description: '',
      priority:'',
      assignee:'',
    }
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue (event) {
    let {name, value} = event.target;
    this.setState({[name]: value })
    console.log({name, value})
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <TodoForm onChange={this.onChangeValue}/>
          </div>
          <div className="col-8">
          <TodoList todos={this.state.todos}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
