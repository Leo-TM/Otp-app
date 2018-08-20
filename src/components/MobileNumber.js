import React from 'react';

const MobileNumber = (props)=>
{
    return (
        <div className = "option">
            <p className="option__text">
            {props.count}. {props.numberText}
            </p>

            <button 
                className = "button button--link"
                onClick = {(e)=> {   
                    e.preventDefault();                 
                    props.handleSendOtp(props.numberText);
                }}
            >
                Send OTP
            </button>
        </div>
    );
}

export default MobileNumber;