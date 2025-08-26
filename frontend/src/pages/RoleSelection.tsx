import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import logo from "../assets/logo.png";

const roles = ["Designer", "Developer", "Business Dev"];

export default function RoleSelection() {
  const [myRole, setMyRole] = useState(roles[0]);
  const [withRole, setWithRole] = useState(roles[0]);
  const [openMy, setOpenMy] = useState(false);
  const [openWith, setOpenWith] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#20E297] relative">
      <div className="absolute top-10 left-8 w-64">
        <img src={logo} alt="" />
      </div>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-32 text-center text-lg font-medium text-black"
      >
        CHOOSE YOUR ROLE TO GET STARTED
      </motion.h2>
      <div className="flex items-center gap-8 mb-32">
        <span className="text-3xl font-light text-black/60">i'm a</span>
        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="text-3xl font-bold text-black cursor-pointer flex items-center gap-2"
            onClick={() => setOpenMy((v) => !v)}
          >
            {myRole}
            <span className="bg-black rounded-full w-8 h-8 flex items-center justify-center">
              <span className="text-white text-xl">↑</span>
            </span>
          </motion.button>
          <AnimatePresence>
            {openMy && (
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute left-0 mt-2 bg-transparent rounded-lg z-20 w-40"
              >
                {roles.map((role) => (
                  <li
                    key={role}
                    className="px-4 py-2 text-lg text-black cursor-pointer hover:bg-gray-200"
                    onClick={() => {
                      setMyRole(role);
                      setOpenMy(false);
                    }}
                  >
                    {role}
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
        <span className="text-3xl font-light text-black/60">
          speaking with a
        </span>
        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="text-3xl font-bold text-black cursor-pointer flex items-center gap-2"
            onClick={() => setOpenWith((v) => !v)}
          >
            {withRole}
            <span className="bg-black rounded-full w-8 h-8 flex items-center justify-center">
              <span className="text-white text-xl">↑</span>
            </span>
          </motion.button>
          <AnimatePresence>
            {openWith && (
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute left-0 mt-2 bg-transparent rounded-lg  z-20 w-40"
              >
                {roles.map((role) => (
                  <li
                    key={role}
                    className="px-4 py-2 text-lg text-black cursor-pointer hover:bg-gray-200"
                    onClick={() => {
                      setWithRole(role);
                      setOpenWith(false);
                    }}
                  >
                    {role}
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        className="mt-8 px-12 py-4 bg-black text-white rounded-full shadow-lg text-lg font-medium"
      >
        Start Decoding
      </motion.button>
    </div>
  );
}
