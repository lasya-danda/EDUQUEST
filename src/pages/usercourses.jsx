// src/pages/UserCourses.jsx
import React, { useEffect, useState } from "react";
import { getCourses } from "../api";

export default function UserCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => { fetchData(); }, []);

  async function fetchData() {
    try {
      const data = await getCourses();
      setCourses(data);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <section className="py-6">
      <h2 className="text-3xl font-extrabold mb-4 text-slate-900">
        Available Courses
      </h2>
      <p className="text-xs text-slate-500 mb-5">
        This is the learner view. You can only <span className="font-semibold">see courses</span>, not edit them.
      </p>

      <div className="grid md:grid-cols-3 gap-4">
        {courses.map((c) => (
          <div
            key={c.id}
            className="bg-gradient-to-br from-indigo-500/10 via-violet-500/10 to-emerald-500/10 rounded-3xl p-1"
          >
            <div className="bg-white rounded-2xl p-4 h-full flex flex-col shadow">
              {/* image or colourful avatar */}
              {c.image && c.image.trim() !== "" ? (
                <div className="w-full h-32 rounded-xl overflow-hidden mb-3">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-full h-32 rounded-xl mb-3 bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white text-3xl font-bold">
                  {c.title?.[0]?.toUpperCase() || "C"}
                </div>
              )}

              <div className="flex-1">
                <h3 className="font-semibold text-sm mb-1 text-slate-900">
                  {c.title}
                </h3>
                <p className="text-xs text-slate-600 mb-2 line-clamp-3">
                  {c.description}
                </p>
              </div>

              <div className="mt-2 flex items-center justify-between text-xs">
                <span className="font-semibold text-indigo-600">
                  ₹{c.price}
                </span>
                <span className="text-slate-500">{c.duration}</span>
              </div>
            </div>
          </div>
        ))}

        {courses.length === 0 && (
          <div className="text-sm text-slate-500">
            No courses available right now. Please check back later.
          </div>
        )}
      </div>
    </section>
  );
}
