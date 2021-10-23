import { ErrorMessage } from "formik";
const FormikError = ({ name }) => (
    <ErrorMessage name={name}>
        {(errorMessage) => (
            <small className="text-danger">{errorMessage}</small>
        )}
    </ErrorMessage>
);

export default FormikError;
