import React from 'react';

class Todos extends React.Component {
    render() {
        return (
            <div className="card col-3 m-2">
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{this.props.assignee}</h6>
                    <p className="card-text">{this.props.description}</p>                    
                    <h6 href="/" className="card-subtitle text-muted">{this.props.priority}</h6>
                    <button className="btn btn-danger mt-4" onClick={() => this.props.onClick(this.props.id)}>Delete</button>
                </div>
            </div>
        )
    }
}

export default Todos;