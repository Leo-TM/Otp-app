import React from 'react';

export default class AddMobileNumber extends React.Component
{
    constructor (props)
    {
        super(props);
        this.handleAddMobileNumber = this.handleAddMobileNumber.bind(this);
        this.state = {
            error:undefined
        };
    }
    handleAddMobileNumber (e)
    {
        e.preventDefault();

        const number = e.target.elements.number.value.trim();
        const error = this.props.handleAddMobileNumber(number);

        this.setState(()=>({error}));

        if(!error)
        {
            e.target.elements.number.value = '';
        }
    }
    render()
    {
        return(
            <div>
                {this.state.error && <p className = "add-number-error">{this.state.error}</p>}
                <form 
                    className = "add-number"
                    onSubmit = {this.handleAddMobileNumber}>
                    <input className = "add-number__input"
                        type="text" name="number" />
                    <button className= "button">Add Number</button>
                </form>
            </div>
        );
    }    
}