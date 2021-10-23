import { Formik, Form, Field, FieldArray } from "formik";
import * as yup from "yup";
import FormikField from "../../components/formik-components/FormikField.component";

function Register() {
    const initialValues = {
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
        active: true,
        gender: [],
        hobbies: [],
    };
    const onSubmit = (values) => {
        console.log(JSON.stringify(values));
    };

    const validationSchema = yup.object({
        username: yup.string().required(),
        email: yup.string().email().required(),
        password: yup
            .string()
            .matches(
                "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$",
                "At least [1 uppercase,1 lowercase,a number and a special]"
            )
            .required(),
        confirmpassword: yup
            .string()
            .oneOf([yup.ref("password")], "Must Be The Same As Password Field"),
        active: yup
            .bool()
            .oneOf([true], "Accept Terms & Conditions is required"),
    });

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {(formik) => {
                return (
                    <Form>
                        <FormikField
                            controlId="username"
                            labelName="username"
                            type="text"
                            name="username"
                        />
                        <FormikField
                            controlId="email"
                            labelName="email"
                            type="email"
                            name="email"
                        />
                        <FormikField
                            controlId="password"
                            labelName="password"
                            type="password"
                            name="password"
                        />
                        <FormikField
                            controlId="confirmpassword"
                            labelName="confirmpassword"
                            type="password"
                            name="confirmpassword"
                        />
                        <div className="">
                            <FormikField
                                as="select"
                                className="form-select"
                                name="gender"
                                id="gender"
                            >
                                <option value="male">male</option>
                                <option value="female">female</option>
                            </FormikField>
                        </div>

                        <div className="form-check">
                            <Field
                                className="form-check-input"
                                type="checkbox"
                                name="active"
                                id="active"
                                defaultChecked={formik.values.active}
                            />
                            <label htmlFor="active">Active</label>
                        </div>
                        {formik.errors.active && formik.touched.active && (
                            <small name="active" className="text-danger">
                                {formik.errors.active}
                            </small>
                        )}
                        <button class="text-center btn btn-dark" type="submit">
                            submit
                        </button>
                        <FieldArray name="hobbies">
                            {({ insert, remove, push }) => (
                                <div>
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => push({ name: "" })}
                                    >
                                        Add To Form
                                    </button>
                                    {formik.values.hobbies.length > 0 &&
                                        formik.values.hobbies.map(
                                            (hobbies, index) => (
                                                <div className="row">
                                                    <div className="col-6">
                                                        <FormikField
                                                            name={`hobbies.${index}.name`}
                                                            controlId={`hobbies.${index}.name`}
                                                            type="text"
                                                            labelName="hobby"
                                                        />
                                                    </div>
                                                    <button
                                                        type="button"
                                                        className="btn btn-danger col-2"
                                                        onClick={() =>
                                                            remove(index)
                                                        }
                                                    >
                                                        X
                                                    </button>
                                                </div>
                                            )
                                        )}
                                </div>
                            )}
                        </FieldArray>
                    </Form>
                );
            }}
        </Formik>
    );
}
export default Register;
