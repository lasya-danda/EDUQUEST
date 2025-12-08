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

      <div className="grid md:grid-cols-2 gap-4">
        {courses.map((c) => (
          <div
            key={c.id}
            className="bg-white rounded-2xl shadow-md border border-slate-100 p-4 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-semibold text-lg text-slate-900 mb-1">
                {c.title}
              </h3>
              <p className="text-sm text-slate-700 mb-2">{c.description}</p>
            </div>

            <div className="mt-2 flex items-center justify-between text-xs">
              <div className="space-y-1">
                <div>
                  <span className="font-semibold text-indigo-600 mr-2">
                    ₹{c.price}
                  </span>
                  <span className="text-slate-500">{c.duration}</span>
                </div>
                <div className="inline-flex items-center gap-2 text-[11px] bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full">
                  Admin • CRUD enabled
                </div>
              </div>

              <div className="space-x-3 text-sm">
                <Link
                  to={`/admin/courses/${c.id}/edit`}
                  className="text-indigo-600 hover:underline"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(c.id)}
                  className="text-rose-600 hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
        {courses.length === 0 && (
          <div className="text-sm text-slate-500">
            No courses found. Click <span className="font-semibold">Add Course</span> to create one.
          </div>
        )}
      </div>
    </section>
  );
}
