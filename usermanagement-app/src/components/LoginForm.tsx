import React, { useContext, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import LockOpenSharpIcon from "@mui/icons-material/LockOpenSharp";
import { AuthContext } from "./AuthProvider";
import ROLES from "../util/ROLES";

interface FormValues {
  username: string;
  password: string;

}

const LoginForm: React.FC = () => {
  const navigate:any = useNavigate();
  const { setUserRole } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("! Username is required"),
    password: Yup.string().required("! Password is required"),
  });

  const handleSubmit = (
    values: FormValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    // Simulate API call to check username and password
    let tempUser = {};

    if (values.username === "admin" && values.password === "admin") {
      tempUser = {
        username: values.username,
        password: values.password,
        role: ROLES.admin,
      };
    } else if (values.username === "user" && values.password === "user") {
      tempUser = {
        username: values.username,
        password: values.password,
        role: ROLES.user,
      };
    } else {
      setErrorMessage("Invalid username or password");
      return;
    }
    setUserRole(tempUser);
    navigate("/panel");
    resetForm();
  };

  return (
    <div className="form-container">
      {errorMessage && (
        <Alert
          style={{
            width: "400px",
            position: "absolute",
            top: 10,
            right: 0,
            zIndex: 1,
          }}
          severity="error"
          onClose={() => setErrorMessage("")}
        >
          <AlertTitle>Error</AlertTitle>
          {errorMessage} — <strong>check it out!</strong>
        </Alert>
      )}
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form>
            <div className="welcome-image">
              <img src="welcome.png" alt="" />
            </div>
            <div className="side">
              <div className="side-login">
                <LockOpenSharpIcon
                  style={{
                    fontSize: "60px",
                    color: "rgb(105, 104, 104)",
                    marginBottom: "10px",
                  }}
                />
                <div>
                  <Field type="text" name="username" placeholder="Username" />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="error"
                  />
                </div>
                <div>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error"
                  />
                </div>
                <button
                  className="login-b"
                  type="submit"
                  disabled={!formik.isValid}
                >
                  Login
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
