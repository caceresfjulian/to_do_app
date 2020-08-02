import React from 'react';

class Todos extends React.Component {
    render() {
        return (
            <div className="card col-3 m-4 p-2">
                <h5 className="card-title">{this.props.title}</h5>
                <h5 className="card-title">{this.props.description}</h5>
                <h5 className="card-title">{this.props.priority}</h5>
                <h5 className="card-title">{this.props.assignee}</h5>
            </div>
        )
    }
}

export default Todos;