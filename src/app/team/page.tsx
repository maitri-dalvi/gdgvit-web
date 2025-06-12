'use client';

import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

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
    description:
      'Passionate about growing developer communities and helping students build real-world skills.helping students build real-world skills.helping students build real-world skills.',
    image: '/team/maitri.png',
    socials: {
      github: 'https://github.com/maitri-dalvi',
      linkedin: 'https://linkedin.com/in/maitridalvi13',
    },
  },
  {
    name: 'Sameer Shelar',
    role: 'Associate Lead',
    description:
      'Passionate about growing developer communities and helping students build real-world skills.helping students build real-world skills.helping students build real-world skills.',
    image: '/team/sameer.png',
    socials: {
      linkedin: 'https://linkedin.com/in/sameer-shelar-72a750267',
      github: 'https://github.com/shelarsameer',

    },
  },
  {
    name: 'Shweta Behera',
    role: 'Technical Lead',
    description:
      'Passionate about growing developer communities and helping students build real-world skills.helping students build real-world skills.helping students build real-world skills.',
    image: '/team/shweta.png',
    socials: {
      linkedin: 'https://www.linkedin.com/in/shweta-behera/',
      github: 'https://github.com/shwet46',
    },
  },
  {
    name: 'Om Badade',
    role: 'Technical Lead',
    description:
      'Passionate about growing developer communities and helping students build real-world skills.helping students build real-world skills.helping students build real-world skills.',
    image: '/team/om.png',
    socials: {
      linkedin: 'https://www.linkedin.com/in/ombadade234/',
      instagram: 'https://www.instagram.com/ombadade/',
    },
  },
  {
    name: 'Rashmi Sahu',
    role: 'Events & Outreach Lead',
    description:
      'Passionate about growing developer communities and helping students build real-world skills.helping students build real-world skills.helping students build real-world skills.',
    image: '/team/rashmi.png',
    socials: {
      linkedin: 'https://www.linkedin.com/in/rashmi-sahu-69269b257',
      instagram: 'https://www.instagram.com/rushtricted',
    },
  },
  {
    name: 'Bhumi Padaya',
    role: 'Events & Outreach Lead',
    description:
      'Passionate about growing developer communities and helping students build real-world skills.helping students build real-world skills.helping students build real-world skills.',
    image: '/team/bhumi.png',
    socials: {
      linkedin: 'https://www.linkedin.com/in/bhumi-padaya-706596316',
      instagram: 'https://www.instagram.com/bhumi_padaya/',
    },
  },
  {
    name: 'Samarth Bhandavale',
    role: 'Design Lead',
    description:
      'Passionate about growing developer communities and helping students build real-world skills.helping students build real-world skills.helping students build real-world skills.',
    image: '/team/samarth.png',
    socials: {
      linkedin: 'https://www.linkedin.com/in/samarth-bhandavale/',
      github: 'https://github.com/sambhandavale',
    },
  },
  {
    name: 'Tanay Bhirud',
    role: 'Design Lead',
    description:
      'Passionate about growing developer communities and helping students build real-world skills.helping students build real-world skills.helping students build real-world skills.',
    image: '/team/tanay.png',
    socials: {
      linkedin: 'https://www.linkedin.com/in/tanay-bhirud/',
      instagram: 'https://www.instagram.com/tanay_bhirud1204/',
    },
  },
  {
    name: 'Apurva Ghare',
    role: 'Media Creation Lead',
    description:
      'Passionate about growing developer communities and helping students build real-world skills.helping students build real-world skills.helping students build real-world skills.',
    image: '/team/apurva.png',
    socials: {
      linkedin: 'https://linkedin.com/in/',
      instagram: 'https://www.instagram.com/_apurvvva._/',
    },
  },
  {
    name: 'Niranjan Jadhav',
    role: 'Finance & Sponsorship Lead',
    description:
      'Passionate about growing developer communities and helping students build real-world skills.helping students build real-world skills.helping students build real-world skills.',
    image: '/team/niranjan.png',
    socials: {
      linkedin: 'https://www.linkedin.com/in/niranjanjadhav1106/',
      instagram: 'https://www.instagram.com/niranjan_1106/',
    },
  },
];

// dummy colors
const bgColors: string[] = [
  '#deffff', // turquoise
  '#deffff',
  '#E6F0FF', // blue
  '#E6F0FF',
  '#FFE6E6', // red
  '#FFE6E6',
  '#fff9e6', // yellow
  '#fff9e6',
  '#ebffde', // green
  '#ebffde', // green
];

const Team = () => {
  return (
    <>
      <Navbar />
      <section className="px-4 mt-4 mb-15 flex justify-center">
        <div className="max-w-4xl w-full space-y-9 p-5">
          {team.map((member, index) => (
            <React.Fragment key={`${member.name}-${index}`}>
              <div
                className={`flex flex-col md:flex-row ${
                  index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                } items-center rounded-xl shadow-md py-4 md:py-6 px-4 md:px-8 gap-6 md:gap-10 min-h-64 md:min-h-72`}
                style={{ backgroundColor: bgColors[index] }}
              >
                {/* Image */}
                <div className="w-full md:w-1/3">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-auto aspect-square object-cover rounded-xl"
                  />
                </div>

                {/* Info */}
                <div className="w-full md:w-2/3 px-4 md:px-6 flex flex-col gap-2 text-center md:text-left">
                  <h2 className="text-xl font-black">{member.name}</h2>
                  <p className="text-gray-600 font-semibold">{member.role}</p>
                  <p className="text-gray-700">{member.description}</p>
                  <div className="flex justify-center md:justify-start gap-3 pt-3">
                    {member.socials.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        className="text-blue-700 hover:text-blue-800"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.socials.github && (
                      <a
                        href={member.socials.github}
                        target="_blank"
                        className="text-gray-700 hover:text-black"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {member.socials.instagram && (
                      <a
                        href={member.socials.instagram}
                        target="_blank"
                        className="text-pink-500 hover:text-pink-700"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* See more peeps */}
              {index === team.length - 1 && (
                <div className="text-center pt-4">
                  <Link
                    href="/core"
                    className="text-purple-600 hover:text-purple-800 underline font-bold text-lg"
                  >
                    See more cool peeps :)
                  </Link>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Team;
