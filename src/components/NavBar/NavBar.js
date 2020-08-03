import React from 'react';

class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <div>
                    <span>Tasks</span>
                    <span className="badge badge-pill badge-danger mx-2">{this.props.counter}</span>
                </div>
            </nav>
        )
    }
}

export default NavBar;