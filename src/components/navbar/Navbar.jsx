"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import logo from "public/logo.svg";
import Link from "next/link";
import { FaUser, FaMoon, FaSun } from "react-icons/fa";
import { AuthContext } from "@/providers/AuthProvider";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    const root = window.document.documentElement;

    if (isDarkMode) {
      root.style.setProperty('--foreground-rgb', 'var(--foreground-rgb-dark)');
      root.style.setProperty('--background-start-rgb', 'var(--background-start-rgb-dark)');
      root.style.setProperty('--background-end-rgb', 'var(--background-end-rgb-dark)');
    } else {
      root.style.setProperty('--foreground-rgb', 'var(--foreground-rgb-light)');
      root.style.setProperty('--background-start-rgb', 'var(--background-start-rgb-light)');
      root.style.setProperty('--background-end-rgb', 'var(--background-end-rgb-light)');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prevState => !prevState);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {
        router.push("/");
      })
      .catch((error) => console.log(error));
  };
  const navItems = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About us</Link>
      </li>
      <li>
        <Link href="/contact">Contact </Link>
      </li>
      {user?.email ? (
        <>
          <li>
            <Link href="/addedBlog">My Blogs</Link>
          </li>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <button onClick={handleLogOut}>Log out</button>
          </li>
          <li className="nav-item-user">
            <span className="tooltip">
              {user.photoURL ? (
                <Image
                  className="rounded-full w-10 mx-2 text-center"
                  src={user.photoURL}
                  alt="Image"
                  height={40}
                  width={40}
                  title={user.displayName}
                />
              ) : (
                <FaUser className="rounded-full w-12 mx-2" />
              )}
            </span>
          </li>
        </>
      ) : (
        <li>
          <Link href="/login">Login</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar fixed text-black h-20  z-50 top-0 bg-green-200">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden w-full">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box font-bold w-52"
          >
            {navItems}
          </ul>
        </div>

        <Link className="btn btn-ghost normal-case text-xl" href="/">
          <Image src={logo} alt="Logo" priority={true} />
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex md:mr-8">
      <ul className="menu menu-horizontal px-1 text-center items-center font-bold">
          {navItems}
        </ul>
        <button
          className="theme-toggle m-3 mr-6 "
          onClick={toggleTheme}
          aria-label={isDarkMode ? "Light Mode" : "Dark Mode"}
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
