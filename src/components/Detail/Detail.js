import React from 'react';

class Detail extends React.Component {
    render() {
        return (
            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.70)', height: '100vh', width: '100vw', zIndex: '10', position: "absolute", top: 0, left: 0, }}>
                <div className="container" id="overlay">
                        <div className="col align-self-center">
                           <div className="card">
                           <span className="fix-top text-right mx-3 mt-2">X</span>
                                <div className="card-body text-center mb-4">
                                    <div className="card-title"><h2>Title</h2></div>
                                    <div className="card-subtitle text-muted"><h4>Assignee - Priority</h4></div>
                                    <p className="card-text text-justify pt-4"> Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut at aliquam illo, odit aliquid voluptate nesciunt? Veritatis aliquam possimus doloremque animi, in aut quas magni quam magnam cupiditate aperiam autem nisi illo molestias! Quaerat, laborum libero possimus, ab esse atque exercitationem fugit soluta, veniam aut aspernatur ut odit? Qui, aperiam.</p>
                                </div>
                           </div> 
                        </div>
                </div>
            </div>
        )
    }
}

export default Detail;