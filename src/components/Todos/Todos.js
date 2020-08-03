import React from 'react';

class Todos extends React.Component {
    render() {
        let description;
        if (this.props.description.length > 13){
            description = `${this.props.description.slice(0, 13)}...`
        }else{
            description = this.props.description;
        }
        return (
            <div className="card col-3 m-2">
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{this.props.assignee}</h6>
                    <p className="card-text">{description}</p>                    
                    <h6 href="/" className="card-subtitle text-muted">{this.props.priority}</h6>
                    <button className="btn btn-danger mt-4" onClick={() => this.props.onClick(this.props.id)}>Delete <span className="badge badge-pill badge-light">{this.props.id + 1}</span></button>
                </div>
            </div>
        )
    }
}

export default Todos;