import {Col, Container, Row} from "react-bootstrap";
import EntriesSelection from "./EntriesSelection";
import EntriesContainer from "./EntriesContainer";
import EntriesInput from "./EntriesInput";

const Workspace = ({ entries, onCreate, onDelete }) => (
    <Container fluid className={"workspace"}>
        <Row>
            <Col sm={2} className={"entries-selection"}>
                <EntriesSelection/>
            </Col>
            <Col sm={6} className={"entries-container"}>
                <EntriesContainer
                    entries={entries}
                    onDelete={onDelete}
                />
            </Col>
            <Col sm={4} className={"entries-input"}>
                <EntriesInput onCreate={onCreate}/>
            </Col>
        </Row>
    </Container>
)

export default Workspace