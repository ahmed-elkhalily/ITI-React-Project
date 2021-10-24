import { useFormik } from "formik";
import * as Yub from "yup";
import { Form, Container, Row, Button } from "react-bootstrap";
import FormInput from "../../components/formInput/FormInput.component";
import "./Login.page.scss";

function Login() {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            check: false,
        },
        onSubmit: (values) => console.log(JSON.stringify(values, null, 4)),
        validationSchema: Yub.object({
            email: Yub.string().email().required(),
            password: Yub.string()
                .matches(
                    "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$",
                    "At least [1 uppercase,1 lowercase,a number and a special]"
                )
                .required(),
        }),
    });
    return (
        <>
            <h2 className="text-center my-3">login page</h2>
            <Container>
                <Row>
                    <Form
                        className="w-50 m-auto"
                        onSubmit={formik.handleSubmit}
                    >
                        <FormInput
                            controlId="email"
                            labelName="email"
                            name="email"
                            type="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.email && formik.touched.email && (
                            <small className="text-danger">
                                {formik.errors.email}
                            </small>
                        )}

                        <FormInput
                            controlId="password"
                            labelName="password"
                            name="password"
                            type="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.password && formik.touched.password && (
                            <small className="text-danger">
                                {formik.errors.password}
                            </small>
                        )}

                        <Form.Group className="my-3" controlId="check">
                            <Form.Check
                                type="checkbox"
                                label="Check me out"
                                name="check"
                                onChange={formik.handleChange}
                                defaultChecked={formik.values.check}
                            />
                        </Form.Group>
                        <Button type="submit" className="btn-dark w-100">
                            submit
                        </Button>
                    </Form>
                </Row>
            </Container>
        </>
    );
}
export default Login;
