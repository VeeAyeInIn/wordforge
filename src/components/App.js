import Header from "./Header";
import Footer from "./Footer";
import Workspace from "./workspace/Workspace";
import {useState} from "react";

function App(/*props*/) {

    const [entries, setEntries] = useState([
        {
            word: "Word",
            definition: "Example Definition",
            source: "https://www.google.com"
        },
        {
            word: "Word2",
            definition: "Example Definition",
            source: "https://www.google.com"
        },
        {
            word: "Word3",
            definition: "Example Definition",
            source: "https://www.google.com"
        }
    ])

    const createEntry = (word, definition, source) => {
        entries.map((entry) => console.log(entry))
        if (entries.includes(word)) {
            console.log("Entry %s already exists!", word)
        } else {
            entries.push({word, definition, source})
            setEntries(entries)
        }
    }

    const deleteEntry = (word) => {
        setEntries(entries.filter((entry) => entry.word !== word))
    }

    return (
        <div className="App">
            <Header/>
            <Workspace
                entries={entries}
                onDelete={deleteEntry}
                onCreate={createEntry}
            />
            <Footer
                year={2000}
                name={"John Doe"}
                rights={"All"}
            />
        </div>
    );
}

export default App;
