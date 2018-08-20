import React from 'react';
import Header from './Header'
import MobileNumbers from './MobileNumbers'
import AddMobileNumber from './AddMobileNumber'

export default class OtpApp extends React.Component
{
    constructor (props) 
    {
        super(props);
        this.handleRemoveMobileNumbers = this.handleRemoveMobileNumbers.bind(this);
        this.handleSendOtp = this.handleSendOtp.bind(this);
        this.handleAddMobileNumber  = this.handleAddMobileNumber .bind(this);
        this.state = {
            numbers:[]
        };
    }

//************************ Funtion Area ************************
   
    handleRemoveMobileNumbers()
    {
        this.setState(()=> ({numbers:[]}));
    }    

    handleSendOtp (numberToSend)
    {
        console.log("Button clicker");      
        

        // fetch('http://localhost:5050/api/chk?number=123')
        // .then((req)=> req.json())
        // .then((data)=>console.log(data));
        

        //http://localhost:5000/api/chk
        


        fetch(`https://shrouded-citadel-40191.herokuapp.com/api/chk`,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-type':'application/json'
            },
            body:JSON.stringify({mobileNumber:numberToSend})
        })
        .then((res) => res.json())
        .then((data)=>console.log(data));



    }

    handleAddMobileNumber (numberToAdd)
    {
        if(!numberToAdd)
        {
            return "Enter a valid number";
        }
        else if (this.state.numbers.indexOf(numberToAdd) >-1)
        {
            return 'This number already in the list';
        }
        this.setState((prevState)=>({numbers : prevState.numbers.concat(numberToAdd)}));
    }
//************************ Funtion Area ************************
 

    render()
    {
        const subtitle='An Assignment By Bitpod.io';
        return(
            <div >
                <Header subtitle={subtitle} />  
                <div className="container">
                    <div className = "widget">
                        <MobileNumbers
                            numbers={this.state.numbers}
                            handleRemoveMobileNumbers={this.handleRemoveMobileNumbers}
                            handleSendOtp={this.handleSendOtp}
                        />
                        <AddMobileNumber handleAddMobileNumber={this.handleAddMobileNumber}/>
                    </div>
                </div>
            </div>
        );
    }
}