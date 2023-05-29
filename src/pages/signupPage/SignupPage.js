import Input from "../../common/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./signupPage.css";
import { Link } from "react-router-dom";
import { useActionAuth, useAuth } from "../../provider/AuthProvider";
import { signupUser } from "../../services/signupService";

const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  passwordConfirm: "",
};

const SignupPage = ({history}) => {
  const Auth = useAuth();
  const setAuth = useActionAuth();

  const onSubmit = async (values) => {
    const { name, email, phoneNumber, password } = values;
    const userData = {
      name,
      email,
      phoneNumber,
      password,
    };
    try {
      const { data } = await signupUser(userData);
      setAuth(data);
      console.log(data)
      history.push('/checkout')

    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(6, "Name must be at least 6 characters"),
    email: Yup.string()
      .email("Invalid Email Format")
      .required("Email is required"),
    phoneNumber: Yup.string()
      .required("Phone Number is required")
      .matches(new RegExp("[0-9]{11}"), "Phone number is not valid"),
    password: Yup.string().required("PassWord is required"),
    passwordConfirm: Yup.string()
      .required("PassWordConfirm is required")
      .oneOf([Yup.ref("password")], "passwords must matches"),
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
        <Input formik={formik} name="name" label="Name" />
        <Input formik={formik} name="email" label="Email" type="email" />
        <Input formik={formik} name="phoneNumber" label="phoneNumber" />
        <Input
          formik={formik}
          name="password"
          label="Password"
          type="password"
        />
        <Input
          formik={formik}
          name="passwordConfirm"
          label="PasswordConfirm"
          type="password"
        />
        <Link to="/login?redirect=checkout">
          <span className="link">Already Signup?</span>
        </Link>
        <button type="submit" disabled={!formik.isValid}>
          submit
        </button>
      </form>
    </main>
  );
};

export default SignupPage;
