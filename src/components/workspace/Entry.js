import { FaTimes } from "react-icons/all";

const Entry = ({ entry, onDelete }) => (
    <div className={"entry"}>
        <h3 className={"entry-word"}>
            {entry.word}
            <FaTimes
                className={"entry-delete"}
                onClick={() => onDelete(entry.word)}
            />
        </h3>
        <p className={"entry-definition"}>
            {entry.definition}
        </p>
        <h6 className={"entry-source"}>
            <a
                href={entry.source}
                target={"_blank"}
                rel={"noreferrer"}
            >
                {entry.source}
            </a>
        </h6>
    </div>
)

export default Entry