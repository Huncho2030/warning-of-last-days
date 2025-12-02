import { Link } from 'react-router-dom';
import { BookOpen, Users, Award, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function SchoolPreview() {
  const features = [
    {
      icon: BookOpen,
      title: 'Biblical Foundation',
      description: 'Christ-centered education with Bible as the core textbook',
    },
    {
      icon: Users,
      title: 'Small Classes',
      description: 'Individual attention and personalized learning',
    },
    {
      icon: Award,
      title: 'Character Development',
      description: 'Focus on spiritual growth and moral excellence',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-blue-900 mb-4">True Christian Education</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-400 mb-6"></div>
              <p className="text-slate-600 leading-relaxed mb-8">
                Our school provides education that develops the physical,
                mental, and spiritual faculties, preparing students not just for
                success in this life, but for eternal life. We follow biblical
                principles and the counsel found in the Spirit of Prophecy.
              </p>

              <div className="space-y-6 mb-8">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-slate-900 mb-1">{feature.title}</h3>
                        <p className="text-slate-600 text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-white/80 backdrop-blur-sm border border-amber-200 rounded-xl p-6 mb-6">
                <p className="text-slate-700">
                  <span className="text-amber-600">
                    "True education means more than the pursual of a certain
                    course of study. It means more than a preparation for the
                    life that now is. It has to do with the whole being, and
                    with the whole period of existence possible to man."
                  </span>
                  <span className="text-slate-500 text-sm block mt-2">
                    — Education, p. 13
                  </span>
                </p>
              </div>

              <Link
                to="/school"
                className="inline-flex items-center gap-2 bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition-colors"
              >
                Learn About Our School
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Image */}
            <div>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1655800466797-8ab2598b4274?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBjbGFzc3Jvb20lMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNTU4MjEyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="School classroom"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
