/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { AuthContext } from "@/providers/AuthProvider";
import Swal from "sweetalert2";
import { GoogleAuthProvider } from "firebase/auth";
import { FaArrowRight, FaGoogle, FaMailBulk } from "react-icons/fa";
import { useRouter } from "next/navigation";

const page = () => {
  const { providerLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const router = useRouter();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          icon: "success",
          title: "Good job!",
          text: "Successfully Log In",
        });
        router.push("/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div
        className=" text-white max-h-full"
        style={{
          backgroundImage: `url("https://www.nolanai.app/_next/image?url=https%3A%2F%2Fnolan-space.sfo3.cdn.digitaloceanspaces.com%2Fassets%2Flogin_hero.webp&w=3840&q=75")`,
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className=" ">
          <h1 className="text-center lg:text-5xl text-3xl font-bold lg:pt-20">
            Log in
          </h1>
          <p className="text-center lg:text-2xl text-xl my-8">
            Log in to unlock the full Writely Experience
          </p>
          <div
            className="card mx-auto justify-center align-top lg:w-1/3 sm:w-full md:w-1/2 rounded-lg text-neutral-content"
            style={{ backgroundColor: "#25272cb3" }}
          >
            <div className="card-body items-center text-center py-20">
              <button
                onClick={handleGoogleSignIn}
                className="text-black  rounded-full flex py-2 px-7 text-sm font-bold bg-green-300 mb-6"
              >
                <p className="px-2">
                  <FaGoogle className="text-green-600 text-lg"></FaGoogle>
                </p>
                Continue with Google
              </button>

              <Link
                className=" text-black flex bg-green-300 rounded-full  py-2 px-8 text-sm font-bold mb-6 "
                href="/loginform"
              >
                <p className="px-2">
                  <FaMailBulk className="text-green-600 text-lg"></FaMailBulk>
                </p>
                Continue with Email
              </Link>
              <div className="flex justify-around mb-6 mx-8 text-white">
                <p>Need an account? </p>
                <p>
                  {" "}
                  <Link
                    href="/resister"
                    className="font-semibold text-rose-400 flex items-center px-6"
                  >
                    Register <FaArrowRight className="mx-2"></FaArrowRight>
                  </Link>
                </p>
              </div>
            </div>
            <p className="text-xs text-white text-center mb-2">
              By signing up, you agree to the{" "}
              <span className="text-primary">Terms of Service</span> and{" "}
              <span className="text-primary">Privacy Policy</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
