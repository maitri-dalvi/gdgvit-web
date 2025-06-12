"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface MonthlyData {
  month: string;
  title: string;
  topics: string[];
  bgColor: string;
}

const monthlyData: MonthlyData[] = [
  // ... same monthlyData as before
];

const TimelineSection = () => {
  const sectionRef = useRef(null);

  const cardRefs = useRef<React.RefObject<HTMLDivElement>[]>([]);
  if (cardRefs.current.length !== monthlyData.length) {
    // initialize refs array if not already
    cardRefs.current = Array(monthlyData.length)
      .fill(null)
      .map((_, i) => cardRefs.current[i] || React.createRef<HTMLDivElement>());
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const tagContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.05,
      },
    },
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  };

  return (
    <section className="py-20 px-8 w-full" ref={sectionRef}>
      <div className="w-full flex flex-col items-center justify-between">
        <motion.h2
          className="text-6xl lg:text-7xl font-bold mb-20"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          Timeline
        </motion.h2>
        {monthlyData.map((monthData, index) => {
          const ref = cardRefs.current[index];

          const isInView = useInView(ref, {
            once: true,
            amount: 0.3,
          });

          return (
            <React.Fragment key={monthData.month}>
              <motion.div
                ref={ref}
                className="lg:border-r-2 lg:pr-8 relative lg:border-blue-dark"
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <div className="text-6xl lg:text-4xl font-bold mb-4 mt-4 lg:mt-16 text-center">
                  {monthData.month}
                </div>
                <div className="hidden lg:block absolute top-16 right-0 w-6 h-6 translate-x-1/2 rounded-full bg-[#F7DF1E] border-4 border-[#3658D3]" />
              </motion.div>

              <motion.div
                ref={ref}
                className="lg:mx-8 mb-8 p-8 lg:p-16 rounded-xl w-full"
                style={{ backgroundColor: monthData.bgColor }}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <h3 className="text-4xl font-bold mb-8">{monthData.title}</h3>

                <motion.div
                  className="flex flex-wrap gap-2"
                  variants={tagContainerVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  {monthData.topics.map((topic: string, i: number) => (
                    <motion.span
                      key={i}
                      variants={tagVariants}
                      className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm"
                    >
                      {topic}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default TimelineSection;
