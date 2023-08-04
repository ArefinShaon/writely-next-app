"use client"


import React, { useContext, useState } from "react";
import img from "../../../public/dark-gray-wall-with-wooden-plank-product-background.jpg";
import Link from "next/link";
import { FaGoogle, FaEye, FaEyeSlash, FaArrowRight } from "react-icons/fa";
import { AuthContext } from "@/providers/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";


const page = () => {
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { signIn, providerLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from);
        swal("Good job!", "Successfully Log In", "success");
       
      })
      .catch((error) => console.error(error));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div
      style={{
        backgroundImage: `url(${img.src})`,
        opacity: 0.9,
      }}
      className="hero min-h-screen bg-base-200"
    >
      <div className="hero-content w-1/3 h-1/2 flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-white">Login now!</h1>
        </div>
        <div className="card w-full max-w-lg shadow-2xl bg-gray-200">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Email Address</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered border-zinc-900 bg-white"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Password</span>
              </label>
              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  className="input input-bordered border-zinc-900 bg-white pr-10 w-full"
                  required
                />
                <div
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <FaEye className="text-gray-500" />
                  ) : (
                    <FaEyeSlash className="text-gray-500" />
                  )}
                </div>
              </div>
              <label className="label text-purple-700">
                {success && <p>Successfully login to the account</p>}
                {error && <p className="text-red-500">{error}</p>}
              </label>
            </div>
            <div className="form-control mt-4">
              <input
                type="submit"
                className="btn btn-success text-black "
                value="login"
              />
            </div>
            <div className="divider">Or Log in with</div>
          </form>

          <div className="mb-2 flex justify-center mx-8 -mt-6">
            <button className="btn btn-outline text-bold w-full mx-4">
              <p className="px-2">
                <FaGoogle className="text-green-600 text-lg"></FaGoogle>
              </p>{" "}
              Login with Google
            </button>
          </div>

          <div className="flex justify-around mb-6 mx-8">
            <p>Need an account? </p>
            <p>  <Link
                href="/resister"
                className="font-semibold text-green-600 flex items-center"
              >
                Register <FaArrowRight className="mx-2"></FaArrowRight>
              </Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

