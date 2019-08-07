import React from 'react';
import './Toppings.css';
import Topping from '../Topping';

class Toppings extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className="toppings__layout">
              <Topping></Topping>
              <Topping></Topping>
              <Topping></Topping>
              <Topping></Topping>
              <Topping></Topping>
              <Topping></Topping>
            </div>
        );
    }
}
export default Toppings;