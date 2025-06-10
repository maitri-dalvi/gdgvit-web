import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import CommunityVoices from "@/components/CommunityVoices";
import TimelineSection from "@/components/TimelineSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
    <div className='min-h-screen relative z-10 '>
      <Navbar />
      <Hero />
      <TimelineSection />
      <CommunityVoices />
      <Footer />
    </div>
    </>
  );
}
