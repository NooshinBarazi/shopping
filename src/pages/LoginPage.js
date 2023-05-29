import Input from "../common/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });
  return (
    <main className="container">
      <form onSubmit={formik.handleSubmit}>
        <Input formik={formik} name="email" label="Email" type="email" />
        <Input
          formik={formik}
          name="password"
          label="Password"
          type="password"
        />
        <Link to="/signup?redirect=checkout">
          <span className="link">Do not Signup?</span>
        </Link>
        <button type="submit" disabled={!formik.isValid}>submit</button>
      </form>
    </main>
  );
};

export default LoginPage;
