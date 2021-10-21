import { Form } from "react-bootstrap";
import "./FormInput.component.scss";
const TodoForm = ({ controlId, labelName, ...otherProps }) => {
    return (
        <>
            <Form.Group className="mb-3" controlid={controlId}>
                <Form.Label>{labelName}</Form.Label>
                <Form.Control {...otherProps} />
            </Form.Group>
        </>
    );
};
export default TodoForm;
