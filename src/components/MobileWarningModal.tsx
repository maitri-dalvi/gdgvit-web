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
      } else {
        document.body.style.overflow = 'auto';
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  if (isMobile === null) return null;

  if (isMobile) {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-md px-4">
        <div className="bg-white rounded-xl shadow-2xl p-6 max-w-md w-full text-center">
          <h2 className="text-xl font-bold mb-3 text-[hsl(var(--primary))]">
            Mobile Viewing Restricted
          </h2>
          <p className="text-sm text-zinc-700 p-3">
            This website is not accessible on mobile devices for now. Please switch to a desktop or laptop for full functionality!
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default MobileWarningModal;
