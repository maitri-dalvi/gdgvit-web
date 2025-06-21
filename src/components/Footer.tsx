"use client";
import { 
  FaXTwitter, FaGithub, FaInstagram, FaYoutube, FaMedium, 
  FaGoogle, FaLinkedinIn, FaStar 
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const socialIcons = [
    { icon: <FaGoogle size={28} />, href: 'https://gdg.community.dev/gdg-on-campus-vidyalankar-institute-of-technology-mumbai-india/' },
    { icon: <FaGithub size={28} />, href: 'https://github.com/GDGVITM' },
    { icon: <FaXTwitter size={28} />, href: 'https://x.com/gdgvit' },
    { icon: <FaMedium size={28} />, href: 'https://medium.com/@gdgvit' },
    { icon: <FaYoutube size={28} />, href: 'http://www.youtube.com/@gdscvitmumbai5838' },
    { icon: <FaLinkedinIn size={28} />, href: 'https://www.linkedin.com/company/google-developer-groups-vit-mumbai' },
    { icon: <FaInstagram size={28} />, href: 'https://www.instagram.com/gdg_vit/' },
  ];

  return (
    <footer className='bg-black text-white rounded-tr-[110px]'>
      <div className='container mx-auto py-10 px-4 md:px-8 lg:px-20'>

        {/* Social Icons Row */}
        <div className="flex justify-start items-center gap-4 mb-5 mt-5 text-pink-400 text-3xl">
          {socialIcons.map(({ icon, href }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-300 transition-colors duration-300"
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Copyright and Contact */}
        <p className="text-lg text-zinc-300 mb-2">
          Copyright © 2025 GDG VIT. Open Source.
        </p>

        <p className="flex items-center gap-2 text-pink-400 mb-2 text-lg">
          <MdEmail className="text-xl" />
          <a
            href="mailto:gdgoncampus.vit@gmail.com"
            className="hover:underline hover:text-pink-300"
          >
            gdgoncampus.vit@gmail.com
          </a>
        </p>

        {/* Location Info */}
        <p className="text-lg text-zinc-300 mb-2">
          GDG VIT operates from Vidyalankar Institute of Technology,
          <br />
          Wadala, Mumbai, Maharashtra, India.
        </p>

        {/* Star Us on GitHub */}
        <a
          href="https://github.com/GDGVITM"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-pink-400 text-lg mb-3 hover:underline hover:text-pink-300"
        >
          <FaStar className="text-pink-400" />
          Star us on GitHub
        </a>

        {/* Terminal Style Tagline */}
        <p className="text-lg text-zinc-400 italic font-mono">sudo rm -rf negativity/</p>
      </div>
    </footer>
  );
};

export default Footer;
