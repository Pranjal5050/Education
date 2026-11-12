
import useScrollReveal from "../hooks/useScrollReveal";

const steps = [
  {
    number: "01",
    title: "Create Your Account",
    description:
      "Sign up in minutes and choose your class, board and learning preferences.",
    icon: "♙",
    color: "blue",
  },
  {
    number: "02",
    title: "Explore Study Material",
    description:
      "Access chapter-wise notes, important concepts and curated study resources.",
    icon: "▤",
    color: "purple",
  },
  {
    number: "03",
    title: "Practice & Take Tests",
    description:
      "Solve daily practice problems and attempt mock tests to build confidence.",
    icon: "✎",
    color: "orange",
  },
  {
    number: "04",
    title: "Track Your Progress",
    description:
      "Review your results, identify weak topics and improve your preparation.",
    icon: "↗",
    color: "green",
  },
];

const colors = {
  blue: {
    icon: "bg-blue-100 text-blue-600",
    number: "bg-blue-600",
    ring: "group-hover:border-blue-300",
  },
  purple: {
    icon: "bg-purple-100 text-purple-600",
    number: "bg-purple-600",
    ring: "group-hover:border-purple-300",
  },
  orange: {
    icon: "bg-orange-100 text-orange-600",
    number: "bg-orange-500",
    ring: "group-hover:border-orange-300",
  },
  green: {
    icon: "bg-emerald-100 text-emerald-600",
    number: "bg-emerald-600",
    ring: "group-hover:border-emerald-300",
  },
};

export default function HowItWorks() {
  const container = useScrollReveal();

  return (
    <section
      ref={container}
      id="how-it-works"
      className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-20"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-28 top-28 h-64 w-64 rounded-full bg-blue-50 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 bottom-10 h-64 w-64 rounded-full bg-indigo-50 blur-3xl" />

      <div className="relative mx-auto max-w-[1200px]">

        {/* Section Heading */}
        <div data-reveal="left" className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-700">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            Simple. Smart. Effective.
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#10183d] sm:text-4xl lg:text-[42px]">
            How It <span className="text-blue-600">Works</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
            Your journey to better grades starts here. Follow four
            simple steps to make your preparation more focused and effective.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">

          {/* Connecting line: desktop */}
          <div className="absolute left-[12%] right-[12%] top-[42px] hidden border-t-2 border-dashed border-blue-200 lg:block" />

          {steps.map((step) => {
            const style = colors[step.color];

            return (
              <article
                key={step.number}
                data-reveal="up"
                className="group relative flex flex-col items-center text-center"
              >
                {/* Icon */}
                <div className="relative z-10">
                  <div
                    className={`flex h-[84px] w-[84px] items-center justify-center rounded-[26px] border border-slate-100 bg-white shadow-lg shadow-blue-900/5 transition duration-300 group-hover:-translate-y-2 group-hover:shadow-xl ${style.ring}`}
                  >
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl text-3xl ${style.icon}`}
                    >
                      {step.icon}
                    </div>
                  </div>

                  {/* Step Number */}
                  <span
                    className={`absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full border-[3px] border-white text-[9px] font-bold text-white shadow-sm ${style.number}`}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Text */}
                <div className="mt-6 max-w-[250px]">
                  <h3 className="text-lg font-bold text-[#10183d] transition-colors group-hover:text-blue-600">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {step.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          data-reveal="right"
          className="mt-14 overflow-hidden rounded-2xl bg-gradient-to-r from-[#10234f] via-[#123b80] to-[#0866f5] px-6 py-8 sm:px-10 lg:flex lg:items-center lg:justify-between lg:px-12"
        >
          <div className="relative z-10 text-center lg:text-left">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-200">
              Your next chapter starts now
            </span>

            <h3 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">
              Ready to learn smarter?
            </h3>

            <p className="mt-3 text-sm leading-6 text-blue-100/80">
              Build a daily practice routine and take charge of your learning.
            </p>
          </div>

          <div className="mt-6 flex justify-center lg:mt-0 lg:shrink-0">
            <a
              href="#get-started"
              className="inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#10234f] shadow-lg transition duration-200 hover:-translate-y-1 hover:bg-blue-50"
            >
              Get Started
              <span className="text-lg">→</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
