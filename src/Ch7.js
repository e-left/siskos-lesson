import React, { useState } from "react";

// here we combine the past chapters in order to get the list of words from the server
// and display it. we get all of the words, save them in our state and then render this state
// two notable points are:
// 1 - the word array is the resulting data.data, as you observed in the previous lesson. that is
// why we console log server data, to determine what we want and how to access it
// 2 - the word is included as text in the word.title field. So, for every word in the words array,
// we can get its text representation using word.title. this is known to you if you made the server,
// or through documentation, or through observing the returned result

const apiUrl = "http://164.92.233.169:3000/api/getAncientWords/0";

function Ch7() {
    let [words, changeWords] = useState([]);

    const getDataButtonCallback = async () => {
        const response = await fetch(apiUrl);
        const data = await response.json(); 
        changeWords(data.data);
    }

    // we don't use any await keywords inside this function, so we don't have to mark it as async
    const clearDataButtonCallback = () => {
        changeWords([]);
    }

    return (
        <div>
            <button onClick={getDataButtonCallback}>Get the word list of the first page</button>
            {/* button to clear local data, to play with the function */}
            <button onClick={clearDataButtonCallback}>Clear local data</button>
            <ul>
                {/* here we use the more concise syntax of list rendering */}
                {words.map((value, index) => <li key={index}>{value.title}</li>)}
            </ul>
        </div>
    );

}

export default Ch7;