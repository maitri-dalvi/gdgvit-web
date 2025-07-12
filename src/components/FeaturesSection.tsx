"use client";

import React, { useRef } from "react"
import AngularBracket from "./icons/AngularBracket"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import Image from "next/image";

const FeaturesSection = () => {

  // References for parallax container
  const sectionRef = useRef(null)

  // Card animation references - Desktop
  const card1Ref = useRef(null)
  const card2Ref = useRef(null)
  const card3Ref = useRef(null)
  
  // Card animation references - Mobile
  const mobileCard1Ref = useRef(null)
  const mobileCard2Ref = useRef(null)
  const mobileCard3Ref = useRef(null)
  const titleRef = useRef(null)

  // Use InView hooks for each card - Desktop
  const isCard1InView = useInView(card1Ref, { once: true, amount: 0.3 })
  const isCard2InView = useInView(card2Ref, { once: true, amount: 0.3 })
  const isCard3InView = useInView(card3Ref, { once: true, amount: 0.3 })
  
  // Use InView hooks for each card - Mobile
  const isMobileCard1InView = useInView(mobileCard1Ref, { once: true, amount: 0.3 })
  const isMobileCard2InView = useInView(mobileCard2Ref, { once: true, amount: 0.3 })
  const isMobileCard3InView = useInView(mobileCard3Ref, { once: true, amount: 0.3 })
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.3 })

  // New ref for quiz options - Desktop and Mobile
  const quizOptionsRef = useRef(null)
  const mobileQuizOptionsRef = useRef(null)
  const isQuizOptionsInView = useInView(quizOptionsRef, { once: true, amount: 0.3 })
  const isMobileQuizOptionsInView = useInView(mobileQuizOptionsRef, { once: true, amount: 0.3 })

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

  // Title animation variants
  const titleVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
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

  // scroll hook from framer-motion to track scroll position (desktop only)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
  })

  // Transform scroll progress to horizontal movement (desktop only)
  const xPosition = useTransform(scrollYProgress, [0, 1], ["0vh", "-122vh"])

  return (
    <>
      {/* Desktop Version - Horizontal Scroll */}
      <section
        ref={sectionRef}
        className='hidden xl:block bg-black relative h-[300vh] flex flex-col'
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
              className='h-[70vh] w-[60vh] p-16 bg-[#212121] text-white border-none rounded-xl flex flex-col gap-3'
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

      {/* Mobile/Tablet Version - Vertical Stack */}
      <section className='xl:hidden bg-black text-white py-12 sm:py-16 md:py-20 lg:py-24'>
        <div className='container mx-auto px-4 sm:px-6 md:px-8 lg:px-12'>
          
          {/* Title Section */}
          <motion.div
            ref={titleRef}
            variants={titleVariants}
            initial="hidden"
            animate={isTitleInView ? "visible" : "hidden"}
            className='text-center mb-12 sm:mb-16 md:mb-20'
          >
            <span className='inline-block text-orange font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4'>
              <AngularBracket />
            </span>
            <h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight'>
              We are
              <br />
              GDG VIT
            </h2>
          </motion.div>

          {/* Cards Container */}
          <div className='space-y-8 sm:space-y-12 md:space-y-16'>
            
            {/* Card 1 */}
            <motion.div
              ref={mobileCard1Ref}
              variants={cardVariants}
              initial="hidden"
              animate={isMobileCard1InView ? "visible" : "hidden"}
              className='bg-[#212121] p-6 sm:p-8 md:p-10 lg:p-12 rounded-xl'
            >
              <p className='text-gray-300 text-base sm:text-lg md:text-xl font-medium leading-relaxed'>
                We believe in thinking beyond the conventional. A club&apos;s resources shouldn&apos;t just be directed toward organizing events, but also towards fostering a culture of continuous learning and collaborative growth. With that in mind, we host flagship events like <span className="text-blue-400">Hackbuild, Capture the Flag (CTF), and Competitive Programming under Spectrum</span>, along with a wide range of insightful workshops.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              ref={mobileCard2Ref}
              variants={cardVariants}
              initial="hidden"
              animate={isMobileCard2InView ? "visible" : "hidden"}
              className='bg-[#212121] p-6 sm:p-8 md:p-10 lg:p-12 rounded-xl'
            >
              <h3 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6'>Our Story</h3>
              <p className='text-gray-300 text-base sm:text-lg md:text-xl font-medium leading-relaxed'>
                Started in 2021 as Google Developer Student Clubs (GDSC), the club transitioned to GDG on Campus in 2024. It&apos;s been an incredible 5-year journey of innovation, collaboration, and growth — a community proudly powered by <span className="text-green-400">GoogleForDevs</span>. Over the years, we&apos;ve empowered countless students to build & learn.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              ref={mobileCard3Ref}
              variants={cardVariants}
              initial="hidden"
              animate={isMobileCard3InView ? "visible" : "hidden"}
              className='bg-[#212121] p-6 sm:p-8 md:p-10 lg:p-12 rounded-xl'
            >
              <h3 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6'>Join Us</h3>
              <p className='text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg md:text-xl font-medium leading-relaxed'>
                Get involved in our upcoming events and connect with fellow developers.
              </p>
              
              <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-8'>
                {/* Bars */}
                <motion.div
                  ref={mobileQuizOptionsRef}
                  className='space-y-3 font-medium text-sm sm:text-base md:text-lg flex-1'
                >
                  <motion.div
                    custom={0}
                    variants={quizOptionVariants}
                    initial="hidden"
                    animate={isMobileQuizOptionsInView ? "visible" : "hidden"}
                    className='bg-[#EA4335] text-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg w-full sm:w-3/4'
                  >
                    Innovate
                  </motion.div>
                  <motion.div
                    custom={1}
                    variants={quizOptionVariants}
                    initial="hidden"
                    animate={isMobileQuizOptionsInView ? "visible" : "hidden"}
                    className='bg-[#FBBC04] text-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg w-full sm:w-3/4'
                  >
                    Collaborate 
                  </motion.div>
                  <motion.div
                    custom={2}
                    variants={quizOptionVariants}
                    initial="hidden"
                    animate={isMobileQuizOptionsInView ? "visible" : "hidden"}
                    className='bg-[#0F9D58] text-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg w-full sm:w-3/4'
                  >
                    Create 
                  </motion.div>
                </motion.div>

                {/* GIF Badge */}
                <div className='flex justify-center sm:justify-end flex-shrink-0'>
                  <Image
                    src='/globe.gif'
                    alt='Animated Globe'
                    width={160}
                    height={133}
                    className='sm:w-48 sm:h-40 md:w-56 md:h-48 lg:w-60 lg:h-50'
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FeaturesSection