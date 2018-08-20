import React from 'react';
import MobileNumber from './MobileNumber';

const MobileNumbers = (props) =>
{
    return(
        <div>
            <div className = "widget-header">
                <h3 className = "widget-header widget-header__title">Mobile Numbers</h3>
                <button
                className = "button button--link" 
                onClick={props.handleRemoveMobileNumbers}
                disabled={props.numbers.length === 0}
                >
                    Remove All
                </button>

                
                {/*<button 
                    onClick = {()=>{
                      fetch('http://localhost:5000/api/chk')
                      .then((res) => res.json())
                      .then((msg)=>console.log(msg))
                      .catch((e)=>console.log(e));
                    }}

                    className = "button">
                    just testin
                </button>*/}
                
                
                

                
            </div>
            {props.numbers.length === 0 && <p className="widget__message">Enter mobile numbers to send OTPs</p>}
            {
                props.numbers.map((number, index)=>
                {
                  return(
                      <MobileNumber 
                        key = {number}
                        numberText = {number}
                        count = {index + 1}
                        handleSendOtp={props.handleSendOtp}
                      />
                  );
                }
            )
            }
            
        </div>
    );
}


export default MobileNumbers;