// src/pages/Blog.jsx
import React, { useMemo, useState } from "react";

const POSTS = [
  {
    id: 1,
    title: "Getting started with React — a friendly guide",
    category: "React",
    date: "2025-07-01",
    readTime: "6 min read",
    tag: "React",
    image: "/src/assets/python.png", // you can change image paths if you like
    excerpt:
      "Learn how to set up a React project with Vite, create components, and structure your app for growth.",
    content: `
React is a popular library for building user interfaces. In this guide we:

• Create a new project using Vite  
• Understand the difference between components and pages  
• Learn how props and state work in functional components  
• See how to organise folders and files in a clean structure  

By the end, you can spin up a small React project like EduQuest and start
adding pages for courses, pricing, blog, and contact.
    `.trim(),
  },
  {
    id: 2,
    title: "Tailwind tips: build faster UIs",
    category: "CSS",
    date: "2025-06-10",
    readTime: "4 min read",
    tag: "CSS",
    image: "/src/assets/web.jpg",
    excerpt:
      "Useful Tailwind tricks to help you write less CSS and ship polished interfaces quickly.",
    content: `
Tailwind lets you build modern UIs without writing a separate CSS file for
every component.

Tips covered in this article:

• Use flex and grid utilities to create responsive layouts  
• Apply padding, margin and gap utilities for spacing  
• Use rounded, shadow and gradient utilities for cards and buttons  
• Extract common styles into small reusable components  

These tricks are exactly what we used to style the EduQuest homepage,
admin dashboard and login screens.
    `.trim(),
  },
  {
    id: 3,
    title: "Project-based learning: why it works",
    category: "Learning",
    date: "2025-05-18",
    readTime: "5 min read",
    tag: "Learning",
    image: "/src/assets/project.png",
    excerpt:
      "Completing short projects accelerates learning and helps you build a portfolio employers notice.",
    content: `
Instead of only watching videos, project-based learning forces you to apply
concepts to real mini-projects.

In this post we discuss:

• How small projects reduce fear and help you start quickly  
• Why debugging your own app teaches more than any tutorial  
• How to document projects so they look good on your resume  
• Simple project ideas you can build with React + JSON-Server  

EduQuest itself is an example project that shows a full flow from
frontend to a mock backend.
    `.trim(),
  },
  {
    id: 4,
    title: "Intro to building REST APIs for your frontend",
    category: "Backend",
    date: "2025-04-20",
    readTime: "7 min read",
    tag: "Backend",
    image: "/public/course.png", // fallback image from public
    excerpt:
      "A simple walkthrough to create a mock API with JSON-Server and connect it to your React frontend.",
    content: `
You don't always need a full backend to practice frontend skills.
JSON-Server gives you a fake REST API in a few seconds.

Steps covered:

• Install json-server as a dev dependency  
• Create a db.json file with courses and contacts  
• Run json-server on port 5000  
• Use Axios to call /courses, /contacts etc. from React  

This is exactly how EduQuest stores courses and contact messages.
    `.trim(),
  },
];

