import React, {Component} from 'react';

class Changetext extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
        this.handleChange = this
            .handleChange
            .bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div className="show">
                <h2>Change of state</h2>
                <label>Name:</label>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                    placeholder="Enter your name"/>
                <p>{this.state.value}</p>
            </div>
        );
    }
}

export default Changetext;