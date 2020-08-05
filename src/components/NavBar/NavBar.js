import React from 'react';

class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <div>
                    <span>Tasks</span>
                    <span className="badge badge-pill badge-danger mx-2">{this.props.counter}</span>
                </div>
                <div>
                <select className="form-control-sm border-dark mx-4" name="byPriority" onChange={this.props.onChange}>
                    <option value="all">All</option>
                    <option value="high">High</option>
                    <option value="normal">Normal</option>
                    <option value="low">Low</option>
                </select>
                <select className="form-control-sm border-dark" name="byAgent" onChange={this.props.onChange}>
                    <option value="all">All agents</option>
                    <option value="agent 1">Agent 1</option>
                    <option value="agent 2">Agent 2</option>
                    <option value="agent 3">Agent 3</option>
                    <option value="agent 4">Agent 4</option>
                    <option value="agent 5">Agent 5</option>
                </select>
                </div>
                <span>{this.props.page/9} / {Math.ceil(this.props.counter/9)}</span>
            </nav>
        )
    }
}

export default NavBar;