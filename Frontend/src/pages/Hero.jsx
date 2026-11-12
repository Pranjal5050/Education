
import { useState } from "react";

const studyCards = [
  {
    title: "Chapter-wise",
    subtitle: "Practice",
    icon: "📖",
    className: "left-0 top-4 -rotate-6",
  },
  {
    title: "DPP",
    subtitle: "Daily Practice",
    icon: "▤",
    className: "right-1 top-0 rotate-3",
  },
  {
    title: "Detailed",
    subtitle: "Analysis",
    icon: "▥",
    className: "right-0 bottom-20 rotate-6",
  },
];

export default function Hero() {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-[#f0f9ff] via-[#e5f4ff] to-[#d5edff]"
    >
      {/* Background decorations */}
      <div className="absolute -left-24 top-10 h-64 w-64 rounded-full border-[28px] border-white/40" />
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-[1200px] items-center gap-8 px-5 py-12 sm:px-8 md:py-16 lg:min-h-[350px] lg:grid-cols-2 lg:gap-5 lg:px-10 lg:py-10">

        {/* LEFT CONTENT */}
        <div className="relative z-10">
          <span className="inline-flex rounded-full border border-blue-100 bg-blue-100/80 px-3 py-1.5 text-[11px] font-medium tracking-wide text-blue-700 sm:text-xs">
            Class 10 &amp; 12 · Physics · Chemistry · Math
          </span>

          <h1 className="mt-5 text-[42px] font-extrabold leading-[1.04] tracking-[-2px] text-[#10183d] sm:text-5xl lg:text-[48px] xl:text-[54px]">
            Solve harder.
            <br />
            <span className="relative inline-block text-[#0866f5]">
              Score higher.
              <span className="absolute -bottom-2 left-1 h-1 w-28 -rotate-2 rounded-full bg-blue-300" />
            </span>
          </h1>

          <p className="mt-5 max-w-[430px] text-sm leading-6 text-slate-700 sm:text-[14px]">
            Practice with chapter-wise notes, DPPs, mock tests and
            detailed analysis to master your preparation.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#subjects"
              className="inline-flex items-center gap-2 rounded-lg bg-[#0866f5] px-6 py-3 text-xs font-semibold text-white shadow-lg shadow-blue-500/20 transition duration-200 hover:-translate-y-1 hover:bg-blue-700 sm:text-sm"
            >
              Get Started <span>→</span>
            </a>

            <button
              type="button"
              onClick={() => setShowDemo(true)}
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-xs font-semibold text-slate-800 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:text-sm"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[9px] text-white">
                ▶
              </span>
              Watch Demo
            </button>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-4 text-[11px] font-medium text-slate-500">
            <span>✓ Chapter-wise learning</span>
            <span>✓ Mock tests</span>
          </div>
        </div>

        {/* RIGHT ILLUSTRATION - PURE CSS */}
        <div className="relative mx-auto mt-5 h-[300px] w-full max-w-[490px] sm:h-[360px] lg:mt-0 lg:h-[330px]">

          {/* Decorative dots */}
          <div className="absolute right-10 top-12 grid grid-cols-5 gap-2 opacity-40">
            {Array.from({ length: 20 }).map((_, i) => (
              <span
                key={i}
                className="h-1.5 w-1.5 rounded-full bg-blue-400"
              />
            ))}
          </div>

          {/* Floating cards */}
          {studyCards.map((card) => (
            <div
              key={card.title}
              className={`absolute z-20 flex h-[70px] w-[105px] flex-col items-center justify-center rounded-xl border border-white bg-white/95 shadow-lg shadow-blue-900/10 sm:h-[78px] sm:w-[118px] ${card.className}`}
            >
              <span className="text-xl font-bold text-blue-600">
                {card.icon}
              </span>
              <span className="mt-1 text-[10px] font-bold text-[#10183d]">
                {card.title}
              </span>
              <span className="text-[9px] text-slate-500">
                {card.subtitle}
              </span>
            </div>
          ))}

          {/* Soft blue platform */}
          <div className="absolute bottom-3 left-[4%] h-[125px] w-[92%] rounded-[50%] bg-gradient-to-r from-blue-200/30 via-blue-300/40 to-cyan-100/60 blur-sm" />

          {/* Laptop body */}
          <div className="absolute left-[23%] top-[72px] z-10 w-[62%] sm:left-[25%] sm:top-[75px]">
            {/* Laptop screen frame */}
            <div className="-rotate-2 rounded-t-xl border-[5px] border-[#17345c] bg-[#17345c] p-1 shadow-2xl shadow-blue-900/20">
              <div className="min-h-[145px] rounded-t-md bg-white p-3 sm:min-h-[165px]">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <div className="flex items-center gap-1.5">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-100 text-xs">
                      👤
                    </span>
                    <span className="text-[10px] font-bold text-[#15264a]">
                      Online Test
                    </span>
                  </div>
                  <span className="text-[8px] text-slate-400">
                    Question 01
                  </span>
                </div>

                <p className="mt-3 text-[9px] font-semibold text-slate-700 sm:text-[10px]">
                  Choose the correct answer
                </p>

                <div className="mt-2 grid grid-cols-2 gap-2">
                  {["A", "B", "C", "D"].map((option, i) => (
                    <div
                      key={option}
                      className={`flex items-center gap-2 rounded-md border p-2 ${
                        i === 1
                          ? "border-blue-300 bg-blue-50"
                          : "border-slate-100 bg-slate-50"
                      }`}
                    >
                      <span className="flex h-4 w-4 items-center justify-center rounded border border-blue-200 text-[8px] text-blue-600">
                        {option}
                      </span>
                      <span className="h-1 w-8 rounded bg-slate-200" />
                    </div>
                  ))}
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <span className="text-[8px] text-slate-400">
                    Time remaining
                  </span>
                  <span className="rounded bg-blue-600 px-3 py-1 text-[8px] font-bold text-white">
                    Next →
                  </span>
                </div>
              </div>
            </div>

            {/* Laptop base */}
            <div className="relative -mt-0.5 ml-[-6%] h-3 w-[112%] -skew-x-12 rounded-b-lg bg-gradient-to-b from-slate-300 to-slate-500 shadow-lg">
              <div className="mx-auto h-1 w-[24%] rounded-b bg-slate-400" />
            </div>
          </div>

          {/* Books stack */}
          <div className="absolute bottom-[40px] left-[2%] z-20 w-[45%] sm:left-[3%]">
            <div className="relative h-[35px] -rotate-3 rounded-lg border-b-4 border-blue-800 bg-gradient-to-r from-blue-500 to-sky-400 px-4 pt-2 shadow-md">
              <span className="text-[11px] font-bold text-white">Physics</span>
              <div className="absolute right-3 top-0 h-full w-2 bg-white/20" />
            </div>

            <div className="relative ml-[-3px] mt-[-1px] h-[32px] rotate-2 rounded-lg border-b-4 border-orange-600 bg-gradient-to-r from-orange-400 to-amber-300 px-4 pt-1.5 shadow-md">
              <span className="text-[11px] font-bold text-white">Chemistry</span>
            </div>

            <div className="relative ml-1 mt-[-1px] h-[30px] -rotate-2 rounded-lg border-b-4 border-emerald-700 bg-gradient-to-r from-emerald-500 to-teal-400 px-4 pt-1.5 shadow-md">
              <span className="text-[11px] font-bold text-white">Math</span>
            </div>
          </div>

          {/* Notebook */}
          <div className="absolute bottom-2 left-[32%] z-30 w-[42%] rotate-[-12deg] rounded-lg border border-slate-200 bg-white p-3 shadow-xl sm:left-[34%]">
            <div className="flex gap-1">
              {Array.from({ length: 7 }).map((_, i) => (
                <span
                  key={i}
                  className="h-1.5 w-1.5 rounded-full bg-slate-300"
                />
              ))}
            </div>
            <div className="mt-3 space-y-2">
              <div className="h-px w-full bg-blue-100" />
              <p className="text-[12px] font-bold italic text-blue-700 sm:text-sm">
                E = mc²
              </p>
              <div className="h-px w-full bg-blue-100" />
              <div className="h-1 w-3/4 rounded bg-slate-100" />
            </div>
            {/* Pencil */}
            <div className="absolute -bottom-2 right-[-14px] h-1.5 w-[80px] rotate-[-12deg] rounded-full bg-gradient-to-r from-amber-300 to-blue-500 shadow-sm" />
          </div>

          {/* Floating sparkle */}
          <span className="absolute right-8 top-24 text-2xl text-blue-300">
            ✦
          </span>
          <span className="absolute bottom-24 left-4 text-xl text-blue-300">
            ✧
          </span>
        </div>
      </div>

      {/* Demo modal */}
      {showDemo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 p-4"
          onClick={() => setShowDemo(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Vedclass demo"
            className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close demo"
              onClick={() => setShowDemo(false)}
              className="absolute right-4 top-3 text-2xl text-slate-500"
            >
              ×
            </button>

            <h2 className="text-xl font-bold text-[#10183d]">
              Welcome to Vedclass
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Practice chapter-wise questions, solve daily practice
              problems, take mock tests and track your performance.
            </p>
            <button
              type="button"
              onClick={() => setShowDemo(false)}
              className="mt-5 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
