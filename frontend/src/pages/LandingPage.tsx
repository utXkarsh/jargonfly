import { motion } from "motion/react";
import { useNavigate } from "react-router";
import logo from "../assets/logo.png";

const buzzwords = [
  "MVP",
  "PIVOT",
  "HANDOFF",
  "BURN RATE",
  "HEURISTIO",
  "RUNWAY",
  "LTV",
  "KPI",
  "AGILE",
  "SCRUM",
  "LEAN",
];

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#20E297] relative overflow-hidden">
      {buzzwords.map((word, i) => (
        <motion.span
          key={word}
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: 1,
            y: [0, -15, 0, 30, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: i * 0.1,
          }}
          className="absolute select-none pointer-events-none font-bold text-2xl"
          style={{
            top: `${10 + (i % 3) * 40}%`,
            left: `${10 + ((i * 12) % 80)}%`,
            color: "#31B280",
          }}
        >
          {word}
        </motion.span>
      ))}
      <div className="text-center z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-lg font-medium text-black"
        >
          WELCOME TO
        </motion.h2>
        <img src={logo} alt="" />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-medium text-base md:text-lg max-w-xl mx-auto mb-8 text-black"
        >
          HAVE YOU JUST SWITCHED OR BEGAN YOUR CAREER AND THEN
          <br />
          YOU HEAR THESE FANCY BUZZWORDS THAT GET YOU IRKED UP ???
          <br />
          WELL THEN THIS WEBSITE IS HERE TO SOLVE IT
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-8 px-12 py-4 bg-black text-white rounded-full shadow-lg text-lg font-medium"
          onClick={() => navigate("/roles")}
        >
          Start Decoding
        </motion.button>
      </div>
    </div>
  );
}
