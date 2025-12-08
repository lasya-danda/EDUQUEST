// src/pages/Team.jsx
import React from "react";

export default function Team() {
  const team = [
    {
      id: 1,
      name: "Rohit Kumar",
      role: "Founder & Lead Instructor",
      image: "/src/assets/rohit.jpg",
      bio: "Full-stack developer with 7+ years experience in teaching and building modern web apps."
    },
    {
      id: 2,
      name: "Lasya",
      role: "UI/UX Designer",
      image: "/src/assets/lasya.png",
      bio: "Creates beautiful, simple, student-friendly learning interfaces for EduQuest."
    },
    {
      id: 3,
      name: "Vakula",
      role: "Frontend Mentor",
      image: "/src/assets/vakula.jpg",
      bio: "Helps students debug React, CSS, and Tailwind projects during learning sessions."
    },
    {
      id: 4,
      name: "Charan",
      role: "Backend Mentor",
      image: "/src/assets/project.png",
      bio: "Teaches APIs, JSON-Server, and integrating backend with modern frontend frameworks."
    }
  ];

  return (
    <section className="py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Our Team
        </h1>
        <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
          Meet the passionate people behind EduQuest — instructors, mentors and designers
          who work together to help you learn faster and build real skills.
        </p>
      </div>

      {/* TEAM CARDS */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
        {team.map((member) => (
          <div
            key={member.id}
            className="bg-white border border-slate-200 rounded-2xl shadow hover:shadow-xl transition p-4 flex flex-col items-center text-center"
          >
            <div className="w-28 h-28 rounded-full overflow-hidden shadow">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="font-bold text-lg mt-4 text-slate-900">
              {member.name}
            </h3>
            <p className="text-sm text-indigo-600 font-medium">{member.role}</p>

            <p className="text-sm text-slate-600 mt-2">{member.bio}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-slate-500 text-sm">
          Want to join the EduQuest team?{" "}
          <span className="text-indigo-600 cursor-pointer hover:underline">
            Contact us
          </span>
        </p>
      </div>
    </section>
  );
}
