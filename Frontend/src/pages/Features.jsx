
import useScrollReveal from "../hooks/useScrollReveal";

const features = [
  {
    icon: "▤",
    title: "Chapter-wise Notes",
    description:
      "Learn every concept with organized notes designed for quick revision and better understanding.",
    color: "blue",
  },
  {
    icon: "✎",
    title: "Daily Practice Problems",
    description:
      "Build consistency with daily questions and practice sets for every important topic.",
    color: "purple",
  },
  {
    icon: "◷",
    title: "Online Mock Tests",
    description:
      "Prepare for exams with timed tests that help you improve speed and accuracy.",
    color: "orange",
  },
  {
    icon: "↗",
    title: "Performance Analytics",
    description:
      "Understand your results, identify weak areas and focus on what needs improvement.",
    color: "green",
  },
  {
    icon: "◎",
    title: "Track Your Progress",
    description:
      "Keep track of your completed lessons, practice sessions and test performance.",
    color: "pink",
  },
  {
    icon: "♧",
    title: "Learn at Your Pace",
    description:
      "Study at your convenience and revisit learning materials whenever you need them.",
    color: "cyan",
  },
];

const styles = {
  blue: {
    icon: "bg-blue-100 text-blue-600",
    glow: "group-hover:bg-blue-50",
    border: "group-hover:border-blue-200",
  },
  purple: {
    icon: "bg-purple-100 text-purple-600",
    glow: "group-hover:bg-purple-50",
    border: "group-hover:border-purple-200",
  },
  orange: {
    icon: "bg-orange-100 text-orange-600",
    glow: "group-hover:bg-orange-50",
    border: "group-hover:border-orange-200",
  },
  green: {
    icon: "bg-emerald-100 text-emerald-600",
    glow: "group-hover:bg-emerald-50",
    border: "group-hover:border-emerald-200",
  },
  pink: {
    icon: "bg-pink-100 text-pink-600",
    glow: "group-hover:bg-pink-50",
    border: "group-hover:border-pink-200",
  },
  cyan: {
    icon: "bg-cyan-100 text-cyan-600",
    glow: "group-hover:bg-cyan-50",
    border: "group-hover:border-cyan-200",
  },
};

export default function Features() {
  const container = useScrollReveal();

  return (
    <section
      ref={container}
      id="features"
      className="relative overflow-hidden bg-[#f5f9ff] px-5 py-16 sm:px-8 lg:px-10 lg:py-20"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute -left-20 top-20 h-64 w-64 rounded-full bg-blue-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-purple-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-[1200px]">

        {/* Section heading */}
        <div
          data-reveal="left"
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-700">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            Everything You Need
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#10183d] sm:text-4xl lg:text-[42px]">
            Why Choose{" "}
            <span className="text-blue-600">Vedclass?</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
            Smart learning tools to help you understand concepts,
            practice regularly and prepare with confidence.
          </p>
        </div>

        {/* Feature cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const style = styles[feature.color];

            return (
              <article
                key={feature.title}
                data-reveal="up"
                className={`group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-900/5 sm:p-7 ${style.border}`}
              >
                {/* Decorative glow */}
                <div
                  className={`pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-0 blur-2xl transition duration-500 group-hover:opacity-100 ${style.glow}`}
                />

                <div className="relative">
                  {/* Icon */}
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl text-3xl transition duration-300 group-hover:rotate-3 group-hover:scale-110 ${style.icon}`}
                  >
                    {feature.icon}
                  </div>

                  {/* Content */}
                  <h3 className="mt-5 text-lg font-bold text-[#10183d] transition-colors duration-200 group-hover:text-blue-600">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {feature.description}
                  </p>

                  {/* Bottom accent */}
                  <div className="mt-6 flex items-center gap-2">
                    <span className="h-1 w-8 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-14" />
                    <span className="h-1 w-2 rounded-full bg-blue-200" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom information strip */}
        <div
          data-reveal="right"
          className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm sm:flex-row sm:px-8"
        >
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold text-[#10183d]">
              Make every study session count.
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Build better habits with a structured learning experience.
            </p>
          </div>

          <a
            href="#get-started"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
          >
            Start Learning <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
}