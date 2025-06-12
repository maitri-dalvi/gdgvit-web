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

const baseMember: TeamMember = {
  name: 'Maitri Dalvi',
  role: 'Community Lead',
  description:
    'Passionate about growing developer communities and helping students build real-world skills.',
  image: '/team/maitri.jpg',
  socials: {
    github: 'https://github.com/maitridalvi',
    linkedin: 'https://linkedin.com/in/maitridalvi',
    instagram: 'https://instagram.com/maitridalvi',
  },
};

const team: TeamMember[] = Array(10).fill(baseMember);

const Team = () => {
  return (
    <>
      <Navbar />
      <section className="px-4 mt-5 mb-15 flex justify-center">
        <div className="max-w-4xl w-full space-y-9">
          {team.map((member, index) => (
            <React.Fragment key={`${member.name}-${index}`}>
              <div
                className={`flex flex-col md:flex-row ${
                  index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                } items-center bg-white rounded-xl shadow-md p-6 gap-6 min-h-64 md:min-h-72`}
              >
                {/* Image */}
                <div className="w-full md:w-1/3 flex justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-58 h-58 object-cover rounded-xl"
                  />
                </div>

                {/* Info */}
                <div className="w-full md:w-2/3 space-y-3 text-center md:text-left">
                  <h2 className="text-xl font-bold">{member.name}</h2>
                  <p className="text-gray-600 font-medium">{member.role}</p>
                  <p className="text-gray-700">{member.description}</p>
                  <div className="flex justify-center md:justify-start gap-4 pt-2">
                    {member.socials.github && (
                      <a
                        href={member.socials.github}
                        target="_blank"
                        className="text-gray-700 hover:text-black"
                      >
                        <FaGithub className="w-5 h-5" />
                      </a>
                    )}
                    {member.socials.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <FaLinkedin className="w-5 h-5" />
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
