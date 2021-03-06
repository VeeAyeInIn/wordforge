import {InputSearch} from "./SearchBar";
import {useState} from "react";

function EntriesInput(props) {

    const [word, setWord] = useState("");
    const [definition, setDefinition] = useState("");
    const [source, setSource] = useState("");

    const handleWordInput = event => {
        setWord(event.target.value)
    }

    const handleDefinitionInput = event => {
        setDefinition(event.target.value)
    }

    const handleSourceInput = event => {
        setSource(event.target.value)
    }

    return (
        <div className={"wsh"}>
        <InputSearch/>
            <input type={"text"} placeholder={"word"} id={"input-word"} onChange={handleWordInput}/>
            <input type={"text"} placeholder={"definition"} id={"input-definition"} onChange={handleDefinitionInput}/>
            <input type={"text"} placeholder={"source"} id={"input-source"} onChange={handleSourceInput}/>
            <button onClick={() => props.onCreate(word, definition, source)}>Create</button>
        </div>
    )
}

export default EntriesInput