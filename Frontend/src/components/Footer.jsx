
import { useState } from "react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Why Vedclass", href: "#features" },
  { name: "Contact Us", href: "#contact" },
];

const courseLinks = [
  { name: "Class 9", href: "#subjects" },
  { name: "Class 10", href: "#subjects" },
  { name: "Class 11", href: "#subjects" },
  { name: "Class 12", href: "#subjects" },
  { name: "Daily Practice Problems", href: "#dpp" },
];

const resourceLinks = [
  { name: "Study Materials", href: "#resources" },
  { name: "Online Tests", href: "#online-test" },
  { name: "Mock Tests", href: "#online-test" },
  { name: "Pricing Plans", href: "#pricing" },
  { name: "FAQs", href: "#faq" },
];

function FooterLinks({ title, links }) {
  return (
    <div>
      <h3 className="text-sm font-bold text-white">{title}</h3>

      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="text-sm text-blue-100/70 transition-colors duration-200 hover:text-white"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubscribe(event) {
    event.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }

    setMessage(
      "Newsletter subscription needs to be connected to a backend."
    );
  }

  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[#091a3b] text-white"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-0 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-16">

          {/* Brand */}
          <div className="lg:col-span-4">
            <a
              href="#home"
              className="inline-flex items-center gap-2 text-3xl font-extrabold tracking-tight"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xl text-white shadow-lg shadow-blue-600/20">
                V
              </span>
              <span>
                Ved<span className="text-blue-400">class</span>
              </span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-blue-100/70">
              Learn better, score higher. Your learning companion for
              Classes 9–12 with practice problems, study resources
              and online tests.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm font-bold transition hover:border-blue-400 hover:bg-blue-600"
              >
                IG
              </a>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm font-bold transition hover:border-blue-400 hover:bg-blue-600"
              >
                YT
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm font-bold transition hover:border-blue-400 hover:bg-blue-600"
              >
                f
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm font-bold transition hover:border-blue-400 hover:bg-blue-600"
              >
                in
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <FooterLinks title="Quick Links" links={quickLinks} />
          </div>

          {/* Courses */}
          <div className="lg:col-span-3">
            <FooterLinks title="Courses & Practice" links={courseLinks} />
          </div>

          {/* Resources */}
          <div className="lg:col-span-3">
            <FooterLinks title="Resources" links={resourceLinks} />
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-y border-white/10 py-8 lg:py-9">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-md">
              <h3 className="text-xl font-bold text-white">
                Stay in the learning loop.
              </h3>
              <p className="mt-2 text-sm leading-6 text-blue-100/60">
                Get study tips, new resources and learning updates
                delivered to your inbox.
              </p>
            </div>

            <form
              onSubmit={handleSubscribe}
              className="w-full max-w-md"
            >
              <div className="flex rounded-xl border border-white/10 bg-white/5 p-1.5 focus-within:border-blue-400">
                <input
                  type="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setMessage("");
                  }}
                  placeholder="Enter your email address"
                  aria-label="Email address"
                  className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-sm text-white outline-none placeholder:text-blue-100/40"
                  required
                />

                <button
                  type="submit"
                  className="shrink-0 rounded-lg bg-blue-600 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-blue-500 sm:px-5 sm:text-sm"
                >
                  Subscribe
                </button>
              </div>

              {message && (
                <p
                  role="status"
                  className="mt-2 text-xs text-blue-200"
                >
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col gap-4 py-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="text-xs leading-5 text-blue-100/50">
            © {new Date().getFullYear()} Vedclass. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 sm:justify-end">
            <a
              href="#privacy"
              className="text-xs text-blue-100/50 transition hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="#terms"
              className="text-xs text-blue-100/50 transition hover:text-white"
            >
              Terms &amp; Conditions
            </a>

            <a
              href="#help"
              className="text-xs text-blue-100/50 transition hover:text-white"
            >
              Help Center
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}