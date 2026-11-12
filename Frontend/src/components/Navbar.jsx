import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Subjects", href: "#subjects" },
  { name: "DPP", href: "#dpp" },
  { name: "Online Test", href: "#online-test" },
  { name: "Pricing", href: "#pricing" },
  { name: "Resources", href: "#resources" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, loading, logout } = useAuth();


  return (
    <header className="relative z-50 w-full border-b border-slate-200 bg-white">
      <nav className="mx-auto flex min-h-[62px] max-w-[1200px] items-center justify-between px-5 sm:px-8 lg:px-10">

        {/* Logo */}
        <a
          href="#home"
          className="shrink-0 text-[25px] font-extrabold tracking-[-1.3px] text-[#10234f]"
        >
          <span className="text-[#f59e0b]">V</span>edclass
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-5 lg:flex xl:gap-6">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className={`whitespace-nowrap text-[12px] font-medium transition-colors duration-200 hover:text-blue-600 ${
                index === 0
                  ? "text-blue-600"
                  : "text-slate-700"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Buttons */}
        {/* <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <Link to={"/login"}
            className="rounded-full border border-slate-200 px-4 py-2 text-[12px] font-medium text-slate-800 transition hover:border-blue-500 hover:text-blue-600"
          >
            Login
          </Link>

          <Link
            to={'/register'}
            className="rounded-full bg-[#0866f5] px-4 py-2 text-[12px] font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            Signup
          </Link>
        </div> */}



        <div className="hidden shrink-0 items-center gap-2 lg:flex">
  {!loading && (
    user ? (
      <>
        <span className="text-sm font-medium text-slate-700">
          Welcome, {user.firstName} 👋
        </span>

        <button
          onClick={logout}
          className="rounded-full border border-slate-200 px-4 py-2 text-[12px] font-medium text-slate-800 transition hover:border-red-500 hover:text-red-600"
        >
          Logout
        </button>
      </>
    ) : (
      <>
        <Link
          to="/login"
          className="rounded-full border border-slate-200 px-4 py-2 text-[12px] font-medium text-slate-800 transition hover:border-blue-500 hover:text-blue-600"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="rounded-full bg-[#0866f5] px-4 py-2 text-[12px] font-semibold text-white shadow-sm transition hover:bg-blue-700"
        >
          Signup
        </Link>
      </>
    )
  )}
</div>






        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-[#10234f] hover:bg-slate-100 lg:hidden"
        >
          {menuOpen ? (
            <span className="text-2xl leading-none">×</span>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                d="M4 7h16M4 12h16M4 17h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute left-0 top-full w-full border-t border-slate-100 bg-white px-5 pb-5 pt-3 shadow-lg lg:hidden">
          <div className="flex flex-col">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-lg px-3 py-3 text-sm font-medium transition hover:bg-blue-50 hover:text-blue-600 ${
                  index === 0
                    ? "bg-blue-50 text-blue-600"
                    : "text-slate-700"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-4 flex gap-3">
            <Link to={"/login"}
              onClick={() => setMenuOpen(false)}
              className="flex-1 rounded-full border border-slate-200 py-2.5 text-center text-sm font-medium text-slate-800"
            >
              Login
            </Link>

            <Link to={'/register'}
              onClick={() => setMenuOpen(false)}
              className="flex-1 rounded-full bg-[#0866f5] py-2.5 text-center text-sm font-semibold text-white"
            >
              Signup
            </Link>
          </div>



          
        </div>
      )}
    </header>
  );
}