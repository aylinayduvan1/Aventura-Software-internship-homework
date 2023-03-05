import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import WaterWave from "../components/WaterWave";

function LoginForm() {
  const navigate = useNavigate(); // sayfalar arası gezinmek için

  const handleSubmit = (values, { setSubmitting,setFieldValue}) => {
    setTimeout(() => {
      if (values.username === "aylin" && values.password === "123") {
        navigate("/cities");
        alert("Giriş başarılı");
      } else {
        alert("Kullanıcı adı veya şifre yanlış");
        setFieldValue("username", ""); // Kullanıcı adı alanını temizler
        setFieldValue("password", ""); // Şifre alanını temizler
      }
      setSubmitting(false);
    }, 400);
  };

  return (
    <div className="orta">
      <div className="login-container">
        <div className="login-title">
          <div className="icon-title">
            <i className="fas fa-cloud-moon-rain" aria-hidden="true"></i>
            <h2>WEATHER APP</h2>
          </div>
          <Formik
            initialValues={{ username: "", password: "" }}
            validationSchema={Yup.object({
              username:Yup.string().required("! Kullanıcı adı boş geçilemez."),
              password:Yup.string().required("! Şifre boş geçilemez.")
            })}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="login">
                <Field type="text" name="username" placeholder="Kullanıcı Adı" />
                <ErrorMessage name="username" component="div" className="error" />
                <Field type="password" name="password" placeholder="Şifre" />
                <ErrorMessage name="password" component="div" className="error" />
                <button className="login-b" type="submit" disabled={isSubmitting}>
                  Giriş
                </button>
              </Form>
            )}
          </Formik>
        </div>
        <WaterWave />
      </div>
    </div>
  );
}

export default LoginForm;
