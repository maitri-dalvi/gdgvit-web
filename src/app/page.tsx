import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import CommunityVoices from "@/components/CommunityVoices";
import TimelineSection from "@/components/TimelineSection";
import Footer from "@/components/Footer";
import FeaturesSection from "@/components/FeaturesSection";
import Moments from "@/components/Moments";

export default function Home() {
  return (
    <>
    <div className='min-h-screen relative '>
      <Navbar />
      <Hero />
      <FeaturesSection />
      <TimelineSection />
      <Moments />
      <CommunityVoices />
      <Footer />
    </div>
    </>
  );
}
