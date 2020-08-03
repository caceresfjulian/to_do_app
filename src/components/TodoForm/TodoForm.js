import React from 'react';
import logo from './logo.svg';
import SearchButtons from '../SearchButtons/SearchButtons';

class TodoForm extends React.Component {
    render() {
        return (
            <div className="container text-center">
                <img src={logo} className="App-logo" alt="logo"/>
                <div className="card p-3">
                <h3 className="card-title pt-2">Task Generator</h3>
                    <form>
                        <div className="form-group">
                            <label htmlFor="taskTitle">Title:</label>
                            <input type="text" id="taskTitle" className="form-control" onChange={this.props.onChange} name="title"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="taskDescription">Description:</label>
                            <input type="text" id="taskDescription" className="form-control" onChange={this.props.onChange} name="description"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="taskPriority">Priority:</label>
                            <select id="taskPriority" className="form-control" onChange={this.props.onChange} name="priority">
                                <option value="high">High</option>
                                <option value="normal">Normal</option>
                                <option value="low">Low</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="taskAssignee">Assignee:</label>
                            <select id="taskAssignee" className="form-control" onChange={this.props.onChange} name="assignee">
                                <option value="agent 1">Agent 1</option>
                                <option value="agent 2">Agent 2</option>
                                <option value="agent 3">Agent 3</option>
                                <option value="agent 4">Agent 4</option>
                                <option value="agent 5">Agent 5</option>
                            </select>
                        </div>
                        <SearchButtons onClick={this.props.onClick} onClick2={this.props.onClick2} onClick3={this.props.onClick3} counter={this.props.counter}/>
                    </form>
                </div>
            </div>
        )
    }
}

export default TodoForm;