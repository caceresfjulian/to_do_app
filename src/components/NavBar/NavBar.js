import React from 'react';
import SearchButtons from '../SearchButtons/SearchButtons';

class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light fixed-top d-flex justify-content-sm-between justify-content-center">
                <div className="d-sm-flex align-items-center justify-content-start d-block">
                    <span>Tasks</span>
                    <span className="badge badge-pill badge-danger mx-2">{this.props.counter}</span>
                <select className="form-control-sm border-dark mx-1 mx-sm-4" name="byPriority" onChange={this.props.onChange}>
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
                <div className="d-flex align-items-center">
                    <span className="d-inline mx-5 mx-sm-4">{this.props.page/9} / {Math.ceil(this.props.counter/9)}</span>
                    <SearchButtons onClick2={this.props.onClick2} onClick3={this.props.onClick3} />
                </div>
            </nav>
        )
    }
}

export default NavBar;