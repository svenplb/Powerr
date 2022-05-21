import React from "react";
import { motion } from "framer-motion";
import { Container, Card } from "@nextui-org/react";
import { Link } from "react-router-dom";

function Navbar() {
  function playAudio() {
    new Audio(
      "./mixkit-modern-click-box-check-1120 (online-audio-converter.com).mp3"
    ).play();
  }

  return (
    <Container>
      <Card
        className="border-none "
        css={{
          background: "rgba(150, 150, 150, 0.08)",
          backdropFilter: "blur(1px)",
        }}
      >
        <div className=" flex place-content-between font-mono ">
          <div className="flex gap-6 cursor-pointer">
            <motion.p
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className=""
            >
              <Link to="/home">/Home</Link>
            </motion.p>
            <motion.p
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className=""
            >
              <Link to="/settings">/Settings</Link>
            </motion.p>
            <motion.p
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className=""
            >
              <Link to="/info">/Info</Link>
            </motion.p>
          </div>
          <div className="flex">
            <motion.button
              className="bg-white w-8 h-8 grid place-content-center rounded-md"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={playAudio}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="black"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            </motion.button>
          </div>
        </div>
      </Card>
    </Container>
  );
}

export default Navbar;
