import React, {Component} from 'react';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const skills = ["js", "vue.js", "React.js", "Web-pack"]

        return (
            <div >
                < ul className="skills">
                    <h4>Skills:</h4>
                    {skills.map((skill, index) => {
                        return <li key={index}>{skill}</li>
                    })}
                </ul>
            </div>
        );
    }
}

export default List;