"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const monthlyData = [
  {
    month: "October",
    title: "Build with AI (Gen AI Study Jams)",
    bgColor: "#FFD37D",
    topics: [
      "Prompt Engineering Basics",
      "Gemini & PaLM Overview",
      "Text Generation with LLMs",
      "Multimodal AI Applications",
      "Responsible AI Practices",
      "Building AI Apps with Gemini API",
      "Deploying GenAI Projects",
    ],
  },
    {
    month: "November",
    title: "Tech Winter Break",
    bgColor: "#70A2E1",
    topics: [
      "DSA",
      "Intro to APIs",
      "Frontend Project Building",
      "Git & GitHub Essentials",
      "Hackathon Prep",
      "Live Coding Sessions",
      "Community Mentoring",
    ],
  },
  {
    month: "December",
    title: "Flutter Roadshow [GDG VIT x Flutter Mumbai]",
    bgColor: "#77C6B3",
    topics: [
      "Flutter Fundamentals",
      "State Management",
      "Firebase Integration",
      "Animations in Flutter",
      "Building Responsive UIs",
      "Dart Essentials",
      "Hands-on with FlutterFlow",
    ],
  },

  {
    month: "January",
    title: "Winter Of Code [GDG VIT x GDG IIIT Kalyani]",
    bgColor: "#F57642",
    topics: [
      "Open Source Fundamentals",
      "Contributing to Repos",
      "Pull Requests & Issues",
      "Pair Programming",
      "Maintainer Walkthroughs",
      "Weekly Check-ins",
      "Project Deployment",
      "GitHub Project Boards",
    ],
  },
  {
    month: "February",
    title: "Solutions Challenge Info Session",
    bgColor: "#FFBABA",
    topics: [
      "UN Sustainable Development Goals",
      "How to Participate",
      "Project Brainstorming",
      "Tech Stack Suggestions",
      "Team Formation",
      "Submission Guidelines",
      "Tips from Past Winners",
    ],
  },
  {
    month: "March",
    title: "Shape The Web [UI/UX Figma Workshop & Competition] [GDG VIT x FOF Mumbai]",
    bgColor: "#D9DFF8",
    topics: [
      "Figma Crash Course",
      "Design Thinking Process",
      "Color Theory & Typography",
      "Wireframing & Prototyping",
      "UX Case Studies",
      "Design-to-Code Practices",
      "Feedback & Iteration",
      "Competition Design Brief",
    ],
  },
  {
    month: "April",
    title: "Beyond The Browser - MERN Workshop",
    bgColor: "#B5D3FF",
    topics: [
      "MongoDB Essentials",
      "Express.js Basics",
      "React Components",
      "Node.js Introduction",
      "Building APIs",
      "MERN Stack Integration",
      "Deployment on Render/Netlify",
    ],
  },
  {
    month: "June",
    title: "Code the Cloud Hackathon [GDG VIT x GDG Cloud Mumbai]",
    bgColor: "#B8F2D1",
    topics: [
      "Cloud Project Ideation",
      "Using Firebase & GCP",
      "Team Collaboration Tools",
      "Working with APIs",
      "Cloud Functions",
      "Real-time Databases",
      "Pitching & Demo Day",
      "Judging Criteria Insights",
    ],
  },
];

const TimelineSection = () => {
  const sectionRef = useRef(null);

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
          Events Till Now...
        </motion.h2>

        <div className="w-full flex justify-center">
          <div className="lg:w-[60vw] grid lg:grid-cols-[1fr_4fr]">
            {monthlyData.map((monthData, index) => {
              const cardRef = useRef(null);
              const isInView = useInView(cardRef, {
                once: true,
                amount: 0.3,
              });

              return (
                <React.Fragment key={monthData.month}>
                  <motion.div
                    ref={cardRef}
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
                    ref={cardRef}
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
                      {monthData.topics.map((topic, i) => (
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
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
