import React from 'react';
import Title from '../Title';
import './Sizes.css';
import Size from '../Size';


class Sizes extends React.Component {
    constructor(props) {
        super(props)
        // console.log("size:" +size);
    }
    render() {
        return (
            <section>
                <Title>Select your size</Title>
                <div className="sizes">
                      <Size name="small"/>
                      <Size name="middle"/>
                      <Size name="large"/>
                </div>
            </section>

        );
    }
}

export default Sizes;