"use client";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import TeamCardForGrid from "@/components/TeamCardForGrid";
import team_members_convenors from "@/app/content/team_members_convenors.json";
import team_members_technical from "@/app/content/team_members_technical.json";
import team_members_design from "@/app/content/team_members_design.json";
import team_members_events from "@/app/content/team_members_events.json";
import team_members_media from "@/app/content/team_members_media.json";
import team_members_finance from "@/app/content/team_members_finance.json";
import Footer from "@/components/Footer";
import {
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

export default function Team() {
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const [curTab, setCurTab] = useState("Convenors");
  const [hideLeftPanel, setHideLeftPanel] = useState(false);

  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", () => {});

  const scrollOptions = (section: string) => {
    const sectionElement = document.querySelector(`#${section}`);
    if (sectionElement) {
      sectionElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleIntersection: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          setCurTab(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: "-20% 0px -20% 0px",
      threshold: [0.3, 0.5, 0.7],
    });

    const sections = [
      "Convenors",
      "Technical",
      "Design",
      "Events",
      "Media",
      "Finance",
    ];

    const observeSections = () => {
      sections.forEach((section) => {
        const sectionElement = document.querySelector(`#${section}`);
        if (sectionElement) {
          observer.observe(sectionElement);
        }
      });
    };

    const timeoutId = setTimeout(observeSections, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHideLeftPanel(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />

      <main className="min-h-screen flex flex-col">
        {/* Mobile Header - Only visible on mobile */}
        <div className="lg:hidden px-4 py-8">
          <h1 className="font-extrabold text-black uppercase text-4xl sm:text-5xl text-center">
            Meet The Team
          </h1>
        </div>

        <div className="flex">
          {/* Fixed Left Panel - Desktop Only */}
          <div
            ref={leftPanelRef}
            className={`hidden lg:flex lg:w-1/3 xl:w-1/4 p-10 flex-col justify-center transition-opacity duration-300 fixed top-0 left-0 h-screen z-10 ${
              hideLeftPanel ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <div className="sticky top-1/2 -translate-y-1/2">
              <h1 className="font-extrabold text-black uppercase text-5xl xl:text-6xl">
                Meet The Team
              </h1>

              <div className="flex flex-col gap-4 mt-8">
                {["Convenors", "Technical", "Design", "Events", "Media", "Finance"].map(
                  (id) => {
                    const color =
                      id === "Convenors"
                        ? "text-orange-500"
                        : id === "Technical"
                        ? "text-blue-400"
                        : id === "Design"
                        ? "text-yellow-500"
                        : id === "Events"
                        ? "text-red-500"
                        : id === "Media"
                        ? "text-emerald-400"
                        : "text-lime-500";
                    return (
                      <p
                        key={id}
                        onClick={() => scrollOptions(id)}
                        className={`w-fit cursor-pointer transition-colors ${
                          curTab === id
                            ? `${color} underline underline-offset-4`
                            : `text-gray-500 hover:${color}`
                        }`}
                      >
                        {id === "Events" ? "Events & Outreach" : id === "Finance" ? "Finance & Sponsorship" : id}
                      </p>
                    );
                  }
                )}
              </div>
            </div>
          </div>

          {/* Scrollable Cards Container */}
          <div
            ref={cardsContainerRef}
            className="flex-1 lg:ml-[33.333333%] xl:ml-[25%]"
          >
            <div className="p-4 sm:p-6 lg:p-10">
              <div className="lg:grid lg:col-span-12 lg:mt-16 lg:text-white lg:xl:col-span-8 lg:lg:col-span-8 lg:md:col-span-9 lg:sm:mt-0">
                {[{
                  id: "Convenors",
                  data: team_members_convenors,
                },
                {
                  id: "Technical",
                  data: team_members_technical,
                },
                {
                  id: "Design",
                  data: team_members_design,
                },
                {
                  id: "Events",
                  data: team_members_events,
                },
                {
                  id: "Media",
                  data: team_members_media,
                },
                {
                  id: "Finance",
                  data: team_members_finance,
                }].map(({ id, data }) => (
                  <div key={id} className="mb-16 lg:mb-0">
                    {/* Mobile Section Header */}
                    <div className="lg:hidden flex justify-center mb-8">
                      <h2 className="font-extrabold text-purple-800 uppercase text-3xl sm:text-4xl text-center">
                        {id === "Events" ? "Events & Outreach" : id === "Finance" ? "Finance & Sponsorship" : id}
                      </h2>
                    </div>
                    
                    {/* Desktop Layout */}
                    <div className="hidden lg:grid lg:grid-cols-3 xl:grid-cols-3">
                      <div id={id} className="lg:flex lg:py-0 py-24">
                        <h2 className="font-extrabold text-purple-800 m-auto uppercase text-3xl xl:text-4xl">
                          {id === "Events" ? "Events & Outreach" : id === "Finance" ? "Finance & Sponsorship" : id}
                        </h2>
                      </div>
                      {data.map((mem, i) => (
                        <TeamCardForGrid
                          i={i}
                          key={"mem" + i}
                          title={mem.name}
                          img={mem.img}
                          subtitle={mem.position}
                          github={mem.github}
                          linkedin={mem.linkedin}
                        />
                      ))}
                    </div>
                    
                    {/* Mobile Cards Grid */}
                    <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
                      <div id={id} className="lg:hidden"></div>
                      {data.map((mem, i) => (
                        <TeamCardForGrid
                          i={i}
                          key={"mem" + i}
                          title={mem.name}
                          img={mem.img}
                          subtitle={mem.position}
                          github={mem.github}
                          linkedin={mem.linkedin}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <div ref={footerRef}>
        <Footer />
      </div>
    </>
  );
}