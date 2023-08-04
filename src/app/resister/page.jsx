import Link from 'next/link';
import React from 'react';
import img from "../../../public/dark-gray-wall-with-wooden-plank-product-background.jpg";

const page = () => {
    return (
        <div
            style={{
            backgroundImage: `url(${img.src})`,
            opacity: 0.9,
          }}
          className="hero min-h-screen bg-base-200 flex justify-center text-black py-28">
        <div className="card w-full max-w-lg shadow-2xl bg-green-50">
          <h1 className="font-bold text-4xl text-center pt-6">
            Create An Account
          </h1>
          <form  className="card-body">
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
            </div>
            {/* {passwordError && <p className="text-error">{passwordError}</p>}
            {success && (
              <div className="toast toast-end toast-middle">
                <div className="alert alert-success">
                  <div>
                    <span>User created successfully.</span>
                  </div>
                </div>
              </div>
            )} */}
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
                    

            <Link href="/login" className="text-green-600 font-semibold ml-4">
              LogIn
            </Link>
          </div>
        </div>
      </div>
      );
    };
    
export default page;