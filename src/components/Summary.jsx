import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Summary extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="container-summary">
                <h1>Summary</h1>
                <div className="summary">
                    <Link className="link-router" to="/">Home</Link>
                    <Link className="link-router" to="/array">Array</Link>
                    <Link className="link-router" to="/change-text">Change text</Link>
                </div>
            </div>
        );
    }
}

export default Summary;