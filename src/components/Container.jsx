import TextArea from "./TextArea"
import Stats from "./Stats"
import { useState } from "react";
import { FACEBOOK_LIMIT, INSTAGRAM_LIMIT } from "../lib/Constants";

function Container() {
    const [text, setText] = useState("");
   

    const stats ={
        textCharacters: text.length,
        instagramLimit : INSTAGRAM_LIMIT - text.length,
        facebookLimit : FACEBOOK_LIMIT - text.length,
        numberOfWords: text.split(/\s+/).filter((word) => word !== "").length
    }
    
    return (
        <main className="container">
            <TextArea text={text} setText={setText}     />
            <Stats stats={stats} />
        </main>
    )
}

export default Container
