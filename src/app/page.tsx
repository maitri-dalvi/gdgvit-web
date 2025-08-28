"use client";

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import FAQSection from "@/components/FAQSection";
import TimelineSection from "@/components/TimelineSection";
import Footer from "@/components/Footer";
import FeaturesSection from "@/components/FeaturesSection";
import Moments from "@/components/Moments";
import { useEffect, useRef } from "react";
// import MobileWarningModal from "@/components/MobileWarningModal"; 

export default function Home() {
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to top navbar on page load/reload
    if (navbarRef.current) {
      navbarRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <>
      <div className="min-h-screen relative">
        <div ref={navbarRef}>
          <Navbar />
        </div>
        {/* <MobileWarningModal />  */}
        <Hero />
        <FeaturesSection />
        <TimelineSection />
        <Moments />
        <FAQSection />
        <Footer />
      </div>
    </>
  );
}
