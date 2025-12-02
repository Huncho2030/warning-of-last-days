import React from 'react';
import heroImage from '../../assets/hero.jpg';

const SimpleButton = ({ children, className = '' }) => (
  <button
    className={`px-6 py-3 rounded-lg font-semibold transition duration-200 ease-in-out shadow-md ${className}`}
  >
    {children}
  </button>
);

const SimpleImage = ({ src, alt, className }) => (
  <img
    src={src}
    alt={alt}
    className={className}
    onError={(e) => {
      e.target.onerror = null; // prevents looping
      e.target.src = 'placeholder-image-url.jpg'; // Optional: add a generic placeholder image URL here
    }}
  />
);

export function Hero() {
  return (
    <section id="home" className="relative h-[600px] flex items-center">
      <div className="absolute inset-0">
        <SimpleImage
          src={heroImage}
          alt="Church worship"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl mb-6">Warning of Last Days</h1>
          <p className="text-xl mb-8 text-gray-100">
            A community of faith, hope, and love. Join us as we worship together
            and grow in Christ.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <SimpleButton className="bg-white text-blue-900 hover:bg-gray-100">
              Plan Your Visit
            </SimpleButton>
            <SimpleButton className="border-2 border-white bg-transparent text-white hover:bg-white/10">
              Watch Live
            </SimpleButton>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <div className="mb-2">Sabbath School</div>
              <div>Saturdays at 9:30 AM</div>
            </div>
            <div>
              <div className="mb-2">Divine Service</div>
              <div>Saturdays at 11:00 AM</div>
            </div>
            <div>
              <div className="mb-2">Prayer Meeting</div>
              <div>Wednesdays at 7:00 PM</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
