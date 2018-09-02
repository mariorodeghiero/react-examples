import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

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
                    <NavLink to="/">Get started</NavLink>

                    <div className="components">
                        <NavLink to="/array" activeClassName="active">Array</NavLink>
                        <NavLink to="/change-text" activeClassName="active">Change text</NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default Summary;