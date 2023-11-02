import { useFormik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";
import { NavLink, useNavigate } from "react-router-dom";
import globalVarible from "../../../GlobalVaribale.js";
import axios from "axios";

export default function RegisterComponent() {
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
      .required(),
    profileImg: yup.mixed()
  });
  const registerFormik = useFormik({
    initialValues: {
      userName: "",
      password: "",
      profileImg: ""
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log(values);
      setisLoading(true);
      await axios
        .post(`${globalVarible.baseURL}/auth/register`, values)
        .then((data) => {
          setisLoading(false);
          navigate("/");
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

            <h1 className="fs-3 fw-bold mb-4 text-center">Sign Up</h1>
            <form onSubmit={registerFormik.handleSubmit}>
              <div>
                <label className="mb-3 fw-bold">user name</label>
                <input
                  onBlur={registerFormik.handleBlur}
                  value={registerFormik.values.userName}
                  onChange={registerFormik.handleChange}
                  id="userName"
                  type="text"
                  className="form-control mb-3"
                  name="userName"
                />
                {registerFormik.errors.userName &&
                  registerFormik.touched.userName && (
                    <div className="alert alert-danger p-2 mt-3">
                      {registerFormik.errors.userName}
                    </div>
                  )}

                <label className="mb-3 fw-bold">password</label>
                <input
                  onBlur={registerFormik.handleBlur}
                  value={registerFormik.values.password}
                  onChange={registerFormik.handleChange}
                  id="password"
                  type="password"
                  className="form-control mb-3"
                  name="password"
                />
                {registerFormik.errors.password &&
                  registerFormik.touched.password && (
                    <div className="alert alert-danger p-2 mt-3">
                      {registerFormik.errors.password}
                    </div>
                  )}
                <label className="mb-3 fw-bold">Profile Image</label>
                <input
                  onBlur={registerFormik.handleBlur}
                  value={registerFormik.values.profileImg}
                  onChange={registerFormik.handleChange}
                  id="profileImg"
                  type="file"
                  className="form-control mb-3"
                  name="profileImg"
                />
              </div>
              <button
                type="submit"
                className="d-block mx-auto mt-2 btn btn-primary"
              >
                Register
              </button>
            </form>
          </div>
          <div className="card-footer py-3 border-0">
            <NavLink to="/" className="text-center nav-link">
              Do you already have an account
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
