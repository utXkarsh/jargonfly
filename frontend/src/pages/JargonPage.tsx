import { useState } from "react";
import { motion } from "motion/react";
import logo from "../assets/logo.png";

const jargonList = [
  "MVP",
  "Pivot",
  "Runway",
  "Burn Rate",
  "Unicorn",
  "Scale Up",
  "Bootstrapping",
  "Growth Hacking",
  "Product-Market Fit",
  "CAC",
  "LTV",
  "Churn Rate",
  "Freemium",
  "SaaS",
  "KPI",
];

type JargonDetail = {
  meaning: string;
  sentence: string;
};

const jargonDetails: Record<string, JargonDetail> = {
  MVP: {
    meaning:
      "A Strategic Shift In Product, Business Model, Or Approach Based On Feedback Or Performance.",
    sentence:
      "After Realizing Our Original Model Wasn’t Gaining Traction, We Decided To Pivot Toward A Subscription-Based Approach.",
  },
  // ...add details for other jargon as needed
};

export default function JargonPage() {
  const [selected, setSelected] = useState("MVP");
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-[#20E297] flex flex-col">
      <div className="flex items-center px-8 py-4">
        <img src={logo} alt="Jargonfly" className="h-8 mr-6" />
        <div className="flex-1 flex justify-center gap-8">
          <span className="text-black/60 font-medium text-xl">i'm a</span>
          <span className="font-bold text-xl">Designer</span>
          <span className="mx-2 bg-black rounded-full w-8 h-8 flex items-center justify-center">
            <span className="text-white text-xl">↓</span>
          </span>
          <span className="text-black/60 font-medium text-xl">
            speaking with a
          </span>
          <span className="font-bold text-xl">Designer</span>
          <span className="mx-2 bg-black rounded-full w-8 h-8 flex items-center justify-center">
            <span className="text-white text-xl">↓</span>
          </span>
        </div>
      </div>
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-1/5 px-8 py-8 flex flex-col gap-4">
          <input
            type="text"
            placeholder="search for a jargon"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-full px-4 py-2 border border-black bg-[#F6F6F6] text-black font-medium mb-6"
          />
          <ul className="flex flex-col gap-2">
            {jargonList
              .filter((j) => j.toLowerCase().includes(search.toLowerCase()))
              .map((j) => (
                <li
                  key={j}
                  className={`cursor-pointer text-lg font-semibold ${
                    selected === j ? "text-black" : "text-black/60"
                  }`}
                  onClick={() => setSelected(j)}
                >
                  {j}
                </li>
              ))}
          </ul>
        </div>
        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#FFF9E6] rounded-3xl p-8 w-[400px] min-h-[220px] flex flex-col justify-center shadow-lg"
          >
            <span className="text-black/60 font-semibold mb-2">
              WHAT IT MEANS?
            </span>
            <span className="font-bold text-2xl text-black">
              {jargonDetails[selected]?.meaning || "..."}
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#7fffd4] rounded-3xl p-8 w-[400px] min-h-[220px] flex flex-col justify-center shadow-lg"
          >
            <span className="text-black/60 font-semibold mb-2">
              IN A SENTENCE
            </span>
            <span className="font-bold text-2xl text-black">
              “{jargonDetails[selected]?.sentence || "..."}”
            </span>
          </motion.div>
          <button className="absolute right-12 top-1/2 -translate-y-1/2 bg-black rounded-full w-10 h-10 flex items-center justify-center">
            <span className="text-white text-xl">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
