import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/assets/icons/Group 2.svg";
import Banner from "../../public/assets/images/banner/5.jpg";

function Navbar() {
  return (
    <div className="relative">
      {/* Navbar */}
      <div className="navbar bg-base-100/95 backdrop-blur-sm shadow-md fixed top-0 z-50 border-b border-primary/10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center w-full">
            {/* Navbar Start */}
            <div className="flex items-center gap-4">
              <div className="dropdown lg:hidden">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost hover:bg-primary/10"
                >
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
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-100 rounded-box w-52 border border-primary/10"
                >
                  <li>
                    <Link
                      href="/"
                      className="font-medium hover:text-primary transition-all"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="font-medium hover:text-primary transition-all"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="font-medium hover:text-primary transition-all"
                    >
                      About
                    </Link>
                    <ul className="p-2 bg-base-100/95 backdrop-blur-sm">
                      <li>
                        <Link
                          href="/about/team"
                          className="hover:text-primary transition-all"
                        >
                          Our Team
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/about/mission"
                          className="hover:text-primary transition-all"
                        >
                          Our Mission
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="font-medium hover:text-primary transition-all"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              
              <Link
                href="/"
                className="btn btn-ghost text-xl flex items-center gap-2 hover:bg-transparent px-0"
              >
                <Image
                  src={Logo}
                  alt="Car Doctor Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10 hover:scale-105 transition-transform"
                  priority
                />
                <span className="text-primary font-bold text-xl hover:text-primary/90 transition-colors">
                  Car Doctor
                </span>
              </Link>
            </div>

            {/* Navbar Center */}
            <div className="hidden lg:flex flex-1 justify-center">
              <ul className="menu menu-horizontal px-1 gap-2">
                <li>
                  <Link
                    href="/"
                    className="font-medium hover:text-primary transition-all px-4"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="font-medium hover:text-primary transition-all px-4"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <details>
                    <summary className="font-medium hover:text-primary transition-all px-4">
                      About
                    </summary>
                    <ul className="p-2 bg-base-100/95 backdrop-blur-sm rounded-box shadow-xl border border-primary/10">
                      <li>
                        <Link
                          href="/about/team"
                          className="hover:text-primary transition-all"
                        >
                          Our Team
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/about/mission"
                          className="hover:text-primary transition-all"
                        >
                          Our Mission
                        </Link>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="font-medium hover:text-primary transition-all px-4"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Navbar End */}
            <div className="flex items-center">
              <Link
                href="/appointment"
                className="btn bg-amber-600 text-white  transition-all hover:scale-105 shadow-lg hover:shadow-primary/30"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>

   
      
    </div>
  );
}

export default Navbar;
