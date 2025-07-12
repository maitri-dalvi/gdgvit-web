import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import FAQSection from "@/components/FAQSection";
import TimelineSection from "@/components/TimelineSection";
import Footer from "@/components/Footer";
import FeaturesSection from "@/components/FeaturesSection";
import Moments from "@/components/Moments";
// import MobileWarningModal from "@/components/MobileWarningModal"; 

export default function Home() {
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
