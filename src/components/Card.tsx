import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Props {
    children: ReactNode;
    bg?: string;
    borderColor?: string;
    i: number;
}

const Card: FC<Props> = ({ children, bg, i, borderColor }) => {
    // Random rotation for polaroid effect (-5 to 5 degrees)
    const rotation = (i % 11) - 5;
    
    return (
        <motion.div
            initial={{ y: "100%", opacity: 0, rotate: rotation + 10 }}
            whileInView={{ y: 0, opacity: 1, rotate: rotation }}
            transition={{ 
                duration: 0.4, 
                delay: i * 0.1,
                type: "spring",
                stiffness: 100
            }}
            viewport={{ once: true }}
            whileHover={{ 
                scale: 1.05, 
                rotate: 0,
                zIndex: 10,
                transition: { duration: 0.2 }
            }}
            style={{ 
                backgroundColor: bg || "#FDFAF5",
                rotate: rotation
            }}
            className="relative flex-col flex p-6 pb-8 m-2 lg:m-4 min-w-[280px] w-[75vw] sm:max-w-[350px] lg:max-w-[280px] xl:max-w-[300px] bg-white rounded-sm shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        >
            {/* Polaroid tape effect at corners */}
            <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-br from-yellow-100 to-yellow-200 opacity-70 rotate-45 rounded-sm shadow-sm"></div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-yellow-100 to-yellow-200 opacity-70 rotate-12 rounded-sm shadow-sm"></div>
            
            {/* Subtle inner shadow for depth */}
            <div className="absolute inset-2 border border-gray-100 rounded-sm pointer-events-none"></div>
            
            {children}
            
            {/* Small shadow/wear marks for authenticity */}
            <div className="absolute bottom-2 right-4 w-12 h-1 bg-gray-100 opacity-50 rounded-full"></div>
        </motion.div>
    );
}

export default Card;