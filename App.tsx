import React from 'react';
import { ApplicationLetter } from './components/ApplicationLetter';
import { RsvpForm } from './components/RsvpForm';
import { GuestList } from './components/GuestList';

const App: React.FC = () => {
  return (
    <div className="min-h-screen py-8 px-2 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Paper Container */}
        <div className="bg-panam-paper shadow-2xl rounded-sm overflow-hidden border-8 border-double border-stone-300 relative">
          
          {/* Decorative binding or tape effect */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-10 bg-panam-brick/20 rounded-b-xl blur-sm z-0"></div>
          
          {/* Corner Decorations (CSS shapes) */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-panam-brick/20"></div>
          <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-panam-brick/20"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-panam-brick/20"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-panam-brick/20"></div>

          <div className="p-6 sm:p-12 md:p-16 relative z-10">
            <ApplicationLetter />
            
            <div className="my-10 border-t-2 border-dashed border-gray-400"></div>
            
            <RsvpForm />
            
            <GuestList />
          </div>

          {/* Footer watermark-ish */}
          <div className="bg-[#f5efe6] p-4 text-center text-stone-500 text-xs font-bengali border-t border-stone-200">
            Developed by Mohiuddin for Panam City Tour 2025 | Old Dhaka Vibes
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;