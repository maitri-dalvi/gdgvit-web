'use client'
import { FaXTwitter, FaGithub, FaInstagram, FaYoutube, FaMedium, FaGoogle, FaLinkedinIn   } from "react-icons/fa6";


const Navbar = () => {
  const navItems = [
    "Spectrum",
    "Events",
    "Gallery",
    "Team",
    "Join Us",
  ]

  const socialIcons = [
    { icon: <FaGithub size={28} />, href: 'https://github.com/GDGVITM' },
    { icon: <FaGoogle  size={28} />, href: 'https://gdg.community.dev/gdg-on-campus-vidyalankar-institute-of-technology-mumbai-india/' },
    { icon: <FaXTwitter size={28} />, href: 'https://x.com/gdgvit' },
    { icon: <FaMedium size={28} />, href: 'https://medium.com/@gdgvit' },
    { icon: <FaYoutube size={28} />, href: 'http://www.youtube.com/@gdscvitmumbai5838' },
    { icon: <FaLinkedinIn  size={28} />, href: 'https://www.linkedin.com/company/google-developer-groups-vit-mumbai' },
    { icon: <FaInstagram size={28} />, href: 'https://www.instagram.com/gdg_vit/' },
  ]

  return (
    <nav className="w-full top-0 z-50 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
        <a href="/"
          className="flex items-center gap-2 text-purple-800 font-extrabold text-3xl tracking-tight mb-4 md:mb-0">gdg_vit</a>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-purple-700 text-sm font-medium hover:underline underline-offset-4 transition-all"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-6 mt-4 md:mt-0">
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
  )
}

export default Navbar
