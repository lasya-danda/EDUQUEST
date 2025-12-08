// src/pages/CourseEditor.jsx
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createCourse, getCourse, updateCourse } from "../api";
import { toast } from "react-toastify";

export default function CourseEditor() {
  const navigate = useNavigate();
  const { id } = useParams();
  const editing = Boolean(id);

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    duration: "",
    image: ""
  });

  useEffect(() => {
    if (editing) {
      (async () => {
        try {
          const c = await getCourse(id);
          setForm({
            title: c.title || "",
            description: c.description || "",
            price: c.price || "",
            duration: c.duration || "",
            image: c.image || ""
          });
        } catch (e) {
          console.error(e);
        }
      })();
    }
  }, [editing, id]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.title || !form.description) {
      toast.error("Title and description are required");
      return;
    }

    setLoading(true);
    try {
      const payload = {
        title: form.title,
        description: form.description,
        price: Number(form.price) || 0,
        duration: form.duration || "N/A",
        image: form.image
      };

      if (editing) {
        await updateCourse(id, payload);
        toast.success("Course updated");
      } else {
        await createCourse(payload);
        toast.success("Course created");
      }

      navigate("/admin/courses");
    } catch (err) {
      console.error(err);
      toast.error("Save failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="max-w-2xl mx-auto p-6 bg-gradient-to-br from-slate-900 via-indigo-800 to-violet-700 rounded-3xl shadow-xl">
      <div className="bg-white/95 rounded-2xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-2 text-slate-900">
          {editing ? "Edit Course" : "Add New Course"}
        </h2>
        <p className="text-xs text-slate-500 mb-4">
          Fill the details below. This form is only accessible to{" "}
          <span className="font-semibold text-indigo-600">Admin</span>.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            placeholder="Course Title"
            className="w-full border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 rounded-lg p-2 text-sm outline-none"
          />
          <textarea
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
            placeholder="Short description of the course"
            className="w-full border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 rounded-lg p-2 text-sm outline-none"
            rows="3"
          />
          <div className="grid md:grid-cols-2 gap-3">
            <input
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
              placeholder="Price (₹)"
              className="w-full border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 rounded-lg p-2 text-sm outline-none"
            />
            <input
              value={form.duration}
              onChange={(e) => setForm({ ...form, duration: e.target.value })}
              placeholder="Duration (e.g., 6 weeks)"
              className="w-full border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 rounded-lg p-2 text-sm outline-none"
            />
          </div>
          <input
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
            placeholder="Image URL (optional)"
            className="w-full border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 rounded-lg p-2 text-sm outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-violet-500 text-white rounded-full text-sm font-semibold shadow hover:scale-[1.02] transition"
          >
            {loading ? "Saving..." : editing ? "Update Course" : "Create Course"}
          </button>
        </form>
      </div>
    </section>
  );
}
