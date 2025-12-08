// src/components/Navbar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../AuthContext";

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

            <Link to="/landing" className="hover:text-indigo-600">Home</Link>
            <Link to="/about" className="hover:text-indigo-600">About</Link>
            <Link to="/team" className="hover:text-indigo-600">Team</Link>
            <Link to="/pricing" className="hover:text-indigo-600">Pricing</Link>
            <Link to="/blog" className="hover:text-indigo-600">Blog</Link>
            <Link to="/contact" className="hover:text-indigo-600">Contact</Link>

            {/* Admin menu */}
            {role === "admin" && (
              <Link
                to="/admin/menu"
                className="px-3 py-1 bg-indigo-600 text-white rounded"
              >
                Admin Menu
              </Link>
            )}

            {/* Learner menu */}
            {role === "user" && (
              <Link
                to="/courses"
                className="px-3 py-1 bg-emerald-600 text-white rounded"
              >
                My Courses
              </Link>
            )}

            {/* LOGOUT — redirect to role select page */}
            {role && (
              <button
                onClick={() => {
                  logout();
                  window.location.href = "/"; // ★ FIXED: Go back to role-selector screen
                }}
                className="px-3 py-1 border rounded text-xs hover:bg-slate-100"
              >
                Logout ({role})
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
