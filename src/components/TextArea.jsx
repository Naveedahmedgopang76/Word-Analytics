import { useState } from "react"
import Warning from "./Warning"

function TextArea ({ text, setText }) {
    const [warningText, setWarningText] = useState("")

    const handleTextChange = (e) => {
        setText(e.target.value)
        if (e.target.value.includes("<script>")) {
            setWarningText("Script tags are not allowed!")
            setText(e.target.value.replace("<script>", ""))
        } else if (e.target.value.includes("@")) {
            setWarningText("@ symbol is not allowed!")
            setText(e.target.value.replace("@", ""))
        } else{
            setWarningText("")
        }
        setText(e.target.value)
    }
    return (
        <div className="textarea" >
        <textarea  placeholder="Enter your text here..."
            value={text}
            onChange={handleTextChange}
            spellCheck="false"
        />
        {warningText && <Warning warningText={warningText}/>}
        </div>
            
        
    )
}

export default TextArea
