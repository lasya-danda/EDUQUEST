import React from "react";

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-slate-200 bg-white">
      <div className="container mx-auto px-6 py-4 text-xs text-slate-500 flex justify-between">
        <span>© {new Date().getFullYear()} EduQuest. All rights reserved.</span>
        <span>Built with React & JSON-Server</span>
      </div>
    </footer>
  );
}
