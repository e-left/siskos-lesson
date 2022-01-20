import React, { useState, useEffect } from "react";

// here we combine all of the previous lessons for our final demonstration
// we have a loading animation (in our case a simple word but it could be a spinner) 
// that is displayed when we first load the page up. The data is fetched automatically from the server
// and when that finishes happening we render the data. This is a real world application of all 
// the concepts you learned in all of these chapters

const apiUrl = "http://164.92.233.169:3000/api/getAncientWords/0";

function Ch8() {
    let [words, changeWords] = useState([]);
    // loading status, can be used to display a spinner loading animation or anything really
    let [loading, changeLoading] = useState(true);

    // same function as before, only that when it gets the data it changes 
    // the loading status to false, since we are done loading the data
    const getWordData = async () => {
        const response = await fetch(apiUrl);
        const data = await response.json(); 
        changeWords(data.data);
        changeLoading(false);
    }

    // reeeeeeeeeeeeeeaaally concise code here
    // if we are loading display a loading animation. in our case a simple word
    // if we are not loading display the final data that have been loaded using the same code as before
    const renderedJSX = loading ? <p>Loading</p> : <ul>{words.map((value, index) => <li key={index}>{value.title}</li>)}</ul>

    // recall that we cannot mark the callback function of useEffect as async (react throws an error)
    useEffect(() => {
        // we can simply call the async function here.
        // recall that we cannot use await. this is valid javascript and the function will finish its execution
        // at some point in the future. since we do not want to do anything with the return data of the function,
        // we don't care about waiting for it to finish here. when it finishes it will automatically update
        // the state and the component will be re-rendered properly
        getWordData();
    }, []);

    return (
        <div>
            {renderedJSX}
        </div>
    );

}

export default Ch8;