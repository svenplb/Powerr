import React, { useState } from "react"
import commonWords from "../Data/word.json"




const Wordlist = () => {
    const wordAmount = 30;
    let [words, setWords] = useState("");
    
   

    return(
        <p>{words}</p>
    )
}

export default Wordlist;