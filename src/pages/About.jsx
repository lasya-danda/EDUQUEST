// src/pages/About.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FiBookOpen, FiAward, FiClock, FiUsers } from "react-icons/fi";

export default function About() {
  const features = [
    {
      icon: <FiBookOpen className="w-6 h-6" />,
      title: "Practical Courses",
      text: "Short, project-based courses that teach skills you can use right away.",
      colors: "from-indigo-500 to-violet-500",
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: "Mentor Support",
      text: "Get help from experienced mentors and join an active learner community.",
      colors: "from-teal-400 to-cyan-500",
    },
    {
      icon: <FiClock className="w-6 h-6" />,
      title: "Learn at Your Pace",
      text: "Flexible modules that fit into your schedule — learn when and where you want.",
      colors: "from-amber-400 to-orange-400",
    },
    {
      icon: <FiAward className="w-6 h-6" />,
      title: "Certificates & Projects",
      text: "Build a portfolio of projects and earn certificates to showcase your skills.",
      colors: "from-green-400 to-lime-400",
    },
  ];

  return (
    <section className="relative overflow-hidden pt-10 pb-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-purple-50 to-white opacity-90"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* HERO SECTION */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-900">
              Learn real skills with{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-500">
                EduQuest
              </span>
            </h1>

            <p className="text-lg text-slate-700 mb-6">
              EduQuest is a friendly learning platform built to help anyone gain
              job-ready skills through short, hands-on courses. Each course is designed
              around practical projects, clear explanations, and useful exercises so you
              can learn by doing.
            </p>

            {/* HOW EDUQUEST HELPS */}
            <h3 className="text-xl font-semibold text-slate-800 mt-6">
              How EduQuest Helps You
            </h3>

            <ul className="list-disc list-inside text-slate-700 space-y-1 mt-3">
              <li>
                <strong>Find the right course:</strong> Browse curated tracks and filter
                by skill or duration.
              </li>
              <li>
                <strong>Learn by building:</strong> Complete real projects you can add to
                your portfolio.
              </li>
              <li>
                <strong>Get support:</strong> Ask mentors questions and collaborate with
                peers.
              </li>
              <li>
                <strong>Show your work:</strong> Earn certificates and download project
                summaries.
              </li>
            </ul>

            {/* BUTTONS */}
            <div className="flex gap-3 mt-5">
              <Link
                to="/courses"
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-indigo-600 to-violet-500 text-white shadow hover:scale-[1.03] transition font-medium"
              >
                Explore Courses
              </Link>

              <Link
                to="/contact"
                className="px-5 py-2.5 rounded-full border border-indigo-300 bg-white text-indigo-700 shadow-sm hover:bg-indigo-50 transition font-medium"
              >
                Contact Support
              </Link>
            </div>
          </div>

          {/* FEATURE CARDS */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="rounded-xl p-5 bg-white shadow-md hover:shadow-lg transform hover:-translate-y-1 transition"
                >
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-lg text-white mb-3 bg-gradient-to-r ${f.colors}`}
                  >
                    {f.icon}
                  </div>
                  <div className="font-semibold text-lg">{f.title}</div>
                  <div className="text-sm text-slate-600 mt-1">{f.text}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-inner">
              <h4 className="font-semibold mb-2 text-slate-800">Who this is for</h4>
              <p className="text-sm text-slate-700">
                Students, career switchers, and learners who want short, focused learning
                that leads to practical outcomes — a portfolio, confidence, and new
                skills.
              </p>
            </div>
          </div>
        </div>

        {/* ADDITIONAL SECTIONS */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold mb-2 text-slate-800">Learning Path & Outcomes</h3>
            <p className="text-slate-700 text-sm mb-2">Each course includes:</p>
            <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
              <li>Short lessons with hands-on tasks</li>
              <li>One or more mini projects</li>
              <li>Quizzes and quick checkpoints</li>
              <li>A final project summary you can share</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold mb-2 text-slate-800">How to Get Started</h3>
            <ol className="list-decimal list-inside text-slate-700 text-sm space-y-1">
              <li>Browse courses and pick one that matches your goal.</li>
              <li>Follow lessons, complete tasks, and build the project.</li>
              <li>Ask questions in the community or to mentors when stuck.</li>
              <li>Finish the final project and download your certificate.</li>
            </ol>
          </div>
        </div>

        {/* Footer Text */}
        <div className="mt-10 text-sm text-slate-500">
          Ready to start? Click{" "}
          <strong className="text-indigo-600">Explore Courses</strong> to find a course
          that fits your goals.
        </div>
      </div>
    </section>
  );
}
