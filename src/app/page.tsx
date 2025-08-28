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
    // Scroll behavior on page load/reload
    const scrollToTop = () => {
      // Check if it's a mobile device (screen width less than 768px)
      const isMobile = window.innerWidth < 768;
      
      if (isMobile) {
        // Mobile: scroll to absolute top of page
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        // Desktop: original working behavior - just scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    // Small delay to ensure page is fully loaded
    const timer = setTimeout(scrollToTop, 100);
    
    return () => clearTimeout(timer);
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
