import React from "react";

// in react when we want to render an array of some items (numbers, text, objects etc) 
// we do what is called list rendering

// in react the list item (the item you want to render) always has to have 2 things:
// 1 - some content you want to render (text, image, number etc)
// 2 - a unique ID. this can be as simple as the index of the item in the array (0, 1, 2 ...) 
// or a complex database id, or even some text. It does not matter WHAT it is, as long as it is 
// unique. You CAN render lists WITHOUT an ID for each item, but it is DISCOURAGED for performance 
// reasons and react will throw you a warning. Conclusion: always use some sort of id :)

// so, in order to compute the rendered JSX you use the map function in javascript. it basically
// maps every item from one array to every item to another array

// in the case of list rendering, you map every array item to a new JSX element to be rendered

// we will render this list using a for loop
const todos = [
    "Write code",
    "Make food",
    "Fuck yo mama",
    "Idk, make a car or sth",
    "Make money",
    "Poggers",
    "Nibba"
];

function Ch5() {

    /* 
    // the map function works as follows:
    // your-awesome-array.map( callbackFunction );
    // it runs the callback function for every item in your array, returning the modified result
    // it returns the new array that changes each value of the old array according to the callbackFunction
    // the callback function has 2 main forms: 
    function callbackFunction(arrayItem) {
        return arrayItem * 5; // multiply each item by 5 in this example
    }
    // or 
    function callbackFunction(arrayItem, arrayIndex) {
        return arrayItem * 5; // multiply each item by 5 in this example
    }
    // since we want to use the array index for the unique id in our case, we prefer the second form
    // in order to make it more concise, we use the arrow function syntax. it is pretty common in the map
    // function so you should get used to it
    // in arrow functions when your body looks like { return aValue } you can replace it with aValue (without the braces)
    // this will implicitly return the value
    // also note that the unique ID is used as the key property in the top level JSX element that is returned from your map
    // function. in this case the top level element is the li element so we include a key property with the value of index
    // and, since it is a variable, we wrap it in curly braces. Usual JSX rules apply here 

    // For more documentation:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    // https://reactjs.org/docs/lists-and-keys.html
    */
    const renderedListJSX = todos.map( (value, index) => <li key={index}>{value}</li> );

    return (
        <div>
            {/* we render the list as a collection of list item tags, so you need a ul or an ol tag to display them
            as a list. of course you can render them in any other way you like, with or without li tags */}
            <ul>
                {/* recall that this is nothing more than a variable so we use { } */}
                {renderedListJSX}
                {/* 
                you can do it even shorter in-place:
                {todos.map( (value, index) => <li key={index}>{value}</li> )} 
                */}
            </ul>
        </div>
    );

}

export default Ch5;