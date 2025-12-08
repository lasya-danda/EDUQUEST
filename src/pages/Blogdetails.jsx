// src/pages/BlogDetails.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const blogPosts = [
  {
    id: 1,
    title: "Getting started with React — a friendly guide",
    tag: "React",
    date: "2025-07-01",
    read: "6 min read",
    content: `
React is one of the most popular JavaScript libraries for building user interfaces.
In this beginner-friendly guide, we explore how to set up a React project using Vite,
how components work, and how to structure a real project.

You’ll learn about:
• Creating your first project  
• JSX basics  
• Props & State  
• Component structure  
• How to grow your app with reusable parts  

This guide is perfect for anyone starting their React journey.
    `,
  },
  {
    id: 2,
    title: "Tailwind tips: build faster UIs",
    tag: "CSS",
    date: "2025-06-10",
    read: "4 min read",
    content: `
Tailwind CSS helps you build modern UI very quickly. Instead of writing CSS files,
you use utility classes directly inside your HTML or JSX.  

What you will learn:
• How to use spacing utilities  
• Responsive design using Tailwind breakpoints  
• Customizing colors & fonts  
• Creating reusable components  
• Making UIs visually appealing  

If you want speed + clean UI, Tailwind is the #1 choice today.
`,
  },
  {
    id: 3,
    title: "Project-based learning: why it works",
    tag: "Learning",
    date: "2025-05-18",
    read: "5 min read",
    content: `
Project-based learning is one of the fastest ways to build real skills.
Instead of memorizing theory, you learn by DOING.

Benefits:
• Builds confidence  
• Creates portfolio projects  
• Helps you remember concepts  
• More fun and practical  
• Matches real job challenges  

EduQuest uses project-based learning for all courses.
`,
  },
  {
    id: 4,
    title: "Intro to building REST APIs for your frontend",
    tag: "Backend",
    date: "2025-04-20",
    read: "7 min read",
    content: `
REST APIs allow your frontend to communicate with a backend server.  
In this guide, you will learn:  
• What is an API  
• GET, POST, PUT, DELETE  
• How JSON-Server works  
• How to call APIs from React  
• Connecting UI with backend data  

Perfect for beginners getting into full-stack development.
`,
  },
];

export default function BlogDetails() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post)
    return (
      <div className="p-6 text-center">
        <p>Article not found.</p>
        <Link to="/blog" className="text-indigo-600 underline">
          Go back
        </Link>
      </div>
    );

  return (
    <section className="max-w-3xl mx-auto px-6 py-10">
      <Link
        to="/blog"
        className="flex items-center gap-2 text-indigo-600 mb-6 font-medium"
      >
        <FiArrowLeft /> Back to Blog
      </Link>

      <h1 className="text-4xl font-extrabold text-slate-900 mb-2">
        {post.title}
      </h1>

      <div className="text-sm text-slate-500 mb-6">
        {post.read} • {post.date} • {post.tag}
      </div>

      <div className="bg-white p-6 rounded-xl shadow leading-relaxed text-slate-700 whitespace-pre-line">
        {post.content}
      </div>
    </section>
  );
}
