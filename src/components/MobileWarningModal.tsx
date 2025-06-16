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
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm px-4">
      <div className="bg-white text-black rounded-xl shadow-lg p-6 max-w-sm text-center">
        <h2 className="text-xl font-bold mb-2">Notice for Mobile Users</h2>
        <p className="text-sm">
          This website is best viewed on a desktop or laptop.<br />
          Please switch to desktop mode for an optimal experience.
        </p>
        <button
          onClick={() => setShow(false)}
          className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
        >
          I Understand
        </button>
      </div>
    </div>
  );
};

export default MobileWarningModal;
