import React from 'react';
import './App.css';
import TodoForm from '../TodoForm/TodoForm';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <TodoForm />
          </div>
          <div className="col-8">
          </div>
        </div>
      </div>
    );
  }
}

export default App;
