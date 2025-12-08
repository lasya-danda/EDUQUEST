// src/pages/Courses.jsx  (ADMIN)
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCourses, deleteCourse } from "../api";
import { toast } from "react-toastify";

export default function Courses() {
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

  async function handleDelete(id) {
    if (!confirm("Delete this course?")) return;
    try {
      await deleteCourse(id);
      toast.success("Deleted");
      fetchData();
    } catch (e) {
      toast.error("Delete failed");
    }
  }

  return (
    <section className="py-4">
      <div className="flex justify-between items-center mb-5">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900">Manage Courses</h2>
          <p className="text-xs text-slate-500">
            Admin only: full <span className="font-semibold text-indigo-600">CRUD</span> on courses.
          </p>
        </div>
        <Link
          to="/admin/courses/new"
          className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-violet-500 text-white rounded-full text-sm shadow hover:scale-[1.02] transition"
        >
          + Add Course
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {courses.map((c) => (
          <div
            key={c.id}
            className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-2xl transition-all hover:scale-[1.02] flex flex-col"
          >
            {/* Image Section */}
            <div className="relative h-48 bg-gradient-to-br from-slate-200 to-slate-300 overflow-hidden">
              {c.image && c.image.trim() !== "" ? (
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white text-5xl font-bold">
                  {c.title?.[0]?.toUpperCase() || "C"}
                </div>
              )}
              <div className="absolute top-2 right-2 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                Admin
              </div>
            </div>

            {/* Content Section */}
            <div className="p-4 flex flex-col flex-1">
              <h3 className="font-bold text-base text-slate-900 mb-2">
                {c.title}
              </h3>
              <p className="text-xs text-slate-600 mb-3 line-clamp-2 flex-1">
                {c.description}
              </p>

              {/* Price & Duration */}
              <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-200">
                <span className="font-bold text-indigo-600 text-sm">
                  ₹{c.price}
                </span>
                <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                  {c.duration}
                </span>
              </div>

              {/* Badge */}
              <div className="mb-3">
                <div className="inline-flex items-center gap-1 text-[10px] bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 px-2 py-1 rounded-full border border-indigo-200 font-semibold">
                  ✓ CRUD enabled
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 mt-auto">
                <Link
                  to={`/admin/courses/${c.id}/edit`}
                  className="flex-1 px-3 py-2 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white text-xs font-bold rounded-lg hover:from-indigo-700 hover:to-indigo-600 transition text-center"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(c.id)}
                  className="flex-1 px-3 py-2 bg-gradient-to-r from-rose-600 to-red-600 text-white text-xs font-bold rounded-lg hover:from-rose-700 hover:to-red-700 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
        {courses.length === 0 && (
          <div className="col-span-full text-center py-12">
            <div className="text-6xl mb-3">📚</div>
            <div className="text-lg font-semibold text-slate-900 mb-1">No courses yet</div>
            <div className="text-sm text-slate-500">
              Click <span className="font-semibold bg-indigo-100 px-2 py-1 rounded">+ Add Course</span> to get started
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
