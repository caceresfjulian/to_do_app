import React from 'react';
import logo from './logo.svg';

class TodoForm extends React.Component {
    render() {
        return (
            <div className="container text-center">
                <img src={logo} className="App-logo" alt="logo"/>
                <div className="card">
                <h3 class="card-title pt-2">Task Generator</h3>
                    <form>
                        <div className="form-group">
                            <label for="taskTitle">Title:</label>
                            <input type="text" id="taskTitle" className="ml-2"/>
                        </div>
                        <button type="submit" className="btn btn-primary mb-2">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default TodoForm;