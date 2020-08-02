import React from 'react';
import './App.css';
import TodoForm from '../TodoForm/TodoForm';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [
        {title: 'Task 1', description: 'Description 1', priority:'high', asignee:'agent 1' },
        {title: 'Task 2', description: 'Description 2', priority: 'low', asignee:'agent 2'},
        {title: 'Task 3', description: 'Description 3', priority: 'normal', asignee:'agent 3'},
        {title: 'Task 4', description: 'Description 4', priority: 'high', asignee: 'agent 4'}
      ],
      value: '',
    }
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue = event => {
    this.setState({value: event.target.value })
    console.log(event.target.value)
  }



  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <TodoForm onChange={this.onChangeValue}/>
          </div>
          <div className="col-8">
          </div>
        </div>
      </div>
    );
  }
}

export default App;
