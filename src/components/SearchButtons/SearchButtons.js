import React from 'react';

class SearchButtons extends React.Component {
    render() {
        return (
            <div>
                <button className="btn btn-light ">Prev</button>
                <button type="submit" className="btn btn-primary mx-4" onClick={this.props.onClick}>Submit</button>
                <button className="btn btn-light ">Next</button>
            </div>
        )
    }
}

export default SearchButtons;