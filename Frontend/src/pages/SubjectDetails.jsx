import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { subjectsData } from "../data/subjectsData";

export default function SubjectDetails() {
  const { subjectName } = useParams();
  const [expandedChapter, setExpandedChapter] = useState(null);

  const subject = subjectsData[subjectName];

  if (!subject) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="px-5 py-24 text-center">
          <h1 className="text-2xl font-bold text-slate-800">
            Subject not found
          </h1>
          <Link
            to="/"
            className="mt-5 inline-block rounded-lg bg-blue-600 px-5 py-3 text-white"
          >
            Back to Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const colors = {
    blue: "bg-blue-50 text-blue-700 border-blue-100",
    orange: "bg-orange-50 text-orange-700 border-orange-100",
    purple: "bg-purple-50 text-purple-700 border-purple-100",
  };

  return (
    <div className="min-h-screen bg-[#f5f9ff]">
      <Navbar />

      <main className="mx-auto max-w-[1100px] px-5 py-10 sm:px-8 lg:py-14">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-slate-500">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
          <span>/</span>
          <Link to="/#subjects" className="hover:text-blue-600">
            Subjects
          </Link>
          <span>/</span>
          <span className="font-medium text-blue-600">{subject.name}</span>
        </div>

        {/* Subject Header */}
        <section
          className={`rounded-2xl border p-6 sm:p-9 ${colors[subject.color]}`}
        >
          <span className="text-xs font-bold uppercase tracking-widest">
            Your Learning Journey
          </span>

          <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            {subject.name}
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 opacity-80 sm:text-base">
            {subject.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-3 text-xs font-semibold">
            <span className="rounded-full border border-current/10 bg-white/70 px-4 py-2">
              {subject.chapters.length} Sample Chapters
            </span>
            <span className="rounded-full border border-current/10 bg-white/70 px-4 py-2">
              Notes &amp; Practice
            </span>
          </div>
        </section>

        {/* Chapters */}
        <section className="mt-10">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-2xl font-extrabold text-[#10183d]">
                Chapters
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Select a chapter to explore its topics.
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            {subject.chapters.map((chapter) => {
              const isExpanded = expandedChapter === chapter.id;

              return (
                <article
                  key={chapter.id}
                  className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedChapter(isExpanded ? null : chapter.id)
                    }
                    aria-expanded={isExpanded}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left transition hover:bg-slate-50 sm:p-6"
                  >
                    <div className="flex items-center gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-600">
                        {String(chapter.id).padStart(2, "0")}
                      </span>

                      <div>
                        <h3 className="font-bold text-[#10183d]">
                          {chapter.title}
                        </h3>
                        <p className="mt-1 text-xs text-slate-500">
                          {chapter.topics.length} topics
                        </p>
                      </div>
                    </div>

                    <span className="text-xl text-blue-600">
                      {isExpanded ? "−" : "+"}
                    </span>
                  </button>

                  {isExpanded && (
                    <div className="border-t border-slate-100 px-5 py-4 sm:px-6">
                      <h4 className="mb-3 text-xs font-bold uppercase tracking-wide text-slate-500">
                        Topics in this chapter
                      </h4>

                      <div className="space-y-2">
                        {chapter.topics.map((topic, index) => {
                          const topicSlug = topic
                            .toLowerCase()
                            .replace(/[^a-z0-9]+/g, "-")
                            .replace(/^-|-$/g, "");

                          return (
                            <Link
                              key={topic}
                              to={`/topics/${topicSlug}`}
                              className="group flex items-center gap-3 rounded-lg bg-slate-50 px-4 py-3 transition hover:bg-blue-50"
                            >
                              <span className="text-xs font-semibold text-blue-600">
                                {String(index + 1).padStart(2, "0")}
                              </span>

                              <span className="flex-1 text-sm text-slate-700 group-hover:text-blue-700">
                                {topic}
                              </span>

                              <span className="text-blue-500 transition group-hover:translate-x-1">
                                →
                              </span>
                            </Link>
                          );
                        })}
                      </div>

                      <p className="mt-4 text-xs leading-5 text-slate-500">
                        Notes, videos and practice questions can be connected to
                        each topic in the next step.
                      </p>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </section>

        {/* Back Button */}
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-600"
          >
            ← Back to Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
