import React, { useContext, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
//import LockOpenSharpIcon from "@mui/icons-material/LockOpenSharp";
import CakeSharpIcon from '@mui/icons-material/CakeSharp';
import { AuthContext } from "./AuthProvider";
import ROLES from "../util/ROLES";



const LoginForm = () => {
  const navigate  = useNavigate();
  const { setUserRole } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("! Username is required"),
    password: Yup.string().required("! Password is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
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
      resetForm(); // Bu satır, formdaki inputları sıfırlar
      return;
    }
    setUserRole(tempUser);
    navigate("/homepage");
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
                <CakeSharpIcon
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
