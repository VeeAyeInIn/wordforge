import {Button, FormControl, InputGroup} from "react-bootstrap";

export const SelectionSearch = () => (
    <header className={"search-bar-container"}>
        <InputGroup className={"search-bar"}>
            <FormControl
                className={"search-bar-form"}
                placeholder={"Selection..."}
                aria-label={"Selection..."}
            />
            <InputGroup.Append>
                <Button
                    className={"search-bar-button"}
                    variant={"outline-secondary"}
                >
                    Search
                </Button>
            </InputGroup.Append>
        </InputGroup>
    </header>
)

export const ContainerSearch = () => (
    <header className={"search-bar-container"}>
        <InputGroup className={"search-bar"}>
            <FormControl
                className={"search-bar-form"}
                placeholder={"Word"}
                aria-label={"Word"}
            />
            <FormControl
                className={"search-bar-form"}
                placeholder={"Definition"}
                aria-label={"Definition"}
            />
            <FormControl
                className={"search-bar-form"}
                placeholder={"Source"}
                aria-label={"Source"}
            />
            <InputGroup.Append>
                <Button
                    className={"search-bar-button"}
                    variant={"outline-secondary"}
                >
                    Search
                </Button>
            </InputGroup.Append>
        </InputGroup>
    </header>
)

export const InputSearch = () => (
    <header className={"search-bar-container"}/> // Empty
)