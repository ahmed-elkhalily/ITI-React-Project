import { Form } from "react-bootstrap";
import "./FormInput.component.scss";
const FormInput = ({ controlId, labelName, ...otherProps }) => {
    return (
        <>
            <Form.Group controlid={controlId}>
                <Form.Label>{labelName}</Form.Label>
                <Form.Control {...otherProps} />
            </Form.Group>
        </>
    );
};
export default FormInput;
