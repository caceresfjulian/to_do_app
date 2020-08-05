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
        let title;
        if (this.props.title.length > 11) {
            title = `${this.props.title.slice(0, 8)}...`
        } else {
            title = this.props.title;
        }
        let description;
        if (this.props.description.length > 13) {
            description = `${this.props.description.slice(0, 13)}...`
        } else {
            description = this.props.description;
        }
        return (
            <div className="card col-3 mx-2 my-1 task" style={this.applyColor(this.props.priority)}>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{this.props.assignee}</h6>
                    <p className="card-text">{description}</p>
                    <h6 href="/" className="card-subtitle text-muted">{this.props.priority}</h6>
                    <button className="btn btn-danger mt-4 btn-sm" onClick={() => this.props.onClick(this.props.id, this.props.title)}>Delete <span className="badge badge-pill badge-light">{this.props.id + 1}</span></button>
                </div>
            </div>
        )
    }
}

export default Todos; 