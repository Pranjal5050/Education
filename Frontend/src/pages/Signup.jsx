import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import {
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  BookOpen,
  FileText,
  BarChart3,
  Menu,
  X,
  Search,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit =async (e) => {
    e.preventDefault();

    const res = await axios.post("http://localhost:5000/api/auth/register", formData, {withCredentials: true});
    if(res){
      navigate("/");
      setUser(res.data.user);
      localStorage.setItem("token", res.data.token);
    }

    // Backend API yahan call kar sakte ho
    // axios.post("/api/auth/register", formData)
  };

  return (
    <div className="min-h-screen bg-white text-[#07164d]">

      {/* ================= NAVBAR ================= */}

      <Navbar/>
      
      {/* ================= MAIN ================= */}
      <main className="relative overflow-hidden">

        {/* Background decorative shapes */}
        <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-40 h-96 w-96 rounded-full bg-sky-100/60 blur-3xl" />

        <section className="relative mx-auto grid min-h-[calc(100vh-68px)] max-w-[1500px] grid-cols-1 items-center gap-10 px-5 py-10 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-12">

          {/* ================= LEFT CONTENT ================= */}
          <div className="relative order-2 lg:order-1">

            {/* Badge */}
            <div className="mb-5 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
              Join Xis
            </div>

            {/* Heading */}
            <h1 className="max-w-[600px] text-4xl font-extrabold leading-[1.05] tracking-tight text-[#07164d] sm:text-5xl lg:text-6xl">

              Create your
              <br />

              <span className="text-[#0878f9]">
                Account
              </span>

            </h1>

            {/* Description */}
            <p className="mt-6 max-w-[540px] text-base leading-7 text-slate-600 sm:text-lg">
              Start your preparation with chapter-wise notes, DPPs,
              mock tests and detailed analysis. Build stronger concepts
              in Physics, Chemistry and Mathematics.
            </p>

            {/* ================= ILLUSTRATION ================= */}
            <div className="relative mt-8 hidden h-[370px] w-full sm:block">

              {/* Background circles */}
              <div className="absolute left-[8%] top-[8%] h-64 w-64 rounded-full bg-blue-50" />

              <div className="absolute left-[30%] top-[2%] h-72 w-72 rounded-full bg-sky-50" />

              <div className="absolute bottom-0 left-[3%] h-48 w-48 rounded-full bg-blue-50/80" />

              {/* Dotted pattern */}
              <div className="absolute left-[48%] top-[20%] grid grid-cols-5 gap-2 opacity-50">
                {Array.from({ length: 25 }).map((_, index) => (
                  <span
                    key={index}
                    className="h-2 w-2 rounded-full bg-blue-300"
                  />
                ))}
              </div>

              {/* Plant */}
              <div className="absolute bottom-4 left-[4%]">
                <div className="relative h-28 w-24">

                  <div className="absolute bottom-0 left-3 h-12 w-20 rounded-b-[40%] rounded-t-md bg-slate-100 shadow-md" />

                  <div className="absolute bottom-10 left-8 h-20 w-3 rotate-[-15deg] rounded-full bg-green-500" />

                  <div className="absolute bottom-16 left-1 h-9 w-16 -rotate-[25deg] rounded-full bg-green-400" />

                  <div className="absolute bottom-20 left-8 h-9 w-16 rotate-[30deg] rounded-full bg-emerald-400" />

                </div>
              </div>

              {/* Books */}
              <div className="absolute bottom-12 left-[16%] z-10 rotate-[-4deg]">

                <div className="mb-[-4px] h-12 w-52 rounded-lg bg-[#0878f9] px-5 py-3 text-sm font-bold text-white shadow-lg">
                  Physics
                </div>

                <div className="mb-[-4px] h-12 w-56 rounded-lg bg-orange-400 px-5 py-3 text-sm font-bold text-white shadow-lg">
                  Chemistry
                </div>

                <div className="h-12 w-60 rounded-lg bg-emerald-500 px-5 py-3 text-sm font-bold text-white shadow-lg">
                  Math
                </div>

              </div>

              {/* Laptop */}
              <div className="absolute bottom-16 left-[42%] z-20">

                <div className="h-44 w-64 rotate-[2deg] rounded-2xl border-8 border-slate-700 bg-white shadow-2xl">

                  <div className="flex items-center justify-between border-b border-blue-100 bg-blue-50 px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded bg-blue-500" />
                      <span className="text-xs font-bold text-[#07164d]">
                        Online Test
                      </span>
                    </div>

                    <span className="text-blue-500">
                      →
                    </span>
                  </div>

                  <div className="grid grid-cols-4 gap-2 p-5">
                    {["A", "B", "C", "D"].map((item) => (
                      <div
                        key={item}
                        className="flex h-8 items-center justify-center rounded-md border border-blue-100 bg-blue-50 text-xs font-bold text-blue-600"
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  <button className="mx-auto block rounded-md bg-[#0878f9] px-5 py-2 text-xs font-semibold text-white">
                    Start Test
                  </button>

                </div>

                {/* Laptop Base */}
                <div className="mx-auto h-4 w-72 rounded-b-xl bg-slate-500 shadow-lg" />
              </div>

              {/* Notebook */}
              <div className="absolute bottom-0 left-[35%] z-30 w-48 rotate-[-8deg] rounded-xl bg-white p-5 shadow-xl">

                <div className="space-y-3">
                  <div className="h-1 w-20 rounded bg-blue-300" />
                  <div className="text-lg font-bold text-blue-600">
                    E = mc²
                  </div>
                  <div className="text-sm text-slate-500">
                    Σ = √x² + y²
                  </div>
                  <div className="text-sm text-slate-500">
                    S = force × distance
                  </div>
                </div>

                <div className="absolute -bottom-3 right-[-30px] h-2 w-20 rotate-[-15deg] rounded-full bg-orange-400" />
              </div>

              {/* Chapter Practice Card */}
              <div className="absolute left-[17%] top-5 z-40 rotate-[-8deg] rounded-2xl bg-white p-5 shadow-xl shadow-blue-100">

                <div className="mb-2 flex justify-center">
                  <BookOpen
                    size={38}
                    className="text-blue-500"
                  />
                </div>

                <p className="text-center text-sm font-bold leading-5 text-[#07164d]">
                  Chapter-wise
                  <br />
                  Practice
                </p>

              </div>

              {/* DPP Card */}
              <div className="absolute right-[8%] top-3 z-40 rotate-[5deg] rounded-2xl bg-white p-5 shadow-xl shadow-blue-100">

                <div className="mb-2 flex justify-center">
                  <FileText
                    size={38}
                    className="text-emerald-500"
                  />
                </div>

                <p className="text-center text-sm font-bold text-[#07164d]">
                  DPP
                </p>

              </div>

              {/* Analysis Card */}
              <div className="absolute bottom-[12%] right-[1%] z-40 rotate-[7deg] rounded-2xl bg-white p-5 shadow-xl shadow-blue-100">

                <div className="mb-2 flex justify-center">
                  <BarChart3
                    size={40}
                    className="text-purple-500"
                  />
                </div>

                <p className="text-center text-sm font-bold leading-5 text-[#07164d]">
                  Detailed
                  <br />
                  Analysis
                </p>

              </div>

            </div>
          </div>

          {/* ================= SIGNUP FORM ================= */}
          <div className="relative order-1 flex justify-center lg:order-2">

            <div className="w-full max-w-[560px] rounded-[26px] border border-blue-50 bg-white p-6 shadow-[0_20px_60px_rgba(37,99,235,0.10)] sm:p-8 lg:p-10">

              {/* Form Heading */}
              <div className="mb-7">

                <h2 className="text-2xl font-extrabold tracking-tight text-[#07164d] sm:text-3xl">
                  Sign up Your Account
                </h2>

                <p className="mt-2 text-sm text-slate-500 sm:text-base">
                  Join thousands of students learning with Xis
                </p>

              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-4"
              >

                {/* First + Last Name */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                  {/* First Name */}
                  <div className="relative">

                    <User
                      size={19}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                    />

                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First Name"
                      required
                      className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-12 pr-4 text-sm text-[#07164d] outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    />

                  </div>

                  {/* Last Name */}
                  <div className="relative">

                    <User
                      size={19}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                    />

                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      required
                      className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-12 pr-4 text-sm text-[#07164d] outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    />

                  </div>

                </div>

                {/* Email */}
                <div className="relative">

                  <Mail
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-12 pr-4 text-sm text-[#07164d] outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />

                </div>

                {/* Phone */}
                <div className="relative">

                  <Phone
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                  />

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                    inputMode="numeric"
                    maxLength={10}
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-12 pr-4 text-sm text-[#07164d] outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />

                </div>

                {/* Password */}
                <div className="relative">

                  <Lock
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                  />

                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    required
                    minLength={6}
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-12 pr-12 text-sm text-[#07164d] outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-blue-600"
                  >
                    {showPassword ? (
                      <EyeOff size={19} />
                    ) : (
                      <Eye size={19} />
                    )}
                  </button>

                </div>

                

                {/* Create Account */}
                <button
                  type="submit"
                  className="group mt-2 flex h-13 w-full items-center justify-center gap-2 rounded-xl bg-[#0878f9] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-200 transition duration-300 hover:bg-blue-700 hover:shadow-blue-300"
                >

                  Create Account

                  <ArrowRight
                    size={19}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />

                </button>

              </form>

              {/* Login */}
              <p className="mt-7 text-center text-sm text-slate-500">

                Already have an account?{" "}

                <Link to={"/login"}
                  className="font-bold text-blue-600 transition hover:text-blue-800"
                >
                  Login
                </Link>

              </p>

            </div>
          </div>

        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-blue-100 bg-white">

        <div className="mx-auto max-w-[1500px] px-5 py-10 sm:px-8 lg:px-12">

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">

            {/* Brand */}
            <div className="col-span-2 md:col-span-4 lg:col-span-2">

              <a
                href="/"
                className="flex items-center gap-2"
              >
                <span className="text-4xl font-bold text-[#0878f9]">
                  π
                </span>

                <span className="text-3xl font-extrabold text-[#07164d]">
                  Xis
                </span>
              </a>

              <p className="mt-3 max-w-[300px] text-sm leading-6 text-slate-500">
                Your Learning Partner for Class 10 & 12.
                Practice smarter, learn better and score higher.
              </p>

              {/* Social */}
              {/* <div className="mt-5 flex gap-3">

                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-[#07164d] transition hover:bg-blue-600 hover:text-white"
                >
                  <Youtube size={17} />
                </a>

                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-[#07164d] transition hover:bg-blue-600 hover:text-white"
                >
                  <Instagram size={17} />
                </a>

                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-[#07164d] transition hover:bg-blue-600 hover:text-white"
                >
                  <Twitter size={17} />
                </a>

                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-[#07164d] transition hover:bg-blue-600 hover:text-white"
                >
                  <Linkedin size={17} />
                </a>

              </div> */}

            </div>

            {/* Quick Links */}
            <div>

              <h3 className="mb-4 text-sm font-bold text-[#07164d]">
                Quick Links
              </h3>

              <div className="flex flex-col gap-3 text-sm text-slate-500">

                <a href="/" className="hover:text-blue-600">
                  Home
                </a>

                <a href="/subjects" className="hover:text-blue-600">
                  Subjects
                </a>

                <a href="/dpp" className="hover:text-blue-600">
                  DPP
                </a>

                <a href="/online-test" className="hover:text-blue-600">
                  Online Test
                </a>

              </div>

            </div>

            {/* Company */}
            <div>

              <h3 className="mb-4 text-sm font-bold text-[#07164d]">
                Company
              </h3>

              <div className="flex flex-col gap-3 text-sm text-slate-500">

                <a href="/about" className="hover:text-blue-600">
                  About
                </a>

                <a href="/contact" className="hover:text-blue-600">
                  Contact
                </a>

                <a href="/blog" className="hover:text-blue-600">
                  Blog
                </a>

                <a href="/pricing" className="hover:text-blue-600">
                  Pricing
                </a>

              </div>

            </div>

            {/* Support */}
            <div>

              <h3 className="mb-4 text-sm font-bold text-[#07164d]">
                Support
              </h3>

              <div className="flex flex-col gap-3 text-sm text-slate-500">

                <a href="/help" className="hover:text-blue-600">
                  Help Center
                </a>

                <a href="/privacy" className="hover:text-blue-600">
                  Privacy Policy
                </a>

                <a href="/terms" className="hover:text-blue-600">
                  Terms & Conditions
                </a>

                <a href="/refund" className="hover:text-blue-600">
                  Refund Policy
                </a>

              </div>

            </div>

          </div>

          {/* Copyright */}
          <div className="mt-8 border-t border-blue-100 pt-6 text-center text-xs text-slate-400">
            © 2026 Xis. All Rights Reserved.
          </div>

        </div>

      </footer>

    </div>
  );
};

export default Signup;