'use client';

import Navbar from '@/components/Navbar';

const Gallery = () => {
  return (
    <div>
      <Navbar />

      <section className="p-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-6 auto-rows-[150px] gap-4">
          {/* Bento Grid Items */}
          <div className="col-span-3 row-span-2">
            <img src="/placeholder.svg" alt="placeholder" className="w-full h-full object-cover rounded-xl" />
          </div>

          <div className="col-span-2 row-span-1">
            <img src="/placeholder.svg" alt="placeholder" className="w-full h-full object-cover rounded-xl" />
          </div>

          <div className="col-span-1 row-span-1">
            <img src="/placeholder.svg" alt="placeholder" className="w-full h-full object-cover rounded-xl" />
          </div>

          <div className="col-span-2 row-span-2">
            <img src="/placeholder.svg" alt="placeholder" className="w-full h-full object-cover rounded-xl" />
          </div>

          <div className="col-span-2 row-span-1">
            <img src="/placeholder.svg" alt="placeholder" className="w-full h-full object-cover rounded-xl" />
          </div>

          <div className="col-span-2 row-span-1">
            <img src="/placeholder.svg" alt="placeholder" className="w-full h-full object-cover rounded-xl" />
          </div>

          <div className="col-span-3 row-span-1">
            <img src="/placeholder.svg" alt="placeholder" className="w-full h-full object-cover rounded-xl" />
          </div>

          <div className="col-span-3 row-span-2">
            <img src="/placeholder.svg" alt="placeholder" className="w-full h-full object-cover rounded-xl" />
          </div>

          <div className="col-span-2 row-span-1">
            <img src="/placeholder.svg" alt="placeholder" className="w-full h-full object-cover rounded-xl" />
          </div>

          <div className="col-span-1 row-span-1">
            <img src="/placeholder.svg" alt="placeholder" className="w-full h-full object-cover rounded-xl" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;

