'use client';

import { useEffect, useState } from 'react';

const MobileWarningModal = ({ children }: { children?: React.ReactNode }) => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      const isMobileCheck = window.innerWidth < 768;
      setIsMobile(isMobileCheck);

      if (isMobileCheck) {
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
      } else {
        document.body.style.overflow = 'auto';
        document.body.style.position = 'static';
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.position = 'static';
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  if (isMobile === null) return null;

  if (isMobile) {
    return (
      <div className="fixed top-0 left-0 w-screen h-screen z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-md px-4 overflow-hidden">
        <div className="bg-white text-black rounded-xl shadow-2xl p-6 max-w-sm w-full text-center border border-primary">
          <h2 className="text-xl font-bold mb-3 text-purple-700">
            Mobile Viewing Restricted
          </h2>
          <p className="text-sm text-zinc-700">
            This website is not accessible on mobile devices for now. Please
            switch to a desktop or laptop for full functionality.
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default MobileWarningModal;
