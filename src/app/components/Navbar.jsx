import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/assets/icons/Group 2.svg";

function Navbar() {
  return (
    <div className="relative">
      {/* Navbar */}
      <div className="navbar bg-base-100/95 backdrop-blur-sm shadow-sm fixed top-0 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns={Logo}
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href="/" className="font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="font-medium">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="font-medium">
                  About
                </Link>
                <ul className="p-2">
                  <li>
                    <Link href="/about/team">Our Team</Link>
                  </li>
                  <li>
                    <Link href="/about/mission">Our Mission</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/contact" className="font-medium">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <Link
            href="/"
            className="btn btn-ghost text-xl flex items-center gap-2"
          >
            <Image
              src="/logo.svg"
              alt="Car Doctor Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-primary font-bold">Car Doctor</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/" className="font-medium">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="font-medium">
                Services
              </Link>
            </li>
            <li>
              <details>
                <summary className="font-medium">About</summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                  <li>
                    <Link href="/about/team">Our Team</Link>
                  </li>
                  <li>
                    <Link href="/about/mission">Our Mission</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href="/contact" className="font-medium">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            href="/appointment"
            className="btn btn-primary text-white hover:bg-primary-focus transition-colors"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
