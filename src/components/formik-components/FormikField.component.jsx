import { Field } from "formik";
import ErrorMessage from "./Error.component";
import FormInput from "../formInput/FormInput.component";

const FormikField = ({ name, label, ...otherProps }) => {
    return (
        <Field name={name}>
            {(formikField) => {
                return (
                    <>
                        <FormInput
                            controlId={name}
                            labelName={label}
                            {...otherProps}
                            {...formikField.field}
                            defaultChecked={formikField.field.value}
                        />
                        <ErrorMessage name={name}></ErrorMessage>
                    </>
                );
            }}
        </Field>
    );
};

export default FormikField;
