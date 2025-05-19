"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";

import Logo from "../../public/assets/icons/Group 2.svg";

function Navbar() {
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      {/* Desktop Navbar */}
      <div className="navbar bg-base-100/95 backdrop-blur-sm shadow-md fixed top-0 z-50 border-b border-primary/10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center w-full">
            {/* Logo */}
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

            {/* Desktop Navigation */}
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
                  <Link
                    href="/contact"
                    className="font-medium hover:text-primary transition-all px-4"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Desktop Auth Section */}
            <div className="hidden lg:flex items-center gap-4">
              {session ? (
                <>
                  <div className="flex items-center gap-2">
                    {session.user?.image ? (
                      <div className="avatar">
                        <div className="w-8 rounded-full">
                          <Image
                            src={session.user.image}
                            alt="Profile"
                            width={32}
                            height={32}
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="avatar placeholder">
                        
                      </div>
                    )}
                   
                  </div>
                  <Link
                    href="/logout"
                    className="btn bg-red-600 text-white hover:scale-105 shadow-lg hover:shadow-red-500/30"
                  >
                    Logout
                  </Link>
                </>
              ) : (
                <Link
                  href="/login"
                  className="btn bg-amber-600 text-white hover:scale-105 shadow-lg hover:shadow-primary/30"
                >
                  Login
                </Link>
              )}
              <Link
                href="/appointment"
                className="btn bg-amber-600 text-white hover:scale-105 shadow-lg hover:shadow-primary/30"
              >
                Book Appointment
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                className="btn btn-ghost btn-square"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-16 inset-x-0 z-40 bg-base-100/95 backdrop-blur-sm shadow-lg border-t border-primary/10">
          <div className="container mx-auto px-4 py-4">
            <ul className="menu gap-2">
              <li>
                <Link
                  href="/"
                  className="font-medium hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="font-medium hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-medium hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>

            <div className="divider my-2"></div>

            <div className="flex flex-col gap-2">
              {session ? (
                <>
                  <div className="flex items-center gap-2 px-4 py-2">
                    {session.user?.image ? (
                      <div className="avatar">
                        <div className="w-8 rounded-full">
                          <Image
                            src={session.user.image}
                            alt="Profile"
                            width={32}
                            height={32}
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="avatar placeholder">
                        
                      </div>
                    )}
                   
                  </div>
                  <Link
                    href="/logout"
                    className="btn btn-error btn-block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Logout
                  </Link>
                </>
              ) : (
                <Link
                  href="/login"
                  className="btn btn-primary btn-block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
              )}
              <Link
                href="/appointment"
                className="btn btn-accent btn-block"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;