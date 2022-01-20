import React from 'react';

// Since you can control WHAT to show with a variable, and you can decide WHAT a variable
// will hold with an if check, it is only natural that you can decide WHAT to show 
// with an if check
// I belive the example is self-explainatory. Play with the boolean variable showHiddenText and observe
// the results

function Ch3() {

    // change this variable from true to false and back to true and observe the output
    const showHiddenText = true;

    const hiddenText= <p>This is hidden text!</p>;

    let hiddenTextJSX;
    if(showHiddenText) {
        hiddenTextJSX = hiddenText;
    } else {
        // when you do not want to render anything you STILL have to assign SOME value
        // to the final rendered variable, otherwise you will get an error (undefined variable)
        hiddenTextJSX = <></>
    }

    /*
    // You can also do it wayyyy shorter:
    const hiddenTextJSX = showHiddenText ? hiddenText : <></>;
    
    // Or even removing the intermediate variable
    const hiddenTextJSX = showHiddenText ? <p>This is hidden text!</p> : <></>
    */

    return (
        <div>
            This text should always be visible!
            {hiddenTextJSX}
        </div>
    );

}

export default Ch3;