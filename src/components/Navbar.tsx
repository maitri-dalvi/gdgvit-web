'use client';

import Link from 'next/link';
import {
  // FaXTwitter,
  FaGithub,
  FaInstagram,
  // FaYoutube,
  FaGoogle,
  FaLinkedinIn,
  FaBars,
  FaWhatsapp,
} from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';

import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: 'Spectrum', href: 'https://spectrum.gdgvitm.tech/', external: true },
    { label: 'Gallery', href: '/gallery', external: false },
    { label: 'Team', href: '/team', external: false },
    // { label: 'Connect', href: 'https://chat.whatsapp.com/GTP2ydK7MyXFBRwf8vnrNW', external: true },
    { label: 'Join Us', href: '/join-us', external: false },
  ];

  const socialIcons = [
    {
      icon: <FaGoogle size={26} />,
      href: 'https://gdg.community.dev/gdg-on-campus-vidyalankar-institute-of-technology-mumbai-india/',
    },
    { icon: <FaGithub size={26} />, href: 'https://github.com/GDGVITM' },
    // { icon: <FaXTwitter size={26} />, href: 'https://x.com/gdgvit' },
    // { icon: <FaYoutube size={26} />, href: 'http://www.youtube.com/@gdscvitmumbai5838' },
    { icon: <FaLinkedinIn size={26} />, href: 'https://www.linkedin.com/company/google-developer-groups-vit-mumbai'},
    { icon: <FaWhatsapp size={26} />, href: 'https://chat.whatsapp.com/GTP2ydK7MyXFBRwf8vnrNW' },
    { icon: <FaInstagram size={26} />, href: 'https://www.instagram.com/gdg_vit/' },
  ];

  return (
    <nav className="w-full top-0 sticky z-50 px-4 md:px-8 lg:px-16 bg-[#FDFAF5] shadow-md transition-all duration-300">
      <div className="relative container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <Link
          href="/"
          className="flex-shrink-0 text-purple-800 font-extrabold text-3xl tracking-tight"
        >
          gdg_vit
        </Link>

        {/* Mobile: Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-purple-800">
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Center: Nav Items - Desktop */}
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
        <div className="hidden md:flex items-center gap-4">
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

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 bg-[#FDFAF5] shadow-md space-y-3">
          {navItems.map(({ label, href, external }) =>
            external ? (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-purple-700 text-md font-medium"
              >
                {label}
              </a>
            ) : (
              <Link
                key={label}
                href={href}
                className="block text-purple-700 text-md font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            )
          )}

          {/* Social Icons for Mobile */}
          <div className="flex items-center gap-4 pt-2">
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
      )}
    </nav>
  );
};

export default Navbar;