export default function Blog() {
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState(POSTS[0].id);
  const [email, setEmail] = useState("");

  const selectedPost = useMemo(
    () => POSTS.find((p) => p.id === selectedId),
    [selectedId]
  );

  const filteredPosts = useMemo(() => {
    if (!search.trim()) return POSTS;
    const q = search.toLowerCase();
    return POSTS.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.content.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    );
  }, [search]);

  function handleReadMore(post) {
    setSelectedId(post.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleSubscribe(e) {
    e.preventDefault();
    if (!email.trim()) {
      alert("Please enter an email address.");
      return;
    }
    alert("Subscribed with: " + email);
    setEmail("");
  }

  return (
    <section className="py-8 space-y-8">
      {/* Top gradient header */}
      <div className="rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-8 shadow-xl">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
          EduQuest Blog
        </h1>
        <p className="max-w-3xl text-sm md:text-base text-indigo-50">
          Short articles, tutorials, and tips about web development, learning
          strategies, and project-based learning — written to help you learn
          faster and build things that matter.
        </p>

        <div className="mt-6 flex flex-col md:flex-row gap-3 items-start md:items-center">
          <div className="flex-1 flex gap-2">
            <input
              className="flex-1 rounded-full px-4 py-2 text-sm text-slate-800 outline-none shadow-sm border border-white/40"
              placeholder="Search posts, tags or keywords..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              onClick={() => setSearch("")}
              className="px-4 py-2 rounded-full text-sm font-semibold bg-white/90 text-indigo-600 hover:bg-white transition"
            >
              Clear
            </button>
          </div>

          <form
            onSubmit={handleSubscribe}
            className="mt-2 md:mt-0 flex flex-wrap gap-2 items-center bg-white/10 px-3 py-2 rounded-full"
          >
            <span className="text-xs mr-1">Subscribe for updates:</span>
            <input
              type="email"
              className="px-3 py-1 rounded-full text-xs text-slate-900 outline-none bg-white"
              placeholder="you@domain.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-300 text-slate-900 hover:bg-amber-200 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Selected post big card */}
      {selectedPost && (
        <div className="grid md:grid-cols-[2fr,1fr] gap-6">
          <article className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
            <div className="md:flex">
              <div className="md:w-2/5 bg-slate-100">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-3/5 p-6 flex flex-col">
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                  <span className="px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-600 font-semibold">
                    {selectedPost.tag}
                  </span>
                  <span>{selectedPost.readTime}</span>
                  <span>•</span>
                  <span>{selectedPost.date}</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold mb-2 text-slate-900">
                  {selectedPost.title}
                </h2>
                <p className="text-sm text-slate-700 whitespace-pre-line">
                  {selectedPost.content}
                </p>
              </div>
            </div>
          </article>

          {/* Category / small sidebar */}
          <aside className="space-y-4">
            <div className="bg-white rounded-2xl shadow p-4">
              <h3 className="font-semibold mb-2 text-slate-900 text-sm">
                Browse by category
              </h3>
              <div className="flex flex-wrap gap-2 text-xs">
                {["React", "CSS", "Learning", "Backend"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSearch(cat)}
                    className="px-3 py-1 rounded-full bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 transition"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow p-4">
              <h3 className="font-semibold mb-2 text-slate-900 text-sm">
                Recent posts
              </h3>
              <ul className="space-y-2 text-xs">
                {POSTS.slice(0, 3).map((p) => (
                  <li
                    key={p.id}
                    className="flex gap-2 cursor-pointer hover:bg-slate-50 rounded-lg p-2"
                    onClick={() => handleReadMore(p)}
                  >
                    <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-500">
                      {p.tag}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">
                        {p.title}
                      </div>
                      <div className="text-[11px] text-slate-500">
                        {p.date}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      )}

      {/* List of cards */}
      <div className="grid md:grid-cols-[2fr,1fr] gap-6">
        <div className="space-y-4">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition border border-slate-100"
            >
              <div className="md:flex">
                <div className="md:w-1/3 bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-4 flex flex-col">
                  <div className="flex items-center gap-2 text-[11px] text-slate-500 mb-1">
                    <span className="px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-600 font-semibold">
                      {post.tag}
                    </span>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-1 text-slate-900">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-700 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-3 flex gap-2 text-sm">
                    <button
                      onClick={() => handleReadMore(post)}
                      className="px-3 py-1 rounded-full bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-500 transition"
                    >
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}

          {filteredPosts.length === 0 && (
            <p className="text-sm text-slate-500">
              No posts found for that search. Try another keyword.
            </p>
          )}
        </div>

        {/* Subscribe box duplicated for wider screens */}
        <aside className="hidden md:block space-y-4">
          <div className="bg-white rounded-2xl shadow p-5">
            <h3 className="font-semibold mb-2 text-slate-900 text-sm">
              Subscribe for updates
            </h3>
            <p className="text-xs text-slate-600 mb-3">
              Weekly lessons and new posts straight to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                className="w-full px-3 py-2 rounded-xl border text-xs"
                placeholder="you@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="w-full py-2 rounded-xl bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-500 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </aside>
      </div>
    </section>
  );
}
