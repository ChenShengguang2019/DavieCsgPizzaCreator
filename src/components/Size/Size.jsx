import React from 'react';
import size from '../../assets/size.png';
import './Size.css'

class Size extends React.Component {
    constructor(props) {
        super(props)
        
    }

    render() {
        console.log(this.props.name);
        const className = `size size-${this.props.name}`;
        return (
            <div className={className}>
                <img src={size} />
                <div >
                   {this.props.name}
                   <br/>
                     <span>$9.9</span>
                </div>
            </div>
        )
    }
}

export default Size;