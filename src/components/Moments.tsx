"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sparkle from "./icons/Sparkle";

const events = [
  {
    id: "solutionchallenge",
    title: "Solution Challenge",
    image: "/solutionchallenge.png",
    
  },
  {
    id: "flutterroadshow",
    title: "FlutterRoadshow",
    image: "/flutterroadshow.png",
    
  },
  {
    id: "shapetheweb",
    title: "Shape The Web",
    image: "/shapetheweb.png",
    
    },
  {
    id: "beyondthebrowser",
    title: "Beyond The Browser",
    image: "/beyondthebrowser.png",
    },
];

const Moments = () => {
  const [activeEvent, setActiveEvent] = useState(events[0]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
    exit: {
      opacity: 0,
      y: -40,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="bg-black min-h-[115vh] w-full overflow-hidden flex flex-col items-center justify-center text-white px-6 py-16">
      <h2 className="text-5xl lg:text-7xl font-bold mb-10 text-center flex items-center justify-center gap-4">
  <span className="text-[#FFD37D]">Moments</span>
  <motion.div
    animate={{
      scale: [1, 1.15, 1],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <Sparkle fill="#FFD37D" width={60} height={60} className="rotate-12" />
  </motion.div>
</h2>


      {/* Timeline Buttons */}
      <div className="flex gap-6 mb-12 mt-2 flex-wrap justify-center max-w-full overflow-x-auto">
        {events.map((event) => (
          <button
            key={event.id}
            onClick={() => setActiveEvent(event)}
            className={`px-4 py-2 rounded-full border whitespace-nowrap ${
              activeEvent.id === event.id
                ? "bg-white text-black"
                : "border-white text-white hover:bg-white/20"
            } transition duration-300`}
          >
            {event.title}
          </button>
        ))}
      </div>

      {/* Animated Image Only */}
      <div className="w-full max-w-4xl mt-2 px-2 mb-7">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeEvent.id}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="p-0 rounded-xl shadow-lg"
          >
            <img
              src={activeEvent.image}
              alt={activeEvent.title}
              className="rounded-lg object-cover mb-2 w-full h-[400px]"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Moments;
