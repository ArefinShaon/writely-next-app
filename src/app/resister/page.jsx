/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import Link from 'next/link';
import React from 'react';
import img from "../../../public/dark-gray-wall-with-wooden-plank-product-background.jpg";
import { useContext, useState } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import swal from 'sweetalert';
import { useRouter } from "next/navigation";
import { FaArrowRight } from 'react-icons/fa';


const page = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [passwordError, setPasswordError] = useState("");
  const [success, setSuccess] = useState(false);
  const router = useRouter();



  const handleSignUp = (event) => {
    event.preventDefault();
    setSuccess(false);
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    // Validate password
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }
    if (password.length < 6) {
      setPasswordError("Password should be at least 6 characters.");
      return;
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      setPasswordError("Please provide at least one uppercase letter");
      return;
    }
    if (!/(?=.*[!@#$&*])/.test(password)) {
      setPasswordError("Please add at least one special character");
      return;
    }
    setPasswordError("");

    createUser(email, password)
      .then((result) => {
        const user = result.user;
       console.log(user);
        // Update user profile with name and photo
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            setSuccess(true);
            swal("Good job!", "Successfully create an account", "success");
            form.reset();
            router.push("/");
            })
          .catch((error) => {
            console.error(error);
            setPasswordError(error.message);
          });
      })
      .catch((error) => {
        console.error(error);
        setPasswordError(error.message);
      });
  };
    return (
        <div
            style={{
            backgroundImage: `url(${img.src})`,
            opacity: 0.9,
          }}
          className="hero min-h-screen bg-base-200 flex justify-center text-black py-28">
        <div className="card w-full max-w-lg shadow-2xl bg-green-50 ">
          <h1 className="font-bold text-4xl text-center pt-6">
            Create An Account
          </h1>
          <form onSubmit={handleSignUp}  className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Your Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Name"
                className="input input-bordered border-zinc-900 bg-white"
                required
              />
              <label className="label">
                <span className="label-text text-black">Your Photo</span>
              </label>
              <input
                name="photo"
                type="text"
                placeholder="Photo URL"
                className="input input-bordered border-zinc-900 bg-white"
                required
              />
              <label className="label">
                <span className="label-text text-black">Email Address</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="input input-bordered border-zinc-900 bg-white"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="input input-bordered border-zinc-900 bg-white"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Confirm Password</span>
              </label>
              <input
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                className="input input-bordered border-zinc-900 bg-white"
                required
              />
               {passwordError && <p className="text-red-500">{passwordError}</p>}
            </div>
           
            <div className="form-control mt-6">
              <input
                type="submit"
                className="btn btn-success text-black "
                value="Sign Up"
              />
            </div>
          </form>
          <div className="flex justify-center mt-4 mb-4">
                    <p>Already have an account?</p>
                    

            <Link href="/login" className="text-green-600 items-center flex font-semibold ml-4">
              LogIn <FaArrowRight className="mx-2"></FaArrowRight>
            </Link>
          </div>
        </div>
      </div>
      );
    };
    
export default page;