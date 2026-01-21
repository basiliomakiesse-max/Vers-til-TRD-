
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "w-32" }) => {
  return (
    <div className={`flex flex-col items-center justify-center text-center ${className}`}>
      {/* SVG Path extracted from visual reference */}
      <svg viewBox="0 0 100 100" className="w-full h-auto text-[#a3a3ff]" fill="currentColor">
        <path d="M50 20c-5.523 0-10 4.477-10 10 0 2.21.72 4.25 1.938 5.906l-4.438 12.875C35.85 52.41 38.62 57 43 57h14c4.38 0 7.15-4.59 5.5-8.22l-4.438-12.875C59.28 34.25 60 32.21 60 30c0-5.523-4.477-10-10-10zm0 4c3.314 0 6 2.686 6 6 0 1.344-.442 2.583-1.188 3.594l-.312-.125L50 45l-4.5-11.531-.312.125C44.442 32.583 44 31.344 44 30c0-3.314 2.686-6 6-6zm-6 35v2h12v-2H44zm2 4v2h8v-2h-8z" />
      </svg>
      <div className="mt-2 tracking-[0.2em]">
        <h1 className="text-2xl font-bold text-white uppercase flex items-center">
          VERS<span className="text-[#a3a3ff]">A</span>TIL
        </h1>
        <p className="text-[10px] text-right font-semibold text-white -mt-1 opacity-80">TRD</p>
      </div>
    </div>
  );
};

export default Logo;
