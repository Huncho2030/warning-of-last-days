import { Link } from 'react-router-dom';
import { Heart, Leaf, Droplet, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function MedicalMissionaryPreview() {
  const remedies = [
    {
      icon: Leaf,
      title: 'Herbal Medicine',
      description: "Natural healing using God's pharmacy from nature",
    },
    {
      icon: Droplet,
      title: 'Hydrotherapy',
      description: 'Water treatments for various health conditions',
    },
    {
      icon: Heart,
      title: 'Lifestyle Medicine',
      description: 'Preventive health through proper living habits',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1707915317391-2d9e56a93541?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwcmVtZWRpZXMlMjBoZXJic3xlbnwxfHx8fDE3NjM1NTgyMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Natural remedies"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-blue-900 mb-4">Medical Missionary Work</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mb-6"></div>
              <p className="text-slate-600 leading-relaxed mb-8">
                Discover God's natural remedies for healing and health. We teach
                practical methods using herbs, water treatments, proper
                nutrition, and lifestyle changes based on biblical principles
                and the Spirit of Prophecy.
              </p>

              <div className="space-y-6 mb-8">
                {remedies.map((remedy, index) => {
                  const Icon = remedy.icon;
                  return (
                    <div key={index} className="flex gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-slate-900 mb-1">{remedy.title}</h3>
                        <p className="text-slate-600 text-sm">
                          {remedy.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <Link
                to="/medical-missionary"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                Learn More
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
