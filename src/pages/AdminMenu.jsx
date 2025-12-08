// src/pages/AdminMenu.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function AdminMenu() {
  const navigate = useNavigate();

  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-indigo-900 via-slate-900 to-emerald-800">
      <div className="max-w-3xl w-full bg-white/95 rounded-3xl shadow-2xl p-8 border border-white/60">
        <h2 className="text-3xl font-extrabold mb-2 text-slate-900 text-center">
          Admin Dashboard
        </h2>
        <p className="text-xs text-slate-500 text-center mb-6">
          You are logged in as <span className="font-semibold text-indigo-600">Admin</span>.  
          Manage EduQuest content from here.
        </p>

        <div className="grid md:grid-cols-2 gap-5">
          <button
            onClick={() => navigate("/admin/courses")}
            className="bg-gradient-to-br from-indigo-500 to-violet-500 text-white rounded-2xl p-5 text-left shadow-lg hover:shadow-xl hover:scale-[1.01] transition"
          >
            <div className="text-xs uppercase tracking-wide opacity-80 mb-1">
              Courses
            </div>
            <div className="font-semibold mb-1">Manage Courses (CRUD)</div>
            <div className="text-xs opacity-90">
              Create new courses, edit details or delete outdated ones.
            </div>
          </button>

          <button
            onClick={() => navigate("/landing")}
            className="bg-gradient-to-br from-emerald-400 to-teal-500 text-white rounded-2xl p-5 text-left shadow-lg hover:shadow-xl hover:scale-[1.01] transition"
          >
            <div className="text-xs uppercase tracking-wide opacity-80 mb-1">
              Site View
            </div>
            <div className="font-semibold mb-1">View Public Website</div>
            <div className="text-xs opacity-90">
              Open the learner view to see how your site looks to users.
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
