import React from 'react';

class SearchButtons extends React.Component {
    render() {
        return (
            <div>
                <button className="btn btn-light mx-2"  onClick={this.props.onClick3}>Prev</button>
                <button className="btn btn-light"  onClick={this.props.onClick2}>Next</button>
            </div>
        )
    }
}

export default SearchButtons;