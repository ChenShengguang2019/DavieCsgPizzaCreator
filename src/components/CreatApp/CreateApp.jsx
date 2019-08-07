import React from 'react';
import Details from '../Details';
import Sizes from '../Sizes';
import SubmmitPizzaOrder from '../SubmmitPizzaOrder';
import ToppingsSection from '../ToppingsSection';
import './CreateApp.css'

class CreateApp extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
          <form className="pizza-creator">
            <Details></Details>
            <Sizes/>
            <ToppingsSection></ToppingsSection>
            <SubmmitPizzaOrder/>
          </form>
        );  
    }
}

export default CreateApp;