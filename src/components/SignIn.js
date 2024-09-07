import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import logo from "../assets/images/signinlogo.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "./Loader";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import avatar from "../assets/images/profileimg.png";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import * as Yup from "yup";
import { emailPasswordValidate } from "../helper/validate";

const SignIn = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
    }),
    validate: emailPasswordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
      setLoading(true);
      try {
        const response = await fetch("http://localhost:5000/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        if (data.message === "Login successful") {
          toast.success(data.message);
          localStorage.setItem("authToken", data.token);
          navigate("/profile");
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        console.error("Error during fetch:", error);
        toast.error("Failed to fetch. Please try again.");
      } finally {
        setLoading(false);
      }
    },
  });

  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  // });
  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  // const handleLogin = async () => {
  //   if (!formData.email || !formData.password) {
  //     toast.error("Please fill in all fields");
  //     return;
  //   }

  //   setLoading(true);
  //   try {
  //     console.log('Sending request to login endpoint with data:', formData);
  //     const response = await fetch(
  //       "http://localhost:5000/api/auth/login",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(formData),
  //         credentials: 'include',
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }

  //     const data = await response.json();
  //     setLoading(false);

  //     if (data.message === "Login successful") {
  //        toast.success(data.message);
  //        localStorage.setItem("authToken", data.token);
  //       navigate("/profile");
  //     } else {
  //       toast.error(data.message);
  //     }
  //   } catch (error) {
  //     console.error('Error during fetch:', error);
  //     console.log(error.message);
  //     toast.error("Failed to fetch. Please try again.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <>
      {loading && <Loader />}
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div
        id="signin"
        className={
          loading
            ? "content blurred flex justify-center"
            : "content flex justify-center"
        }
      >
        <div id="signintext">
          <div
            id="signintextcontainer"
            style={{ padding: "0px 16px 10px 16px" }}
          >
            <div id="signintextheading">
              <span id="sub-heading" className="animate-pulse">
                Welcome back!!
              </span>
              {/* <span id="heading" className="heading">
                LOG IN
              </span> */}
            </div>
            <div>
              <span className="text-sm text-black">
                Haven't registered yet?{" "}
                <Link
                  to="/register"
                  className="font-semibold"
                  style={{ color: "#762626" }}
                >
                  Register
                </Link>
              </span>
            </div>
          </div>
          <div className="lg:hidden">
            <img src={logo} alt="logo" />
          </div>
          <div id="signininput">
            <form action="POST" onSubmit={formik.handleSubmit}>
              <div className="profile flex justify-center py-4">
                <img src={avatar} alt="avatar" />
              </div>
              <div>
                <input
                  {...formik.getFieldProps("email")}
                  name="email"
                  className="white-placeholder"
                  type="email"
                  placeholder="E-mail"
                  required
                />
              </div>
              <br></br>

              <div style={{ position: "relative" }}>
                <input
                  {...formik.getFieldProps("password")}
                  className="white-placeholder"
                  type={formik.values.passwordVisible ? "text" : "password"}
                  placeholder="Password"
                  required
                />
                <div
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  onClick={() =>
                    formik.setFieldValue(
                      "passwordVisible",
                      !formik.values.passwordVisible
                    )
                  }
                >
                  {formik.values.passwordVisible ? "Hide" : "Show"}
                </div>
                {formik.touched.password && formik.errors.password ? (
                  <div className="error">{formik.errors.password}</div>
                ) : null}
              </div>
              <div id="forgotpassworddiv" className="text-right">
                <Link
                  to="/recovery"
                  className="cursor-help"
                  style={{ color: "#762626" }}
                >
                  Forgot Password ?
                </Link>
              </div>
              <div
                id="help"
                className="text-right text-black font-semibold hidden-text"
              >
                Call on 139 or else Please Visit Your Nearest Railway station
              </div>

              <div className="flex lg:justify-end justify-between gap-4 mt-8">
                <Link
                  to="/"
                  className="flex items-center h-7 no-underline text-black border-black rounded border pl-4 pr-4 justify-center gap-1"
                  style={{ width: "90px", fontSize: "12px", fontWeight: "550" }}
                >
                  <GoArrowLeft />
                  Back
                </Link>
                <button
                  type="submit" // This will trigger the form submission
                  className="flex items-center h-7 bg-[#762626] no-underline rounded border pt-1 pb-1 pl-4 pr-4 justify-center gap-1"
                  style={{
                    color: "#ffffff",
                    border: "#303030",
                    width: "90px",
                    fontSize: "12px",
                    fontWeight: "550",
                  }}
                >
                  Log In
                  <GoArrowRight />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div>
          <img src={logo} alt="logo" id="signinlogo" />
        </div>
      </div>
    </>
  );
};

export default SignIn;
