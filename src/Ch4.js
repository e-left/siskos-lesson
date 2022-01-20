import React, { useState } from "react";

// this is the same example as before, but now we use a button to toggle the visibility of the text
// recall that every time you change a state variable the component gets re-rendered
// this is why the screen output changes

function Ch4() {
    let [visible, changeVisible] = useState(false); // by default it is not visible

    // when defining callbacks ALWAYS USE ARROW FUNCTIONS
    // if you don't you will experience difficulties that you don't want to :)
    // react was a dark territory before arrow functions
    let buttonCallback = () => {
        /*
        // You can do it way more detailed:
        let newVisible;
        if(visible) {
            newVisible = false;
        } else {
            newVisible = true;
        }

        changeVisible(newVisible);

        // or shorted
        let newVisible = !visible;

        changeVisible(newVisible);

        // but I belive you can understand this
        */
        changeVisible(!visible);
    }

    const hiddenText= <p>This is hidden text!</p>;

    const hiddenTextJSX = visible ? hiddenText : <></>;

    return (
        <div>
            This text should always be visible!
            {/* since the function is essentially a variable (everything in JS is a variable), we need {} around it */}
            <button onClick={buttonCallback}>Toggle text</button> 
            {hiddenTextJSX}
        </div>
    );
}

export default Ch4;