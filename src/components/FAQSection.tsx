'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqItems = [
  {
    question: 'What is GDG On Campus, and how is it different?',
    answer:
      'GDG On Campus is a student-led tech community backed by Google Developers. It’s focused on peer-to-peer learning, building tech skills, and community projects. Unlike typical tech clubs, GDG is recognized globally and provides direct opportunities to engage with Google technologies and experts.',
  },
  {
    question: 'Who can join GDG On Campus?',
    answer:
      'Any student passionate about technology, coding, or design can join. Whether you’re a beginner or experienced developer, GDG welcomes you to learn, build, and grow together.',
  },
  {
    question: 'How do I get started with GDG On Campus?',
    answer:
      'Start by joining your campus GDG chapter through official links or community groups. Attend meetups, participate in workshops, and contribute to projects or hackathons to get involved.',
  },
  {
    question: 'What kind of events does GDG On Campus host?',
    answer:
      'GDG On Campus hosts workshops, tech talks, Flutter festivals, solution challenges, study jams, and hackathons across various domains like AI, Web, Mobile, and Cloud.',
  },
  {
    question: 'How does GDG On Campus help in career growth?',
    answer:
      'You get hands-on experience with real-world tools, mentorship from Googlers and community experts, and a chance to lead initiatives. This builds your portfolio and sharpens soft skills like communication and leadership.',
  },
  {
    question: 'Is GDG On Campus officially supported by Google?',
    answer:
      'Yes, GDG On Campus is an initiative by Google Developers. Chapters are officially recognized and supported by Google, ensuring global credibility and access to exclusive resources.',
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-20 lg:py-36 container mx-auto">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {/* Left Heading */}
        <div>
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Frequently <br /> asked <br /> questions
          </h2>
        </div>

        {/* Right Accordion */}
        <div className="flex flex-col gap-3">
          {faqItems.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                className={`rounded-xl p-4 transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-50 border border-dotted border-blue-400'
                    : 'hover:bg-blue-50'
                }`}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full text-left flex items-center justify-between font-semibold text-lg text-blue-900 focus:outline-none focus:ring-0"
                >
                  <span>{item.question}</span>
                  <motion.div
                    animate={{ rotate: isActive ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Plus className="w-5 h-5 text-blue-500" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isActive && item.answer && (
                    <motion.p
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden mt-3 text-sm text-blue-900"
                    >
                      {item.answer}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
