import { Link } from 'react-router-dom';
import { ArrowRight, Heart, BookOpen } from 'lucide-react';

export function IntroductionPreview() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-blue-900 mb-4">About Our Ministry</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border border-blue-100">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-blue-900 mb-3">Our History</h3>
              <p className="text-slate-600 leading-relaxed">
                Founded on the principles of health reform and biblical truth,
                our ministry has been dedicated to spreading the three angels&apos;
                messages and promoting natural healing methods for over a
                decade.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border border-blue-100">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-blue-900 mb-3">Our Aim</h3>
              <p className="text-slate-600 leading-relaxed">
                To educate and equip believers with present truth, natural
                remedies, and true Christian education, preparing them for the
                soon return of Jesus Christ.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/introduction"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
            >
              Read Full Introduction
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
