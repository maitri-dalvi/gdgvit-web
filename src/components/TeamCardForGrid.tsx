import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";

type Props = {
	img: string;
	title: string;
	subtitle?: string;
	i: number;
	github?: string;
	linkedin?: string;
	link?: string;
};

const TeamCardForGrid = ({
	img,
	title,
	subtitle,
	i,
	github,
	link,
	linkedin,
}: Props) => {
	// Random rotation for polaroid effect (-4 to 4 degrees)
	const rotation = ((i * 7) % 9) - 4;
	
	return (
		<motion.div
			initial={{ y: 40, opacity: 0, rotate: rotation + 6 }}
			whileInView={{ y: 0, opacity: 1, rotate: rotation }}
			transition={{ 
				duration: 0.6, 
				delay: i * 0.08,
				ease: [0.25, 0.46, 0.45, 0.94] // Custom smooth easing
			}}
			viewport={{ once: true }}
			whileHover={{ 
				scale: 1.08, 
				rotate: 0,
				zIndex: 20,
				y: -12,
				transition: { 
					duration: 0.3, 
					ease: [0.34, 1.56, 0.64, 1] // Smooth spring-like easing
				}
			}}
			style={{ rotate: rotation }}
			className="relative bg-white flex-col p-5 pb-6 m-2 lg:m-4 rounded-sm shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer min-w-[260px] max-w-[280px] will-change-transform"
		>
			{/* Polaroid tape effects */}
			<div className="absolute -top-1 left-4 w-12 h-6 bg-gradient-to-br from-yellow-50 to-yellow-100 opacity-80 rotate-3 rounded-sm shadow-sm z-10"></div>
			<div className="absolute -top-2 right-6 w-8 h-8 bg-gradient-to-br from-yellow-100 to-yellow-200 opacity-70 rotate-12 rounded-sm shadow-sm z-10"></div>
			
			{/* Photo container with polaroid styling */}
			<div className="relative w-full mb-4 bg-gray-50 p-2 rounded-sm">
				<div className="w-full aspect-square overflow-hidden rounded-sm bg-white shadow-inner">
					<Image
						src={img}
						sizes="100vw"
						width={280}
						height={280}
						className="w-full h-full object-cover object-center"
						alt={title}
					/>
				</div>
				
				{/* Photo corner curls */}
				<div className="absolute bottom-0 right-0 w-4 h-4 bg-white transform rotate-45 translate-x-2 translate-y-2 shadow-sm opacity-90"></div>
			</div>
			
			{/* Text content area */}
			<div className="flex-1 px-1">
				<h2 className="mb-1 font-sans text-lg font-bold text-gray-800 leading-tight">
					{title}
				</h2>
				{subtitle && (
					<h3 className="text-sm text-gray-600 mb-3 font-medium">
						{subtitle}
					</h3>
				)}
				
				{/* Social links */}
				<div className="flex gap-3 justify-end mt-auto">
					{link && (
						<motion.a 
							href={link} 
							target="_blank" 
							rel="noopener noreferrer"
							whileHover={{ scale: 1.2, rotate: 5 }}
							whileTap={{ scale: 0.9 }}
							transition={{ duration: 0.2, ease: "easeOut" }}
						>
							<FaGlobe className="text-lg text-gray-600 hover:text-blue-600 transition-colors duration-200" />
						</motion.a>
					)}
					{github && (
						<motion.a 
							href={github} 
							target="_blank" 
							rel="noopener noreferrer"
							whileHover={{ scale: 1.2, rotate: -5 }}
							whileTap={{ scale: 0.9 }}
							transition={{ duration: 0.2, ease: "easeOut" }}
						>
							<FaGithub className="text-lg text-gray-600 hover:text-gray-900 transition-colors duration-200" />
						</motion.a>
					)}
					{linkedin && (
						<motion.a 
							href={linkedin} 
							target="_blank" 
							rel="noopener noreferrer"
							whileHover={{ scale: 1.2, rotate: 5 }}
							whileTap={{ scale: 0.9 }}
							transition={{ duration: 0.2, ease: "easeOut" }}
						>
							<FaLinkedin className="text-lg text-gray-600 hover:text-blue-700 transition-colors duration-200" />
						</motion.a>
					)}
				</div>
			</div>
			
			{/* Subtle wear marks for authenticity */}
			<div className="absolute bottom-1 left-3 w-8 h-1 bg-gray-200 opacity-40 rounded-full"></div>
			<div className="absolute top-1/3 right-0 w-1 h-6 bg-gray-100 opacity-30 rounded-full"></div>
			
			{/* Inner border for depth */}
			<div className="absolute inset-1 border border-gray-100 rounded-sm pointer-events-none opacity-50"></div>
		</motion.div>
	);
};

export default TeamCardForGrid;