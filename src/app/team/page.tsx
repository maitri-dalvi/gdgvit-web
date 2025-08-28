'use client';

import { Github, Linkedin, Instagram } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

type TeamMembers = {
  name: string;
  role: string;
  description: string;
  image: string;
  socials: {
    github?: string;
    linkedin?: string;
    instagram?: string;
  };
};

const team: TeamMembers[] = [
  {
    name: 'Maitri Dalvi',
    role: 'Community Organiser',
    description: 'Driving impactful initiatives and fostering collaboration within developer communities.',
    image: '/team/maitri.png',
    socials: {
      linkedin: 'https://linkedin.com/in/maitridalvi13',
      github: 'https://github.com/maitri-dalvi',
    },
  },
  {
    name: 'Sameer Shelar',
    role: 'Associate Lead',
    description: 'Passionate about exploring ideas and contributing to impactful community initiatives.',
    image: '/team/sameer.png',
    socials: {
      linkedin: 'https://linkedin.com/in/sameer-shelar-72a750267',
      instagram: 'https://www.instagram.com/sameershelarr/',
      github: 'https://github.com/shelarsameer',
    },
  },
  {
    name: 'Shweta Behera',
    role: 'Technical Lead',
    description: 'Building innovative solutions and mentoring developers to grow their skills in tech.',
    image: '/team/shweta.png',
    socials: {
      linkedin: 'https://www.linkedin.com/in/shweta-behera/',
      github: 'https://github.com/shwet46',
    },
  },
  {
    name: 'Om Badade',
    role: 'Technical Lead',
    description: 'Passionate about exploring new technologies and driving impactful technical initiatives.',
    image: '/team/om.png',
    socials: {
      linkedin: 'https://www.linkedin.com/in/ombadade234/',
      instagram: 'https://www.instagram.com/ombadade/',
    },
  },
  {
    name: 'Rashmi Sahu',
    role: 'Events & Outreach Lead',
    description: 'Focused on building strong networks, representing GDG through public speaking.',
    image: '/team/rashmi.png',
    socials: {
      linkedin: 'https://www.linkedin.com/in/rashmi-sahu-69269b257',
      instagram: 'https://www.instagram.com/rushtricted',
    },
  },
  {
    name: 'Bhumi Padaya',
    role: 'Events & Outreach Lead',
    description: 'Crafting engaging experiences that empower developers through impactful events.',
    image: '/team/bhumi.png',
    socials: {
      linkedin: 'https://www.linkedin.com/in/bhumi-padaya-706596316',
      instagram: 'https://www.instagram.com/bhumi_padaya/',
    },
  },
  {
    name: 'Samarth Bhandavale',
    role: 'Design Lead',
    description: 'Crafting intuitive designs that enhance experiences and inspire creativity, a.k.a. Figma Wizard',
    image: '/team/samarth.png',
    socials: {
      linkedin: 'https://www.linkedin.com/in/samarth-bhandavale/',
      instagram: 'https://www.instagram.com/sam_bhandavale/',
      github: 'https://github.com/sambhandavale',
    },
  },
  {
    name: 'Tanay Bhirud',
    role: 'Design Lead',
    description: 'Bringing ideas to life through creative visuals that inspire and engage audiences.',
    image: '/team/tanay.png',
    socials: {
      linkedin: 'https://www.linkedin.com/in/tanay-bhirud/',
      instagram: 'https://www.instagram.com/tanay_bhirud1204/',
    },
  },
  {
    name: 'Apurva Ghare',
    role: 'Media Lead',
    description: 'Showcasing the GDG story through creative, engaging media and impactful content.',
    image: '/team/apurva.png',
    socials: {
      linkedin: 'https://www.linkedin.com/in/apurva-ghare-7bb94029a',
      instagram: 'https://www.instagram.com/_apurvvva._/',
    },
  },
  {
    name: 'Niranjan Jadhav',
    role: 'Finance & Sponsorship Lead',
    description: 'Dedicated to managing resources effectively to support impactful community initiatives.',
    image: '/team/niranjan.png',
    socials: {
      linkedin: 'https://www.linkedin.com/in/niranjanjadhav1106/',
      instagram: 'https://www.instagram.com/niranjan_1106/',
    },
  },
  
];

// Polaroid rotation angles for variety
const rotations = [2, -1, 3, -2, 1, -3, 2, -1, 3, -2];

