import React from 'react';
import './InputText.css';

class InputText extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            (<div className="detailInfo">
                <label>{this.props.name}</label>
                <input type="text"></input>
            </div>
            )
        )
    }
}
export default InputText;
