// src/pages/Pricing.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Pricing() {
  const navigate = useNavigate();

  const plans = [
    {
      name: "Starter",
      price: "Free",
      tag: "Good for trying",
      desc: "Access to 2 demo courses and basic community support.",
      features: ["2 demo courses", "Email tips", "Community access"],
      gradient: "from-sky-400 via-sky-500 to-sky-600",
    },
    {
      name: "Pro",
      price: "₹499 / month",
      tag: "Most popular",
      desc: "Full access to all EduQuest courses and projects.",
      features: [
        "All current courses",
        "Mini projects with solutions",
        "Priority mentor Q&A",
      ],
      gradient: "from-violet-500 via-indigo-500 to-blue-500",
      highlight: true,
    },
    {
      name: "Team",
      price: "₹1999 / month",
      tag: "For groups",
      desc: "Perfect for small teams, labs or college clubs.",
      features: [
        "5 learner accounts",
        "Shared project workspace",
        "Basic admin analytics",
      ],
      gradient: "from-emerald-400 via-emerald-500 to-teal-500",
    },
  ];

  function handleChoose(planName) {
    // Simple behaviour: navigate to Contact and mention the plan in query string.
    navigate(`/contact?plan=${encodeURIComponent(planName)}`);
  }

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <p className="text-xs font-semibold tracking-[0.2em] text-indigo-500 uppercase">
          pricing
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
          Simple plans for every learner
        </h2>
        <p className="text-sm md:text-base text-slate-600">
          Start with the Starter plan and upgrade any time. No long-term
          contracts – just focus on building your skills.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`relative rounded-3xl bg-white shadow-lg hover:shadow-2xl border ${
              p.highlight ? "border-indigo-400 scale-[1.02]" : "border-slate-100"
            } transition-transform`}
          >
            {/* colourful header */}
            <div
              className={`rounded-t-3xl h-28 bg-gradient-to-r ${p.gradient} p-4 flex flex-col justify-between text-left text-white`}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold">{p.name}</span>
                {p.highlight && (
                  <span className="px-2 py-1 rounded-full bg-white/20 text-[11px] font-semibold uppercase tracking-wide">
                    Best value
                  </span>
                )}
              </div>
              <div className="text-2xl font-bold">{p.price}</div>
            </div>

            {/* body */}
            <div className="p-5 text-left">
              <p className="text-xs font-semibold text-indigo-500 mb-1">
                {p.tag}
              </p>
              <p className="text-sm text-slate-700 mb-4">{p.desc}</p>

              <ul className="text-xs text-slate-700 space-y-1 mb-5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-[3px] h-2 w-2 rounded-full bg-indigo-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleChoose(p.name)}
                className={`w-full py-2 rounded-full text-sm font-semibold mt-1 transition
                  ${
                    p.highlight
                      ? "bg-indigo-600 text-white hover:bg-indigo-700"
                      : "bg-slate-900 text-white hover:bg-slate-800"
                  }`}
              >
                Choose {p.name}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
