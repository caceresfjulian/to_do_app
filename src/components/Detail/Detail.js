import React from 'react';

class Detail extends React.Component {
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
        let show;
        if(this.props.showDetail === true){
           show = "d-block"
        } else {
            show = "d-none"
        }
        return (
            <div className={show} style={{ backgroundColor: 'rgba(0, 0, 0, 0.70)', height: '100vh', width: '100vw', zIndex: '10', position: "absolute", top: 0, left: 0, show}}>
                <div className="container" id="overlay">
                        <div className="col align-self-center">
                           <div className="card" style={this.applyColor(this.props.info.priority)}>
                           <span className="text-right mx-3 mt-2 close" onClick={ () => this.props.onClick(this.props.info.title, this.props.info.description, this.props.info.assignee, this.props.info.priority )}>X</span>
                                <div className="card-body text-center mb-4">
                                    <div className="card-title"><h2>{this.props.info.title}</h2></div>
                                    <h4><span className="badge badge-dark mx-3 p-2">{this.props.info.priority}</span><span className="text-muted">{String(this.props.info.assignee)[0].toUpperCase()+String(this.props.info.assignee).slice(1)}</span></h4>
                                    <p className="card-text pt-4"> {this.props.info.description}</p>
                                </div>
                           </div> 
                        </div>
                </div>
            </div>
        )
    }
}

export default Detail;