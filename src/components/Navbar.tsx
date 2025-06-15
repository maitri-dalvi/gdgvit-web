'use client';

import Link from 'next/link';
import {
  FaXTwitter,
  // FaMedium,
  FaGithub,
  FaInstagram,
  FaYoutube,
  FaGoogle,
  FaLinkedinIn,
} from 'react-icons/fa6';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > window.innerHeight - 100); 
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);


  const navItems = [
    { label: 'Spectrum', href: 'https://spectrum-2025.vercel.app/', external: true },
    { label: 'Gallery', href: '/gallery', external: false },
    { label: 'Team', href: '/team', external: false },
    { label: 'Connect', href: 'https://chat.whatsapp.com/GTP2ydK7MyXFBRwf8vnrNW', external: true },
    { label: 'Join Us', href: '/interviews', external: false },
  ];

  const socialIcons = [
    {
      icon: <FaGoogle size={26} />,
      href: 'https://gdg.community.dev/gdg-on-campus-vidyalankar-institute-of-technology-mumbai-india/',
    },
    { icon: <FaGithub size={26} />, href: 'https://github.com/GDGVITM' },
    { icon: <FaXTwitter size={26} />, href: 'https://x.com/gdgvit' },
    // { icon: <FaMedium size={26} />, href: 'https://medium.com/@gdgvit' },
    { icon: <FaYoutube size={26} />, href: 'http://www.youtube.com/@gdscvitmumbai5838' },
    { icon: <FaLinkedinIn size={26} />, href: 'https://www.linkedin.com/company/google-developer-groups-vit-mumbai' },
    { icon: <FaInstagram size={26} />, href: 'https://www.instagram.com/gdg_vit/' },
  ];

  return (
    <nav
      className={`w-full top-0 sticky z-50 pt-1 px-4 md:px-8 lg:px-16 transition-all duration-300 ${
  scrolled ? 'bg-[#FDFAF5] shadow-md' : 'bg-transparent'
}`}
    >
      <div className="relative container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <Link
          href="/"
          className="flex-shrink-0 text-purple-800 font-extrabold text-3xl tracking-tight"
        >
          gdg_vit
        </Link>

        {/* Center: Nav Items */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center gap-6">
          {navItems.map(({ label, href, external }) =>
            external ? (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-700 text-md font-medium hover:underline underline-offset-4 transition-all"
              >
                {label}
              </a>
            ) : (
              <Link
                key={label}
                href={href}
                className="text-purple-700 text-md font-medium hover:underline underline-offset-4 transition-all"
              >
                {label}
              </Link>
            )
          )}
        </div>

        {/* Right: Social Icons */}
        <div className="flex items-center gap-4">
          {socialIcons.map(({ icon, href }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-800 hover:text-purple-500 transition-colors"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
