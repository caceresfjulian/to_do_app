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
        { title: 'Task 4', description: 'Description 4', priority: 'high', assignee: 'agent 4' },
        { title: 'Task 5', description: 'Description 5', priority: 'high', assignee: 'agent 5' },
        { title: 'Task 6', description: 'Description 6', priority: 'low', assignee: 'agent 2' },
        { title: 'Task 7', description: 'Description 7', priority: 'normal', assignee: 'agent 3' },
        { title: 'Task 8', description: 'Description 8', priority: 'high', assignee: 'agent 4' },
        { title: 'Task 9', description: 'Description 9', priority: 'high', assignee: 'agent 1' },
        { title: 'Task 10', description: 'Description 10', priority: 'low', assignee: 'agent 5' },
        { title: 'Task 11', description: 'Description 11', priority: 'normal', assignee: 'agent 3' },
        { title: 'Task 12', description: 'Description 12', priority: 'high', assignee: 'agent 5' },
      ],
      title: '',
      description: '',
      priority: 'high',
      assignee: 'agent 1',
      rangeTop: 9,
      rangeBottom: 0,
    }
    this.onChangeValue = this.onChangeValue.bind(this);
    this.onAddItem = this.onAddItem.bind(this);
    this.onRemoveItem = this.onRemoveItem.bind(this);
    this.addToRange = this.addToRange.bind(this);
    this.substractToRange = this.substractToRange.bind(this);
  }

  onChangeValue(event) {
    let { name, value } = event.target;
    this.setState({ [name]: value })
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

  addToRange(e) {
    e.preventDefault();
    if (this.state.todos.length > this.state.rangeTop) {
        this.setState({
          rangeTop: this.state.rangeTop + 9, 
          rangeBottom: this.state.rangeBottom + 9
        })
        
    } else {
        return false;
    }
}
  substractToRange(e) {
    e.preventDefault();
    if (this.state.rangeBottom > 0) {
        this.setState({
        rangeTop: this.state.rangeTop - 9,
        rangeBottom: this.state.rangeBottom - 9,
        });
    } else {
        return false;
    }
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
              <TodoForm onChange={this.onChangeValue} onClick={this.onAddItem} onClick2={this.addToRange} onClick3={this.substractToRange} todos={this.state.todos} counter={this.state.todos.length}/>
            </div>
            <div className="col-8">
              <TodoList todos={this.state.todos} onClick={this.onRemoveItem} rangeTop={this.state.rangeTop} rangeBottom={this.state.rangeBottom} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
