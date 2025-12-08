// src/components/Navbar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { FiLogOut } from "react-icons/fi";

export default function Navbar() {
  const { role, logout } = useAuth();
  const location = useLocation();

  // Hide navbar menu on role select + login screens
  const isAuthScreen =
    location.pathname === "/" ||
    location.pathname === "/login/admin" ||
    location.pathname === "/login/user";

  return (
    <nav className="bg-white/80 backdrop-blur border-b border-slate-200 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="font-extrabold text-xl text-indigo-600">
          EduQuest
        </Link>

        {/* Show menu only AFTER login */}
        {!isAuthScreen && (
          <div className="flex items-center gap-5 text-sm">

            <Link to="/landing" className="text-slate-700 hover:text-indigo-600 transition">Home</Link>
            <Link to="/about" className="text-slate-700 hover:text-indigo-600 transition">About</Link>
            <Link to="/team" className="text-slate-700 hover:text-indigo-600 transition">Team</Link>
            <Link to="/pricing" className="text-slate-700 hover:text-indigo-600 transition">Pricing</Link>
            <Link to="/blog" className="text-slate-700 hover:text-indigo-600 transition">Blog</Link>
            <Link to="/contact" className="text-slate-700 hover:text-indigo-600 transition">Contact</Link>

            {/* Admin menu */}
            {role === "admin" && (
              <Link
                to="/admin/menu"
                className="px-3 py-1.5 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-lg font-semibold text-xs hover:shadow-lg transition"
              >
                Admin Menu
              </Link>
            )}

            {/* Learner menu */}
            {role === "user" && (
              <Link
                to="/courses"
                className="px-3 py-1.5 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-lg font-semibold text-xs hover:shadow-lg transition"
              >
                My Courses
              </Link>
            )}

            {/* LOGOUT — redirect to role select page */}
            {role && (
              <button
                onClick={() => {
                  logout();
                  window.location.href = "/";
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-rose-600 to-red-600 text-white rounded-lg font-semibold text-xs hover:from-rose-700 hover:to-red-700 shadow-md hover:shadow-lg transition-all"
              >
                <FiLogOut className="text-sm" />
                Logout
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
