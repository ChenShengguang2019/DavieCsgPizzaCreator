import React from 'react';
import Title from '../Title'
import './Details.css';
import InputText from '../InputText';

class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detailsInfo: [{
                keyName: 'name',
                label: 'Name',
            }, {
                keyName: 'email',
                label: 'Email'
            }, {
                keyName: 'confirmEmail',
                label: 'Confirm Email'
            }, {
                keyName: 'address',
                label: 'Address'
            }, {
                keyName: 'postCode',
                label: 'Postcode'
            }, {
                keyName: 'contactNumber',
                label: 'Contact Number'
            }]
        }
    }

    getDetailsInfo() {
        const { detailsInfo } = this.state;
        return detailsInfo.map(({ keyName, label }) => {
            return (
               <InputText key={keyName} name={label} ></InputText>
            )
        })
    }


    render() {
        return (
            <section>
                <Title>Enter your details</Title>
                <div className="details__layout">
                    {this.getDetailsInfo()}
                </div>
            </section>
        );
    }
}

export default Details;