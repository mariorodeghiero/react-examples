import React, {Component} from 'react';

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
                    <ul>
                        <a href="#">
                            <li>Input</li>
                        </a>
                        <li>Checkbox</li>
                        <li>Text</li>
                        <li>Button</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Summary;