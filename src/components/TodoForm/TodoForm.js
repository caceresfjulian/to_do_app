import React from 'react';
import logo from './logo.svg';

class TodoForm extends React.Component {
    render() {
        return (
            <div className="container text-center">
                <img src={logo} className="App-logo" alt="logo"/>
                <div className="card">
                <h3 className="card-title pt-2">Task Generator</h3>
                    <form>
                        <div className="form-group">
                            <label htmlFor="taskTitle">Title:</label>
                            <input type="text" id="taskTitle" className="ml-2" onChange={this.props.onChange} name="title"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="taskDescription">Description:</label>
                            <input type="text" id="taskDescription" className="ml-2" onChange={this.props.onChange} name="description"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="taskPriority">Priority:</label>
                            <select id="taskPriority" className="ml-2" onChange={this.props.onChange} name="priority">
                                <option value="high">High</option>
                                <option value="normal">Normal</option>
                                <option value="low">Low</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="taskAssignee">Assignee:</label>
                            <select id="taskAssignee" className="ml-2" onChange={this.props.onChange} name="assignee">
                                <option value="agent_1">Agent 1</option>
                                <option value="agent_2">Agent 2</option>
                                <option value="agent_3">Agent 3</option>
                                <option value="agent_4">Agent 4</option>
                                <option value="agent_5">Agent 5</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary mb-2" onClick={this.props.onClick}>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default TodoForm;