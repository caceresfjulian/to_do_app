import React from 'react';
import logo from './logo.svg';

class TodoForm extends React.Component {
    render() {
        return (
            <div>
            <a className="btn btn-light p-3 text-center todoForm d-block d-sm-none" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Task Generator</h2>
            </a>
            <div className="collapse" id="collapseExample">
            <div className="card card-body">
                <form>
                    <div className="form-group">
                        <label htmlFor="taskTitlemini">Title:</label>
                        <input type="text" id="taskTitlemini" className={this.props.inputStyle} onChange={this.props.onChange} name="title" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="taskDescriptionmini">Description:</label>
                        <input type="text" id="taskDescriptionmini" className={this.props.inputStyle} onChange={this.props.onChange} name="description" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="taskPrioritymini">Priority:</label>
                        <select id="taskPrioritymini" className="form-control" onChange={this.props.onChange} name="priority">
                            <option value="high">High</option>
                            <option value="normal">Normal</option>
                            <option value="low">Low</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="taskAssigneemini">Assignee:</label>
                        <select id="taskAssigneemini" className="form-control" onChange={this.props.onChange} name="assignee">
                            <option value="agent 1">Agent 1</option>
                            <option value="agent 2">Agent 2</option>
                            <option value="agent 3">Agent 3</option>
                            <option value="agent 4">Agent 4</option>
                            <option value="agent 5">Agent 5</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary mx-4" onClick={this.props.onClick}>Submit</button>
                </form>
            </div>
            </div>
            <div className="card p-3 text-center todoForm d-none d-sm-block">
                <img src={logo} className="App-logo" alt="logo" />
                <h3 className="card-title pt-2">Task Generator</h3>
                <form>
                    <div className="form-group">
                        <label htmlFor="taskTitle">Title:</label>
                        <input type="text" id="taskTitle" className={this.props.inputStyle} onChange={this.props.onChange} name="title" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="taskDescription">Description:</label>
                        <input type="text" id="taskDescription" className={this.props.inputStyle} onChange={this.props.onChange} name="description" />
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
                    <button type="submit" className="btn btn-primary mx-4" onClick={this.props.onClick}>Submit</button>
                </form>
            </div>
            </div>
        )
    }
}

export default TodoForm;