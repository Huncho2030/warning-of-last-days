import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1749142711653-b65b4a113616?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjB3b3JzaGlwJTIwbGlnaHR8ZW58MXx8fHwxNzYzNTU4MjExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Church worship"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-white mb-6 max-w-4xl mx-auto">
          Warning of Last Days Ministry
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Spreading Truth, Health, and Education Through God's Word
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/studies"
            className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Watch Studies
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/introduction"
            className="inline-flex items-center justify-center gap-2 bg-blue-800 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors border border-blue-700"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
