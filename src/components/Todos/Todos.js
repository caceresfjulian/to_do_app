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

    adjustSizeLayout(){
        if (window.screen.width <= 599 ){
            return "card task"
        }else if (window.screen.width >= 600 && window.screen.width < 800){
            return "card col-4 task"
        } else {
            return  "card col-3 m-3 task"
        }
    }
    render() {
        let title;
        if (this.props.title.length > 7) {
            title = `${this.props.title.slice(0, 5)}...`
        } else {
            title = this.props.title;
        }
        let description;
        if (this.props.description.length > 8) {
            description = `${this.props.description.slice(0, 5)}...`
        } else {
            description = this.props.description;
        }
        return (
            <div className={this.adjustSizeLayout()} style={this.applyColor(this.props.priority)}>
                <div className="card-body">
                    <h5 className="card-title taskTitle" onClick={ () => this.props.showDetail(this.props.title, this.props.description, this.props.assignee, this.props.priority)}>{title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{this.props.assignee}</h6>
                    <p className="card-text">{description}</p>
                    <button className="btn btn-danger btn-sm" onClick={() => this.props.onClick(this.props.id, this.props.title)}>Delete</button>
                </div>
            </div>
        )
    }
}

export default Todos; 