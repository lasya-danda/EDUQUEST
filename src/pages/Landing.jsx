// src/pages/Landing.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

export default function Landing() {
  const navigate = useNavigate();
  const { role } = useAuth();

  const handleBrowseCourses = () => {
    if (role === "admin") {
      navigate("/admin/courses");
    } else {
      navigate("/courses");
    }
  };

  const highlights = [
    { label: "Hands-on projects", value: "30+" },
    { label: "Learners enrolled", value: "2,500+" },
    { label: "Average course rating", value: "4.8/5" },
  ];

  const tracks = [
    {
      title: "Web Development",
      text: "Learn HTML, CSS, JavaScript and React by building real world interfaces.",
      level: "Beginner – Intermediate",
      tag: "Popular",
    },
    {
      title: "Programming with Python",
      text: "Start from zero and move up to working with APIs, data and automation.",
      level: "Beginner Friendly",
      tag: "Start here",
    },
    {
      title: "Career Readiness",
      text: "Practice interview questions, build a portfolio and polish your GitHub profile.",
      level: "Project Focused",
      tag: "New",
    },
  ];

  return (
    <section className="py-12">
      {/* HERO */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
        {/* Left text */}
        <div>
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-indigo-500 mb-3">
            Learn • Build • Showcase
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900 mb-4">
            Your online campus for{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              job-ready tech skills
            </span>
            .
          </h1>

          <p className="text-sm md:text-base text-slate-700 mb-4">
            EduQuest is a project-based learning platform for students and early
            professionals. Instead of only watching videos, you{" "}
            <strong>build real mini-projects</strong> in every course – so you
            finish with skills you can actually show in a portfolio.
          </p>

          <p className="text-sm text-slate-600 mb-6">
            Learn in short, focused sprints, follow clear roadmaps, and get
            simple explanations written for beginners. Perfect if you are
            starting your developer journey or switching from a non-CS
            background.
          </p>

          <div className="flex flex-wrap gap-3 mb-4">
            <button
              onClick={handleBrowseCourses}
              className="px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md hover:shadow-lg hover:scale-[1.02] transition"
            >
              Browse all courses
            </button>
            <button
              onClick={() => navigate("/pricing")}
              className="px-5 py-2.5 rounded-full text-sm font-semibold border border-indigo-100 bg-white/60 hover:bg-indigo-50 hover:border-indigo-300 transition"
            >
              View pricing plans
            </button>
          </div>

          <div className="flex flex-wrap gap-3 text-xs text-slate-500">
            <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700">
              Beginner-friendly
            </span>
            <span className="px-3 py-1 rounded-full bg-sky-50 text-sky-700">
              Project-based learning
            </span>
            <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-700">
              Certificates on completion
            </span>
          </div>
        </div>

        {/* Right card */}
        <div className="bg-white/90 backdrop-blur rounded-3xl shadow-xl p-6 md:p-7 border border-slate-100">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            Why students choose EduQuest
          </h2>

          <ul className="space-y-3 text-sm text-slate-700 mb-5">
            <li>
              <span className="font-semibold">Guided learning paths:</span>{" "}
              Follow step-by-step tracks for Web Development, Python and more.
            </li>
            <li>
              <span className="font-semibold">Real-world projects:</span> Build
              landing pages, dashboards, APIs and mini apps that you can show to
              recruiters.
            </li>
            <li>
              <span className="font-semibold">Mentor-style explanations:</span>{" "}
              Complex topics are broken into small, easy lessons with examples.
            </li>
            <li>
              <span className="font-semibold">Flexible pace:</span> Learn in
              evenings, weekends or between classes – progress is saved
              automatically.
            </li>
          </ul>

          <div className="grid grid-cols-3 gap-3 text-center text-xs">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl bg-slate-50 border border-slate-100 py-3"
              >
                <div className="text-base font-bold text-indigo-600">
                  {item.value}
                </div>
                <div className="text-[11px] text-slate-500 px-2">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TRACK CARDS */}
      <div className="mb-10">
        <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
          Pick a track and start learning
        </h2>
        <p className="text-sm text-slate-600 mb-5">
          Every track is broken into short modules, each ending with a small
          project. You can join from any background – only basic computer
          knowledge is needed.
        </p>

        <div className="grid md:grid-cols-3 gap-5">
          {tracks.map((t) => (
            <div
              key={t.title}
              className="bg-white rounded-2xl shadow-md border border-slate-100 p-4 flex flex-col justify-between"
            >
              <div>
                <div className="inline-flex items-center gap-2 mb-2">
                  <h3 className="font-semibold text-slate-900">{t.title}</h3>
                  <span className="px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wide bg-indigo-50 text-indigo-600">
                    {t.tag}
                  </span>
                </div>
                <p className="text-sm text-slate-700 mb-2">{t.text}</p>
                <p className="text-xs text-slate-500">{t.level}</p>
              </div>

              <button
                onClick={handleBrowseCourses}
                className="mt-4 self-start text-xs font-semibold text-indigo-600 hover:text-indigo-700"
              >
                View related courses →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* CTA BAND */}
      <div className="mt-6 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[1px]">
        <div className="rounded-3xl bg-slate-900/95 px-6 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-white mb-1">
              Ready to start your next project?
            </h3>
            <p className="text-xs md:text-sm text-slate-200">
              Create a free account, pick any beginner course and ship your
              first mini-project this week.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleBrowseCourses}
              className="px-4 py-2 rounded-full text-xs md:text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100"
            >
              Start with a free course
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="px-4 py-2 rounded-full text-xs md:text-sm font-semibold border border-slate-500 text-slate-100 hover:bg-slate-800"
            >
              Talk to our team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
