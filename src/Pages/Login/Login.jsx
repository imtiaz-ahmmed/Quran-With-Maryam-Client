import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  IoLogoGoogle,
  IoLogoGithub,
  IoMdEyeOff,
  IoIosEye,
} from "react-icons/io";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProviders";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const location = useLocation();
  const { signIn, googleSignIn, githubLogIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");
  const [seePass, setSeePass] = useState(false);

  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        setLoginError("");
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Log In Successful!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      const loggedInUser = result.user;
      const saveUser = {
        name: loggedInUser.displayName,
        email: loggedInUser.email,
      };
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then(() => {
          navigate(from, { replace: true });
        });
    });
  };

  const handleGitHubSignIn = () => {
    githubLogIn().then((result) => {
      const loggedInUser = result.user;
      const saveUser = {
        name: loggedInUser.displayName,
        email: loggedInUser.email,
      };
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then(() => {
          navigate(from, { replace: true });
        });
    });
  };

  return (
    <div>
      <Helmet>
        <title>QWM | Login</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200 pt-24 ">
        <div className="hero-content flex-col lg:flex-row-reverse gap-16">
          {/* Text Section */}
          <div className="text-center lg:text-left max-w-md">
            <h1 className="text-4xl font-bold text-sky-700">Login now!</h1>
            <p className="py-6 text-gray-600 text-justify leading-relaxed">
              Welcome to Quran With Maryam ! Log in to immerse yourself in a
              nurturing community dedicated to illuminating your inner
              potential.
            </p>
          </div>

          {/* Form Card */}
          <div className="card w-full max-w-sm shadow-xl bg-base-100">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body space-y-4"
            >
              {/* Email Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Enter your email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-sm text-red-600">
                    Email is required
                  </span>
                )}
              </div>

              {/* Password Field */}
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={seePass ? "text" : "password"}
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern: /(?=.*?[A-Z])(?=.*?[#?!@$%^&*-])/,
                  })}
                  placeholder="Enter your password"
                  className="input input-bordered pr-12"
                />
                <span
                  className="absolute right-7 top-8 cursor-pointer text-xl text-gray-500"
                  onClick={() => setSeePass(!seePass)}
                >
                  {seePass ? <IoMdEyeOff /> : <IoIosEye />}
                </span>

                {/* Password validation messages */}
                {errors.password?.type === "required" && (
                  <span className="text-sm text-red-600">
                    Password is required
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-sm text-red-600">
                    Minimum 6 characters
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-sm text-red-600">
                    Must include a capital letter & special character
                  </span>
                )}
                <label className="label justify-end">
                  <a
                    href="#"
                    className="label-text-alt link link-hover text-sm"
                  >
                    Forgot password?
                  </a>
                </label>
                {loginError && (
                  <p className="text-red-600 text-sm">
                    <small>{loginError}</small>
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="form-control">
                <input
                  type="submit"
                  value="Login"
                  className="btn bg-sky-600 text-white hover:bg-sky-500"
                />
              </div>

              {/* Sign-up Link */}
              <p className="text-center text-sm">
                New here?{" "}
                <Link
                  to="/register"
                  className="text-sky-600 font-semibold hover:underline"
                >
                  Create a New Account
                </Link>
              </p>

              {/* Social Sign-in */}
              <div className="text-center">
                <p className="text-sm">Or sign in with</p>
                <div className="flex justify-center gap-6 mt-2">
                  <button
                    type="button"
                    onClick={handleGitHubSignIn}
                    className="text-3xl"
                  >
                    <IoLogoGithub />
                  </button>
                  <button
                    type="button"
                    onClick={handleGoogleSignIn}
                    className="text-3xl"
                  >
                    <IoLogoGoogle />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
