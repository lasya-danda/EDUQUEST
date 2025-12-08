// src/pages/RoleSelect.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function RoleSelect() {
  const navigate = useNavigate();

  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="max-w-xl w-full bg-white/95 backdrop-blur rounded-3xl shadow-2xl p-8 border border-white/60">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-center text-slate-900">
          Welcome to <span className="text-indigo-600">EduQuest</span>
        </h1>
        <p className="text-center text-slate-600 mb-6 text-sm">
          Choose how you want to continue. Admins can manage courses (CRUD).
          Learners can explore courses, pricing, blog and contact pages.
        </p>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Admin card */}
          <button
            onClick={() => navigate("/login/admin")}
            className="group relative overflow-hidden rounded-2xl border border-indigo-100 bg-indigo-50/70 hover:bg-indigo-100 transition shadow-md text-left p-4"
          >
            <div className="absolute -right-6 -top-6 w-16 h-16 bg-indigo-500/20 rounded-full blur-xl" />
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center text-xl">
                🔐
              </div>
              <div>
                <div className="text-xs font-semibold uppercase text-indigo-600">
                  Admin
                </div>
                <div className="font-semibold text-sm">I am Admin</div>
              </div>
            </div>
            <p className="text-xs text-slate-700">
              Login to manage all courses. You can <b>create</b>, <b>edit</b> and{" "}
              <b>delete</b> courses from the admin dashboard.
            </p>
          </button>

          {/* User card */}
          <button
            onClick={() => navigate("/login/user")}
            className="group relative overflow-hidden rounded-2xl border border-emerald-100 bg-emerald-50/70 hover:bg-emerald-100 transition shadow-md text-left p-4"
          >
            <div className="absolute -left-6 -bottom-6 w-16 h-16 bg-emerald-500/20 rounded-full blur-xl" />
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center text-xl">
                📚
              </div>
              <div>
                <div className="text-xs font-semibold uppercase text-emerald-600">
                  Learner
                </div>
                <div className="font-semibold text-sm">I am User</div>
              </div>
            </div>
            <p className="text-xs text-slate-700">
              Continue as a learner to <b>view courses</b>, check{" "}
              <b>pricing</b>, read the <b>blog</b> and use the contact page.
            </p>
          </button>
          
        </div>

        <p className="mt-6 text-[11px] text-center text-slate-500">
         
        </p>
      </div>
    </section>
  );
}
