'use client';
import {
  FaXTwitter,
  FaGithub,
  FaInstagram,
  FaYoutube,
  FaMedium,
  FaGoogle,
  FaLinkedinIn,
} from 'react-icons/fa6';

const Navbar = () => {
  const navItems = [
    {
      label: 'Spectrum',
      href: 'https://spectrum-2025.vercel.app/',
      external: true,
    },
    {
      label: 'Gallery',
      href: '/gallery',
      external: false,
    },
    {
      label: 'Team',
      href: '/team',
      external: false,
    },
    {
      label: 'Join Us',
      href: 'https://chat.whatsapp.com/GTP2ydK7MyXFBRwf8vnrNW',
      external: true,
    },
  ];

  const socialIcons = [
    { icon: <FaGithub size={26} />, href: 'https://github.com/GDGVITM' },
    {
      icon: <FaGoogle size={26} />,
      href:
        'https://gdg.community.dev/gdg-on-campus-vidyalankar-institute-of-technology-mumbai-india/',
    },
    { icon: <FaXTwitter size={26} />, href: 'https://x.com/gdgvit' },
    { icon: <FaMedium size={26} />, href: 'https://medium.com/@gdgvit' },
    {
      icon: <FaYoutube size={26} />,
      href: 'http://www.youtube.com/@gdscvitmumbai5838',
    },
    {
      icon: <FaLinkedinIn size={26} />,
      href: 'https://www.linkedin.com/company/google-developer-groups-vit-mumbai',
    },
    { icon: <FaInstagram size={26} />, href: 'https://www.instagram.com/gdg_vit/' },
  ];

  return (
    <nav className="w-full top-0 z-50 pt-1 px-4 md:px-8 lg:px-16">
      <div className="relative container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <a
          href="/"
          className="flex-shrink-0 text-purple-800 font-extrabold text-3xl tracking-tight"
        >
          gdg_vit
        </a>

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
              <a
                key={label}
                href={href}
                className="text-purple-700 text-md font-medium hover:underline underline-offset-4 transition-all"
              >
                {label}
              </a>
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
