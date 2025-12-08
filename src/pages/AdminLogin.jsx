// src/pages/AdminLogin.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

export default function AdminLogin() {
  const { loginAsAdmin } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });

  function handleSubmit(e) {
    e.preventDefault();
    if (form.username.trim() === "" || form.password.trim() === "") {
      alert("Please enter username and password");
      return;
    }
    loginAsAdmin();
    navigate("/admin/menu");
  }

  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-800 to-violet-700">
      <div className="w-full max-w-md bg-white/95 rounded-3xl shadow-2xl p-8 border border-white/70">
        <h2 className="text-2xl font-extrabold mb-2 text-center text-slate-900">
          Admin Login
        </h2>
        <p className="text-xs text-center text-slate-500 mb-6">
          Only admin can manage courses (Create, Update, Delete).
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-semibold text-slate-600">Username</label>
            <input
              className="mt-1 w-full border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 rounded-lg p-2 text-sm outline-none"
              placeholder="Enter admin username"
              value={form.username}
              onChange={e => setForm({ ...form, username: e.target.value })}
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-slate-600">Password</label>
            <input
              className="mt-1 w-full border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 rounded-lg p-2 text-sm outline-none"
              placeholder="Enter password"
              type="password"
              value={form.password}
              onChange={e => setForm({ ...form, password: e.target.value })}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded-full bg-gradient-to-r from-indigo-600 to-violet-500 text-white text-sm font-semibold shadow-md hover:scale-[1.01] transition"
          >
            Login as Admin
          </button>
        </form>
      </div>
    </section>
  );
}
