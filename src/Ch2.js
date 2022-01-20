import React from 'react';

// since you can render variables, you can also render JSX! recall that JSX is fancy word for
// JavaScript eXtended, which means that all of the HTML tags, components and data they carry
// is essentially a JavaScript object, AKA a variable. Play with the example below

// NOTE: here we define the variable renderedJSX inside the function as a constant. There is 
// no functional difference from the last example wherew we defined the variables outside the function.
// It's just that most of the time you will want to do calculations/checks with variables within
// the function (react component props or data that you get from a remote server) so you 
// will define the JSX inside the function after calculations and checks

function Ch2() {

    const renderedJSX = <div>
        <h1>Hello there! I am a heading</h1>
        <p>This is a paragraph</p>
        <a href="https://www.google.com">Google link</a>
    </div>;

    return (
        <div>
            {/* note that you still need the {} since it is a variable, even if it is JSX */}
            {/* rule of thumb: if it is not DIRECTLY literal text, put {} */}
            {renderedJSX}
        </div>
    );

}

export default Ch2;