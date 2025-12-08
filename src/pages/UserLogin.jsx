// src/pages/UserLogin.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

export default function UserLogin() {
  const { loginAsUser } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (name.trim() === "") {
      alert("Please enter your name");
      return;
    }
    loginAsUser();
    navigate("/landing");
  }

  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500">
      <div className="w-full max-w-md bg-white/95 rounded-3xl shadow-2xl p-8 border border-white/70">
        <h2 className="text-2xl font-extrabold mb-2 text-center text-slate-900">
          Learner Login
        </h2>
        <p className="text-xs text-center text-slate-500 mb-6">
          Enter your name to explore courses, pricing, blog and more.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-semibold text-slate-600">
              Your name
            </label>
            <input
              className="mt-1 w-full border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 rounded-lg p-2 text-sm outline-none"
              placeholder="Enter your name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-semibold shadow-md hover:scale-[1.01] transition"
          >
            Continue as Learner
          </button>
        </form>
      </div>
    </section>
  );
}
