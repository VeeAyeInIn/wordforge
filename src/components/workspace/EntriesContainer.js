import {ContainerSearch} from "./SearchBar";
import Entry from "./Entry";

const EntriesContainer = ({ entries, onDelete }) => (
    <div className={"wsh"}>
        <ContainerSearch/>
        {
            entries.map((entry) => (
                <Entry
                    key={entry.word}
                    entry={entry}
                    onDelete={onDelete}
                />
            ))
        }
    </div>
)

export default EntriesContainer