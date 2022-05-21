import React from "react";
import Navbar from "../Components/Navbar";
import TypingCard from "../Components/TypingCard"
import "../App.css";
function TypingPage() {
  return (
    <div>
      <section className="grid h-screen">
        <Navbar />
        <TypingCard/>
      </section>
    </div>
  );
}

export default TypingPage;
