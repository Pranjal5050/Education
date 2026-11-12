
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const topicContent = {
  "distance-and-displacement": {
    title: "Distance and Displacement",
    chapter: "Motion",
    subject: "Physics",
    videoUrl: "",
    notes: [
      {
        heading: "Distance",
        content:
          "Distance is the total length of the path travelled by an object. It is a scalar quantity."
      },
      {
        heading: "Displacement",
        content:
          "Displacement is the change in position from the initial point to the final point. It is a vector quantity."
      },
      {
        heading: "Important Point",
        content:
          "Distance is always non-negative. Displacement can be positive, negative or zero depending on the chosen direction and the change in position."
      }
    ]
  }
};

export default function TopicDetails() {
  const { topicName } = useParams();
  const topic = topicContent[topicName];

  return (
    <div className="min-h-screen bg-[#f5f9ff]">
      <Navbar />

      <main className="mx-auto max-w-[1000px] px-5 py-10 sm:px-8">
        <Link
          to="/subjects/physics"
          className="text-sm font-semibold text-blue-600 hover:underline"
        >
          ← Back to Physics
        </Link>

        {topic ? (
          <>
            <div className="mt-6">
              <p className="text-sm font-semibold text-blue-600">
                {topic.subject} / {topic.chapter}
              </p>

              <h1 className="mt-2 text-3xl font-extrabold text-[#10183d]">
                {topic.title}
              </h1>
            </div>

            {/* Video */}
            <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="mb-4 text-xl font-bold text-[#10183d]">
                Video Lecture
              </h2>

              {topic.videoUrl ? (
                <video
                  src={topic.videoUrl}
                  controls
                  playsInline
                  className="aspect-video w-full rounded-xl bg-black"
                />
              ) : (
                <div className="flex aspect-video items-center justify-center rounded-xl bg-slate-900 p-5 text-center text-white">
                  Teacher's lecture video will appear here.
                </div>
              )}
            </section>

            {/* Read-only notes */}
            <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
              <p className="text-xs font-bold tracking-widest text-blue-600">
                STUDY MATERIAL
              </p>

              <h2 className="mt-2 text-2xl font-extrabold text-[#10183d]">
                {topic.title} — Notes
              </h2>

              <div className="mt-6 space-y-6">
                {topic.notes.map((note, index) => (
                  <article key={note.heading}>
                    <h3 className="mb-2 font-bold text-slate-900">
                      {index + 1}. {note.heading}
                    </h3>

                    <p className="text-sm leading-7 text-slate-600">
                      {note.content}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          </>
        ) : (
          <div className="mt-10 rounded-2xl bg-white p-8 text-center shadow-sm">
            <h1 className="text-2xl font-bold text-slate-900">
              Topic not found
            </h1>
            <p className="mt-2 text-slate-500">
              This topic's content has not been added yet.
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
