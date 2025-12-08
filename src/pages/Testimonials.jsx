import React from "react";

export default function Testimonials() {
  const data = [
    { name: "Asha", text: "The courses are short and practical." },
    { name: "Rahul", text: "Easy to navigate and understand." },
  ];

  return (
    <section className="py-10">
      <h2 className="text-3xl font-bold mb-4">What learners say</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {data.map((t) => (
          <div key={t.name} className="bg-white p-4 rounded shadow">
            <div className="font-semibold text-sm mb-1">{t.name}</div>
            <div className="text-sm text-slate-700">{t.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
