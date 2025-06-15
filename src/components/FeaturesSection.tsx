"use client";

import React, { useRef } from "react"
import AngularBracket from "./icons/AngularBracket"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import Image from "next/image";

const FeaturesSection = () => {

  // References for parallax container
  const sectionRef = useRef(null)

  // Card animation references
  const card1Ref = useRef(null)
  const card2Ref = useRef(null)
  const card3Ref = useRef(null)


  // Use InView hooks for each card
  const isCard1InView = useInView(card1Ref, { once: true, amount: 0.3 })
  const isCard2InView = useInView(card2Ref, { once: true, amount: 0.3 })
  const isCard3InView = useInView(card3Ref, { once: true, amount: 0.3 })

  // New ref for quiz options
  const quizOptionsRef = useRef(null)
  const isQuizOptionsInView = useInView(quizOptionsRef, { once: true, amount: 0.3 })


  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  }


  // Quiz option animation variants
  const quizOptionVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    })
  }



  // Use the scroll hook from framer-motion to track scroll position
  const { scrollYProgress } = useScroll({
    target: sectionRef,
  })

  // Transform the scroll progress to horizontal movement
  const xPosition = useTransform(scrollYProgress, [0, 1], ["0vh", "-122vh"])

  return (
    <section
      ref={sectionRef}
      className='bg-black relative h-[300vh] flex flex-col'
    >
      {/* Sticky container to maintain position during scroll */}
      <div className='sticky top-0 h-screen flex items-center overflow-hidden'>
        {/* Title with fixed position */}
        <motion.div
  style={{ x: xPosition }}
  className='w-[300vh] h-screen flex justify-around items-center absolute left-0 top-10 p-16 text-white'
>
          <div className=''>
            <span className='inline-block text-orange font-bold text-9xl -rotate-[20deg]'>
              <AngularBracket />
            </span>
            <h2 className='text-7xl lg:text-9xl font-bold leading-tight'>
              We are
              <br />
              GDG VIT
            </h2>
          </div>
          {/* Feature Cards */}
          <motion.div
            ref={card1Ref}
            variants={cardVariants}
            initial="hidden"
            animate={isCard1InView ? "visible" : "hidden"}
            className='h-[70vh] w-[80vw] lg:w-[60vh] p-16 bg-[#212121] text-white border-none rounded-xl flex flex-col gap-3'
          >
            <p className='text-gray-300 text-xl font-medium'>
              We believe in thinking beyond the conventional. A club&apos;s resources shouldn&apos;t just be directed toward organizing events, but also towards fostering a culture of continuous learning and collaborative growth. With that in mind, we host flagship events like <span className="text-blue-400">Hackbuild, Capture the Flag (CTF), and Competitive Programming under Spectrum</span>, along with a wide range of insightful workshops.
            </p>
            
          </motion.div>

          <motion.div
            ref={card2Ref}
            variants={cardVariants}
            initial="hidden"
            animate={isCard2InView ? "visible" : "hidden"}
            className='h-[70vh] w-[60vh] p-16 bg-[#212121] text-white border-none rounded-xl flex flex-col gap-3'
          >
            <h3 className='text-4xl font-bold mb-4'>Our Story</h3>
            <p className='text-gray-300 text-xl font-medium'>
              Started in 2021 as Google Developer Student Clubs (GDSC), the club transitioned to GDG on Campus in 2024. It&apos;s been an incredible 5-year journey of innovation, collaboration, and growth — a community proudly powered by <span className="text-green-400">GoogleForDevs</span>. Over the years, we&apos;ve empowered countless students to build & learn.
            </p>
            
          </motion.div>

          <motion.div
            ref={card3Ref}
            variants={cardVariants}
            initial="hidden"
            animate={isCard3InView ? "visible" : "hidden"}
            className='h-[70vh] w-[60vh] p-16 bg-[#212121] text-white border-none rounded-xl flex flex-col gap-3'
          >
            <h3 className='text-4xl font-bold mb-4'>Join Us</h3>
            <p className='text-gray-300 mb-8 text-xl font-medium'>
              Get involved in our upcoming events and connect with fellow developers.
            </p>
            <div className='relative'>
              {/* Bars */}
              <motion.div
                ref={quizOptionsRef}
                className='space-y-3 font-medium text-lg'
              >
                <motion.div
                  custom={0}
                  variants={quizOptionVariants}
                  initial="hidden"
                  animate={isQuizOptionsInView ? "visible" : "hidden"}
                  className='bg-[#EA4335] text-black px-6 py-3 rounded-lg w-3/4'
                >
                  Innovate
                </motion.div>
                <motion.div
                  custom={1}
                  variants={quizOptionVariants}
                  initial="hidden"
                  animate={isQuizOptionsInView ? "visible" : "hidden"}
                  className='bg-[#FBBC04] text-black px-6 py-3 rounded-lg w-3/4'
                >
                  Collaborate 
                </motion.div>
                <motion.div
                  custom={2}
                  variants={quizOptionVariants}
                  initial="hidden"
                  animate={isQuizOptionsInView ? "visible" : "hidden"}
                  className='bg-[#0F9D58] text-black px-6 py-3 rounded-lg w-3/4'
                >
                  Create 
                </motion.div>
              </motion.div>

              {/* GIF Badge */}
              
              <Image
                src='/globe.gif'
                alt='Animated Globe'
                width={240}
                height={200}
                className='absolute -right-11 top-1/2 -translate-y-1/2'
              />

            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection
