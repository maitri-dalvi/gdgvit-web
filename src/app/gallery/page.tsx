"use client";

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ImageData {
  size: string;
  src: string;
}

interface PlaceholderImageProps {
  size: string;
  src: string;
}

interface GridItemProps {
  colSpan: number;
  rowSpan: number;
  imageIndex: number;
}

interface MobileImageItemProps {
  imageIndex: number;
}

interface GridProps {
  startIndex?: number;
}

const Gallery = () => {
  const images: ImageData[] = [
    // First gallery grid images
    { size: "600x400", src: "/gallery/1.png" },
    { size: "300x400", src: "/gallery/2.jpg" },
    { size: "300x200", src: "/gallery/3.jpg" },
    { size: "300x200", src: "/gallery/4.jpg" },
    { size: "400x250", src: "/gallery/5.jpg" },
    { size: "400x250", src: "/gallery/6.jpg" },
    { size: "400x250", src: "/gallery/7.jpg" },
    { size: "300x250", src: "/gallery/8.jpg" },
    { size: "300x250", src: "/gallery/9.jpg" },
    { size: "600x250", src: "/gallery/10.jpg" },
    // Second gallery grid images
    { size: "600x400", src: "/gallery/11.jpg" },
    { size: "300x400", src: "/gallery/12.jpg" },
    { size: "300x200", src: "/gallery/13.jpg" },
    { size: "300x200", src: "/gallery/14.jpg" },
    { size: "400x250", src: "/gallery/15.jpg" },
    { size: "400x250", src: "/gallery/16.jpg" },
    { size: "400x250", src: "/gallery/17.jpg" },
    { size: "300x250", src: "/gallery/18.jpg" },
    { size: "300x250", src: "/gallery/19.jpg" },
    { size: "600x250", src: "/gallery/20.jpg" },
  ];

  const PlaceholderImage = ({ size, src }: PlaceholderImageProps) => {
    const [width, height] = size.split('x').map(Number);
    const aspectRatio = width / height;

    return (
      <div 
        className="w-full h-full relative overflow-hidden"
        style={{ aspectRatio: aspectRatio.toString() }}
      >
        <Image
          src={src}
          alt="Gallery item"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={false}
        />
      </div>
    );
  };

  const GridItem = ({ colSpan, rowSpan, imageIndex }: GridItemProps) => (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-sm ring-0"
      style={{
        gridColumn: `span ${colSpan}`,
        gridRow: `span ${rowSpan}`,
      }}
      whileInView={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0.95 }}
      whileHover={{ scale: 1.03 }}
      transition={{
        duration: 0.4,
        ease: 'easeOut',
        type: 'tween',
      }}
      viewport={{ once: true }}
    >
      <PlaceholderImage size={images[imageIndex].size} src={images[imageIndex].src} />
    </motion.div>
  );

  // Mobile Image Component (Square format)
  const MobileImageItem = ({ imageIndex }: MobileImageItemProps) => (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-sm ring-0 aspect-square"
      whileInView={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0.95 }}
      whileHover={{ scale: 1.03 }}
      transition={{
        duration: 0.4,
        ease: 'easeOut',
        type: 'tween',
      }}
      viewport={{ once: true }}
    >
      <div className="w-full h-full relative overflow-hidden">
        <Image
          src={images[imageIndex].src}
          alt="Gallery item"
          fill
          className="object-cover"
          sizes="100vw"
          priority={false}
        />
      </div>
    </motion.div>
  );

  // Desktop Bento Grid Layout
  const GalleryGrid = ({ startIndex = 0 }: GridProps) => (
    <div className="hidden lg:grid grid-cols-12 auto-rows-fr gap-5 min-h-[1000px]">
      <GridItem colSpan={6} rowSpan={4} imageIndex={startIndex + 0} />
      <GridItem colSpan={3} rowSpan={4} imageIndex={startIndex + 1} />
      <GridItem colSpan={3} rowSpan={2} imageIndex={startIndex + 2} />
      <GridItem colSpan={3} rowSpan={2} imageIndex={startIndex + 3} />
      <GridItem colSpan={4} rowSpan={3} imageIndex={startIndex + 4} />
      <GridItem colSpan={4} rowSpan={3} imageIndex={startIndex + 5} />
      <GridItem colSpan={4} rowSpan={3} imageIndex={startIndex + 6} />
      <GridItem colSpan={3} rowSpan={3} imageIndex={startIndex + 7} />
      <GridItem colSpan={3} rowSpan={3} imageIndex={startIndex + 8} />
      <GridItem colSpan={6} rowSpan={3} imageIndex={startIndex + 9} />
    </div>
  );

  // Tablet Grid Layout (2 columns)
  const TabletGrid = ({ startIndex = 0 }: GridProps) => (
    <div className="hidden md:grid lg:hidden grid-cols-2 gap-4">
      {Array.from({ length: 10 }, (_, i) => (
        <motion.div
          key={i}
          className="bg-white rounded-xl overflow-hidden shadow-sm ring-0 aspect-square"
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileHover={{ scale: 1.03 }}
          transition={{
            duration: 0.4,
            ease: 'easeOut',
            type: 'tween',
          }}
          viewport={{ once: true }}
        >
          <div className="w-full h-full relative overflow-hidden">
            <Image
              src={images[startIndex + i].src}
              alt="Gallery item"
              fill
              className="object-cover"
              sizes="50vw"
              priority={false}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );

  // Mobile Grid Layout (1 column)
  const MobileGrid = ({ startIndex = 0 }: GridProps) => (
    <div className="grid md:hidden grid-cols-1 gap-4">
      {Array.from({ length: 10 }, (_, i) => (
        <MobileImageItem key={i} imageIndex={startIndex + i} />
      ))}
    </div>
  );

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto p-3 sm:pt-11 pb-25">
        <div className="space-y-6 sm:space-y-8">
          {/* First Gallery Section */}
          <div>
            <GalleryGrid startIndex={0} />
            
            <TabletGrid startIndex={0} />
            
            <MobileGrid startIndex={0} />
          </div>

          {/* Second Gallery Section */}
          <div>
            <GalleryGrid startIndex={10} />
            
            <TabletGrid startIndex={10} />
            
            <MobileGrid startIndex={10} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;