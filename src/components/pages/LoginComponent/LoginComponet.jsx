import React, { useState } from "react";
import "./Login.css";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
import globalVarible from "../../../GlobalVaribale.js";
import i18next from "i18next";
export function LoginComponent() {
  const passwordPattern =
    /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
  let navigate = useNavigate();
  const [errorFromDataBase, seterrorFromDataBase] = useState("");
  const [isLoading, setisLoading] = useState(false);
  let validationSchema = yup.object({
    userName: yup.string().min(3).max(30).required(),
    password: yup
      .string()
      .min(3)
      .max(30)
      .matches(passwordPattern, "password not valid")
      .required()
  });
  const loginFormik = useFormik({
    initialValues: {
      userName: "",
      password: ""
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log(values);
      setisLoading(true);
      await axios
        .post(`${globalVarible.baseURL}/auth/login`, values)
        .then((data) => {
          localStorage.setItem("token", data.data.token);
          setisLoading(false);
          navigate("/home/dashboard");
        })
        .catch((err) => {
          seterrorFromDataBase(err.response.data.err);
          setisLoading(false);
        });
    }
  });
  return (
    <div className="row gx-0 login">
      <div className="col-11 col-sm-8 col-md-6 col-lg-4 mx-auto">
        <div className="shadow-lg">
          <div className="bg-light p-5">
            {errorFromDataBase && (
              <div className="alert alert-danger text-center">
                {errorFromDataBase}
              </div>
            )}

            <h1 className="fs-3 fw-bold mb-4 text-center">{i18next.t("Welcome to React")}</h1>
            <form onSubmit={loginFormik.handleSubmit}>
              <div>
                <label className="mb-3 fw-bold">user name</label>
                <input
                  onBlur={loginFormik.handleBlur}
                  value={loginFormik.values.userName}
                  onChange={loginFormik.handleChange}
                  id="userName"
                  type="text"
                  className="form-control mb-3"
                  name="userName"
                />
                {loginFormik.errors.userName &&
                  loginFormik.touched.userName && (
                    <div className="alert alert-danger p-2 mt-3">
                      {loginFormik.errors.userName}
                    </div>
                  )}

                <label className="mb-3 fw-bold">password</label>
                <input
                  onBlur={loginFormik.handleBlur}
                  value={loginFormik.values.password}
                  onChange={loginFormik.handleChange}
                  id="password"
                  type="password"
                  className="form-control mb-3"
                  name="password"
                />
                {loginFormik.errors.password &&
                  loginFormik.touched.password && (
                    <div className="alert alert-danger p-2 mt-3">
                      {loginFormik.errors.password}
                    </div>
                  )}
              </div>
              <button
                type="submit"
                className="d-block mx-auto mt-2 btn btn-primary"
              >
                Login
              </button>
            </form>
          </div>
          <div className="card-footer py-3 border-0">
            <NavLink to="/register" className="text-center nav-link">
              create new Account
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
