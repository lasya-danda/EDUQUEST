// src/App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import RoleSelect from "./pages/RoleSelect";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";

// ⬇️ make sure this matches your actual file name: Blogdetails.jsx
import BlogDetails from "./pages/Blogdetails";

import Contact from "./pages/Contact";
import Team from "./pages/Team";
import Testimonials from "./pages/Testimonials";

import Courses from "./pages/Courses";          // ADMIN (CRUD)
import CourseEditor from "./pages/CourseEditor";
import UserCourses from "./pages/Usercourses";  // USER view-only ✅

import AdminLogin from "./pages/AdminLogin";
import UserLogin from "./pages/UserLogin";
import AdminMenu from "./pages/AdminMenu";

import { useAuth } from "./AuthContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function AdminRoute({ children }) {
  const { role } = useAuth();
  if (role !== "admin") {
    return <Navigate to="/login/admin" replace />;
  }
  return children;
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 container mx-auto px-6 py-6">
        <Routes>
          {/* first screen: choose Admin / User */}
          <Route path="/" element={<RoleSelect />} />

          {/* USER side */}
          <Route path="/login/user" element={<UserLogin />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/courses" element={<UserCourses />} />

          {/* ADMIN side */}
          <Route path="/login/admin" element={<AdminLogin />} />
          <Route
            path="/admin/menu"
            element={
              <AdminRoute>
                <AdminMenu />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/courses"
            element={
              <AdminRoute>
                <Courses />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/courses/new"
            element={
              <AdminRoute>
                <CourseEditor />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/courses/:id/edit"
            element={
              <AdminRoute>
                <CourseEditor />
              </AdminRoute>
            }
          />

          {/* fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
