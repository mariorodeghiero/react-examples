import React, {Component} from 'react';

class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="show">
                <form className="check-box">
                    <input type="checkbox" value="html"/>HTML<br/>
                    <input type="checkbox" value="css"/>CSS<br/>
                    <input type="checkbox" value="sass"/>SASS<br/>
                    <input type="checkbox" value="python"/>PYTHON<br/>
                </form>
            </div>
        );
    }
}

export default Checkbox;