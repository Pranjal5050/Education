
import { useState } from "react";
import useScrollReveal from "../hooks/useScrollReveal";

const dppData = [
  {
    id: 1,
    subject: "Physics",
    title: "Motion & Laws of Motion",
    description: "Test your understanding of motion, force and Newton's laws.",
    questions: 20,
    time: "25 min",
    level: "Medium",
    icon: "↗",
    color: "blue",
  },
  {
    id: 2,
    subject: "Chemistry",
    title: "Atoms & Molecules",
    description: "Practice atomic structure, formulas and chemical concepts.",
    questions: 15,
    time: "20 min",
    level: "Easy",
    icon: "⚗",
    color: "orange",
  },
  {
    id: 3,
    subject: "Mathematics",
    title: "Algebra Practice Set",
    description: "Improve your problem-solving skills with algebra questions.",
    questions: 25,
    time: "30 min",
    level: "Hard",
    icon: "∑",
    color: "purple",
  },
];

const theme = {
  blue: {
    icon: "bg-blue-100 text-blue-600",
    tag: "bg-blue-50 text-blue-700",
    line: "bg-blue-500",
  },
  orange: {
    icon: "bg-orange-100 text-orange-600",
    tag: "bg-orange-50 text-orange-700",
    line: "bg-orange-500",
  },
  purple: {
    icon: "bg-purple-100 text-purple-600",
    tag: "bg-purple-50 text-purple-700",
    line: "bg-purple-500",
  },
};

export default function DPP() {
  const container = useScrollReveal();
  const [filter, setFilter] = useState("All");

  const filteredDPPs =
    filter === "All"
      ? dppData
      : dppData.filter((item) => item.subject === filter);

  return (
    <section
      ref={container}
      id="dpp"
      className="relative overflow-hidden bg-[#f5f9ff] px-5 py-16 sm:px-8 lg:px-10 lg:py-20"
    >
      <div className="mx-auto max-w-[1200px]">

        {/* Heading */}
        <div data-reveal="left" className="text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-700">
            Practice Every Day
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#10183d] sm:text-4xl">
            Daily Practice{" "}
            <span className="text-blue-600">Problems</span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
            Small steps every day lead to big results. Strengthen
            your concepts with focused daily practice.
          </p>
        </div>

        {/* Stats */}
        <div
          data-reveal="right"
          className="mx-auto mt-8 grid max-w-2xl grid-cols-3 gap-3"
        >
          {[
            { value: "Daily", label: "New Practice" },
            { value: "3 Levels", label: "Question Difficulty" },
            { value: "Self-paced", label: "Learn Your Way" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-blue-100 bg-white p-3 text-center sm:p-4"
            >
              <p className="text-sm font-extrabold text-[#10183d] sm:text-lg">
                {stat.value}
              </p>
              <p className="mt-1 text-[10px] text-slate-500 sm:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div
          data-reveal="up"
          className="mt-9 flex flex-wrap justify-center gap-2"
        >
          {["All", "Physics", "Chemistry", "Mathematics"].map(
            (subject) => (
              <button
                key={subject}
                type="button"
                onClick={() => setFilter(subject)}
                className={`rounded-full border px-4 py-2 text-xs font-semibold transition sm:text-sm ${
                  filter === subject
                    ? "border-blue-600 bg-blue-600 text-white shadow-md shadow-blue-500/20"
                    : "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-600"
                }`}
              >
                {subject}
              </button>
            )
          )}
        </div>

        {/* DPP Cards */}
        <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredDPPs.map((item) => {
            const style = theme[item.color];

            return (
              <article
                key={item.id}
                data-reveal="up"
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 sm:p-6"
              >
                <div
                  className={`absolute left-0 top-0 h-1 w-full ${style.line}`}
                />

                <div className="flex items-start justify-between gap-3">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl text-2xl font-bold ${style.icon}`}
                  >
                    {item.icon}
                  </div>

                  <span
                    className={`rounded-full px-3 py-1.5 text-[10px] font-semibold ${style.tag}`}
                  >
                    {item.subject}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-[#10183d]">
                  {item.title}
                </h3>

                <p className="mt-2 min-h-[44px] text-sm leading-5 text-slate-500">
                  {item.description}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-slate-100 pt-4 text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <span>▤</span>
                    {item.questions} Questions
                  </span>

                  <span className="flex items-center gap-1.5">
                    <span>◷</span>
                    {item.time}
                  </span>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-slate-500">
                    Difficulty:{" "}
                    <span className="font-semibold text-slate-700">
                      {item.level}
                    </span>
                  </span>

                  <button
                    type="button"
                    onClick={() => {
                      alert(
                        `${item.title} practice will be available when the question system is connected.`
                      );
                    }}
                    className="inline-flex items-center gap-2 rounded-lg bg-blue-50 px-4 py-2.5 text-xs font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
                  >
                    Start Practice <span>→</span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          data-reveal="right"
          className="mt-9 flex flex-col items-center justify-between gap-4 rounded-2xl bg-[#10234f] px-6 py-7 text-center sm:flex-row sm:px-8 sm:text-left"
        >
          <div>
            <h3 className="text-lg font-bold text-white sm:text-xl">
              Ready to improve your score?
            </h3>
            <p className="mt-2 text-sm text-blue-100/80">
              Make daily practice a part of your study routine.
            </p>
          </div>

          <a
            href="#online-test"
            className="shrink-0 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#10234f] transition hover:bg-blue-50"
          >
            Explore Online Tests →
          </a>
        </div>
      </div>
    </section>
  );
}
