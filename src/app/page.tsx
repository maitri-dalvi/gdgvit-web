"use client";

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import FAQSection from "@/components/FAQSection";
import TimelineSection from "@/components/TimelineSection";
import Footer from "@/components/Footer";
import FeaturesSection from "@/components/FeaturesSection";
import Moments from "@/components/Moments";
import { useEffect } from "react";
// import MobileWarningModal from "@/components/MobileWarningModal"; 

export default function Home() {
  useEffect(() => {
    // Scroll to top navbar on page load/reload
    const navbar = document.getElementById('navbar');
    if (navbar) {
      navbar.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <>
      <div className="min-h-screen relative">
        <Navbar />
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
