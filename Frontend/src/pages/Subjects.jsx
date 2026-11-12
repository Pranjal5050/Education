import { useState } from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import { Link } from "react-router-dom";

const subjects = [
  {
    name: "Physics",
    subtitle: "Understand the world around you",
    icon: "⚛",
    chapters: "12 Chapters",
    questions: "450+ Questions",
    color: "blue",
    topics: ["Mechanics", "Electricity", "Optics"],
  },
  {
    name: "Chemistry",
    subtitle: "Explore atoms and reactions",
    icon: "⚗",
    chapters: "10 Chapters",
    questions: "400+ Questions",
    color: "orange",
    topics: ["Organic Chemistry", "Atoms", "Reactions"],
  },
  {
    name: "Mathematics",
    subtitle: "Build logic and solve problems",
    icon: "∑",
    chapters: "15 Chapters",
    questions: "500+ Questions",
    color: "purple",
    topics: ["Algebra", "Calculus", "Geometry"],
  },
];

const styles = {
  blue: {
    icon: "bg-blue-100 text-blue-600",
    badge: "bg-blue-50 text-blue-700",
    button: "text-blue-600 hover:bg-blue-600",
    border: "hover:border-blue-300",
  },
  orange: {
    icon: "bg-orange-100 text-orange-600",
    badge: "bg-orange-50 text-orange-700",
    button: "text-orange-600 hover:bg-orange-500",
    border: "hover:border-orange-300",
  },
  purple: {
    icon: "bg-purple-100 text-purple-600",
    badge: "bg-purple-50 text-purple-700",
    button: "text-purple-600 hover:bg-purple-600",
    border: "hover:border-purple-300",
  },
};

export default function Subjects() {
  const [selectedBoard, setSelectedBoard] = useState("CBSE");
  const [selectedClass, setSelectedClass] = useState("Class 10");

  const container = useScrollReveal();

  return (
    <section ref={container} id="subjects" className="bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1200px]">

        {/* Section Heading */}
        <div className="text-center">
          <h3 data-reveal="left" className="rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-600">
            Learn Your Way
          </h3>

          <h2 data-reveal="left" className="mt-5 text-3xl font-extrabold tracking-tight text-[#10183d] sm:text-4xl">
            Explore Our <span className="text-blue-600">Subjects</span>
          </h2>

          <p data-reveal="left" className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
            Everything you need to understand concepts, practice questions
            and prepare confidently for your exams.
          </p>
        </div>

        {/* Board and Class Selectors */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <div data-reveal="left" className="flex rounded-xl border border-slate-200 bg-slate-50 p-1">
            {["CBSE", "ICSE"].map((board) => (
              <button
                key={board}
                onClick={() => setSelectedBoard(board)}
                className={`rounded-lg px-5 py-2 text-sm font-semibold transition ${
                  selectedBoard === board
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-slate-600 hover:text-blue-600"
                }`}
              >
                {board}
              </button>
            ))}
          </div>

          <select
            data-reveal="left"
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 outline-none focus:border-blue-500"
            aria-label="Select class"
          >
            {["Class 9", "Class 10", "Class 11", "Class 12"].map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* Subject Cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((subject) => {
            const style = styles[subject.color];

            return (
              <article
                key={subject.name}
                className={`group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/5 ${style.border}`}
              >
                <div data-reveal="left" className="flex items-start justify-between">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl text-3xl ${style.icon}`}>
                    {subject.icon}
                  </div>

                  <span className={`rounded-full px-3 py-1.5 text-[11px] font-semibold ${style.badge}`}>
                    {selectedBoard}
                  </span>
                </div>

                <h3 data-reveal="left" className="mt-5 text-xl font-bold text-[#10183d]">
                  {subject.name}
                </h3>

                <p data-reveal="left" className="mt-2 text-sm text-slate-500">
                  {subject.subtitle}
                </p>

                <div data-reveal="left" className="mt-5 flex flex-wrap gap-2">
                  {subject.topics.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-md bg-slate-50 px-2.5 py-1.5 text-[11px] font-medium text-slate-600"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                  <div>
                    <p data-reveal="left" className="text-xs font-semibold text-slate-700">
                      {subject.chapters}
                    </p>
                    <p data-reveal="left" className="mt-1 text-xs text-slate-500">
                      {subject.questions}
                    </p>
                  </div>

                  <Link
                    data-reveal="left"
                    to={`/subjects/${subject.name.toLowerCase()}`}
                    className={`flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-xl transition group-hover:text-white ${style.button}`}
                    aria-label={`Explore ${subject.name}`}
                  >
                    →
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* Explore More */}
        <div data-reveal="left" className="mt-9 text-center">
          <a
            href="#courses"
            className="inline-flex items-center gap-2 rounded-lg border border-blue-200 px-6 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
          >
            Explore All Subjects <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
}