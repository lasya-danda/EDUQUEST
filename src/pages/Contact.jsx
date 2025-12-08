import React, { useState } from "react";
import { sendContact } from "../api";
import { toast } from "react-toastify";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    topic: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill all required fields");
      return;
    }

    setLoading(true);
    try {
      await sendContact({
        ...form,
        createdAt: new Date().toISOString(),
      });
      toast.success("Message sent! We’ll get back to you soon.");
      setForm({ name: "", email: "", topic: "", message: "" });
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="relative overflow-hidden py-10">
      {/* soft gradient background blobs */}
      <div className="absolute -left-32 -top-32 w-72 h-72 bg-gradient-to-tr from-indigo-400 via-purple-400 to-pink-300 opacity-25 blur-3xl pointer-events-none" />
      <div className="absolute -right-32 -bottom-32 w-72 h-72 bg-gradient-to-tr from-cyan-300 via-teal-300 to-emerald-300 opacity-20 blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-slate-900">
          Contact <span className="text-indigo-600">EduQuest</span>
        </h2>
        <p className="text-sm md:text-base text-slate-600 mb-6 max-w-2xl">
          Have questions about courses, pricing, or projects? Send us a message and
          we’ll help you choose the right learning path.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* left: contact info / highlights */}
          <div className="md:col-span-1 space-y-4">
            <div className="bg-white/90 rounded-2xl shadow-lg p-4 border border-indigo-50">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                  <FiMail />
                </div>
                <div className="font-semibold text-sm">Email</div>
              </div>
              <p className="text-xs text-slate-600 mb-1">
                For general questions and course suggestions.
              </p>
              <p className="text-sm font-mono text-indigo-700">
                support@eduquest.example
              </p>
            </div>

            <div className="bg-white/90 rounded-2xl shadow-lg p-4 border border-emerald-50">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <FiPhone />
                </div>
                <div className="font-semibold text-sm">Phone</div>
              </div>
              <p className="text-xs text-slate-600 mb-1">
                Monday – Friday, 10:00 AM to 6:00 PM.
              </p>
              <p className="text-sm font-mono text-emerald-700">
                +91-98765-43210
              </p>
            </div>

            <div className="bg-white/90 rounded-2xl shadow-lg p-4 border border-amber-50">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                  <FiMapPin />
                </div>
                <div className="font-semibold text-sm">Location</div>
              </div>
              <p className="text-xs text-slate-600">
                EduQuest Learning Hub,  
                <br />
                Online-first platform, India.
              </p>
            </div>
          </div>

          {/* right: colourful form */}
          <div className="md:col-span-2">
            <div className="bg-white/95 rounded-2xl shadow-xl p-6 border border-slate-100">
              <h3 className="text-lg font-semibold mb-4">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">
                      Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">
                      Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
                      placeholder="you@example.com"
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">
                    Topic
                  </label>
                  <select
                    className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
                    value={form.topic}
                    onChange={(e) =>
                      setForm({ ...form, topic: e.target.value })
                    }
                  >
                    <option value="">Choose a topic (optional)</option>
                    <option value="courses">Courses & learning path</option>
                    <option value="pricing">Pricing & plans</option>
                    <option value="technical">Technical issue</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm min-h-[120px] focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
                    placeholder="Tell us how we can help you..."
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-[11px] text-slate-500">
                    Your message will be stored in our demo backend (JSON-Server) as
                    part of this project.
                  </p>
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-500 text-white text-sm font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed transition"
                  >
                    <FiSend className="text-xs" />
                    {loading ? "Sending..." : "Send message"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
