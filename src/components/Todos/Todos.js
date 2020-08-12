import React from 'react';

class Todos extends React.Component {
    applyColor(priority) {
        if (priority === 'high') {
            return { backgroundColor: "#F7C5C2" }
        } else if (priority === 'normal') {
            return { backgroundColor: "#B4F7A4" }
        } else {
            return { backgroundColor: "#A4B2F7" }
        }
    }

    render() {
        return (
            <div className="card col-4 col-md-3 m-md-3 p-0 text-truncate" style={this.applyColor(this.props.priority)}>
                <div className="card-body">
                    <h5 className="card-title taskTitle" onClick={ () => this.props.showDetail(this.props.title, this.props.description, this.props.assignee, this.props.priority)}>{this.props.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{this.props.assignee}</h6>
                    
                    <button className="btn btn-danger btn-sm" onClick={() => this.props.onClick(this.props.id, this.props.title)}>Delete</button>
                </div>
            </div>
        )
    }
}

export default Todos; 