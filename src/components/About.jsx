import React from 'react';
import { Heart, Book, Users } from 'lucide-react';

// Simplified "ImageWithFallback" replacement using standard HTML
const SimpleImage = ({ src, alt, className }) => (
  <img src={src} alt={alt} className={className} />
);

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl mb-6 text-gray-900">About Our Ministry</h2>
            <p className="text-gray-600 mb-6">
              Warning of Last Days Ministry is a vibrant community of believers
              dedicated to sharing God&apos;s love and truth. We are part of the
              Seventh-day Adventist Church, a global movement committed to
              living out the teachings of Jesus Christ.
            </p>
            <p className="text-gray-600 mb-8">
              Our mission is to make disciples of all nations, helping people
              experience the joy of salvation and grow in their relationship
              with God. We believe in the power of community, worship, service,
              and biblical truth.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Heart className="text-blue-900" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-gray-900">Love & Compassion</h3>
                  <p className="text-gray-600">
                    We strive to reflect Christ&apos;s love in everything we do,
                    caring for our community and beyond.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Book className="text-blue-900" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-gray-900">Biblical Truth</h3>
                  <p className="text-gray-600">
                    We base our beliefs and practices on the Bible, God&apos;s
                    inspired word.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Users className="text-blue-900" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-gray-900">Community Focus</h3>
                  <p className="text-gray-600">
                    Together we grow stronger in faith, supporting and
                    encouraging one another.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <SimpleImage
              src="https://images.unsplash.com/photo-1760367121608-79219f1c9d2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwY29tbXVuaXR5JTIwcHJheWluZ3xlbnwxfHx8fDE3NjIwMjA0NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Church community"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
