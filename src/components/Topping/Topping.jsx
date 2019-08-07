import React from 'react';
import './Topping.css';
import anchovy from '../../assets/toppings/anchovy.svg'

class Topping extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="topping__layout">
                    <img src={anchovy}></img>
                    <span>Anchovy</span>
                    <div>
                        <button>+</button>
                        <span>0</span>
                        <button>-</button>
                    </div>
            </div>
        )
    }
}

export default Topping;