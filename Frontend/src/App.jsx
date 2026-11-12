import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Subjects from "./pages/Subjects";
import DPP from "./pages/DPP";
import HowItWorks from "./pages/HowItWorks";
import Features from "./pages/Features";
import Footer from "./components/Footer";

import SubjectDetails from "./pages/SubjectDetails";
import TopicDetails from "./pages/TopicDetails";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Subjects />
      <DPP />
      <HowItWorks />
      <Features />
      <Footer />
    </>
  );
}

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/subjects/:subjectName" element={<SubjectDetails />} />
        <Route path="/topics/:topicName" element={<TopicDetails />} />
      </Routes>
  );
}

export default App;