export default function Team() {
  return (
    <>
      <Navbar />
      <section className="px-4 py-12 pb-12 sm:pb-16 md:pb-25 min-h-screen overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Meet The Leads
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-2">
              The amazing people behind our community <i className="fa-regular fa-heart text-sm"></i>
            </p>
          </motion.div>

          {/* Polaroid Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-12 justify-items-center max-w-full">
  {team.map((member, index) => (
    <motion.div
      key={index}
      className="polaroid-card"
      style={{
        transform: `rotate(${rotations[index]}deg)`,
      }}
      initial={{
        opacity: 0,
        y: 50,
        rotate: rotations[index] - 10,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotate: rotations[index],
      }}
      whileHover={{
        scale: 1.05,
        rotate: 0,
        zIndex: 10,
        transition: { duration: 0.3 },
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: index * 0.1,
      }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Polaroid Frame */}
      <div className="bg-white p-3 sm:p-4 pb-8 sm:pb-10 shadow-2xl border border-gray-200 w-full max-w-[280px] sm:max-w-xs">
        <div className="relative aspect-square w-full mb-4 bg-gray-100">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover"
            sizes="300px"
          />
        </div>
        <div className="text-center space-y-2">
          <h3 className="text-base sm:text-lg font-bold text-gray-800">
            {member.name}
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 font-medium">
            {member.role}
          </p>
          <p className="text-xs text-gray-500 leading-relaxed px-1 sm:px-2">
            {member.description}
          </p>
          <div className="flex justify-center gap-3 pt-3">
            {member.socials.linkedin && (
              <motion.a
                href={member.socials.linkedin}
                target="_blank"
                className="text-blue-600"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-4 h-4" />
              </motion.a>
            )}
            {member.socials.github && (
              <motion.a
                href={member.socials.github}
                target="_blank"
                className="text-gray-700"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-4 h-4" />
              </motion.a>
            )}
            {member.socials.instagram && (
              <motion.a
                href={member.socials.instagram}
                target="_blank"
                className="text-pink-500"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="w-4 h-4" />
              </motion.a>
            )}
          </div>
        </div>
      </div>
      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-yellow-100 opacity-80 rotate-12 shadow-sm border border-yellow-200" />
    </motion.div>
  ))}

{/* "See more" card as part of grid - Mobile responsive */}
<motion.div
  className="polaroid-card relative self-center cursor-pointer w-full max-w-[280px] sm:max-w-xs lg:ml-76"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  viewport={{ once: true }}
>
  <Link href="/core" className="block w-full h-full">
    <div className="bg-white p-4 sm:p-6 md:p-8 shadow-xl border border-gray-200 transform rotate-1 w-full h-auto min-h-[160px] sm:min-h-[180px] md:w-93 md:h-45 flex flex-col justify-center items-center text-center hover:scale-[1.03] transition-transform duration-300 hover:shadow-lg relative">
      {/* Tape effect */}
      <div className="absolute -top-2 -right-2 w-10 sm:w-12 h-5 sm:h-6 bg-yellow-100 opacity-80 -rotate-45 shadow-sm border border-yellow-200" />

      <h2 className="text-purple-600 font-bold text-lg sm:text-xl md:text-2xl">
        📸 See more cool peeps!
      </h2>
      <p className="text-xs sm:text-sm md:text-base text-gray-500 mt-2 px-2">
        *Click to discover more amazing team members*
      </p>
    </div>
  </Link>
</motion.div>
</div>
        </div>

      </section>

      {/* Custom CSS for polaroid effects */}
      <style jsx>{`
        .polaroid-card {
          position: relative;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .polaroid-card:hover {
          filter: brightness(1.05) contrast(1.05);
        }
        
        /* Add some scattered polaroid effect */
        .polaroid-card:nth-child(odd) {
          margin-top: 1rem;
        }
        
        .polaroid-card:nth-child(even) {
          margin-bottom: 1rem;
        }
        
        /* Subtle shadow animation */
        .polaroid-card {
          filter: drop-shadow(8px 8px 12px rgba(0,0,0,0.15));
        }
        
        .polaroid-card:hover {
          filter: drop-shadow(12px 12px 20px rgba(0,0,0,0.25));
        }
      `}</style>
      
      <Footer />
    </>
  );
}