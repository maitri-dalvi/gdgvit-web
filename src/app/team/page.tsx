'use client';

import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa6';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

type TeamMember = {
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

const team: TeamMember[] = [
  //dummy data
  {
    name: 'Maitri Dalvi',
    role: 'Community Lead',
    description:
      'Passionate about growing developer communities and helping students build real-world skills.helping students build real-world skills.helping students build real-world skills.',
    image: '/team/maitri.jpg',
    socials: {
      github: 'https://github.com/maitridalvi',
      linkedin: 'https://linkedin.com/in/maitridalvi',
      instagram: 'https://instagram.com/maitridalvi',
    },
  },
  {
    name: 'Arjun Verma',
    role: 'Tech Evangelist',
    description:
'Passionate about growing developer communities and helping students build real-world skills.helping students build real-world skills.helping students build real-world skills.',    image: '/team/maitri.jpg',
    socials: {
      github: 'https://github.com/arjunverma',
      linkedin: 'https://linkedin.com/in/arjunverma',
    },
  },
  {
    name: 'Sara Khan',
    role: 'Product Designer',
    description:
'Passionate about growing developer communities and helping students build real-world skills.helping students build real-world skills.helping students build real-world skills.',    image: '/team/maitri.jpg',
    socials: {
      linkedin: 'https://linkedin.com/in/sarakhan',
      instagram: 'https://instagram.com/sarakhan',
    },
  },
  {
    name: 'Ravi Singh',
    role: 'Full Stack Developer',
    description:
'Passionate about growing developer communities and helping students build real-world skills.helping students build real-world skills.helping students build real-world skills.',    image: '/team/maitri.jpg',
    socials: {
      github: 'https://github.com/ravisingh',
      linkedin: 'https://linkedin.com/in/ravisingh',
    },
  },
  {
    name: 'Ayesha Patel',
    role: 'AI/ML Researcher',
    description:
'Passionate about growing developer communities and helping students build real-world skills.helping students build real-world skills.helping students build real-world skills.',    image: '/team/maitri.jpg',
    socials: {
      github: 'https://github.com/ayeshaml',
      linkedin: 'https://linkedin.com/in/ayeshaml',
    },
  },
  {
    name: 'Karan Desai',
    role: 'Backend Engineer',
    description:
'Passionate about growing developer communities and helping students build real-world skills.helping students build real-world skills.helping students build real-world skills.',    image: '/team/maitri.jpg',
    socials: {
      github: 'https://github.com/karandesai',
      linkedin: 'https://linkedin.com/in/karandesai',
    },
  },
  {
    name: 'Neha Sharma',
    role: 'Data Analyst',
    description:
'Passionate about growing developer communities and helping students build real-world skills.helping students build real-world skills.helping students build real-world skills.',    image: '/team/maitri.jpg',
    socials: {
      linkedin: 'https://linkedin.com/in/nehasharma',
    },
  },
  {
    name: 'Rohit Mehta',
    role: 'Mobile App Developer',
    description:
'Passionate about growing developer communities and helping students build real-world skills.helping students build real-world skills.helping students build real-world skills.',    image: '/team/maitri.jpg',
    socials: {
      github: 'https://github.com/rohitmehta',
      linkedin: 'https://linkedin.com/in/rohitmehta',
    },
  },
  {
    name: 'Sneha Joshi',
    role: 'Cloud Engineer',
    description:
'Passionate about growing developer communities and helping students build real-world skills.helping students build real-world skills.helping students build real-world skills.',    image: '/team/maitri.jpg',
    socials: {
      github: 'https://github.com/snehajoshi',
      linkedin: 'https://linkedin.com/in/snehajoshi',
    },
  },
  {
    name: 'Aman Tripathi',
    role: 'DevOps Engineer',
    description:
'Passionate about growing developer communities and helping students build real-world skills.helping students build real-world skills.helping students build real-world skills.',    image: '/team/maitri.jpg',
    socials: {
      github: 'https://github.com/amantripathi',
      linkedin: 'https://linkedin.com/in/amantripathi',
    },
  },
];

// dummy colors
const bgColors: string[] = [
  '#E0F7F7', // turquoise
  '#E0F7F7',
  '#E6F0FF', // blue
  '#E6F0FF',
  '#FFE6E6', // red
  '#FFE6E6',
  '#FFF9E6', // yellow
  '#FFF9E6',
  '#E6FFEA', // green
  '#F0FFE6', // lime
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
                  <h2 className="text-xl font-bold">{member.name}</h2>
                  <p className="text-gray-600 font-medium">{member.role}</p>
                  <p className="text-gray-700">{member.description}</p>
                  <div className="flex justify-center md:justify-start gap-4 pt-3">
                    {member.socials.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        className="text-blue-700 hover:text-blue-800"
                      >
                        <FaLinkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.socials.github && (
                      <a
                        href={member.socials.github}
                        target="_blank"
                        className="text-gray-700 hover:text-black"
                      >
                        <FaGithub className="w-5 h-5" />
                      </a>
                    )}
                    {member.socials.instagram && (
                      <a
                        href={member.socials.instagram}
                        target="_blank"
                        className="text-pink-500 hover:text-pink-700"
                      >
                        <FaInstagram className="w-5 h-5" />
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
