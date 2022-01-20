import React from "react";

// getting data from a remote server
// doing that is achieved with the fetch function. the fetch function takes two arguments:
// 1 - the URL from where you want to get data and 
// 2 - an optional object that specifies options 
// in our example the URL is the main URL that returns all of the ancient words, in alphabetic order
// the 0 in the end is used for pages. Each page holds 20 words so page 0 holds words 1-20, page 1 holds words
// 21-40 etc.
// the return is in json which is why we use the function response.json(). The return object is specified by 
// the server. In our case it has a structure as follows (in a successful response):
/*
{
    status: "success",
    data: [
        {
            // word object here too large to demonstrate
        }
    ]
}
*/
// we console log the return object after it has been JSONed to observe its structure and work our code around it
// note that you can either use Promises or callback functions instead of async/await syntax here
// in some places, using promises is your only way but we will see how to combat that
// for now, you can learn the async/await syntax

// for more documentation:
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function 


/*
WHY WE NEED TO USE ASYNC/AWAIT AND WHAT DOES IT MEAN
basically when we render data from a server, we do not know when the response will arrive. it will take
an uknown time (to our code). By using const response = await fetch(url); we essentially tell our code to
wait until the request comes from the server, and then continue with the code (a-wait). In order to use the await keyword in 
a function, we have to mark that function as async like so:
async function myFunction() {
    ...
}
or if it is an arrow function
const myFunction = async () => {
    ...
}
learn the async/await pattern good, you will be using it quite a lot. also dont bother with promises at this point,
if they are needed in any future lesson we will explore them together
*/

const apiUrl = "http://164.92.233.169:3000/api/getAncientWords/0";

function Ch6() {

    // we define the function as async because we want to use the keyword await inside of it
    // note that we cannot define the useEffect callback as async, but we will see later how to actually use that
    // for now, click the button and observe the console output
    const buttonCallback = async () => {
        const response = await fetch(apiUrl);
        const data = await response.json(); 
        console.log(data);
        alert("Check your browser console");
    }

    return (
        <div>
            <button onClick={buttonCallback}>Get data from server!</button>
        </div>
    );

}

export default Ch6;