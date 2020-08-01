import React from 'react';
import './App.css';
import TodoForm from '../TodoForm/TodoForm';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [],
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
