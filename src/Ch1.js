import React from 'react';

// recall that you can render variables inside JSX(the weird html-looking javascript)
// by using { and }
// these variables can be anything. in this case we render a simple number and a string

// NOTE: sicne these variables are non-changing and just for demonstration purposes,
// we define them outside the function as constants. In this case, since they won't be changed,
// they do not have to be defined with the useState hook as component state

// also note that variables can be used for properties (props) as well, 
// like changing the link of an anchor tag programmatically

// play around with the following values and observe how the output changes/behaves

const number = 69;
const name = "Siskos";
const link = "https://www.google.com";

function Ch1() {

    return (
        <div>
            Hello! My name is <strong>{name}</strong> and my favorite number is {number}
            <a href={link}>Some site</a>
        </div>
    );

}

export default Ch1;