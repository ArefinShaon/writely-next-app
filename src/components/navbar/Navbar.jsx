import React from "react";
import Image from "next/image";
import logo from "public/logo.svg";
import Link from "next/link";
const Navbar = () => {

  const navItems = (
    <>
      <li>
            <Link href="/">Home</Link>
            </li>
             <li>
            <Link href="/features">Features</Link>
            </li>
            <li>
              <Link href="/about">About us</Link>
            </li>
            <li>
              <Link href="/contact">Contact </Link>
            </li>
     
    </>
  );

  return (
    <div className="navbar bg-green-200">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box font-bold w-52"
          >
                {navItems}
          </ul>
        </div>

        <Link className="btn btn-ghost normal-case text-xl" href="/">
          <Image src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold">
        {navItems}
        </ul>
      </div>
      <div className="navbar-end">
      <Link className="font-bold btn btn-ghost mr-8" href="/login">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
