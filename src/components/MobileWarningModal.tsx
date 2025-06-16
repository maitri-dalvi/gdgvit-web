'use client';

import { useEffect, useState } from 'react';

const MobileWarningModal = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        setShow(true);
      }
    }
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
      <div className="bg-white text-black rounded-xl shadow-2xl p-6 max-w-sm w-full text-center border border-primary">
        <h2 className="text-xl font-bold mb-3 text-[hsl(var(--primary))]">
          Mobile Viewing Notice
        </h2>
        <p className="text-sm text-zinc-700">
          This website is best viewed on a desktop or laptop.<br />
          Some features may not appear correctly on mobile.
        </p>
        <button
          onClick={() => setShow(false)}
          className="mt-5 px-4 py-2 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] rounded-lg hover:bg-[hsl(var(--accent-2))] transition-colors"
        >
          I Understand
        </button>
      </div>
    </div>
  );
};

export default MobileWarningModal;
