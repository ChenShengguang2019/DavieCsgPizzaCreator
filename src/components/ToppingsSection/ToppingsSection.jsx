import React from 'react'
import Title from '../Title';
import Toppings from '../Toppings'

class ToppingsSection extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div >
                <Title>Choose your toppings</Title>
                <Toppings></Toppings>
            </div>
        );
    }
}
export default ToppingsSection;